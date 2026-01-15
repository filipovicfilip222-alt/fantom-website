'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'

const stats = [
  { value: '150+', label: 'AI Systems Deployed' },
  { value: '99.9%', label: 'Uptime Guaranteed' },
  { value: '40%', label: 'Avg. Cost Reduction' },
  { value: '24/7', label: 'Autonomous Operation' },
]

const philosophyPoints = [
  {
    title: 'Precision Engineering',
    description: 'Every algorithm is crafted with surgical precision. We don\'t build systems—we architect intelligence.',
  },
  {
    title: 'Autonomous Excellence',
    description: 'Our AI systems operate independently, learning and adapting without constant human oversight.',
  },
  {
    title: 'Future-Forward Design',
    description: 'We build for tomorrow. Every solution anticipates the next evolution in artificial intelligence.',
  },
]

export default function About() {
  const containerRef = useRef<HTMLElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: '-100px' })
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })
  
  const lineHeight = useTransform(scrollYProgress, [0, 0.5], ['0%', '100%'])

  return (
    <section
      ref={containerRef}
      className="relative py-32 lg:py-48 overflow-hidden"
    >
      {/* Background vertical lines */}
      <div className="absolute inset-0 flex justify-between px-8 lg:px-16 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="w-px bg-white/5 h-full" />
        ))}
      </div>
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section header */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 mb-24">
          {/* Left - Label */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-4 mb-8">
              <motion.div
                className="h-px w-12 bg-white/30"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
              <span className="text-xs tracking-ultra-wide text-white/50 uppercase">
                Our Philosophy
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1]">
              <span className="text-white/40">Why we exist.</span>
              <br />
              <span>What we believe.</span>
            </h2>
          </motion.div>
          
          {/* Right - Description */}
          <motion.div
            className="flex flex-col justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-lg text-white/50 leading-relaxed max-w-lg">
              In an era of infinite complexity, we believe in elegant simplicity. 
              Our mission is to distill intelligence into systems that augment 
              human potential, not replace it.
            </p>
          </motion.div>
        </div>
        
        {/* Philosophy points with vertical line */}
        <div className="relative">
          {/* Central animated line */}
          <motion.div
            className="absolute left-0 lg:left-1/2 top-0 w-px bg-white/20"
            style={{ height: lineHeight }}
          />
          
          <div className="space-y-24 lg:space-y-32">
            {philosophyPoints.map((point, index) => (
              <motion.div
                key={index}
                className={`grid lg:grid-cols-2 gap-8 lg:gap-24 items-center ${
                  index % 2 === 1 ? 'lg:text-right' : ''
                }`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  {/* Node on the line */}
                  <motion.div
                    className={`absolute ${
                      index % 2 === 1 ? 'lg:left-1/2' : 'left-0 lg:left-1/2'
                    } w-3 h-3 -ml-1.5 rounded-full border border-white/40 bg-background`}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  />
                  
                  <div className="pl-8 lg:pl-0">
                    <span className="text-xs tracking-ultra-wide text-white/30 uppercase mb-4 block">
                      0{index + 1}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-light mb-4">
                      {point.title}
                    </h3>
                    <p className="text-white/50 leading-relaxed max-w-md">
                      {point.description}
                    </p>
                  </div>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:order-1' : ''} />
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Stats section */}
        <motion.div
          className="mt-32 pt-16 border-t border-white/10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center lg:text-left"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="text-4xl md:text-5xl font-light mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-white/40 tracking-wide">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      
      {/* Bottom line */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
      />
    </section>
  )
}
