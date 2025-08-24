'use client'

import { motion } from 'framer-motion'

export default function EditorialMosaic() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Left Column */}
      <div className="space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="group relative overflow-hidden rounded-2xl"
          whileHover={{ y: -2, rotateX: 1 }}
        >
          <img
            src="/edit-2.jpeg"
            alt="Editorial Image 1"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="group relative overflow-hidden rounded-2xl"
          whileHover={{ y: -2, rotateX: 1 }}
        >
          <img
            src="/edit-3.jpeg"
            alt="Editorial Image 3"
            className="w-full h-[400px] aspect-square object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </motion.div>
      </div>

      {/* Right Column */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
        className="group relative overflow-hidden rounded-2xl"
        whileHover={{ y: -2, rotateX: 1 }}
      >
        <img
          src="/promo-left.jpeg"
          alt="Editorial Image 2"
          className="w-full h-full  object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Watermark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="text-white/10 text-6xl md:text-8xl font-bold tracking-wider">
            WEARORA®
          </div>
        </div>
      </motion.div>
    </div>
  )
}