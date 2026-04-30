import React from "react";
import Image from "next/image";
import Link from "next/link";

import { LuArrowUpRight } from "react-icons/lu";

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  index: number;
}

export default function ProjectCard({ id, title, description, image, tags, index }: ProjectCardProps) {
  return (
    <Link 
      href={`/projects/${id}`}
      className="project-card group relative flex flex-col gap-6"
    >
      <div className="relative aspect-[16/11] w-full overflow-hidden rounded-[2rem] bg-zinc-900 shadow-2xl transition-all group-hover:shadow-primary/10">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover opacity-60 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100"
        />
        <div className="absolute top-6 left-6 flex flex-wrap gap-2">
          {tags.map(tag => (
            <span key={tag} className="glass px-3 py-1 text-[9px] text-white rounded-full font-bold tracking-widest uppercase">{tag}</span>
          ))}
        </div>

        {/* View Details Overlay */}
        <div className="absolute bottom-6 right-6 h-12 w-12 rounded-full glass flex items-center justify-center text-white opacity-0 translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
          <LuArrowUpRight className="text-xl group-hover:rotate-45 transition-transform duration-500" />
        </div>
      </div>
      
      <div className="px-2">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-3">
            <div className="h-px w-6 bg-primary/50"></div>
            <span className="text-label-caps text-[10px] text-primary">0{index + 1}</span>
          </div>
          <span className="text-[10px] text-zinc-500 font-bold tracking-tighter uppercase group-hover:text-primary transition-colors">VIEW PROJECT</span>
        </div>
        <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors font-plus-jakarta leading-tight">
          {title}
        </h3>
        <p className="mt-3 text-zinc-400 text-sm leading-relaxed line-clamp-2">
          {description}
        </p>
      </div>
    </Link>
  );
}
