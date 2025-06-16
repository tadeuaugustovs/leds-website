"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"

interface Testimonial {
  name: string
  role: string
  content: string
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[]
}

export default function TestimonialCarousel({ testimonials }: TestimonialCarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const carousel = carouselRef.current
    if (!carousel) return

    const scrollWidth = carousel.scrollWidth
    let scrollPosition = 0
    const speed = 0.8 // Aumentei a velocidade

    const scroll = () => {
      if (!carousel) return

      scrollPosition += speed
      if (scrollPosition >= scrollWidth / 2) {
        scrollPosition = 0
        carousel.scrollLeft = 0
      } else {
        carousel.scrollLeft = scrollPosition
      }
    }

    // Rolar continuamente sem parar no hover
    const animationInterval = setInterval(scroll, 16)

    return () => {
      clearInterval(animationInterval)
    }
  }, [testimonials])

  return (
    <div className="relative overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>

      <div
        ref={carouselRef}
        className="flex overflow-x-auto scrollbar-hide gap-6 py-4 px-2"
        style={{ scrollBehavior: "smooth", WebkitOverflowScrolling: "touch" }}
      >
        {testimonials.map((testimonial, index) => (
          <Card
            key={`testimonial-${index}`}
            className="flex-shrink-0 w-full max-w-md bg-white/80 backdrop-blur-sm border-gray-200/70 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <CardContent className="p-6">
              <p className="text-gray-700 italic mb-4 text-sm leading-relaxed">{testimonial.content}</p>
              <div className="border-t border-gray-200 pt-4">
                <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
              </div>
            </CardContent>
          </Card>
        ))}

        {testimonials.map((testimonial, index) => (
          <Card
            key={`testimonial-duplicate-${index}`}
            className="flex-shrink-0 w-full max-w-md bg-white/80 backdrop-blur-sm border-gray-200/70 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <CardContent className="p-6">
              <p className="text-gray-700 italic mb-4 text-sm leading-relaxed">{testimonial.content}</p>
              <div className="border-t border-gray-200 pt-4">
                <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
