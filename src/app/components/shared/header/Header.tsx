import Image from "next/image";
import Link from "next/link";

import line from "@/app/assets/lineHeader.svg";
import logo from "@/app/assets/logo.svg";
import shopping from "@/app/assets/shopping.svg";
import user from "@/app/assets/user.svg";
const Header = () => {
  return (
    <header className='px-5 pt-7'>
      <div className='relative pb-4'>
        <Image src={line} alt='' className='absolute bottom-0 w-full' loading='eager' aria-hidden='true' />
        <nav className='flex justify-between'>
          <Link href='/' className='flex items-center gap-x-5'>
            <Image src={logo} alt='' loading='eager' aria-hidden='true' />
            <span className='text-2xl'>Astek</span>
          </Link>
          <ul className='flex w-full max-w-lg items-center gap-x-12'>
            <li>
              <Link href='/aboutCompany' className='opacity-30'>
                О компании
              </Link>
            </li>
            <li>
              <Link href='/portfolio' className='opacity-30'>
                Портфолио
              </Link>
            </li>
            <li>
              <Link href='/services' className='opacity-30'>
                Услуги
              </Link>
            </li>
            <li>
              <Link href='/contacts' className='opacity-30'>
                Контакты
              </Link>
            </li>
          </ul>
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
