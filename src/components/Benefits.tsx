'use client'

import { motion } from 'framer-motion'

const benefits = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
      </svg>
    ),
    title: 'Express Delivery',
    description: 'With Express Delivery, your latest fashion favourites are just one day from arriving in your hands.'
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2 2z"/>
        <path d="M8 15L16 7"/>
        <path d="M16 15L8 7"/>
      </svg>
    ),
    title: 'Free Returns',
    description: 'If your item doesn\'t match your expectations, you can return it free of charge.'
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="1" y="3" width="15" height="13"/>
        <path d="M16 8h4a2 2 0 012 2v6a2 2 0 01-2 2h-2"/>
        <circle cx="9" cy="9" r="1"/>
      </svg>
    ),
    title: 'Flexible payment',
    description: 'With our flexible payment options, you can split your favourite looks across your favorite stores.'
  }
]

export default function Benefits() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {benefits.map((benefit, index) => (
        <motion.div
          key={benefit.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="bg-white p-8 rounded-2xl border border-border text-center"
        >
          <div className="flex justify-center mb-6">
            <div className="p-3 bg-subtle rounded-xl">
              {benefit.icon}
            </div>
          </div>
          <h3 className="text-lg font-semibold mb-3">
            {benefit.title}
          </h3>
          <p className="text-sm text-muted leading-relaxed">
            {benefit.description}
          </p>
        </motion.div>
      ))}
    </div>
  )
}