"use client";
import { Content } from "@prismicio/client";
import Image from "next/image";
import { useEffect, useState } from "react";

import plus from "@/app/assets/plus.svg";
import { createClient } from "@/prismicio";

import { CaseCard } from "./CaseCard";

const Cases = () => {
  const [posts, setPosts] = useState<Content.CaseDocument[]>([]); // Стейт для хранения товаров
  const [nextPage, setNextPage] = useState<string | null>(null); // Стейт для хранения информации о следующей странице

  // Загружаем данные при монтировании компонента
  useEffect(() => {
    const fetchInitialData = async () => {
      const client = createClient();
      const response = await client.getByType("case", {
        fetchOptions: {
          next: { revalidate: 3600 },
        },
        pageSize: 2, // Количество товаров на странице изменить на 8
        page: 1, // Начальная страница
      });

      setPosts(response.results);
      setNextPage(response.next_page); // Устанавливаем ссылку на следующую страницу
    };

    fetchInitialData();
  }, []);

  // Функция для подгрузки дополнительных товаров
  const loadMorePosts = async () => {
    if (!nextPage) return;

    const nextResponse = await fetch(nextPage);
    const nextData = await nextResponse.json();

    setPosts((prevPosts) => [...prevPosts, ...nextData.results]);
    setNextPage(nextData.next_page); // Обновляем ссылку на следующую страницу
  };

  return (
    <section className='mt-16 md:mt-12'>
      <ul className='grid grid-cols-2 gap-2.5 md:grid-cols-1 md:gap-5'>
        {posts.map((post) => (
          <li key={post.id}>
            <CaseCard post={post} />
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

export default Cases;
