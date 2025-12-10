"use client";

import type React from "react";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, Send, X, Minimize2, Maximize2 } from "lucide-react";

interface Message {
  id: string;
  content: string;
  role: "user" | "assistant";
  timestamp: Date;
}

export function AiAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content:
        "Hey there! 👋 I'm Abdulakeem's AI Assistant. I'm 19 years old, a student at LASU studying Building Technology. Ask me anything about my projects, skills, studies, or experience!",
      role: "assistant",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sampleResponses: Record<string, string> = {
    projects:
      "I've worked on several projects including Construction bible, Hostify, Multi step form, Rest country etc. Each project uses modern tech stacks like Next.js, React, TypeScript, and Tailwindcss. As a LASU Building student, I combine web development with construction technology!",
    skills:
      "My expertise includes: Frontend (Next.js, React, TypeScript, Tailwind), Backend (Node.js, Express.js),  and Design Tools (Figma). I also have experience with CAD operations, building visualization, and construction design principles from my studies.",
    experience:
      "I'm 19 years old and currently in my studies at LASU, combining software development with Building Technology education. I've been actively developing web applications and learning construction tech, positioning myself at the intersection of digital innovation and building innovation.",
    construction:
      "My passion is construction technology! I'm building smart solutions for construction planning, visualization, and management. My projects include CAD integration, 3D roof plan viewers, and construction project planning tools. My LASU Building studies give me practical knowledge in this space.",
    background:
      "I'm a 19-year-old Full Stack Developer and LASU Building student. I'm on a mission to create innovative digital solutions that solve real construction and building problems. My unique blend of web dev skills and building studies prepares me for the future of construction tech.",
    contact:
      "You can reach me via email at abdulakeemhabeeb123@gmail.com, connect on LinkedIn, or check out my GitHub repositories. I'm always excited to collaborate on tech and construction-related projects!",
    age: "I'm 19 years old, currently a student at LASU studying Building Technology. This gives me a unique perspective on how technology can revolutionize the construction industry!",
    education:
      "I'm studying Building Technology at LASU (Lagos State University). It's an exciting field that combines design, engineering, and sustainability and I'm bringing my web development skills to innovate in this space!",
  };

  const getResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();

    if (
      lowerMessage.includes("project") ||
      lowerMessage.includes("work") ||
      lowerMessage.includes("portfolio")
    ) {
      return sampleResponses.projects;
    } else if (
      lowerMessage.includes("skill") ||
      lowerMessage.includes("expertise")
    ) {
      return sampleResponses.skills;
    } else if (
      lowerMessage.includes("experience") ||
      lowerMessage.includes("background") ||
      lowerMessage.includes("how long")
    ) {
      return sampleResponses.experience;
    } else if (
      lowerMessage.includes("construction") ||
      lowerMessage.includes("building") ||
      lowerMessage.includes("architecture")
    ) {
      return sampleResponses.construction;
    } else if (
      lowerMessage.includes("age") ||
      lowerMessage.includes("how old") ||
      lowerMessage.includes("years old")
    ) {
      return sampleResponses.age;
    } else if (
      lowerMessage.includes("education") ||
      lowerMessage.includes("school") ||
      lowerMessage.includes("lasu") ||
      lowerMessage.includes("studying")
    ) {
      return sampleResponses.education;
    } else if (lowerMessage.includes("about") || lowerMessage.includes("who")) {
      return sampleResponses.background;
    } else if (
      lowerMessage.includes("contact") ||
      lowerMessage.includes("reach")
    ) {
      return sampleResponses.contact;
    } else {
      return "That's a great question! Feel free to ask me about my projects, skills, age, education at LASU, experience, construction tech initiatives, or how to get in touch. I'm happy to help!";
    }
  };

  const handleSend = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      role: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    const assistantMessage: Message = {
      id: (Date.now() + 1).toString(),
      content: getResponse(input),
      role: "assistant",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, assistantMessage]);
    setIsLoading(false);
  };

  return (
    <>
      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-20 right-4 w-96 max-w-[calc(100vw-2rem)] h-96 md:h-[500px] bg-card/95 border border-border/50 rounded-xl shadow-xl shadow-primary/20 flex flex-col z-40 backdrop-blur-sm">
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
                  <div
                    key={message.id}
                    className={`flex ${
                      message.role === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
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
              <form
                onSubmit={handleSend}
                className="p-4 border-t border-border/30"
              >
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
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-6 h-6" />
        )}
      </button>
    </>
  );
}
