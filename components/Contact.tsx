'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Send, ArrowUpRight } from 'lucide-react'

interface FormFieldProps {
  label: string
  name: string
  type?: string
  isTextarea?: boolean
  value: string
  onChange: (value: string) => void
}

const FormField = ({ label, name, type = 'text', isTextarea = false, value, onChange }: FormFieldProps) => {
  const [isFocused, setIsFocused] = useState(false)
  const isActive = isFocused || value.length > 0
  
  return (
    <div className="relative">
      {/* Floating label */}
      <motion.label
        className={`absolute left-0 pointer-events-none text-white/40 transition-all duration-300 ${
          isActive ? 'text-xs -top-6' : 'text-base top-4'
        }`}
        animate={{
          y: isActive ? 0 : 0,
          scale: isActive ? 0.85 : 1,
          color: isFocused ? 'rgba(255,255,255,0.8)' : 'rgba(255,255,255,0.4)',
        }}
      >
        {label}
      </motion.label>
      
      {isTextarea ? (
        <textarea
          name={name}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          rows={4}
          className="w-full bg-transparent border-b border-white/20 focus:border-white/50 py-4 text-white outline-none resize-none transition-colors duration-300"
        />
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="w-full bg-transparent border-b border-white/20 focus:border-white/50 py-4 text-white outline-none transition-colors duration-300"
        />
      )}
      
      {/* Active line indicator */}
      <motion.div
        className="absolute bottom-0 left-0 h-px bg-white"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isFocused ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{ transformOrigin: 'left' }}
      />
    </div>
  )
}

export default function Contact() {
  const containerRef = useRef<HTMLElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: '-100px' })
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <section
      ref={containerRef}
      id="contact"
      className="relative py-32 lg:py-48"
    >
      {/* Background elements */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left side - Content */}
          <div>
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
                Contact
              </span>
            </motion.div>
            
            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1] mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Let&apos;s build
              <br />
              <span className="text-white/40">something intelligent.</span>
            </motion.h2>
            
            <motion.p
              className="text-lg text-white/50 leading-relaxed mb-12 max-w-md"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Ready to automate your future? Tell us about your project 
              and we&apos;ll craft a solution that transforms your operations.
            </motion.p>
            
            {/* Contact info */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 border border-white/20 flex items-center justify-center group-hover:border-white/40 transition-colors duration-300">
                  <ArrowUpRight className="w-5 h-5 text-white/40 group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <p className="text-xs text-white/40 uppercase tracking-wide mb-1">Email</p>
                  <a
                    href="mailto:hello@fantomsystems.ai"
                    className="text-white/70 hover:text-white transition-colors duration-300"
                  >
                    hello@fantomsystems.ai
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 border border-white/20 flex items-center justify-center group-hover:border-white/40 transition-colors duration-300">
                  <ArrowUpRight className="w-5 h-5 text-white/40 group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <p className="text-xs text-white/40 uppercase tracking-wide mb-1">Location</p>
                  <p className="text-white/70">Remote-First / Global</p>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Right side - Form */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Form container with border */}
            <div className="relative p-8 lg:p-12 border border-white/10">
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-white/30" />
              <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-white/30" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-white/30" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-white/30" />
              
              {isSubmitted ? (
                <motion.div
                  className="text-center py-16"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div
                    className="w-16 h-16 border border-white/40 mx-auto mb-6 flex items-center justify-center"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <motion.path
                        d="M5 13l4 4L19 7"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                      />
                    </svg>
                  </motion.div>
                  <h3 className="text-2xl font-light mb-4">Message Sent</h3>
                  <p className="text-white/50">
                    We&apos;ll be in touch within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-12">
                  <FormField
                    label="Your Name"
                    name="name"
                    value={formData.name}
                    onChange={(value) => setFormData({ ...formData, name: value })}
                  />
                  
                  <FormField
                    label="Email Address"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={(value) => setFormData({ ...formData, email: value })}
                  />
                  
                  <FormField
                    label="Company"
                    name="company"
                    value={formData.company}
                    onChange={(value) => setFormData({ ...formData, company: value })}
                  />
                  
                  <FormField
                    label="Tell us about your project"
                    name="message"
                    isTextarea
                    value={formData.message}
                    onChange={(value) => setFormData({ ...formData, message: value })}
                  />
                  
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-5 border border-white/30 hover:border-white/60 text-sm tracking-super-wide uppercase transition-all duration-500 flex items-center justify-center gap-3 group disabled:opacity-50"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    {isSubmitting ? (
                      <motion.div
                        className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      />
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
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
