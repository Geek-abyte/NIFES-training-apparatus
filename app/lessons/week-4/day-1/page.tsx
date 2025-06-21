'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Clock, Target, CheckCircle, Rocket, Globe, Eye, EyeOff, Copy, Check } from 'lucide-react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'

export default function Week4Day1() {
  const [showDeployDemo, setShowDeployDemo] = useState(false)
  const [copied, setCopied] = useState('')

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text)
    setCopied(type)
    setTimeout(() => setCopied(''), 2000)
  }

  const netlifyDeploySteps = `# Deploy to Netlify (Easiest Option)

1. Build your project for production
   npm run build
   # Creates a 'build' or 'dist' folder

2. Go to netlify.com and create account
3. Drag & drop your build folder to Netlify
4. Get instant live URL!

# For continuous deployment:
1. Connect your GitHub repository
2. Set build command: npm run build
3. Set publish directory: build (or dist)
4. Auto-deploy on every git push!`

  const vercelDeploySteps = `# Deploy to Vercel (Great for React/Next.js)

1. Install Vercel CLI
   npm install -g vercel

2. In your project directory
   vercel

3. Follow the prompts
   - Connect to GitHub
   - Configure project settings
   - Deploy!

# Or use GitHub integration:
1. Go to vercel.com
2. Import your GitHub repository
3. Configure and deploy
4. Get production URL instantly`

  const githubPagesSteps = `# Deploy to GitHub Pages (Free & Simple)

1. Install gh-pages package
   npm install --save-dev gh-pages

2. Add to package.json:
   {
     "homepage": "https://username.github.io/repository-name",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d build"
     }
   }

3. Deploy your site
   npm run deploy

4. Enable GitHub Pages in repository settings
   - Go to Settings > Pages
   - Select gh-pages branch
   - Your site is live!`

  const performanceOptimization = `/* Performance Optimization Techniques */

/* 1. Optimize Images */
.hero-image {
    /* Use WebP format when possible */
    background-image: url('hero.webp');
    /* Fallback for older browsers */
    background-image: url('hero.jpg');
    
    /* Lazy loading for images */
    loading: lazy;
    
    /* Responsive images */
    width: 100%;
    height: auto;
    max-width: 800px;
}

/* 2. Minimize CSS */
/* Remove unused styles */
/* Use shorthand properties */
.optimized-card {
    margin: 1rem 0; /* Instead of margin-top: 1rem; margin-bottom: 1rem; */
    padding: 1.5rem; /* Instead of separate padding values */
    background: #fff; /* Instead of background-color */
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

/* 3. Use CSS Grid and Flexbox efficiently */
.performance-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5rem;
    /* More efficient than float-based layouts */
}

/* 4. Optimize fonts */
@font-face {
    font-family: 'CustomFont';
    src: url('font.woff2') format('woff2'), /* Most efficient format first */
         url('font.woff') format('woff');
    font-display: swap; /* Improve loading performance */
}

/* 5. Critical CSS - inline essential styles */
/* Put above-the-fold styles inline in HTML head */`

  const seoOptimization = `<!-- SEO Optimization HTML Template -->
<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Essential Meta Tags -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <!-- SEO Meta Tags -->
    <title>John Smith - Frontend Developer | Portfolio</title>
    <meta name="description" content="Frontend developer specializing in React, JavaScript, and responsive web design. View my portfolio of modern web applications.">
    <meta name="keywords" content="frontend developer, web developer, React, JavaScript, HTML, CSS, portfolio">
    <meta name="author" content="John Smith">
    
    <!-- Open Graph (Social Media) -->
    <meta property="og:title" content="John Smith - Frontend Developer">
    <meta property="og:description" content="Frontend developer specializing in React and modern web technologies">
    <meta property="og:image" content="https://yoursite.com/og-image.jpg">
    <meta property="og:url" content="https://yoursite.com">
    <meta property="og:type" content="website">
    
    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="John Smith - Frontend Developer">
    <meta name="twitter:description" content="Frontend developer portfolio">
    <meta name="twitter:image" content="https://yoursite.com/twitter-image.jpg">
    
    <!-- Favicon -->
    <link rel="icon" type="image/x-icon" href="/favicon.ico">
    <link rel="apple-touch-icon" href="/apple-touch-icon.png">
    
    <!-- Structured Data (JSON-LD) -->
    <script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "John Smith",
        "jobTitle": "Frontend Developer",
        "url": "https://yoursite.com",
        "sameAs": [
            "https://github.com/johnsmith",
            "https://linkedin.com/in/johnsmith"
        ]
    }
    </script>
</head>
<body>
    <!-- Your content here -->
</body>
</html>`

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
                <span>90 minutes</span>
              </div>
              <div className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                Week 4 - Day 1
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Lesson Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
            <Rocket className="h-8 w-8 text-blue-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Website Deployment & Optimization
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Take your projects live! Learn how to deploy websites, optimize performance, 
            improve SEO, and make your portfolio shine in the real world.
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
              <span className="text-blue-800">Deploy websites to popular hosting platforms</span>
            </li>
            <li className="flex items-start space-x-2">
              <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <span className="text-blue-800">Optimize website performance and loading speed</span>
            </li>
            <li className="flex items-start space-x-2">
              <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <span className="text-blue-800">Implement SEO best practices for better visibility</span>
            </li>
            <li className="flex items-start space-x-2">
              <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <span className="text-blue-800">Set up custom domains and professional hosting</span>
            </li>
          </ul>
        </div>

        {/* Why Deploy */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">1. Why Deploy Your Projects?</h2>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            Having your projects live on the internet is crucial for your career. It's the difference 
            between saying "I can code" and proving "Here's what I've built." Deployed projects 
            showcase your skills to employers, clients, and the developer community.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-red-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-red-900 mb-4">😟 Projects Only on Your Computer:</h3>
              <ul className="text-red-800 space-y-2 text-sm">
                <li>• No one can see your work</li>
                <li>• Can't share links with employers</li>
                <li>• No real-world testing</li>
                <li>• Missing from your professional portfolio</li>
                <li>• No feedback from users</li>
                <li>• Don't learn deployment skills</li>
              </ul>
            </div>
            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-green-900 mb-4">🚀 Deployed Projects:</h3>
              <ul className="text-green-800 space-y-2 text-sm">
                <li>• Accessible from anywhere</li>
                <li>• Shareable links for job applications</li>
                <li>• Real user feedback and testing</li>
                <li>• Professional online presence</li>
                <li>• Experience with production environments</li>
                <li>• Learn DevOps and deployment skills</li>
              </ul>
            </div>
          </div>

          <div className="bg-blue-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-blue-900 mb-4">💼 Career Impact:</h3>
            <div className="grid md:grid-cols-3 gap-4 text-blue-800 text-sm">
              <div>
                <h4 className="font-semibold mb-2">For Job Applications:</h4>
                <ul className="space-y-1">
                  <li>• Live demo links in resume</li>
                  <li>• Proof of technical skills</li>
                  <li>• Shows deployment knowledge</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">For Freelancing:</h4>
                <ul className="space-y-1">
                  <li>• Portfolio to show clients</li>
                  <li>• Professional credibility</li>
                  <li>• Working examples of your style</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">For Learning:</h4>
                <ul className="space-y-1">
                  <li>• Real-world performance testing</li>
                  <li>• User feedback and iteration</li>
                  <li>• Understanding production issues</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Deployment Platforms */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">2. Popular Deployment Platforms</h2>
          
          <p className="text-gray-700 mb-6">
            Modern deployment platforms make it incredibly easy to get your sites live. 
            Here are the most popular options for frontend projects.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div className="bg-teal-50 rounded-lg p-6 border border-teal-200">
              <div className="text-3xl mb-3">🌐</div>
              <h4 className="font-semibold text-teal-900 mb-3">Netlify</h4>
              <p className="text-teal-800 text-sm mb-3">Perfect for static sites and SPAs</p>
              <ul className="text-teal-700 text-xs space-y-1 mb-4">
                <li>• Drag & drop deployment</li>
                <li>• Auto-deploy from Git</li>
                <li>• Free tier available</li>
                <li>• Built-in form handling</li>
                <li>• CDN and SSL included</li>
              </ul>
              <div className="bg-teal-100 rounded p-2">
                <p className="text-teal-900 text-xs font-semibold">Best for: Beginners, static sites</p>
              </div>
            </div>

            <div className="bg-black rounded-lg p-6 text-white">
              <div className="text-3xl mb-3">▲</div>
              <h4 className="font-semibold mb-3">Vercel</h4>
              <p className="text-gray-300 text-sm mb-3">Optimized for React and Next.js</p>
              <ul className="text-gray-300 text-xs space-y-1 mb-4">
                <li>• Zero-config deployment</li>
                <li>• Excellent performance</li>
                <li>• Serverless functions</li>
                <li>• Preview deployments</li>
                <li>• GitHub integration</li>
              </ul>
              <div className="bg-gray-800 rounded p-2">
                <p className="text-white text-xs font-semibold">Best for: React/Next.js projects</p>
              </div>
            </div>

            <div className="bg-purple-50 rounded-lg p-6 border border-purple-200">
              <div className="text-3xl mb-3">👑</div>
              <h4 className="font-semibold text-purple-900 mb-3">GitHub Pages</h4>
              <p className="text-purple-800 text-sm mb-3">Free hosting directly from GitHub</p>
              <ul className="text-purple-700 text-xs space-y-1 mb-4">
                <li>• Free for public repos</li>
                <li>• Custom domain support</li>
                <li>• Jekyll integration</li>
                <li>• Simple setup</li>
                <li>• Version controlled</li>
              </ul>
              <div className="bg-purple-100 rounded p-2">
                <p className="text-purple-900 text-xs font-semibold">Best for: Portfolio sites, docs</p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 rounded-lg p-6 border border-yellow-200">
            <h4 className="font-semibold text-yellow-900 mb-3">🆚 Quick Comparison:</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-yellow-900">
                    <th className="text-left p-2">Feature</th>
                    <th className="text-left p-2">Netlify</th>
                    <th className="text-left p-2">Vercel</th>
                    <th className="text-left p-2">GitHub Pages</th>
                  </tr>
                </thead>
                <tbody className="text-yellow-800">
                  <tr>
                    <td className="p-2 font-semibold">Free Tier</td>
                    <td className="p-2">✅ 100GB bandwidth</td>
                    <td className="p-2">✅ 100GB bandwidth</td>
                    <td className="p-2">✅ Unlimited</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-semibold">Custom Domain</td>
                    <td className="p-2">✅ Free SSL</td>
                    <td className="p-2">✅ Free SSL</td>
                    <td className="p-2">✅ Free SSL</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-semibold">Build Time</td>
                    <td className="p-2">300 min/month</td>
                    <td className="p-2">6000 min/month</td>
                    <td className="p-2">Unlimited</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Step-by-Step Deployment */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">3. Step-by-Step Deployment Guides</h2>
          
          <p className="text-gray-700 mb-6">
            Follow these detailed guides to deploy your first website. We'll cover the three 
            most popular and beginner-friendly platforms.
          </p>

          <div className="space-y-6">
            {/* Netlify Guide */}
            <div className="border border-teal-200 rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-teal-900 flex items-center">
                  <Globe className="h-5 w-5 mr-2" />
                  Deploy to Netlify (Recommended for Beginners)
                </h3>
                <button
                  onClick={() => copyToClipboard(netlifyDeploySteps, 'netlify')}
                  className="flex items-center space-x-1 px-3 py-1 bg-teal-100 hover:bg-teal-200 rounded text-sm"
                >
                  {copied === 'netlify' ? <Check className="h-4 w-4 text-green-600" /> : <Copy className="h-4 w-4" />}
                  <span>{copied === 'netlify' ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>
              <SyntaxHighlighter 
                language="bash" 
                style={vscDarkPlus}
                className="rounded-lg"
              >
                {netlifyDeploySteps}
              </SyntaxHighlighter>
            </div>

            {/* Vercel Guide */}
            <div className="border border-gray-300 rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                  <Rocket className="h-5 w-5 mr-2" />
                  Deploy to Vercel (Best for React)
                </h3>
                <button
                  onClick={() => copyToClipboard(vercelDeploySteps, 'vercel')}
                  className="flex items-center space-x-1 px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded text-sm"
                >
                  {copied === 'vercel' ? <Check className="h-4 w-4 text-green-600" /> : <Copy className="h-4 w-4" />}
                  <span>{copied === 'vercel' ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>
              <SyntaxHighlighter 
                language="bash" 
                style={vscDarkPlus}
                className="rounded-lg"
              >
                {vercelDeploySteps}
              </SyntaxHighlighter>
            </div>

            {/* GitHub Pages Guide */}
            <div className="border border-purple-200 rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-purple-900 flex items-center">
                  <Globe className="h-5 w-5 mr-2" />
                  Deploy to GitHub Pages (Free Forever)
                </h3>
                <button
                  onClick={() => copyToClipboard(githubPagesSteps, 'github')}
                  className="flex items-center space-x-1 px-3 py-1 bg-purple-100 hover:bg-purple-200 rounded text-sm"
                >
                  {copied === 'github' ? <Check className="h-4 w-4 text-green-600" /> : <Copy className="h-4 w-4" />}
                  <span>{copied === 'github' ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>
              <SyntaxHighlighter 
                language="bash" 
                style={vscDarkPlus}
                className="rounded-lg"
              >
                {githubPagesSteps}
              </SyntaxHighlighter>
            </div>
          </div>
        </div>

        {/* Performance Optimization */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">4. Website Performance Optimization</h2>
          
          <p className="text-gray-700 mb-6">
            A fast website provides better user experience, ranks higher in search results, 
            and converts better. Learn the essential optimization techniques every developer should know.
          </p>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Performance Optimization Techniques:</h3>
            <SyntaxHighlighter 
              language="css" 
              style={vscDarkPlus}
              className="rounded-lg"
              customStyle={{ fontSize: '11px' }}
            >
              {performanceOptimization}
            </SyntaxHighlighter>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-green-50 rounded-lg p-6">
              <h4 className="font-semibold text-green-900 mb-4">🚀 Performance Wins:</h4>
              <ul className="text-green-800 text-sm space-y-2">
                <li>• <strong>Optimize Images:</strong> Use WebP, compress, lazy load</li>
                <li>• <strong>Minify CSS/JS:</strong> Remove whitespace and comments</li>
                <li>• <strong>Use CDN:</strong> Serve static assets from global edge servers</li>
                <li>• <strong>Enable Gzip:</strong> Compress text files for faster transfer</li>
                <li>• <strong>Reduce HTTP Requests:</strong> Combine files when possible</li>
                <li>• <strong>Cache Resources:</strong> Set appropriate cache headers</li>
              </ul>
            </div>
            <div className="bg-blue-50 rounded-lg p-6">
              <h4 className="font-semibold text-blue-900 mb-4">📊 Performance Tools:</h4>
              <ul className="text-blue-800 text-sm space-y-2">
                <li>• <strong>Google PageSpeed Insights:</strong> Free performance analysis</li>
                <li>• <strong>GTmetrix:</strong> Detailed performance reports</li>
                <li>• <strong>Chrome DevTools:</strong> Built-in performance profiling</li>
                <li>• <strong>WebPageTest:</strong> Real-world performance testing</li>
                <li>• <strong>Lighthouse:</strong> Automated auditing tool</li>
              </ul>
            </div>
          </div>

          <div className="bg-yellow-50 rounded-lg p-6 border border-yellow-200">
            <h4 className="font-semibold text-yellow-900 mb-3">⚡ Quick Performance Checklist:</h4>
            <div className="grid md:grid-cols-2 gap-4 text-yellow-800 text-sm">
              <ul className="space-y-1">
                <li>□ Images optimized and compressed</li>
                <li>□ CSS and JavaScript minified</li>
                <li>□ Unused code removed</li>
                <li>□ Fonts loaded efficiently</li>
              </ul>
              <ul className="space-y-1">
                <li>□ Enable browser caching</li>
                <li>□ Use modern image formats</li>
                <li>□ Minimize render-blocking resources</li>
                <li>□ Test on slow connections</li>
              </ul>
            </div>
          </div>
        </div>

        {/* SEO Optimization */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">5. SEO (Search Engine Optimization)</h2>
          
          <p className="text-gray-700 mb-6">
            SEO helps people find your website through search engines. Good SEO practices 
            improve your site's visibility and attract more visitors to your portfolio and projects.
          </p>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">SEO-Optimized HTML Template:</h3>
            <SyntaxHighlighter 
              language="html" 
              style={vscDarkPlus}
              className="rounded-lg"
              customStyle={{ fontSize: '10px' }}
            >
              {seoOptimization}
            </SyntaxHighlighter>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-purple-50 rounded-lg p-6">
              <h4 className="font-semibold text-purple-900 mb-3">🎯 On-Page SEO:</h4>
              <ul className="text-purple-800 text-sm space-y-1">
                <li>• Descriptive page titles</li>
                <li>• Meta descriptions</li>
                <li>• Header tag hierarchy (H1, H2, H3)</li>
                <li>• Alt text for images</li>
                <li>• Internal linking</li>
                <li>• URL structure</li>
              </ul>
            </div>
            <div className="bg-green-50 rounded-lg p-6">
              <h4 className="font-semibold text-green-900 mb-3">🔗 Technical SEO:</h4>
              <ul className="text-green-800 text-sm space-y-1">
                <li>• Mobile-friendly design</li>
                <li>• Fast loading speed</li>
                <li>• SSL certificate (HTTPS)</li>
                <li>• XML sitemap</li>
                <li>• Robots.txt file</li>
                <li>• Structured data markup</li>
              </ul>
            </div>
            <div className="bg-blue-50 rounded-lg p-6">
              <h4 className="font-semibold text-blue-900 mb-3">📱 Social Media:</h4>
              <ul className="text-blue-800 text-sm space-y-1">
                <li>• Open Graph tags</li>
                <li>• Twitter Card metadata</li>
                <li>• Social sharing buttons</li>
                <li>• LinkedIn profile optimization</li>
                <li>• GitHub repository descriptions</li>
                <li>• Professional social presence</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Live Demo */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">6. See Deployment in Action</h2>
          
          <p className="text-gray-700 mb-6">
            Watch the deployment process in action and see how easy it is to get your 
            projects live on the internet.
          </p>

          <button
            onClick={() => setShowDeployDemo(!showDeployDemo)}
            className="flex items-center space-x-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-sm font-medium transition-colors mb-6"
          >
            {showDeployDemo ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            <span>{showDeployDemo ? 'Hide Demo' : 'Show Deployment Demo'}</span>
          </button>

          {showDeployDemo && (
            <div className="bg-white border-2 border-blue-300 rounded-lg p-6 shadow-lg">
              <div className="text-sm text-blue-700 mb-4 font-semibold bg-blue-50 px-3 py-2 rounded">
                🚀 Deployment Process Visualization
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="space-y-6">
                  {/* Step 1 */}
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">1</div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-2">Prepare Your Project</h4>
                      <div className="bg-white rounded p-4 border">
                        <code className="text-sm text-gray-800">npm run build</code>
                        <p className="text-gray-600 text-sm mt-2">Creates optimized production files</p>
                      </div>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="flex items-start space-x-4">
                    <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">2</div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-2">Choose Platform & Upload</h4>
                      <div className="grid grid-cols-3 gap-3">
                        <div className="bg-teal-100 rounded p-3 text-center">
                          <div className="text-teal-700 font-semibold text-sm">Netlify</div>
                          <div className="text-teal-600 text-xs">Drag & Drop</div>
                        </div>
                        <div className="bg-gray-100 rounded p-3 text-center">
                          <div className="text-gray-700 font-semibold text-sm">Vercel</div>
                          <div className="text-gray-600 text-xs">Git Integration</div>
                        </div>
                        <div className="bg-purple-100 rounded p-3 text-center">
                          <div className="text-purple-700 font-semibold text-sm">GitHub</div>
                          <div className="text-purple-600 text-xs">Pages Setup</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="flex items-start space-x-4">
                    <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">3</div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-2">Get Your Live URL</h4>
                      <div className="bg-white rounded p-4 border border-green-300">
                        <div className="text-green-700 font-semibold">🎉 Deployment Successful!</div>
                        <div className="text-blue-600 text-sm font-mono mt-2">
                          https://amazing-portfolio-123.netlify.app
                        </div>
                        <p className="text-gray-600 text-sm mt-2">Your site is now live and accessible worldwide!</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 bg-blue-50 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-900 mb-2">🎯 What Happens Next:</h4>
                  <ul className="text-blue-800 text-sm space-y-1">
                    <li>• Your site is served from a global CDN (Content Delivery Network)</li>
                    <li>• SSL certificate is automatically generated for HTTPS</li>
                    <li>• You get deployment analytics and monitoring</li>
                    <li>• Any updates to your GitHub repo can auto-deploy</li>
                    <li>• Custom domains can be added for professional branding</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Practice Exercise */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <Rocket className="h-6 w-6 mr-2" />
            Practice Exercise: Deploy Your Portfolio
          </h2>

          <p className="text-gray-700 mb-6">
            Time to make your portfolio live! Deploy your project and optimize it for the real world.
          </p>

          <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
            <h4 className="font-semibold text-blue-900 mb-3">Your Deployment Challenge:</h4>
            <ol className="list-decimal list-inside space-y-2 text-blue-800">
              <li>Optimize your portfolio for production (compress images, minify code)</li>
              <li>Deploy to at least two different platforms (Netlify, Vercel, or GitHub Pages)</li>
              <li>Add proper SEO meta tags to all your pages</li>
              <li>Test your site's performance with Google PageSpeed Insights</li>
              <li>Set up a custom domain (optional but recommended)</li>
              <li>Share your live URLs on LinkedIn and GitHub</li>
              <li>Add the live links to your resume</li>
              <li>Test your site on different devices and browsers</li>
            </ol>
          </div>

          <div className="mt-6 bg-green-50 rounded-lg p-4">
            <h4 className="font-semibold text-green-900 mb-2">🎯 Success Metrics:</h4>
            <ul className="text-green-800 text-sm space-y-1">
              <li>• Site loads in under 3 seconds on mobile</li>
              <li>• Google PageSpeed score above 85</li>
              <li>• All images have alt text</li>
              <li>• Site works on mobile and desktop</li>
              <li>• Social media previews look professional</li>
              <li>• All links work correctly</li>
            </ul>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Link
            href="/lessons/week-4"
            className="flex items-center space-x-2 text-gray-600 hover:text-gray-800"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Week 4 Overview</span>
          </Link>
          
          <Link
            href="/lessons/week-4/day-2"
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center space-x-2 transition-colors"
          >
            <span>Next: Industry Best Practices</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
