"use client";

import { Content } from "@prismicio/client";
import Image from "next/image";
import { useEffect, useState } from "react";

import plus from "@/app/assets/plus.svg";
import { createClient } from "@/prismicio";

import { CategoryCard } from "./CategoryCard";

const Category = () => {
  const client = createClient();
  const [posts, setPosts] = useState<Content.CategoryDocument[]>([]);
  const [tags, setTags] = useState<string[]>([]); // Состояние для тегов
  const [selectedTags, setSelectedTags] = useState<string | boolean>(); // Состояние для выбранных тегов
  const [nextPage, setNextPage] = useState<string | null>(null);
  // const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await client.getByType("category", {
          // orderings: [
          //   { field: "my.case.publication_date", direction: "desc" },
          //   { field: "document.first_publication_date", direction: "desc" },
          // ],
          fetchOptions: {
            next: { revalidate: 3600 },
          },
          pageSize: 2,
        });

        const tags = await client.getTags();
        setPosts(response.results);
        setNextPage(response.next_page);

        setTags(tags);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
      // finally {
      //   setLoading(false);
      // }
    };

    fetchPosts();
  }, []);

  // Фильтрация продуктов по выбранным тегам
  const filteredPosts = selectedTags ? posts.filter((post) => post.tags.includes(selectedTags as string)) : posts;

  // Обработчик для выбора тегов
  const handleTagClick = (tag: string | boolean) => {
    setSelectedTags(tag);
  };

  // Функция для подгрузки дополнительных товаров
  const loadMorePosts = async () => {
    if (!nextPage) return;

    const nextResponse = await fetch(nextPage);
    const nextData = await nextResponse.json();

    setPosts((prevPosts) => [...prevPosts, ...nextData.results]);
    setNextPage(nextData.next_page); // Обновляем ссылку на следующую страницу
  };

  return (
    <section className='mt-16'>
      {/* Отображаем кнопки для фильтрации по тегам */}
      <div className='mb-8 flex flex-wrap gap-2'>
        <button
          className={`rounded-full px-4 py-2 ${!selectedTags ? "bg-standartGreen text-white" : "border border-black/20 bg-inherit"}`}
          onClick={() => handleTagClick(false)}
        >
          Все
        </button>
        {tags.map((tag) => (
          <button
            key={tag}
            className={`rounded-full px-4 py-2 ${selectedTags === tag ? "bg-standartGreen text-white" : "border border-black/20 bg-inherit"}`}
            onClick={() => handleTagClick(tag)}
          >
            {tag}
          </button>
        ))}
      </div>

      <ul className='grid grid-cols-2 gap-2.5'>
        {filteredPosts.map((post) => (
          <li key={post.id}>
            <CategoryCard post={post} />
          </li>
        ))}
      </ul>

      {nextPage && (
        <div className='mt-10 text-center'>
          <button onClick={loadMorePosts} className='rounded border p-2.5 shadow-lg'>
            <Image src={plus} alt='' loading='lazy' aria-hidden='true' />
          </button>
        </div>
      )}
    </section>
  );
};

export default Category;
