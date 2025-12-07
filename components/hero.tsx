"use client";

import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-5xl sm:text-7xl font-bold text-balance mb-4">
            Abdulakeem Habeeb
            <span className="block text-primary">(BOL)</span>
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground text-balance mb-6">
            Full Stack Engineer & Aspiring Construction Engineer
          </p>
          <p className="text-lg text-muted-foreground/80 text-balance max-w-2xl mx-auto">
            Turning code into impact, one project at a time. Building
            exceptional web experiences that merge development expertise with
            construction technology innovation.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button size="lg" className="gap-2">
            View My Work
            <ArrowRight className="w-4 h-4" />
          </Button>
          <Button size="lg" variant="outline">
            Get In Touch
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-4">
          <a
            href="https://github.com/BOL-DEV"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/habeeb-abdulakeem-b75253374/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="mailto:abdulakeemhabeeb@gmail.com"
            className="p-3 rounded-full border border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-primary"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
