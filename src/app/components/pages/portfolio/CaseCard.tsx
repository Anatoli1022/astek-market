import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicNextLink } from "@prismicio/next";
import Image from "next/image";

import arrowGray from "@/app/assets/arrow-gray.svg";

export const CaseCard = ({ post }: { post: Content.CaseDocument }): JSX.Element => {
  const { data } = post;

  return (
    <PrismicNextLink document={post} className='group relative'>
      <div className='absolute left-10 top-10 flex gap-x-2.5'>
        {post.tags.map((tag, i) => (
          <span key={i} className='rounded-3xl bg-white px-2.5 py-1 text-sm font-normal'>
            {tag}
          </span>
        ))}
      </div>
      <div className='absolute right-10 top-10 rounded-full bg-white p-2.5 opacity-0 transition-all group-hover:opacity-100'>
        <Image src={arrowGray} alt='' loading='eager' aria-hidden='true' />
      </div>
      <PrismicNextImage field={data.main_image} className='w-full rounded-2xl object-cover' alt='' loading='lazy' />
    </PrismicNextLink>
  );
};
