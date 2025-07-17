'use client'
import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { useInView } from 'react-intersection-observer' // assuming you're using this correctly

interface ScrollFadeProps {
  children: ReactNode
  delay?: number
}

export default function ScrollFade({ children, delay = 0 }: ScrollFadeProps) {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  )
}
