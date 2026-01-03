"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.8]);
  const y = useTransform(scrollY, [0, 300], [0, 100]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <motion.div
        className="container mx-auto px-6 z-10"
        style={{ opacity, scale, y }}
      >
        <div className="max-w-5xl mx-auto text-center">
          {/* Main Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mb-8"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight">
              <span className="inline-block neon-glow">
                Profesionalna Izrada Sajta
              </span>
              <br />
              <span className="text-3xl md:text-5xl lg:text-6xl inline-block glitch text-neon-purple mt-4" data-text="i Web Aplikacija">
                i Web Aplikacija
              </span>
            </h1>
          </motion.div>

          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="space-y-4 mb-12"
          >
            <p className="text-xl md:text-2xl lg:text-3xl font-light tracking-wide text-white/90">
              Pravljenje Sajtova | Web Dizajn | Razvoj Web Stranica
            </p>
            <div className="h-[1px] w-32 bg-gradient-to-r from-transparent via-neon-purple to-transparent mx-auto" />
            <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto">
              Kreiranje modernih, brzih i SEO optimizovanih web sajtova. 
              Od dizajna do lansiranja. Vaš sajt. Naša ekspertiza.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="#contact"
              className="group relative px-8 py-4 bg-neon-purple hover:bg-neon-purple/90 text-white font-semibold uppercase tracking-wider text-sm transition-all duration-300 overflow-hidden"
              aria-label="Kontaktirajte nas za izradu sajta"
            >
              <span className="relative z-10">Naručite Svoj Sajt</span>
              <motion.div
                className="absolute inset-0 bg-electric-blue"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </a>
            <a
              href="#capabilities"
              className="group px-8 py-4 border border-white/30 hover:border-neon-purple text-white font-semibold uppercase tracking-wider text-sm transition-all duration-300 glass"
              aria-label="Pogledajte naše usluge izrade sajtova"
            >
              Naše Usluge
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.4 }}
            className="grid grid-cols-3 gap-8 mt-20 max-w-3xl mx-auto"
          >
            {[
              { value: "50+", label: "Sajtova Napravljeno" },
              { value: "<2s", label: "Brzina Učitavanja" },
              { value: "100%", label: "Zadovoljnih Klijenata" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.6 + index * 0.1 }}
              >
                <div className="text-2xl md:text-3xl font-bold text-neon-purple mb-2">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm text-white/50 uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { duration: 1, delay: 2 },
          y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        <ChevronDown className="text-white/50" size={32} />
      </motion.div>

      {/* Static particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-neon-purple/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>
    </section>
  );
}

