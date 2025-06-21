'use client'

import React from 'react'
import { Star, Quote } from 'lucide-react'

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Frontend Developer",
      image: "/api/placeholder/64/64",
      rating: 5,
      text: "This course completely transformed my career! I went from knowing nothing about web development to landing my first developer job in just 3 months after completing the course."
    },
    {
      name: "Mike Chen",
      role: "Freelance Web Developer",
      image: "/api/placeholder/64/64",
      rating: 5,
      text: "The step-by-step approach and hands-on projects made learning so much easier. The portfolio I built during the course still showcases my work today!"
    },
    {
      name: "Emily Rodriguez",
      role: "Career Changer",
      image: "/api/placeholder/64/64",
      rating: 5,
      text: "I was intimidated by coding before this course. The instructors made everything so clear and approachable. Now I'm confident building websites from scratch!"
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Students Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of successful graduates who've transformed their careers through our program.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-2xl p-8 relative card-hover"
            >
              <Quote className="absolute top-6 right-6 h-8 w-8 text-primary-200" />
              
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
