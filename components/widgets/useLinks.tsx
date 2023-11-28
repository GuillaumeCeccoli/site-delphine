import linksData from "@/data/links.json";
import socialLinksData from "@/data/socialLinks.json";

export type Link = {
  name: string;
  href: string;
  src?: string;
};
export function useLinks() {
  const links = linksData as Link[];
  const socialLinks = socialLinksData as Link[];
  return { links, socialLinks };
}

