import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useLinks } from "./useLinks";

function Footer() {
  const { socialLinks } = useLinks();
  return (
    <footer className="flex flex-col my-10">
      <div className="flex flex-col sm:flex-row sm:justify-between lg:items-center">
        <div className="hidden lg:w-[10%] lg:overflow-hidden lg:inline lg:ml-10 lg:my-10 2xl:ml-20 rounded-full shadowCustom">
          <Image
            src="/imgs/footerImg.png"
            alt="Photo de la salle d'attente du cabinet."
            width={500}
            height={500}
            className="object-cover w-full"
            onContextMenu={(e: React.MouseEvent) => e.preventDefault()}
          />
        </div>
        <div className="ml-5 flex flex-col">
          <h3 className="font-serif underline text-xl">Où me trouver ?</h3>
          <div className="flex flex-col font-sans my-6 space-y-2">
            <p>Cabinet médical le Vento</p>
            <p>387 Avenue de Plan de Campagne</p>
            <p>13170 Les Pennes-Mirabeau</p>
            <p>
              <strong>Téléphone:</strong> 07 69 41 65 15
            </p>
            <p>
              <strong>Mail:</strong> delphine.ceccoli@laposte.net
            </p>
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
                <Image
                  src={link.src}
                  alt={link.name}
                  width={40}
                  height={40}
                  onContextMenu={(e: React.MouseEvent) => e.preventDefault()}
                />
              ) : null}
            </Link>
          ))}
        </div>
      </div>
      <p className="text-sm mt-20 self-center">
        Crée par CreaNumerik04. Tous droits réservés.
      </p>
    </footer>
  );
}

export default Footer;

