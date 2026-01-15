'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { Search, Lightbulb, Code, Rocket, Gauge, RefreshCw } from 'lucide-react'

const processSteps = [
  {
    icon: Search,
    number: '01',
    title: 'Discovery',
    description: 'Deep dive into your business processes, data landscape, and automation opportunities. We map every workflow.',
    duration: '1-2 weeks',
  },
  {
    icon: Lightbulb,
    number: '02',
    title: 'Strategy',
    description: 'Architecture design and AI model selection. We blueprint the intelligence layer that will power your systems.',
    duration: '2-3 weeks',
  },
  {
    icon: Code,
    number: '03',
    title: 'Development',
    description: 'Iterative development with continuous integration. Your AI systems take shape through rapid prototyping.',
    duration: '4-8 weeks',
  },
  {
    icon: Rocket,
    number: '04',
    title: 'Deployment',
    description: 'Seamless integration into your existing infrastructure. Zero-downtime deployment with full monitoring.',
    duration: '1-2 weeks',
  },
  {
    icon: Gauge,
    number: '05',
    title: 'Optimization',
    description: 'Performance tuning and model refinement based on real-world data and feedback loops.',
    duration: 'Ongoing',
  },
  {
    icon: RefreshCw,
    number: '06',
    title: 'Evolution',
    description: 'Continuous learning and adaptation. Your AI systems grow smarter with every interaction.',
    duration: 'Continuous',
  },
]

interface ProcessStepProps {
  step: {
    icon: React.ElementType
    number: string
    title: string
    description: string
    duration: string
  }
  index: number
  isLast: boolean
}

const ProcessStep = ({ step, index, isLast }: ProcessStepProps) => {
  const stepRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(stepRef, { once: true, margin: '-100px' })
  const Icon = step.icon

  return (
    <motion.div
      ref={stepRef}
      className="relative grid grid-cols-[1fr_auto_1fr] gap-8 lg:gap-16 items-start"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1 }}
    >
      {/* Left content (odd items) */}
      <div className={`${index % 2 === 0 ? 'lg:text-right' : 'lg:order-3'}`}>
        {index % 2 === 0 && (
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-xs tracking-ultra-wide text-white/30 uppercase block mb-2">
              {step.duration}
            </span>
            <h3 className="text-2xl lg:text-3xl font-light mb-4">{step.title}</h3>
            <p className="text-white/50 leading-relaxed max-w-sm lg:ml-auto">
              {step.description}
            </p>
          </motion.div>
        )}
      </div>
      
      {/* Center line and node */}
      <div className="relative flex flex-col items-center">
        {/* Node */}
        <motion.div
          className="relative z-10 w-16 h-16 border border-white/20 bg-background flex items-center justify-center group hover:border-white/40 transition-all duration-500"
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          whileHover={{ scale: 1.1 }}
        >
          <Icon className="w-6 h-6 text-white/60 group-hover:text-white transition-colors duration-500" strokeWidth={1.5} />
          
          {/* Number badge */}
          <span className="absolute -top-2 -right-2 w-6 h-6 bg-background border border-white/20 text-xs flex items-center justify-center text-white/50">
            {step.number}
          </span>
          
          {/* Glow ring */}
          <motion.div
            className="absolute inset-0 border border-white/10"
            animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
          />
        </motion.div>
        
        {/* Connecting line */}
        {!isLast && (
          <motion.div
            className="w-px flex-grow bg-gradient-to-b from-white/20 via-white/10 to-transparent min-h-[120px]"
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            style={{ transformOrigin: 'top' }}
          />
        )}
      </div>
      
      {/* Right content (even items) */}
      <div className={`${index % 2 === 1 ? '' : 'lg:order-3'}`}>
        {index % 2 === 1 && (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-xs tracking-ultra-wide text-white/30 uppercase block mb-2">
              {step.duration}
            </span>
            <h3 className="text-2xl lg:text-3xl font-light mb-4">{step.title}</h3>
            <p className="text-white/50 leading-relaxed max-w-sm">
              {step.description}
            </p>
          </motion.div>
        )}
      </div>
    </motion.div>
  )
}

export default function Process() {
  const containerRef = useRef<HTMLElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: '-100px' })
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end end'],
  })
  
  const progressLine = useTransform(scrollYProgress, [0.1, 0.9], ['0%', '100%'])

  return (
    <section
      ref={containerRef}
      className="relative py-32 lg:py-48 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <motion.div
            className="flex items-center justify-center gap-4 mb-8"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="h-px w-12 bg-white/30"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{ transformOrigin: 'right' }}
            />
            <span className="text-xs tracking-ultra-wide text-white/50 uppercase">
              Our Process
            </span>
            <motion.div
              className="h-px w-12 bg-white/30"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{ transformOrigin: 'left' }}
            />
          </motion.div>
          
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1] mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            From concept
            <br />
            <span className="text-white/40">to intelligence.</span>
          </motion.h2>
          
          <motion.p
            className="text-lg text-white/50"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            A methodical approach to building AI systems that actually work.
          </motion.p>
        </div>
        
        {/* Process timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Central line indicator */}
          <motion.div
            className="absolute left-1/2 top-0 w-px h-full bg-white/5 -translate-x-1/2"
          />
          <motion.div
            className="absolute left-1/2 top-0 w-px bg-white/20 -translate-x-1/2"
            style={{ height: progressLine }}
          />
          
          {/* Steps */}
          <div className="space-y-8 lg:space-y-0">
            {processSteps.map((step, index) => (
              <ProcessStep
                key={index}
                step={step}
                index={index}
                isLast={index === processSteps.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* Bottom decorative lines */}
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
