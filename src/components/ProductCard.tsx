'use client'

import { motion } from 'framer-motion'
import { Product } from '@/lib/products'

interface ProductCardProps {
  product: Product
  index?: number
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group"
    >
      <a href={product.href} className="block focus-ring rounded-2xl">
        <div className="relative overflow-hidden rounded-2xl bg-subtle">
          <motion.img
            src={product.image}
            alt={product.title}
            className="w-full aspect-[3/4] object-cover transition-transform duration-500 group-hover:scale-105"
            whileHover={{ scale: 1.03 }}
          />
        </div>
        <div className="mt-4 space-y-1">
          <h3 className="text-sm font-medium text-foreground group-hover:text-muted transition-colors duration-200">
            {product.title}
          </h3>
          <p className="text-sm text-muted">
            ${product.price}
          </p>
        </div>
      </a>
    </motion.div>
  )
}