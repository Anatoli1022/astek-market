import { SliceZone } from "@prismicio/react";
import { Metadata } from "next";

import Application from "@/app/components/shared/application/Application";
import TypesOfWork from "@/app/components/shared/typesOfWork/TypesOfWork";
import { createClient } from "@/prismicio";
import { components } from "@/slices";

export default async function Page() {
  const client = createClient();
  const page = await client.getSingle("aboutcompany");

  return (
    <>
      <SliceZone slices={page.data.slices} components={components} /> <TypesOfWork />
      <Application />
    </>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client.getSingle("aboutcompany");

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}
