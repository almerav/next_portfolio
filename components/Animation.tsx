'use client'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { motion } from 'framer-motion'

export default function ScrollFade({ children, delay = 0 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { triggerOnce: false, amount: 0.2 }) // <== re-triggers on scroll

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 50 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  )
}
