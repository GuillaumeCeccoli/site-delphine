"use client";
import Footer from "@/components/widgets/footer";
import Header from "@/components/widgets/header";
import Image from "next/image";

export default function About() {
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
            width={600}
            height={714}
            onContextMenu={(e: React.MouseEvent) => e.preventDefault()}
          />
        </div>
        <article className="flex flex-col items-center font-serif">
          <h1 className="text-2xl mt-20 lg:text-4xl lg:my-40">Qui suis-je ?</h1>
          <div className="w-full my-40 lg:w-3/5">
            <Image
              src="/imgs/aboutDelphine.JPG"
              alt="Photo du bureau de Delphine"
              width={1000}
              height={1000}
              className="z-10 w-4/5 mx-auto rounded-3xl shadowCustom"
              onContextMenu={(e: React.MouseEvent) => e.preventDefault()}
            />
          </div>
        </article>
        <article className="flex flex-col items-center backgroundPink pb-20 lg:bg-transparent xl:flex-row xl:justify-between items-centers xl:mx-5 xl:pb-40">
          <div className="font-sans bg-[#EFEFEF] bg-opacity-40 my-10 rounded-3xl sm:w-4/5 md:mb-20 lg:mb-10 lg:w-3/5 z-10 xl:mx-5 shadowCustom">
            <div className="w-11/12 m-auto px-2 py-8 text-sm lg:text-base xl:h-[520px] flex items-center">
              <p>
                Psychologue d&apos;approche humaniste, ma mission est de vous
                proposer un espace d&apos;accueil, d&apos;écoute et
                d&apos;accompagnement au sein duquel vous pourrez faire ou
                refaire connaissance avec vous-même. Qu&apos;il s&apos;agisse
                d&apos;un malaise intérieur éprouvé depuis longtemps ou
                d&apos;un besoin ponctuel de soutien face à une situation
                spécifique, toute demande peut être accueillie. Il n&apos;y a
                pas de bonne ou de mauvaise raison d&apos;aller voir un
                psychologue. Je considère chaque personne dans sa globalité et,
                dans cette logique, je veille à apporter une aide personnalisée
                et adaptée aux besoins de chacun. À votre rythme, je vous
                accompagne dans votre cheminement et peux vous proposer, le cas
                échéant, des outils pouvant vous aider à mieux gérer vos
                difficultés au quotidien. Cependant, je ne détiens aucune
                réponse, vous en êtes le seul connaisseur. Je vous propose de
                les découvrir ensemble, toujours dans le respect de votre
                temporalité.
              </p>
            </div>
          </div>
          <div className="font-sans bg-[#EFEFEF] bg-opacity-40 my-10 rounded-3xl sm:w-4/5 md:mb-20 lg:mb-10 lg:w-3/5 z-10 shadowCustom">
            <div className="w-11/12 m-auto px-2 py-8 text-sm lg:text-base xl:h-[520px] flex items-center">
              <p>
                Ayant principalement évolué en addictologie et en psychiatrie
                générale, j&apos;ai été amenée à accompagner des personnes (les
                adolescents et les adultes) présentant des problématiques en
                lien avec l&apos;alcool, le tabac et le cannabis au sein
                d&apos;une équipe mobile &ldquo;Parentalité&ldquo; et
                &ldquo;Addiction&ldquo; et d&apos;une consultation pour les
                jeunes consommateurs. De plus, j&apos;ai également animé des
                ateliers de bibliothérapie et de relaxation dans un hôpital
                psychiatrique de jour, destinés à des patients présentant des
                troubles anxieux généralisés, des épisodes dépressifs ou encore
                des troubles bipolaires. La mise en place de groupes de parole
                aura également permis l&apos;émergence et l&apos;élaboration de
                réflexions et de questionnements dans un cadre bienveillant.
              </p>
            </div>
          </div>
          <div className="font-sans bg-[#EFEFEF] bg-opacity-40 my-10 rounded-3xl sm:w-4/5 md:mb-20 lg:mb-10 lg:w-3/5 z-10 xl:mx-5 shadowCustom">
            <div className="w-11/12 m-auto px-2 py-8 text-sm lg:text-base xl:h-[520px] flex items-center">
              <p>
                Installée en libéral depuis septembre 2020 aux Pennes-Mirabeau,
                je collabore avec différents professionnels du paramédical
                (sophrologue, naturopathe, docteur en médecine chinoise, etc.)
                afin de garantir une prise en charge pluridisciplinaire, si
                telle est votre volonté. Je propose mes services aux adolescents
                et aux adultes. Je ne suis pas adhérente au dispositif MonPsy.
                Pour toute demande de remboursement des consultations, veuillez
                vous renseigner auprès de votre mutuelle. Pour les jeunes de 15
                à 26 ans, je suis adhérente au Pass Santé Jeunes.
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

