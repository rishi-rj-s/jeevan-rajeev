"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

  return (
    <section 
      ref={containerRef} 
      className="h-screen w-full flex flex-col items-center justify-center relative overflow-hidden bg-background px-4"
    >
      <motion.div 
        style={{ opacity, scale, y }}
        className="w-full max-w-[90vw] mx-auto text-center z-10"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xs md:text-sm uppercase tracking-[0.3em] text-blue-600 dark:text-blue-400 mb-8 font-sans font-bold"
        >
          Economist • Visualist
        </motion.p>
        
        <h1 className="text-[14vw] leading-[0.8] font-serif tracking-tighter text-foreground mix-blend-difference mb-8">
          <motion.span
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="block"
          >
            JEEVAN
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300"
          >
            RAJEEV
          </motion.span>
        </h1>
        
        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ duration: 1, delay: 1 }}
           className="flex flex-col md:flex-row justify-between items-center text-subtle text-sm md:text-lg max-w-4xl mx-auto gap-4 md:gap-0 mt-12 font-sans font-light tracking-wide uppercase"
        >
          <p>Market Analyst</p>
          <div className="w-1 h-1 bg-blue-600 dark:bg-blue-400 rounded-full hidden md:block" />
          <p>Content Strategist</p>
          <div className="w-1 h-1 bg-blue-600 dark:bg-blue-400 rounded-full hidden md:block" />
          <p>India</p> 
        </motion.div>
      </motion.div>

      {/* Modern Gradient Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-blue-500/5 rounded-full blur-[150px] animate-pulse" />
      </div>

       {/* Scroll Indicator */}
       <motion.div 
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ delay: 2, duration: 1 }}
         className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
       >
         <span className="text-[10px] uppercase tracking-widest text-subtle">Scroll</span>
         <div className="w-[1px] h-12 bg-gradient-to-b from-blue-600 to-transparent dark:from-blue-400" />
       </motion.div>
    </section>
  );
}
