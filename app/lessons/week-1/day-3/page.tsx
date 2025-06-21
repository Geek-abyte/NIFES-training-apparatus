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
import { ArrowLeft, ArrowRight, Clock, Target, CheckCircle, Code, Layers, Grid, Eye, EyeOff } from 'lucide-react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'

export default function Week1Day3() {
  const [showPreview1, setShowPreview1] = useState(false)
  const [showPreview2, setShowPreview2] = useState(false)
  const [showPreview3, setShowPreview3] = useState(false)
  const [showPreview4, setShowPreview4] = useState(false)
  const flexboxBasics = `/* Flexbox Container */
.container {
    display: flex;
    justify-content: center;    /* horizontal alignment */
    align-items: center;        /* vertical alignment */
    gap: 1rem;                  /* space between items */
}

/* Flex Items */
.item {
    flex: 1;                    /* grow to fill space */
    padding: 1rem;
    background: #f0f8ff;
    border-radius: 8px;
}`

  const flexboxProperties = `/* Flex Direction */
.flex-row { flex-direction: row; }           /* default: left to right */
.flex-column { flex-direction: column; }     /* top to bottom */

/* Justify Content (main axis alignment) */
.justify-start { justify-content: flex-start; }
.justify-center { justify-content: center; }
.justify-between { justify-content: space-between; }
.justify-around { justify-content: space-around; }

/* Align Items (cross axis alignment) */
.align-start { align-items: flex-start; }
.align-center { align-items: center; }
.align-end { align-items: flex-end; }
.align-stretch { align-items: stretch; }

/* Flex Properties for Items */
.flex-grow { flex-grow: 1; }        /* grow to fill available space */
.flex-shrink { flex-shrink: 0; }    /* don't shrink when space is tight */
.flex-basis { flex-basis: 200px; }  /* initial size before growing/shrinking */`

  const responsiveLayout = `/* Complete Profile Page with Flexbox */
.profile-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

.header {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 3rem;
    background: linear-gradient(135deg, #667eea, #764ba2);
    color: white;
    border-radius: 16px;
}

.main-content {
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
}

.sidebar {
    flex: 1;
    min-width: 300px;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.content {
    flex: 2;
    min-width: 400px;
}

.card {
    background: white;
    padding: 2rem;
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.skills-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
}

.skill-tag {
    background: #e0f2fe;
    color: #0277bd;
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-size: 0.875rem;
    font-weight: 500;
}

/* Responsive Design */
@media (max-width: 768px) {
    .main-content {
        flex-direction: column;
    }
    
    .sidebar, .content {
        min-width: 100%;
    }
    
    .profile-container {
        padding: 1rem;
    }
}`

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link 
              href="/lessons/week-1"
              className="inline-flex items-center text-primary-600 hover:text-primary-700"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Week 1
            </Link>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <Clock className="h-4 w-4" />
                <span>75 minutes</span>
              </div>
              <div className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                Week 1 - Day 3
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Lesson Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
            <Grid className="h-8 w-8 text-blue-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Flexbox Layout
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Master the power of CSS Flexbox to create responsive, flexible layouts. 
            Learn to align, distribute, and organize elements with ease.
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
              <span className="text-blue-800">Understand flexbox container and item properties</span>
            </li>
            <li className="flex items-start space-x-2">
              <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <span className="text-blue-800">Master flex direction, wrap, and alignment</span>
            </li>
            <li className="flex items-start space-x-2">
              <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <span className="text-blue-800">Create responsive layouts with flexbox</span>
            </li>
            <li className="flex items-start space-x-2">
              <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <span className="text-blue-800">Build a professional portfolio layout</span>
            </li>
          </ul>
        </div>

        {/* What is Flexbox */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">1. What is Flexbox?</h2>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            CSS Flexbox (Flexible Box Layout) is a powerful layout method that makes it easy to arrange 
            elements in a container. It's perfect for creating responsive designs and aligning content 
            both horizontally and vertically with minimal code.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-3">Before Flexbox</h3>
              <ul className="text-blue-800 space-y-2 text-sm">
                <li>• Complex float-based layouts</li>
                <li>• Difficult vertical centering</li>
                <li>• Inconsistent spacing</li>
                <li>• Responsive challenges</li>
              </ul>
            </div>
            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-green-900 mb-3">With Flexbox</h3>
              <ul className="text-green-800 space-y-2 text-sm">
                <li>• Simple, intuitive layouts</li>
                <li>• Easy alignment in any direction</li>
                <li>• Automatic spacing distribution</li>
                <li>• Built-in responsiveness</li>
              </ul>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Basic Flexbox Setup:</h3>
            <SyntaxHighlighter 
              language="css" 
              style={vscDarkPlus}
              className="rounded-lg"
            >
              {flexboxBasics}
            </SyntaxHighlighter>
          </div>
        </div>

        {/* Flexbox Properties */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">2. Flexbox Properties</h2>
          
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Container Properties:</h3>
            <SyntaxHighlighter 
              language="css" 
              style={vscDarkPlus}
              className="rounded-lg"
            >
              {flexboxProperties}
            </SyntaxHighlighter>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Main Axis vs Cross Axis</h4>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="space-y-2 text-sm text-gray-700">
                  <p><strong>Main Axis:</strong> Primary direction (row = horizontal, column = vertical)</p>
                  <p><strong>Cross Axis:</strong> Perpendicular to main axis</p>
                  <p><strong>justify-content:</strong> Aligns along main axis</p>
                  <p><strong>align-items:</strong> Aligns along cross axis</p>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Common Patterns</h4>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="space-y-2 text-sm text-gray-700">
                  <p><strong>Center everything:</strong> justify-content: center; align-items: center;</p>
                  <p><strong>Space between:</strong> justify-content: space-between;</p>
                  <p><strong>Equal height columns:</strong> align-items: stretch;</p>
                  <p><strong>Responsive wrapping:</strong> flex-wrap: wrap;</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Flexbox Examples */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">3. Flexbox Properties in Action</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Flex Direction</h3>
              <div className="bg-gray-50 rounded p-4 mb-4">
                <SyntaxHighlighter 
                  language="css" 
                  style={vscDarkPlus}
                  className="text-sm rounded"
                  customStyle={{ fontSize: '12px', margin: 0, padding: '8px' }}
                >
{`.container {
  display: flex;
  flex-direction: row; /* or column */
}
.item { flex: 1; padding: 1rem; }`}
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
                    👁️ Live Preview - Flex direction in action:
                  </div>
                  <div className="space-y-6">
                    <div className="bg-blue-50 border-2 border-blue-300 p-5 rounded-lg border-l-4 border-l-blue-500">
                      <div className="text-sm font-mono text-blue-600 mb-3">flex-direction: row</div>
                      <div className="flex gap-2">
                        <div className="bg-blue-100 text-blue-900 border-2 border-blue-400 p-3 rounded text-center flex-1 font-medium">Item 1</div>
                        <div className="bg-blue-200 text-blue-900 border-2 border-blue-500 p-3 rounded text-center flex-1 font-medium">Item 2</div>
                        <div className="bg-blue-300 text-blue-900 border-2 border-blue-600 p-3 rounded text-center flex-1 font-medium">Item 3</div>
                      </div>
                    </div>
                    <div className="bg-green-50 border-2 border-green-300 p-5 rounded-lg border-l-4 border-l-green-500">
                      <div className="text-sm font-mono text-green-600 mb-3">flex-direction: column</div>
                      <div className="flex flex-col gap-2 max-w-32 mx-auto">
                        <div className="bg-green-100 text-green-900 border-2 border-green-400 p-3 rounded text-center font-medium">Item 1</div>
                        <div className="bg-green-200 text-green-900 border-2 border-green-500 p-3 rounded text-center font-medium">Item 2</div>
                        <div className="bg-green-300 text-green-900 border-2 border-green-600 p-3 rounded text-center font-medium">Item 3</div>
                      </div>
                    </div>
                  </div>
                  <div className="text-xs text-blue-600 mt-2 font-medium">
                    💡 Row arranges items horizontally, column arranges them vertically
                  </div>
                </div>
              )}
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Justify Content</h3>
              <div className="bg-gray-50 rounded p-4 mb-4">
                <SyntaxHighlighter 
                  language="css" 
                  style={vscDarkPlus}
                  className="text-sm rounded"
                  customStyle={{ fontSize: '12px', margin: 0, padding: '8px' }}
                >
{`.container {
  display: flex;
  justify-content: center; /* or space-between */
}
/* Controls horizontal alignment */`}
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
                    👁️ Live Preview - Justify content alignment:
                  </div>
                  <div className="space-y-6">
                    <div className="bg-purple-50 border-2 border-purple-300 p-5 rounded-lg border-l-4 border-l-purple-500">
                      <div className="text-sm font-mono text-purple-600 mb-3">justify-content: center</div>
                      <div className="flex justify-center gap-2">
                        <div className="bg-purple-100 text-purple-900 border-2 border-purple-400 p-3 rounded text-center font-medium w-20">A</div>
                        <div className="bg-purple-200 text-purple-900 border-2 border-purple-500 p-3 rounded text-center font-medium w-20">B</div>
                        <div className="bg-purple-300 text-purple-900 border-2 border-purple-600 p-3 rounded text-center font-medium w-20">C</div>
                      </div>
                    </div>
                    <div className="bg-orange-50 border-2 border-orange-300 p-5 rounded-lg border-l-4 border-l-orange-500">
                      <div className="text-sm font-mono text-orange-600 mb-3">justify-content: space-between</div>
                      <div className="flex justify-between gap-2">
                        <div className="bg-orange-100 text-orange-900 border-2 border-orange-400 p-3 rounded text-center font-medium w-20">A</div>
                        <div className="bg-orange-200 text-orange-900 border-2 border-orange-500 p-3 rounded text-center font-medium w-20">B</div>
                        <div className="bg-orange-300 text-orange-900 border-2 border-orange-600 p-3 rounded text-center font-medium w-20">C</div>
                      </div>
                    </div>
                    <div className="bg-red-50 border-2 border-red-300 p-5 rounded-lg border-l-4 border-l-red-500">
                      <div className="text-sm font-mono text-red-600 mb-3">justify-content: space-around</div>
                      <div className="flex justify-around gap-2">
                        <div className="bg-red-100 text-red-900 border-2 border-red-400 p-3 rounded text-center font-medium w-20">A</div>
                        <div className="bg-red-200 text-red-900 border-2 border-red-500 p-3 rounded text-center font-medium w-20">B</div>
                        <div className="bg-red-300 text-red-900 border-2 border-red-600 p-3 rounded text-center font-medium w-20">C</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Align Items</h3>
              <div className="bg-gray-50 rounded p-4 mb-4">
                <SyntaxHighlighter 
                  language="css" 
                  style={vscDarkPlus}
                  className="text-sm rounded"
                  customStyle={{ fontSize: '12px', margin: 0, padding: '8px' }}
                >
{`.container {
  display: flex;
  align-items: center; /* or flex-start, flex-end */
  height: 200px;
}
/* Controls vertical alignment */`}
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
                    👁️ Live Preview - Align items vertically:
                  </div>
                  <div className="space-y-6">
                    <div className="bg-teal-50 border-2 border-teal-300 p-5 rounded-lg border-l-4 border-l-teal-500">
                      <div className="text-sm font-mono text-teal-600 mb-3">align-items: flex-start</div>
                      <div className="flex items-start gap-2 h-24 bg-gray-100 p-2 rounded">
                        <div className="bg-teal-100 text-teal-900 border-2 border-teal-400 p-2 rounded text-center font-medium w-16 h-8 flex items-center justify-center">A</div>
                        <div className="bg-teal-200 text-teal-900 border-2 border-teal-500 p-2 rounded text-center font-medium w-16 h-12 flex items-center justify-center">B</div>
                        <div className="bg-teal-300 text-teal-900 border-2 border-teal-600 p-2 rounded text-center font-medium w-16 h-6 flex items-center justify-center">C</div>
                      </div>
                    </div>
                    <div className="bg-indigo-50 border-2 border-indigo-300 p-5 rounded-lg border-l-4 border-l-indigo-500">
                      <div className="text-sm font-mono text-indigo-600 mb-3">align-items: center</div>
                      <div className="flex items-center gap-2 h-24 bg-gray-100 p-2 rounded">
                        <div className="bg-indigo-100 text-indigo-900 border-2 border-indigo-400 p-2 rounded text-center font-medium w-16 h-8 flex items-center justify-center">A</div>
                        <div className="bg-indigo-200 text-indigo-900 border-2 border-indigo-500 p-2 rounded text-center font-medium w-16 h-12 flex items-center justify-center">B</div>
                        <div className="bg-indigo-300 text-indigo-900 border-2 border-indigo-600 p-2 rounded text-center font-medium w-16 h-6 flex items-center justify-center">C</div>
                      </div>
                    </div>
                    <div className="bg-pink-50 border-2 border-pink-300 p-5 rounded-lg border-l-4 border-l-pink-500">
                      <div className="text-sm font-mono text-pink-600 mb-3">align-items: stretch</div>
                      <div className="flex items-stretch gap-2 h-24 bg-gray-100 p-2 rounded">
                        <div className="bg-pink-100 text-pink-900 border-2 border-pink-400 p-2 rounded text-center font-medium w-16 flex items-center justify-center">A</div>
                        <div className="bg-pink-200 text-pink-900 border-2 border-pink-500 p-2 rounded text-center font-medium w-16 flex items-center justify-center">B</div>
                        <div className="bg-pink-300 text-pink-900 border-2 border-pink-600 p-2 rounded text-center font-medium w-16 flex items-center justify-center">C</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Complete Layout</h3>
              <div className="bg-gray-50 rounded p-4 mb-4">
                <SyntaxHighlighter 
                  language="css" 
                  style={vscDarkPlus}
                  className="text-sm rounded"
                  customStyle={{ fontSize: '12px', margin: 0, padding: '8px' }}
                >
{`.layout {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 2rem;
}`}
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
                    👁️ Live Preview - Complete flexbox layout:
                  </div>
                  <div className="space-y-6">
                    <div>
                      <div className="text-sm font-bold text-red-600 mb-2">❌ Without Flexbox:</div>
                      <div className="bg-gray-100 border p-4 rounded h-32">
                        <div className="bg-red-100 text-red-900 border-2 border-red-400 p-3 rounded text-center inline-block mr-2">Header</div>
                        <div className="bg-red-200 text-red-900 border-2 border-red-500 p-3 rounded text-center inline-block mr-2">Content</div>
                        <div className="bg-red-300 text-red-900 border-2 border-red-600 p-3 rounded text-center inline-block">Footer</div>
                        <div className="text-xs text-gray-600 mt-2">Elements don't center properly</div>
                      </div>
                    </div>
                    <div>
                      <div className="text-sm font-bold text-green-600 mb-2">✅ With Flexbox:</div>
                      <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-purple-200 p-8 rounded-lg h-32 flex justify-center items-center gap-4">
                        <div className="bg-white text-blue-600 border-2 border-blue-500 px-6 py-3 rounded-lg text-center font-medium shadow-lg">Header</div>
                        <div className="bg-white text-purple-600 border-2 border-purple-500 px-6 py-3 rounded-lg text-center font-medium shadow-lg">Content</div>
                        <div className="bg-white text-indigo-600 border-2 border-indigo-500 px-6 py-3 rounded-lg text-center font-medium shadow-lg">Footer</div>
                      </div>
                      <div className="text-xs text-purple-600 mt-2 font-medium">Perfect centering and spacing with just a few CSS properties!</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Flexbox Interactive Demo */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Flexbox Properties Interactive Demo</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* Flex Direction Demo */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">1. Flex Direction</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Column</h4>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex flex-col gap-2">
                      <div className="bg-green-500 text-white p-3 rounded text-center font-medium">Item 1</div>
                      <div className="bg-green-600 text-white p-3 rounded text-center font-medium">Item 2</div>
                      <div className="bg-green-700 text-white p-3 rounded text-center font-medium">Item 3</div>
                    </div>
                  </div>
                  <code className="text-xs bg-gray-100 px-2 py-1 rounded mt-2 block">flex-direction: column;</code>
                </div>
              </div>
            </div>

            {/* Justify Content Demo */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">2. Justify Content (Horizontal Alignment)</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Center</h4>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex justify-center gap-2">
                      <div className="bg-purple-500 text-white p-2 rounded w-16 text-center text-sm font-medium">1</div>
                      <div className="bg-purple-600 text-white p-2 rounded w-16 text-center text-sm font-medium">2</div>
                      <div className="bg-purple-700 text-white p-2 rounded w-16 text-center text-sm font-medium">3</div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Space Between</h4>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex justify-between">
                      <div className="bg-orange-500 text-white p-2 rounded w-16 text-center text-sm font-medium">1</div>
                      <div className="bg-orange-600 text-white p-2 rounded w-16 text-center text-sm font-medium">2</div>
                      <div className="bg-orange-700 text-white p-2 rounded w-16 text-center text-sm font-medium">3</div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Space Around</h4>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex justify-around">
                      <div className="bg-red-500 text-white p-2 rounded w-16 text-center text-sm font-medium">1</div>
                      <div className="bg-red-600 text-white p-2 rounded w-16 text-center text-sm font-medium">2</div>
                      <div className="bg-red-700 text-white p-2 rounded w-16 text-center text-sm font-medium">3</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Align Items Demo */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">3. Align Items (Vertical Alignment)</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Start</h4>
                  <div className="bg-gray-50 p-4 rounded-lg h-32">
                    <div className="flex items-start gap-2 h-full">
                      <div className="bg-teal-500 text-white p-2 rounded text-sm font-medium">Item</div>
                      <div className="bg-teal-600 text-white p-3 rounded text-sm font-medium">Taller</div>
                      <div className="bg-teal-700 text-white p-2 rounded text-sm font-medium">Item</div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Center</h4>
                  <div className="bg-gray-50 p-4 rounded-lg h-32">
                    <div className="flex items-center gap-2 h-full">
                      <div className="bg-pink-500 text-white p-2 rounded text-sm font-medium">Item</div>
                      <div className="bg-pink-600 text-white p-3 rounded text-sm font-medium">Taller</div>
                      <div className="bg-pink-700 text-white p-2 rounded text-sm font-medium">Item</div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">End</h4>
                  <div className="bg-gray-50 p-4 rounded-lg h-32">
                    <div className="flex items-end gap-2 h-full">
                      <div className="bg-indigo-500 text-white p-2 rounded text-sm font-medium">Item</div>
                      <div className="bg-indigo-600 text-white p-3 rounded text-sm font-medium">Taller</div>
                      <div className="bg-indigo-700 text-white p-2 rounded text-sm font-medium">Item</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Complete Layout Example */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Complete Layout Example</h2>
          
          <p className="text-gray-700 mb-6">
            Here's how all these flexbox concepts work together to create a real website layout:
          </p>

          <div className="border-2 border-gray-200 rounded-lg p-4 bg-gray-50">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 rounded-lg mb-4 text-center">
              <h1 className="text-2xl font-bold mb-2">Profile Header</h1>
              <p>Centered content using flexbox</p>
            </div>
            
            {/* Main Layout */}
            <div className="flex gap-4 flex-wrap">
              {/* Sidebar */}
              <div className="flex-1 min-w-64 space-y-4">
                <div className="bg-white p-4 rounded-lg shadow">
                  <h3 className="font-semibold mb-2">Personal Info</h3>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p>Name: John Doe</p>
                    <p>Age: 28</p>
                    <p>Location: New York</p>
                  </div>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow">
                  <h3 className="font-semibold mb-2">Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">HTML</span>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">CSS</span>
                    <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">JavaScript</span>
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="flex-2 min-w-96">
                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="font-semibold mb-4">About Me</h3>
                  <p className="text-gray-700 mb-4">
                    I'm a passionate web developer who loves creating beautiful and functional websites. 
                    This layout uses flexbox to create a responsive design that looks great on all devices.
                  </p>
                  <div className="flex justify-between items-center pt-4 border-t">
                    <span className="text-sm text-gray-500">Updated: Today</span>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 text-sm">
                      Edit Profile
                    </button>
                    </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-4 text-sm text-gray-600">
            💡 This layout uses <code className="bg-gray-100 px-1 rounded">display: flex</code>, 
            <code className="bg-gray-100 px-1 rounded">gap</code>, 
            <code className="bg-gray-100 px-1 rounded">flex-wrap</code>, and 
            <code className="bg-gray-100 px-1 rounded">min-width</code> to create a responsive design!
          </div>
        </div>

        {/* Practical Exercise */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <Code className="h-6 w-6 mr-2" />
            Practical Exercise: Convert Your Profile to Flexbox
          </h2>

          <p className="text-gray-700 mb-6">
            Transform your profile page from Day 2 into a modern, flexible layout using Flexbox. 
            This will make your page responsive and professionally structured.
          </p>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Complete Flexbox Layout:</h3>
            <SyntaxHighlighter 
              language="css" 
              style={vscDarkPlus}
              className="rounded-lg"
            >
              {responsiveLayout}
            </SyntaxHighlighter>
          </div>

          <div className="bg-green-50 rounded-lg p-6 border border-green-200">
            <h4 className="font-semibold text-green-900 mb-3">Your Task:</h4>
            <ol className="list-decimal list-inside space-y-2 text-green-800">
              <li>Add flexbox to your main container</li>
              <li>Create a flexible header section</li>
              <li>Use flexbox for the main content area</li>
              <li>Make sections responsive with flex-wrap</li>
              <li>Add a sidebar for navigation or skills</li>
              <li>Ensure the layout works on mobile devices</li>
              <li>Test different screen sizes</li>
            </ol>
          </div>
        </div>

        {/* Week 1 Project Completion */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg p-8 mb-8 text-white">
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <Layers className="h-6 w-6 mr-2" />
            Week 1 Project: Profile Homepage
          </h2>
          <p className="text-blue-50 mb-6 font-medium">
            Congratulations! You've completed Week 1. Your profile homepage now includes:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-200" />
                <span>Semantic HTML structure</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-200" />
                <span>Beautiful CSS styling</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-200" />
                <span>Flexible layouts with Flexbox</span>
              </li>
            </ul>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-200" />
                <span>Responsive design principles</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-200" />
                <span>Professional appearance</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-200" />
                <span>Solid foundation for Week 2</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Try It Yourself Exercise */}
        <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-emerald-900 mb-6 flex items-center">
            <Layers className="h-6 w-6 mr-2" />
            Try It Yourself: Create a Professional Layout
          </h2>
          
          <div className="bg-white rounded-lg p-6 mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">🚀 Your Mission:</h3>
            <p className="text-gray-700 mb-4">
              Transform your styled About Me page into a professional, responsive layout using Flexbox. 
              Create a modern card-based design that looks great on all devices.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Layout Goals:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-emerald-600" />
                    <span>Create a centered main container</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-emerald-600" />
                    <span>Use flexbox for responsive layout</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-emerald-600" />
                    <span>Organize content in cards</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-emerald-600" />
                    <span>Add proper spacing and alignment</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Flexbox Properties to Use:</h4>
                <div className="space-y-2">
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">display: flex</span>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">flex-direction</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm">justify-content</span>
                    <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm">align-items</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-pink-100 text-pink-800 px-2 py-1 rounded text-sm">gap</span>
                    <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded text-sm">flex-wrap</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Expected Result:</h3>
            <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg p-4">
              {/* Mobile-first responsive preview */}
              <div className="max-w-4xl mx-auto bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg p-6">
                {/* Header Card */}
                <div className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-xl p-8 mb-6 text-center shadow-lg">
                  <h1 className="text-3xl font-bold mb-2">Sarah Johnson</h1>
                  <p className="text-emerald-50 text-lg font-medium">Web Development Student</p>
                </div>
                
                {/* Content Cards using Flexbox */}
                <div className="flex flex-wrap gap-6">
                  {/* About Card */}
                  <div className="flex-1 min-w-80 bg-white rounded-xl p-6 shadow-lg">
                    <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                      <span className="w-3 h-3 bg-blue-500 rounded-full mr-3"></span>
                      About Me
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                      Hi! I'm Sarah, a beginner web developer learning HTML, CSS, and JavaScript. 
                      I love creating things and solving problems.
                    </p>
                  </div>
                  
                  {/* Skills Card */}
                  <div className="flex-1 min-w-72 bg-white rounded-xl p-6 shadow-lg">
                    <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                      <span className="w-3 h-3 bg-green-500 rounded-full mr-3"></span>
                      My Interests
                    </h2>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">📸 Photography</span>
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">📚 Reading</span>
                      <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">💻 Coding</span>
                      <span className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm">🎸 Music</span>
                    </div>
                  </div>
                </div>
                
                {/* Footer */}
                <div className="mt-6 text-center">
                  <div className="bg-white rounded-lg p-4 shadow-sm inline-flex items-center gap-3">
                    <span className="text-gray-600">Made with</span>
                    <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-sm">HTML</span>
                    <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded text-sm">CSS</span>
                    <span className="bg-green-100 text-green-600 px-2 py-1 rounded text-sm">Flexbox</span>
                  </div>
                </div>
              </div>
              <div className="text-xs text-gray-500 mt-3 text-center">
                🎯 Professional, responsive layout using Flexbox - scales perfectly from mobile to desktop!
              </div>
            </div>
          </div>
          
          <div className="bg-emerald-100 rounded-lg p-4 mt-6">
            <h4 className="font-semibold text-emerald-900 mb-2">💡 Pro Tips:</h4>
            <ul className="text-emerald-800 text-sm space-y-1">
              <li>• Use <code className="bg-emerald-200 px-1 rounded">max-width</code> to prevent content from getting too wide</li>
              <li>• Add <code className="bg-emerald-200 px-1 rounded">min-width</code> to cards so they don't get too narrow</li>
              <li>• Experiment with <code className="bg-emerald-200 px-1 rounded">flex-wrap</code> for responsive behavior</li>
              <li>• Use consistent spacing with <code className="bg-emerald-200 px-1 rounded">gap</code> property</li>
            </ul>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Link
            href="/lessons/week-1/day-2"
            className="flex items-center space-x-2 text-gray-600 hover:text-gray-800"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Previous: CSS Basics</span>
          </Link>
          
          <Link
            href="/lessons/week-2"
            className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg flex items-center space-x-2 transition-colors"
          >
            <span>Next: Week 2 - JavaScript Basics</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
