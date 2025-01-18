"use client";
import { Content } from "@prismicio/client";
import * as prismic from "@prismicio/client";
import { useEffect, useState } from "react";

import { createClient } from "@/prismicio";

import { CaseCard } from "./CaseCard";
// import Skeleton from "./Skeleton";

const Similar = ({ currentTags }: { currentTags: string[] }) => {
  const client = createClient();
  const [posts, setPosts] = useState<Content.CaseDocument[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await client.getByType("case", {
          fetchOptions: {
            next: { revalidate: 3600 },
          },
          pageSize: 2,
          filters: [prismic.filter.at("document.tags", currentTags)],
        });
        setPosts(response.results);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };

    if (currentTags.length > 0) {
      fetchPosts();
    }
  }, [currentTags, client]);

  return (
    <section className='mt-52 grid grid-cols-2 gap-2.5'>
      {loading ? (
        // <Skeleton />
        <>Загрузка...</>
      ) : (
        <>
          {posts.map((post) => (
            <CaseCard key={post.id} post={post} />
          ))}
        </>
      )}
    </section>
  );
};

export default Similar;
