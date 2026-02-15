"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Copy, Check } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "jeevanrajeev2007@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="w-full min-h-[80vh] flex flex-col justify-between pt-24 pb-6 px-6 md:px-12 bg-background relative overflow-hidden" id="contact">
      
      {/* Top Section */}
      <div className="w-full flex justify-between items-start border-b border-subtle pb-8 mb-12">
        <span className="text-sm font-sans uppercase tracking-[0.2em] text-subtle">Contact</span>
        <span className="text-sm font-sans uppercase tracking-[0.2em] text-subtle animate-pulse">Open for Collaboration</span>
      </div>

      {/* Main Content */}
      <div className="flex flex-col flex-grow justify-center z-10">
        <motion.h2 
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-[12vw] leading-[0.8] font-serif tracking-tighter mb-12 text-foreground"
        >
          LET'S <span className="text-zinc-500 italic font-light">TALK</span><br/>
          BUSINESS.
        </motion.h2>

        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-12 w-full">
          
          {/* Interactive Email Block */}
          <div className="group relative">
            <p className="text-sm font-sans text-subtle mb-2 uppercase tracking-wide">Email Address</p>
            <div className="flex items-center gap-4">
              <a 
                href={`mailto:${email}`}
                className="text-lg sm:text-2xl md:text-5xl font-sans font-medium hover:text-accent transition-colors duration-300 relative uppercase break-all sm:break-normal"
              >
                {email}
                <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-accent transition-all duration-300 group-hover:w-full" />
              </a>
              <button 
                onClick={handleCopy}
                className="p-3 rounded-full hover:bg-subtle/10 transition-colors"
                title="Copy Email"
              >
                {copied ? <Check className="w-6 h-6 text-green-500" /> : <Copy className="w-6 h-6 text-subtle" />}
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
             <p className="text-sm font-sans text-subtle mb-2 uppercase tracking-wide">Direct Line</p>
             <a 
               href="tel:+919567604984"
               className="text-lg sm:text-2xl md:text-4xl font-sans font-medium hover:text-foreground transition-colors flex items-center gap-2 break-all sm:break-normal"
             >
               +91 9567604984
               <ArrowUpRight className="w-6 h-6 text-subtle" />
             </a>
          </div>
        </div>
      </div>

      {/* Footer Meta */}
      <div className="w-full flex flex-col md:flex-row justify-between items-end md:items-center mt-24 pt-8 border-t border-subtle/20 text-subtle text-xs font-mono uppercase tracking-widest">
        <span>Kollam, Kerala</span>
        <span>© {new Date().getFullYear()} Jeevan Rajeev</span>
      </div>

      {/* Decorative Blob */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[40vw] h-[40vw] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
    </footer>
  );
}
