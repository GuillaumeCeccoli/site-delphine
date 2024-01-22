"use client";
import Activities from "@/components/widgets/activities";
import Approach from "@/components/widgets/approche";
import Banner from "@/components/widgets/banner";
import Citation from "@/components/widgets/citation";
import Footer from "@/components/widgets/footer";
import Header from "@/components/widgets/header";

export default function Home() {
  return (
    <main className="w-full h-min-screen">
      <Header />
      <Banner />
      <Activities />
      <Citation />
      <Approach />
      <Footer />
    </main>
  );
}

