import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useLinks } from "./useLinks";

function Footer() {
  const { socialLinks } = useLinks();
  return (
    <footer className="flex flex-col my-10">
      <div className="flex flex-col sm:flex-row sm:justify-between lg:items-center">
        <Image
          src="/imgs/roundPhoto.png"
          alt="Photo de Delphine"
          width={200}
          height={200}
          className="hidden lg:block lg:ml-10 lg:my-10 2xl:ml-20"
        />
        <div className="flex flex-col m-5 sm:flex-row">
          <div className="ml-5">
            <h3 className="font-serif underline text-xl">Où me trouver ?</h3>
            <div className="flex flex-col font-sans my-6 sm:w-5/6">
              <span>Cabinet médical le Vento</span>
              <span>387 Avenue de Plan de Campagne</span>
              <span>13170 Les Pennes-Mirabeau</span>
              <span>Numéros de téléphone</span>
              <span>Courriel</span>
            </div>
          </div>
          <div className="ml-5 sm:ml-2 2xl:ml-40">
            <h3 className="font-serif underline text-xl">Liens utiles</h3>
            <div className="flex flex-col font-sans my-4 md:w-3/4">
              <Link href="/">Mentions légales</Link>
              <Link href="/">Confidentialité</Link>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-between mx-auto my-10 items-center w-1/2 sm:w-1/4 sm:mx-0 md:w-1/4 lg:mr-5 lg:w-1/5 xl:w-1/6 2xl:mr-10 2xl:justify-center">
          {socialLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="scale-on-hover sm:mx-2 md:mx-4"
            >
              {link.src ? (
                <Image src={link.src} alt={link.name} width={40} height={40} />
              ) : null}
            </Link>
          ))}
        </div>
      </div>
      <p className="text-sm mt-auto self-center">
        Crée par CreaNumerik04. Tous droits réservés.
      </p>
    </footer>
  );
}

export default Footer;

