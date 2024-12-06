'use client'

import { motion } from 'framer-motion'
import { MessageCircle, Heart, Activity } from 'lucide-react'

const features = [
  {
    icon: MessageCircle,
    title: 'Real-time Communication',
    description: 'Instantly connect with your pet through voice and video calls.',
  },
  {
    icon: Heart,
    title: 'Emotion Detection',
    description: 'Understand your pet\'s feelings with advanced AI technology.',
  },
  {
    icon: Activity,
    title: 'Activity Tracking',
    description: 'Monitor your pet\'s daily activities and health metrics.',
  },
]

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 px-8">
      <h2 className="text-4xl font-bold text-center mb-12">Key Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex flex-col items-center text-center"
          >
            <div className="mb-4 p-4 border-2 border-black rounded-full">
              <feature.icon className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

