"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface MotionWrapperProps {
  children: ReactNode
  className?: string
  delay?: number
  duration?: number
  type?: "fade" | "slide" | "scale" | "bounce"
  direction?: "up" | "down" | "left" | "right"
}

export function MotionWrapper({
  children,
  className = "",
  delay = 0,
  duration = 0.5,
  type = "fade",
  direction = "up",
}: MotionWrapperProps) {
  const getVariants = () => {
    switch (type) {
      case "slide":
        return {
          hidden: {
            opacity: 0,
            x: direction === "left" ? -50 : direction === "right" ? 50 : 0,
            y: direction === "up" ? 50 : direction === "down" ? -50 : 0,
          },
          visible: {
            opacity: 1,
            x: 0,
            y: 0,
          },
        }
      case "scale":
        return {
          hidden: { opacity: 0, scale: 0.8 },
          visible: { opacity: 1, scale: 1 },
        }
      case "bounce":
        return {
          hidden: { opacity: 0, y: -20 },
          visible: { opacity: 1, y: 0 },
        }
      default:
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }
    }
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      animate="visible"
      variants={getVariants()}
      transition={{
        duration,
        delay,
        type: type === "bounce" ? "spring" : "tween",
        bounce: type === "bounce" ? 0.4 : 0,
      }}
    >
      {children}
    </motion.div>
  )
}
