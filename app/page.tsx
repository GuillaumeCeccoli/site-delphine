import Banner from "@/components/widgets/banner";
import Header from "@/components/widgets/header";
import Activities from "@/components/widgets/activities";

export default function Home() {
  return (
    <main className="w-full h-min-screen">
      <Header />
      <Banner />
      <Activities />
    </main>
  );
}

