import React from "react";
import HeroContent from "@/components/sections/HeroContent";
import TechnicalEcosystem from "@/components/sections/TechnicalEcosystem";
import About from "@/components/sections/About";
import Education from "@/components/sections/Education";
import Contact from "@/components/sections/Contact";
import Projects from "@/components/sections/Projects";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-12 pb-24">
      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <HeroContent />
      </section>

      {/* Engineering DNA / About */}
      <About />

      {/* Technical Ecosystem */}
      <TechnicalEcosystem />

      {/* Education Section */}
      <Education />

      {/* Selected Works */}
      <Projects />

      {/* Contact Section */}
      <Contact />
    </div>
  );
}
