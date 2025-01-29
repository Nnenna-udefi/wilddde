import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero";
import { MainSection } from "@/components/main";
import { TopBar } from "@/components/topBar";

export default function Home() {
  return (
    <div>
      <TopBar />
      <div className="bg-darkerBrown text-black">
        <HeroSection />
        <MainSection />
        <Footer />
      </div>
    </div>
  );
}
