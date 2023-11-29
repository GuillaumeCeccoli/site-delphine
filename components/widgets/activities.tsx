import React from "react";
import { Card, CardContent, CardTitle } from "../ui/card";
import Image from "next/image";

type Actions = {
  icon: string;
  title: string;
  description: string;
};

const actions: Actions[] = [
  {
    icon: "/icons/Anxiety.svg",
    title: "Anxiété",
    description:
      "Accompagnement dans la compréhension et la gestion des différentes formes de l’anxiété (phobies, crises d’angoisse).",
  },
  {
    icon: "/icons/Addiction.svg",
    title: "Addictions",
    description:
      "Avec ou sans substances psycho-actives, aide à l’auto-évaluation des consommations, accompagnement dans la diminution ou l’arrêt de la consommation/ du comportement addictif.",
  },
  {
    icon: "/icons/Therapy.svg",
    title: "Développement personnel",
    description:
      "Travail sur l’estime de soi par l’amélioration de la connaissance de soi, la valorisation des talents et des potentiels, l’amélioration de la qualité de vie personnelle et l’aide à la réalisation de ses aspirations et de ses rêves.",
  },
  {
    icon: "/icons/Cemetery.svg",
    title: "Deuil",
    description:
      "Lorem ipsum dolor sit amet consectetur. At sit tristique imperdiet proin mattis neque tincidunt pharetra. Duis aliquam non a non malesuada. At sit tristique imperdiet proin mattis neque tincidunt pharetra. Duis aliquam non a non malesuada.",
  },
  {
    icon: "/icons/Depression.svg",
    title: "Burn-out",
    description:
      "Accueil et écoute des difficultés relationnelles et des souffrances rencontrées au travail, prise en charge et accompagnement à la compréhension des multiples facettes du burn-out (aspects personnels et socio -professionnels), accompagnement dans les transitions professionnelles.",
  },
];

export default function Activities() {
  return (
    <section className="backgroundPink">
      <div className="flex flex-col justify-center">
        <h1 className="font-serif text-xl underline py-10 text-center">
          Mes champs d&apos; interventions
        </h1>
        <article className="flex flex-col items-center m-auto md:flex-row md:items-start md:justify-between md:flex-wrap">
          {actions.map((action, index) => (
            <Card
              key={index}
              className="bg-transparent py-5 border-none shadow-none w-2/3 md:w-2/5 xl:w-1/6 md:mx-2"
            >
              <CardContent className="flex flex-col items-center">
                <Image
                  src={action.icon}
                  alt={action.title}
                  width={50}
                  height={50}
                  className="py-2"
                />
                <h2 className="text-xl font-serif text-center py-5">
                  {action.title}
                </h2>
                <p className="text-sm font-sans text-center">
                  {action.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </article>
      </div>
    </section>
  );
}

