"use client";
import { PrismicNextLink } from "@prismicio/next";
import { usePathname } from "next/navigation";

const ListNavigation = ({ data }) => {
  const pathname = usePathname();

  return (
    <ul className='flex w-full max-w-lg items-center gap-x-12'>
      {data.map((item) => {
        const { link } = item;

        return (
          <li key={link.key}>
            <PrismicNextLink
              field={link}
              className={`transition ${pathname === `/${link.slug}` ? "opacity-100" : "opacity-30"}`}
            >
              {link.text}
            </PrismicNextLink>
          </li>
        );
      })}
    </ul>
  );
};

export default ListNavigation;
