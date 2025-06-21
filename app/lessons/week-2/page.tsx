'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Clock, Target, CheckCircle, Code, Zap, Calendar, Play } from 'lucide-react'

export default function Week2() {
  const days = [
    {
      day: 1,
      title: "JavaScript Syntax & Variables",
      description: "Learn the fundamentals of JavaScript syntax, variables, and DOM manipulation",
      duration: "90 min",
      topics: ["Variables & Data Types", "Basic Operators", "DOM Introduction", "console.log()"],
      isAvailable: true
    },
    {
      day: 2,
      title: "Events & Functions", 
      description: "Master event handling and create interactive functions",
      duration: "75 min",
      topics: ["Event Listeners", "Functions", "If-Else Logic", "User Interactions"],
      isAvailable: true
    },
    {
      day: 3,
      title: "Loops & Objects",
      description: "Work with arrays, loops, and advanced DOM manipulation",
      duration: "85 min", 
      topics: ["Arrays & Loops", "Objects", "DOM Manipulation", "Dynamic Content"],
      isAvailable: true
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link 
              href="/lessons"
              className="inline-flex items-center text-primary-600 hover:text-primary-700"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Lessons
            </Link>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <Clock className="h-4 w-4" />
                <span>7 days</span>
              </div>
              <div className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                Week 2
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Week Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-100 rounded-full mb-4">
            <Zap className="h-8 w-8 text-yellow-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Week 2: JavaScript Basics
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Bring your website to life with JavaScript! Learn the fundamentals of programming 
            and add interactive features to your portfolio.
          </p>
        </div>

        {/* Week Overview */}
        <div className="bg-yellow-50 rounded-lg p-6 mb-8 border border-yellow-200">
          <h2 className="text-xl font-semibold text-yellow-900 mb-4 flex items-center">
            <Target className="h-5 w-5 mr-2" />
            Week 2 Learning Goals
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <ul className="space-y-2">
              <li className="flex items-start space-x-2">
                <CheckCircle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                <span className="text-yellow-800">Understand JavaScript syntax and variables</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                <span className="text-yellow-800">Handle user events and interactions</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                <span className="text-yellow-800">Create dynamic content with DOM manipulation</span>
              </li>
            </ul>
            <ul className="space-y-2">
              <li className="flex items-start space-x-2">
                <CheckCircle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                <span className="text-yellow-800">Work with arrays and objects</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                <span className="text-yellow-800">Build interactive portfolio features</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                <span className="text-yellow-800">Apply programming logic to real projects</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Week Project */}
        <div className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg p-8 mb-8 text-white">
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <Code className="h-6 w-6 mr-2" />
            Week 2 Project: Interactive About Me
          </h2>
          <p className="text-yellow-50 mb-6">
            Transform your static portfolio into an interactive experience! Add dynamic features like:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-yellow-200 rounded-full"></div>
                <span>Interactive navigation menu</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-yellow-200 rounded-full"></div>
                <span>Dynamic skill progress bars</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-yellow-200 rounded-full"></div>
                <span>Theme toggle (light/dark mode)</span>
              </li>
            </ul>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-yellow-200 rounded-full"></div>
                <span>Image slideshow or gallery</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-yellow-200 rounded-full"></div>
                <span>Interactive project cards</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-yellow-200 rounded-full"></div>
                <span>Form validation and feedback</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Daily Lessons */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Daily Lessons</h2>
          
          {days.map((day, index) => (
            <div key={day.day} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-yellow-100 rounded-full">
                      <Calendar className="h-6 w-6 text-yellow-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">
                        Day {day.day}: {day.title}
                      </h3>
                      <p className="text-gray-600">{day.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <Clock className="h-4 w-4" />
                    <span>{day.duration}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Topics Covered:</h4>
                  <div className="flex flex-wrap gap-2">
                    {day.topics.map((topic, topicIndex) => (
                      <span 
                        key={topicIndex}
                        className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                  <div className="flex items-center space-x-2">
                    {day.isAvailable ? (
                      <div className="flex items-center space-x-2 text-green-600">
                        <CheckCircle className="h-4 w-4" />
                        <span className="text-sm font-medium">Available</span>
                      </div>
                    ) : (
                      <div className="flex items-center space-x-2 text-gray-400">
                        <Clock className="h-4 w-4" />
                        <span className="text-sm">Coming Soon</span>
                      </div>
                    )}
                  </div>
                  
                  {day.isAvailable ? (
                    <Link
                      href={`/lessons/week-2/day-${day.day}`}
                      className="inline-flex items-center space-x-2 bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg transition-colors font-medium"
                    >
                      <Play className="h-4 w-4" />
                      <span>Start Lesson</span>
                    </Link>
                  ) : (
                    <button className="inline-flex items-center space-x-2 bg-gray-300 text-gray-500 px-4 py-2 rounded-lg cursor-not-allowed">
                      <Clock className="h-4 w-4" />
                      <span>Coming Soon</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Week Summary */}
        <div className="bg-white rounded-lg shadow-lg p-8 mt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">By the End of Week 2</h2>
          <p className="text-gray-700 mb-6">
            You'll have transformed your static portfolio into an interactive, dynamic website that 
            responds to user interactions and showcases your growing programming skills.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-3">
                <Code className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Programming Logic</h3>
              <p className="text-sm text-gray-600">Understand variables, functions, and control flow</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-3">
                <Zap className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Interactivity</h3>
              <p className="text-sm text-gray-600">Create engaging user experiences with events</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 rounded-full mb-3">
                <Target className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">DOM Mastery</h3>
              <p className="text-sm text-gray-600">Dynamically modify webpage content and style</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-12">
          <Link
            href="/lessons/week-1/day-3"
            className="flex items-center space-x-2 text-gray-600 hover:text-gray-800"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Previous: Week 1 - Flexbox Layout</span>
          </Link>
          
          <Link
            href="/lessons/week-2/day-1"
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg flex items-center space-x-2 transition-colors"
          >
            <span>Start Day 1</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
