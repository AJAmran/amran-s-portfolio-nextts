"use client"

import { motion } from "motion/react"
import { ArrowRight, Github, Linkedin, Mail, Facebook, Instagram, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { GlassCard } from "@/components/ui/glass-card"
import { portfolioConfig } from "@/config/portfolio"

export function Hero() {
  const { personal, hero } = portfolioConfig

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
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
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center mt-10 md:mt-0 gap-2 px-4 py-2 rounded-full bg-white/40 dark:bg-white/5 border border-white/30 dark:border-white/10 backdrop-blur-xl mb-8 shadow-sm"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-sm font-semibold text-gray-700 dark:text-gray-200 tracking-wide">{hero.badge}</span>
            </motion.div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter text-gray-900 dark:text-white mb-6 lg:mb-8 leading-tight lg:leading-[1.15]">
              {hero.heading1} <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-gradient-text">
                {hero.heading2}
              </span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 lg:mb-10 max-w-lg leading-relaxed font-light">
              {hero.description}
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-5 mb-10 lg:mb-12">
              <Button
                href="#contact"
                variant="gradient"
                className="w-full sm:w-auto overflow-hidden group"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">Let&apos;s Talk <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" /></span>
              </Button>
              <Button
                href="#projects"
                variant="outline"
                className="w-full sm:w-auto font-bold"
              >
                View Work
              </Button>
            </div>

            <div className="flex items-center gap-4 sm:gap-6">
              {[
                { icon: Github, href: personal.socials.github, label: "GitHub Profile" },
                { icon: Linkedin, href: personal.socials.linkedin, label: "LinkedIn Profile" },
                { icon: Mail, href: `mailto:${personal.email}`, label: "Send Email" }
              ].map((social, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="icon"
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                >
                  <social.icon className="w-6 h-6" aria-hidden="true" />
                </Button>
              ))}
            </div>
          </motion.div>

          {/* Professional Photo & Animated Shape */}
          <motion.div
            initial={{ scale: 0.8, rotateX: 10 }}
            animate={{ scale: 1, rotateX: 0 }}
            transition={{ duration: 1.2, delay: 0.2, type: "spring" }}
            className="relative flex items-center justify-center perspective-1000 w-full mt-10 lg:mt-0 pb-10 sm:pb-0"
          >
            <div className="relative w-full aspect-square max-w-sm sm:max-w-md lg:max-w-lg mx-auto flex items-center justify-center transform-style-3d">

              {/* Professional Animated Shape Background */}
              <div className="absolute inset-0 flex items-center justify-center z-0">
                {/* Soft ambient glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] md:w-[420px] md:h-[420px] lg:w-[400px] lg:h-[400px] bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 rounded-full blur-[60px] lg:blur-[80px]" />

                {/* Elegant Morphing Blob */}
                <motion.div
                  animate={{
                    borderRadius: ["60% 40% 30% 70%/60% 30% 70% 40%", "40% 60% 70% 30%/50% 60% 30% 60%", "60% 40% 30% 70%/60% 30% 70% 40%"]
                  }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  className="w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] md:w-[380px] md:h-[380px] lg:w-[380px] lg:h-[380px] bg-gradient-to-tr from-indigo-100 dark:from-indigo-900/40 via-purple-100 dark:via-purple-900/40 to-pink-100 dark:to-pink-900/40 border border-white/60 dark:border-white/10 shadow-2xl relative will-change-[border-radius]"
                >
                  {/* Inner glass highlight */}
                  <div className="absolute inset-0 rounded-[inherit] bg-gradient-to-b from-white/40 to-transparent dark:from-white/5" />
                </motion.div>

                {/* Technical dashed ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                  className="absolute w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] md:w-[440px] md:h-[440px] lg:w-[440px] lg:h-[440px] rounded-full border border-dashed border-gray-300 dark:border-gray-700/80"
                />
              </div>

              {/* User Photo */}
              <motion.div
                initial={{ y: 30 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, type: "spring" }}
                className="relative z-10 w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] md:w-[400px] md:h-[400px] lg:w-[420px] lg:h-[420px] bottom-0 lg:bottom-6"
              >
                <Image
                  src="/Amran.png"
                  alt={personal.name}
                  title={personal.name}
                  fill
                  sizes="(max-width: 640px) 280px, (max-width: 768px) 340px, (max-width: 1024px) 400px, 420px"
                  quality={90}
                  className="object-contain drop-shadow-[0_20px_20px_rgba(0,0,0,0.25)] rounded-lg"
                  priority
                />
              </motion.div>

              {/* Social Follow Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1, type: "spring", stiffness: 100 }}
                className="absolute bottom-6 sm:bottom-10 z-20 w-fit max-w-[95vw]"
              >
                <div className="glass-panel px-4 py-2.5 sm:px-5 sm:py-3 rounded-2xl sm:rounded-full shadow-2xl flex items-center gap-4 sm:gap-5 bg-white/70 dark:bg-black/40 border border-white/40 dark:border-white/10 ring-1 ring-black/5 dark:ring-white/5 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full animate-[shimmer_3s_infinite] pointer-events-none" />
                  
                  <div className="flex items-center gap-2.5">
                    <div className="relative">
                      <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <div className="absolute inset-0 w-2 h-2 rounded-full bg-emerald-500 animate-ping opacity-75" />
                    </div>
                    <span className="text-[10px] sm:text-[11px] font-black text-gray-900 dark:text-white tracking-widest uppercase opacity-80">
                      Connect
                    </span>
                  </div>

                  <div className="h-4 w-px bg-gray-300 dark:bg-white/20" />

                  <div className="flex items-center gap-3.5 sm:gap-4.5">
                    <Button
                      variant="none"
                      size="none"
                      href="https://www.facebook.com/share/17tyHAjCap/"
                      aria-label="Facebook Profile"
                      className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300 hover:scale-125 hover:-translate-y-1"
                    >
                      <Facebook aria-hidden="true" className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
                    </Button>
                    <Button
                      variant="none"
                      size="none"
                      href="https://www.instagram.com/mdamran441/"
                      aria-label="Instagram Profile"
                      className="text-gray-700 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 transition-all duration-300 hover:scale-125 hover:-translate-y-1"
                    >
                      <Instagram aria-hidden="true" className="w-4 h-4 sm:w-5 sm:h-5" />
                    </Button>
                    <Button
                      variant="none"
                      size="none"
                      href="https://x.com/MdAmran29290306"
                      aria-label="Twitter Profile"
                      className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-all duration-300 hover:scale-125 hover:-translate-y-1"
                    >
                      <X aria-hidden="true" className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
                    </Button>
                    <Button
                      variant="none"
                      size="none"
                      href={personal.socials.linkedin}
                      aria-label="LinkedIn Profile"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-500 transition-all duration-300 hover:scale-125 hover:-translate-y-1"
                    >
                      <Linkedin aria-hidden="true" className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
