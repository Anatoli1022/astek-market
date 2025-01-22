import Image from "next/image";
import Link from "next/link";

import line from "@/app/assets/line.svg";
import logo from "@/app/assets/logo.svg";
// import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
// import { createClient } from "@/prismicio";

const Footer = async () => {
  // const client = createClient();
  // const footer = await client.getSingle("footer");
  // const { data } = footer;
  // console.log(data);

  return (
    <footer className='mt-16 bg-[#C1C1C1] px-8 pb-8 pt-16'>
      <div className='rounded-2xl border border-[#ffffff33] bg-[#2626264d] p-7'>
        <div className='flex max-w-[1700px] justify-between'>
          <div className='flex items-center gap-x-5'>
            <Image src={logo} className='invert' alt='' loading='lazy' aria-hidden='true' />
            <span className='text-2xl text-white'>Astek</span>
          </div>
          <div className='flex w-full max-w-[702px] justify-between'>
            <ul>
              <li>
                <h3 className='text-xs text-white/30'>Клиентская информация</h3>
              </li>
              <li>
                <Link href='/' className='text-xs text-white'>
                  Политика конфиденциальности
                </Link>
              </li>
              <li>
                <Link href='/' className='text-xs text-white'>
                  Условия пользования
                </Link>
              </li>
              <li>
                <Link href='/' className='text-xs text-white'>
                  Договор оферты
                </Link>
              </li>
              <li>
                <Link href='/' className='text-xs text-white'>
                  Гарантия
                </Link>
              </li>
            </ul>

            <ul>
              <li>
                <h3 className='text-xs text-white/30'>Контакты</h3>
              </li>
              <li>
                <a href='tel:8 (391) 226-66-30' className='text-xs text-white'>
                  8 (391) 226-66-30
                </a>
              </li>
              <li>
                <a href='mailto:info@astek24.ru' className='text-xs text-white'>
                  info@astek24.ru
                </a>
              </li>
              <li>
                <a href='https://astek24.ru/' target='_blank' className='text-xs text-white'>
                  www.astek24.ru
                </a>
              </li>
            </ul>
            <ul>
              <li>
                <h3 className='text-xs text-white/30'>Приложение</h3>
              </li>
              <li>
                <a href='' className='text-xs text-white'>
                  Google play
                </a>
              </li>
              <li>
                <a href='' className='text-xs text-white'>
                  App Store
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className='relative mt-44 pt-8'>
          <Image src={line} alt='' className='absolute top-0 w-full' loading='lazy' aria-hidden='true' />
          <div className='flex items-center justify-between'>
            <p className='text-xs text-white'>Ⓒ 2024 by CycleDev, все права защищены</p>
            <div className='flex w-full max-w-lg justify-between'>
              <span className='text-xs text-white'>Красноярск. Ул. Вавилова </span>
              <span className='text-xs text-white'>ИНН 28418 617 5913</span>
            </div>
            <div className='flex items-center gap-x-5'>
              <span className='text-xs text-white/30'>Соц сети</span>
              <div className='flex gap-x-3'>
                <a href='' className='block h-[28px] w-[28px] rounded-full bg-white'></a>
                <a href='' className='block h-[28px] w-[28px] rounded-full bg-white'></a>
                <a href='' className='block h-[28px] w-[28px] rounded-full bg-white'></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
