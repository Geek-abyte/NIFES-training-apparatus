'use client'

/*
 * ACCESSIBILITY & READABILITY GUIDELINES:
 * - Always use dark text (gray-700, gray-800, gray-900) on light backgrounds
 * - Use light text (white, gray-50, gray-100) only on dark backgrounds (500+ color variants)
 * - Avoid light text (100-400 color variants) on light backgrounds
 * - Test color contrast for readability before committing changes
 */

import React, { useState } from 'react'
import Link from 'next/link'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { ArrowLeft, ArrowRight, CheckCircle, Clock, Target, Code, Eye, Download, EyeOff } from 'lucide-react'

export default function Week1Day1() {
  const [showPreview1, setShowPreview1] = useState(false)
  const [showPreview2, setShowPreview2] = useState(false)
  const [showPreview3, setShowPreview3] = useState(false)
  const [showPreview4, setShowPreview4] = useState(false)
  const htmlExample = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Personal Profile</title>
</head>
<body>
    <header>
        <h1>John Doe</h1>
        <p>Aspiring Web Developer</p>
    </header>
    
    <main>
        <section>
            <h2>About Me</h2>
            <p>Hello! I'm learning web development and excited to build amazing websites.</p>
        </section>
        
        <section>
            <h2>My Education</h2>
            <ul>
                <li>High School Diploma - City High School (2020)</li>
                <li>Currently studying Web Development</li>
            </ul>
        </section>
        
        <section>
            <h2>My Interests</h2>
            <ul>
                <li>Web Development</li>
                <li>Photography</li>
                <li>Reading</li>
                <li>Traveling</li>
            </ul>
        </section>
    </main>
    
    <footer>
        <p>&copy; 2024 John Doe. All rights reserved.</p>
    </footer>
</body>
</html>`

  const basicStructure = `<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Metadata goes here -->
</head>
<body>
    <!-- Visible content goes here -->
</body>
</html>`

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
                <span>45 minutes</span>
              </div>
              <div className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                Week 1 - Day 1
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Lesson Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            HTML Essentials
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn the building blocks of the web: HTML tags, elements, and structure. 
            By the end of this lesson, you'll create your first personal profile page.
          </p>
        </div>

        {/* Learning Objectives */}
        <div className="bg-blue-50 rounded-lg p-6 mb-8 border border-blue-200">
          <h2 className="text-xl font-semibold text-blue-900 mb-4 flex items-center">
            <Target className="h-5 w-5 mr-2" />
            Learning Objectives
          </h2>
          <ul className="space-y-2">
            <li className="flex items-start space-x-2">
              <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <span className="text-blue-800">Understand HTML structure and syntax</span>
            </li>
            <li className="flex items-start space-x-2">
              <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <span className="text-blue-800">Learn common HTML tags (h1-h6, p, div, span)</span>
            </li>
            <li className="flex items-start space-x-2">
              <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <span className="text-blue-800">Master semantic HTML elements</span>
            </li>
            <li className="flex items-start space-x-2">
              <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <span className="text-blue-800">Create lists and add links/images</span>
            </li>
          </ul>
        </div>

        {/* Lesson Content */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">1. What is HTML?</h2>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            HTML (HyperText Markup Language) is the foundation of every website. It's a markup language that uses 
            tags to structure content on web pages. Think of HTML as the skeleton of a website - it defines the 
            structure and meaning of your content.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">Basic HTML Structure</h3>
          
          <p className="text-gray-700 mb-4">
            Every HTML document follows a basic structure:
          </p>

          <div className="mb-6">
            <SyntaxHighlighter 
              language="html" 
              style={vscDarkPlus}
              className="rounded-lg"
            >
              {basicStructure}
            </SyntaxHighlighter>
          </div>

          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <h4 className="font-semibold text-gray-900 mb-2">Key Components:</h4>
            <ul className="space-y-2 text-gray-700">
              <li><strong>&lt;!DOCTYPE html&gt;</strong> - Tells the browser this is an HTML5 document</li>
              <li><strong>&lt;html&gt;</strong> - The root element that contains all content</li>
              <li><strong>&lt;head&gt;</strong> - Contains metadata (information about the page)</li>
              <li><strong>&lt;body&gt;</strong> - Contains all visible content</li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">2. Common HTML Tags</h2>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Headings</h3>
              <div className="bg-gray-50 rounded p-4 mb-4">
                <SyntaxHighlighter 
                  language="html" 
                  style={vscDarkPlus}
                  className="text-sm rounded"
                  customStyle={{ fontSize: '12px', margin: 0, padding: '8px' }}
                >
{`<h1>Main Title</h1>
<h2>Section Title</h2>
<h3>Subsection</h3>
<h4> to <h6> - Smaller headings`}
                </SyntaxHighlighter>
              </div>
              
              {/* Toggle Button */}
              <button
                onClick={() => setShowPreview1(!showPreview1)}
                className="flex items-center space-x-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-sm font-medium transition-colors mb-4"
              >
                {showPreview1 ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                <span>{showPreview1 ? 'Hide Preview' : 'Show Preview'}</span>
              </button>
              
              {/* Preview */}
              {showPreview1 && (
                <div className="bg-white border-2 border-blue-300 rounded-lg p-6 shadow-lg">
                  <div className="text-sm text-blue-700 mb-4 font-semibold bg-blue-50 px-3 py-2 rounded">
                    👁️ Live Preview - How this HTML renders in a browser:
                  </div>
                  <div className="space-y-4 bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <h1 className="text-4xl font-bold text-gray-900 border-b-2 border-gray-300 pb-2">Main Title</h1>
                    <h2 className="text-3xl font-semibold text-gray-800 border-b border-gray-200 pb-2">Section Title</h2>
                    <h3 className="text-2xl font-medium text-gray-700">Subsection</h3>
                    <h4 className="text-xl text-gray-600">Heading 4</h4>
                    <h5 className="text-lg text-gray-600">Heading 5</h5>
                    <h6 className="text-base text-gray-600">Heading 6</h6>
                  </div>
                  <div className="text-xs text-blue-600 mt-2 font-medium">
                    💡 Notice how each heading gets progressively smaller from h1 to h6
                  </div>
                </div>
              )}
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Text Elements</h3>
              <div className="bg-gray-50 rounded p-4 mb-4">
                <SyntaxHighlighter 
                  language="html" 
                  style={vscDarkPlus}
                  className="text-sm rounded"
                  customStyle={{ fontSize: '12px', margin: 0, padding: '8px' }}
                >
{`<p>Paragraph text</p>
<span>Inline text</span>
<div>Block container</div>
<strong>Bold text</strong>`}
                </SyntaxHighlighter>
              </div>
              
              {/* Toggle Button */}
              <button
                onClick={() => setShowPreview2(!showPreview2)}
                className="flex items-center space-x-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-sm font-medium transition-colors mb-4"
              >
                {showPreview2 ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                <span>{showPreview2 ? 'Hide Preview' : 'Show Preview'}</span>
              </button>
              
              {/* Preview */}
              {showPreview2 && (
                <div className="bg-white border-2 border-green-300 rounded-lg p-6 shadow-lg">
                  <div className="text-sm text-green-700 mb-4 font-semibold bg-green-50 px-3 py-2 rounded">
                    👁️ Live Preview - How these text elements render:
                  </div>
                  <div className="space-y-4">
                    <div className="bg-blue-50 border-2 border-blue-300 p-4 rounded-lg border-l-4 border-l-blue-500">
                      <div className="text-xs font-mono text-blue-600 mb-2">&lt;p&gt;</div>
                      <p className="text-gray-900 font-medium">
                        This is a paragraph with normal text. Paragraphs create block-level elements.
                      </p>
                    </div>
                    <div className="bg-yellow-50 border-2 border-yellow-300 p-4 rounded-lg border-l-4 border-l-yellow-500">
                      <div className="text-xs font-mono text-yellow-600 mb-2">&lt;span&gt;</div>
                      <div className="text-gray-900">
                        This is a <span className="bg-yellow-300 px-3 py-1 rounded font-bold text-yellow-900 border border-yellow-400">span (inline text)</span> within other content.
                      </div>
                    </div>
                    <div className="bg-purple-50 border-2 border-purple-300 p-4 rounded-lg border-l-4 border-l-purple-500">
                      <div className="text-xs font-mono text-purple-600 mb-2">&lt;div&gt;</div>
                      <div className="text-gray-900 font-medium bg-purple-100 p-3 rounded border border-purple-200">
                        This is a div - a block container element
                      </div>
                    </div>
                    <div className="bg-red-50 border-2 border-red-300 p-4 rounded-lg border-l-4 border-l-red-500">
                      <div className="text-xs font-mono text-red-600 mb-2">&lt;strong&gt;</div>
                      <p className="text-gray-900">
                        This text has <strong className="font-bold text-red-700 bg-red-100 px-2 py-1 rounded border border-red-200">bold formatting</strong> using the strong tag.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Lists</h3>
              <div className="bg-gray-50 rounded p-4 mb-4">
                <SyntaxHighlighter 
                  language="html" 
                  style={vscDarkPlus}
                  className="text-sm rounded"
                  customStyle={{ fontSize: '12px', margin: 0, padding: '8px' }}
                >
{`<ul> <!-- Unordered list -->
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
<ol> <!-- Ordered list -->
  <li>First item</li>
  <li>Second item</li>
</ol>`}
                </SyntaxHighlighter>
              </div>
              
              {/* Toggle Button */}
              <button
                onClick={() => setShowPreview3(!showPreview3)}
                className="flex items-center space-x-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-sm font-medium transition-colors mb-4"
              >
                {showPreview3 ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                <span>{showPreview3 ? 'Hide Preview' : 'Show Preview'}</span>
              </button>
              
              {/* Preview */}
              {showPreview3 && (
                <div className="bg-white border-2 border-orange-300 rounded-lg p-6 shadow-lg">
                  <div className="text-sm text-orange-700 mb-4 font-semibold bg-orange-50 px-3 py-2 rounded">
                    👁️ Live Preview - How lists appear in browsers:
                  </div>
                  <div className="space-y-6">
                    <div className="bg-blue-50 border-2 border-blue-300 p-5 rounded-lg border-l-4 border-l-blue-500">
                      <div className="text-sm font-mono text-blue-600 mb-3">&lt;ul&gt;</div>
                      <div className="text-lg font-bold text-blue-900 mb-3">Unordered List (Bullets):</div>
                      <ul className="list-disc list-inside space-y-2 text-gray-900 text-base ml-4">
                        <li className="bg-white p-2 rounded border border-blue-200">First list item</li>
                        <li className="bg-white p-2 rounded border border-blue-200">Second list item</li>
                        <li className="bg-white p-2 rounded border border-blue-200">Third list item</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 border-2 border-green-300 p-5 rounded-lg border-l-4 border-l-green-500">
                      <div className="text-sm font-mono text-green-600 mb-3">&lt;ol&gt;</div>
                      <div className="text-lg font-bold text-green-900 mb-3">Ordered List (Numbers):</div>
                      <ol className="list-decimal list-inside space-y-2 text-gray-900 text-base ml-4">
                        <li className="bg-white p-2 rounded border border-green-200">First ordered item</li>
                        <li className="bg-white p-2 rounded border border-green-200">Second ordered item</li>
                        <li className="bg-white p-2 rounded border border-green-200">Third ordered item</li>
                      </ol>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Semantic Elements</h3>
              <div className="bg-gray-50 rounded p-4 mb-4">
                <SyntaxHighlighter 
                  language="html" 
                  style={vscDarkPlus}
                  className="text-sm rounded"
                  customStyle={{ fontSize: '12px', margin: 0, padding: '8px' }}
                >
{`<header>Page header</header>
<main>Main content</main>
<section>Content section</section>
<footer>Page footer</footer>`}
                </SyntaxHighlighter>
              </div>
              
              {/* Toggle Button */}
              <button
                onClick={() => setShowPreview4(!showPreview4)}
                className="flex items-center space-x-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-sm font-medium transition-colors mb-4"
              >
                {showPreview4 ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                <span>{showPreview4 ? 'Hide Preview' : 'Show Preview'}</span>
              </button>
              
              {/* Preview */}
              {showPreview4 && (
                <div className="bg-white border-2 border-purple-300 rounded-lg p-6 shadow-lg">
                  <div className="text-sm text-purple-700 mb-4 font-semibold bg-purple-50 px-3 py-2 rounded">
                    👁️ Live Preview - Semantic HTML structure:
                  </div>
                  <div className="space-y-4">
                    <div className="bg-blue-100 border-2 border-blue-400 p-5 rounded-lg border-l-4 border-l-blue-600">
                      <div className="text-sm font-mono text-blue-600 mb-2">&lt;header&gt;</div>
                      <div className="font-bold text-blue-900 mb-2 text-lg">🏠 Header Section</div>
                      <p className="text-blue-800 font-medium">Contains page title, navigation, logo - appears at the top</p>
                    </div>
                    <div className="bg-green-100 border-2 border-green-400 p-5 rounded-lg border-l-4 border-l-green-600">
                      <div className="text-sm font-mono text-green-600 mb-2">&lt;main&gt;</div>
                      <div className="font-bold text-green-900 mb-2 text-lg">📄 Main Content Area</div>
                      <p className="text-green-800 font-medium">The primary content of the page - unique to each page</p>
                    </div>
                    <div className="bg-yellow-100 border-2 border-yellow-400 p-5 rounded-lg border-l-4 border-l-yellow-600">
                      <div className="text-sm font-mono text-yellow-600 mb-2">&lt;section&gt;</div>
                      <div className="font-bold text-yellow-900 mb-2 text-lg">📋 Section</div>
                      <p className="text-yellow-800 font-medium">Groups related content together - like chapters in a book</p>
                    </div>
                    <div className="bg-gray-100 border-2 border-gray-400 p-5 rounded-lg border-l-4 border-l-gray-600">
                      <div className="text-sm font-mono text-gray-600 mb-2">&lt;footer&gt;</div>
                      <div className="font-bold text-gray-900 mb-2 text-lg">👇 Footer Section</div>
                      <p className="text-gray-800 font-medium">Contains copyright, links, contact info - appears at the bottom</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Live Example Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <Eye className="h-6 w-6 mr-2" />
            See It In Action: Basic HTML Structure
          </h2>
          
          <p className="text-gray-700 mb-6">
            Here's how the basic HTML structure looks when rendered in a browser:
          </p>

          <div className="grid lg:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">HTML Code:</h3>
              <SyntaxHighlighter 
                language="html" 
                style={vscDarkPlus}
                className="rounded-lg text-sm"
              >
{`<!DOCTYPE html>
<html lang="en">
<head>
    <title>My First Page</title>
</head>
<body>
    <header>
        <h1>Welcome!</h1>
    </header>
    <main>
        <p>This is my first webpage.</p>
    </main>
</body>
</html>`}
              </SyntaxHighlighter>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Browser Result:</h3>
              <div className="bg-white border-2 border-gray-300 rounded-lg p-4 min-h-[200px]">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 rounded mb-4 border-2 border-purple-300">
                  <h1 className="text-2xl font-bold text-gray-800 bg-white px-3 py-2 rounded">Welcome!</h1>
                </div>
                <div className="p-2">
                  <p className="text-gray-700">This is my first webpage.</p>
                </div>
              </div>
              <div className="text-xs text-gray-500 mt-2">
                ✨ This is how your HTML will appear in a web browser!
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <Code className="h-6 w-6 mr-2" />
            Practical Exercise: Create Your Profile Page
          </h2>

          <p className="text-gray-700 mb-6">
            Now let's put everything together! Create a personal profile page using the HTML structure and tags 
            you've learned. This will be the foundation of your portfolio website.
          </p>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Complete Example:</h3>
            <SyntaxHighlighter 
              language="html" 
              style={vscDarkPlus}
              className="rounded-lg"
            >
              {htmlExample}
            </SyntaxHighlighter>
          </div>

          <div className="bg-green-50 rounded-lg p-6 border border-green-200">
            <h4 className="font-semibold text-green-900 mb-3">Your Task:</h4>
            <ol className="list-decimal list-inside space-y-2 text-green-800">
              <li>Create a new HTML file called "index.html"</li>
              <li>Use the basic HTML structure</li>
              <li>Add a header with your name and a brief description</li>
              <li>Create sections for "About Me", "Education", and "Interests"</li>
              <li>Use appropriate semantic HTML elements</li>
              <li>Add lists for your education and interests</li>
              <li>Include a footer with copyright information</li>
            </ol>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">3. Testing Your HTML</h2>
          
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="bg-blue-100 rounded-full p-2">
                <span className="text-blue-600 font-bold text-sm">1</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Save your file</h4>
                <p className="text-gray-600">Save your HTML file with a .html extension (e.g., index.html)</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="bg-blue-100 rounded-full p-2">
                <span className="text-blue-600 font-bold text-sm">2</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Open in browser</h4>
                <p className="text-gray-600">Double-click the file to open it in your web browser</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="bg-blue-100 rounded-full p-2">
                <span className="text-blue-600 font-bold text-sm">3</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Check the result</h4>
                <p className="text-gray-600">Verify that your content displays correctly with proper structure</p>
              </div>
            </div>
          </div>
        </div>

        {/* Try It Yourself Exercise */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-green-900 mb-6 flex items-center">
            <Code className="h-6 w-6 mr-2" />
            Try It Yourself: Build Your First Webpage
          </h2>
          
          <div className="bg-white rounded-lg p-6 mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">🎯 Your Mission:</h3>
            <p className="text-gray-700 mb-4">
              Create a simple "About Me" webpage using the HTML tags you've learned. 
              Your page should include:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Requirements:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>A main heading with your name</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>A paragraph about yourself</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>A list of your hobbies or interests</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Use semantic HTML elements</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">What you'll learn:</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• How to structure a complete HTML page</li>
                  <li>• Proper use of semantic elements</li>
                  <li>• Creating meaningful content hierarchy</li>
                  <li>• Building your first real webpage!</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Expected Result:</h3>
            <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg p-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <header className="text-center mb-6">
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">Sarah Johnson</h1>
                  <p className="text-gray-600">Web Development Student</p>
                </header>
                
                <main>
                  <section className="mb-6">
                    <h2 className="text-xl font-semibold text-gray-800 mb-3">About Me</h2>
                    <p className="text-gray-700 leading-relaxed">
                      Hi! I'm Sarah, a beginner web developer learning HTML, CSS, and JavaScript. 
                      I love creating things and solving problems, which is why coding appeals to me so much.
                    </p>
                  </section>
                  
                  <section>
                    <h2 className="text-xl font-semibold text-gray-800 mb-3">My Interests</h2>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>Photography</li>
                      <li>Reading sci-fi novels</li>
                      <li>Learning new technologies</li>
                      <li>Playing guitar</li>
                    </ul>
                  </section>
                </main>
              </div>
              <div className="text-xs text-gray-500 mt-3 text-center">
                👆 This is what your HTML will look like when complete!
              </div>
            </div>
          </div>
        </div>

        {/* Lesson Progress Summary */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-blue-900 mb-6">📋 Lesson Progress Checklist</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span className="text-gray-800">Understand basic HTML document structure</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span className="text-gray-800">Learn common HTML tags (headings, paragraphs, lists)</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span className="text-gray-800">Know semantic HTML elements</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span className="text-gray-800">Understand HTML attributes and their purpose</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span className="text-gray-800">Create your first "About Me" webpage</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span className="text-gray-800">Validate your HTML for proper structure</span>
              </div>
            </div>
          </div>
          <div className="mt-6 p-4 bg-green-100 border border-green-200 rounded-lg">
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <span className="text-green-800 font-medium">
                🎉 Complete all items above to master HTML basics!
              </span>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Link
            href="/lessons/week-1"
            className="flex items-center space-x-2 text-gray-600 hover:text-gray-800"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Week 1</span>
          </Link>
          
          <Link
            href="/lessons/week-1/day-2"
            className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg flex items-center space-x-2 transition-colors"
          >
            <span>Next: CSS Basics</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
