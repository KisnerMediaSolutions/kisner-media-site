'use client'
// src/app/components/Navbar.tsx

export default function Navbar() {
    return (
      <header className="w-full bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-bold text-black dark:text-white">
            Kisner Media Solutions
          </div>
  
          <nav className="hidden md:flex space-x-6 text-sm font-medium text-gray-600 dark:text-gray-300">
            <a href="#what-we-do" className="hover:text-black dark:hover:text-white">
              What We Do
            </a>
            <a href="#trusted-by" className="hover:text-black dark:hover:text-white">
              Trusted By
            </a>
            <a href="#contact" className="hover:text-black dark:hover:text-white">
              Contact
            </a>
          </nav>
        </div>
      </header>
    );
  }
  