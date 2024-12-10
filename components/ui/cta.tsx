"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Apple, Play } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Section } from "@/components/ui/section"

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

export function CTA() {
  return (
    <Section
    className="flex items-center justify-center"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative overflow-hidden rounded-3xl bg-primary px-6 py-20 text-primary-foreground sm:px-12 sm:py-32"
      >
        <div className="relative mx-auto max-w-3xl text-center">
          <motion.h2
            variants={itemVariants}
            className="text-3xl font-bold tracking-tight sm:text-4xl"
          >
            Ready to Find Your Perfect Pet?
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="mx-auto mt-6 max-w-xl text-lg"
          >
            Download PawTalk now and start your journey to finding your new best
            friend. Available on iOS and Android.
          </motion.p>
          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-wrap justify-center gap-4"
          >
            <Button
              size="lg"
              variant="secondary" className="gap-2">
              <Apple className="h-5 w-5" />
              App Store
            </Button>
            <Button size="lg" variant="secondary" className="gap-2">
              <Play className="h-5 w-5" />
              Play Store
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </Section>
  )
}

