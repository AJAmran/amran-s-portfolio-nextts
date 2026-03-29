"use client"

import { cn } from "@/lib/utils"
import { useRef, useState } from "react"
import { motion, HTMLMotionProps } from "motion/react"

interface GlassCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode
  className?: string
  hoverEffect?: boolean
  spotlight?: boolean
}

export function GlassCard({ children, className, hoverEffect = false, spotlight = false, ...props }: GlassCardProps) {
  const divRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [opacity, setOpacity] = useState(0)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current || !spotlight) return

    const div = divRef.current
    const rect = div.getBoundingClientRect()

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  }

  const handleMouseEnter = () => {
    if (spotlight) setOpacity(1)
  }

  const handleMouseLeave = () => {
    if (spotlight) setOpacity(0)
  }

  return (
    <motion.div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      whileHover={hoverEffect ? { scale: 1.02, y: -5 } : undefined}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={cn(
        "relative overflow-hidden rounded-[2rem] border border-white/40 dark:border-white/10",
        "bg-white/60 dark:bg-gray-900/40 backdrop-blur-3xl",
        "shadow-xl shadow-black/5 dark:shadow-black/20",
        "transition-colors duration-500",
        hoverEffect && "hover:bg-white/80 dark:hover:bg-gray-800/60 hover:shadow-2xl hover:shadow-indigo-500/10 dark:hover:shadow-indigo-900/20",
        className
      )}
      {...props}
    >
      {/* Inner highlight for 3D glass effect */}
      <div className="absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-white/50 dark:ring-white/10 pointer-events-none" />
      
      {spotlight && (
        <div
          className="pointer-events-none absolute -inset-px opacity-0 transition duration-500"
          style={{
            opacity,
            background: `radial-gradient(800px circle at ${position.x}px ${position.y}px, rgba(255, 255, 255, 0.15), transparent 40%)`,
          }}
        />
      )}
      {children}
    </motion.div>
  )
}
