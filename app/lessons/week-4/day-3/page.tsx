'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Clock, Target, CheckCircle, Briefcase, Users, Trophy, Eye, EyeOff, Download } from 'lucide-react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'

export default function Week4Day3() {
  const [showCareerDemo, setShowCareerDemo] = useState(false)
  const [showResumeExample, setShowResumeExample] = useState(false)

  const portfolioStructure = `# Professional Portfolio Structure

## Essential Pages & Sections

### 1. Homepage / Hero Section
- Professional headshot or avatar
- Clear value proposition
- Call-to-action buttons (View Work, Contact)
- Brief introduction highlighting your expertise

### 2. About Page
- Your story and journey into web development
- Technical skills and technologies you use
- Your approach to problem-solving
- Personality and what drives you
- Professional photo (optional but recommended)

### 3. Projects Section
For each project include:
- Live demo link
- GitHub repository link
- Technologies used
- Problem you solved
- Key features and challenges
- Screenshots or video demos
- Your role (if team project)

### 4. Skills Section
- Technical skills (HTML, CSS, JavaScript, React, etc.)
- Tools and software (VS Code, Git, Figma, etc.)
- Soft skills (communication, problem-solving, etc.)
- Certifications or relevant education

### 5. Contact Section
- Professional email address
- LinkedIn profile
- GitHub profile
- Contact form (optional)
- Location (city/region, not full address)

### 6. Resume/CV
- Downloadable PDF version
- Online HTML version
- Keep it updated with your latest projects

## Portfolio Best Practices

### Visual Design
- Clean, professional design
- Consistent color scheme and typography
- Mobile-responsive layout
- Fast loading times
- Accessible navigation

### Content Quality
- Error-free grammar and spelling
- Concise but informative descriptions
- Professional tone throughout
- Updated regularly with new projects
- Social proof (testimonials, if available)

### Technical Implementation
- SEO optimized
- Performance optimized
- Accessible to all users
- Works across all browsers
- Professional domain name (optional but recommended)`

  const resumeTemplate = `# Software Developer Resume Template

## [Your Name]
### Frontend Developer
📧 your.email@example.com | 🌐 yourportfolio.com | 💼 linkedin.com/in/yourname | 🔗 github.com/yourusername
📍 Your City, State

---

## Professional Summary
Passionate Frontend Developer with expertise in modern web technologies including React, JavaScript, and responsive design. Experienced in building user-friendly, accessible web applications with clean, maintainable code. Strong problem-solving skills and collaborative team player with a continuous learning mindset.

---

## Technical Skills

**Languages:** JavaScript (ES6+), HTML5, CSS3, TypeScript
**Frameworks/Libraries:** React, Next.js, Vue.js, jQuery
**Styling:** CSS3, SASS, Tailwind CSS, Bootstrap, Styled Components
**Tools & Technologies:** Git, GitHub, VS Code, Figma, Webpack, npm/yarn
**Databases:** MongoDB, Firebase, PostgreSQL (basic)
**Other:** RESTful APIs, Responsive Design, Cross-browser Compatibility, Web Accessibility (WCAG)

---

## Projects

### E-Commerce Website | [Live Demo](link) | [GitHub](link)
**Technologies:** React, Node.js, MongoDB, Stripe API
- Built a full-stack e-commerce platform with shopping cart and payment processing
- Implemented user authentication, product search, and order management
- Achieved 95+ Lighthouse performance score and WCAG AA accessibility compliance
- **Key Achievement:** Reduced page load time by 40% through code optimization

### Task Management App | [Live Demo](link) | [GitHub](link)
**Technologies:** React, Firebase, Material-UI
- Developed a collaborative task management application with real-time updates
- Features include drag-and-drop functionality, team collaboration, and data persistence
- Implemented responsive design supporting mobile, tablet, and desktop devices
- **Key Achievement:** Designed intuitive UX resulting in 90% user satisfaction in testing

### Portfolio Website | [Live Demo](link) | [GitHub](link)
**Technologies:** Next.js, TypeScript, Tailwind CSS
- Created a responsive, SEO-optimized portfolio showcasing development projects
- Implemented dark/light mode toggle and smooth animations
- Achieved perfect 100/100 Lighthouse scores across all categories
- **Key Achievement:** Ranked #1 in Google search results for "[Your Name] developer"

---

## Experience

### Freelance Web Developer | Self-Employed
**March 2024 - Present**
- Deliver custom web solutions for small businesses and entrepreneurs
- Collaborate with clients to understand requirements and provide technical guidance
- Maintain ongoing client relationships and provide post-launch support
- **Key Achievement:** Successfully completed 5+ projects with 100% client satisfaction

### [Previous Role] | [Company Name]
**[Dates if applicable]**
- [Relevant experience that demonstrates transferable skills]
- [Focus on problem-solving, communication, project management]
- [Quantify achievements where possible]

---

## Education & Certifications

### [Your Education Background]
**[Degree] in [Field] | [Institution] | [Year]**

### Professional Development
- **NIFES Frontend Development Program** | 2024
- **freeCodeCamp Responsive Web Design Certification** | 2024
- **JavaScript Algorithms and Data Structures** | freeCodeCamp | 2024
- **[Any other relevant courses or certifications]**

---

## Additional Information

**Languages:** English (Native), [Other languages if applicable]
**Interests:** Open source contribution, tech meetups, continuous learning
**Availability:** Available for full-time opportunities starting [Date]

---

## Key Achievements
✅ Built 10+ responsive web applications from concept to deployment
✅ Contributed to open source projects with 50+ GitHub contributions
✅ Achieved 100% accessibility compliance on all recent projects
✅ Completed intensive 4-week frontend development bootcamp
✅ Self-taught developer with proven ability to learn new technologies quickly`

  const interviewQuestions = `# Common Frontend Developer Interview Questions

## Technical Questions

### HTML/CSS
Q: "What's the difference between block and inline elements?"
A: Block elements take up the full width available and stack vertically (div, p, h1), while inline elements only take up as much width as needed and sit side by side (span, a, strong).

Q: "How do you center a div?"
A: Multiple methods: flexbox (display: flex; justify-content: center; align-items: center;), CSS Grid (place-items: center), or margin: 0 auto for horizontal centering with a defined width.

Q: "What are CSS preprocessors and why use them?"
A: Tools like SASS/SCSS that extend CSS with variables, nesting, mixins, and functions. They make CSS more maintainable and reduce repetition.

### JavaScript
Q: "Explain the difference between var, let, and const."
A: var is function-scoped and can be redeclared, let is block-scoped and can be reassigned, const is block-scoped and cannot be reassigned (though objects/arrays can be mutated).

Q: "What is event delegation?"
A: Using event bubbling to handle events on parent elements instead of individual child elements. More efficient for dynamically added elements.

Q: "How do you handle asynchronous operations in JavaScript?"
A: Using callbacks, Promises, or async/await. Modern approach is async/await for cleaner, more readable code.

### React (if applicable)
Q: "What's the difference between state and props?"
A: Props are read-only data passed from parent to child components. State is mutable data that belongs to a component and triggers re-renders when changed.

Q: "When would you use useEffect?"
A: For side effects like API calls, DOM manipulation, subscriptions, or cleanup. It runs after render and can have dependencies for optimization.

## Behavioral Questions

Q: "Tell me about a challenging project you worked on."
A: Use STAR method (Situation, Task, Action, Result). Focus on problem-solving process and what you learned.

Q: "How do you stay updated with new technologies?"
A: Mention specific resources: tech blogs, documentation, courses, community involvement, side projects.

Q: "Describe a time you had to debug a difficult issue."
A: Walk through your debugging process: reproducing the issue, using developer tools, breaking down the problem, testing solutions.

## Coding Challenges

Common tasks you might be asked to implement:
- Build a todo list with add/delete functionality
- Create a responsive navigation menu
- Implement a simple carousel or image slider
- Fetch and display data from an API
- Form validation with error handling
- Create a calculator or simple game

## Questions to Ask Your Interviewer

- "What does a typical day look like for a developer on your team?"
- "What technologies and tools does the team currently use?"
- "How do you approach code reviews and knowledge sharing?"
- "What are the biggest challenges the development team is facing?"
- "What opportunities are there for professional development and growth?"
- "How do you measure success for someone in this role?"`

  const networkingTips = `# Networking & Job Search Strategy

## Building Your Professional Network

### Online Networking
1. **LinkedIn Optimization**
   - Professional headshot and compelling headline
   - Detailed experience section with key achievements
   - Regular posting about your learning journey
   - Engage with other developers' content
   - Join relevant groups and participate in discussions

2. **GitHub Presence**
   - Complete profile with bio and contact info
   - Pin your best repositories
   - Contribute to open source projects
   - Use meaningful commit messages
   - Keep your contribution graph active

3. **Twitter/X (Tech Twitter)**
   - Follow industry leaders and developers
   - Share your learning progress and projects
   - Participate in tech discussions
   - Use relevant hashtags (#100DaysOfCode, #webdev)

### Offline Networking
1. **Local Meetups and Events**
   - Find local developer meetups (Meetup.com)
   - Attend conferences and workshops
   - Join coding bootcamp alumni networks
   - Participate in hackathons

2. **Professional Conversations**
   - Prepare a concise elevator pitch
   - Focus on learning about others, not just promoting yourself
   - Follow up with connections within 24-48 hours
   - Offer help and value to your network

## Job Search Strategy

### Where to Look for Jobs
- **Job Boards:** Indeed, Glassdoor, Stack Overflow Jobs
- **Tech-Specific:** AngelList, Dice, CyberSeek
- **Company Websites:** Apply directly to companies you admire
- **Recruitment Agencies:** Specialized tech recruiters
- **Networking:** Referrals from your professional network

### Application Best Practices
1. **Customize Applications**
   - Tailor resume for each position
   - Research the company and role thoroughly
   - Address specific requirements mentioned in job posting
   - Include relevant keywords from job description

2. **Portfolio Preparation**
   - Ensure all projects work properly
   - Update project descriptions and technologies
   - Add new projects that align with target roles
   - Test portfolio on different devices and browsers

3. **Cover Letter Tips**
   - Keep it concise (3-4 paragraphs)
   - Explain why you're interested in the specific company
   - Highlight relevant projects and skills
   - Show enthusiasm for the role and industry

### Following Up
- Send thank you emails after interviews
- Follow up on applications after 1-2 weeks
- Connect with interviewers on LinkedIn
- Ask for feedback when possible
- Keep in touch with your network regularly`

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
                <span>100 minutes</span>
              </div>
              <div className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                Week 4 - Day 3
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Lesson Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
            <Briefcase className="h-8 w-8 text-purple-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Career Preparation & Job Readiness
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your skills into career opportunities! Learn how to build a professional portfolio, 
            write compelling resumes, ace technical interviews, and land your first developer job.
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
              <span className="text-purple-800">Create a professional portfolio that showcases your skills effectively</span>
            </li>
            <li className="flex items-start space-x-2">
              <CheckCircle className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
              <span className="text-purple-800">Write compelling resumes and cover letters for developer positions</span>
            </li>
            <li className="flex items-start space-x-2">
              <CheckCircle className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
              <span className="text-purple-800">Prepare for technical interviews and coding challenges</span>
            </li>
            <li className="flex items-start space-x-2">
              <CheckCircle className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
              <span className="text-purple-800">Build a professional network and job search strategy</span>
            </li>
          </ul>
        </div>

        {/* Portfolio Excellence */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">1. Building a Standout Portfolio</h2>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            Your portfolio is your most powerful tool for landing developer jobs. It's proof of your abilities 
            and gives employers a clear picture of what you can create. A great portfolio can overcome lack 
            of formal experience and open doors to opportunities.
          </p>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Portfolio Structure & Best Practices:</h3>
            <SyntaxHighlighter 
              language="markdown" 
              style={vscDarkPlus}
              className="rounded-lg"
              customStyle={{ fontSize: '11px' }}
            >
              {portfolioStructure}
            </SyntaxHighlighter>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-green-50 rounded-lg p-6">
              <h4 className="font-semibold text-green-900 mb-4">✅ Portfolio Must-Haves:</h4>
              <ul className="text-green-800 text-sm space-y-2">
                <li>• <strong>3-5 Quality Projects:</strong> Better to have fewer, high-quality projects</li>
                <li>• <strong>Live Demos:</strong> Every project should have a working live link</li>
                <li>• <strong>Source Code:</strong> GitHub links for all projects</li>
                <li>• <strong>Responsive Design:</strong> Works perfectly on all devices</li>
                <li>• <strong>Professional Bio:</strong> Clear, concise, and personality-filled</li>
                <li>• <strong>Contact Information:</strong> Make it easy to reach you</li>
                <li>• <strong>Fast Loading:</strong> Optimize for performance</li>
              </ul>
            </div>
            <div className="bg-red-50 rounded-lg p-6">
              <h4 className="font-semibold text-red-900 mb-4">❌ Portfolio Mistakes to Avoid:</h4>
              <ul className="text-red-800 text-sm space-y-2">
                <li>• <strong>Too Many Projects:</strong> Quality over quantity always</li>
                <li>• <strong>Broken Links:</strong> Test everything regularly</li>
                <li>• <strong>Poor Mobile Experience:</strong> Most people browse on mobile</li>
                <li>• <strong>Outdated Content:</strong> Keep projects and bio current</li>
                <li>• <strong>No Project Descriptions:</strong> Explain what you built and why</li>
                <li>• <strong>Generic Design:</strong> Show your personality and style</li>
                <li>• <strong>Missing Contact Info:</strong> Don't make employers hunt for your email</li>
              </ul>
            </div>
          </div>

          <div className="bg-blue-50 rounded-lg p-6">
            <h4 className="font-semibold text-blue-900 mb-4">🎯 Project Selection Strategy:</h4>
            <div className="grid md:grid-cols-3 gap-4 text-blue-800 text-sm">
              <div>
                <h5 className="font-semibold mb-2">Different Types:</h5>
                <ul className="space-y-1">
                  <li>• E-commerce/business site</li>
                  <li>• Interactive web app</li>
                  <li>• API integration project</li>
                  <li>• Responsive design showcase</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold mb-2">Technology Variety:</h5>
                <ul className="space-y-1">
                  <li>• Vanilla JavaScript project</li>
                  <li>• React/framework project</li>
                  <li>• CSS art or animation</li>
                  <li>• Full-stack application</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold mb-2">Complexity Levels:</h5>
                <ul className="space-y-1">
                  <li>• Simple, clean execution</li>
                  <li>• Medium complexity</li>
                  <li>• Advanced showcase piece</li>
                  <li>• Personal passion project</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Resume & Cover Letter */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <Download className="h-6 w-6 mr-2" />
            2. Professional Resume & Cover Letter
          </h2>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            Your resume is often the first impression you make on potential employers. 
            It needs to quickly communicate your skills, experience, and potential value to their team.
          </p>

          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Resume Template for New Developers:</h3>
              <button
                onClick={() => setShowResumeExample(!showResumeExample)}
                className="flex items-center space-x-2 px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-lg text-sm font-medium transition-colors"
              >
                {showResumeExample ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                <span>{showResumeExample ? 'Hide Template' : 'Show Resume Template'}</span>
              </button>
            </div>
            
            {showResumeExample && (
              <SyntaxHighlighter 
                language="markdown" 
                style={vscDarkPlus}
                className="rounded-lg"
                customStyle={{ fontSize: '10px' }}
              >
                {resumeTemplate}
              </SyntaxHighlighter>
            )}
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-green-50 rounded-lg p-6">
              <h4 className="font-semibold text-green-900 mb-4">📝 Resume Best Practices:</h4>
              <ul className="text-green-800 text-sm space-y-2">
                <li>• <strong>Keep it 1-2 pages:</strong> Concise and focused content</li>
                <li>• <strong>Use action verbs:</strong> Built, developed, implemented, designed</li>
                <li>• <strong>Quantify achievements:</strong> Use numbers when possible</li>
                <li>• <strong>Tailor for each job:</strong> Match keywords from job descriptions</li>
                <li>• <strong>Skills section first:</strong> Highlight technical abilities prominently</li>
                <li>• <strong>Projects over experience:</strong> For new developers, projects matter most</li>
              </ul>
            </div>
            <div className="bg-blue-50 rounded-lg p-6">
              <h4 className="font-semibold text-blue-900 mb-4">💌 Cover Letter Tips:</h4>
              <ul className="text-blue-800 text-sm space-y-2">
                <li>• <strong>Research the company:</strong> Show genuine interest and knowledge</li>
                <li>• <strong>Address specific requirements:</strong> Connect your skills to their needs</li>
                <li>• <strong>Tell your story:</strong> Why did you become a developer?</li>
                <li>• <strong>Show enthusiasm:</strong> Passion goes a long way</li>
                <li>• <strong>Keep it brief:</strong> 3-4 paragraphs maximum</li>
                <li>• <strong>Professional tone:</strong> Friendly but respectful</li>
              </ul>
            </div>
          </div>

          <div className="bg-yellow-50 rounded-lg p-6 border border-yellow-200">
            <h4 className="font-semibold text-yellow-900 mb-3">🎯 Application Strategy for New Developers:</h4>
            <div className="grid md:grid-cols-2 gap-4 text-yellow-800 text-sm">
              <ul className="space-y-1">
                <li>• Focus on junior and entry-level positions</li>
                <li>• Apply to smaller companies and startups</li>
                <li>• Consider internships and apprenticeships</li>
                <li>• Look for companies that hire bootcamp graduates</li>
              </ul>
              <ul className="space-y-1">
                <li>• Apply to 10-15 quality applications per week</li>
                <li>• Follow up professionally after 1-2 weeks</li>
                <li>• Track your applications in a spreadsheet</li>
                <li>• Get referrals from your network when possible</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Interview Preparation */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <Users className="h-6 w-6 mr-2" />
            3. Technical Interview Preparation
          </h2>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            Technical interviews can seem intimidating, but with proper preparation, you can confidently 
            demonstrate your skills and problem-solving abilities. Remember, they want you to succeed!
          </p>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Common Interview Questions & Answers:</h3>
            <SyntaxHighlighter 
              language="markdown" 
              style={vscDarkPlus}
              className="rounded-lg"
              customStyle={{ fontSize: '11px' }}
            >
              {interviewQuestions}
            </SyntaxHighlighter>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div className="bg-purple-50 rounded-lg p-6">
              <h4 className="font-semibold text-purple-900 mb-3">📚 Technical Preparation:</h4>
              <ul className="text-purple-800 text-sm space-y-1">
                <li>• Review fundamental concepts</li>
                <li>• Practice coding challenges</li>
                <li>• Prepare to walk through your projects</li>
                <li>• Know your resume inside and out</li>
                <li>• Practice explaining technical concepts simply</li>
                <li>• Prepare questions about the role and company</li>
              </ul>
            </div>
            <div className="bg-green-50 rounded-lg p-6">
              <h4 className="font-semibold text-green-900 mb-3">🗣️ Communication Tips:</h4>
              <ul className="text-green-800 text-sm space-y-1">
                <li>• Think out loud during coding challenges</li>
                <li>• Ask clarifying questions</li>
                <li>• Admit when you don't know something</li>
                <li>• Show your problem-solving process</li>
                <li>• Be enthusiastic about learning</li>
                <li>• Stay calm and confident</li>
              </ul>
            </div>
            <div className="bg-blue-50 rounded-lg p-6">
              <h4 className="font-semibold text-blue-900 mb-3">💡 Day-of-Interview:</h4>
              <ul className="text-blue-800 text-sm space-y-1">
                <li>• Test your tech setup beforehand</li>
                <li>• Have your portfolio and resume ready</li>
                <li>• Prepare a clean, quiet environment</li>
                <li>• Dress professionally (even for video calls)</li>
                <li>• Bring questions to ask them</li>
                <li>• Follow up with a thank you email</li>
              </ul>
            </div>
          </div>

          <div className="bg-red-50 rounded-lg p-6 border border-red-200">
            <h4 className="font-semibold text-red-900 mb-3">🚨 Interview Red Flags to Avoid:</h4>
            <div className="grid md:grid-cols-2 gap-4 text-red-800 text-sm">
              <ul className="space-y-1">
                <li>• Badmouthing previous employers or experiences</li>
                <li>• Saying you don't have any questions</li>
                <li>• Not being able to explain your own projects</li>
                <li>• Giving up immediately on coding challenges</li>
              </ul>
              <ul className="space-y-1">
                <li>• Being unprepared or showing up late</li>
                <li>• Not researching the company at all</li>
                <li>• Only focusing on salary and benefits</li>
                <li>• Making excuses instead of showing growth mindset</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Networking & Job Search */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <Users className="h-6 w-6 mr-2" />
            4. Networking & Job Search Strategy
          </h2>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            Many jobs are filled through networking rather than public job postings. Building professional 
            relationships and having a strategic job search approach can significantly improve your chances 
            of landing interviews and job offers.
          </p>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Comprehensive Networking & Job Search Guide:</h3>
            <SyntaxHighlighter 
              language="markdown" 
              style={vscDarkPlus}
              className="rounded-lg"
              customStyle={{ fontSize: '11px' }}
            >
              {networkingTips}
            </SyntaxHighlighter>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-green-50 rounded-lg p-6">
              <h4 className="font-semibold text-green-900 mb-4">🎯 Entry-Level Job Types:</h4>
              <ul className="text-green-800 text-sm space-y-2">
                <li>• <strong>Junior Frontend Developer:</strong> Focus on HTML, CSS, JavaScript</li>
                <li>• <strong>Frontend Engineer:</strong> Usually requires framework experience</li>
                <li>• <strong>Web Developer:</strong> Mix of frontend and basic backend</li>
                <li>• <strong>UI Developer:</strong> Focus on user interface implementation</li>
                <li>• <strong>Junior Software Engineer:</strong> Broader scope, good for growth</li>
                <li>• <strong>Apprentice/Intern:</strong> Great learning opportunities</li>
              </ul>
            </div>
            <div className="bg-blue-50 rounded-lg p-6">
              <h4 className="font-semibold text-blue-900 mb-4">🏢 Company Types to Consider:</h4>
              <ul className="text-blue-800 text-sm space-y-2">
                <li>• <strong>Startups:</strong> Fast-paced, wear many hats, equity potential</li>
                <li>• <strong>Small/Medium Businesses:</strong> Close-knit teams, varied work</li>
                <li>• <strong>Agencies:</strong> Diverse client work, fast projects</li>
                <li>• <strong>Non-profits:</strong> Mission-driven work, often flexible</li>
                <li>• <strong>Large Corporations:</strong> Structure, benefits, mentorship</li>
                <li>• <strong>Remote Companies:</strong> Flexibility, global opportunities</li>
              </ul>
            </div>
          </div>

          <div className="bg-purple-50 rounded-lg p-6">
            <h4 className="font-semibold text-purple-900 mb-4">📈 Job Search Timeline & Expectations:</h4>
            <div className="grid md:grid-cols-3 gap-4 text-purple-800 text-sm">
              <div>
                <h5 className="font-semibold mb-2">Month 1-2:</h5>
                <ul className="space-y-1">
                  <li>• Finalize portfolio and resume</li>
                  <li>• Start networking activities</li>
                  <li>• Begin applying to 10-15 jobs/week</li>
                  <li>• Practice interview skills</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold mb-2">Month 2-4:</h5>
                <ul className="space-y-1">
                  <li>• Increase application volume</li>
                  <li>• Start getting interviews</li>
                  <li>• Refine pitch and interview skills</li>
                  <li>• Continue networking</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold mb-2">Month 4-6:</h5>
                <ul className="space-y-1">
                  <li>• Should see job offers</li>
                  <li>• Negotiate and evaluate offers</li>
                  <li>• Accept position and start career!</li>
                  <li>• Maintain professional network</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Career Success Demo */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">5. Career Success Roadmap</h2>
          
          <p className="text-gray-700 mb-6">
            See the complete journey from where you are now to landing your first developer job and beyond.
          </p>

          <button
            onClick={() => setShowCareerDemo(!showCareerDemo)}
            className="flex items-center space-x-2 px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-lg text-sm font-medium transition-colors mb-6"
          >
            {showCareerDemo ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            <span>{showCareerDemo ? 'Hide Roadmap' : 'Show Career Roadmap'}</span>
          </button>

          {showCareerDemo && (
            <div className="bg-white border-2 border-purple-300 rounded-lg p-6 shadow-lg">
              <div className="text-sm text-purple-700 mb-4 font-semibold bg-purple-50 px-3 py-2 rounded">
                🚀 Your Developer Career Journey
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="space-y-8">
                  {/* Phase 1 */}
                  <div className="relative">
                    <div className="flex items-start space-x-4">
                      <div className="bg-green-500 text-white rounded-full w-10 h-10 flex items-center justify-center text-sm font-bold flex-shrink-0">✓</div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-2">Phase 1: Foundation Complete (You are here!)</h4>
                        <div className="bg-green-50 rounded p-4 border border-green-200">
                          <p className="text-green-800 text-sm mb-2"><strong>🎉 Congratulations! You've built a solid foundation:</strong></p>
                          <ul className="text-green-700 text-sm space-y-1">
                            <li>✅ HTML, CSS, and JavaScript fundamentals</li>
                            <li>✅ Responsive design and mobile-first approach</li>
                            <li>✅ Git and GitHub for version control</li>
                            <li>✅ Introduction to JavaScript frameworks</li>
                            <li>✅ Website deployment and optimization</li>
                            <li>✅ Professional development practices</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Phase 2 */}
                  <div className="relative">
                    <div className="flex items-start space-x-4">
                      <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center text-sm font-bold flex-shrink-0">2</div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-2">Phase 2: Portfolio & Job Prep (Next 2-4 weeks)</h4>
                        <div className="bg-blue-50 rounded p-4 border border-blue-200">
                          <ul className="text-blue-800 text-sm space-y-1">
                            <li>🎨 Build 3-5 impressive portfolio projects</li>
                            <li>📝 Create professional resume and LinkedIn profile</li>
                            <li>🌐 Deploy all projects with custom domains</li>
                            <li>📚 Practice technical interview questions</li>
                            <li>🤝 Start networking and building connections</li>
                            <li>🔍 Research companies and job opportunities</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Phase 3 */}
                  <div className="relative">
                    <div className="flex items-start space-x-4">
                      <div className="bg-purple-500 text-white rounded-full w-10 h-10 flex items-center justify-center text-sm font-bold flex-shrink-0">3</div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-2">Phase 3: Active Job Search (Next 2-6 months)</h4>
                        <div className="bg-purple-50 rounded p-4 border border-purple-200">
                          <ul className="text-purple-800 text-sm space-y-1">
                            <li>📨 Apply to 10-15 quality positions per week</li>
                            <li>💼 Attend interviews and coding challenges</li>
                            <li>🔄 Iterate on portfolio based on feedback</li>
                            <li>📈 Continue learning and adding new skills</li>
                            <li>🤝 Leverage network for referrals and opportunities</li>
                            <li>💡 Consider freelance projects for experience</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Phase 4 */}
                  <div className="relative">
                    <div className="flex items-start space-x-4">
                      <div className="bg-yellow-500 text-white rounded-full w-10 h-10 flex items-center justify-center text-sm font-bold flex-shrink-0">4</div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-2">Phase 4: First Developer Job & Growth</h4>
                        <div className="bg-yellow-50 rounded p-4 border border-yellow-200">
                          <ul className="text-yellow-800 text-sm space-y-1">
                            <li>🎉 Land your first developer position</li>
                            <li>📚 Learn on the job and from senior developers</li>
                            <li>🚀 Contribute to real-world projects and codebases</li>
                            <li>🎯 Set career goals and development plans</li>
                            <li>🤝 Build internal network and mentorship relationships</li>
                            <li>📈 Plan for career advancement and specialization</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6">
                  <h4 className="font-semibold text-gray-900 mb-3">🏆 Success Metrics & Timeline:</h4>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <h5 className="font-semibold text-green-700 mb-2">Short-term (1-3 months):</h5>
                      <ul className="text-green-600 space-y-1">
                        <li>• Portfolio completed and deployed</li>
                        <li>• First technical interviews scheduled</li>
                        <li>• Professional network established</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-blue-700 mb-2">Medium-term (3-6 months):</h5>
                      <ul className="text-blue-600 space-y-1">
                        <li>• Multiple job offers to evaluate</li>
                        <li>• Strong interview performance</li>
                        <li>• Freelance/contract opportunities</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-purple-700 mb-2">Long-term (6-12 months):</h5>
                      <ul className="text-purple-600 space-y-1">
                        <li>• Established in first developer role</li>
                        <li>• Contributing to significant projects</li>
                        <li>• Planning next career moves</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Final Practice Exercise */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <Trophy className="h-6 w-6 mr-2" />
            Final Challenge: Launch Your Career
          </h2>

          <p className="text-gray-700 mb-6">
            This is it! Time to put everything together and launch your developer career. 
            This comprehensive challenge will prepare you for job searching and landing your first role.
          </p>

          <div className="bg-purple-50 rounded-lg p-6 border border-purple-200">
            <h4 className="font-semibold text-purple-900 mb-3">Your Career Launch Checklist:</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h5 className="font-semibold text-purple-800 mb-2">Portfolio & Presence:</h5>
                <ol className="list-decimal list-inside space-y-1 text-purple-700 text-sm">
                  <li>Finalize and polish your portfolio website</li>
                  <li>Deploy all projects with custom domains</li>
                  <li>Optimize for performance and accessibility</li>
                  <li>Create professional LinkedIn profile</li>
                  <li>Update GitHub profile and pin best repositories</li>
                  <li>Write compelling project descriptions</li>
                </ol>
              </div>
              <div>
                <h5 className="font-semibold text-purple-800 mb-2">Job Search Preparation:</h5>
                <ol className="list-decimal list-inside space-y-1 text-purple-700 text-sm">
                  <li>Create targeted resume with your projects</li>
                  <li>Practice answering common interview questions</li>
                  <li>Research 20 companies you'd like to work for</li>
                  <li>Join developer communities and start networking</li>
                  <li>Set up job alerts on relevant platforms</li>
                  <li>Prepare your elevator pitch and portfolio walkthrough</li>
                </ol>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-green-50 rounded-lg p-4">
            <h4 className="font-semibold text-green-900 mb-2">🎯 30-Day Action Plan:</h4>
            <div className="grid md:grid-cols-3 gap-4 text-green-800 text-sm">
              <div>
                <h5 className="font-semibold mb-2">Week 1-2:</h5>
                <ul className="space-y-1">
                  <li>• Finalize portfolio projects</li>
                  <li>• Create professional resume</li>
                  <li>• Set up LinkedIn profile</li>
                  <li>• Start networking activities</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold mb-2">Week 3-4:</h5>
                <ul className="space-y-1">
                  <li>• Begin job applications</li>
                  <li>• Practice interview skills</li>
                  <li>• Attend networking events</li>
                  <li>• Refine portfolio based on feedback</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold mb-2">Ongoing:</h5>
                <ul className="space-y-1">
                  <li>• Apply to 10-15 jobs per week</li>
                  <li>• Continue learning new technologies</li>
                  <li>• Build professional relationships</li>
                  <li>• Track and analyze your progress</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-blue-50 rounded-lg p-4">
            <h4 className="font-semibold text-blue-900 mb-2">🚀 Remember:</h4>
            <p className="text-blue-800 text-sm">
              You've built an incredible foundation in just 4 weeks. The skills you've learned - HTML, CSS, JavaScript, 
              responsive design, Git, and professional practices - are exactly what employers are looking for. 
              Stay confident, be persistent, and remember that every "no" gets you closer to your "yes." 
              You're ready for this next chapter in your career!
            </p>
          </div>
        </div>

        {/* Congratulations & Next Steps */}
        <div className="bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg p-8 mb-8 text-white">
          <div className="text-center">
            <Trophy className="h-12 w-12 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">🎉 Congratulations!</h2>
            <p className="text-xl mb-4">
              You've completed the NIFES Frontend Development Training Program!
            </p>
            <p className="text-lg opacity-90 mb-6">
              You now have the skills, knowledge, and tools to begin your career as a web developer. 
              The journey doesn't end here - it's just the beginning of an exciting career in tech.
            </p>
            <div className="bg-white bg-opacity-20 rounded-lg p-4 inline-block">
              <p className="text-sm">
                <strong>Next Steps:</strong> Apply your skills, build your network, and never stop learning. 
                The tech community is incredibly supportive - don't hesitate to ask for help and give back to others starting their journey.
              </p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Link
            href="/lessons/week-4/day-2"
            className="flex items-center space-x-2 text-gray-600 hover:text-gray-800"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Previous: Best Practices</span>
          </Link>
          
          <Link
            href="/lessons"
            className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-lg flex items-center space-x-2 transition-colors"
          >
            <span>Back to All Lessons</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
