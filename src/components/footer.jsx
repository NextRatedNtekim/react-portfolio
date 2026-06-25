import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaTwitter, FaGithub, FaLinkedin, FaWhatsapp, FaArrowRight, FaHeart} from "react-icons/fa"
import { IoSparkles } from "react-icons/io5";

import Background from "../assets/bg-2.jpg"

// Social links 
const socials = [
  { icon: FaGithub,        label: "GitHub",    href: "https://github.com/NextRatedNtekim" },
  { icon: FaTwitter,       label: "Twitter",   href: "https://x.com/underrated_lx" },
  { icon: FaLinkedin,      label: "LinkedIn",  href: "https://www.linkedin.com/in/samuel-ntekim-184a56303?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
  { icon: FaWhatsapp, label: "WhatsApp",  href: "https://wa.me/qr/EFURGDSMYEJTL1" },
];


const fadeUp = {
  hidden:  { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] },
  }),
};

//  Footer
export default function Footer() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-6%" });

  return (
    <footer
      ref={ref}
      className="relative overflow-hidden bg-black text-white border-t border-white/[0.06]"
    >
      

      {/* Top ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[160px] bg-[#ffe998]/6 blur-[90px] rounded-full pointer-events-none" />
      
      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[220px] h-px bg-gradient-to-r from-transparent via-[#ffe998]/60 to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-14">

        {/*  Divider  */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={inView ? { scaleX: 1, opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          style={{ originX: 0 }}
          className="w-full h-px bg-gradient-to-r from-[#ffe998]/30 via-white/10 to-transparent mb-8"
        />

        {/*  Bottom row  */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex flex-col sm:flex-row justify-between items-center gap-5"
        >
          {/* Copyright */}
          <motion.p custom={3} variants={fadeUp} className="text-xs text-gray-600 order-2 sm:order-1">
            © {new Date().getFullYear()} Samuel Ntekim. All rights reserved.
          </motion.p>

          {/* Built with */}
          

          {/* Social icons */}
          <motion.div custom={5} variants={fadeUp} className="flex items-center gap-3 order-1 sm:order-3">
            {socials.map(({ icon: Icon, label, href }, i) => (
              <motion.a
                key={i}
                href={href}
                aria-label={label}
                whileHover={{ y: -3, scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 350, damping: 18 }}
                className="w-9 h-9 rounded-xl border border-white/10 bg-white/[0.03] flex items-center justify-center text-gray-500 hover:text-[#ffe998] hover:border-[#ffe998]/30 hover:bg-[#ffe998]/8 transition-colors duration-300"
              >
                <Icon size={15} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}

