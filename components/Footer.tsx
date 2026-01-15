'use client'

import { motion } from 'framer-motion'
import { ArrowUp } from 'lucide-react'
import Image from 'next/image'

const footerLinks = [
  {
    title: 'Navigation',
    links: [
      { name: 'About', href: '#about' },
      { name: 'Services', href: '#services' },
      { name: 'Process', href: '#process' },
      { name: 'Contact', href: '#contact' },
    ],
  },
  {
    title: 'Services',
    links: [
      { name: 'Neural Networks', href: '#services' },
      { name: 'Process Automation', href: '#services' },
      { name: 'Intelligent Agents', href: '#services' },
      { name: 'Data Engineering', href: '#services' },
    ],
  },
  {
    title: 'Connect',
    links: [
      { name: 'LinkedIn', href: '#' },
      { name: 'Twitter', href: '#' },
      { name: 'GitHub', href: '#' },
      { name: 'Email', href: 'mailto:hello@fantomsystems.ai' },
    ],
  },
]

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative py-16 lg:py-24 border-t border-white/10">
      {/* Background grid */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
          {/* Logo and tagline */}
          <div className="col-span-2">
            <motion.a
              href="#"
              className="inline-block mb-6"
              whileHover={{ scale: 1.02 }}
            >
              <Image
                src="/logo1.png"
                alt="Fantom Systems"
                width={160}
                height={45}
                className="h-10 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300"
              />
            </motion.a>
            
            <p className="text-white/40 text-sm leading-relaxed max-w-xs mb-8">
              Architecting the future of intelligent automation. 
              We build AI systems that transform businesses.
            </p>
            
            {/* Back to top */}
            <motion.button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors duration-300 group"
              whileHover={{ y: -2 }}
            >
              <span className="tracking-wide uppercase">Back to top</span>
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-300" />
            </motion.button>
          </div>
          
          {/* Link columns */}
          {footerLinks.map((column, columnIndex) => (
            <div key={column.title}>
              <h4 className="text-xs tracking-ultra-wide text-white/30 uppercase mb-6">
                {column.title}
              </h4>
              <ul className="space-y-4">
                {column.links.map((link, linkIndex) => (
                  <li key={link.name}>
                    <motion.a
                      href={link.href}
                      className="text-sm text-white/50 hover:text-white transition-colors duration-300"
                      whileHover={{ x: 3 }}
                    >
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-white/30">
              © 2026 Fantom Systems. All rights reserved.
            </p>
            
            <div className="flex items-center gap-8">
              <a href="#" className="text-xs text-white/30 hover:text-white/60 transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-xs text-white/30 hover:text-white/60 transition-colors duration-300">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Large background text */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none">
        <motion.p
          className="text-[15vw] font-light text-white/[0.02] leading-none whitespace-nowrap"
          initial={{ x: 0 }}
          animate={{ x: '-50%' }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        >
          FANTOM SYSTEMS • ARCHITECTING INTELLIGENCE • FANTOM SYSTEMS • ARCHITECTING INTELLIGENCE •
        </motion.p>
      </div>
    </footer>
  )
}
