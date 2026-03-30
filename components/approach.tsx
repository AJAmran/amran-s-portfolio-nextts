"use client"

import { motion } from "motion/react"
import { GlassCard } from "@/components/ui/glass-card"
import { SectionHeader } from "@/components/ui/section-header"
import { BrainCircuit, Lightbulb, Zap, Target, Code2, Rocket } from "lucide-react"

const approaches = [
  {
    title: "Algorithmic Thinking",
    description: "Breaking down complex problems into optimized, scalable, and efficient algorithmic solutions.",
    icon: BrainCircuit,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    title: "Clean Architecture",
    description: "Designing systems with separation of concerns, ensuring maintainability and long-term viability.",
    icon: Code2,
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
  },
  {
    title: "Performance Obsession",
    description: "Every millisecond counts. I optimize for speed, reducing load times and improving core web vitals.",
    icon: Zap,
    color: "text-amber-500",
    bgColor: "bg-amber-500/10",
  },
  {
    title: "User-Centric Design",
    description: "Engineering interfaces that are not just functional, but intuitive and delightful for the end-user.",
    icon: Lightbulb,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
  },
  {
    title: "Precision & Accuracy",
    description: "Writing robust, type-safe code with comprehensive error handling to prevent edge-case failures.",
    icon: Target,
    color: "text-rose-500",
    bgColor: "bg-rose-500/10",
  },
  {
    title: "Continuous Innovation",
    description: "Staying ahead of the curve by rapidly adopting and mastering emerging web technologies.",
    icon: Rocket,
    color: "text-indigo-500",
    bgColor: "bg-indigo-500/10",
  },
]

export function Approach() {
  return (
    <section id="approach" className="py-24 relative overflow-hidden">
      {/* Background Decorators */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Developer Mindset"
          title="Intelligence & Approach"
          description="Writing code is easy. Engineering scalable, high-performance, and maintainable systems requires a strategic mindset."
          className="mb-16 lg:mb-24"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {approaches.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <GlassCard className="p-8 sm:p-10 h-full flex flex-col hover:shadow-2xl hover:shadow-indigo-500/10 border border-gray-100 dark:border-white/10 transition-all duration-300 group" hoverEffect spotlight>
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${item.bgColor} ${item.color} group-hover:scale-110 transition-transform duration-300 shadow-inner ring-1 ring-inset ring-current/20`}>
                  <item.icon className="w-7 h-7" />
                </div>
                <h4 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {item.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed flex-grow text-base">
                  {item.description}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
