"use client";

import React from "react";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import { actions } from "../../data/actionsData";
import { useState } from "react";

export default function Activities() {
  const [selectedActions, setSelectedActions] = useState<string[]>([]);
  const handleIconClick = (id: string) => {
    if (selectedActions.includes(id)) {
      setSelectedActions(selectedActions.filter((actionId) => actionId !== id));
    } else {
      setSelectedActions([...selectedActions, id]);
    }
  };
  const [isClicked, setIsClicked] = useState<Record<string, boolean>>({});
  const clickIconHandle = (id: string) => {
    setIsClicked((prevState) => ({ ...prevState, [id]: !prevState[id] }));
  };
  return (
    <section className="backgroundPink">
      <div className="flex flex-col justify-center">
        <h1 className="font-serif text-xl underline pt-10 text-center md:text-3xl">
          Mes champs d&apos; interventions
        </h1>
        <p className="text-sm italic font-sans text-center pt-2 pb-5 lg:text-base">
          Cliquez sur les icones pour en savoir plus
        </p>
        <article className="flex flex-col items-center w-[95%] mx-auto md:flex-row md:items-start md:justify-between md:flex-wrap xl:flex-nowrap xl:p-0">
          {actions.map((action) => (
            <Card
              key={action.id}
              className="bg-transparent py-5 border-none border-0 shadow-none w-4/5 md:w-1/2 xl:w-1/5"
            >
              <CardContent
                className="flex flex-col items-center cursor-pointer scale-on-hover lg:w-full lg:mx-auto"
                onClick={() => {
                  handleIconClick(action.id);
                  clickIconHandle(action.id);
                }}
              >
                <Image
                  src={action.icon}
                  alt={action.title}
                  width={90}
                  height={90}
                  className="py-2"
                  title="Cliquez pour en savoir plus"
                />
                <h2 className="text-2xl font-serif text-center py-5 md:text-2xl">
                  {action.title}
                </h2>
                {selectedActions.includes(action.id) && (
                  <p
                    className={`on-click-icon ${
                      isClicked[action.id] ? "active" : ""
                    } text-lg text-center font-sans xl:mb-5`}
                  >
                    {action.description}
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </article>
      </div>
    </section>
  );
}

