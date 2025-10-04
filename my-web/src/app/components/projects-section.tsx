"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github, Calendar } from "lucide-react"
import Link from "next/link"
import { cn } from "../lib/utiles"

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce platform built with Next.js and Stripe integration. Features include product catalog, shopping cart, user authentication, and payment processing.",
    image: "/project-1.jpg",
    technologies: ["Next.js", "React", "TypeScript", "Stripe", "Prisma", "PostgreSQL"],
    liveUrl: "https://ecommerce-demo.com",
    githubUrl: "https://github.com/yashbhanuse/ecommerce-platform",
    period: "2024",
    status: "Completed",
    featured: true
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    image: "/project-2.jpg", 
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Express"],
    liveUrl: "https://taskmanager-demo.com",
    githubUrl: "https://github.com/yashbhanuse/task-manager",
    period: "2023",
    status: "Completed",
    featured: true
  },
  {
    title: "Weather Dashboard",
    description: "A responsive weather dashboard that displays current weather conditions and forecasts for multiple cities with beautiful data visualizations.",
    image: "/project-3.jpg",
    technologies: ["React", "Chart.js", "OpenWeather API", "CSS3"],
    liveUrl: "https://weather-dashboard-demo.com",
    githubUrl: "https://github.com/yashbhanuse/weather-dashboard",
    period: "2023",
    status: "Completed",
    featured: false
  },
  {
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website built with Next.js and Tailwind CSS, featuring dark mode, animations, and optimized performance.",
    image: "/project-4.jpg",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
    liveUrl: "https://yashbhanuse.com",
    githubUrl: "https://github.com/yashbhanuse/portfolio",
    period: "2024",
    status: "Ongoing",
    featured: false
  }
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and personal projects that demonstrate my skills and passion for development.
          </p>
        </motion.div>

        <div className="grid gap-8 md:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={cn(
                "group relative overflow-hidden rounded-lg border border-border bg-card",
                "hover:shadow-lg transition-all duration-300"
              )}
            >
              <div className={cn(
                "grid gap-8 p-6 md:p-8",
                project.featured ? "lg:grid-cols-2" : "lg:grid-cols-3",
                "items-center"
              )}>
                {/* Project Image */}
                <div className={cn(
                  "relative overflow-hidden rounded-lg bg-muted",
                  project.featured ? "lg:order-1" : "lg:col-span-1",
                  index % 2 === 1 && project.featured ? "lg:order-2" : ""
                )}>
                  <div className="aspect-video relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-lg flex items-center justify-center">
                          <ExternalLink className="w-8 h-8 text-primary" />
                        </div>
                        <p className="text-sm text-muted-foreground">Project Preview</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className={cn(
                  "space-y-6",
                  project.featured ? "lg:order-2" : "lg:col-span-2",
                  index % 2 === 1 && project.featured ? "lg:order-1" : ""
                )}>
                  {/* Header */}
                  <div className="space-y-4">
                    <div className="flex items-start justify-between gap-4">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <h3 className="text-xl sm:text-2xl font-semibold">{project.title}</h3>
                          {project.featured && (
                            <span className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                              Featured
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <span>{project.period}</span>
                          </div>
                          <span className={cn(
                            "px-2 py-1 rounded text-xs font-medium",
                            project.status === "Completed" 
                              ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                              : "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                          )}>
                            {project.status}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-medium">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    <Link
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        "inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors",
                        "bg-primary text-primary-foreground hover:bg-primary/90"
                      )}
                    >
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </Link>
                    <Link
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        "inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors",
                        "border border-input bg-background hover:bg-accent hover:text-accent-foreground"
                      )}
                    >
                      <Github className="h-4 w-4" />
                      Source Code
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="https://github.com/yashbhanuse"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "inline-flex items-center gap-2 px-6 py-3 rounded-md text-sm font-medium transition-colors",
              "border border-input bg-background hover:bg-accent hover:text-accent-foreground"
            )}
          >
            <Github className="h-4 w-4" />
            View More on GitHub
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
