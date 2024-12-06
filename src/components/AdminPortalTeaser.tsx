'use client'

import { motion } from 'framer-motion'
import { BarChart, Users, MessageSquare, Activity } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function AdminPortalTeaser() {
  const features = [
    { icon: BarChart, title: 'Analytics Dashboard' },
    { icon: Users, title: 'User Management' },
    { icon: MessageSquare, title: 'Message Monitoring' },
    { icon: Activity, title: 'Pet Activity Tracking' },
  ]

  return (
    <section className="min-h-screen bg-white/5 backdrop-blur-lg py-16 px-8">
      <h2 className="text-4xl font-bold text-center text-white mb-12">PawTalk Admin Portal</h2>
      <div className="flex flex-col md:flex-row items-center justify-center gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white/20 p-8 rounded-lg shadow-xl w-full max-w-2xl"
        >
          <h3 className="text-2xl font-bold text-white mb-4">Dashboard Preview</h3>
          <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
            {/* Replace with actual dashboard preview */}
            <p className="text-gray-500">Admin Dashboard Preview Placeholder</p>
          </div>
        </motion.div>
        <div className="space-y-8">
          <h3 className="text-2xl font-bold text-white mb-4">Key Features</h3>
          <div className="grid grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center space-x-2"
              >
                <feature.icon className="w-6 h-6 text-white" />
                <span className="text-white">{feature.title}</span>
              </motion.div>
            ))}
          </div>
          <Button size="lg" className="w-full">Access Dashboard</Button>
          <div>
            <h3 className="text-xl font-bold text-white mb-2">Live Activity Feed</h3>
            <ul className="space-y-2 text-white/80">
              <motion.li
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                New user registered: John D.
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Pet connection established: Fluffy
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Message sent: "Good boy, Max!"
              </motion.li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

