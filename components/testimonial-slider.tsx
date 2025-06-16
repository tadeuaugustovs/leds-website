"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import type { Testimonial } from "@/data/testimonials"

interface TestimonialSliderProps {
  testimonials: Testimonial[]
}

export default function TestimonialSlider({ testimonials }: TestimonialSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="min-w-full bg-white/80 backdrop-blur-sm border-gray-200/70 shadow-lg">
              <CardContent className="p-6">
                <p className="italic text-gray-700 mb-4 text-sm leading-relaxed">{testimonial.content}</p>
                <div className="border-t border-gray-200 pt-3">
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="flex justify-between mt-4">
        <Button
          variant="outline"
          size="icon"
          onClick={prevTestimonial}
          className="rounded-full bg-white/80 backdrop-blur-sm border-gray-200/70 shadow-md hover:bg-gray-100"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
        <div className="flex space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full ${index === currentIndex ? "bg-gray-800" : "bg-gray-300"}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
        <Button
          variant="outline"
          size="icon"
          onClick={nextTestimonial}
          className="rounded-full bg-white/80 backdrop-blur-sm border-gray-200/70 shadow-md hover:bg-gray-100"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>
    </div>
  )
}
