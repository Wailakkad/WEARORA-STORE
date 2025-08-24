'use client'

import { motion } from 'framer-motion'

export default function BigFooterMark() {
  return (
    <footer className="bg-foreground py-24 md:py-32">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h2 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white tracking-wide">
          WEARORA
        </h2>
      </motion.div>
    </footer>
  )
}