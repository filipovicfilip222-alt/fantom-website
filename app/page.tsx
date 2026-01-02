"use client";

import Hero from "@/components/Hero";
import About from "@/components/About";
import Capabilities from "@/components/Capabilities";
import Manifesto from "@/components/Manifesto";
import Contact from "@/components/Contact";
import Navigation from "@/components/Navigation";
import GridBackground from "@/components/GridBackground";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-deep-black text-ghost-white">

      {/* Grid Background */}
      <GridBackground />

      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Capabilities Section */}
      <Capabilities />

      {/* Manifesto Section */}
      <Manifesto />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 bg-deep-black/80 backdrop-blur-md">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/50">
              © 2026 Fantom. Sva prava zadržana.
            </p>
            <p className="text-sm text-white/50">
              Dizajnirano sa namerom. Izgrađeno sa preciznošću.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}

