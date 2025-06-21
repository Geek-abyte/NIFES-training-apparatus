'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Menu, X, BookOpen, Code, Users, Trophy } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navigation = [
    { name: 'Home', href: '/', icon: BookOpen },
    { name: 'Curriculum', href: '/curriculum', icon: Code },
    { name: 'Lessons', href: '/lessons', icon: Users },
    { name: 'Showcase', href: '/showcase', icon: Trophy },
  ]

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="bg-primary-600 text-white p-2 rounded-lg">
                <Code className="h-6 w-6" />
              </div>
              <span className="text-xl font-bold text-gray-900">NIFES WebDev</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-1 text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  <Icon className="h-4 w-4" />
                  <span>{item.name}</span>
                </Link>
              )
            })}
            <Link
              href="/lessons"
              className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200"
            >
              Start Learning
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-primary-600 focus:outline-none focus:text-primary-600"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            {navigation.map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-2 text-gray-700 hover:text-primary-600 hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  <Icon className="h-4 w-4" />
                  <span>{item.name}</span>
                </Link>
              )
            })}
            <Link
              href="/lessons"
              className="bg-primary-600 hover:bg-primary-700 text-white block px-3 py-2 rounded-md text-base font-medium mt-4"
              onClick={() => setIsOpen(false)}
            >
              Start Learning
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
