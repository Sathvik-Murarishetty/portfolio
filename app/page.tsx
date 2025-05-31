"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/navbar";
import { HeroContent } from "@/components/hero-content";
import { HeroGlobe } from "@/components/hero-globe";
import { AboutMe } from "@/components/about-me";
import { Experince } from "@/components/experience";
import { ProjectsGrid } from '@/components/projects';
import { ContactForm } from "@/components/contact-form";


export default function Home() {
  return (
    <div className="relative w-full bg-white dark:bg-black">
      {/* Background grid */}
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
        )}
      />

      {/* Radial overlay */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black" />

      {/* Hero section */}
      <section id="home" className="relative z-20 flex items-center justify-center h-screen w-full">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 px-4 max-w-7xl w-full">
          <div className="w-full md:w-[55%]">
            <HeroContent />
          </div>
          <div className="w-full md:w-[45%]">
            <HeroGlobe />
          </div>
        </div>
      </section>

      <section id="about" className="relative z-20 py-16 w-full max-w-7xl mx-auto">
        <AboutMe />
      </section>

      <section id="experience" className="relative z-20 py-16 w-full max-w-7xl mx-auto">
        <Experince />
      </section>

      <section id="projects" className="relative z-20 py-16 w-full max-w-7xl mx-auto">
        <ProjectsGrid />
      </section>

      <section id="contact" className="relative z-20 py-16 w-full max-w-7xl mx-auto">
        <ContactForm />
      </section>

      <div className="fixed bottom-0 w-full z-50 flex justify-center pb-8">
        <Navbar />
      </div>
    </div>
  );
}