"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Certification", href: "#certification" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

import { LuMenu, LuX } from "react-icons/lu";

export default function Navbar() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Determine current effective theme (avoid hydration mismatch by defaulting to dark initially)
  const currentTheme = theme === "system" ? systemTheme : theme;
  const isDark = !mounted || currentTheme !== "light";

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      setIsMobileMenuOpen(false);
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <nav className="fixed top-6 left-1/2 z-50 w-[95%] max-w-7xl -translate-x-1/2 glass rounded-full px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center" onClick={() => setIsMobileMenuOpen(false)}>
            {mounted && (
              <Image 
                src={isDark ? "/images/TOQI. white.png" : "/images/TOQI. black.png"} 
                alt="TOQI Logo" 
                width={80} 
                height={30} 
                className="object-contain h-8 w-auto"
                priority
              />
            )}
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="text-label-caps cursor-pointer text-zinc-600 dark:text-zinc-400 hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <button 
              onClick={toggleTheme}
              className="h-8 w-8 rounded-full bg-black/10 dark:bg-white/5 flex items-center justify-center cursor-pointer hover:bg-black/20 dark:hover:bg-white/10 transition-colors"
              aria-label="Toggle Theme"
            >
              <span className="text-sm">{isDark ? "☀️" : "🌙"}</span>
            </button>
            <a 
              href="/resume.pdf" 
              download="AR-Toqi-Resume.pdf"
              className="hidden sm:block text-label-caps bg-primary-container px-4 py-2 rounded-full text-black font-bold text-[10px] hover:bg-primary transition-all cursor-pointer"
            >
              DOWNLOAD RESUME
            </a>
            <button
              className="md:hidden text-zinc-900 dark:text-white text-2xl"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Mobile Menu"
            >
              {isMobileMenuOpen ? <LuX /> : <LuMenu />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 glass-bright flex flex-col items-center justify-center space-y-8 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleScroll(e, link.href)}
              className="text-2xl font-bold text-zinc-900 dark:text-white font-plus-jakarta tracking-tight hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="/resume.pdf" 
            download="AR-Toqi-Resume.pdf"
            className="mt-8 text-label-caps bg-primary-container px-8 py-4 rounded-full text-black font-bold text-sm hover:bg-primary transition-all cursor-pointer shadow-[0_0_20px_rgba(255,128,0,0.2)]"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            DOWNLOAD RESUME
          </a>
        </div>
      )}
    </>
  );
}
