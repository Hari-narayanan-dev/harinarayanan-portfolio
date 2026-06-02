import { BackgroundFX } from "@/components/portfolio/BackgroundFX";
import { CursorGlow } from "@/components/portfolio/CursorGlow";
import { ScrollProgress } from "@/components/portfolio/ScrollProgress";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Experience } from "@/components/portfolio/Experience";
import { Projects } from "@/components/portfolio/Projects";
import { WhyHire } from "@/components/portfolio/WhyHire";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <BackgroundFX />
      <CursorGlow />
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <WhyHire />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
