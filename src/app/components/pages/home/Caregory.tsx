"use client";
import * as prismic from "@prismicio/client";
import { Content } from "@prismicio/client";
import Image from "next/image";
import { useEffect, useState } from "react";

import plus from "@/app/assets/plus.svg";
import { createClient } from "@/prismicio";

import { CategoryCard } from "./CategoryCard";

const Category = () => {
  const client = createClient();
  const [posts, setPosts] = useState<Content.CategoryDocument[]>([]); // Состояние для документа типа category
  const [tags, setTags] = useState<Content.FilterDocument[]>([]); // Состояние для документа типа filter
  const [selectedTags, setSelectedTags] = useState<string | null>();
  const [nextPage, setNextPage] = useState<string | null>(null);

  // Загружаем товары при монтировании компонента
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await client.getByType("category", {
          fetchOptions: {
            next: { revalidate: 3600 },
          },
          pageSize: 2,
        });

        const filter = await client.getByType("filter");
        setPosts(response.results);
        setNextPage(response.next_page);

        setTags(filter.results);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  // Функция для фильтрации товаров по тегу
  const handleTagClick = async (tag: string | null) => {
    setSelectedTags(() => tag); // Обновляем выбранный тег
    if (tag) {
      const filteredPosts = await client.getAllByType("category", {
        filters: [
          prismic.filter.at("my.category.chapter", tag), // Фильтрация по chapter категории
        ],
      });
      setPosts(filteredPosts);
      setNextPage(null); // В данном запросе "новые" страницы отсутствуют, поэтому обнуляем
    } else {
      // Загружаем все посты, если фильтр не выбран
      const response = await client.getByType("category", { pageSize: 2 });
      setPosts(response.results); // Устанавливаем все посты
      setNextPage(response.next_page); // Обновляем ссылку на следующую страницу, по скольку в данном запросе это значение есть
    }
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
          className={`rounded-full px-4 py-2 ${
            !selectedTags ? "bg-standartGreen text-white" : "border border-black/20 bg-inherit"
          }`}
          onClick={() => handleTagClick(null)}
        >
          Все
        </button>
        {tags[0] &&
          tags[0].data &&
          tags[0].data.list &&
          tags[0].data.list.map((tag, i) => (
            <button
              key={i}
              className={`rounded-full px-4 py-2 ${
                selectedTags === tag.item ? "bg-standartGreen text-white" : "border border-black/20 bg-inherit"
              }`}
              onClick={() => handleTagClick(tag.item)}
            >
              {tag.item}
            </button>
          ))}
      </div>

      <ul className='grid grid-cols-2 gap-2.5'>
        {posts &&
          posts.map((post) => (
            <li key={post.id}>
              <CategoryCard post={post} />
            </li>
          ))}
      </ul>

      {nextPage && (
        <div className='mt-10 text-center'>
          <button onClick={loadMorePosts} className='rounded border p-2.5 shadow-lg'>
            <Image src={plus} alt='Load more' loading='lazy' aria-hidden='true' />
          </button>
        </div>
      )}
    </section>
  );
};

export default Category;
