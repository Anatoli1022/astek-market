import * as prismic from "@prismicio/client";
import {
  PrismicNextImage,
  // , PrismicNextLink
} from "@prismicio/next";
import { PrismicText } from "@prismicio/react";
import { Metadata } from "next";
import { notFound } from "next/navigation";

import Similar from "@/app/components/pages/portfolio/Similar";
import { createClient } from "@/prismicio";
// import { SliceZone } from "@prismicio/react";
// import { components } from "@/slices";
// import { revalidatePath } from "next/cache";

type Params = { uid: string };

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const client = createClient();
  const { uid } = await params;
  // Здесь нужно убедиться, что параметры обрабатываются правильно.
  const page = await client.getByUID("case", uid).catch(() => notFound());

  return {
    title: prismic.asText(page.data.title),
    description: page.data.meta_description,
    openGraph: {
      title: page.data.meta_title || undefined,
      images: [
        {
          url: page.data.meta_image.url || "",
        },
      ],
    },
  };
}

export default async function Page({ params }: { params: Promise<Params> }) {
  // const revalidate = async (url: string) => {
  //   // Mark this as async
  //   "use server";
  //   await revalidatePath(url, "page"); // Ensure revalidatePath is awaited
  // };

  const { uid } = await params;
  const client = createClient();
  const page = await client.getByUID("case", uid).catch(() => notFound());
  const { data, tags } = await page;

  return (
    <section>
      <h1 className='text-6xl'>
        <PrismicText field={data.title} />
      </h1>

      <ul className='mt-8 flex justify-between gap-x-5 font-normal'>
        {data.list.map((item, i) => (
          <li key={i}>
            <h2 className='text-sm opacity-30'>
              <PrismicText field={item.list_title} />
            </h2>
            <p className='max-w-96'>
              <PrismicText field={item.list_text} />
            </p>
          </li>
        ))}
      </ul>

      <ul className='mt-5 flex flex-wrap gap-x-2.5 gap-y-5'>
        {data.list_images.map((item, i) => (
          <li key={i}>
            <PrismicNextImage field={item.image} alt='' loading='eager' className='rounded-2xl' />
          </li>
        ))}
      </ul>
      {tags.length > 0 && <Similar currentTags={tags} />}
    </section>
  );
}
