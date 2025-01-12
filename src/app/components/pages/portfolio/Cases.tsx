"use client";
import { createClient } from "@/prismicio";
import { useEffect, useState } from "react";
import { CaseCard } from "./CaseCard";
// import Pagination from "./Pagination";
// import Skeleton from "./Skeleton";

const Cases = () => {
  const client = createClient();
  const [posts, setPosts] = useState<any[]>([]);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [thisPage, setThisPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await client.getByType("case", {
          orderings: [
            { field: "my.blog_post.publication_date", direction: "desc" },
            { field: "document.first_publication_date", direction: "desc" },
          ],
          fetchOptions: {
            next: { revalidate: 3600 },
          },
          pageSize: 8,
          page: thisPage,
        });
        setPosts(response.results);
        setTotalPages(response.total_pages);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [thisPage]);

  //   const handlePreviousPage = () => {
  //     if (thisPage > 1) {
  //       setThisPage((prevState) => prevState - 1);
  //     }
  //   };

  //   const handleNextPage = () => {
  //     if (thisPage < totalPages) {
  //       setThisPage((prevState) => prevState + 1);
  //     }
  //   };


  return (
    <section className='mt-16 grid grid-cols-2 gap-2.5'>
      {(loading && (
        <>
          {/* <Skeleton />
          <Skeleton />
          <Skeleton /> */}
        </>
      )) || (
        <>
          {posts.map((post) => (
            <CaseCard key={post.id} post={post} />
          ))}
        </>
      )}
      {/* <Pagination
        handlePreviousPage={handlePreviousPage}
        thisPage={thisPage}
        totalPages={totalPages}
        handleNextPage={handleNextPage}
      /> */}
    </section>
  );
};

export default Cases;

export async function generateStaticParams() {
  const client = createClient();

  const pages = await client.getAllByType("case");

  return pages.map((page) => {
    return { uid: page.uid };
  });
}
