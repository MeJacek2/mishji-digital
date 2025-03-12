'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getImagePath } from '../utils/imagePath';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const [isDisplaySolutionsOpen, setIsDisplaySolutionsOpen] = useState(false);
  const [isDigitalMarketingOpen, setIsDigitalMarketingOpen] = useState(false);
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        formRef.current && 
        buttonRef.current && 
        !formRef.current.contains(event.target as Node) && 
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsEnquiryModalOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    setIsEnquiryModalOpen(false);
    setFormData({ name: '', email: '', phone: '', company: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20 py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src={getImagePath('/images/logo.png')}
                alt="Mishji Digital"
                width={140}
                height={50}
                className="h-10 w-auto"
              />
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex space-x-8">
              <div className="relative group">
                <button 
                  className="flex items-center text-gray-600 hover:text-[#b62784] px-3 py-2 text-sm font-medium transition-colors"
                  onMouseEnter={() => setIsDisplaySolutionsOpen(true)}
                  onMouseLeave={() => setIsDisplaySolutionsOpen(false)}
                >
                  <span>Display Solutions</span>
                  <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div 
                  className="absolute -bottom-2 left-0 right-0 h-2 bg-transparent"
                  onMouseEnter={() => setIsDisplaySolutionsOpen(true)}
                />
                {isDisplaySolutionsOpen && (
                  <div 
                    className="absolute left-0 w-[500px] bg-white rounded-lg shadow-lg border border-[#b62784]/30 overflow-hidden"
                    onMouseEnter={() => setIsDisplaySolutionsOpen(true)}
                    onMouseLeave={() => setIsDisplaySolutionsOpen(false)}
                  >
                    <div className="grid grid-cols-2 divide-x divide-[#b62784]/15">
                      <div className="py-3">
                        <div className="font-medium text-gray-700 px-4 mb-2">LED Displays</div>
                        <div className="space-y-1">
                          <Link href="/display-solutions/indoor-led-screens" className="block px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-[#b62784] transition-colors">
                            Indoor LED Screens
                          </Link>
                          <Link href="/display-solutions/outdoor-led-screens" className="block px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-[#b62784] transition-colors">
                            Outdoor LED Screens
                          </Link>
                          <Link href="/display-solutions/customized-led-screens" className="block px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-[#b62784] transition-colors">
                            Customized LED Screens
                          </Link>
                          <Link href="/display-solutions/flexible-led-screens" className="block px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-[#b62784] transition-colors">
                            Flexible LED Screens
                          </Link>
                          <Link href="/display-solutions/90-360-degree-led-screens" className="block px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-[#b62784] transition-colors">
                            90 / 360 Degree LED Screens
                          </Link>
                        </div>
                      </div>
                      <div className="py-3">
                        <div className="font-medium text-gray-700 px-4 mb-2">Display Solutions</div>
                        <div className="space-y-1">
                          <Link href="/display-solutions/interactive-touch-screens" className="block px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-[#b62784] transition-colors">
                            Interactive Touch Screens
                          </Link>
                          <Link href="/display-solutions/video-wall-solutions" className="block px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-[#b62784] transition-colors">
                            Video Wall Solutions
                          </Link>
                          <Link href="/display-solutions/self-standing-led-displays" className="block px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-[#b62784] transition-colors">
                            Self Standing LED Displays
                          </Link>
                          <Link href="/display-solutions/led-stand-displays" className="block px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-[#b62784] transition-colors">
                            LED Stand Displays
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="relative group">
                <button 
                  className="flex items-center text-gray-600 hover:text-[#b62784] px-3 py-2 text-sm font-medium transition-colors"
                  onMouseEnter={() => setIsDigitalMarketingOpen(true)}
                  onMouseLeave={() => setIsDigitalMarketingOpen(false)}
                >
                  <span>Digital Marketing</span>
                  <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div 
                  className="absolute -bottom-2 left-0 right-0 h-2 bg-transparent"
                  onMouseEnter={() => setIsDigitalMarketingOpen(true)}
                />
                {isDigitalMarketingOpen && (
                  <div 
                    className="absolute left-0 w-[500px] bg-white rounded-lg shadow-lg border border-[#b62784]/30 overflow-hidden"
                    onMouseEnter={() => setIsDigitalMarketingOpen(true)}
                    onMouseLeave={() => setIsDigitalMarketingOpen(false)}
                  >
                    <div className="grid grid-cols-2 divide-x divide-[#b62784]/15">
                      <div className="py-3">
                        <div className="space-y-1">
                          <Link href="/digital-marketing/digital-advertising" className="block px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-[#b62784] transition-colors">
                            Digital Advertising
                          </Link>
                          <Link href="/digital-marketing/seo" className="block px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-[#b62784] transition-colors">
                            Search Engine Optimization (SEO)
                          </Link>
                          <Link href="/digital-marketing/social-media-marketing" className="block px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-[#b62784] transition-colors">
                            Social Media Marketing
                          </Link>
                          <Link href="/digital-marketing/mobile-app-development" className="block px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-[#b62784] transition-colors">
                            Mobile App Development
                          </Link>
                          <Link href="/digital-marketing/geo-fencing-advertising" className="block px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-[#b62784] transition-colors">
                            GEO Fencing Advertising
                          </Link>
                          <Link href="/digital-marketing/media-planning-buying" className="block px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-[#b62784] transition-colors">
                            Media Planning & Buying
                          </Link>
                          <Link href="/digital-marketing/lead-generation" className="block px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-[#b62784] transition-colors">
                            Lead Generation
                          </Link>
                        </div>
                      </div>
                      <div className="py-3">
                        <div className="space-y-1">
                          <Link href="/digital-marketing/mobile-advertising" className="block px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-[#b62784] transition-colors">
                            Mobile Advertising
                          </Link>
                          <Link href="/digital-marketing/email-marketing" className="block px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-[#b62784] transition-colors">
                            Email Marketing
                          </Link>
                          <Link href="/digital-marketing/whatsapp-marketing" className="block px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-[#b62784] transition-colors">
                            WhatsApp Marketing
                          </Link>
                          <Link href="/digital-marketing/facebook-advertising" className="block px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-[#b62784] transition-colors">
                            Facebook Advertising
                          </Link>
                          <Link href="/digital-marketing/tiktok-advertising" className="block px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-[#b62784] transition-colors">
                            TikTok Advertising
                          </Link>
                          <Link href="/digital-marketing/sms-marketing" className="block px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-[#b62784] transition-colors">
                            SMS Marketing
                          </Link>
                          <Link href="/digital-marketing/push-notifications" className="block px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-[#b62784] transition-colors">
                            Push Notification
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <Link 
                href="/about" 
                className="text-gray-600 hover:text-[#b62784] px-3 py-2 text-sm font-medium transition-colors"
              >
                About
              </Link>
              <Link 
                href="/portfolio" 
                className="text-gray-600 hover:text-[#b62784] px-3 py-2 text-sm font-medium transition-colors"
              >
                Our Work
              </Link>
              <a 
                href="tel:+971501001601" 
                className="flex items-center text-[#b62784] hover:text-gray-900 px-3 py-2 text-base font-bold transition-colors"
              >
                <svg className="h-5 w-5 mr-2 text-[#b62784]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +971 50 100 1601
              </a>
              <div className="relative">
                <button 
                  ref={buttonRef}
                  onClick={() => setIsEnquiryModalOpen(!isEnquiryModalOpen)}
                  className="inline-flex items-center justify-center px-6 py-2 border border-transparent text-sm font-medium rounded-full text-white bg-[#b62784] hover:bg-[#a32276] transition-colors"
                >
                  Let's Get Started
                </button>

                {/* Enquiry Form Dropdown */}
                {isEnquiryModalOpen && (
                  <div 
                    ref={formRef}
                    className="absolute top-full right-0 mt-2 w-[700px] bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden z-50"
                  >
                    <div className="flex">
                      {/* Left Column - Brand Section */}
                      <div className="w-[300px] bg-[#b62784] p-8 text-white flex flex-col items-center justify-center text-center">
                        <div className="bg-white rounded-lg px-6 py-4 mb-8">
                          <Image
                            src={getImagePath('/images/logo-white.png')}
                            alt="Mishji Digital"
                            width={140}
                            height={50}
                            className="h-12 w-auto"
                          />
                        </div>
                        <h3 className="text-2xl font-bold mb-4">Let's Create Something Amazing Together</h3>
                        <p className="text-pink-100 text-sm leading-relaxed">
                          Transform your digital presence with Mishji Digital. Our team of experts is ready to bring your vision to life with innovative solutions tailored to your needs.
                        </p>
                      </div>

                      {/* Right Column - Form */}
                      <div className="flex-1 p-6">
                        <h2 className="text-xl font-bold text-gray-900 mb-4">Get Started with Mishji Digital</h2>
                        
                        <form onSubmit={handleFormSubmit} className="space-y-4">
                          <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                              Full Name *
                            </label>
                            <input
                              type="text"
                              id="name"
                              name="name"
                              required
                              value={formData.name}
                              onChange={handleInputChange}
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-[#b62784] focus:border-[#b62784] text-sm"
                              placeholder="Enter your full name"
                            />
                          </div>

                          <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                              Email Address *
                            </label>
                            <input
                              type="email"
                              id="email"
                              name="email"
                              required
                              value={formData.email}
                              onChange={handleInputChange}
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-[#b62784] focus:border-[#b62784] text-sm"
                              placeholder="Enter your email"
                            />
                          </div>

                          <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                              Phone Number *
                            </label>
                            <input
                              type="tel"
                              id="phone"
                              name="phone"
                              required
                              value={formData.phone}
                              onChange={handleInputChange}
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-[#b62784] focus:border-[#b62784] text-sm"
                              placeholder="Enter your phone number"
                            />
                          </div>

                          <div>
                            <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                              Company Name
                            </label>
                            <input
                              type="text"
                              id="company"
                              name="company"
                              value={formData.company}
                              onChange={handleInputChange}
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-[#b62784] focus:border-[#b62784] text-sm"
                              placeholder="Enter your company name"
                            />
                          </div>

                          <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                              Message
                            </label>
                            <textarea
                              id="message"
                              name="message"
                              value={formData.message}
                              onChange={handleInputChange}
                              rows={3}
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-[#b62784] focus:border-[#b62784] text-sm"
                              placeholder="Tell us about your project"
                            ></textarea>
                          </div>

                          <div className="flex justify-end space-x-3 pt-2">
                            <button
                              type="button"
                              onClick={() => setIsEnquiryModalOpen(false)}
                              className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
                            >
                              Cancel
                            </button>
                            <button
                              type="submit"
                              className="px-6 py-2 bg-[#b62784] text-white rounded-md hover:bg-[#a32276] transition-colors text-sm font-medium"
                            >
                              Submit Enquiry
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="col-span-1">
              <Image
                src={getImagePath('/images/logo-colorbg.png')}
                alt="Mishji Digital"
                width={120}
                height={40}
                className="h-8 w-auto mb-4"
              />
              <p className="text-gray-400 text-sm">
                Transforming businesses through innovative digital solutions.
              </p>
              <div className="mt-4">
                <a href="mailto:info@mishji.com" className="block text-gray-400 hover:text-white text-sm transition-colors mb-2">
                  info@mishji.com
                </a>
                <a href="tel:+971501001601" className="block text-gray-400 hover:text-white text-sm transition-colors">
                  +971 50 100 1601
                </a>
              </div>
            </div>

            {/* Display Solutions */}
            <div className="space-y-4">
              <div>
                <h3 className="text-white text-sm font-semibold mb-4">LED Displays</h3>
                <ul className="space-y-3">
                  <li>
                    <Link href="/display-solutions/indoor-led-screens" className="text-gray-400 hover:text-white text-sm transition-colors">
                      Indoor LED Screens
                    </Link>
                  </li>
                  <li>
                    <Link href="/display-solutions/outdoor-led-screens" className="text-gray-400 hover:text-white text-sm transition-colors">
                      Outdoor LED Screens
                    </Link>
                  </li>
                  <li>
                    <Link href="/display-solutions/customized-led-screens" className="text-gray-400 hover:text-white text-sm transition-colors">
                      Customized LED Screens
                    </Link>
                  </li>
                  <li>
                    <Link href="/display-solutions/flexible-led-screens" className="text-gray-400 hover:text-white text-sm transition-colors">
                      Flexible LED Screens
                    </Link>
                  </li>
                  <li>
                    <Link href="/display-solutions/90-360-degree-led-screens" className="text-gray-400 hover:text-white text-sm transition-colors">
                      90 / 360 Degree LED Screens
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-white text-sm font-semibold mb-4">Display Solutions</h3>
                <ul className="space-y-3">
                  <li>
                    <Link href="/display-solutions/interactive-touch-screens" className="text-gray-400 hover:text-white text-sm transition-colors">
                      Interactive Touch Screens
                    </Link>
                  </li>
                  <li>
                    <Link href="/display-solutions/video-wall-solutions" className="text-gray-400 hover:text-white text-sm transition-colors">
                      Video Wall Solutions
                    </Link>
                  </li>
                  <li>
                    <Link href="/display-solutions/self-standing-led-displays" className="text-gray-400 hover:text-white text-sm transition-colors">
                      Self Standing LED Displays
                    </Link>
                  </li>
                  <li>
                    <Link href="/display-solutions/led-stand-displays" className="text-gray-400 hover:text-white text-sm transition-colors">
                      LED Stand Displays
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Digital Marketing */}
            <div className="space-y-4">
              <div>
                <h3 className="text-white text-sm font-semibold mb-4">Digital Marketing</h3>
                <ul className="space-y-3">
                  <li>
                    <Link href="/digital-marketing/digital-advertising" className="text-gray-400 hover:text-white text-sm transition-colors">
                      Digital Advertising
                    </Link>
                  </li>
                  <li>
                    <Link href="/digital-marketing/seo" className="text-gray-400 hover:text-white text-sm transition-colors">
                      Search Engine Optimization (SEO)
                    </Link>
                  </li>
                  <li>
                    <Link href="/digital-marketing/social-media-marketing" className="text-gray-400 hover:text-white text-sm transition-colors">
                      Social Media Marketing
                    </Link>
                  </li>
                  <li>
                    <Link href="/digital-marketing/mobile-app-development" className="text-gray-400 hover:text-white text-sm transition-colors">
                      Mobile App Development
                    </Link>
                  </li>
                  <li>
                    <Link href="/digital-marketing/geo-fencing-advertising" className="text-gray-400 hover:text-white text-sm transition-colors">
                      GEO Fencing Advertising
                    </Link>
                  </li>
                  <li>
                    <Link href="/digital-marketing/media-planning-buying" className="text-gray-400 hover:text-white text-sm transition-colors">
                      Media Planning & Buying
                    </Link>
                  </li>
                  <li>
                    <Link href="/digital-marketing/lead-generation" className="text-gray-400 hover:text-white text-sm transition-colors">
                      Lead Generation
                    </Link>
                  </li>
                  <li>
                    <Link href="/digital-marketing/mobile-advertising" className="text-gray-400 hover:text-white text-sm transition-colors">
                      Mobile Advertising
                    </Link>
                  </li>
                  <li>
                    <Link href="/digital-marketing/email-marketing" className="text-gray-400 hover:text-white text-sm transition-colors">
                      Email Marketing
                    </Link>
                  </li>
                  <li>
                    <Link href="/digital-marketing/whatsapp-marketing" className="text-gray-400 hover:text-white text-sm transition-colors">
                      WhatsApp Marketing
                    </Link>
                  </li>
                  <li>
                    <Link href="/digital-marketing/facebook-advertising" className="text-gray-400 hover:text-white text-sm transition-colors">
                      Facebook Advertising
                    </Link>
                  </li>
                  <li>
                    <Link href="/digital-marketing/tiktok-advertising" className="text-gray-400 hover:text-white text-sm transition-colors">
                      TikTok Advertising
                    </Link>
                  </li>
                  <li>
                    <Link href="/digital-marketing/sms-marketing" className="text-gray-400 hover:text-white text-sm transition-colors">
                      SMS Marketing
                    </Link>
                  </li>
                  <li>
                    <Link href="/digital-marketing/push-notifications" className="text-gray-400 hover:text-white text-sm transition-colors">
                      Push Notifications
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-white text-sm font-semibold mb-4">Company</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/about" className="text-gray-400 hover:text-white text-sm transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/portfolio" className="text-gray-400 hover:text-white text-sm transition-colors">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-gray-400 hover:text-white text-sm transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="text-gray-400 hover:text-white text-sm transition-colors">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-8 pt-8 border-t border-gray-800">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} Mishji Digital. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.764 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout; 