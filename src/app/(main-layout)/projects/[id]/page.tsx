import React from "react";
import Image from "next/image";
import Link from "next/link";
import { featuredProjects } from "@/constants/projects";
import { notFound } from "next/navigation";

import { ProjectPageProps } from "@/types";

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = featuredProjects.find(p => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-32 sm:px-6 lg:px-8">
      <Link href="/#projects" className="inline-flex items-center gap-2 mb-8 text-zinc-600 dark:text-zinc-400 hover:text-primary transition-colors text-label-caps">
        <span>←</span> BACK TO PORTFOLIO
      </Link>
      
      <div className="overflow-hidden glass rounded-[3rem]">
        <div className="relative h-[400px] md:h-[500px] w-full border-b border-black/5 dark:border-white/5">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
        </div>
        
        <div className="p-8 md:p-16">
          <h1 className="text-display-sm md:text-display-md text-zinc-900 dark:text-white font-plus-jakarta leading-tight">
            {project.title}
          </h1>
          
          <div className="mt-6 flex flex-wrap gap-3">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-primary/10 px-4 py-2 text-xs tracking-widest uppercase font-bold text-primary border border-primary/20"
              >
                {tag}
              </span>
            ))}
          </div>

          {project.techStack && project.techStack.length > 0 && (
            <div className="mt-8 border-t border-black/5 dark:border-white/5 pt-8">
              <h3 className="text-sm font-bold text-zinc-900 dark:text-white uppercase tracking-widest mb-4">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map(tech => (
                  <span key={tech} className="px-3 py-1.5 text-xs font-bold tracking-wider uppercase rounded-md bg-black/5 dark:bg-white/5 text-zinc-600 dark:text-zinc-400 border border-black/5 dark:border-white/5">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
          
          <div className="mt-12 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400 max-w-4xl space-y-6">
            <p>{project.description}</p>
          </div>

          {(project.challenges || project.futureImplementations) && (
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-black/10 dark:border-white/10 pt-16">
              {project.challenges && project.challenges.length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6 flex items-center gap-2">
                    <span className="text-primary text-xl">⚡</span> Challenges Faced
                  </h2>
                  <ul className="space-y-4">
                    {project.challenges.map((challenge, idx) => (
                      <li key={idx} className="flex gap-3 text-zinc-600 dark:text-zinc-400">
                        <span className="text-primary mt-1 flex-shrink-0">✦</span>
                        <span>{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {project.futureImplementations && project.futureImplementations.length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6 flex items-center gap-2">
                    <span className="text-primary text-xl">🚀</span> Future Implementations
                  </h2>
                  <ul className="space-y-4">
                    {project.futureImplementations.map((future, idx) => (
                      <li key={idx} className="flex gap-3 text-zinc-600 dark:text-zinc-400">
                        <span className="text-primary mt-1 flex-shrink-0">✦</span>
                        <span>{future}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          <div className="mt-16 pt-16 border-t border-black/10 dark:border-white/10 flex flex-wrap gap-6">
            {project.liveDemoUrl && (
              <a 
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl bg-primary-container px-8 py-4 font-bold text-black transition-all hover:bg-primary shadow-[0_0_20px_rgba(255,128,0,0.2)] hover:shadow-[0_0_20px_rgba(255,128,0,0.5)] flex items-center gap-2"
              >
                LIVE DEMO <span className="text-xl leading-none">↗</span>
              </a>
            )}
            
            {project.sourceCodeUrl && (
              <a 
                href={project.sourceCodeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 px-8 py-4 font-bold text-zinc-900 dark:text-white transition-all hover:bg-black/10 dark:hover:bg-white/10 flex items-center gap-2"
              >
                SOURCE CODE <span className="text-xl leading-none">↗</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
