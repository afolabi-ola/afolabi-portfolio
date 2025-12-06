"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { MessageCircle, Send, X, Minimize2, Maximize2 } from "lucide-react"

interface Message {
  id: string
  content: string
  role: "user" | "assistant"
  timestamp: Date
}

export function AiAssistant() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: "Hi! I'm Abdulakeem's AI Assistant. Ask me anything about his projects, skills, or experience!",
      role: "assistant",
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const sampleResponses: Record<string, string> = {
    projects:
      "I've worked on 50+ projects including SmartHome Dashboard, AI-powered Portfolio Assistant, Construction Planner Tool, and Interactive 3D Roof Plan Viewer. Each project leverages modern tech stacks like Next.js, React, TypeScript, and Three.js.",
    skills:
      "My expertise includes: Frontend (Next.js, React, TypeScript, Tailwind), Backend (Node.js, Express.js), 3D Visualization (React-Three-Fiber, Three.js, D3.js), and Design Tools (Figma, shadcn/ui). I also have experience with CAD operations and building visualization.",
    experience:
      "I have 5+ years of experience in web development and software engineering. My unique background combines software development with construction studies, positioning me at the intersection of tech and building innovation.",
    construction:
      "My passion lies in construction technology. I'm building smart solutions for construction planning, visualization, and management. My projects include CAD integration, 3D roof plan viewers, and construction project planning tools.",
    background:
      "I'm a Full Stack Engineer with construction studies background. I'm on a mission to influence both tech and construction communities with innovative, smart solutions that solve real problems.",
    contact:
      "You can reach me via email at contact@abdulakeem.dev, connect on LinkedIn, or check out my GitHub repositories. I'm always open to collaborating on exciting projects!",
  }

  const getResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase()

    if (lowerMessage.includes("project") || lowerMessage.includes("work") || lowerMessage.includes("portfolio")) {
      return sampleResponses.projects
    } else if (lowerMessage.includes("skill") || lowerMessage.includes("expertise")) {
      return sampleResponses.skills
    } else if (
      lowerMessage.includes("experience") ||
      lowerMessage.includes("background") ||
      lowerMessage.includes("how long")
    ) {
      return sampleResponses.experience
    } else if (
      lowerMessage.includes("construction") ||
      lowerMessage.includes("building") ||
      lowerMessage.includes("architecture")
    ) {
      return sampleResponses.construction
    } else if (lowerMessage.includes("about") || lowerMessage.includes("who")) {
      return sampleResponses.background
    } else if (lowerMessage.includes("contact") || lowerMessage.includes("reach")) {
      return sampleResponses.contact
    } else {
      return "That's an interesting question! Feel free to ask me about Abdulakeem's projects, skills, experience, or construction tech initiatives. You can also ask how to get in touch!"
    }
  }

  const handleSend = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!input.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      role: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 500))

    const assistantMessage: Message = {
      id: (Date.now() + 1).toString(),
      content: getResponse(input),
      role: "assistant",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, assistantMessage])
    setIsLoading(false)
  }

  return (
    <>
      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-20 right-4 w-96 max-w-[calc(100vw-2rem)] h-96 md:h-[500px] bg-card border border-border/50 rounded-xl shadow-xl shadow-primary/20 flex flex-col z-40 backdrop-blur-sm bg-card/95">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-border/30">
            <h3 className="text-sm font-semibold text-foreground flex items-center gap-2">
              <MessageCircle className="w-4 h-4 text-primary" />
              AI Assistant
            </h3>
            <div className="flex gap-2">
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                className="p-1 hover:bg-secondary/20 rounded transition-colors"
                aria-label={isMinimized ? "Maximize" : "Minimize"}
              >
                {isMinimized ? (
                  <Maximize2 className="w-4 h-4 text-muted-foreground" />
                ) : (
                  <Minimize2 className="w-4 h-4 text-muted-foreground" />
                )}
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-secondary/20 rounded transition-colors"
                aria-label="Close"
              >
                <X className="w-4 h-4 text-muted-foreground" />
              </button>
            </div>
          </div>

          {/* Messages */}
          {!isMinimized && (
            <>
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                  <div key={message.id} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                    <div
                      className={`max-w-xs px-4 py-2 rounded-lg text-sm ${
                        message.role === "user"
                          ? "bg-primary text-primary-foreground"
                          : "bg-secondary/50 text-foreground border border-border/30"
                      }`}
                    >
                      {message.content}
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-secondary/50 text-foreground border border-border/30 px-4 py-2 rounded-lg">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" />
                        <div
                          className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"
                          style={{ animationDelay: "0.1s" }}
                        />
                        <div
                          className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"
                          style={{ animationDelay: "0.2s" }}
                        />
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <form onSubmit={handleSend} className="p-4 border-t border-border/30">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask me anything..."
                    disabled={isLoading}
                    className="flex-1 px-3 py-2 rounded-lg bg-secondary/30 border border-border/30 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm disabled:opacity-50"
                  />
                  <button
                    type="submit"
                    disabled={isLoading || !input.trim()}
                    className="p-2 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    aria-label="Send message"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      )}

      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 p-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full shadow-lg shadow-primary/50 transition-all hover:shadow-xl hover:shadow-primary/60 z-40"
        aria-label="Toggle AI Assistant"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>
    </>
  )
}
