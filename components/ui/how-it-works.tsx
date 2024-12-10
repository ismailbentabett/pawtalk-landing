"use client"

import * as React from "react"
import Image from "next/image"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Section } from "@/components/ui/section"

const steps = [
  {
    title: "Create Your Profile",
    description:
      "Tell us about your lifestyle, preferences, and what you're looking for in a pet.",
  },
  {
    title: "Start Swiping",
    description:
      "Browse through profiles of adorable pets waiting for their forever homes.",
  },
  {
    title: "Match & Connect",
    description:
      "When you find a match, chat with the shelter and schedule a meet-and-greet.",
  },
]

export function HowItWorks() {
  return (
    <Section id="how-it-works"
    className="mx-auto max-w-7xl sm:px-6 lg:px-8 "
    >
      <div className="text-center ">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold tracking-tight"
        >
          How PawTalk Works
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-4 text-lg text-muted-foreground"
        >
          Finding your perfect pet companion is as easy as 1-2-3
        </motion.p>
      </div>
      <div className="mt-16 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="flex gap-4"
            >
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <span className="text-primary font-semibold">{index + 1}</span>
              </div>
              <div>
                <h3 className="font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <Button size="lg" className="mt-4">
              Get Started Now
            </Button>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="relative mx-auto lg:mr-0"
        >
          <div className="relative">
            <Image
              src="/placeholder.svg?height=600&width=300"
              width={300}
              height={600}
              alt="PawTalk App Interface"
              className="rounded-[2.5rem] shadow-2xl mx-auto"
            />
            <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-t from-background/20 to-background/0" />
          </div>
          <div className="absolute inset-0 bg-grid-white/10 [mask-image:radial-gradient(white,transparent_70%)] -z-10" />
        </motion.div>
      </div>
    </Section>
  )
}

