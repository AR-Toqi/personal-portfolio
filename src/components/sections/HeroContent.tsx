"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HeroContent() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance Animation
      const tl = gsap.timeline();

      tl.from(titleRef.current, {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
        stagger: 0.2
      })
        .from(".hero-description", {
          opacity: 0,
          y: 20,
          duration: 0.8
        }, "-=0.5")
        .from(".hero-cta", {
          scale: 0.8,
          opacity: 0,
          duration: 0.5,
          stagger: 0.1
        }, "-=0.3")
        .from(imageRef.current, {
          x: 100,
          opacity: 0,
          duration: 1.2,
          ease: "power3.out"
        }, "-=1");

      // Floating Effect for Image
      gsap.to(imageRef.current, {
        y: 20,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="flex flex-col items-center gap-12 lg:flex-row lg:justify-between">
      <div className="max-w-2xl text-center lg:text-left">
        <span className="text-label-caps text-primary inline-block">AVAILABLE FOR NEW PROJECTS</span>
        <h1 ref={titleRef} className="text-display-2xl mt-4 text-white leading-[1]">
          Full Stack <br />
          <span className="text-primary-container italic font-light">Architect.</span>
        </h1>
        <p className="hero-description mt-8 text-lg leading-relaxed text-zinc-400">
          I don&apos;t just build websites; I engineer digital ecosystems.
          Specializing in scalable backend systems and high-performance frontend interfaces that push the boundaries of the web.
        </p>
        <div className="hero-cta mt-10 flex flex-wrap justify-center gap-4 lg:justify-start">
          <button className="rounded-full bg-primary-container px-8 py-4 font-bold text-black transition-all hover:bg-primary hover:shadow-[0_0_20px_rgba(255,128,0,0.5)]">
            VIEW PROJECTS
          </button>
          <Link 
            href="#contact"
            className="rounded-full border border-white/10 bg-white/5 px-8 py-4 font-bold text-white transition-all hover:bg-white/10 flex items-center justify-center cursor-pointer"
          >
            GET IN TOUCH
          </Link>
        </div>
      </div>

      {/* Profile Image with inspired layout */}
      <div ref={imageRef} className="relative group">
        <div className="relative h-[450px] w-[320px] overflow-hidden rounded-3xl md:h-[550px] md:w-[420px] transform transition-transform group-hover:rotate-2">
          <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10"></div>
          <Image
            src="/images/hero_portrait.png"
            alt="Full Stack Architect"
            fill
            className="object-cover transition-all duration-700 group-hover:scale-110"
          />
          {/* Inspired Stats Badge */}
          <div className="absolute top-6 right-6 glass-bright rounded-2xl p-4 text-right backdrop-blur-3xl z-20">
            <span className="text-4xl font-black text-white">08+</span>
            <p className="text-label-caps text-[10px] text-primary">YEARS EXP</p>
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent z-20">
            <div className="flex justify-between items-end">
              <div>
                <p className="text-label-caps text-xs text-zinc-400">CURRENTLY AT</p>
                <p className="text-white font-bold">Freelance / Remote</p>
              </div>
              <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
            </div>
          </div>
        </div>
        {/* Cinematic Light Leak */}
        <div className="absolute -top-20 -right-20 -z-10 h-[300px] w-[300px] bg-primary/30 blur-[120px] rounded-full animate-pulse"></div>
        <div className="absolute -bottom-20 -left-20 -z-10 h-[300px] w-[300px] bg-secondary/20 blur-[120px] rounded-full"></div>
      </div>
    </div>
  );
}
