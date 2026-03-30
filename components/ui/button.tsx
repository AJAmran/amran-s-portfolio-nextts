import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "glass" | "gradient" | "none"
  size?: "default" | "sm" | "lg" | "icon" | "none"
  href?: string
  target?: string
  rel?: string
  download?: string | boolean
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", href, target, rel, download, children, ...props }, ref) => {
    
    const baseStyles = variant !== "none" ? "inline-flex items-center justify-center font-bold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-70 disabled:pointer-events-none overflow-hidden relative group" : ""
    
    const variants = {
      none: "",
      default: "rounded-full bg-gray-900 dark:bg-white text-white dark:text-black hover:scale-105 shadow-xl shadow-indigo-500/20",
      outline: "rounded-full border border-gray-200 dark:border-white/10 bg-white/50 dark:bg-white/5 backdrop-blur-md text-gray-900 dark:text-white hover:bg-white/80 dark:hover:bg-white/10 hover:scale-105",
      ghost: "rounded-full bg-white/50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-white hover:scale-110 hover:shadow-lg",
      glass: "rounded-full shadow-lg border border-white/20 transition-colors backdrop-blur-md bg-white/20 hover:bg-white/30 text-white",
      gradient: "rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:shadow-2xl hover:shadow-indigo-500/40 hover:scale-[1.02]",
    }
    
    const sizes = {
      none: "",
      default: "px-8 py-4 text-lg",
      sm: "px-4 py-2 text-sm",
      lg: "px-8 py-5 text-lg",
      icon: "p-3",
    }
    
    const classes = cn(baseStyles, variants[variant], sizes[size], className)

    if (href) {
      const isExternal = href.startsWith('http') || href.startsWith('mailto') || href.startsWith('tel') || download;
      if (isExternal) {
        return (
          <a
            href={href}
            target={target}
            rel={target === "_blank" ? (rel || "noopener noreferrer") : rel}
            download={download === true ? "" : (download || undefined)}
            className={classes}
            {...(props as any)}
          >
            {children}
          </a>
        )
      }

      return (
        <Link 
          href={href} 
          target={target} 
          rel={target === "_blank" ? (rel || "noopener noreferrer") : rel} 
          className={classes} 
          {...(props as any)}
        >
          {children}
        </Link>
      )
    }

    return (
      <button className={classes} ref={ref} {...props}>
        {children}
      </button>
    )
  }
)

Button.displayName = "Button"
