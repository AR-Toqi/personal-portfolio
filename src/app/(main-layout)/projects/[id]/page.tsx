import React from "react";
import Image from "next/image";

interface ProjectPageProps {
  params: {
    id: string;
  };
}

// This is a Server Component by default in App Router
export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params;

  // Placeholder data - in a real app, you'd fetch this based on the ID
  const project = {
    title: `Project ${id}`,
    description: "This is a detailed description of the project. It showcases the challenges faced, technologies used, and the overall outcome.",
    image: "/images/project_placeholder.png",
    techStack: ["Next.js", "Tailwind CSS", "GSAP"],
    features: ["Responsive Design", "Server-Side Rendering", "Interactive UI"],
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="overflow-hidden rounded-2xl bg-zinc-900 shadow-2xl">
        <div className="relative h-[400px] w-full">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="p-8 md:p-12">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            {project.title}
          </h1>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary border border-primary/20"
              >
                {tech}
              </span>
            ))}
          </div>
          <p className="mt-8 text-lg leading-8 text-zinc-400">
            {project.description}
          </p>

          <div className="mt-12">
            <h2 className="text-2xl font-semibold text-white">Key Features</h2>
            <ul className="mt-4 list-inside list-disc space-y-2 text-zinc-400">
              {project.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>

          <div className="mt-12 flex gap-4">
            <button className="rounded-lg bg-primary px-6 py-3 font-semibold text-black transition-colors hover:bg-orange-600">
              Live Demo
            </button>
            <button className="rounded-lg border border-white/10 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/5">
              Source Code
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
