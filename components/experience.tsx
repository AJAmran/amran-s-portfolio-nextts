"use client"

import { motion } from "motion/react"
import { GlassCard } from "@/components/ui/glass-card"
import { SectionHeader } from "@/components/ui/section-header"
import { Briefcase, GraduationCap, Calendar } from "lucide-react"

export function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Soft Ambient Background */}
      <div className="absolute top-1/4 right-0 -z-10 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 left-0 -z-10 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Journey So Far"
          description="My professional history and academic background."
          className="mb-16 lg:mb-24"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12">
          {/* Work Experience */}
          <div>
            <div className="flex items-center gap-4 mb-10 pl-2">
              <div className="p-3.5 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 shadow-xl shadow-indigo-500/20 text-white">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">Experience</h3>
            </div>

            <div className="relative pl-8 md:pl-10 ml-4">
              {/* Gradient Timeline Track */}
              <div className="absolute left-0 top-2 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-transparent opacity-80" />

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="relative mb-10 last:mb-0"
              >
                {/* Glowing Node */}
                <div className="absolute -left-[37px] md:-left-[45px] top-6 w-4 h-4 rounded-full bg-white dark:bg-gray-900 border-2 border-indigo-500 ring-4 ring-indigo-500/20 shadow-[0_0_15px_rgba(99,102,241,0.5)] z-10" />

                <GlassCard className="p-6 sm:p-8 relative border border-gray-100 dark:border-white/10 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300 group" hoverEffect>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 sm:mb-4 gap-3">
                    <h4 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">Web Developer</h4>
                    <span className="shrink-0 text-xs font-semibold text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200/50 dark:border-indigo-500/20 px-3 py-1.5 rounded-full flex items-center gap-1.5 w-fit shadow-inner">
                      <Calendar className="w-3.5 h-3.5" /> Feb 2024 - Present
                    </span>
                  </div>
                  <p className="text-base sm:text-lg font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 mb-4">
                    X-group Chain Restaurant and Hospitality Management
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm sm:text-base leading-relaxed">
                    Develop and maintain web applications for restaurant management and hospitality services.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["React.js", "Tailwind CSS", "Node.js"].map((tech) => (
                      <span key={tech} className="px-3 py-1 text-xs font-semibold tracking-wide rounded-full bg-gray-100 dark:bg-white/5 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-white/10">
                        {tech}
                      </span>
                    ))}
                  </div>
                </GlassCard>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="relative mb-10 last:mb-0"
              >
                {/* Glowing Node */}
                <div className="absolute -left-[37px] md:-left-[45px] top-6 w-4 h-4 rounded-full bg-white dark:bg-gray-900 border-2 border-purple-500 ring-4 ring-purple-500/20 shadow-[0_0_15px_rgba(168,85,247,0.5)] z-10" />

                <GlassCard className="p-6 sm:p-8 relative border border-gray-100 dark:border-white/10 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300 group" hoverEffect>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 sm:mb-4 gap-3">
                    <h4 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">Computer Operator</h4>
                    <span className="shrink-0 text-xs font-semibold text-purple-700 dark:text-purple-300 bg-purple-50 dark:bg-purple-500/10 border border-purple-200/50 dark:border-purple-500/20 px-3 py-1.5 rounded-full flex items-center gap-1.5 w-fit shadow-inner">
                      <Calendar className="w-3.5 h-3.5" /> Sep 2022 - Dec 2023
                    </span>
                  </div>
                  <p className="text-base sm:text-lg font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 mb-4">
                    Road to Public University
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm sm:text-base leading-relaxed">
                    Managed IT operations, document processing, and technical support for the institution.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["MS Office", "IT Support"].map((tech) => (
                      <span key={tech} className="px-3 py-1 text-xs font-semibold tracking-wide rounded-full bg-gray-100 dark:bg-white/5 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-white/10">
                        {tech}
                      </span>
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-4 mb-10 pl-2">
              <div className="p-3.5 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 shadow-xl shadow-indigo-500/20 text-white">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">Education</h3>
            </div>

            <div className="relative pl-8 md:pl-10 ml-4">
              {/* Gradient Timeline Track */}
              <div className="absolute left-0 top-2 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-transparent opacity-80" />

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="relative mb-10 last:mb-0"
              >
                {/* Glowing Node */}
                <div className="absolute -left-[37px] md:-left-[45px] top-6 w-4 h-4 rounded-full bg-white dark:bg-gray-900 border-2 border-indigo-500 ring-4 ring-indigo-500/20 shadow-[0_0_15px_rgba(99,102,241,0.5)] z-10" />

                <GlassCard className="p-6 sm:p-8 relative border border-gray-100 dark:border-white/10 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300 group" hoverEffect>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 sm:mb-4 gap-3">
                    <h4 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">B.Sc. in CSE</h4>
                    <span className="shrink-0 text-xs font-semibold text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-white/10 border border-gray-200 dark:border-white/20 px-3 py-1.5 rounded-full flex items-center gap-1.5 w-fit shadow-inner">
                      2023 - Present
                    </span>
                  </div>
                  <p className="text-base sm:text-lg font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 mb-4">
                    The Institution of Engineers, Bangladesh
                  </p>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 font-medium">
                    Bachelor of Science in Computer Science and Engineering
                  </p>
                </GlassCard>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="relative mb-10 last:mb-0"
              >
                <div className="absolute -left-[37px] md:-left-[45px] top-6 w-4 h-4 rounded-full bg-white dark:bg-gray-900 border-2 border-indigo-500 ring-4 ring-indigo-500/20 shadow-[0_0_15px_rgba(99,102,241,0.5)] z-10" />

                <GlassCard className="p-6 sm:p-8 relative border border-gray-100 dark:border-white/10 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300 group" hoverEffect>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 sm:mb-4 gap-3">
                    <h4 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">Diploma in CS</h4>
                    <span className="shrink-0 text-xs font-semibold text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-white/10 border border-gray-200 dark:border-white/20 px-3 py-1.5 rounded-full flex items-center gap-1.5 w-fit shadow-inner">
                      2019 - 2023
                    </span>
                  </div>
                  <p className="text-base sm:text-lg font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 mb-4">
                    Chattogram Polytechnic Institute
                  </p>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 font-medium">
                    GPA: 3.50/4.00
                  </p>
                </GlassCard>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative mb-10 last:mb-0"
              >
                <div className="absolute -left-[37px] md:-left-[45px] top-6 w-4 h-4 rounded-full bg-white dark:bg-gray-900 border-2 border-indigo-500 ring-4 ring-indigo-500/20 shadow-[0_0_15px_rgba(99,102,241,0.5)] z-10" />

                <GlassCard className="p-6 sm:p-8 relative border border-gray-100 dark:border-white/10 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300 group" hoverEffect>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 sm:mb-4 gap-3">
                    <h4 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">SSC</h4>
                    <span className="shrink-0 text-xs font-semibold text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-white/10 border border-gray-200 dark:border-white/20 px-3 py-1.5 rounded-full flex items-center gap-1.5 w-fit shadow-inner">
                      2017 - 2019
                    </span>
                  </div>
                  <p className="text-base sm:text-lg font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 mb-4">
                    Shantirhat High School
                  </p>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 font-medium">
                    GPA: 4.61/5.00
                  </p>
                </GlassCard>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
