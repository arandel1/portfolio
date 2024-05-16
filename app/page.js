import Image from "next/image";
import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-co bg-white ">
      <div className="container mx-auto py-4 px-10">
        <HeroSection />
      </div>
    </main>
  );
}
