'use client'

import React from 'react'
import Link from 'next/link'
import { Code, Github, Mail, Heart } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    course: [
      { name: 'Curriculum', href: '/curriculum' },
      { name: 'Lessons', href: '/lessons' },
      { name: 'Showcase', href: '/showcase' },
      { name: 'Resources', href: '/resources' }
    ],
    support: [
      { name: 'Help Center', href: '/help' },
      { name: 'Contact Us', href: '/contact' },
      { name: 'Community', href: '/community' },
      { name: 'FAQ', href: '/faq' }
    ],
    company: [
      { name: 'About NIFES', href: '/about' },
      { name: 'Our Team', href: '/team' },
      { name: 'Careers', href: '/careers' },
      { name: 'Blog', href: '/blog' }
    ]
  }

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="bg-primary-600 text-white p-2 rounded-lg">
                <Code className="h-6 w-6" />
              </div>
              <span className="text-xl font-bold">NIFES WebDev</span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-md">
              Empowering the next generation of web developers through practical, 
              project-based learning. Transform your career in just 4 weeks.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/nifes"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="mailto:contact@nifes.edu"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Course Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Course</h3>
            <ul className="space-y-2">
              {footerLinks.course.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} NIFES Training Apparatus. All rights reserved.
            </p>
            <div className="flex items-center space-x-1 text-gray-400 text-sm">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              <span>for aspiring developers</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
