"use client";

import { ReactLenis } from "@studio-freight/react-lenis";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import React from "react";

export function Providers({ children }: { children: React.ReactNode }) {
  // Cast Lenis for type consistency if needed, though strictly not required if types match
  const Lenis = ReactLenis as unknown as React.ComponentType<{
    root?: boolean;
    options?: any;
    children?: React.ReactNode;
  }>;

  return (
    <NextThemesProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <Lenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
        {children}
      </Lenis>
    </NextThemesProvider>
  );
}
