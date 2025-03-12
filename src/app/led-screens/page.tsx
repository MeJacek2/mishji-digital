'use client';

import React from 'react';
import Image from 'next/image';
import { getImagePath } from '../../utils/imagePath';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ImageCarousel from '../../components/ImageCarousel';

const indoorImages = [
  { src: getImagePath('/images/indoor-led-1.png'), alt: 'Corporate Lobby LED Wall' },
  { src: getImagePath('/images/indoor-led-2.png'), alt: 'Retail Store LED Display' },
  { src: getImagePath('/images/indoor-led-3.png'), alt: 'Conference Room LED Screen' },
  { src: getImagePath('/images/indoor-led-4.png'), alt: 'Exhibition Hall LED Display' }
];

const outdoorImages = [
  { src: getImagePath('/images/outdoor-led-1.jpg'), alt: 'Billboard LED Display' },
  { src: getImagePath('/images/outdoor-led-2.jpg'), alt: 'Stadium LED Screen' },
  { src: getImagePath('/images/outdoor-led-3.jpg'), alt: 'Building Facade LED' },
  { src: getImagePath('/images/outdoor-led-4.jpg'), alt: 'Outdoor Advertising LED' }
];

const transparentImages = [
  { src: getImagePath('/images/transparent-led-1.jpg'), alt: 'Store Window LED Display' },
  { src: getImagePath('/images/transparent-led-2.jpg'), alt: 'Museum LED Installation' },
  { src: getImagePath('/images/transparent-led-3.jpg'), alt: 'Shopping Mall LED Screen' },
  { src: getImagePath('/images/transparent-led-4.jpg'), alt: 'Transparent LED Wall' }
];

const flexibleImages = [
  { src: getImagePath('/images/flexible-led-1.jpg'), alt: 'Curved Wall LED Display' },
  { src: getImagePath('/images/flexible-led-2.jpg'), alt: 'Column LED Wrap' },
  { src: getImagePath('/images/flexible-led-3.jpg'), alt: 'Stage LED Screen' },
  { src: getImagePath('/images/flexible-led-4.jpg'), alt: 'Creative LED Installation' }
];

const LEDScreensPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative h-[60vh] flex items-center justify-center">
          <div className="absolute inset-0">
            <Image
              src={getImagePath('/images/led-hero.jpg')}
              alt="LED Screen Solutions"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>
          <div className="relative z-10 text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">LED Screen Solutions</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Cutting-edge LED display technology for every application
            </p>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Types of LED Screens</h2>
              <p className="text-lg text-gray-600 text-justify max-w-3xl mx-auto">
                Our comprehensive range of LED screens caters to various environments and applications. Each type is specifically designed to meet unique requirements and deliver optimal performance in its intended setting.
              </p>
            </div>

            {/* Indoor LED Screens */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Indoor LED Screens</h3>
              <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
                <div className="grid grid-cols-1 xl:grid-cols-2 items-center">
                  <div className="relative py-12 px-4">
                    <ImageCarousel images={indoorImages} />
                  </div>
                  <div className="p-8 xl:p-12">
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">Features</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-gray-600">High resolution (P1.2 - P4)</span>
                          </li>
                          <li className="flex items-start">
                            <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-gray-600">Wide viewing angles</span>
                          </li>
                          <li className="flex items-start">
                            <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-gray-600">Low power consumption</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">Applications</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-gray-600">Corporate lobbies and boardrooms</span>
                          </li>
                          <li className="flex items-start">
                            <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-gray-600">Retail stores and shopping malls</span>
                          </li>
                          <li className="flex items-start">
                            <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-gray-600">Exhibition halls and conference centers</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Outdoor LED Screens */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Outdoor LED Screens</h3>
              <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
                <div className="grid grid-cols-1 xl:grid-cols-2 items-center">
                  <div className="relative py-12 px-4">
                    <ImageCarousel images={outdoorImages} />
                  </div>
                  <div className="p-8 xl:p-12">
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">Features</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-gray-600">Weather-resistant (IP65/IP67)</span>
                          </li>
                          <li className="flex items-start">
                            <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-gray-600">High brightness (5000-8000 nits)</span>
                          </li>
                          <li className="flex items-start">
                            <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-gray-600">Anti-glare technology</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">Applications</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-gray-600">Billboards and outdoor advertising</span>
                          </li>
                          <li className="flex items-start">
                            <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-gray-600">Sports stadiums and arenas</span>
                          </li>
                          <li className="flex items-start">
                            <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-gray-600">Public spaces and landmarks</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Transparent LED Screens */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Transparent LED Screens</h3>
              <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
                <div className="grid grid-cols-1 xl:grid-cols-2 items-center">
                  <div className="relative py-12 px-4">
                    <ImageCarousel images={transparentImages} />
                  </div>
                  <div className="p-8 xl:p-12">
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">Features</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-gray-600">Up to 70% transparency</span>
                          </li>
                          <li className="flex items-start">
                            <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-gray-600">Ultra-thin design</span>
                          </li>
                          <li className="flex items-start">
                            <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-gray-600">Energy efficient</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">Applications</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-gray-600">Store windows and facades</span>
                          </li>
                          <li className="flex items-start">
                            <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-gray-600">Museum exhibits</span>
                          </li>
                          <li className="flex items-start">
                            <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-gray-600">Interactive displays</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Flexible LED Screens */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Flexible LED Screens</h3>
              <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
                <div className="grid grid-cols-1 xl:grid-cols-2 items-center">
                  <div className="relative py-12 px-4">
                    <ImageCarousel images={flexibleImages} />
                  </div>
                  <div className="p-8 xl:p-12">
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">Features</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-gray-600">Curved and bendable design</span>
                          </li>
                          <li className="flex items-start">
                            <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-gray-600">Lightweight and portable</span>
                          </li>
                          <li className="flex items-start">
                            <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-gray-600">Easy installation and maintenance</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">Applications</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-gray-600">Curved walls and columns</span>
                          </li>
                          <li className="flex items-start">
                            <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-gray-600">Temporary events and exhibitions</span>
                          </li>
                          <li className="flex items-start">
                            <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-gray-600">Stage and performance venues</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Technical Specifications Table */}
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Technical Specifications</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Pixel Pitch</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Brightness</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Refresh Rate</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Power Consumption</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Indoor</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">P1.2 - P4</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">800-1200 nits</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">3840Hz</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">300-500W/m²</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Outdoor</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">P4 - P10</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">5000-8000 nits</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">3840Hz</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">500-800W/m²</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Transparent</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">P3 - P8</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1000-2500 nits</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">3840Hz</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">200-400W/m²</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Flexible</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">P2 - P6</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1000-3000 nits</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">3840Hz</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">250-450W/m²</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default LEDScreensPage; 