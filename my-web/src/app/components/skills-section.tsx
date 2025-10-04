"use client"

import { motion } from "framer-motion"
import { cn } from "../lib/utiles"

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", level: 95 },
      { name: "Next.js", level: 90 },
      { name: "TypeScript", level: 88 },
      { name: "JavaScript", level: 95 },
      { name: "HTML5", level: 98 },
      { name: "CSS3", level: 92 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Sass/SCSS", level: 85 }
    ]
  },
  {
    title: "Backend & Database",
    skills: [
      { name: "Node.js", level: 80 },
      { name: "Express.js", level: 75 },
      { name: "PostgreSQL", level: 70 },
      { name: "MongoDB", level: 75 },
      { name: "Prisma", level: 70 },
      { name: "REST APIs", level: 85 },
      { name: "GraphQL", level: 65 }
    ]
  },
  {
    title: "Tools & Technologies",
    skills: [
      { name: "Git", level: 90 },
      { name: "Docker", level: 70 },
      { name: "Webpack", level: 75 },
      { name: "Vite", level: 80 },
      { name: "Jest", level: 80 },
      { name: "Cypress", level: 70 },
      { name: "Figma", level: 85 },
      { name: "Adobe XD", level: 75 }
    ]
  },
  {
    title: "Soft Skills",
    skills: [
      { name: "Team Leadership", level: 85 },
      { name: "Project Management", level: 80 },
      { name: "Problem Solving", level: 92 },
      { name: "Communication", level: 88 },
      { name: "Mentoring", level: 82 },
      { name: "Code Review", level: 90 }
    ]
  }
]

const technologies = [
  "React", "Next.js", "TypeScript", "JavaScript", "Node.js", "Python", "PHP", "Java",
  "Tailwind CSS", "shadcn/ui", "Radix UI", "Motion", "MobX", "Redux", "Ant Design",
  "React Router", "React Navigation", "LoopBack", "Laravel", "Git", "Docker",
  "MySQL", "MongoDB", "Redis", "Figma", "Adobe Photoshop", "ChatGPT"
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Skills & Technologies</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My technical expertise and the tools I use to bring ideas to life.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-lg p-6"
            >
              <h3 className="text-xl font-semibold mb-6">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-xs text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-primary h-2 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technology Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-card border border-border rounded-lg p-8"
        >
          <h3 className="text-xl font-semibold mb-6 text-center">Technology Stack</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-full transition-colors cursor-default",
                  "bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground"
                )}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
