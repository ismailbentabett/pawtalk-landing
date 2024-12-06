'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"

export default function FeaturesDisplay() {
  const [connections, setConnections] = useState(0)

  useState(() => {
    const interval = setInterval(() => {
      setConnections((prev) => prev + 1)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="min-h-screen bg-white/10 backdrop-blur-lg py-16 px-8">
      <h2 className="text-4xl font-bold text-center text-white mb-12">Experience the Future of Pet Communication</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white/20 p-8 rounded-lg shadow-xl"
        >
          <h3 className="text-2xl font-bold text-white mb-4">Interactive Device Demo</h3>
          <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
            {/* Replace with actual interactive demo */}
            <p className="text-gray-500">Interactive Device Demo Placeholder</p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white/20 p-8 rounded-lg shadow-xl"
        >
          <h3 className="text-2xl font-bold text-white mb-4">Pet Communication Visualizations</h3>
          <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
            {/* Replace with actual visualizations */}
            <p className="text-gray-500">Pet Communication Visualizations Placeholder</p>
          </div>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mt-16"
      >
        <h3 className="text-2xl font-bold text-center text-white mb-8">Success Stories</h3>
        <Carousel
          showArrows={true}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          autoPlay={true}
          interval={5000}
        >
          <div className="bg-white/20 p-8 rounded-lg">
            <p className="text-white text-lg">"PawTalk has completely transformed my relationship with my dog. We understand each other better than ever!"</p>
            <p className="text-white/80 mt-4">- Sarah & Max</p>
          </div>
          <div className="bg-white/20 p-8 rounded-lg">
            <p className="text-white text-lg">"I never knew my cat had so much to say! PawTalk has opened up a whole new world of communication."</p>
            <p className="text-white/80 mt-4">- Mike & Whiskers</p>
          </div>
          <div className="bg-white/20 p-8 rounded-lg">
            <p className="text-white text-lg">"As a veterinarian, I'm amazed by the potential of PawTalk. It's revolutionizing pet care!"</p>
            <p className="text-white/80 mt-4">- Dr. Emily, DVM</p>
          </div>
        </Carousel>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mt-16 text-center"
      >
        <h3 className="text-2xl font-bold text-white mb-4">Real-time Connections</h3>
        <p className="text-4xl font-bold text-white">{connections.toLocaleString()}</p>
        <p className="text-white/80">Pets connected right now</p>
      </motion.div>
    </section>
  )
}

