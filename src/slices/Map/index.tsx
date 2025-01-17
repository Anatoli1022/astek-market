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
  const { map, adress, text, mail, text_mail, green_arrow, text_problem, link_phone, text_phone, time_work } =
    slice.primary;

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className='mt-16 flex justify-between gap-x-3'
    >
      <div>
        {map && (
          <div>
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
                width='925'
                height='850'
                frameBorder='1'
                allowFullScreen={true}
                className='relative'
              ></iframe>
            </div>
          </div>
        )}
      </div>

      <div className='max-w-4xl'>
        <p className='text-5xl font-medium opacity-30'>{adress}</p>
        <p className='text-5xl font-medium'>{text}</p>
        <PrismicNextLink field={mail} className='text-5xl font-medium text-[#43A149]'>
          <span>{text_mail}</span>
          <PrismicNextImage field={green_arrow} className='inline' loading='eager' fallbackAlt='' aria-hidden='true' />
        </PrismicNextLink>
        <div>
          <p className='text-5xl font-medium'>
            {text_problem}{" "}
            <PrismicNextLink field={link_phone} className='text-5xl font-medium text-[#43A149]'>
              <span>{text_phone}</span>
              <PrismicNextImage
                field={green_arrow}
                className='inline'
                loading='eager'
                fallbackAlt=''
                aria-hidden='true'
              />
            </PrismicNextLink>
          </p>
        </div>
        <p className='mt-6 text-2xl font-medium'>{time_work}</p>
      </div>
    </section>
  );
};

export default Map;
