import { SliceZone } from "@prismicio/react";
import { Metadata } from "next";

import Application from "@/app/components/shared/application/Application";
import { createClient } from "@/prismicio";
import { components } from "@/slices";

export default async function Page() {
  const client = createClient();
  const page = await client.getSingle("home");

  return (
    <>
      <SliceZone slices={page.data.slices} components={components} /> <Application />
    </>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client.getSingle("home");

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}
