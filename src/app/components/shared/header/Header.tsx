import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import Image from "next/image";

import line from "@/app/assets/lineHeader.svg";
import shopping from "@/app/assets/shopping.svg";
import user from "@/app/assets/user.svg";
import { createClient } from "@/prismicio";

import ListNavigation from "./components/ListNavigation";

const Header = async () => {
  const client = createClient();
  const navigation = await client.getSingle("navigation");
  const { data } = navigation;

  return (
    <header className='px-5 pt-7'>
      <div className='relative pb-4'>
        <Image src={line} alt='' className='absolute bottom-0 w-full' loading='eager' aria-hidden='true' />
        <nav className='flex justify-between'>
          <PrismicNextLink field={data.logolink} className='flex items-center gap-x-5'>
            <PrismicNextImage field={data.logo} alt='' loading='eager' aria-hidden='true' />
            <span className='text-2xl'>{data.logolink.text}</span>
          </PrismicNextLink>
          <ListNavigation data={data.list} />
          <div className='flex items-center gap-x-2.5'>
            <span className='text-xs text-black/30'>Красноярск</span>
            <button className='rounded-md bg-white p-2.5 shadow-md'>
              <Image src={shopping} alt='' loading='eager' aria-hidden='true' />
            </button>
            <button className='rounded-md bg-white p-2.5 shadow-md'>
              <Image src={user} alt='' loading='eager' aria-hidden='true' />
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
