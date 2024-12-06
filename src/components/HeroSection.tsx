'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function HeroSection() {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center p-8 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-3xl z-10"
      >
        <h1 className="text-6xl font-bold mb-6">Connect with Your Pet</h1>
        <p className="text-xl mb-8">Experience the future of pet communication with PawTalk</p>
        <Button size="lg" className="group">
          Get Started
          <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute inset-0 -z-10"
      >
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path
            d="M0,0 L100,0 L100,100 L0,100 Z"
            fill="none"
            stroke="black"
            strokeWidth="0.5"
            vectorEffect="non-scaling-stroke"
          />
          {[...Array(10)].map((_, i) => (
            <line
              key={i}
              x1="0"
              y1={i * 10}
              x2="100"
              y2={i * 10}
              stroke="black"
              strokeWidth="0.1"
              vectorEffect="non-scaling-stroke"
            />
          ))}
          {[...Array(10)].map((_, i) => (
            <line
              key={i}
              x1={i * 10}
              y1="0"
              x2={i * 10}
              y2="100"
              stroke="black"
              strokeWidth="0.1"
              vectorEffect="non-scaling-stroke"
            />
          ))}
        </svg>
      </motion.div>
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ArrowRight className="w-8 h-8 rotate-90" />
      </motion.div>
    </section>
  )
}

