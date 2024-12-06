'use client'

import { motion } from 'framer-motion'
import { BarChart, Users, MessageCircle, Activity } from 'lucide-react'
import { Button } from '@/components/ui/button'

const stats = [
  { icon: Users, label: 'Active Users', value: '10,234' },
  { icon: MessageCircle, label: 'Messages Sent', value: '1.2M' },
  { icon: Activity, label: 'Pet Activities', value: '543,210' },
]

export default function AdminDashboardPreview() {
  return (
    <section id="admin" className="py-20 px-8 bg-gray-100">
      <h2 className="text-4xl font-bold text-center mb-12">Admin Dashboard Preview</h2>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-8 rounded-lg shadow-xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {stats.map((stat, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className="p-3 bg-gray-100 rounded-full">
                  <stat.icon className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="aspect-video bg-gray-200 rounded-lg mb-8">
            {/* Placeholder for chart or graph */}
            <div className="w-full h-full flex items-center justify-center">
              <BarChart className="w-16 h-16 text-gray-400" />
            </div>
          </div>
          <div className="text-center">
            <Button size="lg">Access Full Dashboard</Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

