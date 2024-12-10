"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Heart, MessageCircle, Calendar, Shield, ArrowRight } from 'lucide-react'

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Section } from "@/components/ui/section"

const features = [
  {
    icon: Heart,
    title: "Smart Matching",
    description:
      "Our AI-powered matching system helps you find the perfect pet based on your lifestyle and preferences.",
  },
  {
    icon: MessageCircle,
    title: "Real-time Chat",
    description:
      "Connect instantly with shelters and pet caregivers to learn more about your potential new family member.",
  },
  {
    icon: Calendar,
    title: "Easy Scheduling",
    description:
      "Book meet-and-greets with your matched pets directly through the app.",
  },
  {
    icon: Shield,
    title: "Verified Shelters",
    description:
      "All our partner shelters are thoroughly vetted to ensure safe and legitimate adoptions.",
  },
]

interface FeatureCardProps {
  feature: typeof features[number]
  index: number
}

function FeatureCard({ feature, index }: FeatureCardProps) {
  const [isHovered, setIsHovered] = React.useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={cn(
          "relative overflow-hidden transition-colors",
          isHovered && "bg-muted/50"
        )}
      >
        <CardHeader>
          <div className="flex items-center space-x-4">
            <div className="rounded-lg bg-primary/10 p-2">
              <feature.icon className="h-6 w-6 text-primary" />
            </div>
            <CardTitle>{feature.title}</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <CardDescription>{feature.description}</CardDescription>
          <Button
            variant="ghost"
            className={cn(
              "mt-4 w-full justify-start gap-2 transition-opacity",
              isHovered ? "opacity-100" : "opacity-0"
            )}
          >
            Learn more <ArrowRight className="h-4 w-4" />
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export function Features() {
  return (
    <Section id="features" className="bg-muted/50 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div className="text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold tracking-tight"
        >
          Why Choose PawTalk?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-4 text-lg text-muted-foreground"
        >
          We&apos;ve reimagined the pet adoption process to make it more
          accessible, enjoyable, and efficient.
        </motion.p>
      </div>
      <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, index) => (
          <FeatureCard key={feature.title} feature={feature} index={index} />
        ))}
      </div>
    </Section>
  )
}

