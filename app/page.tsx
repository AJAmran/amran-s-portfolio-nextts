import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Footer } from "@/components/footer";
import dynamic from "next/dynamic";
import { Suspense } from "react";

// Optimized Dynamic Imports with SSR by default for better LCP and SEO
const About = dynamic(() => import("@/components/about").then(mod => mod.About));
const Services = dynamic(() => import("@/components/services").then(mod => mod.Services));
const Skills = dynamic(() => import("@/components/skills").then(mod => mod.Skills));
const Approach = dynamic(() => import("@/components/approach").then(mod => mod.Approach));
const Projects = dynamic(() => import("@/components/projects").then(mod => mod.Projects));
const Experience = dynamic(() => import("@/components/experience").then(mod => mod.Experience));
const Contact = dynamic(() => import("@/components/contact").then(mod => mod.Contact));

// Loading boundary to ensure smooth section transitions
function SectionLoader() {
  return <div className="h-48 w-full animate-pulse bg-gray-100/50 dark:bg-white/5 rounded-3xl mb-12" />;
}

/**
 * Next.js 16 Server Component: The root page provides the skeletal structure
 * and background effects while delegating interactive logic to specialized
 * Client Components. This model maximizes server caching and streaming performance.
 */
export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-black selection:bg-indigo-500/30">
      <Navbar />
      
      <div className="relative">
        {/* Global Background Elements - Static & Performant */}
        <div className="fixed inset-0 -z-50 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-100/20 via-gray-50/0 to-gray-50/0 dark:from-indigo-900/20 dark:via-black/0 dark:to-black/0 animate-aurora" />
          <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px] mix-blend-multiply dark:mix-blend-screen opacity-50 animate-blob" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] mix-blend-multiply dark:mix-blend-screen opacity-50 animate-blob animation-delay-4000" />
        </div>

        <Hero />
        
        {/* Suspense Boundaries for Progressive Hydration in Next.js 16 */}
        <Suspense fallback={<SectionLoader />}>
          <About />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <Services />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <Skills />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <Approach />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <Projects />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <Experience />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <Contact />
        </Suspense>
      </div>

      <Footer />
    </main>
  );
}
