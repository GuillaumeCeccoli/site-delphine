import React from "react";
import Image from "next/image";

export default function Approach() {
  return (
    <section className="w-full relative backgroundPink flex flex-col items-center justify-center xl:flex-row-reverse xl:justify-around overflow-hidden border-b border-gray-400">
      <div className="mb-10 mt-20 2xl:mr-32 xl:mt-10 xl:mr-40 w-4/5">
        <Image
          src="/imgs/delphineTravail.png"
          alt="Une photo de Delphine entrain de travailler."
          width={500}
          height={500}
          className="xl:w-full shadowCustom rounded-full mx-auto"
        />
      </div>
      <div className="flex flex-col items-center 2xl:items-start 2xl:mx-20">
        <h2 className="font-serif text-2xl my-20 md:text-3xl xl:self-center xl:ml-96">
          Une approche humaniste
        </h2>
        <div className="mb-32 md:w-4/5 xl:w-3/5 2xl:w-9/12 2xl:ml-20 z-10 bg-[#FAFAFA] bg-opacity-25 p-8 rounded-3xl shadowCustom">
          <div className="font-sans xl:m-auto xl:text-md">
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
      <div className="hidden xl:block">
        <Image
          src="/icons/Arbre.svg"
          alt="Un arbre"
          width={380}
          height={436}
          className="xl:absolute xl:bottom-0 xl:left-12"
        />
      </div>
    </section>
  );
}

