// // import { useEffect, useState } from "react";
// // import { motion, AnimatePresence } from "framer-motion";
// // import Home from "../pages/home"
// // // ─────────────────────────────────────────────────────────────
// // // Helpers
// // // ─────────────────────────────────────────────────────────────

// // // Fake API request
// // async function fetchPortfolioData() {
// //   const res = await fetch("https://jsonplaceholder.typicode.com/users");

// //   if (!res.ok) {
// //     throw new Error("Failed to fetch");
// //   }

// //   return res.json();
// // }

// // // Preload image
// // function preloadImage(src) {
// //   return new Promise((resolve, reject) => {
// //     const img = new Image();

// //     // img.src = src;

// //     img.onload = resolve;

// //     img.onerror = reject;
// //   });
// // }

// // // ─────────────────────────────────────────────────────────────
// // // PRELOADER
// // // ─────────────────────────────────────────────────────────────

// // function Preloader({ loading }) {
// //   const [charIndex, setCharIndex] = useState(0);
// //   const [showTagline, setShowTagline] = useState(false);

// //   const name = "Samuel Ntekim";
// //   const tagline = "Frontend Developer & Designer";

// //   // Typing animation
// //   useEffect(() => {
// //     if (!loading) return;

// //     if (charIndex < name.length) {
// //       const timer = setTimeout(() => {
// //         setCharIndex((prev) => prev + 1);
// //       }, 80);

// //       return () => clearTimeout(timer);
// //     } else {
// //       const taglineTimer = setTimeout(() => {
// //         setShowTagline(true);
// //       }, 300);

// //       return () => clearTimeout(taglineTimer);
// //     }
// //   }, [charIndex, loading]);

// //   return (
// //     <AnimatePresence>
// //       {loading && (
// //         <motion.div
// //           initial={{ opacity: 1 }}
// //           exit={{
// //             opacity: 0,
// //             clipPath: "inset(0 0 100% 0)",
// //           }}
// //           transition={{
// //             duration: 0.9,
// //             ease: [0.76, 0, 0.24, 1],
// //           }}
// //           className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-[#0d0c0b]"
// //         >
// //           {/* Grain */}
// //           <div
// //             className="absolute inset-0 opacity-40"
// //             style={{
// //               backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E")`,
// //             }}
// //           />

// //           {/* Rings */}
// //           <motion.div
// //             initial={{ opacity: 0, scale: 0.6 }}
// //             animate={{ opacity: 0.08, scale: 1 }}
// //             transition={{ duration: 1.2 }}
// //             className="absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full border border-[#c8b8a2]"
// //           />

// //           <motion.div
// //             initial={{ opacity: 0, scale: 0.6 }}
// //             animate={{ opacity: 0.05, scale: 1 }}
// //             transition={{ duration: 1.4 }}
// //             className="absolute -bottom-24 -left-24 h-[350px] w-[350px] rounded-full border border-[#c8b8a2]"
// //           />

// //           {/* Center */}
// //           <div className="relative z-10 flex flex-col items-center">
// //             {/* Top line */}
// //             <motion.div
// //               initial={{ scaleX: 0 }}
// //               animate={{ scaleX: 1 }}
// //               transition={{ duration: 0.8 }}
// //               className="mb-8 h-[1px] w-[280px] origin-left bg-gradient-to-r from-transparent via-[#c8b8a2] to-transparent"
// //             />

// //             {/* Name */}
// //             <h1 className="overflow-hidden font-serif text-[clamp(2.5rem,7vw,5rem)] font-light tracking-wide text-[#e8dfd4]">
// //               {name.slice(0, charIndex)}

// //               <motion.span
// //                 animate={{ opacity: [1, 0] }}
// //                 transition={{
// //                   repeat: Infinity,
// //                   duration: 0.7,
// //                 }}
// //                 className="ml-1 text-[#c8b8a2]"
// //               >
// //                 |
// //               </motion.span>
// //             </h1>

// //             {/* Tagline */}
// //             <AnimatePresence>
// //               {showTagline && (
// //                 <motion.p
// //                   initial={{
// //                     opacity: 0,
// //                     y: 10,
// //                     filter: "blur(6px)",
// //                   }}
// //                   animate={{
// //                     opacity: 1,
// //                     y: 0,
// //                     filter: "blur(0px)",
// //                   }}
// //                   className="mt-4 font-mono text-xs uppercase tracking-[0.3em] text-[#9a8e82]"
// //                 >
// //                   {tagline}
// //                 </motion.p>
// //               )}
// //             </AnimatePresence>

// //             {/* Bottom line */}
// //             <motion.div
// //               initial={{ scaleX: 0 }}
// //               animate={{ scaleX: 1 }}
// //               transition={{ duration: 0.8, delay: 0.2 }}
// //               className="mt-8 h-[1px] w-[280px] origin-left bg-gradient-to-r from-transparent via-[#c8b8a2] to-transparent"
// //             />

// //             {/* Loader */}
// //             <div className="mt-6 h-[2px] w-[240px] overflow-hidden bg-[#2a2622]">
// //               <motion.div
// //                 animate={{
// //                   x: ["-100%", "250%"],
// //                 }}
// //                 transition={{
// //                   repeat: Infinity,
// //                   duration: 1.1,
// //                   ease: "easeInOut",
// //                 }}
// //                 className="h-full w-[40%] bg-gradient-to-r from-transparent via-[#e8dfd4] to-transparent"
// //               />
// //             </div>
// //           </div>
// //         </motion.div>
// //       )}
// //     </AnimatePresence>
// //   );
// // }

// // // ─────────────────────────────────────────────────────────────
// // // APP
// // // ─────────────────────────────────────────────────────────────

// // export default function Loader() {
// //   const [loading, setLoading] = useState(true);
// //   const [users, setUsers] = useState([]);

// //   useEffect(() => {
// //     async function initializeApp() {
// //       try {
// //         // Wait for everything
// //         const [data] = await Promise.all([
// //           fetchPortfolioData(),

// //           preloadImage(
// //             "https://images.unsplash.com/photo-1518770660439-4636190af475"
// //           ),

// //           document.fonts.ready,

// //           // minimum loader time
// //           new Promise((resolve) => setTimeout(resolve, 2500)),
// //         ]);

// //         setUsers(data);
// //       } catch (err) {
// //         console.error(err);
// //       } finally {
// //         setLoading(false);
// //       }
// //     }

// //     initializeApp();
// //   }, []);

// //   return (
// //     <div className="min-h-screen bg-[#0d0c0b] text-[#e8dfd4]">
// //       {/* PRELOADER */}
// //       <Preloader loading={loading} />

// //       {/* PAGE */}
// //       {!loading && (
// //         <motion.div
// //           initial={{ opacity: 0, y: 30 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.8 }}
// //           className="flex min-h-screen flex-col items-center justify-center px-6 text-center"
// //         >
// //           <Home />
// //         </motion.div>
// //       )}
// //     </div>
// //   );
// // }


// // import { useEffect, useState } from "react";
// // import { motion, AnimatePresence } from "framer-motion";
// // import Home from "../pages/home";

// // // ─────────────────────────────────────────────
// // // Helpers
// // // ─────────────────────────────────────────────

// // function preloadImage(src) {
// //   return new Promise((resolve, reject) => {
// //     const img = new Image();

// //     img.src = src;

// //     img.onload = resolve;
// //     img.onerror = reject;
// //   });
// // }

// // // ─────────────────────────────────────────────
// // // PRELOADER
// // // ─────────────────────────────────────────────

// // function Preloader({ onComplete }) {
// //   const [charIndex, setCharIndex] = useState(0);
// //   const [showTagline, setShowTagline] = useState(false);

// //   const name = "Samuel Ntekim";
// //   const tagline = "Frontend Developer & Designer";

// //   useEffect(() => {
// //     if (charIndex < name.length) {
// //       const timer = setTimeout(() => setCharIndex((prev) => prev + 1), 80);
// //       return () => clearTimeout(timer);
// //     }

// //     // Name is done typing — show tagline, then call onComplete
// //     const taglineTimer = setTimeout(() => setShowTagline(true), 300);
// //     const doneTimer = setTimeout(() => onComplete?.(), 2500); // ← fires after tagline appears

// //     return () => {
// //       clearTimeout(taglineTimer);
// //       clearTimeout(doneTimer);
// //     };
// //   }, [charIndex]);

// //   return (
// //     <motion.div
// //       initial={{ opacity: 1 }}
// //       exit={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
// //       transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
// //       className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-[#0d0c0b]"
// //     >
// //       {/* Grain */}
// //       <div
// //         className="absolute inset-0 opacity-40"
// //         style={{
// //           backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E")`,
// //         }}
// //       />

// //       {/* Ring */}
// //       <motion.div
// //         initial={{ opacity: 0, scale: 0.6 }}
// //         animate={{ opacity: 0.08, scale: 1 }}
// //         transition={{ duration: 1.2 }}
// //         className="absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full border border-[#c8b8a2]"
// //       />

// //       {/* Content */}
// //       <div className="relative z-10 flex flex-col items-center">
// //         {/* Top line */}
// //         <motion.div
// //           initial={{ scaleX: 0 }}
// //           animate={{ scaleX: 1 }}
// //           transition={{ duration: 0.8 }}
// //           className="mb-8 h-[1px] w-[280px] origin-left bg-gradient-to-r from-transparent via-[#c8b8a2] to-transparent"
// //         />

// //         {/* Name */}
// //         <h1 className="overflow-hidden font-serif text-[clamp(2.5rem,7vw,5rem)] font-light tracking-wide text-[#e8dfd4]">
// //           {name.slice(0, charIndex)}

// //           <motion.span
// //             animate={{ opacity: [1, 0] }}
// //             transition={{
// //               repeat: Infinity,
// //               duration: 0.7,
// //             }}
// //             className="ml-1 text-[#c8b8a2]"
// //           >
// //             |
// //           </motion.span>
// //         </h1>

// //         {/* Tagline */}
// //         <AnimatePresence>
// //           {showTagline && (
// //             <motion.p
// //               initial={{
// //                 opacity: 0,
// //                 y: 10,
// //                 filter: "blur(6px)",
// //               }}
// //               animate={{
// //                 opacity: 1,
// //                 y: 0,
// //                 filter: "blur(0px)",
// //               }}
// //               className="mt-4 font-mono text-xs uppercase tracking-[0.3em] text-[#9a8e82]"
// //             >
// //               {tagline}
// //             </motion.p>
// //           )}
// //         </AnimatePresence>

// //         {/* Bottom line */}
// //         <motion.div
// //           initial={{ scaleX: 0 }}
// //           animate={{ scaleX: 1 }}
// //           transition={{ duration: 0.8, delay: 0.2 }}
// //           className="mt-8 h-[1px] w-[280px] origin-left bg-gradient-to-r from-transparent via-[#c8b8a2] to-transparent"
// //         />

// //         {/* Loader */}
// //         <div className="mt-6 h-[2px] w-[240px] overflow-hidden bg-[#2a2622]">
// //           <motion.div
// //             animate={{
// //               x: ["-100%", "250%"],
// //             }}
// //             transition={{
// //               repeat: Infinity,
// //               duration: 1.1,
// //               ease: "easeInOut",
// //             }}
// //             className="h-full w-[40%] bg-gradient-to-r from-transparent via-[#e8dfd4] to-transparent"
// //           />
// //         </div>
// //       </div>
// //     </motion.div>
// //   );
// // }

// // // ─────────────────────────────────────────────
// // // LOADER WRAPPER
// // // ─────────────────────────────────────────────

// // export default function Loader() {
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     async function initializeApp() {
// //       try {
// //         await Promise.all([
// //           preloadImage(
// //             "https://images.unsplash.com/photo-1518770660439-4636190af475"
// //           ),

// //           document.fonts.ready,

// //           // minimum loader duration
// //           new Promise((resolve) => setTimeout(resolve, 2500)),
// //         ]);
// //       } catch (err) {
// //         console.error(err);
// //       } finally {
// //         setLoading(false);
// //       }
// //     }

// //     initializeApp();
// //   }, []);

// //   return (
// //     <div className="min-h-screen bg-[#0d0c0b] text-[#e8dfd4]">
// //       {/* PRELOADER */}
// //       <AnimatePresence mode="wait">
// //         {loading && <Preloader />}
// //       </AnimatePresence>

// //       {/* PAGE */}
// //       {!loading && (
// //         <motion.div
// //           initial={{ opacity: 0, y: 30 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.8 }}
// //         >
// //           <Home />
// //         </motion.div>
// //       )}
// //     </div>
// //   );
// // }


// import { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import HomePage from "../pages/home";

// // ─────────────────────────────────────────────
// // Helpers
// // ─────────────────────────────────────────────

// function preloadImage(src) {
//   return new Promise((resolve, reject) => {
//     const img = new Image();

//     img.src = src;

//     img.onload = resolve;
//     img.onerror = reject;
//   });
// }

// // ─────────────────────────────────────────────
// // PRELOADER COMPONENT
// // ─────────────────────────────────────────────

// function Preloader() {
//   const [charIndex, setCharIndex] = useState(0);
//   const [showTagline, setShowTagline] = useState(false);

//   const name = "Samuel Ntekim";
//   const tagline = "Frontend Developer & Designer";

//   // Typing animation
//   useEffect(() => {
//     if (charIndex < name.length) {
//       const timer = setTimeout(() => {
//         setCharIndex((prev) => prev + 1);
//       }, 80);

//       return () => clearTimeout(timer);
//     }

//     const taglineTimer = setTimeout(() => {
//       setShowTagline(true);
//     }, 300);

//     return () => clearTimeout(taglineTimer);
//   }, [charIndex]);

//   return (
//     <motion.div
//       initial={{ opacity: 1 }}
//       exit={{
//         opacity: 0,
//         clipPath: "inset(0 0 100% 0)",
//       }}
//       transition={{
//         duration: 0.9,
//         ease: [0.76, 0, 0.24, 1],
//       }}
//       className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-[#0d0c0b]"
//     >
//       {/* Grain Texture */}
//       <div
//         className="absolute inset-0 opacity-40"
//         style={{
//           backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E")`,
//         }}
//       />

//       {/* Decorative Rings */}
//       <motion.div
//         initial={{ opacity: 0, scale: 0.6 }}
//         animate={{ opacity: 0.08, scale: 1 }}
//         transition={{ duration: 1.2 }}
//         className="absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full border border-[#c8b8a2]"
//       />

//       <motion.div
//         initial={{ opacity: 0, scale: 0.6 }}
//         animate={{ opacity: 0.05, scale: 1 }}
//         transition={{ duration: 1.4 }}
//         className="absolute -bottom-24 -left-24 h-[350px] w-[350px] rounded-full border border-[#c8b8a2]"
//       />

//       {/* Main Content */}
//       <div className="relative z-10 flex flex-col items-center">
//         {/* Top Accent Line */}
//         <motion.div
//           initial={{ scaleX: 0, opacity: 0 }}
//           animate={{ scaleX: 1, opacity: 1 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//           className="mb-8 h-[1px] w-[280px] origin-left bg-gradient-to-r from-transparent via-[#c8b8a2] to-transparent"
//         />

//         {/* Name */}
//         <h1 className="overflow-hidden font-serif text-[clamp(2.5rem,7vw,5rem)] font-light tracking-wide text-[#e8dfd4]">
//           {name.slice(0, charIndex)}

//           <motion.span
//             animate={{ opacity: [1, 0] }}
//             transition={{
//               repeat: Infinity,
//               duration: 0.7,
//             }}
//             className="ml-1 text-[#c8b8a2]"
//           >
//             |
//           </motion.span>
//         </h1>

//         {/* Tagline */}
//         <AnimatePresence>
//           {showTagline && (
//             <motion.p
//               initial={{
//                 opacity: 0,
//                 y: 10,
//                 filter: "blur(6px)",
//               }}
//               animate={{
//                 opacity: 1,
//                 y: 0,
//                 filter: "blur(0px)",
//               }}
//               transition={{
//                 duration: 0.5,
//                 ease: "easeOut",
//               }}
//               className="mt-4 font-mono text-xs uppercase tracking-[0.3em] text-[#9a8e82]"
//             >
//               {tagline}
//             </motion.p>
//           )}
//         </AnimatePresence>

//         {/* Bottom Accent Line */}
//         <motion.div
//           initial={{ scaleX: 0 }}
//           animate={{ scaleX: 1 }}
//           transition={{
//             duration: 0.8,
//             delay: 0.2,
//           }}
//           className="mt-8 h-[1px] w-[280px] origin-left bg-gradient-to-r from-transparent via-[#c8b8a2] to-transparent"
//         />

//         {/* Loading Bar */}
//         <div className="mt-6 h-[2px] w-[240px] overflow-hidden bg-[#2a2622]">
//           <motion.div
//             animate={{
//               x: ["-100%", "250%"],
//             }}
//             transition={{
//               repeat: Infinity,
//               duration: 1.1,
//               ease: "easeInOut",
//             }}
//             className="h-full w-[40%] bg-gradient-to-r from-transparent via-[#e8dfd4] to-transparent"
//           />
//         </div>
//       </div>
//     </motion.div>
//   );
// }

// // ─────────────────────────────────────────────
// // LOADER WRAPPER
// // ─────────────────────────────────────────────

// export default function Loader() {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     async function initializeApp() {
//       try {
//         await Promise.all([
//           // Preload important image(s)
//           preloadImage(
//             "https://images.unsplash.com/photo-1518770660439-4636190af475"
//           ),

//           // Wait for fonts
//           document.fonts.ready,

//           // Minimum loader display time
//           new Promise((resolve) => setTimeout(resolve, 2500)),
//         ]);
//       } catch (err) {
//         console.error("Loader Error:", err);
//       } finally {
//         setLoading(false);
//       }
//     }

//     initializeApp();
//   }, []);

//   return (
//     <div className="min-h-screen bg-[#0d0c0b] text-[#e8dfd4]">
//       {/* PRELOADER */}
//       <AnimatePresence mode="wait">
//         {loading && <Preloader key="preloader" />}
//       </AnimatePresence>

//       {/* PAGE CONTENT */}
//       {!loading && (
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{
//             duration: 0.8,
//             ease: "easeOut",
//           }}
//         >
//           <HomePage />
//         </motion.div>
//       )}
//     </div>
//   );
// }