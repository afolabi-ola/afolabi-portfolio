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
      id: '1',
      content:
        "Hey 👋 I'm Afolabi's AI Assistant. He's a Software Engineer who builds real-world solutions with React, Next.js, Node.js, and MongoDB. You can ask me about his projects, backend journey, teaching experience, the CBT app, or the Escrow app.",
      role: 'assistant',
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
      'Afolabi has worked on multiple real-world applications including a CBT examination platform licensed to clients, a hotel management dashboard, and several full-stack web apps. He focuses on scalable frontend architecture and is actively advancing into deep backend engineering like caching, database optimization, and system design.',
    cbt:
      'The CBT app is a production-focused examination platform built for real institutions. It includes role-based portals for students, admins, and teachers, timed exams, auto-save, result handling, and secure workflows. Afolabi led frontend development and contributed to shipping it for licensed client use.',
    escrow:
      'The Escrow app is a secure transaction platform built to protect buyers and sellers. It supports wallet operations, transaction tracking, verification flows, and dispute-ready workflows with a modern dashboard experience. The system is designed for trust, reliability, and scalable full-stack operations.',
    skills:
      'His core stack includes React, Next.js, TypeScript, TailwindCSS on the frontend, and Node.js, Express, MongoDB on the backend. He also works with REST APIs, authentication flows, and is currently diving into advanced backend topics like caching, database replication concepts, and scalable architecture.',
    experience:
      'Afolabi has real production experience working on live applications with a senior engineer. He led frontend development on a CBT platform that was later licensed to a client. He also teaches web development students and collaborates on full-stack production projects.',
    backend:
      'He is currently advancing beyond basic CRUD APIs into deeper backend engineering topics like refresh token flows, caching strategies, background jobs, database indexing, and scalable system design. His goal is to confidently design high-scale systems similar to social platforms.',
    teaching:
      'Afolabi works as a web development tutor, mentoring new developers in HTML, CSS, JavaScript, React, and modern frontend practices while still building real-world applications himself.',
    background:
      'Afolabi is a solution-driven Software Engineer focused on building impactful digital products. He started strong in frontend engineering and is now intentionally mastering advanced backend systems to become a well-rounded full-stack and system-level engineer.',
    contact:
      'You can connect with Afolabi via LinkedIn, check out his GitHub projects, or reach out for collaboration, freelance work, or engineering opportunities.',
    education:
      'He trained through an intensive coding bootcamp where he gained strong frontend expertise and transitioned into real-world project development under mentorship from senior engineers.',
  };

  const getResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();

    if (
      lowerMessage.includes('cbt') ||
      lowerMessage.includes('exam app') ||
      lowerMessage.includes('examination app') ||
      lowerMessage.includes('test platform')
    ) {
      return sampleResponses.cbt;
    } else if (
      lowerMessage.includes('escrow') ||
      lowerMessage.includes('transaction app') ||
      lowerMessage.includes('buyer and seller')
    ) {
      return sampleResponses.escrow;
    } else if (
      lowerMessage.includes('project') ||
      lowerMessage.includes('work') ||
      lowerMessage.includes('portfolio')
    ) {
      return sampleResponses.projects;
    } else if (
      lowerMessage.includes('skill') ||
      lowerMessage.includes('tech') ||
      lowerMessage.includes('stack')
    ) {
      return sampleResponses.skills;
    } else if (
      lowerMessage.includes('experience') ||
      lowerMessage.includes('background') ||
      lowerMessage.includes('journey')
    ) {
      return sampleResponses.experience;
    } else if (
      lowerMessage.includes('backend') ||
      lowerMessage.includes('api') ||
      lowerMessage.includes('database') ||
      lowerMessage.includes('system design')
    ) {
      return sampleResponses.backend;
    } else if (
      lowerMessage.includes('teach') ||
      lowerMessage.includes('mentor') ||
      lowerMessage.includes('students')
    ) {
      return sampleResponses.teaching;
    } else if (
      lowerMessage.includes('education') ||
      lowerMessage.includes('bootcamp') ||
      lowerMessage.includes('learning')
    ) {
      return sampleResponses.education;
    } else if (
      lowerMessage.includes('contact') ||
      lowerMessage.includes('hire') ||
      lowerMessage.includes('reach')
    ) {
      return sampleResponses.contact;
    } else if (
      lowerMessage.includes('about') ||
      lowerMessage.includes('who are you')
    ) {
      return sampleResponses.background;
    } else {
      return "Great question! You can ask about Afolabi's projects, backend growth journey, teaching experience, tech stack, the CBT app, or the Escrow app.";
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
