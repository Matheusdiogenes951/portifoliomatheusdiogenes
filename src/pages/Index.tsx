import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import LearningLog from "@/components/LearningLog";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      {/* Scanline CRT overlay */}
      <div className="scanline-overlay" />

      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <TechStack />
        <Projects />
        <LearningLog />
        <ContactSection />
      </main>
    </div>
  );
};

export default Index;
