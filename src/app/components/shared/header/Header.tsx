import Image from "next/image";
import Link from "next/link";

import line from "@/app/assets/lineHeader.svg";
import logo from "@/app/assets/logo.svg";
import shopping from "@/app/assets/shopping.svg";
import user from "@/app/assets/user.svg";

import ListNavigation from "./components/ListNavigation";

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
          <ListNavigation />
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
