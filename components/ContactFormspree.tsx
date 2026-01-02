"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, MessageSquare, User, Send, CheckCircle, Phone } from "lucide-react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // FORMSPREE - Zameni sa svojim endpoint-om
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          phone: formState.phone,
          message: formState.message,
          _subject: `🔔 Nova poruka od ${formState.name}`,
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setTimeout(() => {
          setIsSubmitted(false);
          setFormState({ name: "", email: "", phone: "", message: "" });
        }, 3000);
      } else {
        alert('Greška pri slanju poruke. Pokušajte ponovo.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Greška pri slanju poruke. Pokušajte ponovo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-32 px-6 overflow-hidden"
    >
      <div className="container mx-auto max-w-6xl">
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
              Kontakt
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Započni Razgovor
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            Spremni ste da transformišete svoj brend? Kontaktirajte nas i 
            pokrenimo razgovor o budućnosti vašeg digitalnog prisustva.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div>
              <h3 className="text-3xl font-bold mb-6">Razgovarajmo</h3>
              <p className="text-white/70 leading-relaxed text-lg">
                Bilo da imate kompleksan projekat ili jednostavno želite da 
                razgovarate o mogućnostima, mi smo ovde. Svaki projekat 
                počinje razgovorom.
              </p>
            </div>

            <div className="space-y-6">
              <motion.div
                className="flex items-start gap-4 group"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="p-3 bg-neon-purple/10 rounded-lg group-hover:bg-neon-purple/20 transition-colors">
                  <Mail className="w-6 h-6 text-neon-purple" />
                </div>
                <div>
                  <div className="text-sm uppercase tracking-wider text-white/50 mb-1">
                    Email
                  </div>
                  <a
                    href="mailto:fantomsystems@gmail.com"
                    className="text-lg text-white hover:text-neon-purple transition-colors"
                  >
                    fantomsystems@gmail.com
                  </a>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start gap-4 group"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="p-3 bg-electric-blue/10 rounded-lg group-hover:bg-electric-blue/20 transition-colors">
                  <Phone className="w-6 h-6 text-electric-blue" />
                </div>
                <div>
                  <div className="text-sm uppercase tracking-wider text-white/50 mb-1">
                    Telefon
                  </div>
                  <a
                    href="tel:+381659166674"
                    className="text-lg text-white hover:text-electric-blue transition-colors"
                  >
                    +381 65 916 6674
                  </a>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start gap-4 group"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="p-3 bg-neon-purple/10 rounded-lg group-hover:bg-neon-purple/20 transition-colors">
                  <MessageSquare className="w-6 h-6 text-neon-purple" />
                </div>
                <div>
                  <div className="text-sm uppercase tracking-wider text-white/50 mb-1">
                    Vreme Odgovora
                  </div>
                  <p className="text-lg text-white">{"< 24 sata"}</p>
                </div>
              </motion.div>
            </div>

            {/* Decorative box */}
            <motion.div
              className="mt-12 p-8 glass border border-neon-purple/30"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <div className="text-sm uppercase tracking-wider text-neon-purple mb-2">
                Saradnja
              </div>
              <p className="text-white/70">
                Radimo sa brendovima koji razumeju vrednost kvaliteta i 
                inovacije. Ako tražite agenciju koja će transformisati 
                vaše digitalno prisustvo, na pravom ste mestu.
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form
              onSubmit={handleSubmit}
              className="space-y-6 glass p-8 border border-white/10 relative"
            >
              {/* Success Message */}
              {isSubmitted && (
                <motion.div
                  className="absolute inset-0 bg-deep-black/95 backdrop-blur-sm z-10 flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="text-center">
                    <CheckCircle className="w-16 h-16 text-neon-purple mx-auto mb-4" />
                    <h3 className="text-2xl font-bold mb-2">Poruka Poslata!</h3>
                    <p className="text-white/70">
                      Odgovorićemo vam u najkraćem roku.
                    </p>
                  </div>
                </motion.div>
              )}

              {/* Name Field */}
              <div className="relative">
                <label
                  htmlFor="name"
                  className="block text-sm uppercase tracking-wider text-white/70 mb-2"
                >
                  Vaše Ime
                </label>
                <div className="relative">
                  <User
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/40"
                    size={20}
                  />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/20 pl-12 pr-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-neon-purple transition-colors"
                    placeholder="Unesite vaše ime"
                  />
                </div>
              </div>

              {/* Email Field */}
              <div className="relative">
                <label
                  htmlFor="email"
                  className="block text-sm uppercase tracking-wider text-white/70 mb-2"
                >
                  Email Adresa
                </label>
                <div className="relative">
                  <Mail
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/40"
                    size={20}
                  />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/20 pl-12 pr-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-neon-purple transition-colors"
                    placeholder="vas@email.com"
                  />
                </div>
              </div>

              {/* Phone Field */}
              <div className="relative">
                <label
                  htmlFor="phone"
                  className="block text-sm uppercase tracking-wider text-white/70 mb-2"
                >
                  Telefon
                </label>
                <div className="relative">
                  <Phone
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/40"
                    size={20}
                  />
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formState.phone}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/20 pl-12 pr-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-neon-purple transition-colors"
                    placeholder="+381 6X XXX XXXX"
                  />
                </div>
              </div>

              {/* Message Field */}
              <div className="relative">
                <label
                  htmlFor="message"
                  className="block text-sm uppercase tracking-wider text-white/70 mb-2"
                >
                  Poruka
                </label>
                <div className="relative">
                  <MessageSquare
                    className="absolute left-4 top-4 text-white/40"
                    size={20}
                  />
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full bg-white/5 border border-white/20 pl-12 pr-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-neon-purple transition-colors resize-none"
                    placeholder="Recite nam više o vašem projektu..."
                  />
                </div>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="group w-full bg-neon-purple hover:bg-neon-purple/90 disabled:bg-neon-purple/50 text-white font-semibold uppercase tracking-wider text-sm py-4 transition-all duration-300 relative overflow-hidden"
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {isSubmitting ? 'Šalje se...' : 'Pošalji Poruku'}
                  {!isSubmitting && <Send size={16} className="group-hover:translate-x-1 transition-transform" />}
                </span>
                <motion.div
                  className="absolute inset-0 bg-electric-blue"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: isSubmitting ? "-100%" : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Decorative element */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-electric-blue/10 rounded-full blur-3xl opacity-10" />
    </section>
  );
}

