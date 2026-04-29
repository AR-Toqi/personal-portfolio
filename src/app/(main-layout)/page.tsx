import React from "react";
import Link from "next/link";
import HeroContent from "@/components/sections/HeroContent";
import TechnicalEcosystem from "@/components/sections/TechnicalEcosystem";
import About from "@/components/sections/About";
import Education from "@/components/sections/Education";
import Contact from "@/components/sections/Contact";
import ProjectCard from "@/components/ui/ProjectCard";
import { featuredProjects } from "@/constants/projects";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-40 pb-40">
      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <HeroContent />
      </section>

      {/* Engineering DNA / About */}
      <About />

      {/* Technical Ecosystem */}
      <TechnicalEcosystem />

      {/* Education Section */}
      <Education />

      {/* Selected Works */}
      <section id="projects" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-xl">
            <span className="text-label-caps text-primary">PORTFOLIO</span>
            <h2 className="text-headline-lg text-white mt-2">
              Selected <span className="italic font-light text-primary-container">Creations.</span>
            </h2>
          </div>
          <Link href="/projects" className="group flex items-center gap-3 text-label-caps text-zinc-400 hover:text-primary transition-colors">
            EXPLORE ARCHIVE 
            <span className="h-10 w-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-primary group-hover:rotate-45 transition-all">→</span>
          </Link>
        </div>

        <div className="grid gap-16 md:grid-cols-2">
          {featuredProjects.map((project, idx) => (
            <ProjectCard 
              key={project.id} 
              {...project} 
              index={idx}
            />
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <Contact />
    </div>
  );
}
