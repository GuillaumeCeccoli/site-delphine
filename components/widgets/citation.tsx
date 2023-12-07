import React from "react";

export default function Citation() {
  return (
    <section className="backgroundLightGrey flex flex-col items-center justify-center text-center">
      <div className="font-serif text-lg my-10 md:text-2xl">
        <blockquote>
          <p className="py-2">&ldquo;Qui regarde dehors rêve.</p>
          <p className="py-2">
            Qui regarde à l&apos;intérieur se réveille.&ldquo;
          </p>
          <cite className="font-sans py-4">Carl Gustav-Jung</cite>
        </blockquote>
      </div>
    </section>
  );
}

