"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Timer, Lock, Palette, Rocket } from "lucide-react";

export default function Manifesto() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const principles = [
    {
      icon: Timer,
      title: "Brza Izrada Sajta",
      value: "7-14 dana",
      description: "Profesionalno pravljenje sajtova u kratkom roku. Efikasna komunikacija, brza realizacija, bez skrivenih troškova.",
    },
    {
      icon: Lock,
      title: "Sigurnost i Pouzdanost",
      value: "100%",
      description: "SSL sertifikat, redovni backup, zaštita od hakera. Vaš sajt je siguran i uvek dostupan. Besplatno održavanje.",
    },
    {
      icon: Palette,
      title: "Moderni Web Dizajn",
      value: "Premium",
      description: "Atraktivni dizajn koji privlači pažnju i zadržava posetioce. Prilagođen vašem brendu. Desktop i mobilni optimizovan.",
    },
    {
      icon: Rocket,
      title: "SEO Prvi na Google-u",
      value: "TOP 3",
      description: "Optimizacija za pretraživače uključena. Tehnički SEO, brzina, keywords. Više posetilaca = više prodaje.",
    },
  ];

  return (
    <section
      id="manifesto"
      ref={ref}
      className="relative py-32 px-6 overflow-hidden bg-gradient-to-b from-deep-black via-phantom-grey/20 to-deep-black"
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
              Zašto Nas Odabrati
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Zašto Izabrati Fantom za Izradu Sajta
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            Profesionalnost, brzina, kvalitet. Vaš sajt zaslužuje najbolje. 
            Saznajte zašto smo najbolja agencija za pravljenje sajtova.
          </p>
        </motion.div>

        {/* Principles Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {principles.map((principle, index) => (
            <motion.div
              key={principle.title}
              className="relative glass p-10 group hover:border-neon-purple/50 transition-all duration-500"
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              {/* Icon & Value */}
              <div className="flex items-start justify-between mb-6">
                <motion.div
                  className="p-4 bg-neon-purple/10 rounded-lg"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <principle.icon
                    className="w-8 h-8 text-neon-purple"
                    strokeWidth={1.5}
                  />
                </motion.div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-neon-purple">
                    {principle.value}
                  </div>
                </div>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold mb-4 group-hover:text-neon-purple transition-colors duration-300">
                {principle.title}
              </h3>
              <p className="text-white/60 leading-relaxed">
                {principle.description}
              </p>

              {/* Decorative line */}
              <motion.div
                className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-neon-purple to-electric-blue"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 1, delay: index * 0.2 }}
              />
            </motion.div>
          ))}
        </div>

        {/* Main Manifesto Statement */}
        <motion.div
          className="relative p-12 glass border-2 border-neon-purple/30 max-w-4xl mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <div className="text-center space-y-6">
            <h3 className="text-3xl md:text-4xl font-bold">
              Kompletna Izrada Sajtova na Ključ
            </h3>
            <div className="h-[2px] w-20 bg-gradient-to-r from-neon-purple to-electric-blue mx-auto" />
            <p className="text-lg md:text-xl text-white/80 leading-relaxed">
              Od dizajna, preko programiranja, do SEO optimizacije i lansiranja. 
              Sve radimo za vas. Vi dobijate gotov, funkcionalan sajt koji donosi rezultate. 
              Profesionalna izrada web stranica po pristupačnim cenama.
            </p>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed">
              Kontaktirajte nas danas i dobijte besplatan predračun za izradu vašeg sajta!
            </p>
          </div>

          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-neon-purple/5 via-electric-blue/5 to-neon-purple/5 -z-10 opacity-40" />
        </motion.div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-electric-blue/10 rounded-full blur-3xl" />
      </div>
    </section>
  );
}

