import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { FaPlus } from "react-icons/fa";

// Placeholder Q&A — edit freely, this is just a starting point.
const FAQS = [
  {
    q: "What's your typical process for a new project?",
    a: "I start with a short discovery conversation to understand your goals and constraints, then move into wireframes or a quick prototype before writing production code. You'll see progress at each stage rather than waiting for one big reveal at the end.",
  },
  {
    q: "Are you available for remote work?",
    a: "Yes, I work fully remote and I'm comfortable collaborating across time zones, with async updates and regular check-ins depending on what works best for your team.",
  },
  {
    q: "What's your core tech stack?",
    a: "React, TypeScript, Next.js, and Supabase for most full-stack work, styled with Tailwind CSS and animated with Framer Motion. I adapt the stack to the project when a different tool is a better fit.",
  },
  {
    q: "How long does a typical project take?",
    a: "It depends on scope, a focused landing page can take about a week, while a full product build with auth, a database, and real-time features usually runs several weeks. I'll give you a clear timeline estimate after our first conversation.",
  },
  {
    q: "Do you take on both development and design work?",
    a: "Yes. I handle end-to-end builds UI/UX direction, branding, and full front-to-back implementation — so you don't need to coordinate between separate designers and developers.",
  },
  {
    q: "How much does it cost start a project?",
    a: "The cost depends on the project's scope, features and timeline.",
  },
  {
    q: "Is down payement required to commence a project?",
    a: "Yes, a 40% down payment is required for the project to commence",
  }
];

function FaqItem({ item, isOpen, onToggle }) {
  return (
    <div className="border-b border-white/10">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-6 py-6 text-left group"
      >
        <span className="text-base sm:text-lg text-white/90 group-hover:text-white transition-colors">
          {item.q}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="shrink-0 w-8 h-8 rounded-full border border-white/15 flex items-center justify-center text-[#d4ff4f]"
        >
          <FaPlus size={11} />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-sm sm:text-base text-gray-400 leading-relaxed max-w-2xl">
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section ref={ref} className="relative bg-black py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          <span className="text-[11px] tracking-widest uppercase text-[#d4ff4f]/80">
            FAQ
          </span>
          <h2
            className="mt-3 text-3xl sm:text-4xl font-medium text-white"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            Questions, <span style={{ fontFamily: "var(--font-serif)" }} className="italic text-[#d4ff4f]">answered.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          {FAQS.map((item, i) => (
            <FaqItem
              key={i}
              item={item}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
