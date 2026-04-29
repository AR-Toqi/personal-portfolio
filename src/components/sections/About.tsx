import React from "react";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="relative glass rounded-[2.5rem] p-10 md:p-20 overflow-hidden">
        {/* Background Accent */}
        <div className="absolute top-0 right-0 h-96 w-96 bg-primary/10 blur-[100px] -z-10"></div>
        
        <div className="flex flex-col gap-16 lg:flex-row lg:items-center">
          <div className="flex-1">
            <span className="text-label-caps text-secondary">ENGINEERING DNA</span>
            <h2 className="text-headline-lg text-white mt-4 leading-tight">
              Where <span className="italic font-light">Stability</span> <br />
              Meets <span className="text-primary-container">Innovation.</span>
            </h2>
            <p className="mt-8 text-zinc-400 leading-relaxed text-lg">
              My approach is grounded in the belief that software should be as resilient as it is beautiful. 
              I bridge the gap between complex backend logic and pixel-perfect user experiences, 
              ensuring that every architectural decision drives measurable value.
            </p>
            
            <div className="mt-12 grid grid-cols-2 gap-8">
              <div className="p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-primary/30 transition-colors group">
                <span className="text-4xl font-black text-white group-hover:text-primary transition-colors">40+</span>
                <p className="text-label-caps text-[10px] text-zinc-500 mt-2">DEPLOYMENTS</p>
              </div>
              <div className="p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-primary/30 transition-colors group">
                <span className="text-4xl font-black text-white group-hover:text-primary transition-colors">12+</span>
                <p className="text-label-caps text-[10px] text-zinc-500 mt-2">PARTNERSHIPS</p>
              </div>
            </div>
          </div>
          
          <div className="flex-1 relative">
            <div className="aspect-square relative rounded-3xl overflow-hidden glass border-4 border-white/5 shadow-2xl">
              <Image 
                src="/images/engineering_dna.png" 
                alt="Engineering Philosophy" 
                fill 
                className="object-cover grayscale mix-blend-screen opacity-40 hover:grayscale-0 transition-all duration-1000" 
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-20 w-20 rounded-full border border-primary/50 flex items-center justify-center animate-ping"></div>
                <div className="absolute h-24 w-24 rounded-full border border-white/10"></div>
              </div>
            </div>
            {/* Floating Label */}
            <div className="absolute -bottom-6 -right-6 glass rounded-2xl p-6 shadow-2xl transform rotate-3">
              <p className="text-white font-bold tracking-widest text-sm underline decoration-primary decoration-2 underline-offset-4">EST. 2018</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
