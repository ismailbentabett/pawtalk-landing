'use client'

import { motion } from 'framer-motion'
import { QrCode, Apple, SmartphoneIcon as Android } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function DownloadSection() {
  const installationSteps = [
    'Download the PawTalk app',
    'Create an account',
    'Connect your PawTalk device',
    'Start communicating with your pet!',
  ]

  const compatibleDevices = [
    'iPhone 6s and later',
    'Android 7.0 and up',
    'iPad Air 2 and later',
    'Android tablets',
  ]

  return (
    <section className="min-h-screen bg-white/10 backdrop-blur-lg py-16 px-8">
      <h2 className="text-4xl font-bold text-center text-white mb-12">Get Started with PawTalk</h2>
      <div className="flex flex-col md:flex-row items-center justify-center gap-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative w-64 h-64 bg-white/20 rounded-lg flex items-center justify-center"
        >
          <QrCode className="w-48 h-48 text-white" />
          <motion.div
            className="absolute inset-0 border-2 border-white/50 rounded-lg"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ repeat: Infinity, duration: 2 }}
          ></motion.div>
        </motion.div>
        <div className="space-y-8">
          <div className="flex space-x-4">
            <Button size="lg" className="flex items-center space-x-2">
              <Apple className="w-5 h-5" />
              <span>App Store</span>
            </Button>
            <Button size="lg" variant="outline" className="flex items-center space-x-2">
              <Android className="w-5 h-5" />
              <span>Google Play</span>
            </Button>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Installation Steps</h3>
            <ul className="list-decimal list-inside text-white/80 space-y-2">
              {installationSteps.map((step, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {step}
                </motion.li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Compatible Devices</h3>
            <ul className="grid grid-cols-2 gap-2 text-white/80">
              {compatibleDevices.map((device, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center space-x-2"
                >
                  <div className="w-2 h-2 bg-white/80 rounded-full"></div>
                  <span>{device}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

