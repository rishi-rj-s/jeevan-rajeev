"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section className="min-h-screen lg:h-screen flex flex-col items-center justify-center px-6 md:px-12 py-24 lg:py-0 bg-background relative z-10 selection:bg-accent selection:text-white lg:overflow-hidden">
      <div className="max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center h-auto lg:h-full lg:max-h-[90vh]">
        
        {/* Left: Image */}
        <motion.div 
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
           viewport={{ once: true }}
           className="relative h-[50vh] lg:h-[80vh] w-full overflow-visible rounded-sm order-2 lg:order-1 group"
        >

            <Image 
              src="/jeevan-rajeev.png" 
              alt="Jeevan Rajeev"
              fill
              className="object-contain transition-all duration-700 ease-in-out scale-100 group-hover:scale-105"
              priority
            />
        </motion.div>

        {/* Right: Content */}
        <div className="flex flex-col justify-center space-y-8 order-1 lg:order-2">
          
          {/* Bio Section */}
          <div className="space-y-6">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-7xl font-serif text-foreground font-medium leading-tight tracking-tight"
            >
             I decode <span className="text-zinc-500 italic font-light">noise</span> into <span className="text-accent italic font-light">signal.</span>
            </motion.h2>
            
            <div className="text-lg md:text-xl text-subtle font-sans font-light leading-relaxed space-y-4">
              <p>
                My work exists at the intersection of <span className="text-foreground font-medium">Market Economics</span> and <span className="text-foreground font-medium">Human Behavior</span>. Based in Kollam, I analyze global shifts through a local lens.
              </p>
              <p>
                Currently pursuing a Bachelor's in <span className="text-foreground font-medium">Economics</span> at Fathima Matha National College with a history of academic distinction. I don't just study markets; I narrate them.
              </p>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-subtle/10 pt-6">
            
            {/* Item 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <h3 className="text-xs font-sans text-subtle uppercase tracking-[0.2em] mb-2 group-hover:text-accent transition-colors">Education</h3>
              <p className="text-xl font-serif text-foreground">BA Economics</p>
              <p className="text-sm font-sans text-subtle mt-1">First Year Scholar</p>
            </motion.div>
  
            {/* Item 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <h3 className="text-xs font-sans text-subtle uppercase tracking-[0.2em] mb-2 group-hover:text-accent transition-colors">Expertise</h3>
              <div className="flex flex-wrap gap-2 text-lg font-serif text-foreground">
                <span>Econometrics</span>
                <span className="text-subtle/30">•</span>
                <span>Analysis</span>
              </div>
            </motion.div>
  
            {/* Item 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="group md:col-span-2"
            >
              <h3 className="text-xs font-sans text-subtle uppercase tracking-[0.2em] mb-2 group-hover:text-accent transition-colors">Distinction</h3>
              <p className="text-3xl md:text-4xl font-sans font-light text-accent">Top Tier</p>
              <p className="text-sm font-sans text-subtle mt-1">Consistent High Performer</p>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
