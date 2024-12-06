'use client'

import { motion } from 'framer-motion'
import { Smartphone } from 'lucide-react'

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-8 bg-gray-100">
      <h2 className="text-4xl font-bold text-center mb-12">The PawTalk Experience</h2>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="md:w-1/2 mb-8 md:mb-0"
          >
            <h3 className="text-2xl font-bold mb-4">Connect Anytime, Anywhere</h3>
            <p className="text-gray-600 mb-4">
              With PawTalk, you're always just a tap away from your furry friend. Whether you're at work, traveling, or just in another room, stay connected with your pet like never before.
            </p>
            <ul className="list-disc list-inside text-gray-600">
              <li>Real-time video calls</li>
              <li>Voice messaging</li>
              <li>Interactive games</li>
              <li>Treat dispensing</li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="md:w-1/2 flex justify-center"
          >
            <div className="relative">
              <Smartphone className="w-64 h-auto text-black" />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-80 bg-gray-200 rounded-3xl overflow-hidden">
                <img
                  src="/placeholder.svg?height=320&width=192"
                  alt="PawTalk App Interface"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

