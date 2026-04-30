"use client";

import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiTailwindcss, SiShadcnui, SiNodedotjs, SiExpress, SiPrisma, SiPostgresql, SiMongodb, SiGit, SiGithub, SiDocker, SiFigma, SiPostman } from "react-icons/si";
import { FaLock } from "react-icons/fa6";

gsap.registerPlugin(ScrollTrigger);

const techStack = [
  {
    category: "FRONTEND",
    skills: [
      { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> },
      { name: "React", icon: <SiReact className="text-[#61DAFB]" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
      { name: "Shadcn UI", icon: <SiShadcnui className="text-white" /> },
    ],
  },
  {
    category: "BACKEND",
    skills: [
      { name: "Node.js", icon: <SiNodedotjs className="text-[#339933]" /> },
      { name: "Express.js", icon: <SiExpress className="text-white" /> },
      { name: "Prisma", icon: <SiPrisma className="text-white" /> },
      { name: "Better-Auth", icon: <FaLock className="text-[#FF8000]" /> },
    ],
  },
  {
    category: "DATABASE",
    skills: [
      { name: "PostgreSQL", icon: <SiPostgresql className="text-[#4169E1]" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
    ],
  },
  {
    category: "TOOLS & DESIGN",
    skills: [
      { name: "Git", icon: <SiGit className="text-[#F05032]" /> },
      { name: "GitHub", icon: <SiGithub className="text-white" /> },
      { name: "Docker", icon: <SiDocker className="text-[#2496ED]" /> },
      { name: "Figma", icon: <SiFigma className="text-[#F24E1E]" /> },
      { name: "Postman", icon: <SiPostman className="text-[#FF6C37]" /> },
    ],
  },
];

export default function TechnicalEcosystem() {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const element = sectionRef.current;
    if (!element) return;

    const ctx = gsap.context(() => {
      // Row-by-Row Timeline (Label then Icons)
      gsap.utils.toArray<HTMLElement>(".tech-row").forEach((row) => {
        
        const label = row.querySelector(".tech-category-label");
        const icons = row.querySelectorAll(".tech-icon-box");
        
        const tl = gsap.timeline();

        tl.fromTo(label, 
          { x: -50, opacity: 0 }, 
          { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
        )
        .fromTo(icons, 
          { scale: 0.8, opacity: 0, y: 20 }, 
          { 
            scale: 1, 
            opacity: 1, 
            y: 0, 
            duration: 0.5, 
            stagger: 0.1, 
            ease: "back.out(1.2)" 
          }, 
          "-=0.6" // Start icons while label is still animating
        );

        ScrollTrigger.create({
          trigger: row,
          animation: tl,
          start: "top 85%",
          once: true,
        });

      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
      <div className="mb-20">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-primary text-xl">✦</span>
          <span className="text-label-caps text-primary">MY STACK</span>
        </div>
      </div>
      
      <div className="space-y-20">
        {techStack.map((group) => (
          <div key={group.category} className="tech-row flex flex-col lg:flex-row gap-8 lg:gap-24 items-start">
            {/* Category Label */}
            <div className="lg:w-1/4">
              <h3 className="tech-category-label text-5xl md:text-6xl font-black text-white/10 tracking-tighter hover:text-white/20 transition-colors cursor-default">
                {group.category}
              </h3>
            </div>
            
            {/* Skills Grid */}
            <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {group.skills.map((skill) => (
                <div 
                  key={skill.name}
                  className="tech-icon-box group flex items-center gap-3 p-3 rounded-2xl bg-white/5 border border-white/5 hover:border-primary/30 transition-all hover:-translate-y-1 hover:bg-white/[0.08]"
                >
                  <div className="text-3xl filter transition-all group-hover:scale-110">
                    {skill.icon}
                  </div>
                  <span className="text-sm font-medium text-zinc-400 group-hover:text-white transition-colors">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
