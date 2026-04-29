"use client";

import React from "react";
import Link from "next/link";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Education", href: "#education" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <nav className="fixed top-6 left-1/2 z-50 w-[95%] max-w-7xl -translate-x-1/2 glass rounded-full px-6 py-4">
      <div className="flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tight text-white font-plus-jakarta">
          Portfolio
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-label-caps cursor-pointer text-zinc-400 hover:text-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          <div className="h-8 w-8 rounded-full bg-white/5 flex items-center justify-center cursor-pointer hover:bg-white/10 transition-colors">
            <span className="text-sm">🌙</span>
          </div>
          <a 
            href="/resume.pdf" 
            download="AR-Toqi-Resume.pdf"
            className="hidden sm:block text-label-caps bg-primary-container px-4 py-2 rounded-full text-black font-bold text-[10px] hover:bg-primary transition-all cursor-pointer"
          >
            DOWNLOAD RESUME
          </a>
        </div>
      </div>
    </nav>
  );
}
