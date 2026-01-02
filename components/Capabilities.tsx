"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles, Cpu, Shield, Zap, Globe, Database } from "lucide-react";

export default function Capabilities() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const capabilities = [
    {
      icon: Globe,
      title: "Napredni Web Razvoj",
      description: "Visoko-performantne web aplikacije sa modernim tehnologijama. React, Next.js, serverless arhitektura.",
      tags: ["Next.js", "React", "TypeScript", "Tailwind"],
    },
    {
      icon: Cpu,
      title: "AI & Mašinsko Učenje",
      description: "Implementacija naprednih AI sistema. Predikcija, klasifikacija, obrada prirodnog jezika.",
      tags: ["TensorFlow", "PyTorch", "OpenAI", "Custom Models"],
    },
    {
      icon: Database,
      title: "Sistemska Arhitektura",
      description: "Skalabilna infrastruktura koja raste sa vašim potrebama. Cloud-native rešenja i DevOps automatizacija.",
      tags: ["AWS", "Docker", "Kubernetes", "CI/CD"],
    },
    {
      icon: Shield,
      title: "Bezbednost & Enkripcija",
      description: "Implementacija najviših standarda sigurnosti. Zero-trust arhitektura i end-to-end enkripcija.",
      tags: ["OAuth", "JWT", "SSL/TLS", "Penetration Testing"],
    },
    {
      icon: Zap,
      title: "Performance Optimizacija",
      description: "Maksimalna brzina učitavanja. CDN integracija, lazy loading, optimizovane slike i caching strategije.",
      tags: ["Core Web Vitals", "CDN", "Caching", "Compression"],
    },
    {
      icon: Sparkles,
      title: "UI/UX Dizajn",
      description: "Pixel-perfect dizajn. Od wireframe-a do finalnog proizvoda. Fokus na korisničko iskustvo.",
      tags: ["Figma", "Framer Motion", "3D Graphics", "Microinteractions"],
    },
  ];

  return (
    <section
      id="capabilities"
      ref={ref}
      className="relative py-32 px-6 overflow-hidden"
    >
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-block mb-4 px-4 py-2 glass border border-electric-blue/30"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs uppercase tracking-widest text-electric-blue">
              Naše Usluge
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Šta Radimo
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            Kompletna digitalna transformacija. Od koncepta do izvršenja.
          </p>
        </motion.div>

        {/* Capabilities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((capability, index) => (
            <motion.div
              key={capability.title}
              className="group relative glass p-8 hover:border-electric-blue/50 transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              {/* Icon */}
              <motion.div
                className="mb-6 p-3 inline-block bg-electric-blue/10 rounded-lg"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <capability.icon
                  className="w-8 h-8 text-electric-blue"
                  strokeWidth={1.5}
                />
              </motion.div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-3 group-hover:text-electric-blue transition-colors duration-300">
                {capability.title}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed mb-6">
                {capability.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {capability.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 bg-white/5 border border-white/10 text-white/70 uppercase tracking-wider"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Hover effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/5 to-neon-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <a
            href="#contact"
            className="inline-block px-8 py-4 glass border border-neon-purple/50 hover:bg-neon-purple/10 text-white font-semibold uppercase tracking-wider text-sm transition-all duration-300 group"
          >
            <span className="group-hover:text-neon-purple transition-colors">
              Razgovarajmo o Projektu
            </span>
          </a>
        </motion.div>
      </div>

      {/* Decorative element */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-electric-blue/10 rounded-full blur-3xl opacity-10" />
    </section>
  );
}

