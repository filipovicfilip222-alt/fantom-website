'use client'

import { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown } from 'lucide-react'

// Monoline Saturn Planet Component - matching the reference design
const MonolinePlanet = () => {
  return (
    <div className="relative w-[400px] h-[400px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px]">
      <motion.svg
        viewBox="0 0 400 400"
        className="w-full h-full"
        initial="hidden"
        animate="visible"
      >
        {/* Main planet body - ellipse */}
        <motion.ellipse
          cx="200"
          cy="200"
          rx="80"
          ry="100"
          fill="none"
          stroke="rgba(255,255,255,0.9)"
          strokeWidth="1.5"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
        />
        
        {/* Inner planet curve - top highlight */}
        <motion.path
          d="M 145 160 Q 170 130, 220 145"
          fill="none"
          stroke="rgba(255,255,255,0.7)"
          strokeWidth="1.5"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut", delay: 1.2 }}
        />
        
        {/* Inner planet curve - middle */}
        <motion.ellipse
          cx="200"
          cy="210"
          rx="55"
          ry="70"
          fill="none"
          stroke="rgba(255,255,255,0.5)"
          strokeWidth="1"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.8, ease: "easeInOut", delay: 0.8 }}
        />

        {/* Outer ring 1 - main large ring */}
        <motion.ellipse
          cx="200"
          cy="200"
          rx="180"
          ry="50"
          fill="none"
          stroke="rgba(255,255,255,0.9)"
          strokeWidth="1.5"
          strokeLinecap="round"
          transform="rotate(-20, 200, 200)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2.5, ease: "easeInOut", delay: 0.2 }}
        />
        
        {/* Outer ring 2 - second ring slightly different angle */}
        <motion.ellipse
          cx="200"
          cy="200"
          rx="160"
          ry="55"
          fill="none"
          stroke="rgba(255,255,255,0.6)"
          strokeWidth="1.5"
          strokeLinecap="round"
          transform="rotate(-15, 200, 200)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2.2, ease: "easeInOut", delay: 0.4 }}
        />
        
        {/* Flowing accent line - top swoosh */}
        <motion.path
          d="M 100 120 Q 150 80, 220 100 Q 280 115, 300 150"
          fill="none"
          stroke="rgba(255,255,255,0.7)"
          strokeWidth="1.5"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.8, ease: "easeInOut", delay: 1 }}
        />
        
        {/* Flowing accent line - bottom swoosh */}
        <motion.path
          d="M 100 280 Q 150 320, 250 300 Q 320 280, 340 240"
          fill="none"
          stroke="rgba(255,255,255,0.7)"
          strokeWidth="1.5"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.8, ease: "easeInOut", delay: 1.3 }}
        />
        
        {/* Additional ring detail - inner */}
        <motion.ellipse
          cx="200"
          cy="200"
          rx="130"
          ry="35"
          fill="none"
          stroke="rgba(255,255,255,0.4)"
          strokeWidth="1"
          strokeLinecap="round"
          transform="rotate(-18, 200, 200)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut", delay: 0.6 }}
        />
      </motion.svg>
      
      {/* Subtle glow effect */}
      <div className="absolute inset-0 bg-gradient-radial from-white/5 via-transparent to-transparent blur-3xl opacity-50" />
      
      {/* Floating animation wrapper */}
      <motion.div
        className="absolute inset-0"
        animate={{ 
          y: [0, -15, 0],
          rotate: [0, 1, 0]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      />
    </div>
  )
}

// Animated text component
const AnimatedText = ({ text, className, delay = 0 }: { text: string; className?: string; delay?: number }) => {
  const words = text.split(' ')
  
  return (
    <span className={className}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden">
          <motion.span
            className="inline-block"
            initial={{ y: '100%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: delay + i * 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {word}
            {i < words.length - 1 && '\u00A0'}
          </motion.span>
        </span>
      ))}
    </span>
  )
}

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })
  
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Grid background */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-background/50 to-background" />
      
      {/* Content */}
      <motion.div
        className="relative z-10 container mx-auto px-6 lg:px-12"
        style={{ opacity, scale, y }}
      >
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-0 items-center">
          {/* Left side - Text content */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Overline */}
            <motion.div
              className="flex items-center justify-center lg:justify-start gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <motion.div
                className="h-px w-12 bg-white/30"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              />
              <span className="text-xs tracking-ultra-wide text-white/50 uppercase">
                AI Automation Agency
              </span>
            </motion.div>
            
            {/* Main headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light leading-[0.9] tracking-tight">
              <AnimatedText text="Architecting" delay={0.3} />
              <br />
              <span className="font-normal">
                <AnimatedText text="Intelligence" delay={0.5} />
              </span>
            </h1>
            
            {/* Subheadline */}
            <motion.p
              className="text-lg md:text-xl text-white/50 max-w-md mx-auto lg:mx-0 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              We engineer autonomous systems that think, learn, and evolve. 
              The future of business is intelligent.
            </motion.p>
            
            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <button className="group relative px-8 py-4 border border-white/20 hover:border-white/40 transition-all duration-500 overflow-hidden">
                <span className="relative z-10 text-sm tracking-super-wide uppercase">
                  Explore Solutions
                </span>
                <motion.div
                  className="absolute inset-0 bg-white/5"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.4 }}
                />
              </button>
              
              <button className="group px-8 py-4 text-white/50 hover:text-white transition-colors duration-300">
                <span className="text-sm tracking-super-wide uppercase flex items-center gap-2">
                  Our Process
                  <motion.span
                    className="inline-block"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    →
                  </motion.span>
                </span>
              </button>
            </motion.div>
          </div>
          
          {/* Right side - Monoline Planet */}
          <motion.div
            className="relative flex items-center justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <MonolinePlanet />
          </motion.div>
        </div>
      </motion.div>
      
      {/* Bottom line */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, delay: 1.5 }}
      />
      
      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <span className="text-xs tracking-ultra-wide text-white/30 uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown className="w-4 h-4 text-white/30" />
        </motion.div>
      </motion.div>
      
      {/* Corner accents */}
      <div className="absolute top-8 left-8 w-16 h-16">
        <motion.div
          className="absolute top-0 left-0 w-full h-px bg-white/20"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          style={{ transformOrigin: 'left' }}
        />
        <motion.div
          className="absolute top-0 left-0 h-full w-px bg-white/20"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.8, delay: 2 }}
          style={{ transformOrigin: 'top' }}
        />
      </div>
      
      <div className="absolute top-8 right-8 w-16 h-16">
        <motion.div
          className="absolute top-0 right-0 w-full h-px bg-white/20"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          style={{ transformOrigin: 'right' }}
        />
        <motion.div
          className="absolute top-0 right-0 h-full w-px bg-white/20"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.8, delay: 2 }}
          style={{ transformOrigin: 'top' }}
        />
      </div>
    </section>
  )
}
