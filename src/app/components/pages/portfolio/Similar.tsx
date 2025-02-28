// "use client";
// import { Content } from "@prismicio/client";
import * as prismic from "@prismicio/client";

// import { useEffect, useState } from "react";
import { createClient } from "@/prismicio";

import { CaseCard } from "./CaseCard";
// import Skeleton from "./Skeleton";

const Similar = async ({ currentTags }: { currentTags: string[] }) => {
  const client = createClient();
  // const [posts, setPosts] = useState<Content.CaseDocument[]>([]);
  // const [loading, setLoading] = useState<boolean>(true);

  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     try {
  //       const response = await client.getByType("case", {
  //         fetchOptions: {
  //           next: { revalidate: 3600 },
  //         },
  //         pageSize: 2,
  //         filters: [prismic.filter.at("document.tags", currentTags)],
  //       });
  //       setPosts(response.results);
  //     } catch (error) {
  //       console.error("Error fetching posts:", error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   if (currentTags.length > 0) {
  //     fetchPosts();
  //   }
  // }, [currentTags, client]);

  const response = await client.getByType("case", {
    fetchOptions: {
      next: { revalidate: 3600 },
    },
    pageSize: 2,
    filters: [prismic.filter.at("document.tags", currentTags)],
  });

  return (
    <section className='mt-52 lg:mt-32'>
      {/* {loading ? (
        // <Skeleton />
        <>Загрузка...</>
      ) : (
        
      )} */}
      <p className='hidden md:block'>Похожие кейсы</p>
      <ul className='grid grid-cols-2 gap-2.5 md:mt-5 md:grid-cols-1'>
        {response.results.map((post) => (
          <li key={post.id}>
            <CaseCard post={post} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Similar;
