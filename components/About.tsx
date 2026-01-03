"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Brain, Network } from "lucide-react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Code2,
      title: "Profesionalna Izrada Sajtova",
      description: "Kreiranje modernih web sajtova sa najnovijim tehnologijama. React, Next.js, responsive dizajn.",
    },
    {
      icon: Brain,
      title: "SEO Optimizacija",
      description: "Svaki sajt pravimo sa SEO u vidu. Prvi na Google-u. Više posetilaca. Više klijenata.",
    },
    {
      icon: Network,
      title: "Brzina i Performanse",
      description: "Brzi sajtovi koji se učitavaju za sekunde. Optimizovani za sve uređaje i pregledače.",
    },
  ];

  return (
    <section
      id="about"
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
            className="inline-block mb-4 px-4 py-2 glass border border-neon-purple/30"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs uppercase tracking-widest text-neon-purple">
              O Nama
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Najbolja Agencija za Izradu Sajtova
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto leading-relaxed">
            Specijalizovani smo za izradu profesionalnih web sajtova i web aplikacija. 
            Pravljenje sajtova, web dizajn, SEO optimizacija, e-commerce rešenja. 
            Svaki projekat radimo sa pažnjom i posvećenošću. Vaš uspeh je naš cilj.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="group relative glass p-8 hover:border-neon-purple/50 transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* Icon */}
              <motion.div
                className="mb-6 inline-block"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <feature.icon className="w-12 h-12 text-neon-purple" strokeWidth={1.5} />
              </motion.div>

              {/* Content */}
              <h3 className="text-2xl font-bold mb-4 group-hover:text-neon-purple transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-white/60 leading-relaxed">
                {feature.description}
              </p>

              {/* Hover effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/5 to-electric-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
            </motion.div>
          ))}
        </div>

        {/* Quote Section */}
        <motion.div
          className="mt-32 text-center relative"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <div className="relative inline-block">
            <div className="absolute -left-8 -top-8 text-8xl text-neon-purple/20 font-serif">&ldquo;</div>
            <blockquote className="text-2xl md:text-3xl font-light italic text-white/80 max-w-4xl mx-auto leading-relaxed">
              Profesionalna izrada sajta koja donosi rezultate. Moderni dizajn. Brze performanse. Prvi na Google-u.
            </blockquote>
            <div className="absolute -right-8 -bottom-8 text-8xl text-neon-purple/20 font-serif">&rdquo;</div>
          </div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl opacity-10" />
    </section>
  );
}

