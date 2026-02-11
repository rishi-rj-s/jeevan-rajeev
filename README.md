# The Modern Intellectual - Munna's Portfolio

A high-performance, cinematic editorial portfolio designed for Jeevan Rajeev. Built with Next.js 16 (App Router), Tailwind CSS v4, and Framer Motion.

## 🌟 Key Features

*   **Cinematic Design**: "The Void" aesthetic with massive typography and high-contrast visuals.
*   **Playfair Display & Manrope**: Premium editorial font pairing.
*   **Interactive Theme**: Smooth transition between "Warm Paper" (Light) and "Zinc Void" (Dark) modes.
*   **Performance First**: 100/100 Lighthouse targets using Next.js optimization and Lenis smooth scrolling.
*   **Narrative Flow**: Single-page storytelling architecture.

## 🛠 Tech Stack

*   **Framework**: Next.js 16 (Turbopack)
*   **Styling**: Tailwind CSS v4 + Framer Motion
*   **Fonts**: `next/font` (Google Fonts)
*   **Icons**: Lucide React
*   **Scroll**: `@studio-freight/react-lenis`

## 🚀 Getting Started

1.  **Clone & Install**
    ```bash
    npm install
    # Note: Use --legacy-peer-deps if you encounter React 19 warnings with Lenis
    ```

2.  **Run Development Server**
    ```bash
    npm run dev
    ```

3.  **Build for Production**
    ```bash
    npm run build
    npm start
    ```

## 🎨 Theme System

The design system uses CSS variables for instant theme switching.
*   **Light**: Background `#fdfbf7`, Foreground `#1c1917`
*   **Dark**: Background `#09090b`, Foreground `#fafafa`
*   **Accent**: `#e11d48` (Rose Crimson)

## 📂 Project Structure

*   `app/page.tsx`: Main entry point orchestrating the narrative sections.
*   `app/globals.css`: Tailwind v4 theme configuration and base styles.
*   `components/`: Reusable UI blocks (Hero, About, Contact, ThemeToggle).

---
*Designed & Architected for the Modern Intellectual.*
