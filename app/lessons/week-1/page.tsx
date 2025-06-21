import React from 'react'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Calendar, Clock, Target, PlayCircle, CheckCircle } from 'lucide-react'

export default function Week1() {
  const lessons = [
    {
      day: 1,
      title: "HTML Essentials",
      description: "Learn HTML structure, tags, and semantic elements",
      duration: "45 mins",
      topics: ["HTML Structure", "Common Tags", "Semantic Elements", "Lists & Links"],
      completed: false
    },
    {
      day: 2,
      title: "CSS Basics",
      description: "Style your HTML with CSS fundamentals",
      duration: "60 mins",
      topics: ["CSS Syntax", "Box Model", "Typography", "Colors & Backgrounds"],
      completed: false
    },
    {
      day: 3,
      title: "Flexbox Layout",
      description: "Create responsive layouts with Flexbox",
      duration: "75 mins",
      topics: ["Flexbox Container", "Flex Items", "Alignment", "Responsive Design"],
      completed: false
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link 
            href="/lessons"
            className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-6"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Lessons
          </Link>
          
          <div className="flex items-center space-x-4 mb-6">
            <div className="bg-blue-500 text-white px-4 py-2 rounded-full font-bold text-lg">
              Week 1
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                HTML & CSS Foundations
              </h1>
              <p className="text-gray-600">Build and style the basic homepage</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
              <div className="flex items-center space-x-2 mb-2">
                <Clock className="h-5 w-5 text-blue-600" />
                <span className="font-semibold text-blue-900">Duration</span>
              </div>
              <p className="text-blue-800">7 days (3 lessons)</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
              <div className="flex items-center space-x-2 mb-2">
                <Target className="h-5 w-5 text-blue-600" />
                <span className="font-semibold text-blue-900">Goal</span>
              </div>
              <p className="text-blue-800">Create a styled profile homepage</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
              <div className="flex items-center space-x-2 mb-2">
                <CheckCircle className="h-5 w-5 text-blue-600" />
                <span className="font-semibold text-blue-900">Progress</span>
              </div>
              <p className="text-blue-800">0 of 3 lessons completed</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Week Overview */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Week 1 Overview</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">What You'll Learn</h3>
              <ul className="space-y-2">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">HTML document structure and syntax</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Common HTML tags and semantic elements</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">CSS fundamentals and the box model</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Flexbox for responsive layouts</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Typography and color styling</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Week Project</h3>
              <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                <h4 className="font-semibold text-blue-900 mb-2">Profile Homepage</h4>
                <p className="text-blue-800 mb-4">
                  Create a well-structured, styled personal homepage using HTML and CSS with flexbox layout.
                </p>
                <div className="text-sm text-blue-700">
                  <strong>Features to include:</strong>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Personal introduction section</li>
                    <li>Education and experience</li>
                    <li>Skills and interests</li>
                    <li>Professional styling</li>
                    <li>Responsive layout</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Daily Lessons */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-900">Daily Lessons</h2>
          
          {lessons.map((lesson) => (
            <div key={lesson.day} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-6">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between">
                  <div className="flex items-start space-x-4 mb-4 lg:mb-0">
                    <div className="bg-blue-500 text-white px-3 py-1 rounded-full font-bold text-sm">
                      Day {lesson.day}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{lesson.title}</h3>
                      <p className="text-gray-600 mb-3">{lesson.description}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-3">
                        {lesson.topics.map((topic, index) => (
                          <span 
                            key={index}
                            className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
                          >
                            {topic}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>{lesson.duration}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>Week 1</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    {lesson.completed ? (
                      <div className="flex items-center space-x-2 text-green-600">
                        <CheckCircle className="h-5 w-5" />
                        <span className="font-medium">Completed</span>
                      </div>
                    ) : (
                      <Link
                        href={`/lessons/week-1/day-${lesson.day}`}
                        className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center space-x-2"
                      >
                        <PlayCircle className="h-5 w-5" />
                        <span>Start Lesson</span>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="mt-12 flex justify-between items-center">
          <Link
            href="/lessons"
            className="flex items-center space-x-2 text-gray-600 hover:text-gray-800"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>All Lessons</span>
          </Link>
          
          <Link
            href="/lessons/week-2"
            className="flex items-center space-x-2 text-primary-600 hover:text-primary-700"
          >
            <span>Next: Week 2 - JavaScript Basics</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Getting Started Guide */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
          <h2 className="text-2xl font-bold text-center mb-6">Ready to Start Week 1?</h2>
          <div className="text-center">
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Begin your web development journey with HTML and CSS fundamentals. 
              By the end of this week, you'll have created your first styled webpage!
            </p>
            <Link
              href="/lessons/week-1/day-1"
              className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold inline-flex items-center transition-all duration-300 transform hover:scale-105"
            >
              Start Day 1: HTML Essentials
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
