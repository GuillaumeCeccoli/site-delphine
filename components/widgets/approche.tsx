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
              En psychologie, l&apos;approche humaniste met l&apos;accent sur le
              développement personnel, la croissance et la réalisation du
              potentiel humain. Elle pose un regard global sur l&apos;individu
              en s&apos;intéressant aux contextes (familial, professionnel,
              social...) dans lesquels il évolue. Elle diffère des approches
              psychologiques plus traditionnelles en mettant en avant la
              subjectivité, l&apos;expérience vécue et le libre arbitre de
              l&apos;individu.
            </p>
            <p className="py-5">
              L&apos;approche humaniste est centrée sur la personne. Elle met
              l&apos;accent sur l&apos;individu en tant qu’entité unique avec
              ses propres besoins/motivations/aspirations. Elle s&apos;intéresse
              au processus par lequel il cherche à réaliser son potentiel et à
              devenir la « meilleure version de lui-même. »
            </p>
            <p className="pb-5">
              En tant que patient, cette approche vous permettra de développer
              une meilleure connaissance et compréhension de vous-même. Elle
              vous encouragera à développer votre responsabilité personnelle et,
              ainsi, à (re)devenir acteur de votre vie. A terme, cette approche
              vous permettra d’acquérir/de retrouver un mieux-être et une
              autonomie psychique vous rendant capable de surmonter vos
              difficultés par vous-même.
            </p>
            <p>
              Un suivi psychologique d&apos;approche humaniste s&apos;adresse à
              toute personne cherchant un espace d’écoute active et de soutien
              empathique, sans jugement ni évaluation, ponctuel ou pour un
              accompagnement sur la durée, pour des troubles psychiques
              (anxiété, dépression, addictions...) impactant le quotidien ou à
              propos de situations/de moments de vie spécifiques (séparation
              amoureuse, deuil, transition professionnelle...).
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

