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
    <section className="backgroundPink py-10 border-b border-gray-400">
      <div className="flex flex-col justify-center">
        <h2 className="font-serif text-2xl text-center">
          Mes champs d&apos; interventions
        </h2>
        <p className="text-sm italic font-sans text-center pt-2 pb-10 lg:text-base">
          Cliquez sur les icones pour en savoir plus
        </p>
        <article className="flex flex-col items-center md:flex-row md:items-start md:justify-around md:flex-wrap xl:flex-nowrap xl:p-0 xl:my-2">
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
                  width={80}
                  height={80}
                  className="py-2"
                  title="Cliquez pour en savoir plus"
                />
                <h2 className="font-serif text-center py-5 text-2xl">
                  {action.title}
                </h2>
                {selectedActions.includes(action.id) && (
                  <div className="bg-[#FAFAFA] bg-opacity-25 text-center p-4 rounded-xl">
                    <p
                      className={`on-click-icon ${
                        isClicked[action.id] ? "active" : ""
                      } text-[14px] font-sans`}
                    >
                      {action.description}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </article>
      </div>
    </section>
  );
}

