"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = (e: React.MouseEvent<HTMLButtonElement>) => {
    const newTheme = resolvedTheme === "light" ? "dark" : "light";

    // @ts-ignore
    if (!document.startViewTransition) {
      setTheme(newTheme);
      return;
    }

    const x = e.clientX;
    const y = e.clientY;
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    // @ts-ignore
    const transition = document.startViewTransition(() => {
      setTheme(newTheme);
    });

    transition.ready.then(() => {
      const clipPath = [
        `circle(0px at ${x}px ${y}px)`,
        `circle(${endRadius}px at ${x}px ${y}px)`,
      ];

      document.documentElement.animate(
        {
          clipPath: clipPath,
        },
        {
          duration: 500,
          easing: "ease-in-out",
          pseudoElement: "::view-transition-new(root)",
        }
      );
    });
  };

  if (!mounted) return null;

  return (
    <motion.button
      onClick={toggleTheme}
      className="p-3 rounded-full shadow-xl border hover:scale-110 active:scale-90 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent"
      style={{
        backgroundColor: resolvedTheme === 'dark' ? '#27272a' : '#ffffff',
        borderColor: resolvedTheme === 'dark' ? '#3f3f46' : '#000000',
      }}
      aria-label="Toggle Theme"
      layout
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
           key={resolvedTheme}
           initial={{ y: -20, opacity: 0 }}
           animate={{ y: 0, opacity: 1 }}
           exit={{ y: 20, opacity: 0 }}
           transition={{ duration: 0.2 }}
        >
          {resolvedTheme === "dark" ? (
             <Sun className="w-5 h-5 text-yellow-400" strokeWidth={2.5} />
          ) : (
             <Moon 
               className="w-5 h-5" 
               style={{ color: '#000000' }} 
               strokeWidth={1.5} 
               fill="transparent" 
             />
          )}
        </motion.div>
      </AnimatePresence>
    </motion.button>
  );
}
