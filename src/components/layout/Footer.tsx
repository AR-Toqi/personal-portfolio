import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-40 border-t border-white/5 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="text-xl font-bold text-white font-plus-jakarta tracking-tighter">Portfolio</span>
            <p className="text-xs text-zinc-500 tracking-[0.2em] font-space-grotesk">EST. 2018 — BUILT WITH NEXT.JS</p>
          </div>

          <div className="flex gap-8">
            <Link href="https://github.com" className="text-label-caps text-zinc-400 hover:text-primary transition-colors">GITHUB</Link>
            <Link href="https://linkedin.com" className="text-label-caps text-zinc-400 hover:text-primary transition-colors">LINKEDIN</Link>
            <Link href="https://twitter.com" className="text-label-caps text-zinc-400 hover:text-primary transition-colors">TWITTER</Link>
          </div>

          <div className="text-right">
            <p className="text-zinc-500 text-sm">
              © {new Date().getFullYear()} — <span className="text-white">Full Stack Architect</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
