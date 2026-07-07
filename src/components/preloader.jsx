import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

// Minimal one-shot preloader: counts 0 -> 100, thin lime progress line,
// then fades out and calls onComplete. No loops, no particles — kept
// deliberately light so it never becomes the thing slowing the page down.
export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const start = performance.now();
    const duration = 900; // ms

    let frame;
    const tick = (now) => {
      const pct = Math.min(100, Math.round(((now - start) / duration) * 100));
      setProgress(pct);
      if (pct < 100) {
        frame = requestAnimationFrame(tick);
      } else {
        setTimeout(() => setVisible(false), 150);
      }
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {visible && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center gap-6 bg-black"
        >
          <span
            className="text-sm tracking-[0.3em] uppercase text-white/70"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            Samuel Ntekim
          </span>

          <div className="relative w-40 h-px bg-white/10 overflow-hidden">
            <motion.div
              className="absolute inset-y-0 left-0 bg-[#d4ff4f]"
              style={{ width: `${progress}%` }}
              transition={{ ease: "linear" }}
            />
          </div>

          <span
            className="text-xs tabular-nums text-[#d4ff4f]/80"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            {progress}%
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
