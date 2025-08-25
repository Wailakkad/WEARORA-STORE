// FILE: src/components/Hero.tsx
'use client'

import { motion } from 'framer-motion'
import Button from './Button'

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          src="/vedio.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-[1000px] object-cover p-20"
        >
          Your browser does not support the video tag.
        </video>
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
            <Button href="/shop" size="lg" className="bg-white text-black hover:bg-black hover:text-white px-8 py-3 mt-80 text-base font-medium duration-300">
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
        AURA
      </motion.div>
    </section>
  )
}