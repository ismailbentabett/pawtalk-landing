"use client"

import useEmblaCarousel from "embla-carousel-react"
import { motion } from "framer-motion"
import Image from "next/image"
import * as React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Section } from "@/components/ui/section"

const testimonials = [
  {
    content:
      "Thanks to PawTalk, I found my perfect companion! The process was so smooth, and I loved being able to chat with the shelter directly.",
    author: {
      name: "Sarah Johnson",
      role: "Happy Pet Parent",
      avatar: "/placeholder.svg",
    },
  },
  {
    content:
      "PawTalk has revolutionized how we connect with potential adopters. Our adoption rates have increased significantly!",
    author: {
      name: "Mike Chen",
      role: "Shelter Manager",
      avatar: "/placeholder.svg",
    },
  },
  {
    content:
      "The matching algorithm is incredible! It helped me find a pet that perfectly fits my lifestyle and personality.",
    author: {
      name: "Emily Rodriguez",
      role: "Pet Parent",
      avatar: "/placeholder.svg",
    },
  },
  {
    content:
      "I was hesitant about adopting at first, but PawTalk made the process so easy and transparent. Now I can't imagine life without my furry friend!",
    author: {
      name: "David Kim",
      role: "First-time Pet Parent",
      avatar: "/placeholder.svg",
    },
  },
]

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
  })

  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <Section id="testimonials" className=" mx-auto max-w-7xl sm:px-6 lg:px-8 bg-muted/50">
      <div className="text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold tracking-tight"
        >
          Success Stories
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-4 text-lg text-muted-foreground"
        >
          Hear from our happy pet parents and shelter partners
        </motion.p>
      </div>
      <div className="mt-16">
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-8 p-1">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="min-w-[300px] sm:min-w-[400px]"
                >
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="relative h-10 w-10 rounded-full overflow-hidden">
                          <Image
                            src={testimonial.author.avatar}
                            alt={testimonial.author.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <div className="font-semibold">
                            {testimonial.author.name}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {testimonial.author.role}
                          </div>
                        </div>
                      </div>
                      <p className="text-muted-foreground">
                        {testimonial.content}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full"
            onClick={scrollPrev}
          >
            ←
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full"
            onClick={scrollNext}
          >
            →
          </Button>
        </div>
      </div>
    </Section>
  )
}

