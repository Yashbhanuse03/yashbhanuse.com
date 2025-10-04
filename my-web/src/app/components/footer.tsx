"use client"

import { Github, Linkedin, Mail, Heart } from "lucide-react"
import Link from "next/link"
import { cn } from "../lib/utiles"

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/yashbhanuse",
    label: "GitHub"
  },
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/yashbhanuse",
    label: "LinkedIn"
  },
  {
    icon: Mail,
    href: "mailto:yash@example.com",
    label: "Email"
  }
]

const quickLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" }
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded bg-primary" />
              <span className="text-xl font-bold">Yash Bhanuse</span>
            </div>
            <p className="text-muted-foreground max-w-sm">
              Creating with code. Small details matter. Building beautiful, 
              functional, and user-centric digital experiences.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "w-10 h-10 bg-muted rounded-lg flex items-center justify-center",
                    "transition-colors hover:bg-primary hover:text-primary-foreground"
                  )}
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              {quickLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Get In Touch</h3>
            <div className="space-y-2 text-muted-foreground">
              <p>Ready to start your next project?</p>
              <Link
                href="mailto:yash@example.com"
                className="inline-flex items-center gap-2 text-primary hover:underline"
              >
                <Mail className="w-4 h-4" />
                yash@example.com
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Yash Bhanuse. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-red-500" /> using Next.js & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
