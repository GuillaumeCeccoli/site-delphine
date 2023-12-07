import React from "react";
import Image from "next/image";

export default function Approach() {
  return (
    <section className="w-full relative backgroundPink flex flex-col items-center justify-center xl:flex-row xl:justify-around overflow-hidden">
      <Image
        src="/imgs/roundPhoto.png"
        alt="Une photo"
        width={300}
        height={300}
        className="flex flex-col my-10 xl:flex mx-20 xl:flex-shrink-0 xl:mt-10 2xl:ml-40"
      />
      <div className="flex flex-col items-center 2xl:items-start 2xl:mx-20">
        <h2 className="underline font-serif text-2xl my-10 md:text-3xl xl:mr-80 2xl:mx-30">
          Une approche humaniste
        </h2>
        <div className="mb-16 md:w-4/5 2xl:w-11/12 z-10 bg-[#FAFAFA] bg-opacity-25 p-8 rounded-3xl">
          <div className="font-sans xl:m-auto 2xl:text-base">
            <p>
              Ma pratique s’inscrit dans une approche existentielle-humaniste.
              Cette orientation part du postulat que tout individu porte en
              lui-même les ressources internes nécessaires à son développement
              personnel ainsi qu’à son épanouissement. Elle permet à celui qui
              en bénéficie d’accéder à une meilleure compréhension de lui-même
              et de son environnement, de devenir pleinement acteur de sa vie,
              d’atteindre un mieux-être psychique, de surmonter certaines
              difficultés par lui-même.
            </p>
            <p className="py-5">
              Elle s’adresse à des personnes rencontrant des difficultés
              psychiques préalablement identifiées, comme à des personnes se
              portant relativement bien mais souhaitant initier ou poursuivre
              leur exploration de soi aux côtés d’un psychologue leur proposant
              un espace d’accueil et d’écoute dépourvu de jugement et
              d’évaluation. Au-delà de la simple considération des symptômes
              décrits par le patient, l’aspect fondamental de l’approche
              humaniste demeure l’expérience individuelle de la personne.
            </p>
            <p>
              Il s’agit, pour le thérapeute, d’être attentif à ce que la
              personne donne à voir de sa « manière d’être aumonde ». Ainsi, le
              courant humaniste est une approche compréhensive amenant à
              rencontrer l’Autre dans sa réalité subjective.
            </p>
          </div>
        </div>
      </div>
      <div className="hidden 2xl:block">
        <Image
          src="/icons/Arbre.svg"
          alt="Un arbre"
          width={380}
          height={436}
          className="2xl:absolute xl:bottom-0 2xl:right-12"
        />
      </div>
    </section>
  );
}

