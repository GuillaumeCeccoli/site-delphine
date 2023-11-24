import Image from "next/image";
import React from "react";

export default function Banner() {
  return (
    <section className="flex items-center flex-col w-full h-[400px] bg-[#F9F3EB]">
      <div className="flex items-center flex-col mt-6">
        <h1 className="text-[24px] font-serif">Delphine Ceccoli</h1>
        <h2 className="font-sans mt-[25px] text-[14px]">
          Psychologue aux Pennes-Mirabeau
        </h2>
      </div>
      <div className="relative">
        <Image
          src="/imgs/brune.png"
          alt="Une jolie brune pensive"
          width={127}
          height={175}
          className="relative top-10 right-12 z-10"
        />
        <Image
          src="/imgs/jolieblonde.png"
          alt="Une jolie blonde derrière son bureau"
          width={127}
          height={175}
          className="absolute top-20 left-14"
        />
      </div>
    </section>
  );
}

