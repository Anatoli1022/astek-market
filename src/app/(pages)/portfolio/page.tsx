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
import { PrismicText } from "@prismicio/react";
import { Metadata } from "next";

import Cases from "@/app/components/pages/portfolio/Cases";
import { createClient } from "@/prismicio";
import { components } from "@/slices";

export default async function Page() {
  const client = createClient();
  const page = await client.getSingle("portfolio");

  return (
    <div>
      <h1 className='max-w-4xl text-6xl'>
        <PrismicText field={page.data.title} />
      </h1>
      <Cases />
      <SliceZone slices={page.data.slices} components={components} />
    </div>
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
