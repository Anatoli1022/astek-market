import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicText } from "@prismicio/react";

import { createClient } from "@/prismicio";

const Application = async () => {
  const client = createClient();
  const application = await client.getSingle("aplication");
  const { data } = application;
  const { image_arrow, text, title, image, app_store_link, google_play_store, mobileimage } = data;
  return (
    <section className='relative mt-28 lg:mt-20'>
      <div className='absolute left-16 top-16 max-w-[340px] md:left-5 md:top-5'>
        <h2 className='text-4xl text-white md:text-3xl'>
          <PrismicText field={title} />
        </h2>
        <p className='mt-2.5 text-sm text-white md:text-base'>
          <PrismicText field={text} />
        </p>
        <div className='mt-5 flex gap-x-5 gap-y-2 sm:max-w-44 sm:flex-col'>
          <PrismicNextLink
            field={app_store_link}
            className='flex items-center gap-x-2.5 rounded-md bg-black px-8 py-2.5 text-white sm:justify-center'
          >
            <span className='text-sm'>App Store</span>
            <PrismicNextImage field={image_arrow} loading='lazy' alt='' aria-hidden='true' />
          </PrismicNextLink>
          <PrismicNextLink
            field={google_play_store}
            className='flex items-center gap-x-2.5 rounded-md bg-black px-8 py-2.5 text-white sm:justify-center'
          >
            <span className='text-sm'>Google Play</span>
            <PrismicNextImage field={image_arrow} loading='lazy' alt='' aria-hidden='true' />
          </PrismicNextLink>
        </div>
      </div>
      <PrismicNextImage
        className='w-full rounded-2xl md:hidden'
        field={image}
        loading='lazy'
        alt=''
        aria-hidden='true'
      />
      <PrismicNextImage
        className='hidden w-full rounded-xl md:block'
        field={mobileimage}
        loading='lazy'
        alt=''
        aria-hidden='true'
      />
    </section>
  );
};

export default Application;
