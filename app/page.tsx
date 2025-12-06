"use client"

import { AnimatedBackground } from "@/components/animated-background"
import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { Projects } from "@/components/projects"
import { Skills } from "@/components/skills"
import { About } from "@/components/about"
import { Contact } from "@/components/contact"
import { AiAssistant } from "@/components/ai-assistant"

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <AnimatedBackground />
      <Navigation />
      <Hero />
      <Projects />
      <Skills />
      <About />
      <Contact />
      <AiAssistant />
    </div>
  )
}
