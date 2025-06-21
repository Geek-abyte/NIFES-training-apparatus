'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Clock, Target, CheckCircle, Code, RefreshCw, Eye, EyeOff, Database } from 'lucide-react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'

export default function Week2Day3() {
  const [showPreview1, setShowPreview1] = useState(false)
  const [showPreview2, setShowPreview2] = useState(false)
  const [showPreview3, setShowPreview3] = useState(false)

  const arraysBasics = `// Arrays - storing multiple values in one variable
let fruits = ["apple", "banana", "orange", "grape"];
let numbers = [1, 2, 3, 4, 5];
let mixed = ["hello", 42, true, "world"];

// Accessing array elements (starts at 0)
console.log(fruits[0]);     // "apple"
console.log(fruits[1]);     // "banana"
console.log(numbers[2]);    // 3

// Array properties and methods
console.log(fruits.length); // 4 (number of items)
fruits.push("kiwi");        // Add to end
fruits.pop();               // Remove from end
fruits.unshift("mango");    // Add to beginning
fruits.shift();             // Remove from beginning

// Changing array elements
fruits[1] = "strawberry";   // Change banana to strawberry
console.log(fruits);        // ["apple", "strawberry", "orange", "grape"]`

  const loopsBasics = `// For loops - repeat code multiple times
let colors = ["red", "green", "blue", "yellow"];

// Basic for loop
for (let i = 0; i < colors.length; i++) {
    console.log("Color " + (i + 1) + ": " + colors[i]);
}

// For...of loop (easier way)
for (let color of colors) {
    console.log("I like " + color);
}

// While loop
let count = 0;
while (count < 5) {
    console.log("Count is: " + count);
    count++;
}

// Loop with DOM manipulation
let listItems = document.querySelectorAll("li");
for (let item of listItems) {
    item.style.color = "blue";
    item.addEventListener("click", function() {
        item.style.backgroundColor = "yellow";
    });
}`

  const objectsBasics = `// Objects - storing related data together
let person = {
    name: "Sarah Johnson",
    age: 25,
    city: "New York",
    isStudent: true,
    hobbies: ["reading", "coding", "hiking"]
};

// Accessing object properties
console.log(person.name);           // "Sarah Johnson"
console.log(person["age"]);         // 25
console.log(person.hobbies[0]);     // "reading"

// Changing object properties
person.age = 26;
person.job = "Developer";
person["city"] = "San Francisco";

// Object methods (functions inside objects)
let calculator = {
    add: function(a, b) {
        return a + b;
    },
    multiply: function(a, b) {
        return a * b;
    }
};

console.log(calculator.add(5, 3));      // 8
console.log(calculator.multiply(4, 7)); // 28

// Array of objects
let students = [
    { name: "Alice", grade: 95 },
    { name: "Bob", grade: 87 },
    { name: "Charlie", grade: 92 }
];

// Loop through array of objects
for (let student of students) {
    console.log(student.name + " scored " + student.grade);
}`

  const domManipulationAdvanced = `// Advanced DOM manipulation with loops and objects
let skillsData = [
    { name: "HTML", level: 90 },
    { name: "CSS", level: 85 },
    { name: "JavaScript", level: 75 }
];

// Create skill bars dynamically
function createSkillBars() {
    let container = document.getElementById("skills-container");
    
    for (let skill of skillsData) {
        // Create elements
        let skillDiv = document.createElement("div");
        let nameSpan = document.createElement("span");
        let barDiv = document.createElement("div");
        let fillDiv = document.createElement("div");
        
        // Set content and styles
        nameSpan.textContent = skill.name;
        skillDiv.className = "skill-item";
        barDiv.className = "skill-bar";
        fillDiv.className = "skill-fill";
        fillDiv.style.width = skill.level + "%";
        
        // Build structure
        barDiv.appendChild(fillDiv);
        skillDiv.appendChild(nameSpan);
        skillDiv.appendChild(barDiv);
        container.appendChild(skillDiv);
    }
}

// Interactive project gallery
let projects = [
    { title: "Portfolio Website", tech: "HTML, CSS", image: "portfolio.jpg" },
    { title: "Todo App", tech: "JavaScript", image: "todo.jpg" },
    { title: "Weather App", tech: "API, JS", image: "weather.jpg" }
];

function displayProjects() {
    let gallery = document.getElementById("project-gallery");
    
    for (let i = 0; i < projects.length; i++) {
        let project = projects[i];
        let projectCard = document.createElement("div");
        
        projectCard.innerHTML = \`
            <h3>\${project.title}</h3>
            <p>Technologies: \${project.tech}</p>
            <button onclick="showProject(\${i})">View Details</button>
        \`;
        
        projectCard.className = "project-card";
        gallery.appendChild(projectCard);
    }
}

function showProject(index) {
    let project = projects[index];
    alert(\`Project: \${project.title}\\nTech: \${project.tech}\`);
}`

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
                <span>85 minutes</span>
              </div>
              <div className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                Week 2 - Day 3
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Lesson Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-100 rounded-full mb-4">
            <Database className="h-8 w-8 text-yellow-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Loops & Objects
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Master the power of loops and objects! Learn to work with collections of data 
            and create dynamic, data-driven content for your website.
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
              <span className="text-yellow-800">Store and manipulate multiple values with arrays</span>
            </li>
            <li className="flex items-start space-x-2">
              <CheckCircle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
              <span className="text-yellow-800">Use loops to repeat code and process data</span>
            </li>
            <li className="flex items-start space-x-2">
              <CheckCircle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
              <span className="text-yellow-800">Organize related data using objects</span>
            </li>
            <li className="flex items-start space-x-2">
              <CheckCircle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
              <span className="text-yellow-800">Dynamically create and modify webpage content</span>
            </li>
          </ul>
        </div>

        {/* Arrays */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">1. Arrays - Working with Lists of Data</h2>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            Arrays let you store multiple values in a single variable. Think of them as lists - 
            you can store a list of names, numbers, colors, or any other data type.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-3">Why Use Arrays?</h3>
              <ul className="text-blue-800 space-y-2 text-sm">
                <li>• Store multiple related values together</li>
                <li>• Organize data efficiently</li>
                <li>• Process lists of information</li>
                <li>• Build dynamic content</li>
              </ul>
            </div>
            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-green-900 mb-3">Real-World Examples</h3>
              <ul className="text-green-800 space-y-2 text-sm">
                <li>• Shopping cart items</li>
                <li>• List of skills or hobbies</li>
                <li>• Navigation menu items</li>
                <li>• Photo gallery images</li>
              </ul>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Array Basics:</h3>
            <SyntaxHighlighter 
              language="javascript" 
              style={vscDarkPlus}
              className="rounded-lg"
            >
              {arraysBasics}
            </SyntaxHighlighter>
          </div>

          {/* Interactive Example 1 */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Arrays in Action:</h3>
            
            <button
              onClick={() => setShowPreview1(!showPreview1)}
              className="flex items-center space-x-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg text-sm font-medium transition-colors mb-4"
            >
              {showPreview1 ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              <span>{showPreview1 ? 'Hide Example' : 'Show Array Examples'}</span>
            </button>
            
            {showPreview1 && (
              <div className="bg-white border-2 border-yellow-300 rounded-lg p-6 shadow-lg">
                <div className="text-sm text-yellow-700 mb-4 font-semibold bg-yellow-50 px-3 py-2 rounded">
                  👁️ Live Example - Arrays storing different types of data:
                </div>
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">Skills Array</h4>
                    <div className="bg-gray-800 text-green-400 p-3 rounded font-mono text-sm mb-3">
                      <div>let skills = ["HTML", "CSS", "JavaScript", "React"];</div>
                      <div className="text-gray-400">// Accessing elements:</div>
                      <div>skills[0] → "HTML"</div>
                      <div>skills[1] → "CSS"</div>
                      <div>skills.length → 4</div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {["HTML", "CSS", "JavaScript", "React"].map((skill, index) => (
                        <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                          {skill} [Index: {index}]
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-purple-900 mb-2">Colors Array with Methods</h4>
                    <div className="bg-gray-800 text-green-400 p-3 rounded font-mono text-sm mb-3">
                      <div>let colors = ["red", "green", "blue"];</div>
                      <div>colors.push("yellow");    // Add to end</div>
                      <div>colors.unshift("orange"); // Add to beginning</div>
                      <div className="text-gray-400">// Result: ["orange", "red", "green", "blue", "yellow"]</div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {["orange", "red", "green", "blue", "yellow"].map((color, index) => (
                        <div key={index} className={`w-8 h-8 rounded border-2 border-gray-300 flex items-center justify-center text-xs font-bold`} 
                             style={{backgroundColor: color, color: color === "yellow" ? "black" : "white"}}>
                          {index}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-900 mb-2">Mixed Data Array</h4>
                    <div className="bg-gray-800 text-green-400 p-3 rounded font-mono text-sm mb-3">
                      <div>let userData = ["Alice", 25, true, "Developer"];</div>
                      <div className="text-gray-400">// Arrays can store different data types!</div>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="bg-white p-2 rounded border text-center">
                        <div className="text-xs text-gray-500">Index 0 (String)</div>
                        <div className="font-semibold">"Alice"</div>
                      </div>
                      <div className="bg-white p-2 rounded border text-center">
                        <div className="text-xs text-gray-500">Index 1 (Number)</div>
                        <div className="font-semibold">25</div>
                      </div>
                      <div className="bg-white p-2 rounded border text-center">
                        <div className="text-xs text-gray-500">Index 2 (Boolean)</div>
                        <div className="font-semibold">true</div>
                      </div>
                      <div className="bg-white p-2 rounded border text-center">
                        <div className="text-xs text-gray-500">Index 3 (String)</div>
                        <div className="font-semibold">"Developer"</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Loops */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">2. Loops - Automating Repetitive Tasks</h2>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            Loops allow you to run the same code multiple times without writing it repeatedly. 
            They're perfect for processing arrays, creating multiple elements, or any repetitive task.
          </p>

          <div className="mb-6">
            <SyntaxHighlighter 
              language="javascript" 
              style={vscDarkPlus}
              className="rounded-lg"
            >
              {loopsBasics}
            </SyntaxHighlighter>
          </div>

          {/* Interactive Example 2 */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Loops in Action:</h3>
            
            <button
              onClick={() => setShowPreview2(!showPreview2)}
              className="flex items-center space-x-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg text-sm font-medium transition-colors mb-4"
            >
              {showPreview2 ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              <span>{showPreview2 ? 'Hide Example' : 'Show Loop Examples'}</span>
            </button>
            
            {showPreview2 && (
              <div className="bg-white border-2 border-green-300 rounded-lg p-6 shadow-lg">
                <div className="text-sm text-green-700 mb-4 font-semibold bg-green-50 px-3 py-2 rounded">
                  👁️ Live Example - Loops processing data automatically:
                </div>
                <div className="space-y-6">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">Creating a List with Loops</h4>
                    <div className="bg-gray-800 text-green-400 p-3 rounded font-mono text-sm mb-3">
                      <div>let fruits = ["Apple", "Banana", "Orange"];</div>
                      <div>for (let fruit of fruits) {'{'}</div>
                      <div className="ml-4">console.log("I like " + fruit);</div>
                      <div>{'}'}</div>
                    </div>
                    <div className="bg-white border rounded p-3">
                      <div className="text-sm font-semibold text-gray-700 mb-2">Console Output:</div>
                      {["Apple", "Banana", "Orange"].map((fruit, index) => (
                        <div key={index} className="text-green-600 font-mono text-sm">
                          I like {fruit}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-purple-900 mb-2">Counting with Loops</h4>
                    <div className="bg-gray-800 text-green-400 p-3 rounded font-mono text-sm mb-3">
                      <div>for (let i = 1; i {'<='} 5; i++) {'{'}</div>
                      <div className="ml-4">console.log("Count: " + i);</div>
                      <div>{'}'}</div>
                    </div>
                    <div className="flex gap-2">
                      {[1, 2, 3, 4, 5].map((num) => (
                        <div key={num} className="bg-purple-100 text-purple-800 w-12 h-12 rounded-full flex items-center justify-center font-bold">
                          {num}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-orange-900 mb-2">Building HTML with Loops</h4>
                    <div className="bg-gray-800 text-green-400 p-3 rounded font-mono text-sm mb-3">
                      <div>let projects = ["Portfolio", "Todo App", "Weather App"];</div>
                      <div>for (let project of projects) {'{'}</div>
                      <div className="ml-4">// Create project card for each item</div>
                      <div>{'}'}</div>
                    </div>
                    <div className="grid md:grid-cols-3 gap-3">
                      {["Portfolio", "Todo App", "Weather App"].map((project, index) => (
                        <div key={index} className="bg-white border rounded p-3 text-center">
                          <h5 className="font-semibold text-orange-900">{project}</h5>
                          <p className="text-orange-700 text-sm">Project #{index + 1}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-blue-50 rounded-lg p-4">
              <h4 className="font-semibold text-blue-900 mb-2">For Loop</h4>
              <p className="text-blue-800 text-sm mb-2">Best for counting or when you need the index</p>
              <code className="text-xs bg-blue-100 px-2 py-1 rounded block">for (let i = 0; i &lt; 5; i++)</code>
            </div>
            <div className="bg-green-50 rounded-lg p-4">
              <h4 className="font-semibold text-green-900 mb-2">For...of Loop</h4>
              <p className="text-green-800 text-sm mb-2">Easiest way to loop through arrays</p>
              <code className="text-xs bg-green-100 px-2 py-1 rounded block">for (let item of array)</code>
            </div>
            <div className="bg-purple-50 rounded-lg p-4">
              <h4 className="font-semibold text-purple-900 mb-2">While Loop</h4>
              <p className="text-purple-800 text-sm mb-2">Runs while a condition is true</p>
              <code className="text-xs bg-purple-100 px-2 py-1 rounded block">while (condition)</code>
            </div>
          </div>
        </div>

        {/* Objects */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">3. Objects - Organizing Related Data</h2>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            Objects let you group related information together using key-value pairs. 
            They're perfect for representing real-world things like people, products, or settings.
          </p>

          <div className="mb-6">
            <SyntaxHighlighter 
              language="javascript" 
              style={vscDarkPlus}
              className="rounded-lg"
            >
              {objectsBasics}
            </SyntaxHighlighter>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-blue-50 rounded-lg p-6">
              <h4 className="font-semibold text-blue-900 mb-3">Object vs Array</h4>
              <div className="space-y-2 text-sm">
                <div><strong>Array:</strong> Ordered list of values</div>
                <div className="text-blue-700 font-mono">["Alice", "Bob", "Charlie"]</div>
                <div><strong>Object:</strong> Named properties</div>
                <div className="text-blue-700 font-mono">{'{ name: "Alice", age: 25 }'}</div>
              </div>
            </div>
            <div className="bg-green-50 rounded-lg p-6">
              <h4 className="font-semibold text-green-900 mb-3">When to Use Objects</h4>
              <ul className="text-green-800 text-sm space-y-1">
                <li>• User profiles or settings</li>
                <li>• Product information</li>
                <li>• Configuration data</li>
                <li>• Anything with properties</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Advanced DOM Manipulation */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">4. Dynamic Content Creation</h2>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            Combine arrays, loops, and objects to create dynamic content that updates automatically 
            based on your data. This is how modern websites work!
          </p>

          <div className="mb-6">
            <SyntaxHighlighter 
              language="javascript" 
              style={vscDarkPlus}
              className="rounded-lg"
              customStyle={{ fontSize: '12px' }}
            >
              {domManipulationAdvanced}
            </SyntaxHighlighter>
          </div>

          {/* Interactive Example 3 */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Dynamic Content in Action:</h3>
            
            <button
              onClick={() => setShowPreview3(!showPreview3)}
              className="flex items-center space-x-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg text-sm font-medium transition-colors mb-4"
            >
              {showPreview3 ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              <span>{showPreview3 ? 'Hide Example' : 'Show Dynamic Content'}</span>
            </button>
            
            {showPreview3 && (
              <div className="bg-white border-2 border-purple-300 rounded-lg p-6 shadow-lg">
                <div className="text-sm text-purple-700 mb-4 font-semibold bg-purple-50 px-3 py-2 rounded">
                  👁️ Live Example - Data automatically creating webpage content:
                </div>
                <div className="space-y-6">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-3">Skills with Progress Bars</h4>
                    <div className="space-y-3">
                      {[
                        { name: "HTML", level: 90 },
                        { name: "CSS", level: 85 },
                        { name: "JavaScript", level: 75 }
                      ].map((skill, index) => (
                        <div key={index} className="space-y-1">
                          <div className="flex justify-between text-sm">
                            <span className="font-medium text-blue-900">{skill.name}</span>
                            <span className="text-blue-700">{skill.level}%</span>
                          </div>
                          <div className="bg-blue-200 rounded-full h-2">
                            <div 
                              className="bg-blue-500 h-2 rounded-full transition-all duration-1000"
                              style={{ width: `${skill.level}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="text-xs text-blue-600 mt-2 bg-blue-100 p-2 rounded">
                      💡 Each skill bar was created automatically from the skills array!
                    </div>
                  </div>
                  
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-900 mb-3">Project Gallery</h4>
                    <div className="grid md:grid-cols-3 gap-3">
                      {[
                        { title: "Portfolio Website", tech: "HTML, CSS", color: "bg-red-100" },
                        { title: "Todo App", tech: "JavaScript", color: "bg-green-100" },
                        { title: "Weather App", tech: "API, JS", color: "bg-blue-100" }
                      ].map((project, index) => (
                        <div key={index} className={`${project.color} p-3 rounded border`}>
                          <h5 className="font-semibold text-gray-900">{project.title}</h5>
                          <p className="text-gray-700 text-sm">Tech: {project.tech}</p>
                          <button className="mt-2 bg-gray-800 text-white px-2 py-1 rounded text-xs">
                            View Project
                          </button>
                        </div>
                      ))}
                    </div>
                    <div className="text-xs text-green-600 mt-2 bg-green-100 p-2 rounded">
                      💡 Adding a new project to the array automatically creates a new card!
                    </div>
                  </div>
                  
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-purple-900 mb-3">Student Roster</h4>
                    <div className="bg-white rounded border">
                      <div className="grid grid-cols-3 gap-3 p-3 bg-gray-50 font-semibold text-sm">
                        <div>Name</div>
                        <div>Grade</div>
                        <div>Status</div>
                      </div>
                      {[
                        { name: "Alice Johnson", grade: 95, status: "Excellent" },
                        { name: "Bob Smith", grade: 87, status: "Good" },
                        { name: "Charlie Brown", grade: 92, status: "Great" }
                      ].map((student, index) => (
                        <div key={index} className="grid grid-cols-3 gap-3 p-3 border-t text-sm">
                          <div className="font-medium">{student.name}</div>
                          <div className="text-center">{student.grade}</div>
                          <div className={`text-center px-2 py-1 rounded text-xs ${
                            student.grade >= 90 ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                          }`}>
                            {student.status}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="text-xs text-purple-600 mt-2 bg-purple-100 p-2 rounded">
                      💡 The table and status colors are generated from student data objects!
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Week 2 Project Completion */}
        <div className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg p-8 mb-8 text-white">
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <CheckCircle className="h-6 w-6 mr-2" />
            Week 2 Complete: Interactive About Me
          </h2>
          <p className="text-yellow-50 mb-6">
            Congratulations! You've completed Week 2 and learned the core programming concepts. 
            Your portfolio can now be truly interactive and dynamic!
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-200" />
                <span>JavaScript syntax and variables</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-200" />
                <span>Event handling and user interactions</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-200" />
                <span>Functions and conditional logic</span>
              </li>
            </ul>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-200" />
                <span>Arrays and loops for data processing</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-200" />
                <span>Objects for organizing information</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-200" />
                <span>Dynamic content creation</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Practice Exercise */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <Code className="h-6 w-6 mr-2" />
            Final Exercise: Build Your Interactive Portfolio
          </h2>

          <p className="text-gray-700 mb-6">
            Use everything you've learned to create a fully interactive portfolio with dynamic content!
          </p>

          <div className="bg-yellow-50 rounded-lg p-6 border border-yellow-200">
            <h4 className="font-semibold text-yellow-900 mb-3">Your Final Tasks:</h4>
            <ol className="list-decimal list-inside space-y-2 text-yellow-800">
              <li>Create an array of your skills with proficiency levels</li>
              <li>Use loops to generate skill progress bars automatically</li>
              <li>Build a projects array with objects containing project details</li>
              <li>Generate project cards dynamically from your data</li>
              <li>Add interactive features like theme switching</li>
              <li>Include a contact form with validation</li>
              <li>Create smooth animations and hover effects</li>
            </ol>
          </div>

          <div className="mt-6 bg-green-50 rounded-lg p-4">
            <h4 className="font-semibold text-green-900 mb-2">💡 Advanced Features to Try:</h4>
            <ul className="text-green-800 text-sm space-y-1">
              <li>• Filter projects by technology used</li>
              <li>• Add a search function for your content</li>
              <li>• Create an image slider/carousel</li>
              <li>• Build a simple admin panel to add new projects</li>
              <li>• Add local storage to remember user preferences</li>
              <li>• Create smooth page transitions</li>
            </ul>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Link
            href="/lessons/week-2/day-2"
            className="flex items-center space-x-2 text-gray-600 hover:text-gray-800"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Previous: Events & Functions</span>
          </Link>
          
          <Link
            href="/lessons/week-3"
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg flex items-center space-x-2 transition-colors"
          >
            <span>Next: Week 3 - Responsive Design</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
