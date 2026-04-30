"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

gsap.registerPlugin(ScrollTrigger);

export default function HeroContent() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Initial state to prevent flash
      gsap.set([".hero-line", ".hero-description", ".hero-cta"], { opacity: 0, y: 30 });

      tl.to(".hero-line", {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power4.out",
        stagger: 0.2
      })
        .to(".hero-description", {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out"
        }, "-=0.6")
        .to(".hero-cta", {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.15
        }, "-=0.6")
        .from(imageRef.current, {
          x: 100,
          opacity: 0,
          duration: 1.2,
          ease: "power3.out"
        }, "-=1.2");

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
      <div className="max-w-3xl text-center lg:text-left">
        <h1 ref={titleRef} className="text-display-xl mt-4 text-zinc-900 dark:text-white leading-[1.2] min-h-[140px]">
          <span className="hero-line block">
            Hi there{" "}
            <motion.span
              className="inline-block"
              animate={{ rotate: [0, 20, -10, 20, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 1,
                ease: "easeInOut"
              }}
              style={{ originX: 0.7, originY: 0.7 }}
            >
              👋
            </motion.span>
          </span>
          <span className="hero-line block text-display-lg">
            I am <span className="text-primary-container">Toqi.</span>
          </span>
          <span className="hero-line block">
            <span className="italic text-display-md">I am a </span>
            <span className="text-secondary text-display-lg italic font-light inline-block">
              <Typewriter
                options={{
                  strings: [
                    "Full-stack Developer",
                    "Problem-Solver",
                    "AI Enthusiast"
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 50,
                  delay: 80,
                }}
              />
            </span>
          </span>
        </h1>
        <p className="hero-description mt-8 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto lg:mx-0">
          Building production-ready web applications with scalable backend systems, efficient APIs, and modern user-focused interfaces.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4 lg:justify-start">
          <button className="hero-cta rounded-full bg-primary-container px-8 py-4 font-bold text-black transition-all hover:bg-primary hover:shadow-[0_0_20px_rgba(255,128,0,0.5)]">
            VIEW PROJECTS
          </button>
          <div className="flex gap-4">
            <a
              href="https://github.com/AR-Toqi"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-cta h-14 w-14 rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 flex items-center justify-center text-zinc-900 dark:text-white text-2xl transition-all hover:bg-black/10 dark:bg-white/10 hover:border-primary/50 hover:text-primary hover:shadow-[0_0_15px_rgba(255,183,135,0.3)]"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/abdullah-ragib-toqi-b5154a297/"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-cta h-14 w-14 rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 flex items-center justify-center text-zinc-900 dark:text-white text-2xl transition-all hover:bg-black/10 dark:bg-white/10 hover:border-primary/50 hover:text-primary hover:shadow-[0_0_15px_rgba(255,183,135,0.3)]"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://x.com/ar_toqi"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-cta h-14 w-14 rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 flex items-center justify-center text-zinc-900 dark:text-white text-2xl transition-all hover:bg-black/10 dark:bg-white/10 hover:border-primary/50 hover:text-primary hover:shadow-[0_0_15px_rgba(255,183,135,0.3)]"
              aria-label="X (Twitter)"
            >
              <FaXTwitter />
            </a>
          </div>
        </div>
      </div>

      {/* Profile Image with inspired layout */}
      <div ref={imageRef} className="relative group">
        <div className="relative h-[450px] w-[320px] overflow-hidden rounded-3xl md:h-[550px] md:w-[420px] transform transition-transform group-hover:rotate-2">
          <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10"></div>
          <Image
            src="/images/Hero-image.jpg"
            alt="Toqi Hero"
            fill
            sizes="(max-width: 768px) 100vw, 420px"
            priority
            className="object-cover transition-all duration-700 group-hover:scale-110"
          />
          {/* Inspired Stats Badge */}
          <div className="absolute top-6 right-6 glass-bright rounded-2xl p-4 text-right backdrop-blur-3xl z-20">
            <span className="text-4xl font-black text-zinc-900 dark:text-white">02+</span>
            <p className="text-label-caps text-[10px] text-primary">Projects</p>
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent z-20">
            <div className="flex justify-between items-end">
              <div>
                <p className="text-label-caps text-xs text-zinc-600 dark:text-zinc-400">AVAILABLE AT</p>
                <p className="text-zinc-900 dark:text-white font-bold">Freelance / Remote</p>
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
