export type Links = {
  name: string;
  href: string;
};

export const headerLinks: Links[] = [
  {
    name: "Accueil",
    href: "/",
  },
  {
    name: "A propos",
    href: "/About",
  },
  {
    name: "Ma pratique",
    href: "/Practice",
  },
  {
    name: "Blog",
    href: "/",
  },
];

export type SocialLinks = {
  name: string;
  href: string;
  src: string;
};

export const socialLinksData: SocialLinks[] = [
  {
    name: "Doctolib",
    href: "https://www.doctolib.fr/psychologue/les-pennes-mirabeau/delphine-ceccoli",
    src: "/icons/Doctolib.svg",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/delphine-ceccoli/?originalSubdomain=fr",
    src: "/icons/Linkedin.svg",
  },
  {
    name: "Mail",
    href: "/",
    src: "/icons/Mail.svg",
  },
];

