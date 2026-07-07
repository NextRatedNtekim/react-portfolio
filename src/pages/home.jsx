import { useState } from "react";
import { Element } from "react-scroll";
import Hero from "../components/hero";
import Contact from "../components/contact";
import Projects from "../components/projects";
import About from "../components/about";
import Experience from "../components/experience";
import Faq from "../components/faq";
import Preloader from "../components/preloader";

export default function HomePage() {
  const [preloaderDone, setPreloaderDone] = useState(false);

  return (
    <div className="overflow-hidden">
      {!preloaderDone && (
        <Preloader onComplete={() => setPreloaderDone(true)} />
      )}

      <Hero />
      <About />
      <Projects />
      <Element name="experience">
        <Experience />
      </Element>
      <Faq />
      <Contact />
    </div>
  );
}

// Testimonials component intentionally stays unused/uninmported here,
// per project decision — left in src/components/testimonials.jsx untouched.