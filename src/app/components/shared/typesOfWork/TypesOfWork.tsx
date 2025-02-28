import { PrismicNextImage } from "@prismicio/next";
import Link from "next/link";

import { createClient } from "@/prismicio";

const TypesOfWork = async () => {
  const client = createClient();
  const application = await client.getSingle("typesofwork");
  const { data } = application;
  const { title, list, arrow } = data;

  return (
    <section className='m-auto mt-96 lg:mt-20'>
      <h2 className='text-sm text-[#1E1E1E]'>{title}</h2>
      <ul className='mt-5 flex flex-wrap items-center justify-center gap-2.5 lg:gap-y-7'>
        {list.map((item, i) => (
          <li key={i} className='max-w-[370px] rounded-xl'>
            <Link href={`/?filter=${item.text}`} className='group relative flex items-center justify-center'>
              <div className='absolute right-6 top-6 rounded-full bg-white p-2.5 opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                <PrismicNextImage className='invert' field={arrow} alt='' loading='lazy' aria-hidden='true' />
              </div>
              <div className='flex items-center justify-center overflow-hidden rounded-xl lg:max-h-40'>
                <PrismicNextImage field={item.image} className='rounded-xl' alt='' loading='lazy' aria-hidden='true' />
              </div>
              <span className='absolute rounded-xl bg-white px-2.5 py-1 text-sm'>{item.text}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default TypesOfWork;
