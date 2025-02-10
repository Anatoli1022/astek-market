import * as prismic from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";

import Application from "@/app/components/shared/application/Application";
import TypesOfWork from "@/app/components/shared/typesOfWork/TypesOfWork";
import { createClient } from "@/prismicio";

type Params = { uid: string };

export default async function Page({ params }: { params: Promise<Params> }) {
  const { uid } = await params;
  const client = createClient();

  const category = await client.getByUID("category", uid);

  const product = await client.getAllByType("product", {
    filters: [
      prismic.filter.at("my.product.link", category.id), // Фильтрация по UID категории
    ],
  });

  return (
    <section>
      <ul className='flex flex-col'>
        {product.map((item, i) => (
          <li key={i}>
            <PrismicNextLink document={item} className='relative'>
              <p className='absolute bottom-2 left-2 z-10 text-white'>{item.data.title}</p>
              <PrismicNextImage field={item.data.image} alt='' loading='eager' className='max-w-96 rounded-2xl' />
            </PrismicNextLink>
          </li>
        ))}
      </ul>
      <TypesOfWork />
      <Application />
    </section>
  );
}
