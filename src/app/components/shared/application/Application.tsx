import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicText } from "@prismicio/react";

import { createClient } from "@/prismicio";

const Application = async () => {
  const client = createClient();
  const application = await client.getSingle("aplication");
  const { data } = application;
  const { image_arrow, text, title, image, app_store_link, google_play_store } = data;
  return (
    <section className='relative mt-28'>
      <div className='absolute left-16 top-16 max-w-[340px]'>
        <h2 className='text-4xl text-white'>
          <PrismicText field={title} />
        </h2>
        <p className='mt-2.5 text-sm text-white'>
          <PrismicText field={text} />
        </p>
        <div className='mt-5 flex gap-x-5'>
          <PrismicNextLink
            field={app_store_link}
            className='flex items-center gap-x-2.5 rounded-md bg-black px-8 py-2.5 text-white'
          >
            <span className='text-sm'>App Store</span>
            <PrismicNextImage field={image_arrow} loading='lazy' alt='' aria-hidden='true' />
          </PrismicNextLink>
          <PrismicNextLink
            field={google_play_store}
            className='flex items-center gap-x-2.5 rounded-md bg-black px-8 py-2.5 text-white'
          >
            <span className='text-sm'>Google Play</span>
            <PrismicNextImage field={image_arrow} loading='lazy' alt='' aria-hidden='true' />
          </PrismicNextLink>
        </div>
      </div>

      <PrismicNextImage className='w-full rounded-2xl' field={image} loading='lazy' alt='' aria-hidden='true' />
    </section>
  );
};

export default Application;
