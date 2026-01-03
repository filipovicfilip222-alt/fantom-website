"use client";

import Hero from "@/components/Hero";
import About from "@/components/About";
import Capabilities from "@/components/Capabilities";
import Manifesto from "@/components/Manifesto";
import SEOContent from "@/components/SEOContent";
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

      {/* SEO Content Section */}
      <SEOContent />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 bg-deep-black/80 backdrop-blur-md">
        <div className="container mx-auto px-6 py-12">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Company Info */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-neon-purple">Fantom</h3>
              <p className="text-sm text-white/60 leading-relaxed mb-4">
                Profesionalna agencija za izradu sajtova. Pravljenje web stranica, 
                SEO optimizacija, web dizajn. Vaš partner za digitalni uspeh.
              </p>
              <p className="text-sm text-white/50">
                📧 info@fantom.systems
              </p>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white/90">Naše Usluge</h4>
              <ul className="space-y-2 text-sm text-white/60">
                <li><a href="#capabilities" className="hover:text-neon-purple transition-colors">Izrada Web Sajtova</a></li>
                <li><a href="#capabilities" className="hover:text-neon-purple transition-colors">E-Commerce Sajtovi</a></li>
                <li><a href="#capabilities" className="hover:text-neon-purple transition-colors">SEO Optimizacija</a></li>
                <li><a href="#capabilities" className="hover:text-neon-purple transition-colors">Web Dizajn</a></li>
                <li><a href="#capabilities" className="hover:text-neon-purple transition-colors">Web Aplikacije</a></li>
                <li><a href="#capabilities" className="hover:text-neon-purple transition-colors">Održavanje Sajtova</a></li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white/90">Brzi Linkovi</h4>
              <ul className="space-y-2 text-sm text-white/60">
                <li><a href="#about" className="hover:text-electric-blue transition-colors">O Nama</a></li>
                <li><a href="#capabilities" className="hover:text-electric-blue transition-colors">Usluge</a></li>
                <li><a href="#manifesto" className="hover:text-electric-blue transition-colors">Zašto Fantom</a></li>
                <li><a href="#contact" className="hover:text-electric-blue transition-colors">Kontakt</a></li>
                <li><a href="https://fantom.systems/sitemap.xml" className="hover:text-electric-blue transition-colors" target="_blank" rel="noopener noreferrer">Mapa Sajta</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-white/50">
                © 2026 Fantom - Agencija za Izradu Sajtova. Sva prava zadržana.
              </p>
              <p className="text-sm text-white/50">
                Izrada sajta | Pravljenje sajtova | Web dizajn
              </p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

