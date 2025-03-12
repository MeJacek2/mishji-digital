'use client';

import MainLayout from '../components/MainLayout';
import Hero from '../components/Hero';
import Brands from '../components/Brands';
import DisplaySolutions from '../components/DisplaySolutions';
import Portfolio from '../components/Portfolio';
import ContactSection from '../components/ContactSection';
import FeaturedProducts from '@/components/FeaturedProducts';

export default function Home() {
  return (
    <MainLayout>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <main>
          <Hero />
          <Brands />
          <FeaturedProducts />
          <DisplaySolutions />
          <Portfolio />
          <ContactSection />
        </main>
      </div>
    </MainLayout>
  );
} 