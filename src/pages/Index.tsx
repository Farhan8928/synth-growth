import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Education } from "@/components/Education";
import { Achievements } from "@/components/Achievements";
import { CaseStudies } from "@/components/CaseStudies";
import { Philosophy } from "@/components/Philosophy";
import { Contact } from "@/components/Contact";
import { ParticleBackground } from "@/components/ParticleBackground";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <ParticleBackground />
      
      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Education />
        <Achievements />
        <CaseStudies />
        <Philosophy />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
