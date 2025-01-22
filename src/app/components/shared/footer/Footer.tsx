import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import Image from "next/image";

import line from "@/app/assets/line.svg";
import { createClient } from "@/prismicio";

const Footer = async () => {
  const client = createClient();
  const footer = await client.getSingle("footer");
  const { data } = footer;
  const { list_apps, list_contacts, list_customer_information, list_social, logo, logo_text } = data;
  return (
    <footer className='mt-16 bg-[#C1C1C1] px-8 pb-8 pt-16'>
      <div className='rounded-2xl border border-[#ffffff33] bg-[#2626264d] p-7'>
        <div className='flex max-w-[1700px] justify-between'>
          <div className='flex items-center gap-x-5'>
            <PrismicNextImage field={logo} className='invert' alt='' loading='lazy' aria-hidden='true' />
            <span className='text-2xl text-white'>{logo_text}</span>
          </div>
          <div className='flex w-full max-w-[702px] justify-between'>
            <ul>
              <li>
                <h3 className='text-xs text-white/30'>Клиентская информация</h3>
              </li>

              {list_customer_information.map((item, i) => (
                <li key={i}>
                  <PrismicNextLink className='text-xs text-white' field={item.customer_information_link} />
                </li>
              ))}
            </ul>

            <ul>
              <li>
                <h3 className='text-xs text-white/30'>Контакты</h3>
              </li>

              {list_contacts.map((item, i) => (
                <li key={i}>
                  <PrismicNextLink className='text-xs text-white' field={item.link_contacts} />
                </li>
              ))}
            </ul>
            <ul>
              <li>
                <h3 className='text-xs text-white/30'>Приложение</h3>
              </li>
              {list_apps.map((item, i) => (
                <li key={i}>
                  <PrismicNextLink className='text-xs text-white' field={item.link_app} />
                </li>
              ))}
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

            <ul className='flex items-center gap-x-3'>
              {list_social.map((item, i) => (
                <li key={i}>
                  <PrismicNextLink field={item.link_social}>
                    <PrismicNextImage alt='' loading='lazy' field={item.logo_social} />
                  </PrismicNextLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
