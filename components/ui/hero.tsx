"use client"

import * as React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

export function Hero() {
  return (
    <div className="relative overflow-hidden bg-background pt-[4.75rem]">
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-8 items-center py-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-4"
          >
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight"
            >
              Find Your Perfect{" "}
              <span className="text-primary">Furry Match</span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-xl text-muted-foreground"
            >
              Swipe right on love. PawTalk makes pet adoption as easy as finding
              your soulmate. Connect with shelters, chat with caregivers, and meet
              your new best friend.
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 mt-4"
            >
              <Button size="lg" className="gap-2">
                Download App <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-4 mt-8"
            >
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-background"
                  >
                    <Image
                      src={`/placeholder.svg?text=${i}`}
                      alt={`User ${i}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                Join <span className="font-semibold text-foreground">2,000+</span>{" "}
                happy pet parents
              </p>
            </motion.div>
          </motion.div>
          <div className="relative lg:ml-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: 0.2,
              }}
              className="relative z-10"
            >
              <Image
                src="/placeholder.svg?height=600&width=300"
                width={300}
                height={600}
                alt="PawTalk App Screenshot"
                className="rounded-[2.5rem] shadow-2xl"
              />
              <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-t from-background/20 to-background/0" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: 100 }}
              animate={{ opacity: 0.4, scale: 0.8, x: 80 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: 0.4,
              }}
              className="absolute inset-0 z-0"
            >
              <Image
                src="/placeholder.svg?height=600&width=300"
                width={300}
                height={600}
                alt="PawTalk App Screenshot Background"
                className="rounded-[2.5rem]"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

