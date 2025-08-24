'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'secondary'
  size?: 'md' | 'lg'
  className?: string
}

export default function Button({ 
  children, 
  href, 
  onClick, 
  variant = 'primary', 
  size = 'md',
  className = '' 
}: ButtonProps) {
  const baseClasses = "inline-flex items-center justify-center font-medium transition-all duration-200 focus-ring rounded-full"
  
  const variantClasses = {
    primary: "bg-button-bg text-button-text hover:bg-button-hover",
    secondary: "bg-white text-foreground border border-border hover:bg-subtle"
  }
  
  const sizeClasses = {
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base"
  }

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`

  const content = (
    <motion.span
      whileTap={{ scale: 0.98 }}
      className="block"
    >
      {children}
    </motion.span>
  )

  if (href) {
    return (
      <a href={href} className={classes}>
        {content}
      </a>
    )
  }

  return (
    <button onClick={onClick} className={classes}>
      {content}
    </button>
  )
}
