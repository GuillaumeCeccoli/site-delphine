"use client";
import Footer from "@/components/widgets/footer";
import Header from "@/components/widgets/header";

export default function Mentions() {
  return (
    <section>
      <Header />
      <h1 className="font-serif text-2xl py-10 text-center">
        Mentions Légales
      </h1>
      <article className="flex flex-col items-center font-sans gap-5 mt-20 mb-32 lg:flex-row lg:justify-around">
        <div className="flex flex-col items-center gap-2 backgroundPink p-5 rounded-xl shadowCustom">
          <h2 className="font-bold">Le client :</h2>
          <h3>Ceccoli Delphine - Cabinet de Psychologie</h3>
          <p>Cabinet médical le Vento</p>
          <p>387 Avenue de Plan de Campagne</p>
          <p>13170 Les Pennes-Mirabeau</p>
          <p>
            <strong>Téléphone : </strong>07 69 41 65 15
          </p>
          <p>
            <strong>Mail : </strong>delphine.ceccoli@laposte.net
          </p>
          <p>
            <strong>Numéros ADELI : </strong>139331771
          </p>
          <p>
            <strong>Numéros SIRET : </strong>84897250100029
          </p>
        </div>
        <div className="flex flex-col items-center gap-2 backgroundPink p-5 rounded-xl shadowCustom">
          <h2 className="font-bold">Créateur du site :</h2>
          <h3>CreaNumerik04 - Développement Web</h3>
          <p>Guillaume Ceccoli</p>
          <p>86 Chemin de la muraille neuve</p>
          <p>04230 Saint-Etienne-Les-Orgues</p>
          <p>
            <strong>Téléphone : </strong>06 75 97 31 18
          </p>
          <p>
            <strong>Mail : </strong>guiceccoli@gmail.com
          </p>
          <p>
            <strong>Numéros SIRET : </strong>98036273500014
          </p>
          <p>Non assujeti à la TVA</p>
        </div>
      </article>
      <Footer />
    </section>
  );
}

