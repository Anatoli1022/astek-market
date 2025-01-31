"use client";
import { Content, FilledLinkToWebField, LinkField } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import { usePathname } from "next/navigation";

// Type guard to check if the link is a FilledLinkToWebField (which has a `url`)
function isFilledLinkToWebField(link: LinkField): link is FilledLinkToWebField {
  return (link as FilledLinkToWebField).url !== undefined;
}

const ListNavigation = ({ navigation }: { navigation: Content.NavigationDocument }): JSX.Element => {
  const { data } = navigation;
  const pathname = usePathname();

  return (
    <ul className='flex items-center gap-x-12'>
      {data.list.map((item, i) => {
        const { link } = item;

        // Check if the link is a FilledLinkToWebField
        if (isFilledLinkToWebField(link)) {
          const { url } = link; // Now we can safely access `url`

          return (
            <li key={i}>
              <PrismicNextLink
                field={link}
                className={`transition ${pathname === `${url}` ? "opacity-100" : "opacity-30"}`}
              >
                {link.text}
              </PrismicNextLink>
            </li>
          );
        }

        // Handle other types of links (e.g., document links) or return null
        return null;
      })}
    </ul>
  );
};

export default ListNavigation;
