'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
  navLinks: string[]
}

export default function MobileMenu({ isOpen, onClose, navLinks }: MobileMenuProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 bg-white"
        >
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-border">
              <div className="text-xl font-bold tracking-wide">W</div>
              <button
                onClick={onClose}
                className="p-2 focus-ring"
                aria-label="Close mobile menu"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
            </div>

            {/* Navigation */}
            <nav className="flex-1 p-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="space-y-6"
              >
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link}
                    href={`/${link.toLowerCase().replace(' ', '-')}`}
                    className="block text-2xl font-medium text-foreground hover:text-muted transition-colors duration-200 focus-ring"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 + (index * 0.05) }}
                    onClick={onClose}
                  >
                    {link}
                  </motion.a>
                ))}
              </motion.div>
            </nav>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}