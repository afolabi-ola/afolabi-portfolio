"use client"

import type React from "react"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Linkedin, Github, MessageCircle } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setSubmitted(true)
    setFormData({ name: "", email: "", message: "" })
    setIsLoading(false)

    // Reset success message after 3 seconds
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="contact" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Let's Connect</h2>
          <p className="text-lg text-muted-foreground">
            Have a project in mind or just want to chat? I'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 relative z-10">
          {/* Contact Cards */}
          <Card className="p-6 border-border/50 bg-card/50 backdrop-blur-sm text-center hover:border-primary/50 transition-all">
            <div className="inline-block p-3 bg-primary/10 rounded-lg mb-4">
              <Mail className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Email</h3>
            <p className="text-muted-foreground text-sm">contact@abdulakeem.dev</p>
            <a
              href="mailto:contact@abdulakeem.dev"
              className="text-primary hover:text-accent text-sm font-medium mt-3 inline-block"
            >
              Send Email
            </a>
          </Card>

          <Card className="p-6 border-border/50 bg-card/50 backdrop-blur-sm text-center hover:border-primary/50 transition-all">
            <div className="inline-block p-3 bg-primary/10 rounded-lg mb-4">
              <Linkedin className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">LinkedIn</h3>
            <p className="text-muted-foreground text-sm">Connect on LinkedIn</p>
            <a
              href="https://linkedin.com/in/abdulakeem"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-accent text-sm font-medium mt-3 inline-block"
            >
              Visit Profile
            </a>
          </Card>

          <Card className="p-6 border-border/50 bg-card/50 backdrop-blur-sm text-center hover:border-primary/50 transition-all">
            <div className="inline-block p-3 bg-primary/10 rounded-lg mb-4">
              <Github className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">GitHub</h3>
            <p className="text-muted-foreground text-sm">Check my repositories</p>
            <a
              href="https://github.com/abdulakeem"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-accent text-sm font-medium mt-3 inline-block"
            >
              View GitHub
            </a>
          </Card>
        </div>

        {/* Contact Form */}
        <Card className="p-8 border-border/50 bg-card/50 backdrop-blur-sm relative z-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="w-full px-4 py-2 rounded-lg bg-secondary/20 border border-border/50 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                  className="w-full px-4 py-2 rounded-lg bg-secondary/20 border border-border/50 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Tell me about your project or idea..."
                rows={6}
                className="w-full px-4 py-2 rounded-lg bg-secondary/20 border border-border/50 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all resize-none"
              />
            </div>

            {submitted && (
              <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
                <p className="text-green-300 text-sm">Thanks for your message! I'll get back to you soon.</p>
              </div>
            )}

            <Button size="lg" disabled={isLoading} className="w-full gap-2">
              <MessageCircle className="w-4 h-4" />
              {isLoading ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </Card>

        {/* Footer CTA */}
        <div className="mt-12 text-center text-muted-foreground text-sm relative z-10">
          <p>Let's build something amazing together.</p>
        </div>
      </div>
    </section>
  )
}
