import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Sparkles } from "lucide-react";
import { useState, useRef } from "react";
import { motion, useInView, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";

// ─── Data ─────────────────────────────────────────────────────────────────────
const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "ntekimnextgenx5@gmail.com",
    href: "mailto:ntekimnextgenx5@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+234 (090) 77519814",
    href: "tel:+23409077519814",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Lagos, Nigeria",
    href: "#",
  },
];

// stable particles
const PARTICLES = Array.from({ length: 16 }, (_, i) => ({
  left: `${(i * 9.1 + 4) % 100}%`,
  top:  `${(i * 13.7 + 6) % 100}%`,
  delay: i * 0.32,
  duration: 3.5 + (i % 4),
}));

// ─── Variants ─────────────────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.8, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] },
  }),
};

// ─── Animated Input ───────────────────────────────────────────────────────────
function Field({ label, id, children, inView, idx }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -24 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.65, delay: 0.2 + idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
    >
      <label htmlFor={id} className="block text-xs tracking-widest uppercase text-gray-500 mb-2 font-medium">
        {label}
      </label>
      {children}
    </motion.div>
  );
}

// ─── Contact ──────────────────────────────────────────────────────────────────
const Contact = () => {
  const sectionRef = useRef(null);
  const formRef   = useRef(null);
  const headerInView = useInView(sectionRef, { once: true, margin: "-8%" });
  const formInView   = useInView(formRef,    { once: true, margin: "-6%" });

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const bgY      = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const springBgY = useSpring(bgY, { stiffness: 50, damping: 18 });

  const [formData, setFormData]     = useState({ name: "", email: "", message: "" });
  const [isLoading, setIsLoading]   = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: null, message: "" });
  const [focused, setFocused]       = useState(null);

  const inputClass = (field) =>
    `w-full px-4 py-3 text-sm bg-white/[0.04] rounded-xl border outline-none transition-all duration-300 placeholder:text-gray-600 text-white ${
      focused === field
        ? "border-[#ffe998]/60 ring-1 ring-[#ffe998]/30 bg-[#ffe998]/5"
        : "border-white/10 hover:border-white/20"
    }`;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus({ type: null, message: "" });
    try {
      const serviceId  = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
      if (!serviceId || !templateId || !publicKey) throw new Error("EmailJS configuration is missing.");
      await emailjs.send(serviceId, templateId, { ...formData }, publicKey);
      setSubmitStatus({ type: "success", message: "Message sent! I'll get back to you soon." });
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      setSubmitStatus({ type: "error", message: err.text || err.message || "Failed to send. Please try again." });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-24 overflow-hidden bg-black text-white"
    >
      {/* Parallax bg glow */}
      <motion.div className="absolute inset-0 pointer-events-none" style={{ y: springBgY }}>
        <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-[#ffe998]/6 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-[#57370d]/15 rounded-full blur-[80px]" />
      </motion.div>

      {/* Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {PARTICLES.map((p, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{ left: p.left, top: p.top, backgroundColor: "#ffe998" }}
            animate={{ y: [0, -14, 0], opacity: [0.15, 0.5, 0.15] }}
            transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">

        {/* ── Header ── */}
        <motion.div
          initial="hidden"
          animate={headerInView ? "visible" : "hidden"}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <motion.div
            custom={0} variants={fadeUp}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#ffe998]/30 bg-white/5 backdrop-blur-md mb-5"
          >
            <Sparkles size={13} className="text-[#ffe998]" />
            <span className="text-[11px] tracking-widest uppercase text-gray-300">Get in touch</span>
          </motion.div>

          <motion.h2
            custom={1} variants={fadeUp}
            className="text-3xl md:text-5xl font-black leading-tight text-white mb-4"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Let's build{" "}
            <span className="italic font-normal" style={{ color: "#ffe998" }}>
              something great.
            </span>
          </motion.h2>

          <motion.p custom={2} variants={fadeUp} className="text-gray-400 leading-relaxed">
            Have a project in mind? Drop me a message and let's make it happen.
          </motion.p>
        </motion.div>

        {/* ── Grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">

          {/* ── Form ── */}
          <motion.div
            ref={formRef}
            initial={{ opacity: 0, x: -50 }}
            animate={formInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative p-[1px] rounded-3xl"
            style={{ background: "linear-gradient(135deg, rgba(255,233,152,0.2) 0%, transparent 50%, rgba(87,55,13,0.15) 100%)" }}
          >
            <div className="bg-black/60 backdrop-blur-md rounded-3xl p-7 sm:p-8">
              <h3
                className="text-xl font-black text-white mb-6"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Send a Message
              </h3>

              <form className="space-y-5" onSubmit={handleSubmit}>
                <Field label="Your Name" id="name" inView={formInView} idx={0}>
                  <input
                    id="name" type="text" required placeholder="Samuel Ntekim"
                    value={formData.name}
                    onFocus={() => setFocused("name")}
                    onBlur={() => setFocused(null)}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={inputClass("name")}
                  />
                </Field>

                <Field label="Email Address" id="email" inView={formInView} idx={1}>
                  <input
                    id="email" type="email" required placeholder="your@email.com"
                    value={formData.email}
                    onFocus={() => setFocused("email")}
                    onBlur={() => setFocused(null)}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={inputClass("email")}
                  />
                </Field>

                <Field label="Message" id="message" inView={formInView} idx={2}>
                  <textarea
                    id="message" rows={5} required placeholder="Tell me about your project..."
                    value={formData.message}
                    onFocus={() => setFocused("message")}
                    onBlur={() => setFocused(null)}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`${inputClass("message")} resize-none`}
                  />
                </Field>

                {/* Submit button */}
                <motion.button
                  type="submit"
                  disabled={isLoading}
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 320, damping: 20 }}
                  className="relative w-full overflow-hidden py-3.5 rounded-xl bg-gradient-to-br from-[#ffe998] to-[#57370d] text-black text-sm font-bold flex items-center justify-center gap-2 shadow-lg shadow-[#ffe998]/20 hover:shadow-[#ffe998]/35 transition-shadow disabled:opacity-60 cusor-pointer"
                >
                  {/* shimmer */}
                  <motion.span
                    className="absolute inset-0 bg-white/25"
                    initial={{ x: "-100%", skewX: -15 }}
                    whileHover={{ x: "200%" }}
                    transition={{ duration: 0.55, ease: "easeInOut" }}
                  />
                  {isLoading ? (
                    <motion.span
                      animate={{ rotate: 360 }}
                      transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                      className="w-4 h-4 border-2 border-black/40 border-t-black rounded-full "
                    />
                  ) : (
                    <>
                      Send Message
                      <Send size={15} />
                    </>
                  )}
                </motion.button>

                {/* Status toast */}
                <AnimatePresence>
                  {submitStatus.type && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -8, scale: 0.95 }}
                      transition={{ duration: 0.4 }}
                      className={`flex items-center gap-3 p-4 rounded-xl text-sm border ${
                        submitStatus.type === "success"
                          ? "bg-green-500/10 border-green-500/20 text-green-400"
                          : "bg-red-500/10 border-red-500/20 text-red-400"
                      }`}
                    >
                      {submitStatus.type === "success"
                        ? <CheckCircle size={16} />
                        : <AlertCircle size={16} />}
                      <p>{submitStatus.message}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </div>
          </motion.div>

          {/* ── Right column ── */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={formInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-6"
          >
            {/* Contact info card */}
            
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;