"use client";

import { Content } from "@prismicio/client";
import { useEffect, useState } from "react";

import { createClient } from "@/prismicio";

import { CategoryCard } from "./CategoryCard";
// import Pagination from "./Pagination";
// import Skeleton from "./Skeleton";

const Category = () => {
  const client = createClient();
  const [posts, setPosts] = useState<Content.CategoryDocument[]>([]);
  const [tags, setTags] = useState<string[]>([]); // Состояние для тегов
  const [selectedTags, setSelectedTags] = useState<string | boolean>(); // Состояние для выбранных тегов
  // const [totalPages, setTotalPages] = useState<number>(1);
  // const [thisPage, setThisPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);

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
          pageSize: 8, // page: thisPage,
        });

        setPosts(response.results);
        // setTotalPages(response.total_pages);
        // Получаем уникальные теги из всех продуктов
        const allTags = response.results.reduce((acc: string[], product) => {
          if (product.tags) {
            product.tags.forEach((tag: string) => {
              if (!acc.includes(tag)) {
                acc.push(tag);
              }
            });
          }
          return acc;
        }, []);
        setTags(allTags);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  // Фильтрация продуктов по выбранным тегам
  const filteredPosts = selectedTags ? posts.filter((post) => post.tags.includes(selectedTags as string)) : posts;

  // Обработчик для выбора тегов
  const handleTagClick = (tag: string | boolean) => {
    setSelectedTags(tag);
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

      <div className='grid grid-cols-3 gap-2.5'>
        {loading ? (
          <>
            {/* <Skeleton /> */}
            {/* <Skeleton /> */}
            {/* <Skeleton /> */}
          </>
        ) : (
          filteredPosts.map((post) => <CategoryCard key={post.id} post={post} />)
        )}
      </div>

      {/* <Pagination
        handlePreviousPage={handlePreviousPage}
        thisPage={thisPage}
        totalPages={totalPages}
        handleNextPage={handleNextPage}
      /> */}
    </section>
  );
};

export default Category;
