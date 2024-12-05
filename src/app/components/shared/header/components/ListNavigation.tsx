"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
const ListNavigation = () => {
  const pathname = usePathname();

  console.log(pathname);

  return (
    <ul className='flex w-full max-w-lg items-center gap-x-12'>
      <li>
        <Link
          href='/aboutCompany'
          className={`transition ${pathname === "/aboutCompany" ? "opacity-100" : "opacity-30"} `}
        >
          О компании
        </Link>
      </li>
      <li>
        <Link href='/portfolio' className={`transition ${pathname === "/portfolio" ? "opacity-100" : "opacity-30"} `}>
          Портфолио
        </Link>
      </li>
      <li>
        <Link href='/services' className={`transition ${pathname === "/services" ? "opacity-100" : "opacity-30"} `}>
          Услуги
        </Link>
      </li>
      <li>
        <Link href='/contacts' className={`transition ${pathname === "/contacts" ? "opacity-100" : "opacity-30"} `}>
          Контакты
        </Link>
      </li>
    </ul>
  );
};

export default ListNavigation;
