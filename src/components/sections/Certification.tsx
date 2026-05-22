"use client";

import React, { useRef } from "react";
import { LuAward } from "react-icons/lu";
import { motion } from "framer-motion";

const certificationData = [
  {
    title: "The Complete JavaScript Course 2025 — From Zero to Expert",
    institution: "Udemy — Jonas Schmedtmann",
    status: "Certificate",
    details: ["Comprehensive JavaScript curriculum covering ES6+, asynchronous programming, DOM manipulation, and modern JavaScript frameworks."],
    certificateUrl: "https://www.udemy.com/certificate/UC-439c7fa6-1d4b-44d4-8605-a4802f8fe58b/",
  },
  {
    title: "Next Level Web Development",
    institution: "Programming Hero",
    status: "In Progress",
    details: ["Advanced web development program focusing on full-stack technologies, real-world projects, and industry best practices."],
    certificateUrl: null,
  },
];

export default function Certification() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  return (
    <section id="certification" ref={containerRef} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
      <div className="mb-20 text-center lg:text-left">
        <span className="text-label-caps text-primary">{ "// CERTIFICATIONS" }</span>
        <h2 className="text-headline-lg text-zinc-900 dark:text-white mt-2">
          Professional <span className="italic font-light text-primary-container">Credentials.</span>
        </h2>
      </div>

      <div className="timeline-container relative">
        {/* Vertical Line */}
        <div ref={lineRef} className="timeline-line absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-primary/50 via-primary-container/30 to-transparent -translate-x-1/2 hidden md:block"></div>

        <div className="space-y-12 md:space-y-0">
          {certificationData.map((cert, idx) => (
            <div key={idx} className={`relative flex flex-col md:flex-row items-center gap-8 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              {/* Timeline Dot */}
              <div className="timeline-dot absolute left-4 md:left-1/2 h-4 w-4 rounded-full bg-primary border-4 border-black z-10 -translate-x-1/2 shadow-[0_0_15px_rgba(255,128,0,0.5)] hidden md:block"></div>

              {/* Content Card */}
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.2, ease: "easeOut" }}
                className={`certification-card w-full md:w-[45%] glass rounded-4xl p-8 md:p-10 hover:border-primary/30 transition-all group relative`}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary text-xl">
                    <LuAward />
                  </div>
                  <span className="text-sm font-bold text-primary tracking-wider uppercase">{cert.status}</span>
                </div>
                
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-white group-hover:text-primary transition-colors font-plus-jakarta leading-tight">
                  {cert.title}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 font-medium mt-2 mb-6">{cert.institution}</p>
                
                <div className="space-y-3">
                  {cert.details.map((detail, i) => (
                    <div key={i} className="flex items-start gap-3 text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed">
                      <div className="h-1 w-1 rounded-full bg-primary/50 mt-2"></div>
                      {detail}
                    </div>
                  ))}
                </div>

                {cert.certificateUrl && (
                  <a
                    href={cert.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 rounded-xl bg-primary/10 px-4 py-2 text-sm font-bold text-primary hover:bg-primary/20 transition-colors"
                  >
                    <span>📜</span> View Certificate
                  </a>
                )}

                {/* Decorative Accent */}
                <div className="absolute top-0 right-0 h-32 w-32 bg-primary/5 blur-3xl -z-10 group-hover:bg-primary/10 transition-colors"></div>
              </motion.div>

              {/* Empty Space for Staggered Look */}
              <div className="hidden md:block w-[45%]"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
