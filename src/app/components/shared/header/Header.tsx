import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import Image from "next/image";

import line from "@/app/assets/lineHeader.svg";
import shopping from "@/app/assets/shopping.svg";
import { createServerUser } from "@/app/utils/supabase/server";
import { createClient } from "@/prismicio";

import Modal from "../modal/Modal";
import ListNavigation from "./components/ListNavigation";

const Header = async () => {
  const client = createClient();
  const navigation = await client.getSingle("navigation");
  const { data } = navigation;

  // Проверяем сессию пользователя на сервере

  const supabase = await createServerUser();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <header className='fixed top-0 z-10 w-full bg-[#F8F8F8] px-5 pt-7'>
      <div className='relative pb-4'>
        <Image src={line} alt='' className='absolute bottom-0 w-full' loading='eager' aria-hidden='true' />
        <nav className='flex justify-between'>
          <PrismicNextLink field={data.logolink} className='flex items-center gap-x-5'>
            <PrismicNextImage field={data.logo} alt='' loading='eager' aria-hidden='true' />
            <span className='text-2xl'>{data.logolink.text}</span>
          </PrismicNextLink>
          <ListNavigation navigation={navigation} />

          <div className='flex items-center gap-x-2.5'>
            <button className='rounded-md bg-white p-2.5 shadow-md'>
              <Image src={shopping} alt='' loading='eager' aria-hidden='true' />
            </button>
            {/* Передаем данные пользователя в модальное окно */}
            <Modal user={user} />
          </div>
        </nav>{" "}
      </div>
    </header>
  );
};

export default Header;
