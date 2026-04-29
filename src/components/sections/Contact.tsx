import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="relative glass rounded-[3rem] p-10 md:p-20 flex flex-col lg:flex-row gap-20 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute -bottom-20 -left-20 h-96 w-96 bg-primary/10 blur-[120px] -z-10"></div>
        <div className="absolute -top-20 -right-20 h-96 w-96 bg-secondary/10 blur-[120px] -z-10"></div>
        
        <div className="flex-1">
          <span className="text-label-caps text-primary">CONTACT</span>
          <h2 className="text-headline-lg text-white mt-4">
            Ready to start a <br />
            <span className="text-primary-container italic font-light">New Chapter?</span>
          </h2>
          <p className="mt-8 text-zinc-400 text-lg leading-relaxed">
            I&apos;m currently open to new collaborations and architectural challenges. 
            Let&apos;s build something that makes a difference.
          </p>
          
          <div className="mt-16 space-y-10">
            <div className="group flex items-center gap-6 cursor-pointer">
              <div className="h-16 w-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl group-hover:bg-primary/10 group-hover:border-primary/30 transition-all">📧</div>
              <div>
                <p className="text-label-caps text-[10px] text-zinc-500">DIRECT EMAIL</p>
                <p className="text-white text-lg font-medium group-hover:text-primary transition-colors">hello@fullstackarchitect.com</p>
              </div>
            </div>
            <div className="group flex items-center gap-6 cursor-pointer">
              <div className="h-16 w-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl group-hover:bg-secondary/10 group-hover:border-secondary/30 transition-all">🌍</div>
              <div>
                <p className="text-label-caps text-[10px] text-zinc-500">BASED IN</p>
                <p className="text-white text-lg font-medium">Remote / San Francisco</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex-1 bg-white/5 rounded-[2rem] p-8 md:p-12 border border-white/10 backdrop-blur-md">
          <div className="grid gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-label-caps text-[10px] text-zinc-500 ml-4">YOUR NAME</label>
              <input type="text" className="bg-black/20 border border-white/5 rounded-2xl p-5 text-white focus:outline-none focus:border-primary/50 transition-all" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-label-caps text-[10px] text-zinc-500 ml-4">EMAIL ADDRESS</label>
              <input type="email" className="bg-black/20 border border-white/5 rounded-2xl p-5 text-white focus:outline-none focus:border-primary/50 transition-all" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-label-caps text-[10px] text-zinc-500 ml-4">HOW CAN I HELP?</label>
              <textarea rows={4} className="bg-black/20 border border-white/5 rounded-2xl p-5 text-white focus:outline-none focus:border-primary/50 transition-all resize-none"></textarea>
            </div>
            <button className="mt-4 w-full bg-primary-container hover:bg-primary py-5 rounded-2xl font-black text-black tracking-[0.2em] text-sm transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-4">
              SEND INQUIRY <span className="text-lg">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
