import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Services } from "@/components/services";
import { Skills } from "@/components/skills";
import { Approach } from "@/components/approach";
import { Projects } from "@/components/projects";
import { Experience } from "@/components/experience";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

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
