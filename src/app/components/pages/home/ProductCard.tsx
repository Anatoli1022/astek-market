import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicNextLink } from "@prismicio/next";
// import Image from "next/image";

// import arrow from "@/app/assets/arrow.svg";

export const ProductCard = ({ post }: { post: Content.ProductDocument }): JSX.Element => {
  const { data } = post;
  return (
    <PrismicNextLink document={post}>
      <div className='relative'>
        <div className='absolute left-10 top-10 flex gap-x-2.5'>
          {post.tags.map((tag, i) => (
            <span key={i} className='rounded-3xl bg-white px-2.5 py-1 text-sm font-normal'>
              {tag}
            </span>
          ))}
        </div>
        {/* <div className='absolute right-10 top-10 rounded-full bg-white p-2.5'>
          <Image src={arrow} alt='' loading='eager' aria-hidden='true' />
        </div> */}
        <PrismicNextImage
          field={data.product_image}
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
