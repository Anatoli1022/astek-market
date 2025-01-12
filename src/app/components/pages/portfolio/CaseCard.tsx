import { PrismicNextImage } from "@prismicio/next";
import { PrismicText } from "@prismicio/react";
import { PrismicNextLink } from "@prismicio/next";
import { Content } from "@prismicio/client";
import arrowGray from "@/app/assets/arrow-gray.svg";
import Image from "next/image";

export const CaseCard = ({ post }: { post: Content.CaseDocument }): JSX.Element => {
  const { data } = post;
  return (
    <PrismicNextLink document={post}>
      <div className='relative'>
        <div className='absolute left-10 top-10 flex gap-x-2.5'>
          {post.tags.map((tag) => (
            <span className='rounded-3xl bg-white px-2.5 py-1 text-sm'>{tag}</span>
          ))}
        </div>
        <div className='absolute right-10 top-10 rounded-full bg-white p-2.5'>
          <Image src={arrowGray} alt='' loading='eager' aria-hidden='true' />
        </div>
        <PrismicNextImage
          field={data.main_image}
          sizes='100vw'
          className='w-full rounded-2xl object-cover'
          fallbackAlt=''
          loading='eager'
          priority
        />
      </div>
    </PrismicNextLink>
  );
};
