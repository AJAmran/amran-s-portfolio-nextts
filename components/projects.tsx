"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { GlassCard } from "@/components/ui/glass-card"
import { SectionHeader } from "@/components/ui/section-header"
import { ExternalLink, Github, Server } from "lucide-react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { portfolioConfig } from "@/config/portfolio"

export function Projects() {
  const { projects } = portfolioConfig
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredProjects = projects.items.filter(
    (project) => activeCategory === "All" || project.category === activeCategory
  )

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Portfolio"
          title={projects.title}
          description={projects.description}
          className="mb-12"
        />

        {/* Filter Tabs - iOS Style */}
        <div className="flex justify-center mb-12 overflow-x-auto pb-4 hide-scrollbar">
          <div className="flex items-center gap-1 sm:gap-2 p-1.5 bg-white/60 dark:bg-black/40 rounded-full border border-gray-200 dark:border-white/10 backdrop-blur-xl shadow-sm w-max">
            {projects.categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "relative px-5 py-2.5 rounded-full text-sm font-bold tracking-wide transition-colors duration-300 whitespace-nowrap z-10",
                  activeCategory === category
                    ? "text-white dark:text-black"
                    : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
                )}
              >
                {activeCategory === category && (
                  <motion.span
                    layoutId="activeCategory"
                    className="absolute inset-0 bg-gray-900 dark:bg-white rounded-full -z-10 shadow-md"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span>{category}</span>
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, type: "spring" }}
                className="h-full"
              >
                <GlassCard className="overflow-hidden h-full flex flex-col group" hoverEffect spotlight>
                  <div className="relative h-[280px] w-full overflow-hidden bg-gray-100 dark:bg-gray-800/50">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority={index < 2}
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                    
                    <div className="absolute top-4 left-4 z-10">
                      <span className="px-3 py-1.5 text-xs font-bold tracking-wider uppercase rounded-full bg-white/95 dark:bg-black/80 text-gray-900 dark:text-white shadow-xl backdrop-blur-md border border-white/20">
                        {project.category}
                      </span>
                    </div>

                    <div className="absolute inset-x-0 bottom-0 p-6 flex gap-3 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out z-20">
                      {project.links.demo && (
                        <a
                          href={project.links.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-bold rounded-full shadow-lg transition-colors"
                          title="Live Demo"
                        >
                          <ExternalLink className="w-4 h-4" /> Live Demo
                        </a>
                      )}
                      {project.links.client && (
                        <a
                          href={project.links.client}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-white/20 hover:bg-white/30 backdrop-blur-md text-white text-sm font-bold rounded-full shadow-lg border border-white/20 transition-colors"
                          title="View Code"
                        >
                          <Github className="w-4 h-4" /> Code
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="p-6 sm:p-8 flex flex-col flex-grow bg-white/30 dark:bg-transparent">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-6 flex-grow text-base leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs font-semibold tracking-wide rounded-full bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-500/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {(project.links.client || project.links.server) && (
                      <div className="flex flex-wrap gap-5 pt-5 border-t border-gray-200 dark:border-gray-800">
                        {project.links.client && (
                          <a href={project.links.client} target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 flex items-center gap-1.5 transition-colors">
                            <Github className="w-4 h-4" /> Client Repo
                          </a>
                        )}
                        {project.links.server && (
                          <a href={project.links.server} target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 flex items-center gap-1.5 transition-colors">
                            <Server className="w-4 h-4" /> Server Repo
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
