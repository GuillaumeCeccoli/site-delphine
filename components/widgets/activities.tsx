import React from "react";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import { actions } from "../../data/actionsData";

export default function Activities() {
  return (
    <section className="backgroundPink">
      <div className="flex flex-col justify-center">
        <h1 className="font-serif text-xl underline py-10 text-center md:text-3xl">
          Mes champs d&apos; interventions
        </h1>
        <article className="flex flex-col items-center m-auto md:flex-row md:items-start md:justify-between md:flex-wrap">
          {actions.map((action, id) => (
            <Card
              key={id}
              className="bg-transparent py-5 border-none border-0 shadow-none w-4/5 md:w-5/12 xl:w-1/6 md:mx-2 xl:mx-auto"
            >
              <CardContent className="flex flex-col items-center">
                <Image
                  src={action.icon}
                  alt={action.title}
                  width={90}
                  height={90}
                  className="py-2"
                />
                <h2 className="text-xl font-serif text-center py-5 md:text-2xl">
                  {action.title}
                </h2>
                <p className="text-sm font-sans text-center md:text-base">
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

