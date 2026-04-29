import React from "react";

const educationData = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "Global Institute of Technology",
    duration: "2018 — 2022",
    achievements: ["GPA: 3.9/4.0", "Top 5% of class", "Head of Web Dev Club"],
  },
  {
    degree: "Advanced Full Stack Certification",
    institution: "Tech Academy Pro",
    duration: "2022 — 2023",
    achievements: ["Specialized in Next.js & Distributed Systems", "Capstone Project: Real-time Analytics Engine"],
  },
];

export default function Education() {
  return (
    <section id="education" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mb-20">
        <span className="text-label-caps text-primary">ACADEMIC PATH</span>
        <h2 className="text-headline-lg text-white mt-2">
          Educational <span className="italic font-light text-primary-container">Foundation.</span>
        </h2>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {educationData.map((edu, idx) => (
          <div key={idx} className="glass rounded-[2rem] p-10 hover:border-primary/30 transition-all group">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-8">
              <div>
                <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors font-plus-jakarta">{edu.degree}</h3>
                <p className="text-primary-container font-medium mt-1">{edu.institution}</p>
              </div>
              <span className="glass px-4 py-2 rounded-full text-xs font-bold text-zinc-400 whitespace-nowrap">{edu.duration}</span>
            </div>
            
            <ul className="space-y-3">
              {edu.achievements.map((achievement, i) => (
                <li key={i} className="flex items-center gap-3 text-zinc-400">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary/50"></div>
                  {achievement}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
