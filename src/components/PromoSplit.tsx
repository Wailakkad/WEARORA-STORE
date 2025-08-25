'use client'

import { motion } from 'framer-motion'
import Button from '@/components/Button'

export default function PromoSplit() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
      {/* Left Image */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative overflow-hidden rounded-2xl"
      >
        <img
          src="/edit-1.jpeg"
          alt="Exclusive Fashion Offers"
          className="w-full aspect-[3/4] md:aspect-[4/5] object-cover"
        />
      </motion.div>

      {/* Right Content Card */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="lg:max-w-lg"
      >
        <div className="bg-white p-8 md:p-12 rounded-2xl border border-border shadow-sm">
          <div className="space-y-6">
            <div className="text-xs font-medium text-muted tracking-wide uppercase">
              Reactive Everyday Comfort
            </div>
            <h3 className="text-2xl md:text-3xl font-bold leading-tight">
              Discover hoodies designed for movement, style, and simplicity.
            </h3>
            <Button href="/pages/men" size="lg" className="bg-white text-balck border-2 black hover:bg-black hover:text-white px-8 py-3 text-base font-medium duration-300">
              Shop now
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  )
}