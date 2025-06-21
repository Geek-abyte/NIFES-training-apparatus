'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Clock, Target, CheckCircle, Code, Award, Calendar, Play } from 'lucide-react'

export default function Week4() {
  const days = [
    {
      day: 1,
      title: "Forms & User Input",
      description: "Create interactive contact forms with validation and user feedback",
      duration: "85 min",
      topics: ["Form Elements", "Input Validation", "User Experience", "Accessibility"],
      isAvailable: true
    },
    {
      day: 2,
      title: "Polish with Advanced CSS & JS", 
      description: "Add professional animations, transitions, and advanced interactions",
      duration: "90 min",
      topics: ["CSS Animations", "Smooth Transitions", "Advanced JavaScript", "Performance"],
      isAvailable: true
    },
    {
      day: 3,
      title: "Final Integration & Deployment",
      description: "Complete your portfolio, optimize everything, and prepare for the real world",
      duration: "75 min", 
      topics: ["Code Review", "Optimization", "Testing", "Career Preparation"],
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
              <div className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                Week 4
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Week Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
            <Award className="h-8 w-8 text-purple-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Week 4: Forms & Final Polish
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The final stretch! Add professional forms, polish your design with advanced CSS and JavaScript, 
            and complete your portfolio ready for the professional world.
          </p>
        </div>

        {/* Week Overview */}
        <div className="bg-purple-50 rounded-lg p-6 mb-8 border border-purple-200">
          <h2 className="text-xl font-semibold text-purple-900 mb-4 flex items-center">
            <Target className="h-5 w-5 mr-2" />
            Week 4 Learning Goals
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <ul className="space-y-2">
              <li className="flex items-start space-x-2">
                <CheckCircle className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                <span className="text-purple-800">Build professional contact forms with validation</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                <span className="text-purple-800">Master advanced CSS animations and transitions</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                <span className="text-purple-800">Implement advanced JavaScript interactions</span>
              </li>
            </ul>
            <ul className="space-y-2">
              <li className="flex items-start space-x-2">
                <CheckCircle className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                <span className="text-purple-800">Optimize performance and user experience</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                <span className="text-purple-800">Complete a portfolio ready for employers</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                <span className="text-purple-800">Prepare for your web development career</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Week Project */}
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg p-8 mb-8 text-white">
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <Award className="h-6 w-6 mr-2" />
            Week 4 Project: Complete Portfolio Website
          </h2>
          <p className="text-purple-50 mb-6">
            Put the finishing touches on your portfolio and make it truly professional! This is what you'll show to potential employers.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-200 rounded-full"></div>
                <span>Functional contact form with validation</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-200 rounded-full"></div>
                <span>Smooth animations and micro-interactions</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-200 rounded-full"></div>
                <span>Professional design and typography</span>
              </li>
            </ul>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-200 rounded-full"></div>
                <span>Optimized performance and loading</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-200 rounded-full"></div>
                <span>Cross-browser compatibility</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-200 rounded-full"></div>
                <span>Ready for job applications!</span>
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
                    <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-full">
                      <Calendar className="h-6 w-6 text-purple-600" />
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
                        className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm"
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
                      href={`/lessons/week-4/day-${day.day}`}
                      className="inline-flex items-center space-x-2 bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-lg transition-colors font-medium"
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

        {/* Course Completion */}
        <div className="bg-gradient-to-r from-emerald-500 to-blue-500 rounded-lg p-8 mt-8 text-white">
          <h2 className="text-2xl font-bold mb-4">🎉 Course Completion</h2>
          <p className="text-emerald-50 mb-6">
            By the end of Week 4, you'll have completed the entire NIFES Web Development Training Program 
            and have a professional portfolio that showcases your skills to potential employers!
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-emerald-100 mb-3">What You'll Have Built:</h3>
              <ul className="space-y-2 text-emerald-50">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4" />
                  <span>Complete responsive portfolio website</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4" />
                  <span>Interactive contact form</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4" />
                  <span>Professional animations and effects</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4" />
                  <span>Live deployed website</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-emerald-100 mb-3">Skills You'll Master:</h3>
              <ul className="space-y-2 text-emerald-50">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4" />
                  <span>HTML, CSS, and JavaScript fundamentals</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4" />
                  <span>Responsive design and mobile-first approach</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4" />
                  <span>Version control with Git and GitHub</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4" />
                  <span>Professional development workflow</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Week Summary */}
        <div className="bg-white rounded-lg shadow-lg p-8 mt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Journey to Success</h2>
          <p className="text-gray-700 mb-6">
            Week 4 is where everything comes together. You'll add the final professional touches that 
            separate beginner websites from professional portfolios that impress employers.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-3">
                <Code className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Professional Forms</h3>
              <p className="text-sm text-gray-600">Contact forms that actually work and provide great user experience</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-3">
                <Award className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Advanced Polish</h3>
              <p className="text-sm text-gray-600">Animations, transitions, and interactions that wow users</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 rounded-full mb-3">
                <Target className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Career Ready</h3>
              <p className="text-sm text-gray-600">A portfolio that opens doors to web development opportunities</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-12">
          <Link
            href="/lessons/week-3/day-3"
            className="flex items-center space-x-2 text-gray-600 hover:text-gray-800"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Previous: Week 3 - Multi-Page Navigation</span>
          </Link>
          
          <Link
            href="/lessons/week-4/day-1"
            className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-lg flex items-center space-x-2 transition-colors"
          >
            <span>Start Final Week</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
