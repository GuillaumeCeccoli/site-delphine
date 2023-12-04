import Banner from "@/components/widgets/banner";
import Header from "@/components/widgets/header";
import Activities from "@/components/widgets/activities";
import Citation from "@/components/widgets/citation";
import Approach from "@/components/widgets/approche";
import Contact from "@/components/widgets/contact";
import Footer from "@/components/widgets/footer";

export default function Home() {
  return (
    <main className="w-full h-min-screen">
      <Header />
      <Banner />
      <Activities />
      <Citation />
      <Approach />
      <Citation />
      <Contact />
      <Footer />
    </main>
  );
}

