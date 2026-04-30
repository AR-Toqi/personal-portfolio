"use client";

import React, { useLayoutEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProjectCard from "@/components/ui/ProjectCard";
import { featuredProjects } from "@/constants/projects";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".project-card");
      if (cards.length > 0) {
        const tl = gsap.timeline();

        tl.from(cards, {
          y: 60,
          opacity: 0,
          duration: 1,
          stagger: 0.15,
          ease: "power4.out",
        });

        ScrollTrigger.create({
          trigger: element,
          animation: tl,
          start: "top 80%",
          once: true,
        });
      }
    }, element);

    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" ref={containerRef} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
      <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="max-w-xl">
          <span className="text-label-caps text-primary">// PROJECTS</span>
          <h2 className="text-headline-lg text-zinc-900 dark:text-white mt-2">
            Selected <span className="italic font-light text-primary-container">Creations.</span>
          </h2>
        </div>
      </div>

      <div className="grid gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
        {featuredProjects.map((project, idx) => (
          <ProjectCard
            key={project.id}
            {...project}
            index={idx}
          />
        ))}
      </div>
    </section>
  );
}
