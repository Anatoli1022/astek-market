// import TypesOfServices from "@/app/components/shared/typesOfServices/TypesOfServices";

// const page = () => {
//   return (
//     <>
//       <TypesOfServices />

//     </>
//   );
// };

// export default page;

import { SliceZone } from "@prismicio/react";
import { Metadata } from "next";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import Cases from "@/app/components/pages/portfolio/Cases";

export default async function Page() {
  const client = createClient();
  const page = await client.getSingle("portfolio");

  return (
    <>
      <Cases />
      <SliceZone slices={page.data.slices} components={components} />
    </>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client.getSingle("portfolio");

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}
