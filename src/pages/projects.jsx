import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { IoSparkles } from "react-icons/io5";
import { FaArrowLeft } from "react-icons/fa";
import Background from "../assets/bg-1.jpg";
import { projects, ProjectCard } from "../components/projects";

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.11, ease: [0.16, 1, 0.3, 1] },
  }),
};

function ProjectsPage() {
  const sectionRef = useRef(null);
  const navigate = useNavigate();

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const springBgY = useSpring(bgY, { stiffness: 50, damping: 18 });

  const liveProjects = projects.filter((p) => p.status.isLive);
  const inProgressProjects = projects.filter((p) => !p.status.isLive);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden px-6 py-20 text-white bg-black pt-[130px]"
    >
      {/* Parallax bg */}
      <motion.div className="absolute inset-0 -z-10" style={{ y: springBgY }}>
        <img src={Background} alt="" className="w-full h-full object-cover opacity-35" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80" />
      </motion.div>

      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[220px] bg-[#d4ff4f]/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Particle field removed here too — this page carries the same
          parallax bg + fade-up header pattern as the home Projects
          section, this was the heaviest particle count (30) in the app. */}

      <div className="relative z-10 max-w-6xl mx-auto">
        
        {/* Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <motion.div
            custom={0}
            variants={fadeUp}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#d4ff4f]/30 bg-white/5 backdrop-blur-md mb-5"
          >
            <IoSparkles size={13} className="text-[#d4ff4f]" />
            <span className="text-[11px] tracking-widest uppercase text-gray-300">
              All Projects
            </span>
          </motion.div>

          <motion.h1
            custom={1}
            variants={fadeUp}
            className="text-3xl md:text-5xl font-bold leading-tight text-white mb-4"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            Every{" "}
            <span
              className="italic font-normal"
              style={{ color: "#d4ff4f", fontFamily: "var(--font-serif)" }}
            >
              Build, Every Idea
            </span>
          </motion.h1>

          <motion.p custom={2} variants={fadeUp} className="text-gray-400 leading-relaxed">
            A complete look at everything I've shipped and what's currently in the works.
          </motion.p>
        </motion.div>

        {/* Live Projects */}
        {/* {liveProjects.length > 0 && ( */}
          <div className="mb-16">
            {/* <motion.div
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <h2 className="text-lg font-semibold text-white tracking-wide uppercase text-sm">
                Live
              </h2>
              <div className="flex-1 h-px bg-white/10" />
              <span className="text-gray-500 text-xs">{liveProjects.length} projects</span>
            </motion.div> */}

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {liveProjects.map((project, idx) => (
                <ProjectCard key={idx} project={project} idx={idx} />
              ))}
            </div>
          </div>
        {/* )} */}

        {/* In Progress Projects */}
        {/* {inProgressProjects.length > 0 && ( */}
          <div>
            {/* <motion.div
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-2 h-2 rounded-full bg-[#d4ff4f]/70" />
              <h2 className="text-lg font-semibold text-white tracking-wide uppercase text-sm">
                In Progress
              </h2>
              <div className="flex-1 h-px bg-white/10" />
              <span className="text-gray-500 text-xs">{inProgressProjects.length} projects</span>
            </motion.div> */}

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {inProgressProjects.map((project, idx) => (
                <ProjectCard key={idx} project={project} idx={idx + liveProjects.length} />
              ))}
            </div>
          </div>
        {/* )} */}
      </div>
    </section>
  );
}

export default ProjectsPage;