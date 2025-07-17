'use client'
import { useInView } from 'framer-motion'
import { useRef, ReactNode } from 'react'
import { motion } from 'framer-motion'

interface ScrollFadeProps {
  children: ReactNode
  delay?: number
}

export default function ScrollFade({ children, delay = 0 }: ScrollFadeProps) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: false, amount: 0.2 }) // Changed triggerOnce to once

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  )
}