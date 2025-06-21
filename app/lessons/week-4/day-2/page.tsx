'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Clock, Target, CheckCircle, Shield, Users, Star, Eye, EyeOff } from 'lucide-react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'

export default function Week4Day2() {
  const [showBestPracticesDemo, setShowBestPracticesDemo] = useState(false)

  const cleanCodeExample = `/* GOOD: Clean, Readable Code */

// 1. Meaningful names and clear structure
class ShoppingCart {
    constructor() {
        this.items = [];
        this.total = 0;
    }

    addItem(product, quantity = 1) {
        const existingItem = this.findItem(product.id);
        
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            this.items.push({
                id: product.id,
                name: product.name,
                price: product.price,
                quantity: quantity
            });
        }
        
        this.updateTotal();
    }

    removeItem(productId) {
        this.items = this.items.filter(item => item.id !== productId);
        this.updateTotal();
    }

    findItem(productId) {
        return this.items.find(item => item.id === productId);
    }

    updateTotal() {
        this.total = this.items.reduce((sum, item) => {
            return sum + (item.price * item.quantity);
        }, 0);
    }

    getItemCount() {
        return this.items.reduce((count, item) => count + item.quantity, 0);
    }
}

// 2. CSS with clear organization and naming
.shopping-cart {
    max-width: 600px;
    margin: 2rem auto;
    padding: 1.5rem;
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.cart-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
    padding-bottom: 1rem;
    border-bottom: 2px solid #e5e5e5;
}

.cart-title {
    font-size: 1.5rem;
    font-weight: 600;
    color: #333;
}

.item-count {
    background: #007bff;
    color: white;
    padding: 0.25rem 0.75rem;
    border-radius: 20px;
    font-size: 0.875rem;
    font-weight: 500;
}

.cart-item {
    display: grid;
    grid-template-columns: 1fr auto auto;
    gap: 1rem;
    align-items: center;
    padding: 1rem 0;
    border-bottom: 1px solid #e5e5e5;
}

.cart-item:last-child {
    border-bottom: none;
}

.item-info h3 {
    margin: 0 0 0.25rem 0;
    font-size: 1rem;
    color: #333;
}

.item-price {
    font-weight: 600;
    color: #007bff;
}

.quantity-controls {
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.quantity-btn {
    width: 2rem;
    height: 2rem;
    border: 1px solid #ddd;
    background: white;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background-color 0.2s;
}

.quantity-btn:hover {
    background: #f8f9fa;
}

.remove-btn {
    background: #dc3545;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.2s;
}

.remove-btn:hover {
    background: #c82333;
}`

  const badCodeExample = `/* BAD: Messy, Hard to Maintain Code */

// 1. Poor naming and structure
var c = [];
var t = 0;

function a(p, q) {
    var x = false;
    for (var i = 0; i < c.length; i++) {
        if (c[i].id == p.id) {
            c[i].q += q;
            x = true;
            break;
        }
    }
    if (!x) {
        c.push({id: p.id, n: p.name, p: p.price, q: q});
    }
    t = 0;
    for (var j = 0; j < c.length; j++) {
        t += c[j].p * c[j].q;
    }
}

function r(id) {
    var nc = [];
    for (var i = 0; i < c.length; i++) {
        if (c[i].id != id) {
            nc.push(c[i]);
        }
    }
    c = nc;
    t = 0;
    for (var j = 0; j < c.length; j++) {
        t += c[j].p * c[j].q;
    }
}

// 2. CSS without organization
#thing1 { width: 600px; margin: 2rem auto; padding: 1.5rem; background: white; border-radius: 8px; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); }
#thing2 { display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem; padding-bottom: 1rem; border-bottom: 2px solid #e5e5e5; }
.a { font-size: 1.5rem; font-weight: 600; color: #333; }
.b { background: #007bff; color: white; padding: 0.25rem 0.75rem; border-radius: 20px; font-size: 0.875rem; font-weight: 500; }
.item { display: grid; grid-template-columns: 1fr auto auto; gap: 1rem; align-items: center; padding: 1rem 0; border-bottom: 1px solid #e5e5e5; }
.item h3 { margin: 0 0 0.25rem 0; font-size: 1rem; color: #333; }
.price123 { font-weight: 600; color: #007bff; }
.qty { display: flex; align-items: center; gap: 0.5rem; }
.btn1 { width: 2rem; height: 2rem; border: 1px solid #ddd; background: white; border-radius: 4px; display: flex; align-items: center; justify-content: center; cursor: pointer; }
.btn2 { background: #dc3545; color: white; border: none; padding: 0.5rem 1rem; border-radius: 4px; cursor: pointer; }`

  const accessibilityExample = `<!-- Accessibility Best Practices -->

<!-- 1. Semantic HTML Structure -->
<nav aria-label="Main navigation">
    <ul>
        <li><a href="#home" aria-current="page">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
    </ul>
</nav>

<main>
    <section aria-labelledby="projects-heading">
        <h1 id="projects-heading">My Projects</h1>
        
        <!-- Form with proper labels and error handling -->
        <form aria-labelledby="contact-form-heading">
            <h2 id="contact-form-heading">Contact Me</h2>
            
            <div class="form-group">
                <label for="user-name">Full Name *</label>
                <input 
                    type="text" 
                    id="user-name" 
                    name="name" 
                    required 
                    aria-describedby="name-error"
                    aria-invalid="false"
                >
                <div id="name-error" class="error-message" aria-live="polite"></div>
            </div>
            
            <div class="form-group">
                <label for="user-email">Email Address *</label>
                <input 
                    type="email" 
                    id="user-email" 
                    name="email" 
                    required 
                    aria-describedby="email-help email-error"
                    aria-invalid="false"
                >
                <div id="email-help" class="help-text">We'll never share your email</div>
                <div id="email-error" class="error-message" aria-live="polite"></div>
            </div>
            
            <div class="form-group">
                <label for="message">Message *</label>
                <textarea 
                    id="message" 
                    name="message" 
                    required 
                    rows="5"
                    aria-describedby="message-error"
                    aria-invalid="false"
                ></textarea>
                <div id="message-error" class="error-message" aria-live="polite"></div>
            </div>
            
            <button type="submit" aria-describedby="submit-status">
                Send Message
            </button>
            <div id="submit-status" aria-live="polite"></div>
        </form>
        
        <!-- Image with proper alt text -->
        <img 
            src="project-screenshot.jpg" 
            alt="Screenshot of e-commerce website showing product grid and shopping cart functionality"
            loading="lazy"
        >
        
        <!-- Interactive elements with keyboard support -->
        <div class="project-card" tabindex="0" role="button" aria-pressed="false">
            <h3>E-commerce Website</h3>
            <p>A fully responsive online store built with React and Node.js</p>
            <div class="project-links">
                <a href="#" aria-label="View live demo of e-commerce website">Live Demo</a>
                <a href="#" aria-label="View source code for e-commerce website on GitHub">Source Code</a>
            </div>
        </div>
    </section>
</main>

<!-- Skip link for keyboard navigation -->
<a href="#main-content" class="skip-link">Skip to main content</a>

<style>
/* Accessibility CSS */
.skip-link {
    position: absolute;
    top: -40px;
    left: 6px;
    background: #000;
    color: #fff;
    padding: 8px;
    text-decoration: none;
    z-index: 1000;
}

.skip-link:focus {
    top: 6px;
}

/* Focus indicators */
button:focus, 
input:focus, 
textarea:focus, 
a:focus,
[tabindex]:focus {
    outline: 2px solid #007bff;
    outline-offset: 2px;
}

/* High contrast mode support */
@media (prefers-contrast: high) {
    .project-card {
        border: 2px solid;
    }
}

/* Reduced motion support */
@media (prefers-reduced-motion: reduce) {
    * {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
    }
}

/* Color contrast ratios - ensure minimum 4.5:1 for normal text */
.text-primary { color: #003d7a; } /* 7.8:1 contrast ratio */
.text-secondary { color: #495057; } /* 7.5:1 contrast ratio */

/* Error states with multiple indicators */
.form-group.error input {
    border-color: #dc3545;
    background-image: url('error-icon.svg');
}

.error-message {
    color: #721c24;
    font-size: 0.875rem;
    margin-top: 0.25rem;
}

/* Screen reader only text */
.sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
}
</style>`

  const securityBestPractices = `// Security Best Practices for Frontend

// 1. Input Validation and Sanitization
function sanitizeInput(input) {
    // Remove potential XSS characters
    return input
        .replace(/[<>\"']/g, '') // Remove dangerous characters
        .trim() // Remove whitespace
        .substring(0, 1000); // Limit length
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email) && email.length <= 254;
}

function validateForm(data) {
    const errors = {};
    
    // Validate name
    if (!data.name || data.name.trim().length < 2) {
        errors.name = 'Name must be at least 2 characters';
    }
    
    // Validate email
    if (!validateEmail(data.email)) {
        errors.email = 'Please enter a valid email address';
    }
    
    // Validate message
    if (!data.message || data.message.trim().length < 10) {
        errors.message = 'Message must be at least 10 characters';
    }
    
    return {
        isValid: Object.keys(errors).length === 0,
        errors
    };
}

// 2. Secure API Communication
class ApiClient {
    constructor(baseURL) {
        this.baseURL = baseURL;
    }

    async request(endpoint, options = {}) {
        const url = \`\${this.baseURL}\${endpoint}\`;
        
        const config = {
            headers: {
                'Content-Type': 'application/json',
                // Add CSRF token if available
                'X-CSRF-Token': this.getCSRFToken(),
                ...options.headers
            },
            ...options
        };

        try {
            const response = await fetch(url, config);
            
            // Check if response is ok
            if (!response.ok) {
                throw new Error(\`HTTP error! status: \${response.status}\`);
            }
            
            return await response.json();
        } catch (error) {
            console.error('API request failed:', error);
            throw error;
        }
    }

    getCSRFToken() {
        return document.querySelector('meta[name="csrf-token"]')?.getAttribute('content') || '';
    }
}

// 3. Environment Variables Management
// NEVER put sensitive data in frontend code
const config = {
    apiUrl: process.env.REACT_APP_API_URL || 'http://localhost:3000/api',
    environment: process.env.NODE_ENV || 'development',
    // Use public environment variables only
    publicApiKey: process.env.REACT_APP_PUBLIC_API_KEY
};

// 4. Content Security Policy (CSP) Headers
// Add to your HTML head or server configuration:
/*
<meta http-equiv="Content-Security-Policy" 
      content="default-src 'self'; 
               script-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net; 
               style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; 
               font-src 'self' https://fonts.gstatic.com;
               img-src 'self' data: https:;
               connect-src 'self' https://api.yoursite.com;">
*/

// 5. Local Storage Security
class SecureStorage {
    static setItem(key, value, expirationMinutes = 60) {
        const now = new Date();
        const item = {
            value: value,
            expiry: now.getTime() + (expirationMinutes * 60 * 1000)
        };
        
        try {
            localStorage.setItem(key, JSON.stringify(item));
        } catch (error) {
            console.warn('Failed to save to localStorage:', error);
        }
    }

    static getItem(key) {
        try {
            const itemStr = localStorage.getItem(key);
            if (!itemStr) return null;

            const item = JSON.parse(itemStr);
            const now = new Date();

            if (now.getTime() > item.expiry) {
                localStorage.removeItem(key);
                return null;
            }

            return item.value;
        } catch (error) {
            console.warn('Failed to read from localStorage:', error);
            return null;
        }
    }

    static removeItem(key) {
        try {
            localStorage.removeItem(key);
        } catch (error) {
            console.warn('Failed to remove from localStorage:', error);
        }
    }
}`

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link 
              href="/lessons/week-4"
              className="inline-flex items-center text-primary-600 hover:text-primary-700"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Week 4
            </Link>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <Clock className="h-4 w-4" />
                <span>85 minutes</span>
              </div>
              <div className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                Week 4 - Day 2
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Lesson Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
            <Star className="h-8 w-8 text-green-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Industry Best Practices & Professional Standards
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn the professional standards and best practices that separate good developers from great ones. 
            Master code quality, accessibility, security, and collaboration skills that employers value most.
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
              <span className="text-green-800">Write clean, maintainable code that follows industry standards</span>
            </li>
            <li className="flex items-start space-x-2">
              <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span className="text-green-800">Implement accessibility standards for inclusive web development</span>
            </li>
            <li className="flex items-start space-x-2">
              <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span className="text-green-800">Apply security best practices to protect user data</span>
            </li>
            <li className="flex items-start space-x-2">
              <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span className="text-green-800">Understand team collaboration and professional development workflows</span>
            </li>
          </ul>
        </div>

        {/* Clean Code Principles */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">1. Clean Code Principles</h2>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            Clean code is code that is easy to read, understand, and maintain. It's not just about making code work - 
            it's about making code that other developers (including future you) can easily work with.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-red-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-red-900 mb-4">❌ Bad Code Example:</h3>
              <SyntaxHighlighter 
                language="javascript" 
                style={vscDarkPlus}
                className="rounded-lg"
                customStyle={{ fontSize: '10px' }}
              >
                {badCodeExample}
              </SyntaxHighlighter>
            </div>
            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-green-900 mb-4">✅ Clean Code Example:</h3>
              <SyntaxHighlighter 
                language="javascript" 
                style={vscDarkPlus}
                className="rounded-lg"
                customStyle={{ fontSize: '10px' }}
              >
                {cleanCodeExample}
              </SyntaxHighlighter>
            </div>
          </div>

          <div className="bg-blue-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-blue-900 mb-4">🎯 Clean Code Principles:</h3>
            <div className="grid md:grid-cols-2 gap-6 text-blue-800 text-sm">
              <ul className="space-y-2">
                <li>• <strong>Meaningful Names:</strong> Use descriptive variable and function names</li>
                <li>• <strong>Small Functions:</strong> Each function should do one thing well</li>
                <li>• <strong>Clear Comments:</strong> Explain why, not what</li>
                <li>• <strong>Consistent Formatting:</strong> Use consistent indentation and spacing</li>
              </ul>
              <ul className="space-y-2">
                <li>• <strong>DRY Principle:</strong> Don't Repeat Yourself</li>
                <li>• <strong>Error Handling:</strong> Handle edge cases gracefully</li>
                <li>• <strong>Readable Structure:</strong> Organize code logically</li>
                <li>• <strong>Remove Dead Code:</strong> Delete unused code immediately</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Accessibility */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <Users className="h-6 w-6 mr-2" />
            2. Web Accessibility (A11y)
          </h2>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            Web accessibility ensures that people with disabilities can use your websites. It's not just the right thing to do - 
            it's also legally required in many jurisdictions and improves the experience for all users.
          </p>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Accessibility Implementation Example:</h3>
            <SyntaxHighlighter 
              language="html" 
              style={vscDarkPlus}
              className="rounded-lg"
              customStyle={{ fontSize: '11px' }}
            >
              {accessibilityExample}
            </SyntaxHighlighter>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div className="bg-purple-50 rounded-lg p-6">
              <h4 className="font-semibold text-purple-900 mb-3">👁️ Visual Accessibility:</h4>
              <ul className="text-purple-800 text-sm space-y-1">
                <li>• High contrast colors (4.5:1 minimum)</li>
                <li>• Readable font sizes (16px minimum)</li>
                <li>• Clear focus indicators</li>
                <li>• Meaningful color usage</li>
                <li>• Alternative text for images</li>
              </ul>
            </div>
            <div className="bg-green-50 rounded-lg p-6">
              <h4 className="font-semibold text-green-900 mb-3">⌨️ Motor Accessibility:</h4>
              <ul className="text-green-800 text-sm space-y-1">
                <li>• Keyboard navigation support</li>
                <li>• Large click targets (44px minimum)</li>
                <li>• No time limits on interactions</li>
                <li>• Skip links for navigation</li>
                <li>• Accessible form controls</li>
              </ul>
            </div>
            <div className="bg-blue-50 rounded-lg p-6">
              <h4 className="font-semibold text-blue-900 mb-3">🔊 Cognitive Accessibility:</h4>
              <ul className="text-blue-800 text-sm space-y-1">
                <li>• Clear, simple language</li>
                <li>• Consistent navigation</li>
                <li>• Error prevention and correction</li>
                <li>• Reduced motion options</li>
                <li>• Logical content structure</li>
              </ul>
            </div>
          </div>

          <div className="bg-yellow-50 rounded-lg p-6 border border-yellow-200">
            <h4 className="font-semibold text-yellow-900 mb-3">🛠️ Accessibility Testing Tools:</h4>
            <div className="grid md:grid-cols-2 gap-4 text-yellow-800 text-sm">
              <ul className="space-y-1">
                <li>• <strong>axe DevTools:</strong> Browser extension for automated testing</li>
                <li>• <strong>WAVE:</strong> Web accessibility evaluation tool</li>
                <li>• <strong>Color Oracle:</strong> Color blindness simulator</li>
              </ul>
              <ul className="space-y-1">
                <li>• <strong>Lighthouse:</strong> Built-in accessibility audit</li>
                <li>• <strong>Screen readers:</strong> NVDA (free), JAWS, VoiceOver</li>
                <li>• <strong>Keyboard testing:</strong> Navigate without mouse</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Security Best Practices */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <Shield className="h-6 w-6 mr-2" />
            3. Frontend Security Best Practices
          </h2>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            Security is everyone's responsibility. Even frontend developers need to understand and implement 
            security measures to protect user data and prevent common vulnerabilities.
          </p>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Security Implementation Examples:</h3>
            <SyntaxHighlighter 
              language="javascript" 
              style={vscDarkPlus}
              className="rounded-lg"
              customStyle={{ fontSize: '11px' }}
            >
              {securityBestPractices}
            </SyntaxHighlighter>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-red-50 rounded-lg p-6">
              <h4 className="font-semibold text-red-900 mb-3">🚨 Common Security Threats:</h4>
              <ul className="text-red-800 text-sm space-y-2">
                <li>• <strong>XSS (Cross-Site Scripting):</strong> Malicious scripts in user input</li>
                <li>• <strong>CSRF (Cross-Site Request Forgery):</strong> Unauthorized actions</li>
                <li>• <strong>Data Exposure:</strong> Sensitive data in frontend code</li>
                <li>• <strong>Insecure Storage:</strong> Sensitive data in localStorage</li>
                <li>• <strong>Man-in-the-Middle:</strong> Unencrypted data transmission</li>
              </ul>
            </div>
            <div className="bg-green-50 rounded-lg p-6">
              <h4 className="font-semibold text-green-900 mb-3">🛡️ Security Measures:</h4>
              <ul className="text-green-800 text-sm space-y-2">
                <li>• <strong>Input Validation:</strong> Sanitize all user inputs</li>
                <li>• <strong>HTTPS Only:</strong> Always use secure connections</li>
                <li>• <strong>CSP Headers:</strong> Content Security Policy</li>
                <li>• <strong>Secure Storage:</strong> Never store secrets in frontend</li>
                <li>• <strong>Regular Updates:</strong> Keep dependencies updated</li>
              </ul>
            </div>
          </div>

          <div className="bg-blue-50 rounded-lg p-6">
            <h4 className="font-semibold text-blue-900 mb-3">🔒 Frontend Security Checklist:</h4>
            <div className="grid md:grid-cols-2 gap-4 text-blue-800 text-sm">
              <ul className="space-y-1">
                <li>□ Validate and sanitize all user inputs</li>
                <li>□ Use HTTPS for all communications</li>
                <li>□ Implement Content Security Policy</li>
                <li>□ Avoid storing sensitive data in frontend</li>
              </ul>
              <ul className="space-y-1">
                <li>□ Keep dependencies updated</li>
                <li>□ Use environment variables properly</li>
                <li>□ Implement proper error handling</li>
                <li>□ Regular security audits</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Professional Development */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">4. Professional Development & Collaboration</h2>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            Technical skills are just part of being a successful developer. Professional communication, 
            continuous learning, and collaboration skills are equally important in today's tech industry.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-purple-50 rounded-lg p-6">
              <h4 className="font-semibold text-purple-900 mb-4">📚 Continuous Learning:</h4>
              <ul className="text-purple-800 text-sm space-y-2">
                <li>• <strong>Stay Current:</strong> Follow tech blogs, newsletters</li>
                <li>• <strong>Practice Regularly:</strong> Code challenges, side projects</li>
                <li>• <strong>Learn New Technologies:</strong> Explore trending frameworks</li>
                <li>• <strong>Join Communities:</strong> Discord, Reddit, local meetups</li>
                <li>• <strong>Contribute to Open Source:</strong> GitHub contributions</li>
                <li>• <strong>Attend Conferences:</strong> Virtual or in-person events</li>
              </ul>
            </div>
            <div className="bg-green-50 rounded-lg p-6">
              <h4 className="font-semibold text-green-900 mb-4">🤝 Team Collaboration:</h4>
              <ul className="text-green-800 text-sm space-y-2">
                <li>• <strong>Code Reviews:</strong> Give and receive feedback gracefully</li>
                <li>• <strong>Documentation:</strong> Write clear README files and comments</li>
                <li>• <strong>Communication:</strong> Ask questions, share knowledge</li>
                <li>• <strong>Version Control:</strong> Use Git professionally</li>
                <li>• <strong>Agile Methodologies:</strong> Understand Scrum, Kanban</li>
                <li>• <strong>Pair Programming:</strong> Collaborate in real-time</li>
              </ul>
            </div>
          </div>

          <div className="bg-blue-50 rounded-lg p-6 mb-6">
            <h4 className="font-semibold text-blue-900 mb-4">💼 Professional Standards:</h4>
            <div className="grid md:grid-cols-3 gap-4 text-blue-800 text-sm">
              <div>
                <h5 className="font-semibold mb-2">Code Quality:</h5>
                <ul className="space-y-1">
                  <li>• Write self-documenting code</li>
                  <li>• Follow team conventions</li>
                  <li>• Use linting tools</li>
                  <li>• Write meaningful commit messages</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold mb-2">Communication:</h5>
                <ul className="space-y-1">
                  <li>• Ask clarifying questions</li>
                  <li>• Update team on progress</li>
                  <li>• Document decisions</li>
                  <li>• Be respectful and inclusive</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold mb-2">Problem Solving:</h5>
                <ul className="space-y-1">
                  <li>• Break down complex problems</li>
                  <li>• Research before asking</li>
                  <li>• Share solutions with team</li>
                  <li>• Learn from mistakes</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 rounded-lg p-6 border border-yellow-200">
            <h4 className="font-semibold text-yellow-900 mb-3">🎯 Career Development Tips:</h4>
            <div className="grid md:grid-cols-2 gap-4 text-yellow-800 text-sm">
              <ul className="space-y-1">
                <li>• Build a strong portfolio with diverse projects</li>
                <li>• Contribute to open source projects</li>
                <li>• Network with other developers</li>
                <li>• Share your knowledge through blogging or speaking</li>
              </ul>
              <ul className="space-y-1">
                <li>• Seek mentorship and be a mentor</li>
                <li>• Stay curious and experiment with new technologies</li>
                <li>• Focus on both technical and soft skills</li>
                <li>• Set clear career goals and track progress</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Interactive Demo */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">5. Best Practices in Action</h2>
          
          <p className="text-gray-700 mb-6">
            See how all these best practices come together in a professional development environment.
          </p>

          <button
            onClick={() => setShowBestPracticesDemo(!showBestPracticesDemo)}
            className="flex items-center space-x-2 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg text-sm font-medium transition-colors mb-6"
          >
            {showBestPracticesDemo ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            <span>{showBestPracticesDemo ? 'Hide Demo' : 'Show Professional Workflow'}</span>
          </button>

          {showBestPracticesDemo && (
            <div className="bg-white border-2 border-green-300 rounded-lg p-6 shadow-lg">
              <div className="text-sm text-green-700 mb-4 font-semibold bg-green-50 px-3 py-2 rounded">
                👨‍💻 Professional Development Workflow
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="space-y-6">
                  {/* Planning Phase */}
                  <div className="border border-blue-200 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-900 mb-3">📋 1. Project Planning</h4>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <h5 className="font-semibold text-gray-800 mb-2">Requirements Analysis:</h5>
                        <ul className="text-gray-600 space-y-1">
                          <li>• Understand user needs</li>
                          <li>• Define accessibility requirements</li>
                          <li>• Identify security considerations</li>
                          <li>• Plan for performance</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-800 mb-2">Technical Planning:</h5>
                        <ul className="text-gray-600 space-y-1">
                          <li>• Choose appropriate technologies</li>
                          <li>• Design component architecture</li>
                          <li>• Plan testing strategy</li>
                          <li>• Set up development environment</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Development Phase */}
                  <div className="border border-green-200 rounded-lg p-4">
                    <h4 className="font-semibold text-green-900 mb-3">⚡ 2. Development Process</h4>
                    <div className="grid md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <h5 className="font-semibold text-gray-800 mb-2">Code Quality:</h5>
                        <ul className="text-gray-600 space-y-1">
                          <li>• Write clean, readable code</li>
                          <li>• Follow naming conventions</li>
                          <li>• Implement error handling</li>
                          <li>• Add proper documentation</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-800 mb-2">Accessibility:</h5>
                        <ul className="text-gray-600 space-y-1">
                          <li>• Use semantic HTML</li>
                          <li>• Add ARIA labels</li>
                          <li>• Test keyboard navigation</li>
                          <li>• Ensure color contrast</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-800 mb-2">Security:</h5>
                        <ul className="text-gray-600 space-y-1">
                          <li>• Validate user inputs</li>
                          <li>• Use secure communication</li>
                          <li>• Handle errors gracefully</li>
                          <li>• Audit dependencies</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Testing & Deployment */}
                  <div className="border border-purple-200 rounded-lg p-4">
                    <h4 className="font-semibold text-purple-900 mb-3">🧪 3. Testing & Deployment</h4>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <h5 className="font-semibold text-gray-800 mb-2">Quality Assurance:</h5>
                        <ul className="text-gray-600 space-y-1">
                          <li>• Run accessibility audits</li>
                          <li>• Test performance metrics</li>
                          <li>• Validate across browsers</li>
                          <li>• Check mobile responsiveness</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-800 mb-2">Deployment:</h5>
                        <ul className="text-gray-600 space-y-1">
                          <li>• Optimize for production</li>
                          <li>• Set up monitoring</li>
                          <li>• Configure security headers</li>
                          <li>• Document deployment process</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 bg-green-50 rounded-lg p-4">
                  <h4 className="font-semibold text-green-900 mb-2">🏆 Professional Success Factors:</h4>
                  <ul className="text-green-800 text-sm space-y-1">
                    <li>• <strong>Quality First:</strong> Prioritize code quality over speed</li>
                    <li>• <strong>User-Centric:</strong> Always consider the end user experience</li>
                    <li>• <strong>Continuous Learning:</strong> Stay updated with best practices</li>
                    <li>• <strong>Team Player:</strong> Collaborate effectively and share knowledge</li>
                    <li>• <strong>Problem Solver:</strong> Focus on solutions, not just problems</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Practice Exercise */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <Star className="h-6 w-6 mr-2" />
            Practice Exercise: Professional Code Review
          </h2>

          <p className="text-gray-700 mb-6">
            Apply all the best practices you've learned by conducting a comprehensive review 
            and improvement of your portfolio project.
          </p>

          <div className="bg-green-50 rounded-lg p-6 border border-green-200">
            <h4 className="font-semibold text-green-900 mb-3">Your Professional Audit:</h4>
            <ol className="list-decimal list-inside space-y-2 text-green-800">
              <li>Conduct a thorough code review of your portfolio</li>
              <li>Run accessibility audits using Lighthouse and axe</li>
              <li>Implement security best practices (input validation, CSP)</li>
              <li>Optimize performance and test loading speeds</li>
              <li>Add proper documentation and README files</li>
              <li>Ensure mobile responsiveness across devices</li>
              <li>Test keyboard navigation throughout the site</li>
              <li>Validate HTML and CSS for standards compliance</li>
              <li>Create a professional deployment pipeline</li>
              <li>Document your development process and decisions</li>
            </ol>
          </div>

          <div className="mt-6 bg-blue-50 rounded-lg p-4">
            <h4 className="font-semibold text-blue-900 mb-2">🎯 Quality Checklist:</h4>
            <div className="grid md:grid-cols-2 gap-4 text-blue-800 text-sm">
              <ul className="space-y-1">
                <li>□ Lighthouse score above 90 in all categories</li>
                <li>□ Zero accessibility violations in axe audit</li>
                <li>□ All images have meaningful alt text</li>
                <li>□ Proper heading hierarchy (H1 → H2 → H3)</li>
                <li>□ Color contrast meets WCAG AA standards</li>
              </ul>
              <ul className="space-y-1">
                <li>□ All forms have proper labels and validation</li>
                <li>□ Site works completely with keyboard navigation</li>
                <li>□ No console errors or warnings</li>
                <li>□ Fast loading on slow connections</li>
                <li>□ Professional documentation in README</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Link
            href="/lessons/week-4/day-1"
            className="flex items-center space-x-2 text-gray-600 hover:text-gray-800"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Previous: Deployment & Optimization</span>
          </Link>
          
          <Link
            href="/lessons/week-4/day-3"
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg flex items-center space-x-2 transition-colors"
          >
            <span>Next: Career Preparation</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
