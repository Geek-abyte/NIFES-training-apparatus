'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Clock, Target, CheckCircle, Code, Smartphone, Calendar, Play } from 'lucide-react'

export default function Week3() {
  const days = [
    {
      day: 1,
      title: "Media Queries & Responsive Design",
      description: "Make your website look perfect on all devices - mobile, tablet, and desktop",
      duration: "80 min",
      topics: ["Mobile-First Design", "Breakpoints", "Responsive Units", "Flexible Layouts"],
      isAvailable: true
    },
    {
      day: 2,
      title: "Git & GitHub Basics", 
      description: "Learn version control and deploy your website to the world",
      duration: "90 min",
      topics: ["Git Commands", "GitHub Setup", "Repository Management", "Live Deployment"],
      isAvailable: true
    },
    {
      day: 3,
      title: "Multi-Page Navigation",
      description: "Connect multiple HTML pages and create a cohesive website experience",
      duration: "75 min", 
      topics: ["Page Linking", "Navigation Menus", "Site Structure", "SEO Basics"],
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
              <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                Week 3
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Week Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
            <Smartphone className="h-8 w-8 text-green-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Week 3: Responsive Design & Deployment
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Make your website professional and accessible! Learn responsive design, version control with Git, 
            and deploy your portfolio for the world to see.
          </p>
        </div>

        {/* Week Overview */}
        <div className="bg-green-50 rounded-lg p-6 mb-8 border border-green-200">
          <h2 className="text-xl font-semibold text-green-900 mb-4 flex items-center">
            <Target className="h-5 w-5 mr-2" />
            Week 3 Learning Goals
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <ul className="space-y-2">
              <li className="flex items-start space-x-2">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-green-800">Create responsive layouts that work on all devices</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-green-800">Master CSS media queries and breakpoints</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-green-800">Learn Git version control fundamentals</span>
              </li>
            </ul>
            <ul className="space-y-2">
              <li className="flex items-start space-x-2">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-green-800">Deploy your website live on GitHub Pages</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-green-800">Build multi-page website architecture</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-green-800">Understand basic SEO principles</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Week Project */}
        <div className="bg-gradient-to-r from-green-500 to-teal-500 rounded-lg p-8 mb-8 text-white">
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <Code className="h-6 w-6 mr-2" />
            Week 3 Project: Responsive Multi-Page Portfolio
          </h2>
          <p className="text-green-50 mb-6">
            Transform your portfolio into a professional, multi-page website that looks amazing on any device!
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-200 rounded-full"></div>
                <span>Mobile-first responsive design</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-200 rounded-full"></div>
                <span>Separate pages (Home, About, Projects, Contact)</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-200 rounded-full"></div>
                <span>Consistent navigation across pages</span>
              </li>
            </ul>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-200 rounded-full"></div>
                <span>Version controlled with Git</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-200 rounded-full"></div>
                <span>Deployed live on GitHub Pages</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-200 rounded-full"></div>
                <span>SEO optimized and accessible</span>
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
                    <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-full">
                      <Calendar className="h-6 w-6 text-green-600" />
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
                        className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm"
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
                      href={`/lessons/week-3/day-${day.day}`}
                      className="inline-flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors font-medium"
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
          <h2 className="text-2xl font-bold text-gray-900 mb-4">By the End of Week 3</h2>
          <p className="text-gray-700 mb-6">
            You'll have a complete, professional portfolio website that works beautifully on all devices 
            and is live on the internet for potential employers and clients to see.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-3">
                <Smartphone className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Mobile-Ready</h3>
              <p className="text-sm text-gray-600">Your site will look perfect on phones, tablets, and desktops</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-3">
                <Code className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Version Controlled</h3>
              <p className="text-sm text-gray-600">Professional development workflow with Git and GitHub</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 rounded-full mb-3">
                <Target className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Live & Discoverable</h3>
              <p className="text-sm text-gray-600">Deployed online with proper SEO and accessibility</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-12">
          <Link
            href="/lessons/week-2/day-3"
            className="flex items-center space-x-2 text-gray-600 hover:text-gray-800"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Previous: Week 2 - Loops & Objects</span>
          </Link>
          
          <Link
            href="/lessons/week-3/day-1"
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg flex items-center space-x-2 transition-colors"
          >
            <span>Start Day 1</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
