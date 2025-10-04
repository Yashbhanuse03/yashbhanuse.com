"use client"

import { motion } from "framer-motion"
import { MapPin, Mail, Phone, Calendar, User, Briefcase } from "lucide-react"
import { cn } from "../lib/utiles"

const personalInfo = [
  {
    icon: User,
    label: "Full Name",
    value: "Yash Bhanuse"
  },
  {
    icon: Briefcase,
    label: "Role",
    value: "Senior Frontend Developer & UI Design Lead"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Mumbai, India"
  },
  {
    icon: Mail,
    label: "Email",
    value: "yash@example.com"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 98765 43210"
  },
  {
    icon: Calendar,
    label: "Experience",
    value: "5+ years"
  }
]

const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/yashbhanuse",
    username: "@yashbhanuse"
  },
  {
    name: "GitHub",
    url: "https://github.com/yashbhanuse",
    username: "@yashbhanuse"
  },
  {
    name: "Twitter",
    url: "https://twitter.com/yashbhanuse",
    username: "@yashbhanuse"
  },
  {
    name: "Instagram",
    url: "https://instagram.com/yashbhanuse",
    username: "@yashbhanuse"
  }
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">About</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get to know more about me, my background, and what drives my passion for development.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Personal Story */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold mb-6">Hello, World! 👋</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I am Yash Bhanuse — a Design Engineer passionate about creating high-performance, 
                user-centric software solutions with intuitive and engaging designs.
              </p>
              <p>
                With 5+ years of experience, I specialize in building high-quality web and mobile 
                applications using Next.js, React, TypeScript, and modern front-end technologies. 
                Beyond work, I love exploring new technologies and turning ideas into reality through 
                personal projects.
              </p>
              <p>
                I believe in the power of clean code, thoughtful design, and continuous learning. 
                When I&apos;m not coding, you can find me exploring new technologies, contributing to
                open-source projects, or sharing knowledge with the developer community.
              </p>
            </div>
          </motion.div>

          {/* Personal Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Overview */}
            <div className="bg-card border border-border rounded-lg p-6">
              <h4 className="text-lg font-semibold mb-4">Overview</h4>
              <div className="grid gap-4">
                {personalInfo.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="flex-shrink-0">
                      <item.icon className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm text-muted-foreground">{item.label}</div>
                      <div className="font-medium truncate">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-card border border-border rounded-lg p-6">
              <h4 className="text-lg font-semibold mb-4">Social Links</h4>
              <div className="grid gap-3">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "flex items-center justify-between p-3 rounded-md transition-colors",
                      "hover:bg-accent hover:text-accent-foreground",
                      "border border-transparent hover:border-border"
                    )}
                  >
                    <span className="font-medium">{link.name}</span>
                    <span className="text-sm text-muted-foreground">{link.username}</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
