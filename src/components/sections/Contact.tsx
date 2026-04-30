"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (formData: FormData) => {
    setIsSubmitting(true);

    // Add your Web3Forms Access Key here
    formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY!);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setIsSuccess(true);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Error sending message. Please check your connection.");
    } finally {
      setIsSubmitting(false);
      // Reset success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    }
  };

  return (
    <section id="contact" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 w-full">
      <div className="w-full relative glass rounded-[3rem] p-10 md:p-20 flex flex-col lg:flex-row gap-20 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute -bottom-20 -left-20 h-96 w-96 bg-primary/10 blur-[120px] -z-10"></div>
        <div className="absolute -top-20 -right-20 h-96 w-96 bg-secondary/10 blur-[120px] -z-10"></div>

        <div className="flex-1">
          <span className="text-label-caps text-primary">// CONTACT</span>
          <h2 className="text-headline-lg text-zinc-900 dark:text-white mt-4 leading-tight">
            Ready to start a <br />
            <span className="text-primary-container italic font-light">New Chapter?</span>
          </h2>
          <p className="mt-8 text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed max-w-md">
            I&apos;m currently open to new collaborations and scalable software development.
            Let&apos;s build something that makes a difference.
          </p>

          <div className="mt-16 space-y-10">
            <a
              href="mailto:toqiabdullah61990@gmail.com"
              className="group flex items-center gap-6 cursor-pointer w-fit"
            >
              <div className="h-16 w-16 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 flex items-center justify-center text-2xl group-hover:bg-primary/10 group-hover:border-primary/30 transition-all">📧</div>
              <div>
                <p className="text-label-caps text-[10px] text-zinc-500 dark:text-zinc-400">DIRECT EMAIL</p>
                <p className="text-zinc-900 dark:text-white text-lg font-medium group-hover:text-primary transition-colors">toqiabdullah61990@gmail.com</p>
              </div>
            </a>
            <div className="group flex items-center gap-6 cursor-default w-fit">
              <div className="h-16 w-16 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 flex items-center justify-center text-2xl group-hover:bg-secondary/10 group-hover:border-secondary/30 transition-all">🌍</div>
              <div>
                <p className="text-label-caps text-[10px] text-zinc-500 dark:text-zinc-400">BASED IN</p>
                <p className="text-zinc-900 dark:text-white text-lg font-medium">Remote / Bangladesh</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 bg-black/5 dark:bg-white/5 rounded-[2rem] p-8 md:p-12 border border-black/10 dark:border-white/10 backdrop-blur-md relative">
          <AnimatePresence mode="wait">
            {!isSuccess ? (
              <motion.form
                key="form"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, y: -20 }}
                action={handleSubmit}
                className="grid gap-6"
              >
                <div className="flex flex-col gap-2">
                  <label className="text-label-caps text-[10px] text-zinc-500 dark:text-zinc-400 ml-4">YOUR NAME</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Enter your name"
                    className="bg-black/5 dark:bg-black/20 border border-black/5 dark:border-white/5 rounded-2xl p-5 text-zinc-900 dark:text-white placeholder:text-zinc-700 focus:outline-none focus:border-primary/50 transition-all"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-label-caps text-[10px] text-zinc-500 dark:text-zinc-400 ml-4">EMAIL ADDRESS</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Enter your email"
                    className="bg-black/5 dark:bg-black/20 border border-black/5 dark:border-white/5 rounded-2xl p-5 text-zinc-900 dark:text-white placeholder:text-zinc-700 focus:outline-none focus:border-primary/50 transition-all"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-label-caps text-[10px] text-zinc-500 dark:text-zinc-400 ml-4">HOW CAN I HELP?</label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    placeholder="Tell me about your project..."
                    className="bg-black/5 dark:bg-black/20 border border-black/5 dark:border-white/5 rounded-2xl p-5 text-zinc-900 dark:text-white placeholder:text-zinc-700 focus:outline-none focus:border-primary/50 transition-all resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-4 w-full bg-primary-container hover:bg-primary py-5 rounded-2xl font-black text-black tracking-[0.2em] text-sm transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-4 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "SENDING..." : "SEND INQUIRY"}
                  {!isSubmitting && <span className="text-lg">→</span>}
                </button>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center py-20"
              >
                <div className="h-20 w-20 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center text-4xl mb-6">
                  ✅
                </div>
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2 font-plus-jakarta">Message Sent!</h3>
                <p className="text-zinc-600 dark:text-zinc-400">Thank you for reaching out. <br /> I will get back to you shortly.</p>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="mt-8 text-primary font-bold text-sm hover:underline"
                >
                  SEND ANOTHER MESSAGE
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
