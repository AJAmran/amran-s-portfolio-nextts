"use client"

import { motion } from "motion/react"
import { cn } from "@/lib/utils"

interface SectionHeaderProps {
  badge?: string;
  title: string;
  description?: string;
  className?: string;
  alignment?: "left" | "center";
}

export function SectionHeader({
  badge,
  title,
  description,
  className,
  alignment = "center"
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className={cn(alignment === "center" ? "text-center mx-auto" : "text-left", "mb-16 md:mb-20", className)}
    >
      {badge && (
        <span className="block text-xs sm:text-sm font-semibold text-indigo-600 dark:text-indigo-400 tracking-widest uppercase mb-3">
          {badge}
        </span>
      )}
      <h2 className={cn(
        "text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white tracking-tight", 
        badge || description ? "mb-6" : ""
      )}>
        {title}
      </h2>
      {description && (
        <p className={cn(
          "text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed", 
          alignment === "center" ? "max-w-2xl mx-auto" : "max-w-2xl"
        )}>
          {description}
        </p>
      )}
    </motion.div>
  )
}
