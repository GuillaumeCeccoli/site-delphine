import { headerLinks, socialLinksData } from "../../data/links";

export type Link = {
  name: string;
  href: string;
  src?: string;
  alt: string;
};
export function useLinks() {
  const links = headerLinks as Link[];
  const socialLinks = socialLinksData as Link[];
  return { links, socialLinks };
}

