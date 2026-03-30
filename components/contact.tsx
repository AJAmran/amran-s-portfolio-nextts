"use client"

import { motion } from "motion/react"
import { GlassCard } from "@/components/ui/glass-card"
import { SectionHeader } from "@/components/ui/section-header"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Send, Download, Loader2 } from "lucide-react"
import { useForm } from "react-hook-form"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { portfolioConfig } from "@/config/portfolio"

type FormData = {
  name: string
  email: string
  message: string
}

export function Contact() {
  const { contact, personal } = portfolioConfig
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))
    console.log(data)
    setIsSubmitting(false)
    setIsSuccess(true)
    reset()
    setTimeout(() => setIsSuccess(false), 5000)
  }

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title={contact.title}
          description={contact.description}
          className="mb-16 lg:mb-24"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <GlassCard className="p-8 sm:p-10 h-full flex flex-col justify-between border border-gray-100 dark:border-white/10" hoverEffect spotlight>
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 mb-8">Let&apos;s Connect</h3>
                <div className="space-y-4">
                  <Button href={`mailto:${personal.email}`} variant="none" size="none" aria-label={`Email ${personal.email}`} className="flex items-center gap-5 p-4 sm:p-5 rounded-full bg-white/50 dark:bg-white/5 border border-gray-100 dark:border-white/10 hover:border-indigo-500/30 dark:hover:border-indigo-500/30 hover:shadow-lg transition-all duration-300 group">
                    <div className="p-3.5 rounded-full bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform shadow-inner ring-1 ring-inset ring-indigo-500/20">
                      <Mail className="w-6 h-6" aria-hidden="true" />
                    </div>
                    <span className="text-base sm:text-lg font-medium text-gray-700 dark:text-gray-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors w-full break-all">{personal.email}</span>
                  </Button>
                  <Button href={`tel:${personal.phone.replace(/[^0-9+]/g, '')}`} variant="none" size="none" aria-label={`Call ${personal.phone}`} className="flex items-center gap-5 p-4 sm:p-5 rounded-full bg-white/50 dark:bg-white/5 border border-gray-100 dark:border-white/10 hover:border-purple-500/30 dark:hover:border-purple-500/30 hover:shadow-lg transition-all duration-300 group">
                    <div className="p-3.5 rounded-full bg-purple-50 dark:bg-purple-500/10 text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform shadow-inner ring-1 ring-inset ring-purple-500/20">
                      <Phone className="w-6 h-6" aria-hidden="true" />
                    </div>
                    <span className="text-base sm:text-lg font-medium text-gray-700 dark:text-gray-300 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">{personal.phone}</span>
                  </Button>
                  <div className="flex items-center gap-5 p-4 sm:p-5 rounded-full bg-white/50 dark:bg-white/5 border border-gray-100 dark:border-white/10 hover:border-pink-500/30 dark:hover:border-pink-500/30 hover:shadow-lg transition-all duration-300 group cursor-default">
                    <div className="p-3.5 rounded-full bg-pink-50 dark:bg-pink-500/10 text-pink-600 dark:text-pink-400 group-hover:scale-110 transition-transform shadow-inner ring-1 ring-inset ring-pink-500/20">
                      <MapPin className="w-6 h-6" aria-hidden="true" />
                    </div>
                    <span className="text-base sm:text-lg font-medium text-gray-700 dark:text-gray-300 group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors">{personal.location}</span>
                  </div>
                </div>
              </div>

              <div className="mt-12 relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-800 dark:from-white dark:to-gray-200 rounded-full blur-md opacity-20 group-hover:opacity-40 transition-opacity" />
                <Button
                  href={personal.resumeUrl}
                  download
                  variant="none" size="none"
                  className="relative inline-flex items-center justify-center w-full px-8 py-4 sm:py-5 rounded-full bg-gray-900 dark:bg-white text-white dark:text-black font-bold text-lg hover:scale-[1.02] transition-transform shadow-xl gap-3 overflow-hidden border border-gray-800 dark:border-white/20"
                >
                  <div className="absolute inset-0 bg-white/20 dark:bg-black/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                  <span className="relative z-10 flex items-center gap-2">
                    <Download className="w-5 h-5" /> Download Resume
                  </span>
                </Button>
              </div>
            </GlassCard>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <GlassCard className="p-8 sm:p-10 border border-gray-100 dark:border-white/10" hoverEffect spotlight>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2.5">
                    Name
                  </label>
                  <input
                    {...register("name", { required: "Name is required" })}
                    type="text"
                    id="name"
                    className={cn(
                      "w-full px-5 py-4 rounded-xl bg-white/70 dark:bg-black/40 border border-gray-200 dark:border-white/10 focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500 dark:focus:border-indigo-400 outline-none transition-all placeholder:text-gray-400 dark:placeholder:text-gray-600 shadow-inner text-gray-900 dark:text-white",
                      errors.name && "border-red-500 focus:ring-red-500/20 focus:border-red-500"
                    )}
                    placeholder="John Doe"
                  />
                  {errors.name && <p className="mt-1.5 text-sm font-medium text-red-500">{errors.name.message}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2.5">
                    Email
                  </label>
                  <input
                    {...register("email", { 
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address"
                      }
                    })}
                    type="email"
                    id="email"
                    className={cn(
                      "w-full px-5 py-4 rounded-xl bg-white/70 dark:bg-black/40 border border-gray-200 dark:border-white/10 focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500 dark:focus:border-indigo-400 outline-none transition-all placeholder:text-gray-400 dark:placeholder:text-gray-600 shadow-inner text-gray-900 dark:text-white",
                      errors.email && "border-red-500 focus:ring-red-500/20 focus:border-red-500"
                    )}
                    placeholder="john@example.com"
                  />
                  {errors.email && <p className="mt-1.5 text-sm font-medium text-red-500">{errors.email.message}</p>}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2.5">
                    Message
                  </label>
                  <textarea
                    {...register("message", { required: "Message is required" })}
                    id="message"
                    rows={4}
                    className={cn(
                      "w-full px-5 py-4 rounded-xl bg-white/70 dark:bg-black/40 border border-gray-200 dark:border-white/10 focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500 dark:focus:border-indigo-400 outline-none transition-all placeholder:text-gray-400 dark:placeholder:text-gray-600 resize-none shadow-inner text-gray-900 dark:text-white",
                      errors.message && "border-red-500 focus:ring-red-500/20 focus:border-red-500"
                    )}
                    placeholder="Tell me about your project..."
                  />
                  {errors.message && <p className="mt-1.5 text-sm font-medium text-red-500">{errors.message.message}</p>}
                </div>

                <div className="pt-2">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    variant="none" size="none"
                    className="group relative w-full px-8 py-4 sm:py-5 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold text-lg hover:shadow-2xl hover:shadow-indigo-500/40 hover:scale-[1.02] transition-all duration-300 disabled:opacity-70 disabled:hover:scale-100 disabled:cursor-not-allowed flex items-center justify-center gap-3 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-white/20 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300 ease-out" />
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" /> Sending...
                        </>
                      ) : (
                        <>
                          Send Message <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </>
                      )}
                    </span>
                  </Button>
                </div>

                {isSuccess && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center text-green-600 dark:text-green-400 font-medium"
                  >
                    Message sent successfully!
                  </motion.p>
                )}
              </form>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
