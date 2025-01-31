import { SliceZone } from "@prismicio/react";
import { PrismicText } from "@prismicio/react";
import { Metadata } from "next";

import Cases from "@/app/components/pages/portfolio/Cases";
import Application from "@/app/components/shared/application/Application";
import TypesOfWork from "@/app/components/shared/typesOfWork/TypesOfWork";
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
      <TypesOfWork />
      <Application />
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
