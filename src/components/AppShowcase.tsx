'use client'

import { motion } from 'framer-motion'
import { Smartphone, MessageCircle, Heart, BarChart } from 'lucide-react'

export default function AppShowcase() {
  const features = [
    { icon: MessageCircle, title: 'Real-time Chat', description: 'Instant communication with your pet' },
    { icon: Heart, title: 'Emotion Detection', description: 'Understand your pet\'s feelings' },
    { icon: BarChart, title: 'Activity Tracking', description: 'Monitor your pet\'s daily activities' },
  ]

  return (
    <section className="min-h-screen bg-white/5 backdrop-blur-lg py-16 px-8">
      <h2 className="text-4xl font-bold text-center text-white mb-12">Discover the PawTalk App</h2>
      <div className="flex flex-col md:flex-row items-center justify-center gap-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative w-64 h-[500px]"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-blue-500 rounded-[3rem] shadow-xl"></div>
          <img
            src="/placeholder.svg?height=500&width=250"
            alt="PawTalk App"
            className="absolute inset-2 rounded-[2.5rem] shadow-inner"
          />
        </motion.div>
        <div className="space-y-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="flex items-start space-x-4"
            >
              <div className="bg-white/20 p-3 rounded-full">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                <p className="text-white/80">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mt-16 text-center"
      >
        <h3 className="text-2xl font-bold text-white mb-4">Usage Statistics</h3>
        <div className="flex justify-center space-x-8">
          <div>
            <p className="text-4xl font-bold text-white">1M+</p>
            <p className="text-white/80">Daily Active Users</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-white">4.8</p>
            <p className="text-white/80">App Store Rating</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-white">50M+</p>
            <p className="text-white/80">Messages Sent</p>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

