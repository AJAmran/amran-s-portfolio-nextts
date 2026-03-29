import { Home, User, Briefcase, Code, Mail, Layers, Layout, Server, Database, Terminal } from "lucide-react"

export const portfolioConfig = {
  personal: {
    name: "Md. Amran Hossen",
    title: "MERN Stack Developer",
    role: "Full Stack Engineer",
    email: "mdamranhossen77@gmail.com",
    phone: "+880 1878-336155",
    location: "Chattogram, Bangladesh",
    resumeUrl: "/resume.pdf",
    socials: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    }
  },
  nav: [
    { name: "Home", href: "#", icon: Home },
    { name: "About", href: "#about", icon: User },
    { name: "Services", href: "#services", icon: Layers },
    { name: "Projects", href: "#projects", icon: Code },
    { name: "Experience", href: "#experience", icon: Briefcase },
    { name: "Contact", href: "#contact", icon: Mail },
  ],
  hero: {
    badge: "Available for work",
    heading1: "Building",
    heading2: "The Future",
    description: "I'm Md. Amran Hossen. I craft spatial, immersive, and high-performance web experiences.",
  },
  skills: {
    title: "Development Toolkit",
    description: "A comprehensive overview of my technical skills and the tools I use to build modern web applications.",
    categories: [
      {
        title: "Frontend Engineering",
        icon: Layout,
        description: "Crafting pixel-perfect, responsive, and accessible user interfaces.",
        skills: [
          "React.js", "Next.js", "TypeScript", 
          "Tailwind CSS", "Framer Motion", "Redux Toolkit",
          "HTML5 & CSS3", "Bootstrap"
        ],
        color: "text-blue-500"
      },
      {
        title: "Backend Architecture",
        icon: Server,
        description: "Building secure, scalable, and efficient server-side applications.",
        skills: [
          "Node.js", "Express.js", "RESTful APIs", 
          "JWT Authentication", "MVC Pattern", "API Integration",
          "Payment Gateways", "Middleware"
        ],
        color: "text-green-500"
      },
      {
        title: "Database & Cloud",
        icon: Database,
        description: "Designing efficient data models and deploying web applications.",
        skills: [
          "MongoDB", "Mongoose", "Firebase", 
          "Vercel", "Netlify", "Cloudinary",
          "NoSQL Design", "Data Aggregation"
        ],
        color: "text-purple-500"
      },
      {
        title: "Tools & Workflow",
        icon: Terminal,
        description: "Optimizing development workflows and ensuring code quality.",
        skills: [
          "Git & GitHub", "VS Code", "Postman", 
          "NPM / Yarn", "Figma", "Chrome DevTools",
          "ESLint / Prettier", "Vercel CLI"
        ],
        color: "text-orange-500"
      }
    ]
  },
  projects: {
    title: "Featured Projects",
    description: "A selection of my recent work demonstrating my technical capabilities across different domains.",
    categories: ["All", "Real World", "Practical", "AI & Tools"],
    items: [
      {
        title: "X-mart Super Shop",
        category: "Real World",
        description: "A full-featured e-commerce platform for a super shop chain with inventory management and online ordering.",
        tags: ["React", "Node.js", "MongoDB", "Express", "Redux"],
        image: "https://picsum.photos/seed/xmart/800/600",
        links: {
          demo: "#",
          client: "#",
          server: "#",
        },
      },
      {
        title: "Bangabandhu Int. Conf. Center",
        category: "Real World",
        description: "Official website for the international conference center, featuring event booking and virtual tours.",
        tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
        image: "https://picsum.photos/seed/bicc/800/600",
        links: {
          demo: "#",
          client: "#",
        },
      },
      {
        title: "Xinxian Hospitality Institute",
        category: "Practical",
        description: "Educational portal for a hospitality training institute with student management and course enrollment.",
        tags: ["MERN Stack", "Bootstrap", "JWT Auth"],
        image: "https://picsum.photos/seed/xinxian/800/600",
        links: {
          demo: "#",
        },
      },
      {
        title: "Scouts Poll",
        category: "Practical",
        description: "A secure polling and voting application designed for scout groups to manage elections and surveys.",
        tags: ["React", "Firebase", "Chart.js"],
        image: "https://picsum.photos/seed/scouts/800/600",
        links: {
          demo: "#",
          code: "#",
        },
      },
      {
        title: "AI Content Studio",
        category: "AI & Tools",
        description: "An AI-powered content generation tool utilizing the Gemini API to help marketers create SEO-optimized copy.",
        tags: ["Next.js", "Gemini API", "Tailwind CSS"],
        image: "https://picsum.photos/seed/ai/800/600",
        links: {
          demo: "#",
          code: "#",
        },
      },
      {
        title: "DevSnippets Hub",
        category: "AI & Tools",
        description: "A practical tool for developers to save, categorize, and share reusable code snippets with syntax highlighting.",
        tags: ["React", "Node.js", "MongoDB"],
        image: "https://picsum.photos/seed/dev/800/600",
        links: {
          demo: "#",
          code: "#",
        },
      },
    ]
  },
  contact: {
    title: "Let's Work Together",
    description: "Have a project in mind or just want to say hi? I'd love to hear from you.",
  }
}
