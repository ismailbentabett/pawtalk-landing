'use client'

import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

const testimonials = [
  {
    quote: "PawTalk has transformed my relationship with my dog. We're closer than ever!",
    author: "Sarah M.",
    pet: "Max, Golden Retriever",
  },
  {
    quote: "I never knew my cat had so much to say. This app is a game-changer!",
    author: "Michael L.",
    pet: "Whiskers, Siamese Cat",
  },
  {
    quote: "As a vet, I'm impressed by the insights PawTalk provides about pet behavior.",
    author: "Dr. Emily R.",
    pet: "Veterinarian",
  },
]

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 px-8 bg-white">
      <h2 className="text-4xl font-bold text-center mb-12">What Pet Owners Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gray-100 p-6 rounded-lg shadow-lg relative"
          >
            <Quote className="w-8 h-8 absolute top-4 left-4 text-gray-300" />
            <p className="text-lg mb-4 pt-8">{testimonial.quote}</p>
            <p className="font-bold">{testimonial.author}</p>
            <p className="text-sm text-gray-600">{testimonial.pet}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

