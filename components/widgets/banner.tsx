"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

type Photo = {
  src: string;
  alt: string;
  width: number;
  height: number;
  className: string;
};

const photos: Photo[] = [
  {
    src: "/imgs/brune.png",
    alt: "Une jolie brune pensive",
    width: 127,
    height: 175,
    className: "relative top-10 right-12 z-10",
  },
  {
    src: "/imgs/jolieblonde.png",
    alt: "Une jolie blonde derrière son bureau",
    width: 127,
    height: 175,
    className: "absolute top-20 left-14",
  },
];

export default function Banner() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <section className="flex items-center flex-col w-full h-[400px] backgroundLightGrey md:flex-row md:justify-between xl:flex-row xl:justify-between lg:h-[500px] xl:items-start xl:overflow-hidden">
      <div className="hidden xl:block xl:relative xl:top-20 left-[5%]">
        <Image src="/icons/Arbre.svg" alt="Un arbre" width={380} height={436} />
      </div>
      <div className="flex items-center flex-col mt-6 justify-center md:ml-16 xl:mt-40 xl:mr-40">
        <h1 className="text-2xl font-serif lg:text-3xl 2xl:text-4xl">
          Delphine Ceccoli
        </h1>
        <h2 className="font-sans italic mt-5 text-xl lg:text-2xl">
          Psychologue aux Pennes-Mirabeau
        </h2>
      </div>
      <div className="relative md:right-[10%] md:bottom-[12%] xl:top-6 xl:right-24 2xl:right-40">
        {photos.map((photo, index) => (
          <Image
            key={index}
            src={photo.src}
            alt={photo.alt}
            width={isMobile ? photo.width : photo.width * 2}
            height={isMobile ? photo.height : photo.height * 2}
            className={`imageClass ${photo.className}`}
          />
        ))}
      </div>
    </section>
  );
}

