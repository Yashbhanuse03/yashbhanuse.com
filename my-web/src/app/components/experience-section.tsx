"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin } from "lucide-react"

const experiences = [
  {
    company: "Tech Solutions Inc.",
    role: "Senior Frontend Developer & UI Design Lead",
    type: "Full-time",
    period: "10.2022—Present",
    location: "Mumbai, India",
    description: [
      "Lead a team of 5 frontend developers in building scalable web applications",
      "Develop and maintain design systems to ensure UI/UX consistency across products",
      "Implement robust frontend solutions using React, Next.js, and TypeScript",
      "Collaborate with product managers and designers to deliver user-centric features",
      "Mentor junior developers and conduct code reviews to maintain code quality"
    ],
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Figma", "Git"],
    current: true
  },
  {
    company: "Digital Innovations Ltd.",
    role: "Frontend Developer",
    type: "Full-time", 
    period: "06.2021—09.2022",
    location: "Mumbai, India",
    description: [
      "Built responsive web applications using React and modern JavaScript",
      "Collaborated with backend teams to integrate RESTful APIs",
      "Optimized application performance and improved loading times by 40%",
      "Implemented automated testing strategies using Jest and React Testing Library"
    ],
    technologies: ["React", "JavaScript", "CSS3", "Node.js", "Jest", "Git"],
    current: false
  },
  {
    company: "StartupXYZ",
    role: "Junior Frontend Developer",
    type: "Full-time",
    period: "01.2020—05.2021", 
    location: "Mumbai, India",
    description: [
      "Developed user interfaces for web applications using HTML, CSS, and JavaScript",
      "Worked closely with designers to implement pixel-perfect designs",
      "Learned modern frontend frameworks and best practices",
      "Contributed to the company's first mobile-responsive website redesign"
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "jQuery"],
    current: false
  }
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Experience</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey and the roles that have shaped my expertise in frontend development.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-border hidden md:block" />
            
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 top-6 w-4 h-4 bg-primary rounded-full border-4 border-background hidden md:block" />
                  
                  <div className="md:ml-20">
                    <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                      {/* Header */}
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="text-xl font-semibold">{exp.company}</h3>
                            {exp.current && (
                              <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 rounded-full">
                                Current
                              </span>
                            )}
                          </div>
                          <p className="text-lg font-medium text-primary mb-2">{exp.role}</p>
                          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              <span>{exp.period}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="h-4 w-4" />
                              <span>{exp.location}</span>
                            </div>
                            <span className="px-2 py-1 bg-muted rounded text-xs">
                              {exp.type}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <div className="mb-6">
                        <ul className="space-y-2">
                          {exp.description.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-muted-foreground">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="text-sm font-medium mb-3">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
