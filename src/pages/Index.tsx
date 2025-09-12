import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import TechStack from "@/components/TechStack";
import StatsSection from "@/components/StatsSection";
import ProjectsSection from "@/components/ProjectsSection";

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
        <ProjectsSection />
      </main>
    </div>
  );
};

export default Index;
