"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const skillGroups = [
  {
    title: "Backend Core",
    icon: "⚙️",
    skills: ["Node.js", "Express", "Prisma", "PostgreSQL", "Redis"],
    className: "md:col-span-2 md:row-span-1",
  },
  {
    title: "Frontend Mastery",
    icon: "💎",
    skills: ["Next.js", "React", "Tailwind", "GSAP", "Three.js"],
    className: "md:col-span-1 md:row-span-2",
  },
  {
    title: "Cloud & DevOps",
    icon: "☁️",
    skills: ["Docker", "AWS", "CI/CD", "Nginx"],
    className: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Technical Strategy",
    icon: "📐",
    skills: ["System Design", "API First", "Microservices"],
    className: "md:col-span-1 md:row-span-1",
  },
];

export default function TechnicalEcosystem() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".skill-card", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out"
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
      <div className="mb-16 inline-block">
        <span className="text-label-caps text-primary">MY STACK</span>
        <h2 className="text-headline-lg text-white mt-2">
          Technical <span className="text-primary-container italic font-light">DNA.</span>
        </h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-min">
        {skillGroups.map((group) => (
          <div 
            key={group.title} 
            className={`skill-card glass rounded-3xl p-8 text-left transition-all hover:border-primary/40 hover:-translate-y-2 group ${group.className}`}
          >
            <div className="flex justify-between items-start mb-8">
               <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center text-2xl group-hover:bg-primary/20 transition-colors">
                 {group.icon}
               </div>
               <div className="h-1 w-12 bg-white/10 rounded-full mt-6"></div>
            </div>
            
            <h3 className="text-xl font-bold text-white mb-6 font-plus-jakarta">{group.title}</h3>
            
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-xl bg-white/5 px-4 py-2 text-xs font-medium text-zinc-400 border border-white/5 hover:border-primary/20 hover:text-white transition-all cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
