import About from "@/components/about";
import Contact from "@/components/contact";
import Hero from "@/components/hero";
// Removed Work import as requested

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-transparent relative w-full">
      <Hero />
      <About />
      {/* Removed Work section */}
      <Contact />
      
      {/* Global Grain Overlay for Texture */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat" />
    </main>
  );
}
