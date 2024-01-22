"use client";
import Footer from "@/components/widgets/footer";
import Header from "@/components/widgets/header";
import Image from "next/image";

export default function Practice() {
  return (
    <section>
      <header>
        <Header />
      </header>
      <section className="lg:backgroundAboutPractice w-full relative">
        <div className="hidden xl:block xl:absolute xl:bottom-0 left-2 z-0">
          <Image
            src="/icons/Arbre.svg"
            alt="Un arbre"
            width={750}
            height={864}
            onContextMenu={(e: React.MouseEvent) => e.preventDefault()}
          />
        </div>
        <article className="flex flex-col items-center font-serif">
          <h1 className="text-2xl mt-20 lg:text-4xl lg:my-40">Ma Pratique</h1>
          <div className="w-full my-40 lg:w-3/5 xl:w-2/4">
            <Image
              src="/imgs/practiceDelphine.JPG"
              alt="Photo du bureau de Delphine"
              width={1000}
              height={1000}
              className="rounded-3xl w-4/5 mx-auto shadowCustom"
              onContextMenu={(e: React.MouseEvent) => e.preventDefault()}
            />
          </div>
        </article>
        <article className="flex flex-col items-center backgroundPink pb-20 xl:pb-40 lg:bg-transparent">
          <h2 className="font-serif text-2xl my-20 text-center z-10 lg:text-3xl">
            Une approche centrée sur la personne
          </h2>
          <div className="mb-10 font-sans bg-[#EFEFEF] bg-opacity-40 rounded-3xl sm:w-4/5 md:mb-20 lg:mb-40 lg:w-3/5 z-10 shadowCustom">
            <div className="w-11/12 mx-auto px-2 py-8 text-sm lg:text-base">
              <p className="mb-5">
                Pendant mon cursus universitaire et au cours de mes diverses
                expériences professionnelles j’ai été sensibilisée à l’Approche
                Centrée sur la Personne (ACP) dont les principes fondateurs et
                les différentes applications ont été réfléchies par Carl Rogers
                dans les années 40. L’ACP n’est pas une technique en soi mais
                une manière d’être, une philosophie, reposant sur la tendance
                naturelle de l’être humain à se réaliser en tant que personne.
                C’est ce que l’on appelle la tendance actualisante. Dans ce
                cadre, le psychologue/thérapeute crée un climat chaleureux et
                réunit les conditions favorables au processus de développement à
                l’aide de trois attitudes fondamentales :
              </p>
              <p className="mb-5">
                1. L’authenticité : Il s’agit de la capacité du thérapeute à
                être attentif à la complexité de sa propre histoire, de ses
                sentiments, de ses pensées et de ses attitudes actualisées dans
                la relation avec le patient. A bon escient, il lui revient de
                communiquer ses éprouvés, ces derniers pouvant représenter un
                levier intéressant pour la relation et le travail thérapeutiques
                engagés avec le patient.
              </p>
              <p className="mb-5">
                2. Compréhension empathique : Il s’agit de la capacité à entrer
                dans le monde de l’Autre comme s’il s’agissait du sien propre
                afin de le comprendre, tout en étant conscient d’être une
                personne séparée de cet Autre.
              </p>
              <p>
                3. L’acceptation inconditionnelle de l’Autre : il s’agit
                d’accepter le patient comme il vient et tel qu’il est, sans a
                priori, sans jugements, sans évaluation. Elle se caractérise par
                une grande ouverture envers l’autre, et favorise une meilleure
                compréhension de son monde intérieur. Au même titre que
                l’empathie et l’authenticité, elle participe à un climat
                relationnel chaleureux et aide le patient à délier sa parole en
                sachant son intégrité psychique protégée par la posture
                bienveillante du psychologue.
              </p>
            </div>
          </div>
        </article>
      </section>
      <footer>
        <Footer />
      </footer>
    </section>
  );
}

