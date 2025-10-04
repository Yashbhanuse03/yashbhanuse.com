"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { cn } from "../lib/utiles"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Geometric Pattern Background */}
      <div className="absolute inset-0 bg-[radial-gradient(var(--pattern-foreground)_1px,transparent_0)] bg-[size:20px_20px] bg-center [--pattern-foreground:hsl(var(--foreground))/0.05] dark:[--pattern-foreground:hsl(var(--foreground))/0.1]" />
      
      {/* Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <svg
          className="absolute top-20 left-20 h-32 w-32 text-primary/10"
          viewBox="0 0 512 256"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="currentColor"
            d="M192 256H64v-64h128v64ZM448 64H320v128h128v64H256V0h192v64ZM64 192H0V64h64v128ZM512 192h-64V64h64v128ZM192 64H64V0h128v64Z"
          />
        </svg>
        
        <svg
          className="absolute bottom-20 right-20 h-24 w-24 text-primary/10 rotate-45"
          viewBox="0 0 512 256"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="currentColor"
            d="M192 256H64v-64h128v64ZM448 64H320v128h128v64H256V0h192v64ZM64 192H0V64h64v128ZM512 192h-64V64h64v128ZM192 64H64V0h128v64Z"
          />
        </svg>
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative h-32 w-32 sm:h-40 sm:w-40 rounded-full ring-2 ring-border ring-offset-4 ring-offset-background overflow-hidden">
              <Image
                src="/Myimage.png"
                alt="Yash Bhanuse"
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* Status indicator */}
            <div className="absolute -bottom-1 -right-1 h-8 w-8 rounded-full bg-green-500 border-4 border-background flex items-center justify-center">
              <div className="h-3 w-3 rounded-full bg-white" />
            </div>
          </motion.div>

          {/* Name and Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight">
              Yash Bhanuse
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-2xl">
              Creating with code. Small details matter.
            </p>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="max-w-2xl"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              Senior Frontend Developer & UI Design Lead passionate about creating 
              high-performance, user-centric software solutions with intuitive and 
              engaging designs.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className={cn(
                "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                "disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
                "bg-primary text-primary-foreground hover:bg-primary/90",
                "h-11 px-8"
              )}
            >
              Get in touch
            </button>
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className={cn(
                "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                "disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
                "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
                "h-11 px-8"
              )}
            >
              View my work
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
