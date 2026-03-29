"use client"

import { motion } from "motion/react"
import { GlassCard } from "@/components/ui/glass-card"
import { SectionHeader } from "@/components/ui/section-header"
import { Award, Briefcase, Code, Layers } from "lucide-react"

const stats = [
  { label: "Years Experience", value: "2+", icon: Briefcase },
  { label: "Projects Completed", value: "15+", icon: Layers },
  { label: "Technologies", value: "18+", icon: Code },
  { label: "Dedication", value: "100%", icon: Award },
]

export function About() {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeader
              title="About Me"
              alignment="left"
              className="mb-6"
            />
            <div className="prose prose-lg dark:prose-invert text-gray-600 dark:text-gray-300">
              <p className="leading-relaxed mb-6">
                I am a passionate full-stack developer specializing in building modern web applications using the MERN stack. With over 2 years of professional experience, I create efficient, scalable solutions that combine technical excellence with exceptional user experiences.
              </p>
              <p className="leading-relaxed">
                My development philosophy centers on writing clean, maintainable code while staying at the forefront of industry trends. I thrive on solving complex problems and delivering products that make a real impact.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <GlassCard key={index} className="p-6 text-center flex flex-col items-center justify-center hover:bg-white/30 dark:hover:bg-white/10 transition-colors" hoverEffect>
                <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center mb-4 text-indigo-600 dark:text-indigo-400">
                  <stat.icon className="w-6 h-6" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                  {stat.value}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 font-medium uppercase tracking-wide">
                  {stat.label}
                </p>
              </GlassCard>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
