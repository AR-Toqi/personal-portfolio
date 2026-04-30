"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";

import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = theme === "system" ? systemTheme : theme;
  const isDark = !mounted || currentTheme !== "light";

  return (
    <footer className="mt-40 border-t border-black/5 dark:border-white/5 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="flex flex-col items-center md:items-start gap-2">
            <Link href="/" className="flex items-center h-8">
              {mounted && (
                <Image
                  src={isDark ? "/images/TOQI. white.png" : "/images/TOQI. black.png"}
                  alt="TOQI Logo"
                  width={80}
                  height={30}
                  className="object-contain h-8 w-auto"
                />
              )}
            </Link>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 tracking-[0.2em] font-space-grotesk mt-2">EST. 2026 — BUILT WITH NEXT.JS</p>
          </div>

          <div className="flex gap-6">
            <Link href="https://github.com/AR-Toqi" aria-label="GitHub" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 flex items-center justify-center text-zinc-600 dark:text-zinc-400 text-lg transition-all hover:bg-black/10 dark:hover:bg-white/10 hover:border-primary/50 hover:text-primary">
              <FaGithub />
            </Link>
            <Link href="https://www.linkedin.com/in/abdullah-ragib-toqi-b5154a297/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 flex items-center justify-center text-zinc-600 dark:text-zinc-400 text-lg transition-all hover:bg-black/10 dark:hover:bg-white/10 hover:border-primary/50 hover:text-primary">
              <FaLinkedin />
            </Link>
            <Link href="https://x.com/ar_toqi" aria-label="Twitter" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 flex items-center justify-center text-zinc-600 dark:text-zinc-400 text-lg transition-all hover:bg-black/10 dark:hover:bg-white/10 hover:border-primary/50 hover:text-primary">
              <FaXTwitter />
            </Link>
          </div>

          <div className="text-right">
            <p className="text-zinc-500 dark:text-zinc-400 text-sm">
              © {new Date().getFullYear()} — <span className="text-zinc-900 dark:text-white">Abdullah Ragib Toqi</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
