"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"
import { useInView } from "react-intersection-observer"

interface AnimatedSectionProps {
  children: ReactNode
  id?: string
  className?: string
}

export function AnimatedSection({ children, id, className }: AnimatedSectionProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id={id} className={className}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    </section>
  )
}
