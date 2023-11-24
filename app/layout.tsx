import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>{children}</body>
    </html>
  );
}

