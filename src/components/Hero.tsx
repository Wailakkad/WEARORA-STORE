// FILE: src/components/Hero.tsx
'use client'

import { motion } from 'framer-motion'
import Button from './Button'

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/heee.jpg"
          alt="WEARORA Hero - Performance Redefined"
          className="w-full  object-cover p-20"
        />
      </div>

      {/* Content Overlay */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
        <div className="max-w-4xl mx-auto">
          

          {/* CTA Button */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
          >
            <Button href="/pages/men" size="lg" className="bg-white text-balck hover:bg-gray-900 hover:text-white hover:border-2 px-8 py-3 text-base font-medium mt-120">
              SHOP NOW
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Bottom Right Microcopy */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="absolute bottom-8 right-8 text-white text-sm mr-20 font-light tracking-wide"
      >
        Performance. Redefined.
      </motion.div>
    </section>
  )
}