import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import TechStack from "@/components/TechStack";
import StatsSection from "@/components/StatsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <div id="home">
          <HeroSection />
        </div>
        <TechStack />
        <StatsSection />
      </main>
    </div>
  );
};

export default Index;
