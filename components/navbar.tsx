"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "motion/react"
import { ThemeToggle } from "@/components/theme-toggle"
import { cn } from "@/lib/utils"
import { portfolioConfig } from "@/config/portfolio"

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)
  const [activeSection, setActiveSection] = React.useState("Home")

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      // Active section logic
      const sections = portfolioConfig.nav.map(link => {
        const id = link.href.replace("#", "")
        const element = document.getElementById(id === "" ? "hero" : id) // Assuming Home is hero or top
        return { name: link.name, offset: element?.offsetTop || 0, height: element?.offsetHeight || 0 }
      })

      const scrollPosition = window.scrollY + 100 // Offset for navbar height

      for (const section of sections) {
        if (scrollPosition >= section.offset && scrollPosition < section.offset + section.height) {
          setActiveSection(section.name)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <nav
        aria-label="Main navigation"
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b",
          scrolled
            ? "bg-white/70 dark:bg-black/70 backdrop-blur-2xl saturate-150 border-gray-200/50 dark:border-white/10 shadow-sm py-3"
            : "bg-transparent border-transparent py-5"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center gap-2">
              <Link href="/" className="text-xl font-bold tracking-tight flex items-center gap-1 group">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform duration-300">
                  {portfolioConfig.personal.name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase()}
                </div>
                <span className="hidden sm:inline-block text-gray-900 dark:text-white font-alt tracking-tight">Amran.dev</span>
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-1 bg-gray-100/50 dark:bg-white/5 p-1.5 rounded-full border border-gray-200/50 dark:border-white/5 backdrop-blur-md">
              {portfolioConfig.nav.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setActiveSection(link.name)}
                  className={cn(
                    "relative px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300",
                    activeSection === link.name
                      ? "text-gray-900 dark:text-white"
                      : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
                  )}
                >
                  {activeSection === link.name && (
                    <motion.span
                      layoutId="activeNav"
                      className="absolute inset-0 bg-white dark:bg-white/10 rounded-full shadow-sm"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <ThemeToggle />
              
              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
                aria-label={isOpen ? "Close main menu" : "Open main menu"}
                className="md:hidden inline-flex items-center justify-center p-2.5 rounded-full bg-gray-100/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none transition-colors backdrop-blur-md"
              >
                {isOpen ? <X className="block h-5 w-5" aria-hidden="true" /> : <Menu className="block h-5 w-5" aria-hidden="true" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
            />
            <motion.div
              id="mobile-menu"
              role="menu"
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="fixed top-24 left-4 right-4 z-50 md:hidden bg-white/90 dark:bg-gray-900/90 backdrop-blur-2xl rounded-3xl shadow-2xl border border-gray-200/50 dark:border-white/10 overflow-hidden"
            >
              <div className="p-2 space-y-1">
                {portfolioConfig.nav.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => {
                      setActiveSection(link.name)
                      setIsOpen(false)
                    }}
                    className={cn(
                      "flex items-center gap-3 px-4 py-3.5 rounded-full transition-all duration-200",
                      activeSection === link.name
                        ? "bg-gray-100 dark:bg-white/10 text-indigo-600 dark:text-white font-semibold"
                        : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-white/5 hover:text-gray-900 dark:hover:text-gray-200"
                    )}
                  >
                    <div className={cn(
                      "p-2 rounded-full transition-colors",
                      activeSection === link.name
                        ? "bg-indigo-100 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400"
                        : "bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400"
                    )}>
                      <link.icon className="w-5 h-5" />
                    </div>
                    <span className="text-base">{link.name}</span>
                    {activeSection === link.name && (
                      <motion.div
                        layoutId="activeMobile"
                        className="ml-auto w-1.5 h-1.5 rounded-full bg-indigo-600 dark:bg-indigo-400"
                      />
                    )}
                  </Link>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
