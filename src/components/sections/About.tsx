"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Container Entrance
      gsap.from(".about-container", {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about-container",
          start: "top 85%",
        }
      });

      // Staggered items inside
      gsap.from(imageRef.current, {
        x: -80,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 80%",
        }
      });

      gsap.from(contentRef.current, {
        x: 80,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 80%",
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={containerRef} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
      <div className="about-container relative glass rounded-[2.5rem] p-10 md:p-20 overflow-hidden">
        {/* Background Accent */}
        <div className="absolute top-0 right-0 h-96 w-96 bg-primary/10 blur-[100px] -z-10"></div>

        <div className="flex flex-col gap-16 lg:flex-row lg:items-center">
          {/* Image Content (Now on Left) */}
          <div ref={imageRef} className="flex-1 relative order-2 lg:order-1">
            <div className="aspect-square relative rounded-3xl overflow-hidden glass border-4 border-white/5 shadow-2xl">
              <Image
                src="/images/about-photo.jpg"
                alt="About Toqi"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                className="object-cover transition-all duration-700 hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-overlay opacity-0 hover:opacity-100 transition-opacity duration-700"></div>
            </div>
            {/* Floating Label */}
            <div className="absolute -bottom-6 -left-6 lg:-right-6 lg:left-auto glass rounded-2xl p-6 shadow-2xl transform rotate-3">
              <p className="text-white font-bold tracking-widest text-sm underline decoration-primary decoration-2 underline-offset-4">EST. 2023</p>
            </div>
          </div>

          {/* Text Content (Now on Right) */}
          <div ref={contentRef} className="flex-1 order-1 lg:order-2">
            <span className="text-label-caps text-secondary">ABOUT ME</span>
            <h2 className="text-headline-lg text-white mt-4 leading-tight">
              From Curiosity to <br />
              <span className="text-primary-container">Craftsmanship.</span>
            </h2>
            <div className="mt-8 space-y-6 text-zinc-400 leading-relaxed text-lg">
              <p>
                I started my journey in web development with a simple curiosity about how websites and digital products actually work.
                What began as experimentation and learning slowly turned into a real passion for building applications that are both functional and meaningful.
                Over the years, I’ve spent countless hours improving my skills, exploring new technologies, and understanding how to create better user experiences.
              </p>
              <p>
                Now, I work as a Full-Stack Developer who enjoys building modern, scalable, and production-ready web applications.
                I love turning ideas into real products, solving problems through code, and continuously learning new things in web development and AI to grow
                as a developer and create impactful digital experiences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
