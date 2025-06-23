'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Clock, Target, CheckCircle, Code, Palette, Calendar, Play } from 'lucide-react'

export default function Week1() {
  const days = [
    {
      day: 1,
      title: "HTML Essentials",
      description: "Learn HTML structure, tags, and semantic elements",
      duration: "45 min",
      topics: ["HTML Structure", "Common Tags", "Semantic Elements", "Lists & Links"],
      isAvailable: true
    },
    {
      day: 2,
      title: "CSS Basics",
      description: "Style your HTML with CSS fundamentals",
      duration: "60 min",
      topics: ["CSS Syntax", "Box Model", "Typography", "Colors & Backgrounds"],
      isAvailable: true
    },
    {
      day: 3,
      title: "Flexbox Layout",
      description: "Create responsive layouts with Flexbox",
      duration: "75 min",
      topics: ["Flexbox Container", "Flex Items", "Alignment", "Responsive Design"],
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
              <div className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                Week 1
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Week Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
            <Palette className="h-8 w-8 text-blue-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Week 1: HTML & CSS Foundations
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Start your web development journey! Learn the building blocks of the web - HTML for structure 
            and CSS for beautiful styling. Build your first professional portfolio.
          </p>
        </div>

        {/* Week Overview */}
        <div className="bg-blue-50 rounded-lg p-6 mb-8 border border-blue-200">
          <h2 className="text-xl font-semibold text-blue-900 mb-4 flex items-center">
            <Target className="h-5 w-5 mr-2" />
            Week 1 Learning Goals
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <ul className="space-y-2">
              <li className="flex items-start space-x-2">
                <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <span className="text-blue-800">Understand HTML document structure and syntax</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <span className="text-blue-800">Master common HTML tags and semantic elements</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <span className="text-blue-800">Learn CSS fundamentals and the box model</span>
              </li>
            </ul>
            <ul className="space-y-2">
              <li className="flex items-start space-x-2">
                <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <span className="text-blue-800">Create responsive layouts with Flexbox</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <span className="text-blue-800">Style typography and colors professionally</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <span className="text-blue-800">Build your first styled portfolio homepage</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Week Project */}
        <div className="bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg p-8 mb-8 text-white">
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <Code className="h-6 w-6 mr-2" />
            Week 1 Project: Profile Homepage
          </h2>
          <p className="text-blue-50 mb-6">
            Create a well-structured, styled personal homepage using HTML and CSS with flexbox layout:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-200 rounded-full"></div>
                <span>Personal introduction section</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-200 rounded-full"></div>
                <span>Education and experience</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-200 rounded-full"></div>
                <span>Skills and interests showcase</span>
              </li>
            </ul>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-200 rounded-full"></div>
                <span>Professional styling and typography</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-200 rounded-full"></div>
                <span>Responsive flexbox layout</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-200 rounded-full"></div>
                <span>Clean, semantic HTML structure</span>
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
                    <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full">
                      <Calendar className="h-6 w-6 text-blue-600" />
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
                        className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
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
                      href={`/lessons/week-1/day-${day.day}`}
                      className="inline-flex items-center space-x-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors font-medium"
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
          <h2 className="text-2xl font-bold text-gray-900 mb-4">By the End of Week 1</h2>
          <p className="text-gray-700 mb-6">
            You'll have a solid foundation in web development fundamentals and your first 
            professional-looking portfolio homepage that showcases your new skills.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-3">
                <Code className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">HTML Mastery</h3>
              <p className="text-sm text-gray-600">Create semantic, well-structured web pages</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-indigo-100 rounded-full mb-3">
                <Palette className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">CSS Styling</h3>
              <p className="text-sm text-gray-600">Design beautiful, professional layouts</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-3">
                <Target className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Flexbox Layout</h3>
              <p className="text-sm text-gray-600">Build responsive, flexible page layouts</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-12">
          <Link
            href="/lessons"
            className="flex items-center space-x-2 text-gray-600 hover:text-gray-800"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>All Lessons</span>
          </Link>
          
          <Link
            href="/lessons/week-1/day-1"
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center space-x-2 transition-colors"
          >
            <span>Start Day 1</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
