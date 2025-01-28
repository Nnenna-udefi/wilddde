import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero";
import { MainSection } from "@/components/main";
import { Nav } from "@/components/nav";

export default function Home() {
  return (
    <div>
      <Nav />
      <div className="bg-[#ebe0ce] text-black">
        <HeroSection />
        <MainSection />
        <Footer />
      </div>
    </div>
  );
}
