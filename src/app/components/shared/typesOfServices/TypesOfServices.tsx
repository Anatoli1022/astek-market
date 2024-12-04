import Image from "next/image";
import Link from "next/link";

import arrow from "@/app/assets/arrow.svg";

import { data } from "./data";

const TypesOfServices = () => {
  return (
    <div className='m-auto mt-96'>
      <span className='text-[#1E1E1E] opacity-30'>Виды работ</span>
      <ul className='flex flex-wrap items-center justify-center gap-2.5'>
        {data.map((item, i) => (
          <li key={i} className='rounded-xl'>
            <Link href={item.link} className='group relative flex items-center justify-center'>
              <div className='absolute right-7 top-7 rounded-full bg-white p-2.5 opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                <Image src={arrow} alt='' loading='lazy' aria-hidden='true' />
              </div>
              <Image className='rounded-xl' src={item.image} alt='' loading='lazy' aria-hidden='true' />
              <span className='absolute rounded-xl bg-white px-2.5 py-1 text-sm'>{item.text}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TypesOfServices;
