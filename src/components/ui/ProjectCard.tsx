import React from "react";
import Image from "next/image";
import Link from "next/link";

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
      className={`group relative flex flex-col gap-8 ${index % 2 !== 0 ? 'md:mt-24' : ''}`}
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[2rem] bg-zinc-900 shadow-2xl transition-all group-hover:shadow-primary/10">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover opacity-60 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100"
        />
        <div className="absolute top-8 left-8 flex gap-3">
          {tags.map(tag => (
            <span key={tag} className="glass px-4 py-1 text-[10px] text-white rounded-full font-bold tracking-widest">{tag}</span>
          ))}
        </div>
      </div>
      
      <div className="px-2">
        <div className="flex items-center gap-4 mb-2">
          <div className="h-px w-8 bg-primary"></div>
          <span className="text-label-caps text-xs text-primary">0{index + 1}</span>
        </div>
        <h3 className="text-3xl font-bold text-white group-hover:text-primary transition-colors font-plus-jakarta">
          {title}
        </h3>
        <p className="mt-4 text-zinc-400 leading-relaxed max-w-md">
          {description}
        </p>
      </div>
    </Link>
  );
}
