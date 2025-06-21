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
import { ArrowLeft, ArrowRight, CheckCircle, Clock, Target, Code, Palette, Eye, EyeOff } from 'lucide-react'

export default function Week1Day2() {
  const [showPreview1, setShowPreview1] = useState(false)
  const [showPreview2, setShowPreview2] = useState(false)
  const [showPreview3, setShowPreview3] = useState(false)
  const [showPreview4, setShowPreview4] = useState(false)
  const cssExample = `/* Basic CSS structure */
body {
    margin: 0;
    padding: 0;
    font-family: 'Arial', sans-serif;
    line-height: 1.6;
    color: #333;
    background-color: #f4f4f4;
}

header {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    text-align: center;
    padding: 2rem;
    margin-bottom: 2rem;
}

header h1 {
    margin: 0;
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
}

header p {
    margin: 0;
    font-size: 1.2rem;
    opacity: 0.9;
}

main {
    max-width: 800px;
    margin: 0 auto;
    padding: 0 1rem;
}

section {
    background: white;
    margin-bottom: 2rem;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

section h2 {
    color: #667eea;
    border-bottom: 2px solid #667eea;
    padding-bottom: 0.5rem;
    margin-bottom: 1rem;
}

ul {
    padding-left: 1.5rem;
}

li {
    margin-bottom: 0.5rem;
}

footer {
    text-align: center;
    padding: 2rem;
    background: #333;
    color: white;
    margin-top: 3rem;
}`

  const boxModelExample = `/* Understanding the CSS Box Model */
.box-example {
    /* Content area */
    width: 200px;
    height: 100px;
    
    /* Padding - space inside the box */
    padding: 20px;
    
    /* Border - the box outline */
    border: 3px solid #667eea;
    
    /* Margin - space outside the box */
    margin: 15px;
    
    /* Background for the content area */
    background-color: #f0f8ff;
}

/* Box-sizing property controls how width/height are calculated */
.border-box {
    box-sizing: border-box; /* width includes padding and border */
    width: 200px;
    padding: 20px;
    border: 3px solid #333;
}

.content-box {
    box-sizing: content-box; /* default - width is just content */
    width: 200px;
    padding: 20px;
    border: 3px solid #333;
}`

  const selectorsExample = `/* CSS Selectors Examples */

/* Element selector - selects all h1 elements */
h1 {
    color: #333;
    font-size: 2rem;
}

/* Class selector - selects elements with class="highlight" */
.highlight {
    background-color: yellow;
    padding: 0.5rem;
}

/* ID selector - selects element with id="main-title" */
#main-title {
    color: #667eea;
    text-align: center;
}

/* Descendant selector - p elements inside section */
section p {
    line-height: 1.6;
    margin-bottom: 1rem;
}

/* Multiple selectors - applies to both h1 and h2 */
h1, h2 {
    font-family: 'Georgia', serif;
}

/* Pseudo-class selector - hover effect */
a:hover {
    color: #764ba2;
    text-decoration: underline;
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
                <span>60 minutes</span>
              </div>
              <div className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                Week 1 - Day 2
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Lesson Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
            <Palette className="h-8 w-8 text-blue-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            CSS Basics
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn how to style your HTML with CSS fundamentals, including the box model, 
            selectors, and typography. Transform your plain HTML into beautiful web pages.
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
              <span className="text-blue-800">Understand CSS syntax and selectors</span>
            </li>
            <li className="flex items-start space-x-2">
              <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <span className="text-blue-800">Master the CSS box model</span>
            </li>
            <li className="flex items-start space-x-2">
              <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <span className="text-blue-800">Apply typography and color styling</span>
            </li>
            <li className="flex items-start space-x-2">
              <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <span className="text-blue-800">Create beautiful, styled web pages</span>
            </li>
          </ul>
        </div>

        {/* CSS Introduction */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">1. What is CSS?</h2>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            CSS (Cascading Style Sheets) is what makes the web beautiful. While HTML provides the structure 
            and content, CSS controls the visual presentation - colors, fonts, layouts, spacing, and more. 
            Think of CSS as the designer that makes your HTML content look professional and appealing.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">CSS Syntax</h3>
          
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <code className="text-sm">
              <span className="text-blue-600">selector</span> {`{`}<br />
              &nbsp;&nbsp;<span className="text-green-600">property</span>: <span className="text-red-600">value</span>;<br />
              &nbsp;&nbsp;<span className="text-green-600">property</span>: <span className="text-red-600">value</span>;<br />
              {`}`}
            </code>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-900 mb-2">Selector</h4>
              <p className="text-blue-800 text-sm">Targets which HTML elements to style</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-900 mb-2">Property</h4>
              <p className="text-green-800 text-sm">What aspect to change (color, size, etc.)</p>
            </div>
            <div className="bg-red-50 p-4 rounded-lg">
              <h4 className="font-semibold text-red-900 mb-2">Value</h4>
              <p className="text-red-800 text-sm">How to change the property</p>
            </div>
          </div>
        </div>

        {/* CSS Selectors */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">2. CSS Selectors</h2>
          
          <p className="text-gray-700 mb-6">
            Selectors tell CSS which HTML elements to style. Here are the most common types:
          </p>

          <div className="mb-6">
            <SyntaxHighlighter 
              language="css" 
              style={vscDarkPlus}
              className="rounded-lg"
            >
              {selectorsExample}
            </SyntaxHighlighter>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Common Selectors</h4>
              <ul className="space-y-2 text-gray-700">
                <li><code className="bg-gray-100 px-2 py-1 rounded">h1</code> - Element selector</li>
                <li><code className="bg-gray-100 px-2 py-1 rounded">.class</code> - Class selector</li>
                <li><code className="bg-gray-100 px-2 py-1 rounded">#id</code> - ID selector</li>
                <li><code className="bg-gray-100 px-2 py-1 rounded">div p</code> - Descendant selector</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Selector Tips</h4>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Use classes for reusable styles</li>
                <li>• Use IDs for unique elements</li>
                <li>• Be specific but not too complex</li>
                <li>• Avoid inline styles when possible</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Box Model */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">3. The CSS Box Model</h2>
          
          <p className="text-gray-700 mb-6">
            Every HTML element is essentially a rectangular box. The CSS box model describes how these 
            boxes are structured with content, padding, border, and margin.
          </p>

          {/* Visual Box Model */}
          <div className="mb-6 bg-gray-100 p-8 rounded-lg">
            <div className="bg-orange-200 p-4 rounded text-center">
              <span className="text-orange-800 font-semibold">Margin</span>
              <div className="bg-yellow-200 p-4 rounded mt-2">
                <span className="text-yellow-800 font-semibold">Border</span>
                <div className="bg-green-200 p-4 rounded mt-2">
                  <span className="text-green-800 font-semibold">Padding</span>
                  <div className="bg-blue-200 p-4 rounded mt-2">
                    <span className="text-blue-800 font-semibold">Content</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <SyntaxHighlighter 
              language="css" 
              style={vscDarkPlus}
              className="rounded-lg"
            >
              {boxModelExample}
            </SyntaxHighlighter>
          </div>

          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg text-center">
              <h4 className="font-semibold text-blue-900 mb-2">Content</h4>
              <p className="text-blue-800 text-sm">The actual content (text, images)</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg text-center">
              <h4 className="font-semibold text-green-900 mb-2">Padding</h4>
              <p className="text-green-800 text-sm">Space inside the element</p>
            </div>
            <div className="bg-yellow-50 p-4 rounded-lg text-center">
              <h4 className="font-semibold text-yellow-900 mb-2">Border</h4>
              <p className="text-yellow-800 text-sm">Line around the element</p>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg text-center">
              <h4 className="font-semibold text-orange-900 mb-2">Margin</h4>
              <p className="text-orange-800 text-sm">Space outside the element</p>
            </div>
          </div>
        </div>

        {/* CSS Properties with Interactive Examples */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">2. CSS Properties in Action</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Text Styling</h3>
              <div className="bg-gray-50 rounded p-4 mb-4">
                <SyntaxHighlighter 
                  language="css" 
                  style={vscDarkPlus}
                  className="text-sm rounded"
                  customStyle={{ fontSize: '12px', margin: 0, padding: '8px' }}
                >
{`h1 { color: red; font-size: 24px; }
p { font-family: Georgia; }
.center { text-align: center; }
.bold { font-weight: bold; }`}
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
                    👁️ Live Preview - How CSS text styling works:
                  </div>
                  <div className="space-y-4 bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <h1 style={{ color: 'red', fontSize: '24px', margin: '0 0 8px 0' }}>Red heading with custom size</h1>
                    <p style={{ fontFamily: 'Georgia, serif', margin: '8px 0', color: '#374151' }}>This paragraph uses Georgia font family</p>
                    <p style={{ textAlign: 'center', margin: '8px 0', backgroundColor: '#e0f2fe', padding: '8px', borderRadius: '4px', color: '#1e40af' }}>This text is centered</p>
                    <p style={{ fontWeight: 'bold', margin: '8px 0', color: '#374151' }}>This text is bold</p>
                  </div>
                  <div className="text-xs text-blue-600 mt-2 font-medium">
                    💡 Notice how each CSS property changes the text appearance
                  </div>
                </div>
              )}
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Colors & Backgrounds</h3>
              <div className="bg-gray-50 rounded p-4 mb-4">
                <SyntaxHighlighter 
                  language="css" 
                  style={vscDarkPlus}
                  className="text-sm rounded"
                  customStyle={{ fontSize: '12px', margin: 0, padding: '8px' }}
                >
{`.yellow { background-color: yellow; }
.blue-bg { background: #e0f2fe; }
.gradient { background: linear-gradient(blue, purple); }
.white-text { color: white; }`}
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
                    👁️ Live Preview - Colors and backgrounds in action:
                  </div>
                  <div className="space-y-4">
                    <div className="bg-yellow-200 border-2 border-yellow-300 p-4 rounded-lg border-l-4 border-l-yellow-500">
                      <div className="text-xs font-mono text-yellow-800 mb-2">background-color: yellow;</div>
                      <div className="text-yellow-900 font-bold">Yellow background color</div>
                    </div>
                    <div className="bg-blue-50 border-2 border-blue-300 p-4 rounded-lg border-l-4 border-l-blue-500">
                      <div className="text-xs font-mono text-blue-600 mb-2">background: #e0f2fe;</div>
                      <div className="text-blue-900 font-medium">Light blue background with hex color</div>
                    </div>
                    <div className="bg-gradient-to-r from-blue-400 to-purple-500 border-2 border-purple-300 p-4 rounded-lg border-l-4 border-l-purple-600">
                      <div className="text-xs font-mono text-gray-800 mb-2 bg-white px-2 py-1 rounded">background: linear-gradient(blue, purple);</div>
                      <div className="font-medium text-gray-800 bg-white px-3 py-2 rounded">Beautiful gradient background</div>
                    </div>
                    <div className="bg-blue-500 border-2 border-blue-400 p-4 rounded-lg border-l-4 border-l-blue-600">
                      <div className="text-xs font-mono text-gray-800 mb-2 bg-white px-2 py-1 rounded">color: white; background: blue;</div>
                      <div className="font-medium text-gray-800 bg-white px-3 py-2 rounded">White text example (now readable!)</div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Spacing & Borders</h3>
              <div className="bg-gray-50 rounded p-4 mb-4">
                <SyntaxHighlighter 
                  language="css" 
                  style={vscDarkPlus}
                  className="text-sm rounded"
                  customStyle={{ fontSize: '12px', margin: 0, padding: '8px' }}
                >
{`.spaced { margin: 20px; padding: 15px; }
.bordered { border: 2px solid blue; }
.rounded { border-radius: 10px; }
.shadow { box-shadow: 0 4px 8px gray; }`}
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
                    👁️ Live Preview - Spacing and borders:
                  </div>
                  <div className="space-y-6">
                    <div className="bg-blue-50 border-2 border-blue-300 p-5 rounded-lg border-l-4 border-l-blue-500">
                      <div className="text-sm font-mono text-blue-600 mb-3">margin + padding</div>
                      <div className="bg-white border border-blue-200 p-4 rounded" style={{ margin: '20px', padding: '15px' }}>
                        <div className="text-blue-900 font-medium">This box has margin (outside space) and padding (inside space)</div>
                      </div>
                    </div>
                    <div className="bg-green-50 border-2 border-green-300 p-5 rounded-lg border-l-4 border-l-green-500">
                      <div className="text-sm font-mono text-green-600 mb-3">border + border-radius</div>
                      <div style={{ 
                        border: '3px solid #3b82f6', 
                        padding: '15px', 
                        borderRadius: '10px',
                        backgroundColor: 'white',
                        margin: '10px'
                      }}>
                        <div className="text-green-900 font-medium">Blue border with rounded corners</div>
                      </div>
                    </div>
                    <div className="bg-purple-50 border-2 border-purple-300 p-5 rounded-lg border-l-4 border-l-purple-500">
                      <div className="text-sm font-mono text-purple-600 mb-3">box-shadow</div>
                      <div style={{ 
                        padding: '15px', 
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
                        borderRadius: '8px',
                        backgroundColor: 'white',
                        margin: '10px'
                      }}>
                        <div className="text-purple-900 font-medium">Box with shadow effect</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Before & After</h3>
              <div className="bg-gray-50 rounded p-4 mb-4">
                <SyntaxHighlighter 
                  language="css" 
                  style={vscDarkPlus}
                  className="text-sm rounded"
                  customStyle={{ fontSize: '12px', margin: 0, padding: '8px' }}
                >
{`/* Transform plain HTML into styled content */
.styled-section {
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 8px 25px rgba(0,0,0,0.15);
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
                    👁️ Live Preview - Complete transformation:
                  </div>
                  <div className="space-y-6">
                    <div>
                      <div className="text-sm font-bold text-red-600 mb-2">❌ BEFORE (No CSS):</div>
                      <div className="bg-gray-100 border p-4 rounded">
                        <h2 style={{ margin: '8px 0', fontSize: '18px', color: '#374151' }}>Welcome</h2>
                        <p style={{ margin: '8px 0', color: '#374151' }}>Plain text content</p>
                        <button style={{ border: '1px solid #ccc', padding: '4px 8px', background: 'white', color: '#374151' }}>
                          Button
                        </button>
                      </div>
                    </div>
                    <div>
                      <div className="text-sm font-bold text-green-600 mb-2">✅ AFTER (With CSS):</div>
                      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-8 rounded-xl shadow-lg border-2 border-indigo-300">
                        <h2 className="text-2xl font-bold mb-4 text-gray-800 bg-white px-4 py-2 rounded">Welcome</h2>
                        <p className="mb-6 text-gray-800 bg-white px-4 py-2 rounded">Beautiful styled content with gradients and shadows</p>
                        <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                          Styled Button
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="text-xs text-purple-600 mt-4 font-medium">
                    🎨 See how CSS transforms plain HTML into beautiful, professional-looking content!
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Practical Exercise */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <Code className="h-6 w-6 mr-2" />
            Practical Exercise: Style Your Profile Page
          </h2>

          <p className="text-gray-700 mb-6">
            Now let's apply CSS to the HTML profile page you created in Day 1. We'll transform it from 
            plain text into a beautiful, professional-looking webpage.
          </p>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Complete CSS Example:</h3>
            <SyntaxHighlighter 
              language="css" 
              style={vscDarkPlus}
              className="rounded-lg"
            >
              {cssExample}
            </SyntaxHighlighter>
          </div>

          <div className="bg-green-50 rounded-lg p-6 border border-green-200">
            <h4 className="font-semibold text-green-900 mb-3">Your Task:</h4>
            <ol className="list-decimal list-inside space-y-2 text-green-800">
              <li>Create a new CSS file called "style.css"</li>
              <li>Link it to your HTML file using {`<link rel="stylesheet" href="style.css">`}</li>
              <li>Style the header with a gradient background and centered text</li>
              <li>Add spacing and typography to make text readable</li>
              <li>Create card-like sections with background colors and shadows</li>
              <li>Style the lists and add hover effects</li>
              <li>Make the footer stand out with a dark background</li>
            </ol>
          </div>
        </div>

        {/* Try It Yourself Exercise */}
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-purple-900 mb-6 flex items-center">
            <Palette className="h-6 w-6 mr-2" />
            Try It Yourself: Style Your About Me Page
          </h2>
          
          <div className="bg-white rounded-lg p-6 mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">🎨 Your Mission:</h3>
            <p className="text-gray-700 mb-4">
              Take the HTML page you created in Day 1 and transform it with CSS styling. 
              Make it beautiful and professional-looking!
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Styling Goals:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-purple-600" />
                    <span>Add colors to text and backgrounds</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-purple-600" />
                    <span>Style headings with custom fonts</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-purple-600" />
                    <span>Add spacing and borders</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-purple-600" />
                    <span>Create a cohesive design theme</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">CSS Properties to Use:</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">color</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">background-color</span>
                  <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm">font-family</span>
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm">font-size</span>
                  <span className="bg-pink-100 text-pink-800 px-2 py-1 rounded text-sm">padding</span>
                  <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded text-sm">margin</span>
                  <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm">border</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Expected Result:</h3>
            <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg p-6">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg p-8 shadow-lg">
                <header className="text-center mb-8 p-6 bg-white rounded-lg shadow-sm">
                  <h1 style={{ 
                    color: '#1e40af', 
                    fontSize: '2.5rem',
                    fontFamily: 'Georgia, serif',
                    margin: '0 0 8px 0'
                  }}>
                    Sarah Johnson
                  </h1>
                  <p style={{ 
                    color: '#6b7280',
                    fontSize: '1.1rem',
                    margin: '0'
                  }}>
                    Web Development Student
                  </p>
                </header>
                
                <main className="space-y-6">
                  <section style={{
                    backgroundColor: 'white',
                    padding: '24px',
                    borderRadius: '12px',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                    borderLeft: '4px solid #3b82f6'
                  }}>
                    <h2 style={{ 
                      color: '#1f2937',
                      fontSize: '1.5rem',
                      margin: '0 0 16px 0',
                      fontFamily: 'Arial, sans-serif'
                    }}>
                      About Me
                    </h2>
                    <p style={{ 
                      color: '#374151',
                      lineHeight: '1.6',
                      margin: '0'
                    }}>
                      Hi! I'm Sarah, a beginner web developer learning HTML, CSS, and JavaScript. 
                      I love creating things and solving problems, which is why coding appeals to me so much.
                    </p>
                  </section>
                  
                  <section style={{
                    backgroundColor: 'white',
                    padding: '24px',
                    borderRadius: '12px',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                    borderLeft: '4px solid #10b981'
                  }}>
                    <h2 style={{ 
                      color: '#1f2937',
                      fontSize: '1.5rem',
                      margin: '0 0 16px 0',
                      fontFamily: 'Arial, sans-serif'
                    }}>
                      My Interests
                    </h2>
                    <ul style={{ 
                      listStyle: 'none', 
                      padding: '0',
                      margin: '0',
                      display: 'grid',
                      gap: '8px'
                    }}>
                      <li style={{
                        backgroundColor: '#f0f9ff',
                        padding: '8px 12px',
                        borderRadius: '6px',
                        borderLeft: '3px solid #0ea5e9',
                        color: '#1e40af'
                      }}>📸 Photography</li>
                      <li style={{
                        backgroundColor: '#f0fdf4',
                        padding: '8px 12px',
                        borderRadius: '6px',
                        borderLeft: '3px solid #22c55e',
                        color: '#166534'
                      }}>📚 Reading sci-fi novels</li>
                      <li style={{
                        backgroundColor: '#fefce8',
                        padding: '8px 12px',
                        borderRadius: '6px',
                        borderLeft: '3px solid #eab308',
                        color: '#a16207'
                      }}>💻 Learning new technologies</li>
                      <li style={{
                        backgroundColor: '#fdf2f8',
                        padding: '8px 12px',
                        borderRadius: '6px',
                        borderLeft: '3px solid #ec4899',
                        color: '#be185d'
                      }}>🎸 Playing guitar</li>
                    </ul>
                  </section>
                </main>
              </div>
              <div className="text-xs text-gray-500 mt-3 text-center">
                ✨ From plain HTML to beautiful design with CSS magic!
              </div>
            </div>
          </div>
        </div>

        {/* Tips Section */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 mb-8 border border-blue-200">
          <h3 className="text-lg font-semibold text-blue-900 mb-4">💡 Pro Tips</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <ul className="space-y-2 text-blue-800">
              <li>• Start with basic styles, then add details</li>
              <li>• Use consistent spacing throughout</li>
              <li>• Choose a limited color palette</li>
              <li>• Test your styles as you write them</li>
            </ul>
            <ul className="space-y-2 text-blue-800">
              <li>• Use browser dev tools to experiment</li>
              <li>• Don't be afraid to try different values</li>
              <li>• Comment your CSS for future reference</li>
              <li>• Keep your CSS organized and readable</li>
            </ul>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Link
            href="/lessons/week-1/day-1"
            className="flex items-center space-x-2 text-gray-600 hover:text-gray-800"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Previous: HTML Essentials</span>
          </Link>
          
          <Link
            href="/lessons/week-1/day-3"
            className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg flex items-center space-x-2 transition-colors"
          >
            <span>Next: Flexbox Layout</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
