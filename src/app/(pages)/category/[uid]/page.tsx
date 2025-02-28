import * as prismic from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import Image from "next/image";

import arrow from "@/app/assets/ArrowUDownRight.svg";
import Application from "@/app/components/shared/application/Application";
import TypesOfWork from "@/app/components/shared/typesOfWork/TypesOfWork";
import { createClient } from "@/prismicio";
type Params = { uid: string };

export default async function Page({ params }: { params: Promise<Params> }) {
  const { uid } = await params;
  const client = createClient();

  const category = await client.getByUID("category", uid);
  const { text, name } = category.data;
  const product = await client.getAllByType("product", {
    filters: [
      prismic.filter.at("my.product.link", category.id), // Фильтрация по UID категории
    ],
  });

  return (
    <section>
      <h1 className='text-6xl'>{name}</h1>
      <p>{text}</p>
      <ul className='mt-10 grid grid-cols-2 gap-5 xl:grid-cols-1'>
        {product.map((item, i) => {
          const { image, title, list_information } = item.data;
          return (
            <li key={i} className='flex justify-between gap-x-2.5 rounded-md shadow-[0px_0px_6px_0px_rgba(0,0,0,0.25)]'>
              <div className='flex w-full max-w-[460px] flex-col justify-between p-6'>
                <div>
                  <h2 className='text-xl font-bold'>{title}</h2>
                  <ul className='mt-2.5 list-disc pl-6'>
                    {list_information.map((itemInfo, x) => (
                      <li key={x}>{itemInfo.text}</li>
                    ))}
                  </ul>
                </div>

                <PrismicNextLink
                  document={item}
                  className='flex items-center justify-center gap-x-2.5 rounded-md bg-black px-8 py-2.5 text-white lg:mt-6 lg:max-w-72 xl:px-2'
                >
                  <span className='text-sm'>Рассчитать стоимость</span>
                  <Image src={arrow} loading='eager' alt='' aria-hidden='true' />
                </PrismicNextLink>
              </div>

              <PrismicNextImage field={image} alt='' loading='eager' className='w-full max-w-[410px] rounded-2xl' />
            </li>
          );
        })}
      </ul>
      <TypesOfWork />
      <Application />
    </section>
  );
}
