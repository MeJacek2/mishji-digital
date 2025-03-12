'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { getImagePath } from '../utils/imagePath';

const projects = [
  {
    title: 'Corporate LED Installation',
    category: 'Display Solutions',
    description: 'Large-scale customized LED screen installation for corporate headquarters',
    image: '/images/Large-scale-LED.png',
  },
  {
    title: 'E-commerce Growth Campaign',
    category: 'Digital Marketing',
    description: 'Comprehensive digital marketing strategy increasing sales by 150%',
    image: 'https://picsum.photos/800/600?random=5',
  },
  {
    title: 'Retail Digital Signage',
    category: 'Display Solutions',
    description: 'Interactive digital signage solution for retail chain',
    image: 'https://picsum.photos/800/600?random=6',
  },
  {
    title: 'Social Media Success',
    category: 'Digital Marketing',
    description: 'Social media campaign reaching over 1M+ engagement',
    image: 'https://picsum.photos/800/600?random=7',
  },
  {
    title: 'Trading Floor Displays',
    category: 'Display Solutions',
    description: 'Multi-screen trading floor display system for financial firm',
    image: 'https://picsum.photos/800/600?random=8',
  },
  {
    title: 'Brand Awareness Campaign',
    category: 'Digital Marketing',
    description: 'Integrated digital campaign increasing brand awareness by 200%',
    image: 'https://picsum.photos/800/600?random=9',
  },
];

const Portfolio = () => {
  const [filter, setFilter] = useState('all');

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.category === filter);

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Our Portfolio
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our successful projects and see how we've helped businesses achieve their goals
          </p>
        </div>

        <div className="mt-12 flex justify-center space-x-4">
          <button
            onClick={() => setFilter('all')}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
              filter === 'all'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            All Projects
          </button>
          <button
            onClick={() => setFilter('Digital Marketing')}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
              filter === 'Digital Marketing'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            Digital Marketing
          </button>
          <button
            onClick={() => setFilter('Display Solutions')}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
              filter === 'Display Solutions'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            Display Solutions
          </button>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-64 w-full">
                <Image
                  src={project.image.startsWith('http') ? project.image : getImagePath(project.image)}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <span className="text-sm font-medium bg-blue-600 px-3 py-1 rounded-full">
                  {project.category}
                </span>
                <h3 className="mt-4 text-xl font-semibold">{project.title}</h3>
                <p className="mt-2 text-sm text-gray-200">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio; 