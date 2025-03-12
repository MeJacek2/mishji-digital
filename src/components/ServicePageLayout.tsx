'use client';

import React from 'react';
import Image from 'next/image';
import MainLayout from './MainLayout';
import { getImagePath } from '../utils/imagePath';

interface ServicePageProps {
  title: string;
  description: string;
  heroImage: string;
  children: React.ReactNode;
}

const ServicePageLayout = ({ title, description, heroImage, children }: ServicePageProps) => {
  return (
    <MainLayout>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section */}
        <section className="relative h-[60vh] flex items-center justify-center">
          <div className="absolute inset-0">
            <Image
              src={heroImage.startsWith('http') ? heroImage : getImagePath(heroImage)}
              alt={title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>
          <div className="relative z-10 text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              {description}
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {children}
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default ServicePageLayout; 