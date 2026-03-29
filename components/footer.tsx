"use client"

import Link from "next/link"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import { portfolioConfig } from "@/config/portfolio"

export function Footer() {
  return (
    <footer className="bg-white/50 dark:bg-black/50 backdrop-blur-xl border-t border-gray-200 dark:border-white/10 py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="text-3xl font-bold tracking-tight mb-6 block">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600">Amran</span>
              <span className="text-gray-900 dark:text-white">.dev</span>
            </Link>
            <p className="text-gray-600 dark:text-gray-400 max-w-sm text-base leading-relaxed">
              Building exceptional digital experiences and scalable architectures with modern web technologies.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="#about" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#projects" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-6">
              Connect
            </h3>
            <div className="flex flex-wrap gap-4">
              <a href={portfolioConfig.personal.socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" className="p-3 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 hover:border-indigo-500/30 hover:shadow-lg transition-all group">
                <Github className="w-5 h-5 text-gray-500 dark:text-gray-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors" aria-hidden="true" />
              </a>
              <a href={portfolioConfig.personal.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" className="p-3 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 hover:border-indigo-500/30 hover:shadow-lg transition-all group">
                <Linkedin className="w-5 h-5 text-gray-500 dark:text-gray-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors" aria-hidden="true" />
              </a>
              <a href="mailto:mdamranhossen77@gmail.com" aria-label="Send Email" className="p-3 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 hover:border-indigo-500/30 hover:shadow-lg transition-all group">
                <Mail className="w-5 h-5 text-gray-500 dark:text-gray-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500 dark:text-gray-400" suppressHydrationWarning>
            &copy; {new Date().getFullYear()} Md. Amran Hossen. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
