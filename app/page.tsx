import { LanguageProvider } from "@/lib/i18n";
import { SkipLink } from "@/components/SkipLink";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Education } from "@/components/Education";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";

export default function Home() {
  return (
    <LanguageProvider>
      <SkipLink />
      <Navbar />
      <main id="main" tabIndex={-1} className="flex-1 outline-none">
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </LanguageProvider>
  );
}
