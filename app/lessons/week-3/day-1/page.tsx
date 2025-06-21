'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Clock, Target, CheckCircle, Code, Smartphone, Eye, EyeOff } from 'lucide-react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'

export default function Week3Day1() {
  const [showPreview1, setShowPreview1] = useState(false)
  const [showPreview2, setShowPreview2] = useState(false)

  const mediaQueriesBasics = `/* Mobile-first approach: Start with mobile styles */
/* Default styles (mobile) */
.container {
    width: 100%;
    padding: 1rem;
}

.header {
    font-size: 1.5rem;
    text-align: center;
}

.grid {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

/* Tablet styles (768px and up) */
@media (min-width: 768px) {
    .container {
        max-width: 768px;
        margin: 0 auto;
        padding: 2rem;
    }
    
    .header {
        font-size: 2rem;
        text-align: left;
    }
    
    .grid {
        flex-direction: row;
        flex-wrap: wrap;
    }
    
    .grid-item {
        flex: 1 1 45%;
    }
}

/* Desktop styles (1024px and up) */
@media (min-width: 1024px) {
    .container {
        max-width: 1024px;
        padding: 3rem;
    }
    
    .header {
        font-size: 2.5rem;
    }
    
    .grid-item {
        flex: 1 1 30%;
    }
}

/* Large desktop styles (1200px and up) */
@media (min-width: 1200px) {
    .container {
        max-width: 1200px;
    }
}`

  const responsiveUnits = `/* Responsive units for flexible designs */

/* Relative units - adapt to context */
.responsive-text {
    font-size: 1.2rem;        /* Relative to root font size */
    padding: 1em;             /* Relative to element's font size */
    margin: 2vh 4vw;          /* Viewport height/width units */
    line-height: 1.5;         /* Unitless - relative to font size */
}

/* Viewport units - perfect for responsive design */
.hero-section {
    height: 100vh;            /* Full viewport height */
    width: 100vw;             /* Full viewport width */
    font-size: 4vw;           /* Font scales with viewport width */
    padding: 5vh 5vw;         /* Padding scales with viewport */
}

/* Flexible containers */
.flexible-container {
    width: 90%;               /* Percentage of parent */
    max-width: 1200px;        /* Maximum width for large screens */
    min-width: 320px;         /* Minimum width for small screens */
    margin: 0 auto;           /* Center the container */
}

/* Responsive images */
.responsive-image {
    width: 100%;              /* Fill container width */
    height: auto;             /* Maintain aspect ratio */
    max-width: 600px;         /* Don't exceed original size */
}

/* Fluid typography */
.fluid-text {
    font-size: clamp(1rem, 2.5vw, 2rem);  /* Min, preferred, max */
}`

  const practicalExample = `/* Complete responsive portfolio example */
/* Reset and base styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Arial', sans-serif;
    line-height: 1.6;
    color: #333;
}

/* Mobile-first styles */
.portfolio-container {
    width: 100%;
    padding: 1rem;
}

.header {
    text-align: center;
    margin-bottom: 2rem;
}

.header h1 {
    font-size: 2rem;
    margin-bottom: 0.5rem;
    color: #2563eb;
}

.header p {
    font-size: 1rem;
    color: #666;
}

.section {
    margin-bottom: 3rem;
}

.section h2 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    border-bottom: 2px solid #2563eb;
    padding-bottom: 0.5rem;
}

.skills-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
}

.skill-item {
    background: #f8fafc;
    padding: 1rem;
    border-radius: 8px;
    border-left: 4px solid #2563eb;
}

.projects-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;
}

.project-card {
    background: white;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
}

.project-card:hover {
    transform: translateY(-5px);
}

.project-image {
    width: 100%;
    height: 200px;
    background: linear-gradient(135deg, #667eea, #764ba2);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 1.2rem;
}

.project-content {
    padding: 1.5rem;
}

/* Tablet styles */
@media (min-width: 768px) {
    .portfolio-container {
        max-width: 768px;
        margin: 0 auto;
        padding: 2rem;
    }
    
    .header h1 {
        font-size: 2.5rem;
    }
    
    .skills-grid {
        grid-template-columns: repeat(2, 1fr);
    }
    
    .projects-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

/* Desktop styles */
@media (min-width: 1024px) {
    .portfolio-container {
        max-width: 1024px;
        padding: 3rem;
    }
    
    .header {
        text-align: left;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    
    .header h1 {
        font-size: 3rem;
    }
    
    .skills-grid {
        grid-template-columns: repeat(3, 1fr);
    }
    
    .projects-grid {
        grid-template-columns: repeat(3, 1fr);
    }
    
    .project-image {
        height: 250px;
    }
}

/* Large desktop styles */
@media (min-width: 1200px) {
    .portfolio-container {
        max-width: 1200px;
    }
    
    .skills-grid {
        grid-template-columns: repeat(4, 1fr);
    }
}`

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link 
              href="/lessons/week-3"
              className="inline-flex items-center text-primary-600 hover:text-primary-700"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Week 3
            </Link>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <Clock className="h-4 w-4" />
                <span>80 minutes</span>
              </div>
              <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                Week 3 - Day 1
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Lesson Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
            <Smartphone className="h-8 w-8 text-green-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Media Queries & Responsive Design
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn to create websites that look perfect on every device! Master CSS media queries 
            and responsive design principles to build professional, mobile-first layouts.
          </p>
        </div>

        {/* Learning Objectives */}
        <div className="bg-green-50 rounded-lg p-6 mb-8 border border-green-200">
          <h2 className="text-xl font-semibold text-green-900 mb-4 flex items-center">
            <Target className="h-5 w-5 mr-2" />
            Learning Objectives
          </h2>
          <ul className="space-y-2">
            <li className="flex items-start space-x-2">
              <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span className="text-green-800">Understand responsive design principles and mobile-first approach</span>
            </li>
            <li className="flex items-start space-x-2">
              <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span className="text-green-800">Master CSS media queries and breakpoints</span>
            </li>
            <li className="flex items-start space-x-2">
              <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span className="text-green-800">Use responsive units for flexible layouts</span>
            </li>
            <li className="flex items-start space-x-2">
              <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span className="text-green-800">Build layouts that work on all screen sizes</span>
            </li>
          </ul>
        </div>

        {/* Why Responsive Design */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">1. Why Responsive Design Matters</h2>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            In 2024, over 58% of web traffic comes from mobile devices. Responsive design ensures 
            your website provides an excellent experience regardless of whether users visit on a 
            phone, tablet, or desktop computer.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div className="bg-blue-50 rounded-lg p-6 text-center">
              <div className="text-3xl mb-2">📱</div>
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Mobile Users</h3>
              <p className="text-blue-800 text-sm">58% of web traffic</p>
              <p className="text-blue-600 text-xs mt-2">Small screens, touch interface</p>
            </div>
            <div className="bg-green-50 rounded-lg p-6 text-center">
              <div className="text-3xl mb-2">📱</div>
              <h3 className="text-lg font-semibold text-green-900 mb-2">Tablet Users</h3>
              <p className="text-green-800 text-sm">12% of web traffic</p>
              <p className="text-green-600 text-xs mt-2">Medium screens, touch & mouse</p>
            </div>
            <div className="bg-purple-50 rounded-lg p-6 text-center">
              <div className="text-3xl mb-2">💻</div>
              <h3 className="text-lg font-semibold text-purple-900 mb-2">Desktop Users</h3>
              <p className="text-purple-800 text-sm">30% of web traffic</p>
              <p className="text-purple-600 text-xs mt-2">Large screens, mouse & keyboard</p>
            </div>
          </div>

          <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-200">
            <h4 className="font-semibold text-yellow-900 mb-2">🎯 Business Impact:</h4>
            <ul className="text-yellow-800 text-sm space-y-1">
              <li>• 61% of users won't return to a mobile site they had trouble accessing</li>
              <li>• Google prioritizes mobile-friendly sites in search results</li>
              <li>• Responsive design improves user experience and conversion rates</li>
              <li>• One codebase works for all devices (saves time and money)</li>
            </ul>
          </div>
        </div>

        {/* Media Queries */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">2. CSS Media Queries</h2>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            Media queries allow you to apply different CSS styles based on device characteristics 
            like screen size, orientation, or resolution. They're the foundation of responsive design.
          </p>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Mobile-First Media Queries:</h3>
            <SyntaxHighlighter 
              language="css" 
              style={vscDarkPlus}
              className="rounded-lg"
            >
              {mediaQueriesBasics}
            </SyntaxHighlighter>
          </div>

          {/* Interactive Example 1 */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Responsive Breakpoints in Action:</h3>
            
            <button
              onClick={() => setShowPreview1(!showPreview1)}
              className="flex items-center space-x-2 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg text-sm font-medium transition-colors mb-4"
            >
              {showPreview1 ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              <span>{showPreview1 ? 'Hide Example' : 'Show Responsive Layout'}</span>
            </button>
            
            {showPreview1 && (
              <div className="bg-white border-2 border-green-300 rounded-lg p-6 shadow-lg">
                <div className="text-sm text-green-700 mb-4 font-semibold bg-green-50 px-3 py-2 rounded">
                  👁️ Responsive Layout - Resize your browser to see the magic:
                </div>
                <div className="bg-gray-100 rounded-lg p-4">
                  {/* Mobile View */}
                  <div className="block md:hidden">
                    <div className="bg-blue-500 text-white p-4 rounded mb-4 text-center">
                      <h3 className="text-lg font-bold">📱 Mobile View</h3>
                      <p className="text-sm">Single column layout</p>
                    </div>
                    <div className="space-y-3">
                      <div className="bg-white p-3 rounded shadow">Item 1</div>
                      <div className="bg-white p-3 rounded shadow">Item 2</div>
                      <div className="bg-white p-3 rounded shadow">Item 3</div>
                    </div>
                  </div>
                  
                  {/* Tablet View */}
                  <div className="hidden md:block lg:hidden">
                    <div className="bg-green-500 text-white p-4 rounded mb-4 text-center">
                      <h3 className="text-lg font-bold">📱 Tablet View</h3>
                      <p className="text-sm">Two column layout</p>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-white p-3 rounded shadow">Item 1</div>
                      <div className="bg-white p-3 rounded shadow">Item 2</div>
                      <div className="bg-white p-3 rounded shadow col-span-2">Item 3 (Full Width)</div>
                    </div>
                  </div>
                  
                  {/* Desktop View */}
                  <div className="hidden lg:block">
                    <div className="bg-purple-500 text-white p-4 rounded mb-4 text-center">
                      <h3 className="text-lg font-bold">💻 Desktop View</h3>
                      <p className="text-sm">Three column layout</p>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="bg-white p-4 rounded shadow">Item 1</div>
                      <div className="bg-white p-4 rounded shadow">Item 2</div>
                      <div className="bg-white p-4 rounded shadow">Item 3</div>
                    </div>
                  </div>
                </div>
                <div className="text-xs text-green-600 mt-2">
                  Try resizing your browser window to see how the layout adapts!
                </div>
              </div>
            )}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 rounded-lg p-6">
              <h4 className="font-semibold text-blue-900 mb-3">Common Breakpoints</h4>
              <ul className="text-blue-800 text-sm space-y-2">
                <li>• <strong>320px:</strong> Small phones</li>
                <li>• <strong>768px:</strong> Tablets</li>
                <li>• <strong>1024px:</strong> Laptops</li>
                <li>• <strong>1200px:</strong> Large desktops</li>
              </ul>
            </div>
            <div className="bg-green-50 rounded-lg p-6">
              <h4 className="font-semibold text-green-900 mb-3">Mobile-First Benefits</h4>
              <ul className="text-green-800 text-sm space-y-2">
                <li>• Better performance on mobile</li>
                <li>• Forces focus on essential content</li>
                <li>• Progressive enhancement</li>
                <li>• Easier to scale up than down</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Responsive Units */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">3. Responsive Units & Flexible Layouts</h2>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            Using the right units is crucial for responsive design. Different units serve different 
            purposes and help create layouts that adapt smoothly to any screen size.
          </p>

          <div className="mb-6">
            <SyntaxHighlighter 
              language="css" 
              style={vscDarkPlus}
              className="rounded-lg"
            >
              {responsiveUnits}
            </SyntaxHighlighter>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="bg-blue-50 rounded-lg p-4">
              <h4 className="font-semibold text-blue-900 mb-2">Relative Units</h4>
              <ul className="text-blue-800 text-sm space-y-1">
                <li><code>rem</code> - Root font size</li>
                <li><code>em</code> - Element font size</li>
                <li><code>%</code> - Parent element</li>
                <li><code>vh/vw</code> - Viewport size</li>
              </ul>
            </div>
            <div className="bg-green-50 rounded-lg p-4">
              <h4 className="font-semibold text-green-900 mb-2">Fixed Units</h4>
              <ul className="text-green-800 text-sm space-y-1">
                <li><code>px</code> - Pixels (avoid for layout)</li>
                <li><code>pt</code> - Points (print)</li>
                <li><code>cm</code> - Centimeters</li>
                <li><code>in</code> - Inches</li>
              </ul>
            </div>
            <div className="bg-purple-50 rounded-lg p-4">
              <h4 className="font-semibold text-purple-900 mb-2">Modern Units</h4>
              <ul className="text-purple-800 text-sm space-y-1">
                <li><code>clamp()</code> - Min, preferred, max</li>
                <li><code>min()</code> - Smaller value</li>
                <li><code>max()</code> - Larger value</li>
                <li><code>calc()</code> - Calculations</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Complete Example */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">4. Complete Responsive Portfolio</h2>
          
          <p className="text-gray-700 mb-6">
            Here's a complete example showing how to build a responsive portfolio that adapts 
            beautifully to all screen sizes using mobile-first design principles.
          </p>

          <div className="mb-6">
            <SyntaxHighlighter 
              language="css" 
              style={vscDarkPlus}
              className="rounded-lg"
              customStyle={{ fontSize: '11px' }}
            >
              {practicalExample}
            </SyntaxHighlighter>
          </div>

          {/* Interactive Example 2 */}
          <button
            onClick={() => setShowPreview2(!showPreview2)}
            className="flex items-center space-x-2 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg text-sm font-medium transition-colors mb-4"
          >
            {showPreview2 ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            <span>{showPreview2 ? 'Hide Portfolio' : 'Show Responsive Portfolio'}</span>
          </button>
          
          {showPreview2 && (
            <div className="bg-white border-2 border-purple-300 rounded-lg p-6 shadow-lg">
              <div className="text-sm text-purple-700 mb-4 font-semibold bg-purple-50 px-3 py-2 rounded">
                👁️ Complete Responsive Portfolio Example:
              </div>
              
              {/* Portfolio Demo */}
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="max-w-4xl mx-auto">
                  {/* Header */}
                  <div className="text-center md:text-left md:flex md:justify-between md:items-center mb-8">
                    <div>
                      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-600 mb-2">
                        Sarah Johnson
                      </h1>
                      <p className="text-gray-600">Web Developer & Designer</p>
                    </div>
                    <div className="mt-4 md:mt-0">
                      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                        Contact Me
                      </button>
                    </div>
                  </div>
                  
                  {/* Skills Grid */}
                  <div className="mb-8">
                    <h2 className="text-xl font-bold mb-4 border-b-2 border-blue-500 pb-2">Skills</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                      {['HTML & CSS', 'JavaScript', 'React', 'Node.js'].map((skill, index) => (
                        <div key={index} className="bg-gray-100 p-4 rounded-lg border-l-4 border-blue-500">
                          <h3 className="font-semibold">{skill}</h3>
                          <p className="text-sm text-gray-600">Proficient</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Projects Grid */}
                  <div>
                    <h2 className="text-xl font-bold mb-4 border-b-2 border-blue-500 pb-2">Projects</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {[
                        { title: 'Portfolio Website', tech: 'HTML, CSS, JS' },
                        { title: 'Todo App', tech: 'React, JavaScript' },
                        { title: 'Weather App', tech: 'API, Responsive' }
                      ].map((project, index) => (
                        <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                          <div className="h-32 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white font-semibold">
                            {project.title}
                          </div>
                          <div className="p-4">
                            <h3 className="font-semibold mb-2">{project.title}</h3>
                            <p className="text-sm text-gray-600 mb-3">Built with {project.tech}</p>
                            <button className="bg-gray-800 text-white px-3 py-1 rounded text-sm hover:bg-gray-700">
                              View Project
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="text-xs text-purple-600 mt-3 bg-purple-50 p-3 rounded">
                <strong>Try this:</strong> Resize your browser window to see how the layout adapts!
                <br />• Mobile: Single column, centered text
                <br />• Tablet: 2-column grids, left-aligned headers  
                <br />• Desktop: 3-4 column grids, horizontal header layout
              </div>
            </div>
          )}
        </div>

        {/* Practice Exercise */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <Code className="h-6 w-6 mr-2" />
            Practice Exercise: Make Your Portfolio Responsive
          </h2>

          <p className="text-gray-700 mb-6">
            Transform your existing portfolio into a fully responsive website that looks amazing on all devices!
          </p>

          <div className="bg-green-50 rounded-lg p-6 border border-green-200">
            <h4 className="font-semibold text-green-900 mb-3">Your Tasks:</h4>
            <ol className="list-decimal list-inside space-y-2 text-green-800">
              <li>Add a viewport meta tag to your HTML</li>
              <li>Implement mobile-first CSS with media queries</li>
              <li>Create responsive breakpoints for tablet and desktop</li>
              <li>Use flexible units (rem, %, vw, vh) instead of fixed pixels</li>
              <li>Make images responsive with max-width: 100%</li>
              <li>Test your site on different screen sizes</li>
              <li>Optimize typography for readability on all devices</li>
            </ol>
          </div>

          <div className="mt-6 bg-blue-50 rounded-lg p-4">
            <h4 className="font-semibold text-blue-900 mb-2">💡 Pro Tips:</h4>
            <ul className="text-blue-800 text-sm space-y-1">
              <li>• Start with mobile design first, then enhance for larger screens</li>
              <li>• Use Chrome DevTools to test different device sizes</li>
              <li>• Ensure touch targets are at least 44px for mobile users</li>
              <li>• Test your site on real devices when possible</li>
              <li>• Keep mobile navigation simple and accessible</li>
            </ul>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Link
            href="/lessons/week-3"
            className="flex items-center space-x-2 text-gray-600 hover:text-gray-800"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Week 3 Overview</span>
          </Link>
          
          <Link
            href="/lessons/week-3/day-2"
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg flex items-center space-x-2 transition-colors"
          >
            <span>Next: Git & GitHub</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
