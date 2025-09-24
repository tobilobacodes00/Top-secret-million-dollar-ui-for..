"use client"

import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react"


const PublicLayout = ({ children }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Pricing", href: "/pricing" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <div className="min-h-screen bg-black text-gray-300">
     {/* Header */}
<header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-7xl">
  <div
    className="rounded-2xl shadow-lg border border-white/10 relative overflow-hidden bg-gray-900/50 backdrop-blur-md"
  >
    <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
      {/* Logo */}
      <Link to="/" className="flex items-center">
        <div className="text-2xl font-bold text-purple-500">Elite Trader</div>
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex space-x-8">
        {navigation.map((item) => (
          <Link
            key={item.name}
            to={item.href}
            className={`text-sm font-medium transition-colors ${
              location.pathname === item.href
                ? "text-purple-400"
                : "text-gray-300 hover:text-purple-400"
            }`}
          >
            {item.name}
          </Link>
        ))}
      </div>

      {/* Auth Buttons */}
      <div className="hidden md:flex items-center space-x-4">
        <Link
          to="/auth/login"
          className="text-gray-300 hover:text-purple-400 font-medium transition-colors"
        >
          Sign In
        </Link>
        <Link
          to="/signin"
          className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 text-white font-medium py-2 px-10 rounded-full text-lg transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
        >
          Get Started
        </Link>
      </div>

      {/* Mobile menu button */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="md:hidden p-2 rounded-md text-gray-300 hover:bg-gray-800"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={
              mobileMenuOpen
                ? "M6 18L18 6M6 6l12 12"
                : "M4 6h16M4 12h16M4 18h16"
            }
          />
        </svg>
      </button>
    </div>

    {/* Mobile menu */}
    {mobileMenuOpen && (
      <div className="md:hidden py-4 border-t border-gray-800 rounded-b-2xl bg-gray-900/70 backdrop-blur-md">
        <div className="flex flex-col space-y-2">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                location.pathname === item.href
                  ? "text-purple-400 bg-gray-800"
                  : "text-gray-300 hover:text-purple-400 hover:bg-gray-800"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <div className="pt-4 border-t border-gray-800 mt-4">
            <Link
              to="/auth/login"
              className="block px-3 py-2 text-gray-300 hover:text-purple-400 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Sign In
            </Link>
            <Link
              to="/signin"
              className="block mt-2 bg-purple-600 hover:bg-purple-700 text-white px-3 py-2 rounded-md font-semibold text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    )}
  </div>
</header>



      {/* Main Content */}
      <main className="pt-16">{children}</main>

      {/* Footer */}
      <footer className="bg-gray-950 text-white py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Logo & Social Links */}
          <div className="md:col-span-2 flex flex-col items-center md:items-start">
            <div className="text-2xl font-bold text-purple-500 mb-2">
              Elite Trader
            </div>
            <p className="text-gray-400 mb-4 text-center md:text-left max-w-sm">
              The premier cryptocurrency trading platform for professionals and beginners alike.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 hover:bg-purple-600 p-2 rounded-full transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-purple-600 p-2 rounded-full transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-purple-600 p-2 rounded-full transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-purple-600 p-2 rounded-full transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Platform Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold mb-3 text-white">Platform</h3>
            <ul className="space-y-2 text-center md:text-left">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">
                  Contact
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">
                  Help Center
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-6 text-center">
          <p className="text-gray-400 text-xs">
            © 2025 Elite Trader Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
    </div>
  )
}

export default PublicLayout
