'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Clock, Target, CheckCircle, Code, Play, Brain, Eye, EyeOff } from 'lucide-react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'

export default function Week2Day1() {
  const [showPreview1, setShowPreview1] = useState(false)
  const [showPreview2, setShowPreview2] = useState(false)
  const [showPreview3, setShowPreview3] = useState(false)

  const basicJavaScript = `// Variables - storing data
let name = "Sarah";
let age = 25;
let isStudent = true;

// Output to console
console.log("Hello, my name is " + name);
console.log("I am " + age + " years old");

// Getting elements from HTML
let heading = document.getElementById("main-title");
let button = document.querySelector(".my-button");

// Changing content
heading.textContent = "Welcome to JavaScript!";
heading.style.color = "blue";`

  const dataTypes = `// Different types of data in JavaScript

// Strings (text)
let firstName = "John";
let lastName = 'Doe';
let fullName = firstName + " " + lastName;

// Numbers
let score = 95;
let price = 29.99;
let total = score + price;

// Booleans (true/false)
let isLoggedIn = true;
let hasPermission = false;

// Arrays (lists)
let colors = ["red", "green", "blue"];
let numbers = [1, 2, 3, 4, 5];

// Objects (groups of related data)
let person = {
    name: "Alice",
    age: 30,
    city: "New York"
};

// Checking types
console.log(typeof firstName);  // "string"
console.log(typeof score);      // "number"
console.log(typeof isLoggedIn); // "boolean"`

  const domManipulation = `// Finding elements in your HTML
let title = document.getElementById("page-title");
let allParagraphs = document.querySelectorAll("p");
let firstButton = document.querySelector("button");

// Changing content
title.textContent = "New Title!";
title.innerHTML = "<em>Stylized Title</em>";

// Changing styles
title.style.color = "purple";
title.style.fontSize = "2rem";
title.style.backgroundColor = "lightblue";

// Adding and removing CSS classes
title.classList.add("highlight");
title.classList.remove("old-style");
title.classList.toggle("active");

// Creating new elements
let newParagraph = document.createElement("p");
newParagraph.textContent = "This paragraph was created with JavaScript!";
document.body.appendChild(newParagraph);`

  const practicalExample = `<!DOCTYPE html>
<html>
<head>
    <title>My Interactive Page</title>
    <style>
        .highlight { background-color: yellow; }
        .large { font-size: 1.5rem; }
        .hidden { display: none; }
    </style>
</head>
<body>
    <h1 id="main-title">Welcome!</h1>
    <p id="description">This is my webpage.</p>
    <button id="change-btn">Click me!</button>
    <div id="output"></div>

    <script>
        // Get elements
        let title = document.getElementById("main-title");
        let description = document.getElementById("description");
        let button = document.getElementById("change-btn");
        let output = document.getElementById("output");

        // Change content when page loads
        title.textContent = "Welcome to JavaScript!";
        description.textContent = "JavaScript makes web pages interactive.";

        // Add some style
        title.style.color = "blue";
        description.classList.add("highlight");

        // Show a message
        output.innerHTML = "<p>Page loaded successfully!</p>";
    </script>
</body>
</html>`

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link 
              href="/lessons/week-2"
              className="inline-flex items-center text-primary-600 hover:text-primary-700"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Week 2
            </Link>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <Clock className="h-4 w-4" />
                <span>90 minutes</span>
              </div>
              <div className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                Week 2 - Day 1
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Lesson Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-100 rounded-full mb-4">
            <Brain className="h-8 w-8 text-yellow-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            JavaScript Syntax & Variables
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Welcome to programming! Learn the fundamentals of JavaScript, store data in variables, 
            and start manipulating your webpage content.
          </p>
        </div>

        {/* Learning Objectives */}
        <div className="bg-yellow-50 rounded-lg p-6 mb-8 border border-yellow-200">
          <h2 className="text-xl font-semibold text-yellow-900 mb-4 flex items-center">
            <Target className="h-5 w-5 mr-2" />
            Learning Objectives
          </h2>
          <ul className="space-y-2">
            <li className="flex items-start space-x-2">
              <CheckCircle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
              <span className="text-yellow-800">Understand JavaScript syntax and basic programming concepts</span>
            </li>
            <li className="flex items-start space-x-2">
              <CheckCircle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
              <span className="text-yellow-800">Create and use variables to store different types of data</span>
            </li>
            <li className="flex items-start space-x-2">
              <CheckCircle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
              <span className="text-yellow-800">Select and modify HTML elements using JavaScript</span>
            </li>
            <li className="flex items-start space-x-2">
              <CheckCircle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
              <span className="text-yellow-800">Use console.log() for debugging and output</span>
            </li>
          </ul>
        </div>

        {/* What is JavaScript */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">1. What is JavaScript?</h2>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            JavaScript is the programming language of the web. While HTML creates structure and CSS adds style, 
            JavaScript brings websites to life by adding interactivity, animations, and dynamic content.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div className="bg-blue-50 rounded-lg p-6 text-center">
              <h3 className="text-lg font-semibold text-blue-900 mb-3">HTML</h3>
              <p className="text-blue-800 text-sm">Structure & Content</p>
              <p className="text-blue-600 text-xs mt-2">The skeleton of your webpage</p>
            </div>
            <div className="bg-green-50 rounded-lg p-6 text-center">
              <h3 className="text-lg font-semibold text-green-900 mb-3">CSS</h3>
              <p className="text-green-800 text-sm">Style & Layout</p>
              <p className="text-green-600 text-xs mt-2">The appearance of your webpage</p>
            </div>
            <div className="bg-yellow-50 rounded-lg p-6 text-center">
              <h3 className="text-lg font-semibold text-yellow-900 mb-3">JavaScript</h3>
              <p className="text-yellow-800 text-sm">Behavior & Interactivity</p>
              <p className="text-yellow-600 text-xs mt-2">The brain of your webpage</p>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Your First JavaScript Code:</h3>
            <SyntaxHighlighter 
              language="javascript" 
              style={vscDarkPlus}
              className="rounded-lg"
            >
              {basicJavaScript}
            </SyntaxHighlighter>
          </div>

          <div className="bg-blue-50 rounded-lg p-4">
            <h4 className="font-semibold text-blue-900 mb-2">💡 Key Points:</h4>
            <ul className="text-blue-800 text-sm space-y-1">
              <li>• JavaScript runs in the browser and can change your webpage</li>
              <li>• Use console.log() to output information for debugging</li>
              <li>• JavaScript is case-sensitive: "Name" and "name" are different</li>
              <li>• End statements with semicolons (;) for good practice</li>
            </ul>
          </div>
        </div>

        {/* Variables and Data Types */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">2. Variables & Data Types</h2>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            Variables are containers that store data. Think of them as labeled boxes where you can put different 
            types of information that your program can use and modify.
          </p>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Common Data Types:</h3>
            <SyntaxHighlighter 
              language="javascript" 
              style={vscDarkPlus}
              className="rounded-lg"
            >
              {dataTypes}
            </SyntaxHighlighter>
          </div>

          {/* Interactive Example 1 */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Variables in Action:</h3>
            
            <button
              onClick={() => setShowPreview1(!showPreview1)}
              className="flex items-center space-x-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg text-sm font-medium transition-colors mb-4"
            >
              {showPreview1 ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              <span>{showPreview1 ? 'Hide Example' : 'Show Interactive Example'}</span>
            </button>
            
            {showPreview1 && (
              <div className="bg-white border-2 border-yellow-300 rounded-lg p-6 shadow-lg">
                <div className="text-sm text-yellow-700 mb-4 font-semibold bg-yellow-50 px-3 py-2 rounded">
                  👁️ Live Example - Variables storing different data:
                </div>
                <div className="bg-gray-900 rounded-lg p-4 text-green-400 font-mono text-sm mb-4">
                  <div>let studentName = "Alex Johnson";</div>
                  <div>let currentGrade = 87;</div>
                  <div>let isEnrolled = true;</div>
                  <div className="text-gray-500">// Output:</div>
                  <div className="text-white">Student: Alex Johnson</div>
                  <div className="text-white">Grade: 87</div>
                  <div className="text-white">Enrolled: true</div>
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">String</h4>
                    <p className="text-blue-800 text-sm">Text data in quotes</p>
                    <code className="text-xs bg-blue-100 px-2 py-1 rounded">"Alex Johnson"</code>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-900 mb-2">Number</h4>
                    <p className="text-green-800 text-sm">Numeric data</p>
                    <code className="text-xs bg-green-100 px-2 py-1 rounded">87</code>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-purple-900 mb-2">Boolean</h4>
                    <p className="text-purple-800 text-sm">True or false</p>
                    <code className="text-xs bg-purple-100 px-2 py-1 rounded">true</code>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="font-semibold text-gray-900 mb-3">Variable Naming Rules</h4>
              <ul className="text-gray-700 text-sm space-y-2">
                <li>✅ Must start with letter, $ or _</li>
                <li>✅ Can contain letters, numbers, $ and _</li>
                <li>❌ Cannot start with a number</li>
                <li>❌ Cannot contain spaces or special characters</li>
                <li>✅ Use camelCase: firstName, lastName</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="font-semibold text-gray-900 mb-3">Good vs Bad Examples</h4>
              <div className="text-sm space-y-1">
                <div className="text-green-600">✅ let userName = "john";</div>
                <div className="text-green-600">✅ let user_age = 25;</div>
                <div className="text-green-600">✅ let isActive = true;</div>
                <div className="text-red-600">❌ let 2name = "john";</div>
                <div className="text-red-600">❌ let user-age = 25;</div>
                <div className="text-red-600">❌ let is active = true;</div>
              </div>
            </div>
          </div>
        </div>

        {/* DOM Manipulation */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">3. Selecting & Modifying HTML Elements</h2>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            The DOM (Document Object Model) represents your HTML as objects that JavaScript can interact with. 
            You can select elements and change their content, style, and behavior.
          </p>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">DOM Manipulation Basics:</h3>
            <SyntaxHighlighter 
              language="javascript" 
              style={vscDarkPlus}
              className="rounded-lg"
            >
              {domManipulation}
            </SyntaxHighlighter>
          </div>

          {/* Interactive Example 2 */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">DOM Manipulation in Action:</h3>
            
            <button
              onClick={() => setShowPreview2(!showPreview2)}
              className="flex items-center space-x-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg text-sm font-medium transition-colors mb-4"
            >
              {showPreview2 ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              <span>{showPreview2 ? 'Hide Example' : 'Show DOM Example'}</span>
            </button>
            
            {showPreview2 && (
              <div className="bg-white border-2 border-green-300 rounded-lg p-6 shadow-lg">
                <div className="text-sm text-green-700 mb-4 font-semibold bg-green-50 px-3 py-2 rounded">
                  👁️ Live Example - Before and after JavaScript:
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Before JavaScript:</h4>
                    <div className="bg-gray-100 border rounded-lg p-4">
                      <h2 className="text-lg text-gray-600">Original Title</h2>
                      <p className="text-gray-500">This is the original content.</p>
                      <button className="bg-gray-300 text-gray-600 px-3 py-1 rounded">Button</button>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">After JavaScript:</h4>
                    <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-4">
                      <h2 className="text-lg text-blue-600 font-bold bg-yellow-200 px-2 py-1 rounded">✨ Updated Title!</h2>
                      <p className="text-blue-700 text-lg">JavaScript changed this content!</p>
                      <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">Active Button</button>
                    </div>
                  </div>
                </div>
                <div className="mt-4 bg-gray-900 rounded-lg p-3 text-green-400 font-mono text-xs">
                  <div>title.textContent = "✨ Updated Title!";</div>
                  <div>title.style.color = "blue";</div>
                  <div>title.classList.add("highlight");</div>
                </div>
              </div>
            )}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 rounded-lg p-6">
              <h4 className="font-semibold text-blue-900 mb-3">Common Selection Methods</h4>
              <div className="space-y-2 text-sm">
                <div><code className="bg-blue-100 px-2 py-1 rounded">getElementById("id")</code> - Select by ID</div>
                <div><code className="bg-blue-100 px-2 py-1 rounded">querySelector("selector")</code> - Select first match</div>
                <div><code className="bg-blue-100 px-2 py-1 rounded">querySelectorAll("selector")</code> - Select all matches</div>
              </div>
            </div>
            <div className="bg-green-50 rounded-lg p-6">
              <h4 className="font-semibold text-green-900 mb-3">Common Modifications</h4>
              <div className="space-y-2 text-sm">
                <div><code className="bg-green-100 px-2 py-1 rounded">textContent</code> - Change text</div>
                <div><code className="bg-green-100 px-2 py-1 rounded">style.property</code> - Change CSS</div>
                <div><code className="bg-green-100 px-2 py-1 rounded">classList</code> - Add/remove classes</div>
              </div>
            </div>
          </div>
        </div>

        {/* Complete Example */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">4. Complete Working Example</h2>
          
          <p className="text-gray-700 mb-6">
            Here's a complete HTML page that demonstrates everything we've learned. This shows how HTML, CSS, 
            and JavaScript work together to create an interactive webpage.
          </p>

          <div className="mb-6">
            <SyntaxHighlighter 
              language="html" 
              style={vscDarkPlus}
              className="rounded-lg"
            >
              {practicalExample}
            </SyntaxHighlighter>
          </div>

          {/* Interactive Example 3 */}
          <button
            onClick={() => setShowPreview3(!showPreview3)}
            className="flex items-center space-x-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg text-sm font-medium transition-colors mb-4"
          >
            {showPreview3 ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            <span>{showPreview3 ? 'Hide Result' : 'Show Result'}</span>
          </button>
          
          {showPreview3 && (
            <div className="bg-white border-2 border-purple-300 rounded-lg p-6 shadow-lg">
              <div className="text-sm text-purple-700 mb-4 font-semibold bg-purple-50 px-3 py-2 rounded">
                👁️ Live Result - Complete interactive example:
              </div>
              <div className="bg-white border rounded-lg p-6 shadow-inner">
                <h1 className="text-2xl font-bold text-blue-600 mb-3">Welcome to JavaScript!</h1>
                <p className="bg-yellow-200 px-3 py-2 rounded mb-4">JavaScript makes web pages interactive.</p>
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mb-4">
                  Click me!
                </button>
                <div className="bg-green-50 border border-green-200 rounded p-3">
                  <p className="text-green-800">✅ Page loaded successfully!</p>
                </div>
              </div>
              <div className="text-xs text-purple-600 mt-2">
                This is exactly how the HTML page would look when loaded in a browser!
              </div>
            </div>
          )}
        </div>

        {/* Practice Exercise */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <Code className="h-6 w-6 mr-2" />
            Practice Exercise: Update Your Portfolio
          </h2>

          <p className="text-gray-700 mb-6">
            Now it's time to add JavaScript to your portfolio! Create a simple script that updates 
            your page content dynamically.
          </p>

          <div className="bg-yellow-50 rounded-lg p-6 border border-yellow-200">
            <h4 className="font-semibold text-yellow-900 mb-3">Your Task:</h4>
            <ol className="list-decimal list-inside space-y-2 text-yellow-800">
              <li>Add a &lt;script&gt; tag to your HTML file</li>
              <li>Create variables for your name, age, and favorite hobby</li>
              <li>Use JavaScript to update your page title with your name</li>
              <li>Change the color of a section using JavaScript</li>
              <li>Add a welcome message to the console</li>
              <li>Create a new paragraph element with JavaScript</li>
            </ol>
          </div>

          <div className="mt-6 bg-green-50 rounded-lg p-4">
            <h4 className="font-semibold text-green-900 mb-2">💡 Pro Tips:</h4>
            <ul className="text-green-800 text-sm space-y-1">
              <li>• Open your browser's Developer Tools (F12) to see console.log output</li>
              <li>• Always test your code by refreshing the page</li>
              <li>• Use meaningful variable names like 'firstName' instead of 'x'</li>
              <li>• Check for typos - JavaScript is case-sensitive!</li>
            </ul>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Link
            href="/lessons/week-2"
            className="flex items-center space-x-2 text-gray-600 hover:text-gray-800"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Week 2 Overview</span>
          </Link>
          
          <Link
            href="/lessons/week-2/day-2"
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg flex items-center space-x-2 transition-colors"
          >
            <span>Next: Events & Functions</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
