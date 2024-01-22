"use client";
import Footer from "@/components/widgets/footer";
import Header from "@/components/widgets/header";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Modalites() {
  return (
    <section className="backgroundLightGrey">
      <Header />
      <article className="flex flex-col items-center w-full">
        <div className="my-10 flex flex-col items-center">
          <h1 className="font-serif text-2xl text-center w-11/12 mt-10 font-bold">
            Modalités, tarifs et déroulement d&apos;une séance.
          </h1>
          <div className="w-full flex flex-col items-center xl:flex-row xl:justify-around xl:w-11/12">
            <div className="w-4/5 overflow-hidden rounded-3xl mt-20 shadowCustom lg:w-3/5 xl:w-2/5">
              <Image
                src="/imgs/attente-modalite.JPG"
                alt="La salle d'attente du cabinet de Delphine"
                width={600}
                height={714}
                className="w-full object-cover"
                onContextMenu={(e: React.MouseEvent) => e.preventDefault()}
              />
            </div>
            <div className="w-4/5 overflow-hidden rounded-3xl mt-20 shadowCustom lg:w-3/5 xl:w-2/5">
              <Image
                src="/imgs/modalite.JPG"
                alt="Une photo du bureau de Delphine"
                width={1000}
                height={1000}
                className="w-full object-cover"
                onContextMenu={(e: React.MouseEvent) => e.preventDefault()}
              />
            </div>
          </div>
          <div className="flex flex-col items-center my-20 w-full sm:w-11/12 lg:w-9/12 xl:flex-row xl:justify-evenly xl:items-start xl:w-10/12 gap-20">
            <div className="bg-[#EFEFEF] bg-opacity-60 p-4 font-sans flex flex-col gap-5 rounded-3xl lg:p-10 xl:w-3/5 shadowCustom">
              <h2 className="text-xl my-2 text-center font-serif">
                <strong>Modalités & Tarifs</strong>
              </h2>
              <p>
                Les consultations se déroulent uniquement sur rendez-vous. La
                prise de rendez-vous peut se faire par téléphone ou via mon
                profil Doctolib.
              </p>
              <p>
                Les séances durent 1 heure et sont tarifées à 50 euros. Le
                règlement peut s’effectuer par chèque ou en espèces.
              </p>
              <p>
                Je n’adhère pas au dispositif gouvernemental de prise en charge
                des consultations psychologiques par la Sécurité Sociale.
              </p>
              <p>
                En revanche, les consultations psychologiques peuvent être
                prises en charge totalement ou partiellement par les mutuelles.
                N’hésitez pas à vous rapprocher de la vôtre pour en connaître
                les modalités de remboursements.
              </p>
              <p>
                Pour les jeunes de 15 à 26 ans, je suis adhérente au Pass Santé
                Jeunes. Vous pouvez bénéficier de ce dispositif en cliquant sur
                ce{" "}
                <Link
                  className="text-pink-500"
                  href="https://www.maregionsud.fr/vos-aides/detail/pass-sante-jeunes"
                >
                  lien
                </Link>
                .
              </p>
              <p>
                Si des difficultés financières majeures vous freinent à recourir
                à des soins psychiques, je peux adapter mes tarifs de manière
                ponctuelle ou sur l’ensemble du suivi. Ces modalités peuvent
                être discutées n’importe quand au cours de votre prise en
                charge.
              </p>
            </div>
            <section className="flex flex-col items-center backgroundPink bg-opacity-40 rounded-3xl mt-20 p-4 lg:p-10 xl:w-3/5 xl:mt-0 shadowCustom">
              <h2 className="text-xl mt-4 mb-8 font-serif">
                <strong>Déroulement des consultations :</strong>
              </h2>
              <div className="flex flex-col items-center font-sans gap-5 ">
                <h3 className="self-start text-lg font-semi-bold underline underlineOffset">
                  La première consultation
                </h3>
                <p>
                  La 1ère rencontre me permettra de faire connaissance avec
                  vous, de faire le point sur votre parcours de vie et de
                  recueillir votre demande. Cette anamnèse nous permettra de co-
                  construire des objectifs de travail. Ces derniers peuvent se
                  redéfinir tout au long de votre accompagnement, en fonction
                  des progressions ou des points de vigilance identifiés.
                </p>
                <p>
                  Pour vous, cette rencontre initiale sera l’occasion de poser
                  toutes les questions qui vous semblent importantes quant à ma
                  pratique et/ou le déroulement de la prise en charge.
                </p>
                <h3 className="self-start text-lg font-semi-bold underline underlineOffset">
                  Fréquence des séances et durée du suivi :
                </h3>
                <p>
                  Si vous souhaitez engager un suivi psychologique, la fréquence
                  des séances se décidera à l’issue de notre 1ère rencontre. Le
                  rythme est adapté et personnalisé en fonction de vos besoins
                  et de votre demande.
                </p>
                <p className="pb-8">
                  Il est impossible de savoir à l’avance combien de temps durera
                  le suivi psychologique. La durée varie en fonction de
                  plusieurs facteurs : la demande initiale, les objectifs de
                  travail, le rythme de cheminement de chacun etc.
                </p>
              </div>
            </section>
          </div>
        </div>
      </article>
      <Footer />
    </section>
  );
}

