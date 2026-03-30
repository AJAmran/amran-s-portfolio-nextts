"use client"

import { motion, Variants } from "motion/react"
import { GlassCard } from "@/components/ui/glass-card"
import { SectionHeader } from "@/components/ui/section-header"
import { portfolioConfig } from "@/config/portfolio"
import { cn } from "@/lib/utils"

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20
    }
  }
}

export function Skills() {
  const { skills } = portfolioConfig

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Immersive Ambient Glows */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[120px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Technical Expertise"
          title={skills.title}
          description={skills.description}
          className="mb-16 lg:mb-24"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8"
        >
          {skills.categories.map((category, index) => {
            // Bento grid layout logic
            const isWide = index === 0 || index === 3;
            const colSpan = isWide ? "md:col-span-6 lg:col-span-7" : "md:col-span-6 lg:col-span-5";
            
            return (
              <motion.div key={index} variants={itemVariants} className={cn("h-full", colSpan)}>
                <GlassCard 
                  className="h-full p-6 sm:p-8 lg:p-10 flex flex-col hover:border-indigo-500/30 dark:hover:border-indigo-400/30 transition-all duration-500 group relative overflow-hidden"
                  hoverEffect={true}
                  spotlight={true}
                >
                  {/* Subtle background gradient for each card */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-white/0 dark:from-white/5 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-8">
                      <div className={cn("p-4 rounded-full bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 shadow-inner ring-1 ring-inset ring-current/10", category.color)}>
                        <category.icon className="w-8 h-8 sm:w-10 sm:h-10" />
                      </div>
                      <div className="text-5xl sm:text-7xl font-bold text-gray-100 dark:text-white/5 font-mono select-none -mt-4 -mr-4 group-hover:text-indigo-50 dark:group-hover:text-white/10 transition-colors duration-500">
                        0{index + 1}
                      </div>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {category.title}
                    </h3>
                    
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-8 leading-relaxed max-w-md">
                      {category.description}
                    </p>

                    <div className="flex flex-wrap gap-2 sm:gap-3 mt-auto">
                      {category.skills.map((skill, skillIndex) => (
                        <span 
                          key={skillIndex}
                          className="px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium rounded-full bg-white dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 border border-gray-200/80 dark:border-gray-700/80 shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:bg-indigo-50 dark:hover:bg-indigo-500/20 hover:text-indigo-700 dark:hover:text-indigo-200 hover:border-indigo-200 dark:hover:border-indigo-500/30 transition-all duration-300 cursor-default"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
