'use client'

import React from 'react'
import Link from 'next/link'
import { Calendar, Clock, Target, ArrowRight, Globe } from 'lucide-react'

const WeeklyBreakdown = () => {
  const weeks = [
    {
      week: 1,
      title: "HTML & CSS Foundations",
      subtitle: "Build and style the basic homepage",
      duration: "7 days",
      color: "bg-blue-500",
      borderColor: "border-blue-500",
      bgColor: "bg-blue-50",
      days: [
        {
          day: 1,
          topic: "HTML Essentials",
          description: "Tags, elements, structure"
        },
        {
          day: 2,
          topic: "CSS Basics",
          description: "Styling, box model, selectors"
        },
        {
          day: 3,
          topic: "Flexbox Layout",
          description: "Layout with Flexbox"
        }
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
      days: [
        {
          day: 1,
          topic: "Syntax & Variables",
          description: "DOM intro, console.log"
        },
        {
          day: 2,
          topic: "Events & Functions",
          description: "Event listeners, if-else logic"
        },
        {
          day: 3,
          topic: "Loops & Objects",
          description: "Arrays, DOM manipulation"
        }
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
      days: [
        {
          day: 1,
          topic: "Media Queries",
          description: "Mobile responsiveness"
        },
        {
          day: 2,
          topic: "Git & GitHub",
          description: "Push code, deploy site"
        },
        {
          day: 3,
          topic: "Multi-Page Sites",
          description: "Link HTML pages"
        }
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
      days: [
        {
          day: 1,
          topic: "Forms",
          description: "Input, validation"
        },
        {
          day: 2,
          topic: "Polish with JS & CSS",
          description: "Validation, transitions"
        },
        {
          day: 3,
          topic: "Final Integration",
          description: "Review, deploy"
        }
      ],
      project: "Complete Portfolio Website"
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Weekly Breakdown
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A structured 4-week journey that takes you from complete beginner to confident web developer.
          </p>
        </div>

        <div className="space-y-8">
          {weeks.map((week, index) => (
            <div 
              key={week.week}
              className={`bg-white rounded-2xl shadow-lg overflow-hidden border-l-8 ${week.borderColor} card-hover`}
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
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{week.duration}</span>
                    </div>
                    <Link 
                      href={`/lessons/week-${week.week}`}
                      className="flex items-center space-x-1 text-primary-600 hover:text-primary-700 font-medium"
                    >
                      <span>Start Week</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  {week.days.map((day, dayIndex) => (
                    <div 
                      key={dayIndex}
                      className={`${week.bgColor} rounded-lg p-4 border ${week.borderColor} border-opacity-20`}
                    >
                      <div className="flex items-center space-x-2 mb-2">
                        <Calendar className="h-4 w-4 text-gray-500" />
                        <span className="font-semibold text-gray-700">Day {day.day}</span>
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-1">{day.topic}</h4>
                      <p className="text-sm text-gray-600">{day.description}</p>
                    </div>
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

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Final Deliverables</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center">
                <div className="bg-white bg-opacity-20 rounded-full p-3 mb-3">
                  <Globe className="h-6 w-6" />
                </div>
                <h4 className="font-semibold mb-2">Hosted Portfolio</h4>
                <p className="text-sm opacity-90">Live responsive portfolio website</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-white bg-opacity-20 rounded-full p-3 mb-3">
                  <Target className="h-6 w-6" />
                </div>
                <h4 className="font-semibold mb-2">Core Skills</h4>
                <p className="text-sm opacity-90">HTML, CSS, JS, Git mastery</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-white bg-opacity-20 rounded-full p-3 mb-3">
                  <ArrowRight className="h-6 w-6" />
                </div>
                <h4 className="font-semibold mb-2">Career Ready</h4>
                <p className="text-sm opacity-90">Confident foundation in web development</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WeeklyBreakdown
