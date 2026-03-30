"use client"

import { motion } from "motion/react"
import { GlassCard } from "@/components/ui/glass-card"
import { SectionHeader } from "@/components/ui/section-header"
import { Code2, Database, Globe, Layout, Server, Smartphone } from "lucide-react"
import { Button } from "@/components/ui/button"

const services = [
  {
    title: "Custom Web Development",
    description: "Tailored web solutions built from scratch to meet your specific business needs and goals.",
    icon: Globe,
  },
  {
    title: "Responsive Web Design",
    description: "Creating websites that look and work perfectly on all devices, from desktops to smartphones.",
    icon: Layout,
  },
  {
    title: "Front-End Development",
    description: "Building interactive and engaging user interfaces using modern frameworks like React and Next.js.",
    icon: Code2,
  },
  {
    title: "Back-End Development",
    description: "Robust server-side logic and API development using Node.js and Express for scalable applications.",
    icon: Server,
  },
  {
    title: "Database Solutions",
    description: "Designing and managing efficient database structures with MongoDB and Mongoose.",
    icon: Database,
  },
  {
    title: "API Development",
    description: "Creating secure and reliable RESTful APIs to connect your applications with external services.",
    icon: Smartphone, // Using Smartphone as a proxy for "connectivity/apps" or similar
  },
]

export function Services() {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Immersive Ambient Glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[120px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Development Services"
          description="Comprehensive solutions designed to bring your digital vision to life."
          className="mb-16 lg:mb-24"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <GlassCard className="p-8 sm:p-10 h-full flex flex-col hover:shadow-2xl hover:shadow-indigo-500/10 border border-gray-100 dark:border-white/10 transition-all duration-300 group" hoverEffect spotlight>
                <div className="w-14 h-14 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 dark:from-indigo-500/20 dark:to-purple-500/20 border border-indigo-500/20 rounded-full flex items-center justify-center mb-6 text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform duration-300 shadow-inner">
                  <service.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed flex-grow text-base">
                  {service.description}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-20 sm:mt-24 text-center px-4"
        >
          <div className="relative inline-block group w-full sm:w-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-3xl blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-500 animate-pulse" />
            <div className="relative px-6 py-6 sm:px-10 sm:py-5 rounded-3xl border border-white/40 dark:border-white/10 bg-white/90 dark:bg-black/80 backdrop-blur-xl flex flex-col md:flex-row items-center justify-center gap-6 shadow-2xl">
              <span className="text-gray-900 dark:text-gray-100 font-bold text-lg sm:text-xl tracking-tight text-center md:text-left">
                Ready to start your project? Let&apos;s build together.
              </span>
              <Button
                href="#contact"
                variant="gradient"
                size="sm"
                className="w-full md:w-auto px-8 py-3.5 whitespace-nowrap"
              >
                Let&apos;s Talk
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
