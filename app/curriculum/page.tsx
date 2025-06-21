import React from 'react'
import Link from 'next/link'
import { ArrowLeft, Clock, CheckCircle, PlayCircle, FileText, Code2 } from 'lucide-react'

export default function CurriculumPage() {
  const weeks = [
    {
      week: 1,
      title: "HTML & CSS Foundations",
      subtitle: "Build and style the basic homepage",
      color: "bg-blue-500",
      textColor: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-500",
      lessons: [
        {
          day: 1,
          title: "HTML Essentials",
          topics: [
            "Understanding HTML structure and syntax",
            "Common HTML tags (h1-h6, p, div, span)",
            "Semantic HTML elements (header, main, footer, article, section)",
            "Creating lists (ul, ol, li)",
            "Adding links and images",
            "HTML forms basics"
          ],
          practicalExercise: "Create a basic personal profile page with your bio, education, and interests"
        },
        {
          day: 2,
          title: "CSS Basics",
          topics: [
            "CSS syntax and selectors",
            "The CSS box model (margin, border, padding, content)",
            "Typography and font styling",
            "Colors and backgrounds",
            "Basic positioning (static, relative, absolute)",
            "Display properties (block, inline, inline-block)"
          ],
          practicalExercise: "Style your profile page with colors, fonts, and spacing"
        },
        {
          day: 3,
          title: "Flexbox Layout",
          topics: [
            "Understanding flexbox container and items",
            "Flex direction and wrap",
            "Justify-content and align-items",
            "Flex-grow, flex-shrink, and flex-basis",
            "Creating responsive layouts with flexbox",
            "Common flexbox patterns"
          ],
          practicalExercise: "Convert your profile page to use flexbox for layout"
        }
      ],
      project: {
        name: "Profile Homepage",
        description: "Create a well-structured, styled personal homepage using HTML and CSS with flexbox layout"
      }
    },
    {
      week: 2,
      title: "JavaScript Basics",
      subtitle: "Add interactivity",
      color: "bg-yellow-500",
      textColor: "text-yellow-600",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-500",
      lessons: [
        {
          day: 1,
          title: "Syntax & Variables",
          topics: [
            "JavaScript syntax and basic structure",
            "Variables (let, const, var)",
            "Data types (string, number, boolean, array, object)",
            "Introduction to the DOM",
            "Console.log for debugging",
            "Basic operators and expressions"
          ],
          practicalExercise: "Add interactive console messages and dynamic content updates"
        },
        {
          day: 2,
          title: "Events & Functions",
          topics: [
            "Function declaration and expressions",
            "Parameters and return values",
            "Event listeners (click, hover, submit)",
            "If-else conditional logic",
            "Handling user interactions",
            "Basic form validation"
          ],
          practicalExercise: "Add interactive buttons and form validation to your page"
        },
        {
          day: 3,
          title: "Loops & Objects",
          topics: [
            "For loops and while loops",
            "Array methods (forEach, map, filter)",
            "Working with objects",
            "DOM manipulation (querySelector, innerHTML)",
            "Creating dynamic content",
            "Event delegation"
          ],
          practicalExercise: "Create dynamic content sections that update based on user interaction"
        }
      ],
      project: {
        name: "Interactive About Me",
        description: "Enhance your homepage with JavaScript interactivity, including dynamic content and user interactions"
      }
    },
    {
      week: 3,
      title: "Responsive Design + Git",
      subtitle: "Make the site responsive + deploy it",
      color: "bg-green-500",
      textColor: "text-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-500",
      lessons: [
        {
          day: 1,
          title: "Media Queries",
          topics: [
            "Understanding responsive design principles",
            "Mobile-first approach",
            "CSS media queries syntax",
            "Breakpoints for different devices",
            "Responsive typography and images",
            "Testing responsive designs"
          ],
          practicalExercise: "Make your website responsive across mobile, tablet, and desktop"
        },
        {
          day: 2,
          title: "Git & GitHub",
          topics: [
            "Version control concepts",
            "Git initialization and basic commands",
            "Staging and committing changes",
            "GitHub account setup",
            "Pushing code to repositories",
            "GitHub Pages deployment"
          ],
          practicalExercise: "Deploy your website live using GitHub Pages"
        },
        {
          day: 3,
          title: "Multi-Page Sites",
          topics: [
            "Creating multiple HTML pages",
            "Navigation between pages",
            "Consistent styling across pages",
            "Organizing CSS and JavaScript files",
            "File structure best practices",
            "SEO basics"
          ],
          practicalExercise: "Expand your site to include About, Projects, and Contact pages"
        }
      ],
      project: {
        name: "Responsive Multi-Page Portfolio",
        description: "Create a fully responsive, multi-page portfolio website deployed live on GitHub Pages"
      }
    },
    {
      week: 4,
      title: "Forms + Final Project",
      subtitle: "Add a contact form + polish everything",
      color: "bg-purple-500",
      textColor: "text-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-500",
      lessons: [
        {
          day: 1,
          title: "Forms",
          topics: [
            "HTML form elements (input, textarea, select)",
            "Form validation with HTML5",
            "JavaScript form validation",
            "Handling form submissions",
            "Form styling and UX",
            "Accessibility considerations"
          ],
          practicalExercise: "Create a fully functional contact form with validation"
        },
        {
          day: 2,
          title: "Polish with JS & CSS",
          topics: [
            "Advanced CSS animations and transitions",
            "JavaScript for enhanced UX",
            "Code organization and best practices",
            "Performance optimization",
            "Cross-browser compatibility",
            "Final testing and debugging"
          ],
          practicalExercise: "Add animations, transitions, and polish to your entire portfolio"
        },
        {
          day: 3,
          title: "Final Integration",
          topics: [
            "Project review and code cleanup",
            "Final deployment and testing",
            "Portfolio presentation tips",
            "Next steps in web development",
            "Building your developer brand",
            "Career guidance and resources"
          ],
          practicalExercise: "Final portfolio review, optimization, and presentation preparation"
        }
      ],
      project: {
        name: "Complete Portfolio Website",
        description: "A polished, professional portfolio website with contact form, ready for job applications"
      }
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
              Complete Course Curriculum
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A comprehensive 4-week journey from beginner to confident web developer. 
              Build real projects while mastering HTML, CSS, JavaScript, and deployment.
            </p>
          </div>
        </div>
      </div>

      {/* Course Overview Stats */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-lg p-6 text-center shadow-sm">
            <Clock className="h-8 w-8 text-primary-600 mx-auto mb-3" />
            <div className="text-2xl font-bold text-gray-900">4 Weeks</div>
            <div className="text-gray-600">Total Duration</div>
          </div>
          <div className="bg-white rounded-lg p-6 text-center shadow-sm">
            <FileText className="h-8 w-8 text-primary-600 mx-auto mb-3" />
            <div className="text-2xl font-bold text-gray-900">12 Lessons</div>
            <div className="text-gray-600">Step-by-step</div>
          </div>
          <div className="bg-white rounded-lg p-6 text-center shadow-sm">
            <Code2 className="h-8 w-8 text-primary-600 mx-auto mb-3" />
            <div className="text-2xl font-bold text-gray-900">4 Projects</div>
            <div className="text-gray-600">Hands-on builds</div>
          </div>
          <div className="bg-white rounded-lg p-6 text-center shadow-sm">
            <CheckCircle className="h-8 w-8 text-primary-600 mx-auto mb-3" />
            <div className="text-2xl font-bold text-gray-900">1 Portfolio</div>
            <div className="text-gray-600">Career ready</div>
          </div>
        </div>

        {/* Weekly Breakdown */}
        <div className="space-y-8">
          {weeks.map((week) => (
            <div key={week.week} className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className={`${week.color} text-white p-6`}>
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-bold mb-2">Week {week.week}: {week.title}</h2>
                    <p className="text-blue-100">{week.subtitle}</p>
                  </div>
                  <Link
                    href={`/lessons/week-${week.week}`}
                    className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center space-x-2"
                  >
                    <PlayCircle className="h-5 w-5" />
                    <span>Start Week</span>
                  </Link>
                </div>
              </div>

              <div className="p-6">
                <div className="grid gap-6">
                  {week.lessons.map((lesson) => (
                    <div key={lesson.day} className={`${week.bgColor} rounded-lg p-6 border ${week.borderColor} border-opacity-20`}>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        Day {lesson.day}: {lesson.title}
                      </h3>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-gray-700 mb-3">Learning Topics:</h4>
                          <ul className="space-y-2">
                            {lesson.topics.map((topic, index) => (
                              <li key={index} className="flex items-start space-x-2">
                                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-600 text-sm">{topic}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-gray-700 mb-3">Practical Exercise:</h4>
                          <div className={`${week.textColor} font-medium text-sm leading-relaxed`}>
                            {lesson.practicalExercise}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-6 border-l-4 border-gray-400">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Week Project: {week.project.name}</h3>
                    <p className="text-gray-700">{week.project.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Final Deliverables */}
        <div className="mt-16 bg-gradient-to-r from-primary-600 to-blue-600 rounded-2xl p-8 text-white">
          <h2 className="text-3xl font-bold text-center mb-8">Final Deliverables</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Hosted Responsive Portfolio</h3>
              <p className="text-blue-100">A live, professional portfolio website showcasing your skills and projects</p>
            </div>
            <div className="text-center">
              <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Code2 className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Understanding of HTML, CSS, JS, Git</h3>
              <p className="text-blue-100">Solid foundation in core web development technologies</p>
            </div>
            <div className="text-center">
              <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <PlayCircle className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Confident Foundation</h3>
              <p className="text-blue-100">Ready to continue learning advanced topics and frameworks</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/lessons"
            className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg text-lg font-semibold inline-flex items-center transition-all duration-300 transform hover:scale-105"
          >
            Start Your Journey Today
            <PlayCircle className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  )
}
