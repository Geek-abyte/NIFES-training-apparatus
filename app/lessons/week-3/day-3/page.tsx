'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Clock, Target, CheckCircle, Code, Zap, Layers, Eye, EyeOff } from 'lucide-react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'

export default function Week3Day3() {
  const [showFrameworkDemo, setShowFrameworkDemo] = useState(false)
  const [selectedFramework, setSelectedFramework] = useState('vanilla')

  const vanillaJs = `// Vanilla JavaScript - The Traditional Way
<!DOCTYPE html>
<html>
<head>
    <title>Todo App</title>
    <style>
        .todo-item { margin: 10px 0; padding: 10px; border: 1px solid #ddd; }
        .completed { text-decoration: line-through; opacity: 0.6; }
    </style>
</head>
<body>
    <div id="app">
        <h1>My Todo List</h1>
        <input type="text" id="todoInput" placeholder="Add a task...">
        <button onclick="addTodo()">Add Todo</button>
        <div id="todoList"></div>
    </div>

    <script>
        let todos = [];
        let nextId = 1;

        function addTodo() {
            const input = document.getElementById('todoInput');
            const text = input.value.trim();
            
            if (text) {
                todos.push({
                    id: nextId++,
                    text: text,
                    completed: false
                });
                input.value = '';
                renderTodos();
            }
        }

        function toggleTodo(id) {
            const todo = todos.find(t => t.id === id);
            if (todo) {
                todo.completed = !todo.completed;
                renderTodos();
            }
        }

        function deleteTodo(id) {
            todos = todos.filter(t => t.id !== id);
            renderTodos();
        }

        function renderTodos() {
            const container = document.getElementById('todoList');
            container.innerHTML = '';
            
            todos.forEach(todo => {
                const div = document.createElement('div');
                div.className = 'todo-item' + (todo.completed ? ' completed' : '');
                div.innerHTML = \`
                    <span onclick="toggleTodo(\${todo.id})">\${todo.text}</span>
                    <button onclick="deleteTodo(\${todo.id})">Delete</button>
                \`;
                container.appendChild(div);
            });
        }

        // Initialize
        renderTodos();
    </script>
</body>
</html>`

  const reactExample = `// React - Modern Declarative Approach
import React, { useState } from 'react';

function TodoApp() {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const addTodo = () => {
        if (inputValue.trim()) {
            setTodos([...todos, {
                id: Date.now(),
                text: inputValue,
                completed: false
            }]);
            setInputValue('');
        }
    };

    const toggleTodo = (id) => {
        setTodos(todos.map(todo =>
            todo.id === id 
                ? { ...todo, completed: !todo.completed }
                : todo
        ));
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    return (
        <div className="todo-app">
            <h1>My Todo List</h1>
            <div>
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Add a task..."
                    onKeyPress={(e) => e.key === 'Enter' && addTodo()}
                />
                <button onClick={addTodo}>Add Todo</button>
            </div>
            <div>
                {todos.map(todo => (
                    <div 
                        key={todo.id} 
                        className={\`todo-item \${todo.completed ? 'completed' : ''}\`}
                    >
                        <span onClick={() => toggleTodo(todo.id)}>
                            {todo.text}
                        </span>
                        <button onClick={() => deleteTodo(todo.id)}>
                            Delete
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TodoApp;`

  const vueExample = `<!-- Vue.js - Progressive Framework -->
<template>
  <div class="todo-app">
    <h1>My Todo List</h1>
    <div>
      <input
        v-model="inputValue"
        @keyup.enter="addTodo"
        placeholder="Add a task..."
      />
      <button @click="addTodo">Add Todo</button>
    </div>
    <div>
      <div
        v-for="todo in todos"
        :key="todo.id"
        :class="['todo-item', { completed: todo.completed }]"
      >
        <span @click="toggleTodo(todo.id)">{{ todo.text }}</span>
        <button @click="deleteTodo(todo.id)">Delete</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TodoApp',
  data() {
    return {
      todos: [],
      inputValue: ''
    }
  },
  methods: {
    addTodo() {
      if (this.inputValue.trim()) {
        this.todos.push({
          id: Date.now(),
          text: this.inputValue,
          completed: false
        });
        this.inputValue = '';
      }
    },
    toggleTodo(id) {
      const todo = this.todos.find(t => t.id === id);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    deleteTodo(id) {
      this.todos = this.todos.filter(t => t.id !== id);
    }
  }
}
</script>

<style scoped>
.todo-item {
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #ddd;
}
.completed {
  text-decoration: line-through;
  opacity: 0.6;
}
</style>`

  const frameworkComparison = {
    vanilla: {
      name: 'Vanilla JavaScript',
      pros: ['No dependencies', 'Direct DOM control', 'Small bundle size', 'Universal compatibility'],
      cons: ['Manual DOM manipulation', 'Repetitive code', 'Hard to maintain large apps', 'No built-in structure'],
      bestFor: 'Small projects, learning fundamentals, simple interactions'
    },
    react: {
      name: 'React',
      pros: ['Component-based', 'Virtual DOM', 'Large ecosystem', 'Great developer tools'],
      cons: ['Learning curve', 'Build tools required', 'Frequent updates', 'JSX syntax'],
      bestFor: 'Medium to large applications, team projects, job market'
    },
    vue: {
      name: 'Vue.js',
      pros: ['Gentle learning curve', 'Great documentation', 'Progressive adoption', 'Built-in solutions'],
      cons: ['Smaller ecosystem', 'Less job market', 'Single-file components', 'Template syntax'],
      bestFor: 'Beginners, gradual adoption, rapid prototyping'
    }
  }

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
                <span>85 minutes</span>
              </div>
              <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                Week 3 - Day 3
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Lesson Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
            <Layers className="h-8 w-8 text-purple-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            JavaScript Frameworks Introduction
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the world of JavaScript frameworks! Learn why they exist, how they solve problems, 
            and get hands-on experience with React, Vue.js, and modern development tools.
          </p>
        </div>

        {/* Learning Objectives */}
        <div className="bg-purple-50 rounded-lg p-6 mb-8 border border-purple-200">
          <h2 className="text-xl font-semibold text-purple-900 mb-4 flex items-center">
            <Target className="h-5 w-5 mr-2" />
            Learning Objectives
          </h2>
          <ul className="space-y-2">
            <li className="flex items-start space-x-2">
              <CheckCircle className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
              <span className="text-purple-800">Understand why JavaScript frameworks exist and their benefits</span>
            </li>
            <li className="flex items-start space-x-2">
              <CheckCircle className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
              <span className="text-purple-800">Compare vanilla JavaScript with framework approaches</span>
            </li>
            <li className="flex items-start space-x-2">
              <CheckCircle className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
              <span className="text-purple-800">Get hands-on experience with React and Vue.js basics</span>
            </li>
            <li className="flex items-start space-x-2">
              <CheckCircle className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
              <span className="text-purple-800">Choose the right tool for your projects and career goals</span>
            </li>
          </ul>
        </div>

        {/* Why Frameworks Exist */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">1. Why Do JavaScript Frameworks Exist?</h2>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            As web applications became more complex, developers faced the same problems repeatedly: 
            managing application state, updating the user interface, and organizing code. Frameworks 
            emerged to solve these common challenges with proven patterns and tools.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-red-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-red-900 mb-4">😰 Problems Without Frameworks:</h3>
              <ul className="text-red-800 space-y-2 text-sm">
                <li>• Manual DOM manipulation gets complex quickly</li>
                <li>• Code becomes difficult to organize and maintain</li>
                <li>• Keeping UI in sync with data is error-prone</li>
                <li>• Lots of repetitive boilerplate code</li>
                <li>• No standardized patterns for common tasks</li>
                <li>• Hard to debug and test large applications</li>
                <li>• Performance optimizations require expert knowledge</li>
              </ul>
            </div>
            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-green-900 mb-4">✨ Frameworks Provide:</h3>
              <ul className="text-green-800 space-y-2 text-sm">
                <li>• Automatic DOM updates when data changes</li>
                <li>• Component-based architecture for organization</li>
                <li>• Built-in state management solutions</li>
                <li>• Powerful developer tools and debugging</li>
                <li>• Proven patterns and best practices</li>
                <li>• Performance optimizations out of the box</li>
                <li>• Large communities and ecosystems</li>
              </ul>
            </div>
          </div>

          <div className="bg-blue-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-blue-900 mb-4">🎯 The Real Value:</h3>
            <p className="text-blue-800 text-sm leading-relaxed">
              Frameworks don't just make things easier - they make them <strong>possible</strong>. 
              Try building a complex app like Facebook, Twitter, or Netflix with vanilla JavaScript, 
              and you'll quickly understand why frameworks exist. They let you focus on building 
              features instead of fighting with technical complexity.
            </p>
          </div>
        </div>

        {/* Framework Comparison */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">2. Framework Comparison: Same App, Different Approaches</h2>
          
          <p className="text-gray-700 mb-6">
            Let's build the same todo app with different approaches to see how frameworks compare. 
            Notice how each approach handles the same functionality differently.
          </p>

          <div className="mb-6">
            <div className="flex space-x-2 mb-4">
              <button
                onClick={() => setSelectedFramework('vanilla')}
                className={`px-4 py-2 rounded text-sm font-medium transition-colors ${
                  selectedFramework === 'vanilla' 
                    ? 'bg-yellow-500 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Vanilla JS
              </button>
              <button
                onClick={() => setSelectedFramework('react')}
                className={`px-4 py-2 rounded text-sm font-medium transition-colors ${
                  selectedFramework === 'react' 
                    ? 'bg-blue-500 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                React
              </button>
              <button
                onClick={() => setSelectedFramework('vue')}
                className={`px-4 py-2 rounded text-sm font-medium transition-colors ${
                  selectedFramework === 'vue' 
                    ? 'bg-green-500 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Vue.js
              </button>
            </div>

            {selectedFramework === 'vanilla' && (
              <SyntaxHighlighter 
                language="html" 
                style={vscDarkPlus}
                className="rounded-lg"
                customStyle={{ fontSize: '11px' }}
              >
                {vanillaJs}
              </SyntaxHighlighter>
            )}

            {selectedFramework === 'react' && (
              <SyntaxHighlighter 
                language="jsx" 
                style={vscDarkPlus}
                className="rounded-lg"
              >
                {reactExample}
              </SyntaxHighlighter>
            )}

            {selectedFramework === 'vue' && (
              <SyntaxHighlighter 
                language="html" 
                style={vscDarkPlus}
                className="rounded-lg"
              >
                {vueExample}
              </SyntaxHighlighter>
            )}
          </div>

          {/* Comparison Cards */}
          <div className="grid md:grid-cols-3 gap-4">
            {Object.entries(frameworkComparison).map(([key, framework]) => (
              <div 
                key={key}
                className={`rounded-lg p-6 border-2 ${
                  selectedFramework === key 
                    ? key === 'vanilla' ? 'border-yellow-300 bg-yellow-50' 
                      : key === 'react' ? 'border-blue-300 bg-blue-50'
                      : 'border-green-300 bg-green-50'
                    : 'border-gray-200 bg-gray-50'
                }`}
              >
                <h4 className={`font-semibold mb-3 ${
                  selectedFramework === key
                    ? key === 'vanilla' ? 'text-yellow-900'
                      : key === 'react' ? 'text-blue-900'
                      : 'text-green-900'
                    : 'text-gray-700'
                }`}>
                  {framework.name}
                </h4>
                
                <div className="mb-3">
                  <h5 className="text-sm font-semibold text-gray-700 mb-2">✅ Pros:</h5>
                  <ul className="text-xs text-gray-600 space-y-1">
                    {framework.pros.map((pro, index) => (
                      <li key={index}>• {pro}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-3">
                  <h5 className="text-sm font-semibold text-gray-700 mb-2">❌ Cons:</h5>
                  <ul className="text-xs text-gray-600 space-y-1">
                    {framework.cons.map((con, index) => (
                      <li key={index}>• {con}</li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h5 className="text-sm font-semibold text-gray-700 mb-2">🎯 Best For:</h5>
                  <p className="text-xs text-gray-600">{framework.bestFor}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Demo */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">3. See the Difference in Action</h2>
          
          <p className="text-gray-700 mb-6">
            Experience how different approaches handle the same functionality. Notice how frameworks 
            make the code more declarative and easier to reason about.
          </p>

          <button
            onClick={() => setShowFrameworkDemo(!showFrameworkDemo)}
            className="flex items-center space-x-2 px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-lg text-sm font-medium transition-colors mb-6"
          >
            {showFrameworkDemo ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            <span>{showFrameworkDemo ? 'Hide Demo' : 'Show Interactive Demo'}</span>
          </button>

          {showFrameworkDemo && (
            <div className="bg-white border-2 border-purple-300 rounded-lg p-6 shadow-lg">
              <div className="text-sm text-purple-700 mb-4 font-semibold bg-purple-50 px-3 py-2 rounded">
                👁️ Framework Benefits Demo - Notice the clean, declarative approach:
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Vanilla JS Issues */}
                  <div className="bg-red-50 rounded-lg p-4">
                    <h4 className="font-semibold text-red-900 mb-3">😰 Vanilla JavaScript Issues:</h4>
                    <div className="text-red-800 text-sm space-y-2">
                      <div className="bg-red-100 p-3 rounded border border-red-200">
                        <code className="text-xs">document.getElementById('todoList')</code>
                        <p className="mt-1">Manual DOM queries</p>
                      </div>
                      <div className="bg-red-100 p-3 rounded border border-red-200">
                        <code className="text-xs">container.innerHTML = ''</code>
                        <p className="mt-1">Manual DOM clearing</p>
                      </div>
                      <div className="bg-red-100 p-3 rounded border border-red-200">
                        <code className="text-xs">div.innerHTML = \`...\`</code>
                        <p className="mt-1">String template manipulation</p>
                      </div>
                      <div className="bg-red-100 p-3 rounded border border-red-200">
                        <code className="text-xs">renderTodos()</code>
                        <p className="mt-1">Manual re-rendering calls</p>
                      </div>
                    </div>
                  </div>

                  {/* Framework Benefits */}
                  <div className="bg-green-50 rounded-lg p-4">
                    <h4 className="font-semibold text-green-900 mb-3">✨ Framework Benefits:</h4>
                    <div className="text-green-800 text-sm space-y-2">
                      <div className="bg-green-100 p-3 rounded border border-green-200">
                        <code className="text-xs">useState([todos])</code>
                        <p className="mt-1">Automatic state management</p>
                      </div>
                      <div className="bg-green-100 p-3 rounded border border-green-200">
                        <code className="text-xs">{`{todos.map(todo => ...)}`}</code>
                        <p className="mt-1">Declarative rendering</p>
                      </div>
                      <div className="bg-green-100 p-3 rounded border border-green-200">
                        <code className="text-xs">{'onClick={addTodo}'}</code>
                        <p className="mt-1">Event handling built-in</p>
                      </div>
                      <div className="bg-green-100 p-3 rounded border border-green-200">
                        <code className="text-xs">Auto re-render</code>
                        <p className="mt-1">UI updates automatically</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 bg-blue-50 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-900 mb-2">🔍 Key Insights:</h4>
                  <ul className="text-blue-800 text-sm space-y-1">
                    <li>• <strong>Declarative vs Imperative:</strong> Say "what" not "how"</li>
                    <li>• <strong>Automatic Updates:</strong> UI stays in sync with data</li>
                    <li>• <strong>Component Thinking:</strong> Reusable pieces of functionality</li>
                    <li>• <strong>Developer Experience:</strong> Better tools, debugging, and workflow</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Popular Frameworks Overview */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">4. Popular Framework Landscape</h2>
          
          <p className="text-gray-700 mb-6">
            The JavaScript ecosystem has many frameworks. Here are the most popular ones and 
            what makes each special.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
              <div className="text-3xl mb-3">⚛️</div>
              <h4 className="font-semibold text-blue-900 mb-3">React</h4>
              <p className="text-blue-800 text-sm mb-3">By Facebook/Meta. Most popular, huge job market.</p>
              <ul className="text-blue-700 text-xs space-y-1">
                <li>• Virtual DOM for performance</li>
                <li>• Component-based architecture</li>
                <li>• One-way data flow</li>
                <li>• Rich ecosystem (Next.js, Gatsby)</li>
              </ul>
            </div>

            <div className="bg-green-50 rounded-lg p-6 border border-green-200">
              <div className="text-3xl mb-3">🖖</div>
              <h4 className="font-semibold text-green-900 mb-3">Vue.js</h4>
              <p className="text-green-800 text-sm mb-3">Progressive framework. Easy to learn.</p>
              <ul className="text-green-700 text-xs space-y-1">
                <li>• Template-based syntax</li>
                <li>• Gentle learning curve</li>
                <li>• Great documentation</li>
                <li>• Can be adopted gradually</li>
              </ul>
            </div>

            <div className="bg-red-50 rounded-lg p-6 border border-red-200">
              <div className="text-3xl mb-3">🅰️</div>
              <h4 className="font-semibold text-red-900 mb-3">Angular</h4>
              <p className="text-red-800 text-sm mb-3">By Google. Full framework solution.</p>
              <ul className="text-red-700 text-xs space-y-1">
                <li>• TypeScript by default</li>
                <li>• Comprehensive solution</li>
                <li>• Enterprise-focused</li>
                <li>• Steep learning curve</li>
              </ul>
            </div>

            <div className="bg-orange-50 rounded-lg p-6 border border-orange-200">
              <div className="text-3xl mb-3">🔥</div>
              <h4 className="font-semibold text-orange-900 mb-3">Svelte</h4>
              <p className="text-orange-800 text-sm mb-3">Compile-time optimized. No virtual DOM.</p>
              <ul className="text-orange-700 text-xs space-y-1">
                <li>• Small bundle sizes</li>
                <li>• Great performance</li>
                <li>• Simple syntax</li>
                <li>• Growing popularity</li>
              </ul>
            </div>

            <div className="bg-purple-50 rounded-lg p-6 border border-purple-200">
              <div className="text-3xl mb-3">⚡</div>
              <h4 className="font-semibold text-purple-900 mb-3">Next.js</h4>
              <p className="text-purple-800 text-sm mb-3">React framework for production apps.</p>
              <ul className="text-purple-700 text-xs space-y-1">
                <li>• Server-side rendering</li>
                <li>• Static site generation</li>
                <li>• API routes</li>
                <li>• Built-in optimizations</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <div className="text-3xl mb-3">🛠️</div>
              <h4 className="font-semibold text-gray-900 mb-3">Build Tools</h4>
              <p className="text-gray-800 text-sm mb-3">Vite, Webpack, Parcel for development.</p>
              <ul className="text-gray-700 text-xs space-y-1">
                <li>• Fast development servers</li>
                <li>• Hot module replacement</li>
                <li>• Bundle optimization</li>
                <li>• Module bundling</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Getting Started */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <Zap className="h-6 w-6 mr-2" />
            Getting Started: Your First Steps
          </h2>

          <p className="text-gray-700 mb-6">
            Ready to dive into frameworks? Here's your roadmap for getting started with the most 
            beginner-friendly options.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-blue-50 rounded-lg p-6">
              <h4 className="font-semibold text-blue-900 mb-4">🚀 Start with React:</h4>
              <div className="space-y-3">
                <div className="bg-blue-100 rounded p-3">
                  <code className="text-sm text-blue-900">npx create-react-app my-app</code>
                  <p className="text-blue-800 text-xs mt-1">Creates a new React project with everything set up</p>
                </div>
                <div className="bg-blue-100 rounded p-3">
                  <code className="text-sm text-blue-900">cd my-app && npm start</code>
                  <p className="text-blue-800 text-xs mt-1">Start development server on localhost:3000</p>
                </div>
              </div>
              <p className="text-blue-800 text-sm mt-3">
                Best for: Job market preparation, large community, lots of tutorials
              </p>
            </div>

            <div className="bg-green-50 rounded-lg p-6">
              <h4 className="font-semibold text-green-900 mb-4">🌟 Try Vue.js:</h4>
              <div className="space-y-3">
                <div className="bg-green-100 rounded p-3">
                  <code className="text-sm text-green-900">npm create vue@latest my-project</code>
                  <p className="text-green-800 text-xs mt-1">Creates a new Vue project with options</p>
                </div>
                <div className="bg-green-100 rounded p-3">
                  <code className="text-sm text-green-900">cd my-project && npm run dev</code>
                  <p className="text-green-800 text-xs mt-1">Start development server</p>
                </div>
              </div>
              <p className="text-green-800 text-sm mt-3">
                Best for: Easier learning curve, great documentation, gentle introduction
              </p>
            </div>
          </div>

          <div className="bg-yellow-50 rounded-lg p-6 border border-yellow-200">
            <h4 className="font-semibold text-yellow-900 mb-3">📚 Learning Path Recommendations:</h4>
            <ol className="list-decimal list-inside space-y-2 text-yellow-800 text-sm">
              <li>Master vanilla JavaScript fundamentals first (you're almost there!)</li>
              <li>Try building the same project in vanilla JS and a framework</li>
              <li>Start with React or Vue.js - pick one and stick with it</li>
              <li>Build 2-3 small projects to practice core concepts</li>
              <li>Learn the ecosystem (routing, state management, testing)</li>
              <li>Explore advanced patterns and performance optimization</li>
            </ol>
          </div>
        </div>

        {/* Practice Exercise */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <Code className="h-6 w-6 mr-2" />
            Practice Exercise: Framework Exploration
          </h2>

          <p className="text-gray-700 mb-6">
            Get hands-on experience with frameworks by creating and comparing implementations 
            of the same project.
          </p>

          <div className="bg-purple-50 rounded-lg p-6 border border-purple-200">
            <h4 className="font-semibold text-purple-900 mb-3">Your Challenge:</h4>
            <ol className="list-decimal list-inside space-y-2 text-purple-800">
              <li>Create a simple counter app in vanilla JavaScript</li>
              <li>Try the same counter app using React (create-react-app)</li>
              <li>Compare the code complexity and developer experience</li>
              <li>Experiment with adding new features to both versions</li>
              <li>Research and choose a framework for your portfolio project</li>
              <li>Set up a development environment for your chosen framework</li>
            </ol>
          </div>

          <div className="mt-6 bg-blue-50 rounded-lg p-4">
            <h4 className="font-semibold text-blue-900 mb-2">💡 Exploration Tips:</h4>
            <ul className="text-blue-800 text-sm space-y-1">
              <li>• Don't try to learn everything at once - pick one framework and dive deep</li>
              <li>• Follow official tutorials and documentation first</li>
              <li>• Join community Discord servers or forums for help</li>
              <li>• Build projects that interest you personally</li>
              <li>• Compare job postings in your area to see what's in demand</li>
            </ul>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Link
            href="/lessons/week-3/day-2"
            className="flex items-center space-x-2 text-gray-600 hover:text-gray-800"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Previous: Git & GitHub</span>
          </Link>
          
          <Link
            href="/lessons/week-4"
            className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-lg flex items-center space-x-2 transition-colors"
          >
            <span>Next: Week 4 Overview</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
