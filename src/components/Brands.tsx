'use client';

import React from 'react';
import Image from 'next/image';

const brands = [
  {
    name: 'Viewsonic',
    logo: '/brands/viewsonic.png',
    alt: 'Viewsonic Logo',
    width: 225,
    height: 68
  },
  {
    name: 'OneScreen',
    logo: '/brands/onescreen.png',
    alt: 'OneScreen Logo',
    width: 225,
    height: 68
  },
  {
    name: 'CP Plus',
    logo: '/brands/cpplus.png',
    alt: 'CP Plus Logo',
    width: 225,
    height: 68
  },
  {
    name: 'Dahua',
    logo: '/brands/dahua.png',
    alt: 'Dahua Logo',
    width: 225,
    height: 68
  }
];

const Brands = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-800">
            Trusted by Industry Leaders
          </h2>
          <p className="mt-2 text-gray-600">
            We partner with the world's leading technology brands
          </p>
        </div>

        <div className="mt-12">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {brands.map((brand) => (
              <div
                key={brand.name}
                className="col-span-1 flex justify-center items-center"
              >
                <div className="relative w-full h-32 group">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 opacity-0 
                    group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
                  
                  <div className="relative h-full flex items-center justify-center px-4 
                    hover:scale-105 transition-transform duration-300">
                    <Image
                      src={brand.logo}
                      alt={brand.alt}
                      width={brand.width}
                      height={brand.height}
                      className="w-[225px] h-auto object-contain filter grayscale hover:grayscale-0 
                        transition-all duration-300"
                      style={{
                        maxWidth: '225px',
                        width: '100%'
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute left-0 right-0 bottom-0 h-px bg-gradient-to-r from-transparent 
          via-gray-200 to-transparent" />
      </div>
    </section>
  );
};

export default Brands; 