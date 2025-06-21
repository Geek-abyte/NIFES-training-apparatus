import React from 'react'
import Link from 'next/link'
import { ArrowLeft, Calendar, Clock, Target, ArrowRight, PlayCircle, CheckCircle } from 'lucide-react'

export default function LessonsPage() {
  const weeks = [
    {
      week: 1,
      title: "HTML & CSS Foundations",
      subtitle: "Build and style the basic homepage",
      duration: "7 days",
      color: "bg-blue-500",
      borderColor: "border-blue-500",
      bgColor: "bg-blue-50",
      completed: false,
      lessons: [
        { day: 1, title: "HTML Essentials", completed: false },
        { day: 2, title: "CSS Basics", completed: false },
        { day: 3, title: "Flexbox Layout", completed: false }
      ],
      project: "Profile Homepage"
    },
    {
      week: 2,
      title: "JavaScript Basics",
      subtitle: "Add interactivity",
      duration: "7 days",
      color: "bg-yellow-500",
      borderColor: "border-yellow-500",
      bgColor: "bg-yellow-50",
      completed: false,
      lessons: [
        { day: 1, title: "Syntax & Variables", completed: false },
        { day: 2, title: "Events & Functions", completed: false },
        { day: 3, title: "Loops & Objects", completed: false }
      ],
      project: "Interactive About Me"
    },
    {
      week: 3,
      title: "Responsive Design + Git",
      subtitle: "Make the site responsive + deploy it",
      duration: "7 days",
      color: "bg-green-500",
      borderColor: "border-green-500",
      bgColor: "bg-green-50",
      completed: false,
      lessons: [
        { day: 1, title: "Media Queries", completed: false },
        { day: 2, title: "Git & GitHub", completed: false },
        { day: 3, title: "Multi-Page Sites", completed: false }
      ],
      project: "Responsive Multi-Page Portfolio"
    },
    {
      week: 4,
      title: "Forms + Final Project",
      subtitle: "Add a contact form + polish everything",
      duration: "7 days",
      color: "bg-purple-500",
      borderColor: "border-purple-500",
      bgColor: "bg-purple-50",
      completed: false,
      lessons: [
        { day: 1, title: "Forms", completed: false },
        { day: 2, title: "Polish with JS & CSS", completed: false },
        { day: 3, title: "Final Integration", completed: false }
      ],
      project: "Complete Portfolio Website"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link 
            href="/"
            className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-6"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Course Lessons
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Start your web development journey with our structured, hands-on lessons. 
              Each week builds upon the previous, taking you from beginner to portfolio-ready.
            </p>
          </div>
        </div>
      </div>

      {/* Progress Overview */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Your Progress</h2>
            <div className="text-sm text-gray-500">0 of 12 lessons completed</div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div className="bg-primary-600 h-3 rounded-full" style={{ width: '0%' }}></div>
          </div>
          <div className="mt-4 flex justify-between text-sm text-gray-600">
            <span>Just getting started</span>
            <span>Portfolio ready!</span>
          </div>
        </div>

        {/* Weekly Lessons */}
        <div className="space-y-8">
          {weeks.map((week) => (
            <div 
              key={week.week}
              className={`bg-white rounded-2xl shadow-lg overflow-hidden border-l-8 ${week.borderColor}`}
            >
              <div className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-6">
                  <div className="flex items-center space-x-4 mb-4 lg:mb-0">
                    <div className={`${week.color} text-white px-4 py-2 rounded-full font-bold text-lg`}>
                      Week {week.week}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{week.title}</h3>
                      <p className="text-gray-600">{week.subtitle}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1 text-sm text-gray-500">
                      <Clock className="h-4 w-4" />
                      <span>{week.duration}</span>
                    </div>
                    {week.completed ? (
                      <div className="flex items-center space-x-1 text-green-600">
                        <CheckCircle className="h-5 w-5" />
                        <span className="font-medium">Completed</span>
                      </div>
                    ) : (
                      <Link 
                        href={`/lessons/week-${week.week}`}
                        className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center space-x-2"
                      >
                        <PlayCircle className="h-5 w-5" />
                        <span>Start Week</span>
                      </Link>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  {week.lessons.map((lesson) => (
                    <Link
                      key={lesson.day}
                      href={`/lessons/week-${week.week}/day-${lesson.day}`}
                      className={`${week.bgColor} hover:shadow-md rounded-lg p-4 border ${week.borderColor} border-opacity-20 transition-all duration-200 cursor-pointer group`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-4 w-4 text-gray-500" />
                          <span className="font-semibold text-gray-700">Day {lesson.day}</span>
                        </div>
                        {lesson.completed ? (
                          <CheckCircle className="h-5 w-5 text-green-500" />
                        ) : (
                          <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-gray-600 transition-colors" />
                        )}
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-1">{lesson.title}</h4>
                      <p className="text-sm text-gray-600">
                        {lesson.completed ? "Completed" : "Not started"}
                      </p>
                    </Link>
                  ))}
                </div>

                <div className={`${week.bgColor} rounded-lg p-4 border ${week.borderColor} border-opacity-20`}>
                  <div className="flex items-center space-x-2">
                    <Target className="h-5 w-5 text-gray-600" />
                    <span className="font-semibold text-gray-700">Week Project:</span>
                    <span className="text-gray-900 font-medium">{week.project}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Getting Started Guide */}
        <div className="mt-16 bg-gradient-to-r from-primary-600 to-blue-600 rounded-2xl p-8 text-white">
          <h2 className="text-3xl font-bold text-center mb-8">Ready to Get Started?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <PlayCircle className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">1. Start with Week 1</h3>
              <p className="text-blue-100">Begin with HTML & CSS foundations to build your first homepage</p>
            </div>
            <div className="text-center">
              <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">2. Complete Daily Lessons</h3>
              <p className="text-blue-100">Follow along with step-by-step tutorials and practical exercises</p>
            </div>
            <div className="text-center">
              <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">3. Build Your Portfolio</h3>
              <p className="text-blue-100">Apply your learning to create a professional portfolio website</p>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <Link
              href="/lessons/week-1"
              className="bg-white hover:bg-gray-100 text-primary-600 px-8 py-4 rounded-lg text-lg font-semibold inline-flex items-center transition-all duration-300 transform hover:scale-105"
            >
              Begin Your Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
