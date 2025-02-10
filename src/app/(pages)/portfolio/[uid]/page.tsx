import { asImageSrc, isFilled } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicText } from "@prismicio/react";
import { Metadata } from "next";
import { notFound } from "next/navigation";

import Similar from "@/app/components/pages/portfolio/Similar";
import { createClient } from "@/prismicio";
type Params = { uid: string };

export default async function Page({ params }: { params: Promise<Params> }) {
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

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { uid } = await params;
  const client = createClient();
  const page = await client.getByUID("case", uid).catch(() => notFound());

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
    openGraph: {
      title: isFilled.keyText(page.data.meta_title) ? page.data.meta_title : undefined,
      description: isFilled.keyText(page.data.meta_description) ? page.data.meta_description : undefined,
      images: isFilled.image(page.data.meta_image) ? [asImageSrc(page.data.meta_image)] : undefined,
    },
  };
}

export async function generateStaticParams() {
  const client = createClient();
  const pages = await client.getAllByType("case");

  return pages.map((page) => {
    return { uid: page.uid };
  });
}
