// // "use client";
// //import { Content } from "@prismicio/client";
// //import { useEffect, useState } from "react";

// import { createClient } from "@/prismicio";

// import { CaseCard } from "./CaseCard";
// import { PrismicLink } from "@prismicio/react";
// import { PrismicNextLink } from "@prismicio/next";
// // import Pagination from "./Pagination";
// // import Skeleton from "./Skeleton";

// const Cases = async () => {
//   const client = createClient();
//   // const [posts, setPosts] = useState<Content.CaseDocument[]>([]);
//   // const [totalPages, setTotalPages] = useState<number>(1);
//   // const [thisPage, setThisPage] = useState<number>(1);
//   //const [loading, setLoading] = useState<boolean>(true);

//   // useEffect(
//   //   () => {
//   //     const fetchPosts = async () => {
//   //       try {
//   //         const response = await client.getByType("case", {
//   //           // orderings: [
//   //           //   { field: "my.case.publication_date", direction: "desc" },
//   //           //   { field: "document.first_publication_date", direction: "desc" },
//   //           // ],
//   //           fetchOptions: {
//   //             next: { revalidate: 3600 },
//   //           },
//   //           pageSize: 8,
//   //           // page: thisPage,
//   //         });
//   //         setPosts(response.results);
//   //         // setTotalPages(response.total_pages);
//   //       } catch (error) {
//   //         console.error("Error fetching posts:", error);
//   //       } finally {
//   //         setLoading(false);
//   //       }
//   //     };

//   //     fetchPosts();
//   //   },
//   //   // [
//   //   //   thisPage
//   //   // ],
//   // );

//   //   const handlePreviousPage = () => {
//   //     if (thisPage > 1) {
//   //       setThisPage((prevState) => prevState - 1);
//   //     }
//   //   };

//   //   const handleNextPage = () => {
//   //     if (thisPage < totalPages) {
//   //       setThisPage((prevState) => prevState + 1);
//   //     }
//   //   };

//   const response = await client.getByType("case", {
//     // orderings: [
//     //   { field: "my.case.publication_date", direction: "desc" },
//     //   { field: "document.first_publication_date", direction: "desc" },
//     // ],
//     fetchOptions: {
//       next: { revalidate: 3600 },
//     },
//     pageSize: 1,
//     // page: 1,
//   });

//   console.log(response);

//   return (
//     <section className='mt-16'>
//       <ul className='grid grid-cols-2 gap-2.5'>
//         {response.results.map((post) => (
//           <CaseCard key={post.id} post={post} />
//         ))}
//       </ul>
//       {/* <Pagination
//         handlePreviousPage={handlePreviousPage}
//         thisPage={thisPage}
//         totalPages={totalPages}
//         handleNextPage={handleNextPage}
//       /> */}
//       {response.next_page && <a href={response.next_page}>af</a>}
//       <button></button>
//     </section>
//   );
// };

// export default Cases;

// export async function generateStaticParams() {
//   const client = createClient();

//   const pages = await client.getAllByType("case");

//   return pages.map((page) => {
//     return { uid: page.uid };
//   });
// }

"use client"; // Указывает, что компонент является клиентским
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
        pageSize: 1, // Количество товаров на странице
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
    <section className='mt-16'>
      <ul className='grid grid-cols-2 gap-2.5'>
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

// export async function generateStaticParams() {
//   const client = createClient();

//   const pages = await client.getAllByType("case");

//   return pages.map((page) => {
//     return { uid: page.uid };
//   });
// }
