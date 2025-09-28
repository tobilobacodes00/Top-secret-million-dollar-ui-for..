"use client";

import { useState, useEffect, ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

// Props for layout
interface PublicLayoutProps {
  children: ReactNode;
}

// --- SCROLL TO TOP COMPONENT ---
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};
// -----------------------------

// Type for navigation items
interface NavItem {
  name: string;
  href: string;
}

const PublicLayout = ({ children }: PublicLayoutProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigation: NavItem[] = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Pricing", href: "/pricing" },
    { name: "Contact", href: "/contact" },
  ];

  // Handler to close the menu
  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <div className="min-h-screen bg-black text-gray-300">
      <ScrollToTop />

      {/* Header */}
      <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-7xl">
        <div className="rounded-2xl shadow-lg border border-white/10 relative overflow-hidden bg-gray-900/50 backdrop-blur-md">
          <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <div className="flex items-center space-x-2">
                <img src="/Logo.png" alt="Elite Trader Logo" className="w-8 h-8" />
                <span className="text-2xl font-bold text-purple-500">Elite Trader</span>
              </div>
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

            {/* Auth Buttons (Desktop) */}
            <div className="hidden md:flex items-center space-x-4">
              <Link
                to="/auth/login"
                className="text-gray-300 hover:text-purple-400 font-medium transition-colors"
              >
                Sign In
              </Link>
              <Link
                to="/signin"
                className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 text-white font-medium py-2 px-6 rounded-full text-lg transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden p-3 text-purple-600 hover:bg-purple-500 transition-all"
              aria-label="Open menu"
              type="button"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-[60] transition-opacity duration-300 md:hidden ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/10 backdrop-blur-sm" onClick={closeMenu} />

        {/* Menu Panel */}
        <div
          className={`fixed top-0 right-0 h-full w-[60%] max-w-xs bg-black border-l border-gray-800 shadow-lg p-4 transition-transform duration-500 ease-in-out transform ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <div className="flex justify-end mb-6">
            <button
              onClick={closeMenu}
              className="p-2 rounded-full text-gray-300 hover:bg-gray-800 transition-colors"
              aria-label="Close menu"
              type="button"
            >
              <X className="w-6 h-6 text-purple-400" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col space-y-1 border-b border-gray-800 pb-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-lg font-small p-2 rounded-md transition-all duration-200 text-center ${
                  location.pathname === item.href
                    ? "text-purple-400 bg-gray-800/70"
                    : "text-gray-300 hover:text-purple-400 hover:bg-gray-800/50"
                }`}
                onClick={closeMenu}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Auth Buttons */}
          <div className="mt-4 flex flex-col space-y-3">
            <Link
              to="/auth/login"
              className="text-base font-medium py-2 text-center rounded-md border border-gray-700 text-gray-300 hover:text-purple-400 hover:border-purple-500 transition-colors"
              onClick={closeMenu}
            >
              Sign In
            </Link>
            <Link
              to="/signin"
              className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 text-white font-semibold py-2 px-4 rounded-md text-base transition-all duration-300 text-center"
              onClick={closeMenu}
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="pt-28">{children}</main>

      {/* Footer */}
      <footer className="bg-black text-white py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {/* Logo & Social Links */}
            <div className="md:col-span-2 flex flex-col items-center md:items-start">
              <div className="flex items-center space-x-2 mb-2">
                <img src="/Logo.png" alt="Elite Trader Logo" className="w-8 h-8" />
                <span className="text-2xl font-bold text-purple-500">Elite Trader</span>
              </div>
              <p className="text-gray-400 mb-4 text-center md:text-left max-w-sm">
                The premier cryptocurrency trading platform for professionals and beginners alike.
              </p>
            </div>

            {/* Platform Links */}
            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-lg font-semibold mb-3 text-white">Platform</h3>
              <ul className="space-y-2 text-center md:text-left">
                <li>
                  <Link
                    to="/about"
                    className="text-gray-400 hover:text-purple-400 transition-colors text-sm"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/pricing"
                    className="text-gray-400 hover:text-purple-400 transition-colors text-sm"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-gray-400 hover:text-purple-400 transition-colors text-sm"
                  >
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
              <br />
              Built with ❤ by tobilobaCodes
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PublicLayout;
