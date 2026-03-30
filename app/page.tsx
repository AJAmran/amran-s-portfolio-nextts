import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Footer } from "@/components/footer";
import dynamic from "next/dynamic";

const About = dynamic(() => import("@/components/about").then(mod => mod.About), { ssr: true });
const Services = dynamic(() => import("@/components/services").then(mod => mod.Services), { ssr: true });
const Skills = dynamic(() => import("@/components/skills").then(mod => mod.Skills), { ssr: true });
const Approach = dynamic(() => import("@/components/approach").then(mod => mod.Approach), { ssr: true });
const Projects = dynamic(() => import("@/components/projects").then(mod => mod.Projects), { ssr: true });
const Experience = dynamic(() => import("@/components/experience").then(mod => mod.Experience), { ssr: true });
const Contact = dynamic(() => import("@/components/contact").then(mod => mod.Contact), { ssr: true });

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-black selection:bg-indigo-500/30">
      <Navbar />
      
      <div className="relative">
        {/* Global Background Elements */}
        <div className="fixed inset-0 -z-50 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-100/20 via-gray-50/0 to-gray-50/0 dark:from-indigo-900/20 dark:via-black/0 dark:to-black/0 animate-aurora" />
          <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px] mix-blend-multiply dark:mix-blend-screen opacity-50 animate-blob" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] mix-blend-multiply dark:mix-blend-screen opacity-50 animate-blob animation-delay-4000" />
        </div>

        <Hero />
        <About />
        <Services />
        <Skills />
        <Approach />
        <Projects />
        <Experience />
        <Contact />
      </div>

      <Footer />
    </main>
  );
}
