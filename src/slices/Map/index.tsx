import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";
/**
 * Props for `Map`.
 */
export type MapProps = SliceComponentProps<Content.MapSlice>;

/**
 * Component for "Map" Slices.
 */
const Map = ({ slice }: MapProps): JSX.Element => {
  const {
    map,
    adress,
    text,
    mail,
    text_mail,
    green_arrow,
    text_problem,
    link_phone,
    text_phone,
    time_work,
    firm,
    number,
  } = slice.primary;

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className='flex justify-between gap-x-4 lg:flex-col-reverse lg:items-center lg:gap-y-10'
    >
      {map && (
        <div className='relative'>
          <a
            href={`https://yandex.by/maps/62/krasnoyarsk/?utm_medium=mapframe&utm_source=maps`}
            style={{ color: "#eee", fontSize: "12px", position: "absolute", top: "0px" }}
          >
            Красноярск
          </a>
          <a
            href={`https://yandex.by/maps/62/krasnoyarsk/house/ulitsa_akademika_vavilova_1s10/bUsYfwZlSU0CQFtvfXV4c35iYg==/inside/?ll=${map.longitude}%2C${map.latitude}&tab=inside&utm_medium=mapframe&utm_source=maps&z=16.2`}
            style={{ color: "#eee", fontSize: "12px", position: "absolute", top: "14px" }}
          >
            Улица Академика Вавилова, 1с10 — Яндекс Карты
          </a>
          <iframe
            src={`https://yandex.by/map-widget/v1/?ll=${map.longitude}%2C${map.latitude}&mode=whatshere&tab=inside&whatshere%5Bpoint%5D=${map.longitude}%2C${map.latitude}&whatshere%5Bzoom%5D=17&z=16.2`}
            frameBorder='1'
            allowFullScreen={true}
            className='relative h-[750px] w-[825px] md:!h-[350px] md:!w-[350px] xl:h-[450px] xl:w-[525px]'
          ></iframe>
          <div className='mt-4 hidden lg:flex lg:flex-col lg:items-center lg:justify-center'>
            <p className='text-lg'>{firm}</p>
            <p className='mt-1 text-lg'>{number}</p>
          </div>
        </div>
      )}

      <div className='flex max-w-4xl flex-col justify-between lg:max-w-xl'>
        <div>
          <p className='text-5xl xl:text-3xl'>{adress}</p>
          <p className='hidden lg:mt-4 lg:block'>{time_work}</p>
          <p className='text-5xl lg:mt-10 lg:!text-base lg:opacity-30 xl:text-2xl'>{text}</p>
          <PrismicNextLink
            field={mail}
            className='mt-1 flex gap-x-2 text-5xl text-standartGreen lg:m-auto lg:mt-3 lg:max-w-96 lg:justify-center lg:rounded-3xl lg:bg-standartGreen lg:px-6 lg:py-3 lg:text-white xl:text-2xl'
          >
            <span className='lg:text-lg'>{text_mail}</span>
            <PrismicNextImage
              field={green_arrow}
              className='inline lg:hidden xl:max-w-3'
              loading='eager'
              fallbackAlt=''
              aria-hidden='true'
            />
          </PrismicNextLink>
          <div>
            <p className='text-5xl lg:mt-6 lg:!text-base lg:opacity-30 xl:text-2xl'>{text_problem}</p>
            <PrismicNextLink
              field={link_phone}
              className='mt-1 flex gap-x-2 text-5xl text-standartGreen lg:m-auto lg:mt-3 lg:max-w-96 lg:justify-center lg:rounded-3xl lg:bg-standartGreen lg:px-6 lg:py-3 lg:text-white xl:text-2xl'
            >
              <span className='lg:text-lg'>{text_phone}</span>
              <PrismicNextImage
                field={green_arrow}
                className='inline lg:hidden xl:max-w-3'
                loading='eager'
                fallbackAlt=''
                aria-hidden='true'
              />
            </PrismicNextLink>
          </div>
          <p className='mt-6 text-2xl lg:hidden xl:text-xl'>{time_work}</p>
        </div>
        <div className='lg:hidden'>
          <p className='text-2xl opacity-30 xl:text-xl'>{firm}</p>
          <p className='text-2xl opacity-30 xl:text-xl'>{number}</p>
        </div>
      </div>
    </section>
  );
};

export default Map;
