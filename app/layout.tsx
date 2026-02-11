import type { Metadata } from "next";
import { Playfair_Display, Manrope } from "next/font/google"; // New Fonts
import "./globals.css";
import { Providers } from "./providers";
import { ThemeToggle } from "../components/theme-toggle";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jeevan Rajeev | The Modern Intellectual",
  description: "Rising intellectual talent, market analyst, and content strategist based in Kollam, Kerala. Decoding noise into signal through economics and visual storytelling.",
  keywords: ["Jeevan Rajeev", "Economist", "Market Analyst", "Content Strategist", "Kollam", "Kerala", "Portfolio", "Economics", "Visualist"],
  authors: [{ name: "Jeevan Rajeev" }],
  creator: "Jeevan Rajeev",
  publisher: "Jeevan Rajeev",
  openGraph: {
    title: "Jeevan Rajeev | The Modern Intellectual",
    description: "Rising intellectual talent, market analyst, and content strategist based in Kollam, Kerala.",
    url: "https://jeevanrajeev.com", // Placeholder, user can update
    siteName: "Jeevan Rajeev Portfolio",
    locale: "en_US",
    type: "website",
    images: [{
      url: "/icon.jpeg", // Using the favicon as OG image for now, can be updated to specific OG image
      width: 800,
      height: 600,
      alt: "Jeevan Rajeev Portfolio",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jeevan Rajeev | The Modern Intellectual",
    description: "Decoding noise into signal. Market Analyst & Content Strategist.",
    images: ["/icon.jpeg"], 
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${playfair.variable} ${manrope.variable} font-sans antialiased bg-background text-foreground transition-colors duration-500 selection:bg-accent selection:text-white`}
      >
        <Providers>
          <div className="fixed top-6 right-6 z-50">
            <ThemeToggle />
          </div>
          {children}
        </Providers>
      </body>
    </html>
  );
}
