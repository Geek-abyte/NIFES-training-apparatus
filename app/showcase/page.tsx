import React from 'react'
import Link from 'next/link'
import { ArrowLeft, ExternalLink, Github, Star, Clock, User, Code, Eye } from 'lucide-react'

export default function ShowcasePage() {
  const projects = [
    {
      id: 1,
      title: "Sarah's Portfolio",
      student: "Sarah Johnson",
      week: "Week 4",
      category: "Complete Portfolio",
      description: "A beautiful, responsive portfolio showcasing web development skills with interactive elements and modern design.",
      image: "/api/placeholder/400/300",
      liveUrl: "#",
      githubUrl: "#",
      technologies: ["HTML5", "CSS3", "JavaScript", "Flexbox", "Grid"],
      features: ["Responsive Design", "Contact Form", "Smooth Animations", "Mobile-First"],
      rating: 4.9,
      completionTime: "4 weeks"
    },
    {
      id: 2,
      title: "Mike's Business Landing",
      student: "Mike Chen",
      week: "Week 3",
      category: "Multi-Page Site",
      description: "A professional business landing page with multiple sections and responsive navigation.",
      image: "/api/placeholder/400/300",
      liveUrl: "#",
      githubUrl: "#",
      technologies: ["HTML5", "CSS3", "JavaScript", "Flexbox"],
      features: ["Multi-page Navigation", "Responsive Layout", "Contact Section"],
      rating: 4.8,
      completionTime: "3 weeks"
    },
    {
      id: 3,
      title: "Emily's Photography Site",
      student: "Emily Rodriguez",
      week: "Week 4",
      category: "Creative Portfolio",
      description: "A stunning photography portfolio with image galleries and elegant typography.",
      image: "/api/placeholder/400/300",
      liveUrl: "#",
      githubUrl: "#",
      technologies: ["HTML5", "CSS3", "JavaScript", "CSS Grid"],
      features: ["Image Gallery", "Lightbox Effect", "Typography Focus", "Dark Mode"],
      rating: 4.9,
      completionTime: "4 weeks"
    },
    {
      id: 4,
      title: "Alex's Tech Blog",
      student: "Alex Thompson",
      week: "Week 4",
      category: "Blog Portfolio",
      description: "A technical blog site with article layouts and interactive features.",
      image: "/api/placeholder/400/300",
      liveUrl: "#",
      githubUrl: "#",
      technologies: ["HTML5", "CSS3", "JavaScript", "Flexbox"],
      features: ["Blog Layout", "Search Function", "Categories", "Comments"],
      rating: 4.7,
      completionTime: "4 weeks"
    },
    {
      id: 5,
      title: "Lisa's Creative Hub",
      student: "Lisa Park",
      week: "Week 3",
      category: "Creative Portfolio",
      description: "An artistic portfolio showcasing creative projects with unique layouts.",
      image: "/api/placeholder/400/300",
      liveUrl: "#",
      githubUrl: "#",
      technologies: ["HTML5", "CSS3", "JavaScript", "CSS Grid"],
      features: ["Creative Layouts", "Animation Effects", "Portfolio Gallery"],
      rating: 4.8,
      completionTime: "3 weeks"
    },
    {
      id: 6,
      title: "David's Developer Portfolio",
      student: "David Kim",
      week: "Week 4",
      category: "Developer Portfolio",
      description: "A comprehensive developer portfolio with project showcases and skills sections.",
      image: "/api/placeholder/400/300",
      liveUrl: "#",
      githubUrl: "#",
      technologies: ["HTML5", "CSS3", "JavaScript", "Flexbox", "Grid"],
      features: ["Project Showcase", "Skills Chart", "Contact Form", "Resume Download"],
      rating: 4.9,
      completionTime: "4 weeks"
    }
  ]

  const categories = ["All", "Complete Portfolio", "Multi-Page Site", "Creative Portfolio", "Developer Portfolio", "Blog Portfolio"]

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
              Student Showcase
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore amazing projects created by our students. These portfolios represent the culmination 
              of 4 weeks of intensive learning and hands-on practice.
            </p>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-lg p-6 text-center shadow-sm">
            <div className="text-3xl font-bold text-primary-600 mb-2">150+</div>
            <div className="text-gray-600">Student Projects</div>
          </div>
          <div className="bg-white rounded-lg p-6 text-center shadow-sm">
            <div className="text-3xl font-bold text-primary-600 mb-2">4.8</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
          <div className="bg-white rounded-lg p-6 text-center shadow-sm">
            <div className="text-3xl font-bold text-primary-600 mb-2">95%</div>
            <div className="text-gray-600">Completion Rate</div>
          </div>
          <div className="bg-white rounded-lg p-6 text-center shadow-sm">
            <div className="text-3xl font-bold text-primary-600 mb-2">100%</div>
            <div className="text-gray-600">Live Deployed</div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  category === "All" 
                    ? "bg-primary-600 text-white" 
                    : "bg-white text-gray-600 hover:bg-gray-100 border"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow card-hover">
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-primary-100 to-blue-100">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-primary-600 text-6xl font-bold opacity-20">
                    {project.title.charAt(0)}
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-white bg-opacity-90 text-primary-600 px-2 py-1 rounded-full text-xs font-medium">
                    {project.week}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="flex items-center space-x-1 bg-white bg-opacity-90 px-2 py-1 rounded-full">
                    <Star className="h-3 w-3 text-yellow-400 fill-current" />
                    <span className="text-xs font-medium">{project.rating}</span>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{project.title}</h3>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <User className="h-4 w-4" />
                      <span>{project.student}</span>
                    </div>
                  </div>
                  <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                    {project.category}
                  </span>
                </div>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <span key={index} className="bg-primary-100 text-primary-700 text-xs px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-gray-500 text-xs px-2 py-1">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="text-xs text-gray-600 flex items-center space-x-1">
                        <div className="w-1 h-1 bg-primary-600 rounded-full"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between pt-4 border-t">
                  <div className="flex items-center space-x-2 text-xs text-gray-500">
                    <Clock className="h-3 w-3" />
                    <span>{project.completionTime}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Link
                      href={project.liveUrl}
                      className="bg-primary-600 hover:bg-primary-700 text-white p-2 rounded-lg transition-colors"
                      title="View Live Site"
                    >
                      <Eye className="h-4 w-4" />
                    </Link>
                    <Link
                      href={project.githubUrl}
                      className="bg-gray-600 hover:bg-gray-700 text-white p-2 rounded-lg transition-colors"
                      title="View Code"
                    >
                      <Github className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-primary-600 to-blue-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Create Your Own?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join our next cohort and build a portfolio that showcases your skills. 
            Start your web development journey today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/lessons"
              className="bg-white hover:bg-gray-100 text-primary-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Start Learning Now
            </Link>
            <Link
              href="/curriculum"
              className="border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300"
            >
              View Curriculum
            </Link>
          </div>
        </div>

        {/* Success Stories */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Success Stories</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                  S
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Sarah Johnson</h3>
                <p className="text-primary-600 font-medium mb-3">Now: Frontend Developer at TechCorp</p>
                <p className="text-gray-600 text-sm">
                  "The course gave me the confidence to apply for developer positions. 
                  I landed my dream job just 2 months after completing the program!"
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                  M
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Mike Chen</h3>
                <p className="text-primary-600 font-medium mb-3">Now: Freelance Web Developer</p>
                <p className="text-gray-600 text-sm">
                  "I started my freelance business using the portfolio I built in this course. 
                  Already working with 5 clients!"
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                  E
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Emily Rodriguez</h3>
                <p className="text-primary-600 font-medium mb-3">Now: Full-Stack Developer</p>
                <p className="text-gray-600 text-sm">
                  "This course was the perfect foundation. I've continued learning and 
                  now work as a full-stack developer!"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
