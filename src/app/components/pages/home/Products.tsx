"use client";

import { Content } from "@prismicio/client";
import { useEffect, useState } from "react";

import { createClient } from "@/prismicio";

import { ProductCard } from "./ProductCard";
// import Pagination from "./Pagination";
// import Skeleton from "./Skeleton";

const Products = () => {
  const client = createClient();
  const [posts, setPosts] = useState<Content.ProductDocument[]>([]);
  const [tags, setTags] = useState<string[]>([]); // Состояние для тегов
  const [selectedTags, setSelectedTags] = useState<string[]>([]); // Состояние для выбранных тегов
  // const [totalPages, setTotalPages] = useState<number>(1);
  // const [thisPage, setThisPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await client.getByType("product", {
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
  const filteredPosts = selectedTags.length
    ? posts.filter((post) => selectedTags.every((tag) => post.tags?.includes(tag)))
    : posts;

  // Обработчик для выбора тегов
  const handleTagClick = (tag: string) => {
    setSelectedTags(
      (prevTags) =>
        prevTags.includes(tag)
          ? prevTags.filter((t) => t !== tag) // Убираем тег из выбранных
          : [...prevTags, tag], // Добавляем тег в выбранные
    );
  };

  return (
    <section className='mt-16'>
      {/* Отображаем кнопки для фильтрации по тегам */}
      <div className='mb-8 flex flex-wrap gap-2'>
        {tags.map((tag) => (
          <button
            key={tag}
            className={`rounded-md border px-4 py-2 ${selectedTags.includes(tag) ? "bg-blue-500 text-white" : "bg-white"}`}
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
          filteredPosts.map((post) => <ProductCard key={post.id} post={post} />)
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

export default Products;

export async function generateStaticParams() {
  const client = createClient();

  const pages = await client.getAllByType("product");

  return pages.map((page) => {
    return { uid: page.uid };
  });
}
