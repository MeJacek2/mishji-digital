'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getImagePath } from '../utils/imagePath';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src={getImagePath('/mishji-logo.png')}
                alt="Mishji Digital"
                width={140}
                height={50}
                className="h-10 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#display-solutions" className="text-gray-700 hover:text-[#b62685] transition-colors">
              Display Solutions
            </Link>
            <Link href="#portfolio" className="text-gray-700 hover:text-[#b62685] transition-colors">
              Portfolio
            </Link>
            <Link 
              href="#contact" 
              className="px-4 py-2 rounded-full bg-[#b62685] text-white hover:bg-[#a11f75] 
                transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-[#b62685]"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                href="#display-solutions"
                className="block px-3 py-2 rounded-md text-gray-700 hover:text-[#b62685] hover:bg-gray-50"
                onClick={() => setIsOpen(false)}
              >
                Display Solutions
              </Link>
              <Link
                href="#portfolio"
                className="block px-3 py-2 rounded-md text-gray-700 hover:text-[#b62685] hover:bg-gray-50"
                onClick={() => setIsOpen(false)}
              >
                Portfolio
              </Link>
              <Link
                href="#contact"
                className="block px-3 py-2 rounded-md bg-[#b62685] text-white hover:bg-[#a11f75]"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 