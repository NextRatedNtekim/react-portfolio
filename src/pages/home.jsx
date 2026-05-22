import {  Element } from "react-scroll";
import Hero from "../components/hero";
import Contact from "../components/contact";
import Projects from "../components/projects";
import About from "../components/about";
import Testimonials  from "../components/testimonials";
import Experience from "../components/experience";


export default function HomePage() {
  
  return (
    <div className="overflow-hidden">
      
      <Hero />
      <About />
      <Projects />
      <Element name="experience">
        <Experience />
      </Element>
      <Testimonials />
      <Contact />
    </div>
  );
}

// import { useState } from "react";
// import { Element } from "react-scroll";
// import Hero from "../components/hero";
// import Contact from "../components/contact";
// import Projects from "../components/projects";
// import About from "../components/about";
// import Testimonials from "../components/testimonials";
// import Experience from "../components/experience";
// import Preloader from "../components/preloader"; // 👈 import it
// import { AnimatePresence } from "framer-motion";
// export default function HomePage() {
//   const [preloaderDone, setPreloaderDone] = useState(false);

//   return (
//     <div className="overflow-hidden">
//       <AnimatePresence mode="wait">
//         {!preloaderDone && (
//           <Preloader key="preloader" onComplete={() => setPreloaderDone(true)} />
//         )}
//       </AnimatePresence>
//       <Hero />
//       <About />
//       <Projects />
//       <Element name="experience">
//         <Experience />
//       </Element>
//       <Testimonials />
//       <Contact />
//     </div>
//   );
// }