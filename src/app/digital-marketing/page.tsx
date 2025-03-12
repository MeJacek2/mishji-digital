import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import MainLayout from '../../components/MainLayout';

const Header = () => {
  return (
    <header className="fixed w-full bg-white z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.svg"
              alt="Clearwater"
              width={150}
              height={40}
              priority
            />
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <div className="relative group">
              <button className="flex items-center space-x-1 text-navy-900">
                <span>Services</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            <Link href="/our-work" className="text-navy-900">Our Work</Link>
            <Link href="/about" className="text-navy-900">About</Link>
            <Link href="/awards" className="text-navy-900">Awards</Link>
            <Link href="/contact" className="text-navy-900">Contact</Link>
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="tel:1300796122" className="text-navy-900 font-medium">
              1300 796 122
            </a>
            <Link
              href="/contact"
              className="bg-purple-600 text-white px-6 py-2 rounded-full font-medium hover:bg-purple-700 transition-colors"
            >
              Get in touch
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

const services = [
  {
    title: "Digital Advertising",
    description: "Strategic digital advertising campaigns that drive results across search, social, and display networks.",
    icon: (
      <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
      </svg>
    ),
    link: "/digital-marketing/digital-advertising",
    image: "/images/digital-marketing/digital-advertising-hero.jpg"
  },
  {
    title: "SEO",
    description: "Data-driven search engine optimization to improve rankings and drive organic traffic growth.",
    icon: (
      <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    link: "/services/seo",
    image: "/images/services/seo-hero.jpg"
  },
  {
    title: "Social Media Marketing",
    description: "Engaging social media strategies that build communities and drive meaningful engagement.",
    icon: (
      <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
      </svg>
    ),
    link: "/services/social-media-marketing",
    image: "/images/services/social-media-marketing-hero.jpg"
  },
  {
    title: "Mobile App Development",
    description: "Custom mobile applications that deliver exceptional user experiences across platforms.",
    icon: (
      <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    link: "/services/mobile-app-development",
    image: "/images/services/mobile-app-development-hero.jpg"
  },
  {
    title: "GEO Fencing Advertising",
    description: "Location-based advertising solutions that target customers in specific geographic areas.",
    icon: (
      <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    link: "/services/geo-fencing-advertising",
    image: "/images/services/geo-fencing-advertising-hero.jpg"
  },
  {
    title: "Media Planning & Buying",
    description: "Strategic media planning and buying services to maximize your advertising ROI.",
    icon: (
      <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    link: "/services/media-planning-buying",
    image: "/images/services/media-planning-buying-hero.jpg"
  },
  {
    title: "Lead Generation",
    description: "Comprehensive lead generation solutions to drive qualified prospects to your business.",
    icon: (
      <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    link: "/services/lead-generation",
    image: "/images/services/lead-generation-hero.jpg"
  },
  {
    title: "Mobile Advertising",
    description: "Targeted mobile advertising campaigns that reach users on their preferred devices.",
    icon: (
      <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    link: "/services/mobile-advertising",
    image: "/images/services/mobile-advertising-hero.jpg"
  }
];

const DigitalMarketingPage = () => {
  return (
    <>
      <Header />
      <MainLayout>
        <div className="min-h-screen bg-gray-50">
          {/* Hero Section */}
          <div className="bg-white">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
              <div className="text-center">
                <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
                  Digital Marketing Services
                </h1>
                <p className="max-w-3xl mt-5 mx-auto text-xl text-gray-500">
                  Comprehensive digital solutions to help your business grow and succeed in the digital landscape.
                </p>
              </div>
            </div>
          </div>

          {/* Services Grid */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => (
                <Link 
                  href={service.link} 
                  key={index}
                  className="group relative bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="relative h-48">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"></div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        {service.icon}
                      </div>
                      <h3 className="ml-3 text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-gray-600">
                      {service.description}
                    </p>
                    <div className="mt-4 flex items-center text-blue-600">
                      <span className="text-sm font-semibold">Learn more</span>
                      <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-blue-600 mt-16">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
              <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                <span className="block">Ready to get started?</span>
                <span className="block text-blue-200">Let's discuss your project today.</span>
              </h2>
              <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                <div className="inline-flex rounded-md shadow">
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50"
                  >
                    Get in touch
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default DigitalMarketingPage; 