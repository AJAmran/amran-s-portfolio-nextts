"use client"

import { motion } from "motion/react"
import { ArrowRight, Github, Linkedin, Mail, Facebook, Instagram, Twitter } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { GlassCard } from "@/components/ui/glass-card"
import { portfolioConfig } from "@/config/portfolio"

export function Hero() {
  const { personal, hero } = portfolioConfig

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Deep Spatial Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[70%] h-[70%] bg-indigo-500/20 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen animate-blob" />
        <div className="absolute top-[10%] right-[-10%] w-[60%] h-[60%] bg-purple-500/20 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen animate-blob animation-delay-2000" />
        <div className="absolute bottom-[-20%] left-[20%] w-[60%] h-[60%] bg-pink-500/20 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen animate-blob animation-delay-4000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50, filter: "blur(10px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/40 dark:bg-white/5 border border-white/30 dark:border-white/10 backdrop-blur-xl mb-8 shadow-sm"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-sm font-semibold text-gray-700 dark:text-gray-200 tracking-wide">{hero.badge}</span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter text-gray-900 dark:text-white mb-6 lg:mb-8 leading-[1.1] lg:leading-[0.9]">
              {hero.heading1} <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-gradient-text">
                {hero.heading2}
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 lg:mb-10 max-w-lg leading-relaxed font-light">
              {hero.description}
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-5 mb-10 lg:mb-12">
              <Link
                href="#contact"
                className="group w-full sm:w-auto text-center relative px-8 py-4 rounded-full bg-gray-900 dark:bg-white text-white dark:text-black font-bold text-lg hover:scale-105 transition-all duration-300 shadow-xl shadow-indigo-500/20 overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">Let&apos;s Talk <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" /></span>
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
              <Link
                href="#projects"
                className="w-full sm:w-auto text-center px-8 py-4 rounded-full border border-gray-200 dark:border-white/10 bg-white/50 dark:bg-white/5 backdrop-blur-md text-gray-900 dark:text-white font-bold text-lg hover:bg-white/80 dark:hover:bg-white/10 transition-all hover:scale-105"
              >
                View Work
              </Link>
            </div>

            <div className="flex items-center gap-4 sm:gap-6">
              {[
                { icon: Github, href: personal.socials.github, label: "GitHub Profile" },
                { icon: Linkedin, href: personal.socials.linkedin, label: "LinkedIn Profile" },
                { icon: Mail, href: `mailto:${personal.email}`, label: "Send Email" }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="p-3 rounded-2xl bg-white/50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-white hover:scale-110 hover:shadow-lg transition-all duration-300"
                >
                  <social.icon className="w-6 h-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Professional Photo & Animated Shape */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateX: 20 }}
            animate={{ opacity: 1, scale: 1, rotateX: 0 }}
            transition={{ duration: 1.2, delay: 0.2, type: "spring" }}
            className="relative flex items-center justify-center perspective-1000 w-full mt-10 lg:mt-0 pb-10 sm:pb-0"
          >
            <div className="relative w-full aspect-square max-w-sm sm:max-w-md lg:max-w-lg mx-auto flex items-center justify-center transform-style-3d">
              
              {/* Professional Animated Shape Background */}
              <div className="absolute inset-0 flex items-center justify-center z-0">
                {/* Soft ambient glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] lg:w-[400px] lg:h-[400px] bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 rounded-full blur-[60px] lg:blur-[80px]" />
                
                {/* Elegant Morphing Blob */}
                <motion.div 
                  animate={{ 
                    borderRadius: ["60% 40% 30% 70%/60% 30% 70% 40%", "40% 60% 70% 30%/50% 60% 30% 60%", "60% 40% 30% 70%/60% 30% 70% 40%"]
                  }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                  className="w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] lg:w-[380px] lg:h-[380px] bg-gradient-to-tr from-indigo-100 dark:from-indigo-900/40 via-purple-100 dark:via-purple-900/40 to-pink-100 dark:to-pink-900/40 border border-white/60 dark:border-white/10 shadow-2xl relative"
                >
                   {/* Inner glass highlight */}
                   <div className="absolute inset-0 rounded-[inherit] bg-gradient-to-b from-white/40 to-transparent dark:from-white/5" />
                </motion.div>
                
                {/* Technical dashed ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                  className="absolute w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] lg:w-[440px] lg:h-[440px] rounded-full border border-dashed border-gray-300 dark:border-gray-700/80"
                />
              </div>
              
              {/* User Photo */}
              <motion.div 
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.5, type: "spring" }}
                className="relative z-10 w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] lg:w-[420px] lg:h-[420px] bottom-0 lg:bottom-6"
              >
                <Image
                  src="/Amran.png"
                  alt={personal.name}
                  fill
                  sizes="(max-width: 640px) 280px, (max-width: 1024px) 340px, 420px"
                  className="object-contain drop-shadow-[0_20px_20px_rgba(0,0,0,0.25)] rounded-lg"
                  priority
                />
              </motion.div>

              {/* Social Follow Badge */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1, type: "spring" }}
                className="absolute -bottom-6 sm:-bottom-8 lg:bottom-4 z-20 w-fit max-w-[90vw]"
              >
                <GlassCard className="px-4 py-3 sm:px-6 sm:py-4 rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl flex items-center justify-center gap-2 sm:gap-4 bg-white/95 dark:bg-white/95 backdrop-blur-xl border border-gray-100 dark:border-white/20">
                  <span className="text-[10px] sm:text-xs font-bold text-gray-900 tracking-wider whitespace-nowrap">FOLLOW ME:</span>
                  <div className="flex items-center gap-2 sm:gap-3">
                    <a href="#" className="text-black hover:text-[#F04A26] transition-transform hover:scale-110"><Facebook className="w-4 h-4 sm:w-5 sm:h-5 fill-current" /></a>
                    <a href="#" className="text-black hover:text-[#F04A26] transition-transform hover:scale-110"><Instagram className="w-4 h-4 sm:w-5 sm:h-5" /></a>
                    <a href="#" className="text-black hover:text-[#F04A26] transition-transform hover:scale-110"><Twitter className="w-4 h-4 sm:w-5 sm:h-5 fill-current" /></a>
                    <a href={personal.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-black hover:text-[#F04A26] transition-transform hover:scale-110"><Linkedin className="w-4 h-4 sm:w-5 sm:h-5 fill-current" /></a>
                  </div>
                </GlassCard>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
