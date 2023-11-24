import type { Metadata } from "next";
import { Roboto, Gabriela } from "next/font/google";
import "./globals.css";

export const roboto = Roboto({
  weight: "400",
  variable: "--font-roboto",
  subsets: ["latin"],
});
export const gabriela = Gabriela({
  weight: "400",
  variable: "--font-gabriela",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Delphine Ceccoli - Psychologue",
  description:
    "Bienvenue sur le site de Delphine Ceccoli - psychologue aux Pennes-Mirabeau",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr-FR">
      <body className={`${roboto.variable} ${gabriela.variable}`}>
        {children}
      </body>
    </html>
  );
}

