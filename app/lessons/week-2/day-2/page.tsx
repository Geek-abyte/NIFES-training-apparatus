'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Clock, Target, CheckCircle, Code, Zap, Eye, EyeOff, MousePointer } from 'lucide-react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'

export default function Week2Day2() {
  const [showPreview1, setShowPreview1] = useState(false)
  const [showPreview2, setShowPreview2] = useState(false)
  const [showPreview3, setShowPreview3] = useState(false)

  const eventListeners = `// Adding event listeners to make elements interactive

// Method 1: Using addEventListener
let button = document.getElementById("my-button");
button.addEventListener("click", function() {
    console.log("Button was clicked!");
    button.textContent = "Clicked!";
});

// Method 2: Different types of events
let input = document.getElementById("name-input");
input.addEventListener("input", function() {
    console.log("User is typing: " + input.value);
});

// Method 3: Mouse events
let box = document.getElementById("color-box");
box.addEventListener("mouseenter", function() {
    box.style.backgroundColor = "lightblue";
});

box.addEventListener("mouseleave", function() {
    box.style.backgroundColor = "lightgray";
});`

  const functionsBasics = `// Functions - reusable blocks of code

// Function declaration
function greetUser(name) {
    return "Hello, " + name + "!";
}

// Function with multiple parameters
function calculateAge(birthYear, currentYear) {
    let age = currentYear - birthYear;
    return age;
}

// Function that changes the webpage
function changePageTheme(color) {
    document.body.style.backgroundColor = color;
    console.log("Theme changed to " + color);
}

// Using the functions
let greeting = greetUser("Sarah");
console.log(greeting); // "Hello, Sarah!"

let myAge = calculateAge(1995, 2024);
console.log("I am " + myAge + " years old");

changePageTheme("lightblue");`

  const conditionalLogic = `// If-else statements for decision making

let userAge = 20;
let isLoggedIn = true;

// Simple if statement
if (userAge >= 18) {
    console.log("User is an adult");
}

// If-else statement
if (isLoggedIn) {
    console.log("Welcome back!");
} else {
    console.log("Please log in");
}

// Multiple conditions
if (userAge < 13) {
    console.log("Child");
} else if (userAge < 18) {
    console.log("Teenager");
} else {
    console.log("Adult");
}

// Combining conditions
if (userAge >= 18 && isLoggedIn) {
    console.log("Access granted");
} else {
    console.log("Access denied");
}

// Function with conditional logic
function checkPassword(password) {
    if (password.length < 6) {
        return "Password too short";
    } else if (password === "123456") {
        return "Password too weak";
    } else {
        return "Password accepted";
    }
}`

  const interactiveExample = `<!DOCTYPE html>
<html>
<head>
    <title>Interactive Profile</title>
    <style>
        body { font-family: Arial, sans-serif; padding: 20px; }
        .container { max-width: 600px; margin: 0 auto; }
        button { 
            background: #3498db; 
            color: white; 
            border: none; 
            padding: 10px 20px; 
            border-radius: 5px; 
            cursor: pointer;
            margin: 5px;
        }
        button:hover { background: #2980b9; }
        .theme-dark { background-color: #2c3e50; color: white; }
        .theme-light { background-color: white; color: black; }
        .hidden { display: none; }
        .highlight { background-color: yellow; padding: 10px; }
    </style>
</head>
<body class="theme-light">
    <div class="container">
        <h1 id="main-title">My Interactive Profile</h1>
        <p id="welcome-message">Welcome to my page!</p>
        
        <div>
            <button id="theme-btn">Toggle Dark Mode</button>
            <button id="highlight-btn">Highlight Content</button>
            <button id="greet-btn">Personal Greeting</button>
        </div>
        
        <div id="content">
            <h2>About Me</h2>
            <p id="about-text">I'm learning JavaScript and it's amazing!</p>
        </div>
        
        <div id="interactive-section">
            <h3>Try the buttons above!</h3>
            <p id="status">Click a button to see what happens.</p>
        </div>
    </div>

    <script>
        // Get all the elements we need
        let body = document.body;
        let title = document.getElementById("main-title");
        let welcomeMsg = document.getElementById("welcome-message");
        let aboutText = document.getElementById("about-text");
        let status = document.getElementById("status");
        
        let themeBtn = document.getElementById("theme-btn");
        let highlightBtn = document.getElementById("highlight-btn");
        let greetBtn = document.getElementById("greet-btn");

        // Functions for different actions
        function toggleTheme() {
            if (body.classList.contains("theme-light")) {
                body.classList.remove("theme-light");
                body.classList.add("theme-dark");
                themeBtn.textContent = "Toggle Light Mode";
                status.textContent = "Switched to dark mode!";
            } else {
                body.classList.remove("theme-dark");
                body.classList.add("theme-light");
                themeBtn.textContent = "Toggle Dark Mode";
                status.textContent = "Switched to light mode!";
            }
        }

        function highlightContent() {
            if (aboutText.classList.contains("highlight")) {
                aboutText.classList.remove("highlight");
                highlightBtn.textContent = "Highlight Content";
                status.textContent = "Highlight removed!";
            } else {
                aboutText.classList.add("highlight");
                highlightBtn.textContent = "Remove Highlight";
                status.textContent = "Content highlighted!";
            }
        }

        function personalGreeting() {
            let name = prompt("What's your name?");
            if (name) {
                welcomeMsg.textContent = "Welcome, " + name + "!";
                title.textContent = name + "'s Interactive Profile";
                status.textContent = "Personal greeting added!";
            }
        }

        // Add event listeners
        themeBtn.addEventListener("click", toggleTheme);
        highlightBtn.addEventListener("click", highlightContent);
        greetBtn.addEventListener("click", personalGreeting);

        // Initialize the page
        status.textContent = "Page loaded! Ready for interaction.";
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
                <span>75 minutes</span>
              </div>
              <div className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                Week 2 - Day 2
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Lesson Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-100 rounded-full mb-4">
            <MousePointer className="h-8 w-8 text-yellow-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Events & Functions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Make your website truly interactive! Learn to respond to user actions like clicks and typing, 
            and organize your code with reusable functions.
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
              <span className="text-yellow-800">Handle user interactions with event listeners</span>
            </li>
            <li className="flex items-start space-x-2">
              <CheckCircle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
              <span className="text-yellow-800">Create and use functions to organize code</span>
            </li>
            <li className="flex items-start space-x-2">
              <CheckCircle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
              <span className="text-yellow-800">Implement conditional logic with if-else statements</span>
            </li>
            <li className="flex items-start space-x-2">
              <CheckCircle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
              <span className="text-yellow-800">Build interactive webpage features</span>
            </li>
          </ul>
        </div>

        {/* Event Listeners */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">1. Event Listeners - Responding to User Actions</h2>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            Event listeners allow your webpage to respond to user interactions like clicks, typing, 
            mouse movements, and more. They're what make websites truly interactive!
          </p>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Common Event Types:</h3>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-blue-50 rounded-lg p-4">
                <h4 className="font-semibold text-blue-900 mb-2">Mouse Events</h4>
                <ul className="text-blue-800 text-sm space-y-1">
                  <li>• <code>click</code> - User clicks element</li>
                  <li>• <code>mouseenter</code> - Mouse enters element</li>
                  <li>• <code>mouseleave</code> - Mouse leaves element</li>
                  <li>• <code>mouseover</code> - Mouse moves over element</li>
                </ul>
              </div>
              <div className="bg-green-50 rounded-lg p-4">
                <h4 className="font-semibold text-green-900 mb-2">Keyboard & Form Events</h4>
                <ul className="text-green-800 text-sm space-y-1">
                  <li>• <code>keydown</code> - Key is pressed</li>
                  <li>• <code>input</code> - Input value changes</li>
                  <li>• <code>submit</code> - Form is submitted</li>
                  <li>• <code>focus</code> - Element gets focus</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <SyntaxHighlighter 
              language="javascript" 
              style={vscDarkPlus}
              className="rounded-lg"
            >
              {eventListeners}
            </SyntaxHighlighter>
          </div>

          {/* Interactive Example 1 */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Event Listeners in Action:</h3>
            
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
                  👁️ Live Example - Event listeners make elements interactive:
                </div>
                <div className="bg-gray-50 rounded-lg p-6 space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">Click Events</h4>
                    <p className="text-blue-800 text-sm mb-3">When you click a button, JavaScript can respond instantly:</p>
                    <code className="text-xs bg-blue-100 px-2 py-1 rounded block">{'button.addEventListener("click", function() {...})'}</code>
                  </div>
                  
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-900 mb-2">Mouse Events</h4>
                    <p className="text-green-800 text-sm mb-3">Hovering over elements can trigger color changes:</p>
                    <code className="text-xs bg-green-100 px-2 py-1 rounded block">{'element.addEventListener("mouseenter", function() {...})'}</code>
                  </div>
                  
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-purple-900 mb-2">Input Events</h4>
                    <p className="text-purple-800 text-sm mb-3">As users type, you can respond to each keystroke:</p>
                    <code className="text-xs bg-purple-100 px-2 py-1 rounded block">{'input.addEventListener("input", function() {...})'}</code>
                  </div>
                </div>
                <div className="text-xs text-yellow-600 mt-2">
                  Each interaction triggers a JavaScript function that can change your webpage!
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Functions */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">2. Functions - Organizing Your Code</h2>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            Functions are reusable blocks of code that perform specific tasks. They help you organize 
            your code, avoid repetition, and make your programs easier to understand and maintain.
          </p>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Function Basics:</h3>
            <SyntaxHighlighter 
              language="javascript" 
              style={vscDarkPlus}
              className="rounded-lg"
            >
              {functionsBasics}
            </SyntaxHighlighter>
          </div>

          {/* Interactive Example 2 */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Functions in Action:</h3>
            
            <button
              onClick={() => setShowPreview2(!showPreview2)}
              className="flex items-center space-x-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg text-sm font-medium transition-colors mb-4"
            >
              {showPreview2 ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              <span>{showPreview2 ? 'Hide Example' : 'Show Function Examples'}</span>
            </button>
            
            {showPreview2 && (
              <div className="bg-white border-2 border-green-300 rounded-lg p-6 shadow-lg">
                <div className="text-sm text-green-700 mb-4 font-semibold bg-green-50 px-3 py-2 rounded">
                  👁️ Live Example - Functions organizing your code:
                </div>
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">Greeting Function</h4>
                    <div className="bg-gray-800 text-green-400 p-3 rounded font-mono text-sm mb-3">
                      <div>function greetUser(name) {'{'}</div>
                      <div className="ml-4">return "Hello, " + name + "!";</div>
                      <div>{'}'}</div>
                      <div className="text-gray-400 mt-2">// Usage:</div>
                      <div>let greeting = greetUser("Sarah");</div>
                    </div>
                    <div className="text-blue-600 font-medium">Result: "Hello, Sarah!"</div>
                  </div>
                  
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-purple-900 mb-2">Calculator Function</h4>
                    <div className="bg-gray-800 text-green-400 p-3 rounded font-mono text-sm mb-3">
                      <div>function add(a, b) {'{'}</div>
                      <div className="ml-4">return a + b;</div>
                      <div>{'}'}</div>
                      <div className="text-gray-400 mt-2">// Usage:</div>
                      <div>let result = add(5, 3);</div>
                    </div>
                    <div className="text-purple-600 font-medium">Result: 8</div>
                  </div>
                  
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-900 mb-2">Theme Changer Function</h4>
                    <div className="bg-gray-800 text-green-400 p-3 rounded font-mono text-sm mb-3">
                      <div>function changeTheme(color) {'{'}</div>
                      <div className="ml-4">document.body.style.backgroundColor = color;</div>
                      <div>{'}'}</div>
                      <div className="text-gray-400 mt-2">// Usage:</div>
                      <div>changeTheme("lightblue");</div>
                    </div>
                    <div className="text-green-600 font-medium">Result: Page background changes to light blue!</div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="font-semibold text-gray-900 mb-3">Function Benefits</h4>
              <ul className="text-gray-700 text-sm space-y-2">
                <li>✅ Reuse code instead of copying</li>
                <li>✅ Organize code into logical chunks</li>
                <li>✅ Easier to debug and maintain</li>
                <li>✅ Can accept parameters for flexibility</li>
                <li>✅ Can return values for calculations</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="font-semibold text-gray-900 mb-3">Function Syntax</h4>
              <div className="text-sm space-y-2">
                <div><code className="bg-gray-200 px-2 py-1 rounded">function name(parameters) {}</code></div>
                <div><code className="bg-gray-200 px-2 py-1 rounded">return value;</code> - Send back result</div>
                <div><code className="bg-gray-200 px-2 py-1 rounded">name(arguments);</code> - Call function</div>
              </div>
            </div>
          </div>
        </div>

        {/* Conditional Logic */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">3. Conditional Logic - Making Decisions</h2>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            Conditional statements allow your program to make decisions and execute different code 
            based on different situations. This is what makes programs truly intelligent!
          </p>

          <div className="mb-6">
            <SyntaxHighlighter 
              language="javascript" 
              style={vscDarkPlus}
              className="rounded-lg"
            >
              {conditionalLogic}
            </SyntaxHighlighter>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="bg-blue-50 rounded-lg p-4">
              <h4 className="font-semibold text-blue-900 mb-2">Comparison Operators</h4>
              <ul className="text-blue-800 text-sm space-y-1">
                <li><code>===</code> Equal to</li>
                <li><code>!==</code> Not equal to</li>
                <li><code>&gt;</code> Greater than</li>
                <li><code>&lt;</code> Less than</li>
                <li><code>&gt;=</code> Greater or equal</li>
                <li><code>&lt;=</code> Less or equal</li>
              </ul>
            </div>
            <div className="bg-green-50 rounded-lg p-4">
              <h4 className="font-semibold text-green-900 mb-2">Logical Operators</h4>
              <ul className="text-green-800 text-sm space-y-1">
                <li><code>&&</code> AND (both true)</li>
                <li><code>||</code> OR (either true)</li>
                <li><code>!</code> NOT (opposite)</li>
              </ul>
            </div>
            <div className="bg-purple-50 rounded-lg p-4">
              <h4 className="font-semibold text-purple-900 mb-2">Common Patterns</h4>
              <ul className="text-purple-800 text-sm space-y-1">
                <li>Check user permissions</li>
                <li>Validate form inputs</li>
                <li>Show/hide content</li>
                <li>Theme switching</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Complete Interactive Example */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">4. Complete Interactive Example</h2>
          
          <p className="text-gray-700 mb-6">
            Here's a complete interactive webpage that combines events, functions, and conditional logic 
            to create a dynamic user experience.
          </p>

          <div className="mb-6">
            <SyntaxHighlighter 
              language="html" 
              style={vscDarkPlus}
              className="rounded-lg"
              customStyle={{ fontSize: '12px' }}
            >
              {interactiveExample}
            </SyntaxHighlighter>
          </div>

          {/* Interactive Example 3 */}
          <button
            onClick={() => setShowPreview3(!showPreview3)}
            className="flex items-center space-x-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg text-sm font-medium transition-colors mb-4"
          >
            {showPreview3 ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            <span>{showPreview3 ? 'Hide Result' : 'Show Interactive Result'}</span>
          </button>
          
          {showPreview3 && (
            <div className="bg-white border-2 border-purple-300 rounded-lg p-6 shadow-lg">
              <div className="text-sm text-purple-700 mb-4 font-semibold bg-purple-50 px-3 py-2 rounded">
                👁️ Interactive Demo - Complete webpage with JavaScript:
              </div>
              <div className="bg-white border rounded-lg p-6 shadow-inner">
                <div className="max-w-lg mx-auto">
                  <h1 className="text-2xl font-bold mb-2">My Interactive Profile</h1>
                  <p className="text-gray-600 mb-4">Welcome to my page!</p>
                  
                  <div className="space-y-3">
                    <div className="bg-blue-50 p-3 rounded">
                      <h3 className="font-semibold text-blue-900 mb-1">Dark Mode Toggle</h3>
                      <p className="text-blue-700 text-sm">Clicking changes entire page theme</p>
                    </div>
                    
                    <div className="bg-green-50 p-3 rounded">
                      <h3 className="font-semibold text-green-900 mb-1">Content Highlighter</h3>
                      <p className="text-green-700 text-sm">Adds/removes yellow background</p>
                    </div>
                    
                    <div className="bg-purple-50 p-3 rounded">
                      <h3 className="font-semibold text-purple-900 mb-1">Personal Greeting</h3>
                      <p className="text-purple-700 text-sm">Prompts for name and updates title</p>
                    </div>
                  </div>
                  
                  <div className="mt-4 p-3 bg-gray-50 rounded">
                    <h3 className="font-semibold">How it works:</h3>
                    <p className="text-sm text-gray-600">Each button has an event listener that runs a function when clicked!</p>
                  </div>
                </div>
              </div>
              <div className="text-xs text-purple-600 mt-2">
                This demonstrates event listeners, functions, and conditional logic working together!
              </div>
            </div>
          )}
        </div>

        {/* Practice Exercise */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <Code className="h-6 w-6 mr-2" />
            Practice Exercise: Add Interactivity to Your Portfolio
          </h2>

          <p className="text-gray-700 mb-6">
            Now add interactive features to your portfolio using events, functions, and conditional logic!
          </p>

          <div className="bg-yellow-50 rounded-lg p-6 border border-yellow-200">
            <h4 className="font-semibold text-yellow-900 mb-3">Your Tasks:</h4>
            <ol className="list-decimal list-inside space-y-2 text-yellow-800">
              <li>Add a button that changes your page theme (colors)</li>
              <li>Create a function that shows/hides additional information</li>
              <li>Add hover effects to your navigation or sections</li>
              <li>Implement a simple form that responds to user input</li>
              <li>Use conditional logic to validate user interactions</li>
              <li>Add at least 3 different types of event listeners</li>
            </ol>
          </div>

          <div className="mt-6 bg-green-50 rounded-lg p-4">
            <h4 className="font-semibold text-green-900 mb-2">💡 Ideas to Try:</h4>
            <ul className="text-green-800 text-sm space-y-1">
              <li>• Dark/light theme toggle button</li>
              <li>• "Read more" button for your bio section</li>
              <li>• Image gallery with next/previous buttons</li>
              <li>• Contact form with validation</li>
              <li>• Animated skill progress bars</li>
              <li>• Interactive project showcase</li>
            </ul>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Link
            href="/lessons/week-2/day-1"
            className="flex items-center space-x-2 text-gray-600 hover:text-gray-800"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Previous: JavaScript Syntax & Variables</span>
          </Link>
          
          <Link
            href="/lessons/week-2/day-3"
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg flex items-center space-x-2 transition-colors"
          >
            <span>Next: Loops & Objects</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
