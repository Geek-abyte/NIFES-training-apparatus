'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Clock, Target, CheckCircle, GitBranch, Globe, Copy, Check, Code2 } from 'lucide-react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'

export default function Week3Day2() {
  const [copied, setCopied] = useState('')

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text)
    setCopied(type)
    setTimeout(() => setCopied(''), 2000)
  }

  const gitBasics = `# Git Basic Commands - Your Daily Workflow

# 1. Check the status of your repository
git status

# 2. Add changes to staging area
git add .                    # Add all changes
git add filename.html        # Add specific file
git add src/                 # Add specific folder

# 3. Commit your changes
git commit -m "Add navigation menu"
git commit -m "Fix mobile responsive layout"
git commit -m "Update color scheme"

# 4. Push changes to GitHub
git push origin main

# 5. Pull latest changes from GitHub
git pull origin main

# 6. View commit history
git log --oneline           # Simple one-line format
git log                     # Detailed format`

  const gitSetup = `# Initial Git Setup (do this once)

# Configure your identity
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

# Create a new repository
git init
git add README.md
git commit -m "Initial commit"

# Connect to GitHub repository
git remote add origin https://github.com/username/repository-name.git
git branch -M main
git push -u origin main`

  const githubWorkflow = `# Complete GitHub Workflow Example

# Day 1: Start a new feature
git checkout -b feature/contact-form
# Work on your contact form...
git add .
git commit -m "Add contact form HTML structure"
git commit -m "Style contact form with CSS"
git commit -m "Add form validation"

# Day 2: Push feature and create pull request
git push origin feature/contact-form
# Go to GitHub and create a Pull Request

# Day 3: Merge and clean up
git checkout main
git pull origin main          # Get latest changes
git branch -d feature/contact-form  # Delete local branch

# Start next feature
git checkout -b feature/portfolio-gallery`

  const gitignoreExample = `# .gitignore - Files and folders to ignore

# Dependencies
node_modules/
npm-debug.log*

# Build outputs
build/
dist/
*.min.js
*.min.css

# Environment variables
.env
.env.local
.env.production

# Editor files
.vscode/
.idea/
*.swp
*.swo

# OS generated files
.DS_Store
Thumbs.db

# Logs
logs/
*.log

# Temporary files
tmp/
temp/
cache/`

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
                <span>75 minutes</span>
              </div>
              <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                Week 3 - Day 2
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Lesson Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
            <Code2 className="h-8 w-8 text-orange-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Git & GitHub Fundamentals
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn the essential version control skills every developer needs! Master Git commands, 
            GitHub workflows, and collaboration techniques to manage your code like a pro.
          </p>
        </div>

        {/* Learning Objectives */}
        <div className="bg-orange-50 rounded-lg p-6 mb-8 border border-orange-200">
          <h2 className="text-xl font-semibold text-orange-900 mb-4 flex items-center">
            <Target className="h-5 w-5 mr-2" />
            Learning Objectives
          </h2>
          <ul className="space-y-2">
            <li className="flex items-start space-x-2">
              <CheckCircle className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
              <span className="text-orange-800">Understand version control and why it's essential for developers</span>
            </li>
            <li className="flex items-start space-x-2">
              <CheckCircle className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
              <span className="text-orange-800">Master fundamental Git commands for daily development workflow</span>
            </li>
            <li className="flex items-start space-x-2">
              <CheckCircle className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
              <span className="text-orange-800">Use GitHub for code storage, collaboration, and project showcase</span>
            </li>
            <li className="flex items-start space-x-2">
              <CheckCircle className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
              <span className="text-orange-800">Create a professional GitHub profile and deploy projects</span>
            </li>
          </ul>
        </div>

        {/* What is Version Control */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">1. What is Version Control?</h2>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            Version control is like having a time machine for your code. It tracks every change you make, 
            allows you to collaborate with others, and lets you go back to any previous version of your project.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-red-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-red-900 mb-4">😱 Without Version Control:</h3>
              <ul className="text-red-800 space-y-2 text-sm">
                <li>• "Copy of Copy of final_version_REAL_FINAL.doc"</li>
                <li>• Lost work when your computer crashes</li>
                <li>• Can't remember what changes you made</li>
                <li>• Impossible to collaborate effectively</li>
                <li>• Fear of breaking working code</li>
                <li>• No backup of your projects</li>
              </ul>
            </div>
            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-green-900 mb-4">✅ With Git & GitHub:</h3>
              <ul className="text-green-800 space-y-2 text-sm">
                <li>• Complete history of every change</li>
                <li>• Automatic backup in the cloud</li>
                <li>• Easy collaboration with teams</li>
                <li>• Can experiment without fear</li>
                <li>• Professional project showcase</li>
                <li>• Industry-standard tool used everywhere</li>
              </ul>
            </div>
          </div>

          <div className="bg-blue-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-blue-900 mb-4">🎯 Real-World Example:</h3>
            <p className="text-blue-800 text-sm leading-relaxed">
              Imagine you're building a website and you add a new feature that breaks everything. 
              With Git, you can instantly go back to the working version while keeping all your other changes. 
              You can also create "branches" to test ideas safely, then merge the good ones back into your main code.
            </p>
          </div>
        </div>

        {/* Git Basics */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">2. Essential Git Commands</h2>
          
          <p className="text-gray-700 mb-6">
            These are the Git commands you'll use every day as a developer. Master these and you'll 
            have everything you need for most projects.
          </p>

          <div className="mb-6">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-lg font-semibold text-gray-900">Your Daily Git Workflow:</h3>
              <button
                onClick={() => copyToClipboard(gitBasics, 'basics')}
                className="flex items-center space-x-1 px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded text-sm"
              >
                {copied === 'basics' ? <Check className="h-4 w-4 text-green-600" /> : <Copy className="h-4 w-4" />}
                <span>{copied === 'basics' ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>
            <SyntaxHighlighter 
              language="bash" 
              style={vscDarkPlus}
              className="rounded-lg"
            >
              {gitBasics}
            </SyntaxHighlighter>
          </div>

          {/* Git Workflow Visual */}
          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <h4 className="font-semibold text-gray-900 mb-4">The Git Workflow:</h4>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-red-100 rounded-lg p-4 text-center">
                <div className="text-2xl mb-2">📝</div>
                <h5 className="font-semibold text-red-900">1. Work</h5>
                <p className="text-red-800 text-sm">Edit your files</p>
              </div>
              <div className="bg-yellow-100 rounded-lg p-4 text-center">
                <div className="text-2xl mb-2">➕</div>
                <h5 className="font-semibold text-yellow-900">2. Add</h5>
                <p className="text-yellow-800 text-sm">git add .</p>
              </div>
              <div className="bg-blue-100 rounded-lg p-4 text-center">
                <div className="text-2xl mb-2">💾</div>
                <h5 className="font-semibold text-blue-900">3. Commit</h5>
                <p className="text-blue-800 text-sm">git commit -m "message"</p>
              </div>
              <div className="bg-green-100 rounded-lg p-4 text-center">
                <div className="text-2xl mb-2">☁️</div>
                <h5 className="font-semibold text-green-900">4. Push</h5>
                <p className="text-green-800 text-sm">git push origin main</p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-200">
            <h4 className="font-semibold text-yellow-900 mb-2">💡 Commit Message Best Practices:</h4>
            <ul className="text-yellow-800 text-sm space-y-1">
              <li>• Use present tense: "Add navigation menu" not "Added navigation menu"</li>
              <li>• Be specific: "Fix mobile menu alignment" not "Fix bugs"</li>
              <li>• Keep it under 50 characters for the title</li>
              <li>• Start with a verb: Add, Fix, Update, Remove, etc.</li>
            </ul>
          </div>
        </div>

        {/* Setting Up Git */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">3. Setting Up Git & GitHub</h2>
          
          <p className="text-gray-700 mb-6">
            Let's get your development environment set up with Git and connect it to GitHub for the first time.
          </p>

          <div className="mb-6">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-lg font-semibold text-gray-900">Initial Setup Commands:</h3>
              <button
                onClick={() => copyToClipboard(gitSetup, 'setup')}
                className="flex items-center space-x-1 px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded text-sm"
              >
                {copied === 'setup' ? <Check className="h-4 w-4 text-green-600" /> : <Copy className="h-4 w-4" />}
                <span>{copied === 'setup' ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>
            <SyntaxHighlighter 
              language="bash" 
              style={vscDarkPlus}
              className="rounded-lg"
            >
              {gitSetup}
            </SyntaxHighlighter>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 rounded-lg p-6">
              <h4 className="font-semibold text-blue-900 mb-3 flex items-center">
                <Code2 className="h-5 w-5 mr-2" />
                Git (Local)
              </h4>
              <ul className="text-blue-800 text-sm space-y-2">
                <li>• Tracks changes on your computer</li>
                <li>• Works offline</li>
                <li>• Stores complete project history</li>
                <li>• Allows branching and merging</li>
              </ul>
            </div>
            <div className="bg-purple-50 rounded-lg p-6">
              <h4 className="font-semibold text-purple-900 mb-3 flex items-center">
                <Globe className="h-5 w-5 mr-2" />
                GitHub (Remote)
              </h4>
              <ul className="text-purple-800 text-sm space-y-2">
                <li>• Cloud storage for your code</li>
                <li>• Collaboration platform</li>
                <li>• Project portfolio showcase</li>
                <li>• Free hosting for static sites</li>
              </ul>
            </div>
          </div>
        </div>

        {/* GitHub Workflow */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">4. Professional GitHub Workflow</h2>
          
          <p className="text-gray-700 mb-6">
            Learn the workflow used by professional developers to manage features, collaborate with teams, 
            and maintain clean project history.
          </p>

          <div className="mb-6">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-lg font-semibold text-gray-900">Feature Branch Workflow:</h3>
              <button
                onClick={() => copyToClipboard(githubWorkflow, 'workflow')}
                className="flex items-center space-x-1 px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded text-sm"
              >
                {copied === 'workflow' ? <Check className="h-4 w-4 text-green-600" /> : <Copy className="h-4 w-4" />}
                <span>{copied === 'workflow' ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>
            <SyntaxHighlighter 
              language="bash" 
              style={vscDarkPlus}
              className="rounded-lg"
            >
              {githubWorkflow}
            </SyntaxHighlighter>
          </div>

          <div className="bg-green-50 rounded-lg p-6 mb-6">
            <h4 className="font-semibold text-green-900 mb-3 flex items-center">
              <GitBranch className="h-5 w-5 mr-2" />
              Why Use Branches?
            </h4>
            <ul className="text-green-800 text-sm space-y-2">
              <li>• <strong>Isolation:</strong> Work on features without affecting main code</li>
              <li>• <strong>Collaboration:</strong> Multiple developers can work simultaneously</li>
              <li>• <strong>Experimentation:</strong> Try ideas safely</li>
              <li>• <strong>Code Review:</strong> Team can review changes before merging</li>
              <li>• <strong>Clean History:</strong> Organized and traceable development</li>
            </ul>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-blue-100 rounded-lg p-4 text-center">
              <div className="text-xl mb-2">🌟</div>
              <h5 className="font-semibold text-blue-900">Main Branch</h5>
              <p className="text-blue-800 text-sm">Production-ready code</p>
            </div>
            <div className="bg-yellow-100 rounded-lg p-4 text-center">
              <div className="text-xl mb-2">🔧</div>
              <h5 className="font-semibold text-yellow-900">Feature Branch</h5>
              <p className="text-yellow-800 text-sm">New features in progress</p>
            </div>
            <div className="bg-green-100 rounded-lg p-4 text-center">
              <div className="text-xl mb-2">🔀</div>
              <h5 className="font-semibold text-green-900">Pull Request</h5>
              <p className="text-green-800 text-sm">Merge proposal & review</p>
            </div>
          </div>
        </div>

        {/* .gitignore */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">5. What NOT to Track (.gitignore)</h2>
          
          <p className="text-gray-700 mb-6">
            Some files shouldn't be tracked by Git - like passwords, temporary files, or large dependencies. 
            The .gitignore file tells Git what to ignore.
          </p>

          <div className="mb-6">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-lg font-semibold text-gray-900">Common .gitignore Patterns:</h3>
              <button
                onClick={() => copyToClipboard(gitignoreExample, 'gitignore')}
                className="flex items-center space-x-1 px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded text-sm"
              >
                {copied === 'gitignore' ? <Check className="h-4 w-4 text-green-600" /> : <Copy className="h-4 w-4" />}
                <span>{copied === 'gitignore' ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>
            <SyntaxHighlighter 
              language="bash" 
              style={vscDarkPlus}
              className="rounded-lg"
            >
              {gitignoreExample}
            </SyntaxHighlighter>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-red-50 rounded-lg p-6">
              <h4 className="font-semibold text-red-900 mb-3">❌ Never Track These:</h4>
              <ul className="text-red-800 text-sm space-y-1">
                <li>• Passwords and API keys</li>
                <li>• node_modules/ directory</li>
                <li>• Build output files</li>
                <li>• Editor configuration files</li>
                <li>• Operating system files</li>
                <li>• Log files</li>
              </ul>
            </div>
            <div className="bg-green-50 rounded-lg p-6">
              <h4 className="font-semibold text-green-900 mb-3">✅ Always Track These:</h4>
              <ul className="text-green-800 text-sm space-y-1">
                <li>• Source code (.html, .css, .js)</li>
                <li>• Documentation (README.md)</li>
                <li>• Configuration files</li>
                <li>• Package.json (dependencies list)</li>
                <li>• Images and assets</li>
                <li>• .gitignore file itself</li>
              </ul>
            </div>
          </div>
        </div>

        {/* GitHub Profile */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">6. Building Your GitHub Profile</h2>
          
          <p className="text-gray-700 mb-6">
            Your GitHub profile is your developer portfolio. Employers and collaborators will judge 
            your skills based on your GitHub activity and projects.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-blue-50 rounded-lg p-6">
              <h4 className="font-semibold text-blue-900 mb-3">Profile Essentials:</h4>
              <ul className="text-blue-800 text-sm space-y-2">
                <li>• Professional profile photo</li>
                <li>• Clear bio describing your skills</li>
                <li>• Location and contact information</li>
                <li>• Link to your portfolio website</li>
                <li>• Regular commit activity (green squares!)</li>
              </ul>
            </div>
            <div className="bg-purple-50 rounded-lg p-6">
              <h4 className="font-semibold text-purple-900 mb-3">Repository Best Practices:</h4>
              <ul className="text-purple-800 text-sm space-y-2">
                <li>• Detailed README.md files</li>
                <li>• Live demo links</li>
                <li>• Clear project descriptions</li>
                <li>• Relevant topics/tags</li>
                <li>• Pin your best repositories</li>
              </ul>
            </div>
          </div>

          <div className="bg-yellow-50 rounded-lg p-6 border border-yellow-200">
            <h4 className="font-semibold text-yellow-900 mb-3">🚀 GitHub Pages - Free Hosting!</h4>
            <p className="text-yellow-800 text-sm mb-3">
              GitHub Pages lets you host static websites for free. Perfect for portfolios, project demos, and documentation.
            </p>
            <div className="bg-yellow-100 rounded p-3">
              <p className="text-yellow-900 text-sm font-mono">
                Your site will be available at: <br />
                https://username.github.io/repository-name
              </p>
            </div>
          </div>
        </div>

        {/* Practice Exercise */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <GitBranch className="h-6 w-6 mr-2" />
            Practice Exercise: Set Up Your Portfolio Repository
          </h2>

          <p className="text-gray-700 mb-6">
            Create your first GitHub repository and set up your portfolio with proper version control!
          </p>

          <div className="bg-green-50 rounded-lg p-6 border border-green-200">
            <h4 className="font-semibold text-green-900 mb-3">Your Tasks:</h4>
            <ol className="list-decimal list-inside space-y-2 text-green-800">
              <li>Create a GitHub account and set up your profile</li>
              <li>Install Git on your computer and configure it</li>
              <li>Create a new repository called "my-portfolio"</li>
              <li>Clone the repository to your local machine</li>
              <li>Add your portfolio files to the repository</li>
              <li>Create a detailed README.md file</li>
              <li>Make your first commit and push to GitHub</li>
              <li>Enable GitHub Pages for your portfolio</li>
              <li>Create a .gitignore file</li>
              <li>Make a small change and practice the add-commit-push workflow</li>
            </ol>
          </div>

          <div className="mt-6 bg-blue-50 rounded-lg p-4">
            <h4 className="font-semibold text-blue-900 mb-2">💡 Pro Tips:</h4>
            <ul className="text-blue-800 text-sm space-y-1">
              <li>• Commit early and often - don't wait until your project is "perfect"</li>
              <li>• Write meaningful commit messages that explain what you changed</li>
              <li>• Keep your repositories organized with good folder structure</li>
              <li>• Add live demo links to your README files</li>
              <li>• Star repositories you find useful for future reference</li>
            </ul>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Link
            href="/lessons/week-3/day-1"
            className="flex items-center space-x-2 text-gray-600 hover:text-gray-800"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Previous: Responsive Design</span>
          </Link>
          
          <Link
            href="/lessons/week-3/day-3"
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg flex items-center space-x-2 transition-colors"
          >
            <span>Next: JavaScript Frameworks</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
