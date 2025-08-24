'use client'

import { motion } from 'framer-motion'

interface SectionHeadingProps {
  title: string
  href: string
}

export default function SectionHeading({ title, href }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className="flex items-center justify-between mb-8"
    >
      <h2 className="text-2xl md:text-3xl font-bold tracking-tight">{title}</h2>
      <a
        href={href}
        className="group flex items-center text-sm font-medium text-muted hover:text-foreground transition-all duration-200 focus-ring"
      >
        View all
        <svg 
          width="16" 
          height="16" 
          viewBox="0 0 16 16" 
          fill="none" 
          className="ml-1 transition-transform duration-200 group-hover:translate-x-1"
        >
          <path 
            d="M6 4L10 8L6 12" 
            stroke="currentColor" 
            strokeWidth="1.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      </a>
    </motion.div>
  )
}