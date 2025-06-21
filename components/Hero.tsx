'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowRight, Play, CheckCircle, Clock, Users } from 'lucide-react'

const Hero = () => {
  const features = [
    'Complete 4-week structured course',
    'Hands-on project-based learning',
    'Build a professional portfolio',
    'Expert guidance and support'
  ]

  return (
    <section className="relative bg-gradient-to-br from-primary-50 to-blue-100 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="text-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Master <span className="gradient-text">Web Development</span>
              <br />in Just 4 Weeks
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Transform from complete beginner to confident web developer. Build your own 
              professional portfolio website while learning HTML, CSS, JavaScript, and modern 
              development practices.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                href="/lessons"
                className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg text-lg font-semibold flex items-center justify-center transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Start Learning Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              
              <Link
                href="/curriculum"
                className="border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold flex items-center justify-center transition-all duration-300"
              >
                <Play className="mr-2 h-5 w-5" />
                View Curriculum
              </Link>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto mb-16">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-sm"
                >
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Clock className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">4 Weeks</h3>
                <p className="text-gray-600">Complete course duration</p>
              </div>
              
              <div className="text-center">
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Users className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Beginner-Friendly</h3>
                <p className="text-gray-600">No prior experience needed</p>
              </div>
              
              <div className="text-center">
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <CheckCircle className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Portfolio Ready</h3>
                <p className="text-gray-600">Build real projects</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
