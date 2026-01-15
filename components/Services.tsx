'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Brain, Workflow, Bot, Database, LineChart, Shield } from 'lucide-react'

const services = [
  {
    icon: Brain,
    title: 'Neural Networks',
    description: 'Custom deep learning models trained on your data for unprecedented accuracy and insights.',
    size: 'large',
  },
  {
    icon: Workflow,
    title: 'Process Automation',
    description: 'End-to-end workflow automation that eliminates repetitive tasks.',
    size: 'small',
  },
  {
    icon: Bot,
    title: 'Intelligent Agents',
    description: 'Autonomous AI agents that handle complex decision-making.',
    size: 'small',
  },
  {
    icon: Database,
    title: 'Data Pipeline Engineering',
    description: 'Scalable data infrastructure that feeds your AI systems with clean, structured information.',
    size: 'medium',
  },
  {
    icon: LineChart,
    title: 'Predictive Analytics',
    description: 'Forecast trends and behaviors with machine learning models that learn and adapt.',
    size: 'medium',
  },
  {
    icon: Shield,
    title: 'AI Security',
    description: 'Enterprise-grade security for your AI infrastructure.',
    size: 'small',
  },
]

interface ServiceCardProps {
  service: {
    icon: React.ElementType
    title: string
    description: string
    size: string
  }
  index: number
}

const ServiceCard = ({ service, index }: ServiceCardProps) => {
  const Icon = service.icon
  
  return (
    <motion.div
      className={`group relative p-8 lg:p-10 border border-white/10 hover:border-white/25 transition-all duration-700 ${
        service.size === 'large'
          ? 'col-span-1 lg:col-span-2 row-span-2'
          : service.size === 'medium'
          ? 'col-span-1 lg:col-span-1 row-span-2'
          : 'col-span-1 row-span-1'
      }`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
    >
      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Glow effect on hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-radial from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        initial={false}
      />
      
      {/* Content */}
      <div className="relative z-10 h-full flex flex-col">
        {/* Icon */}
        <motion.div
          className="mb-6 lg:mb-8"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ duration: 0.3 }}
        >
          <div className="w-12 h-12 lg:w-14 lg:h-14 border border-white/20 flex items-center justify-center group-hover:border-white/40 transition-colors duration-500">
            <Icon className="w-5 h-5 lg:w-6 lg:h-6 text-white/60 group-hover:text-white transition-colors duration-500" strokeWidth={1.5} />
          </div>
        </motion.div>
        
        {/* Title */}
        <h3 className="text-xl lg:text-2xl font-light mb-4 group-hover:text-white transition-colors duration-500">
          {service.title}
        </h3>
        
        {/* Description */}
        <p className="text-white/40 group-hover:text-white/60 leading-relaxed transition-colors duration-500 flex-grow">
          {service.description}
        </p>
        
        {/* Link */}
        <motion.div
          className="mt-6 lg:mt-8 flex items-center gap-2 text-sm text-white/30 group-hover:text-white/60 transition-colors duration-500"
          whileHover={{ x: 5 }}
        >
          <span className="tracking-wide uppercase">Learn more</span>
          <span className="text-lg">→</span>
        </motion.div>
      </div>
      
      {/* Animated border line */}
      <motion.div
        className="absolute bottom-0 left-0 h-px bg-white/40"
        initial={{ width: 0 }}
        whileInView={{ width: '100%' }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
      />
    </motion.div>
  )
}

export default function Services() {
  const containerRef = useRef<HTMLElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: '-100px' })

  return (
    <section
      ref={containerRef}
      className="relative py-32 lg:py-48"
    >
      {/* Background accents */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section header */}
        <div className="max-w-4xl mb-16 lg:mb-24">
          <motion.div
            className="flex items-center gap-4 mb-8"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="h-px w-12 bg-white/30"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
            <span className="text-xs tracking-ultra-wide text-white/50 uppercase">
              Capabilities
            </span>
          </motion.div>
          
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1] mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Intelligence,
            <br />
            <span className="text-white/40">engineered to scale.</span>
          </motion.h2>
          
          <motion.p
            className="text-lg text-white/50 max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            From custom AI models to full-stack automation, we deliver solutions 
            that transform how businesses operate.
          </motion.p>
        </div>
        
        {/* Services Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
        
        {/* Bottom CTA */}
        <motion.div
          className="mt-16 lg:mt-24 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-white/40 mb-6">
            Need something custom? We specialize in bespoke solutions.
          </p>
          <motion.button
            className="px-10 py-4 border border-white/20 hover:border-white/40 text-sm tracking-super-wide uppercase transition-all duration-500 group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10">Discuss Your Project</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
