'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowRight, Rocket } from 'lucide-react'

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-600 to-blue-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-bounce-subtle inline-block mb-6">
          <Rocket className="h-16 w-16 text-white mx-auto" />
        </div>
        
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Ready to Start Your Journey?
        </h2>
        
        <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
          Join thousands of students who've successfully launched their web development careers. 
          Your portfolio website is just 4 weeks away!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/lessons"
            className="bg-white hover:bg-gray-100 text-primary-600 px-8 py-4 rounded-lg text-lg font-semibold flex items-center justify-center transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Start Learning Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
          
          <Link
            href="/curriculum"
            className="border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-4 rounded-lg text-lg font-semibold flex items-center justify-center transition-all duration-300"
          >
            View Full Curriculum
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">4</div>
            <p className="text-blue-100">Weeks to Mastery</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">100%</div>
            <p className="text-blue-100">Project-Based Learning</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">∞</div>
            <p className="text-blue-100">Career Opportunities</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
