"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

export default function SEOContent() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Koliko košta izrada sajta?",
      answer: "Cena izrade sajta zavisi od složenosti projekta. Jednostavni prezentacioni sajt kreće od 300-500€, dok e-commerce sajtovi i web aplikacije mogu biti od 1000€ pa naviše. Kontaktirajte nas za besplatan predračun prilagođen vašim potrebama."
    },
    {
      question: "Koliko traje izrada web sajta?",
      answer: "Pravljenje standardnog prezentacionog sajta traje 7-14 dana. Za složenije projekte kao što su e-commerce sajtovi ili web aplikacije, vreme izrade može biti 3-6 nedelja. Uvek se držimo dogovorenih rokova."
    },
    {
      question: "Da li pravite sajtove prilagođene mobilnim telefonima?",
      answer: "Apsolutno! Svi naši sajtovi su 100% responsive - savršeno izgledaju na svim uređajima: mobilnim telefonima, tabletima i desktop računarima. Ovo je obavezno za dobro SEO rangiranje na Google-u."
    },
    {
      question: "Da li je uključena SEO optimizacija?",
      answer: "Da! Tehnička SEO optimizacija je uključena u svaki projekat. To uključuje brze performanse, meta tagove, strukturirane podatke, sitemap, robots.txt i mobile optimizaciju. Za naprednu SEO kampanju nudimo dodatne usluge."
    },
    {
      question: "Šta dobijam uz izradu sajta?",
      answer: "Dobijate kompletan, funkcionalan sajt sa modernim dizajnom, tehnički optimizovan za brzinu i SEO, prilagođen svim uređajima, SSL sertifikat, besplatno održavanje prvih mesec dana, te obuku za upravljanje sadržajem."
    },
    {
      question: "Da li mogu sam da menjam sadržaj na sajtu?",
      answer: "Naravno! Koristimo moderne CMS sisteme ili admin panele koji vam omogućavaju da jednostavno menjate tekst, slike i sadržaj bez tehničkog znanja. Pružamo kompletnu obuku."
    },
    {
      question: "Da li nudite održavanje web sajtova?",
      answer: "Da! Nudimo pakete za redovno održavanje sajtova što uključuje: ažuriranje sadržaja, tehničku podršku, redovne backup-ove, sigurnosne provere i optimizacije. Vaš sajt će uvek biti ažuran i bezbedan."
    },
    {
      question: "Zašto izabrati Fantom za izradu sajta?",
      answer: "Fantom nudi profesionalnu izradu sajtova sa fokusom na rezultate: moderni dizajn koji privlači, brze performanse koje Google voli, SEO optimizacija za bolje rangiranje, pristupačne cene i brza realizacija. Vaš uspeh je naš cilj!"
    }
  ];

  const benefits = [
    {
      title: "Moderna Tehnologija",
      description: "Koristimo najnovije tehnologije za pravljenje sajtova - React, Next.js, TypeScript. Vaš sajt će biti brz, bezbedan i moderan."
    },
    {
      title: "Mobilna Optimizacija",
      description: "Preko 70% korisnika posećuje sajtove sa mobilnih telefona. Svi naši sajtovi su responsive i savršeno prilagođeni mobilnim uređajima."
    },
    {
      title: "Google First Page",
      description: "SEO optimizacija je ugrađena u svaki sajt. Tehnički SEO, brze performanse, strukturirani podaci - sve za bolje rangiranje na Google-u."
    },
    {
      title: "Transparentne Cene",
      description: "Bez skrivenih troškova. Dobijate detaljan predračun sa svim stavkama. Znaćete tačno šta plaćate i šta dobijate."
    },
    {
      title: "Podrška i Održavanje",
      description: "Ne ostavljamo vas same posle lansiranja. Nudimo tehničku podršku, redovna ažuriranja i pomoć kada vam zatreba."
    },
    {
      title: "Vlasništvo Sajta",
      description: "Vi ste 100% vlasnik sajta i svih kodova. Dobijate kompletan pristup i možete migrirati sajt bilo gde."
    }
  ];

  return (
    <section
      ref={ref}
      className="relative py-32 px-6 overflow-hidden bg-gradient-to-b from-deep-black via-phantom-grey/10 to-deep-black"
    >
      <div className="container mx-auto max-w-7xl">
        
        {/* Benefits Section */}
        <motion.div
          className="mb-32"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <motion.div
              className="inline-block mb-4 px-4 py-2 glass border border-electric-blue/30"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5 }}
            >
              <span className="text-xs uppercase tracking-widest text-electric-blue">
                Prednosti
              </span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Zašto Je Naša Izrada Sajtova Najbolja
            </h2>
            <p className="text-lg text-white/60 max-w-3xl mx-auto">
              Profesionalno pravljenje web stranica koje donose rezultate. Evo zašto nas biraju.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                className="glass p-6 hover:border-electric-blue/50 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <h3 className="text-xl font-bold mb-3 text-electric-blue">
                  {benefit.title}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="text-center mb-16">
            <motion.div
              className="inline-block mb-4 px-4 py-2 glass border border-neon-purple/30"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <span className="text-xs uppercase tracking-widest text-neon-purple">
                Često Postavljena Pitanja
              </span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Pitanja o Izradi Sajta
            </h2>
            <p className="text-lg text-white/60 max-w-3xl mx-auto">
              Odgovori na najčešća pitanja o pravljenju web sajtova, cenama i procesu rada.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="glass overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors duration-300"
                  aria-expanded={openIndex === index}
                >
                  <h3 className="text-lg md:text-xl font-semibold pr-4">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`flex-shrink-0 text-neon-purple transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                    size={24}
                  />
                </button>
                <motion.div
                  initial={false}
                  animate={{
                    height: openIndex === index ? "auto" : 0,
                    opacity: openIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-5 text-white/70 leading-relaxed">
                    {faq.answer}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Additional SEO Text */}
        <motion.div
          className="mt-32 max-w-5xl mx-auto glass p-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            Profesionalna Izrada Sajta za Vaš Biznis
          </h2>
          <div className="space-y-4 text-white/70 leading-relaxed">
            <p>
              <strong className="text-white">Izrada web sajta</strong> je ključna investicija za svaki savremeni biznis. 
              U digitalnom dobu, vaš sajt je često prvi kontakt sa potencijalnim klijentima. 
              Zato je <strong className="text-white">profesionalno pravljenje sajtova</strong> neophodno za uspeh.
            </p>
            <p>
              Naša agencija nudi <strong className="text-white">kompletnu izradu sajtova na ključ</strong> - 
              od dizajna, preko programiranja, do SEO optimizacije i lansiranja. Pravimo sve vrste sajtova: 
              prezentacione, portfolio, landing page, e-commerce online prodavnice, web aplikacije i custom sistema.
            </p>
            <p>
              <strong className="text-white">Web dizajn</strong> je više od lepog izgleda. To je strategija koja vodi 
              posetioce kroz sajt, gradi poverenje i konvertuje ih u kupce. Naši dizajneri kreiraju moderne, 
              atraktivne sajtove koji su intuitivni za korišćenje i optimizovani za konverziju.
            </p>
            <p>
              <strong className="text-white">SEO optimizacija</strong> je ugrađena u svaki naš projekat. 
              Tehnički SEO, brze performanse, strukturirani podaci, mobilna optimizacija - sve što treba 
              da biste bili prvi na Google-u. Jer šta vredi lep sajt ako ga niko ne pronalazi?
            </p>
            <p>
              Kontaktirajte nas danas i saznajte više o našim uslugama <strong className="text-white">izrade 
              web stranica</strong>. Dobićete besplatan predračun, konsultacije i pomoć u definisanju 
              vašeg projekta. Vaš novi sajt je samo jedan klik daleko!
            </p>
          </div>
        </motion.div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon-purple/5 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
}

