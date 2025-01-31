import * as prismic from "@prismicio/client";
import {
  // PrismicNextImage,
  PrismicNextLink,
} from "@prismicio/next";

import Application from "@/app/components/shared/application/Application";
import TypesOfWork from "@/app/components/shared/typesOfWork/TypesOfWork";
// import { PrismicText } from "@prismicio/react";
// import { Metadata } from "next";
// import { notFound } from "next/navigation";
import { createClient } from "@/prismicio";
// import { SliceZone } from "@prismicio/react";
// import { components } from "@/slices";
// import { revalidatePath } from "next/cache";

type Params = { uid: string };

// export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
//   const client = createClient();
//   const { uid } = await params;
//   // Здесь нужно убедиться, что параметры обрабатываются правильно.
//   const page = await client.getByUID("category", uid).catch(() => notFound());

//   return {
//     title: prismic.asText(page.data.title),
//     description: page.data.meta_description,
//     openGraph: {
//       title: page.data.meta_title || undefined,
//       images: [
//         {
//           url: page.data.meta_image.url || "",
//         },
//       ],
//     },
//   };
// }

export default async function Page({ params }: { params: Promise<Params> }) {
  // const revalidate = async (url: string) => {
  //   // Mark this as async
  //   "use server";
  //   await revalidatePath(url, "page"); // Ensure revalidatePath is awaited
  // };

  const { uid } = await params;
  const client = createClient();

  const category = await client.getByUID("category", uid);
  // console.log(category);
  // console.log(await params);
  const product = await client.getAllByType("product", {
    filters: [
      prismic.filter.at("my.product.link", category.id), // Фильтрация по UID категории
    ],
  });

  // console.log(product);

  return (
    <section>
      <ul className='flex flex-col'>
        {product.map((item, i) => (
          <PrismicNextLink key={i} document={item}>
            {item.data.text}
          </PrismicNextLink>
        ))}
      </ul>
      <TypesOfWork />
      <Application />
    </section>
  );
}

// export async function generateStaticParams() {
//   const client = createClient();

//   const pages = await client.getAllByType("product");

//   return pages.map((page) => {
//     return { uid: page.uid };
//   });
// }
