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
    name: "Modalités et Tarifs",
    href: "/Modalites",
  },
  /*   {
    name: "Blog",
    href: "/",
  }, */
];

export type SocialLinks = {
  name: string;
  href: string;
  src: string;
  alt: string;
};

export const socialLinksData: SocialLinks[] = [
  {
    name: "Doctolib",
    href: "https://www.doctolib.fr/psychologue/les-pennes-mirabeau/delphine-ceccoli",
    src: "/icons/Doctolib.svg",
    alt: "Lien vers Doctolib",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/delphine-ceccoli/?originalSubdomain=fr",
    src: "/icons/Linkedin.svg",
    alt: "Lien vers Linkedin",
  },
  {
    name: "Mail",
    href: "/Contact",
    src: "/icons/Mail.svg",
    alt: "Lien vers Mail",
  },
];

