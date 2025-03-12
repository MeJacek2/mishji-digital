'use client';

import React from 'react';
import Image from 'next/image';
import { getImagePath } from '../utils/imagePath';

const solutions = [
  {
    title: 'LED Video Walls',
    description: 'High-resolution LED video walls for stunning visual impact in any environment.',
    features: ['Custom sizes available', 'High brightness', 'Seamless integration', '24/7 operation'],
    image: '/images/led-video-wall-setup.jpg'
  },
  {
    title: 'Interactive Touch Screens',
    description: 'Advanced touch screen solutions for immersive and engaging interactive experiences.',
    features: ['Multi-touch capability', 'Ultra-responsive touch', 'Interactive software solutions', 'Custom applications'],
    image: '/images/Education_scenario_pc_l.png'
  },
  {
    title: 'Digital Marketing',
    description: 'Strategic digital marketing solutions to enhance your brand presence and drive growth.',
    features: ['Social media management', 'Content strategy', 'SEO optimization', 'Performance analytics'],
    image: 'https://picsum.photos/800/600?random=3'
  }
];

const DisplaySolutions = () => {
  return (
    <section id="display-solutions" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Professional Display Solutions
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            State-of-the-art LED displays and digital signage solutions for every business need
          </p>
        </div>

        <div className="mt-20 space-y-16">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className={`flex flex-col lg:flex-row gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className="flex-1">
                <div className="relative h-[300px] sm:h-[400px] rounded-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 mix-blend-multiply rounded-2xl" />
                  <Image
                    src={solution.image.startsWith('http') ? solution.image : getImagePath(solution.image)}
                    alt={solution.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              
              <div className="flex-1 space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">
                  {solution.title}
                </h3>
                <p className="text-lg text-gray-600">
                  {solution.description}
                </p>
                <ul className="space-y-4">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <svg
                        className="h-6 w-6 text-blue-600 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-6">
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                  >
                    Learn More
                    <svg
                      className="ml-2 h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DisplaySolutions; 