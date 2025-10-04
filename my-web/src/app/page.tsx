import { Header } from "./components/header"
import { HeroSection } from "./components/hero-section"
import { AboutSection } from "./components/about-section"
import { ExperienceSection } from "./components/experience-section"
import { ProjectsSection } from "./components/projects-section"
import { SkillsSection } from "./components/skills-section"
import { ContactSection } from "./components/contact-section"
import { Footer } from "./components/footer"
import Container from "./components/container";
import Navbar from "./components/ui/navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
     
      <Container>
        {/* <Navbar /> */}
        <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
      </Container>
     
    </div>
  );
}
