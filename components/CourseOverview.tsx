'use client'

import React from 'react'
import { Code, Palette, Smartphone, GitBranch, Globe, Award } from 'lucide-react'

const CourseOverview = () => {
  const courseFeatures = [
    {
      icon: Code,
      title: 'HTML & CSS Mastery',
      description: 'Learn the building blocks of the web with semantic HTML and modern CSS techniques including Flexbox.',
      color: 'bg-blue-500'
    },
    {
      icon: Palette,
      title: 'JavaScript Fundamentals',
      description: 'Master DOM manipulation, event handling, and interactive web development with JavaScript.',
      color: 'bg-yellow-500'
    },
    {
      icon: Smartphone,
      title: 'Responsive Design',
      description: 'Create websites that look perfect on all devices using media queries and mobile-first approach.',
      color: 'bg-green-500'
    },
    {
      icon: GitBranch,
      title: 'Git & GitHub',
      description: 'Version control your projects and deploy them to the web using Git and GitHub Pages.',
      color: 'bg-purple-500'
    },
    {
      icon: Globe,
      title: 'Live Deployment',
      description: 'Deploy your portfolio website live on the internet for the world to see your work.',
      color: 'bg-red-500'
    },
    {
      icon: Award,
      title: 'Portfolio Project',
      description: 'Build a complete professional portfolio showcasing your skills and projects.',
      color: 'bg-indigo-500'
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What You'll Learn
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive curriculum covers everything you need to become a confident web developer, 
            from the fundamentals to deployment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courseFeatures.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div 
                key={index}
                className="card-hover bg-white border border-gray-200 rounded-xl p-6 shadow-sm"
              >
                <div className={`${feature.color} text-white p-3 rounded-lg inline-block mb-4`}>
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>

        <div className="mt-16 bg-gradient-to-r from-primary-50 to-blue-50 rounded-2xl p-8 md:p-12">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Course Objective
            </h3>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              To teach beginners the foundations of web development (HTML, CSS, JavaScript, Git, basic responsive design) 
              while guiding them to build a <span className="font-semibold text-primary-600">"Personal Portfolio Website"</span> that 
              showcases their profile, projects, and contact form by the end of 4 weeks.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CourseOverview
