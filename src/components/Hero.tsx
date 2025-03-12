'use client';

import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { getImagePath } from '../utils/imagePath';

const leftImages = [
  {
    url: getImagePath('/hero/led-wall.jpg'),
    alt: 'LED Video Wall'
  },
  {
    url: getImagePath('/hero/digital-display.jpg'),
    alt: 'Digital Display'
  }
];

const rightImages = [
  {
    url: getImagePath('/hero/interactive-display.jpg'),
    alt: 'Interactive Display'
  },
  {
    url: getImagePath('/hero/digital-signage.jpg'),
    alt: 'Digital Signage'
  }
];

const heroContent = [
  {
    titleTyping: "Light Up Your Vision with",
    titleHighlight: "Cutting-Edge Displays!",
    description: "Experience next-level visuals with our state-of-the-art LED and digital screens designed for superior brightness, clarity, and impact."
  },
  {
    titleTyping: "Custom Screens",
    titleHighlight: "Maximum Impact!",
    description: "Tailor-made LED and digital displays to suit your unique business needs—whether for advertising, presentations, or immersive experiences."
  },
  {
    titleTyping: "Interactive Displays That",
    titleHighlight: "Engage & Inspire!",
    description: "Boost engagement with interactive screens that captivate audiences, enhance learning, and redefine customer experiences."
  },
  {
    titleTyping: "Transform Spaces with",
    titleHighlight: "Stunning LED Displays!",
    description: "Make a lasting impression with high-resolution LED screens that turn any location into a visual masterpiece."
  }
];

const Hero = () => {
  const [currentLeftImage, setCurrentLeftImage] = useState(0);
  const [currentRightImage, setCurrentRightImage] = useState(0);
  const [currentContent, setCurrentContent] = useState(0);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isAnimating, setIsAnimating] = useState(true);
  const [animationKey, setAnimationKey] = useState(0);

  // Refs for scroll animations
  const leftSectionRef = useRef(null);
  const centerSectionRef = useRef(null);
  const rightSectionRef = useRef(null);

  useEffect(() => {
    // Intersection Observer setup
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-in');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe sections
    if (leftSectionRef.current) observer.observe(leftSectionRef.current);
    if (centerSectionRef.current) observer.observe(centerSectionRef.current);
    if (rightSectionRef.current) observer.observe(rightSectionRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const leftTimer = setInterval(() => {
      setCurrentLeftImage((prev) => (prev + 1) % leftImages.length);
    }, 4000);

    const rightTimer = setInterval(() => {
      setCurrentRightImage((prev) => (prev + 1) % rightImages.length);
    }, 4000);

    const contentTimer = setInterval(() => {
      setIsAnimating(false);
      setTimeout(() => {
        setCurrentContent((prev) => (prev + 1) % heroContent.length);
        setAnimationKey(key => key + 1);
        setIsAnimating(true);
      }, 500);
    }, 12000);

    return () => {
      clearInterval(leftTimer);
      clearInterval(rightTimer);
      clearInterval(contentTimer);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gray-900">
      {/* Left Section */}
      <div ref={leftSectionRef} className="w-1/3 h-screen relative opacity-0 translate-x-[-100px] transition-all duration-1000">
        {leftImages.map((image, index) => (
          <div
            key={image.url}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out
              ${index === currentLeftImage ? 'opacity-100' : 'opacity-0'}`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-transparent z-10" />
            <Image
              src={image.url}
              alt={image.alt}
              fill
              sizes="33vw"
              className="object-cover object-center"
              priority={index === 0}
            />
          </div>
        ))}
        <div className="absolute inset-0 animate-pulse-slow bg-[#b62685]/20 mix-blend-overlay" />
      </div>

      {/* Center Section */}
      <div ref={centerSectionRef} className="w-1/3 h-screen relative z-10 opacity-0 translate-y-[50px] transition-all duration-1000">
        {/* Video Background */}
        <div className="absolute inset-0 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            controls={false}
            preload="auto"
            onLoadedData={() => {
              console.log('Video loaded successfully');
              setIsVideoLoaded(true);
            }}
            onError={(e) => {
              console.error('Video loading error:', e);
            }}
            className="absolute top-0 left-0 w-full h-full object-cover"
            style={{
              opacity: 0.5,
              zIndex: 0
            }}
          >
            <source 
              src={getImagePath('/hero/background-loop.mp4')}
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/60 via-gray-900/40 to-gray-900/60" style={{ zIndex: 1 }} />
        </div>

        {/* Content */}
        <div className="relative h-full flex flex-col justify-center px-8" style={{ zIndex: 2 }}>
          <div className="space-y-8 text-center">
            <div className="overflow-hidden min-h-[200px] sm:min-h-[240px] flex flex-col items-center justify-center">
              <div 
                className={`transition-all duration-500 transform w-full
                  ${isAnimating ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
              >
                <div className="flex flex-col gap-6 items-center">
                  {/* Typing Text */}
                  <div className="w-full flex justify-center relative" key={animationKey}>
                    <div className="typing-container">
                      <h1 className="typing-text text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
                        {heroContent[currentContent].titleTyping}
                      </h1>
                    </div>
                  </div>
                  
                  {/* Highlighted Text */}
                  <div className="overflow-hidden w-full relative" key={`highlight-${animationKey}`}>
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#b62685] leading-tight highlight-text py-2"
                        style={{ animationDelay: '3s' }}>
                      {heroContent[currentContent].titleHighlight}
                    </h1>
                  </div>
                </div>

                <p className="text-base sm:text-lg text-gray-300 max-w-xl mx-auto mt-8 opacity-0 animate-fade-in relative"
                   style={{ animationDelay: '4s', animationFillMode: 'forwards' }}>
                  {heroContent[currentContent].description}
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8 opacity-0 animate-fade-in relative"
                 style={{ animationDelay: '4.5s', animationFillMode: 'forwards' }}>
              <a
                href="#contact"
                className="px-8 py-3 rounded-full bg-[#b62685] text-white hover:bg-[#a11f75] 
                  transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
              >
                Get Started
              </a>
              <a
                href="#services"
                className="px-8 py-3 rounded-full border-2 border-white text-white 
                  hover:bg-white hover:text-gray-900 transition-all duration-300 
                  transform hover:scale-105"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Content Indicators */}
          <div className="absolute left-1/2 bottom-8 -translate-x-1/2 flex space-x-2" style={{ zIndex: 3 }}>
            {heroContent.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer
                  ${index === currentContent 
                    ? 'bg-[#b62685] w-8' 
                    : 'bg-gray-500 hover:bg-gray-400'}`}
                onClick={() => {
                  setIsAnimating(false);
                  setTimeout(() => {
                    setCurrentContent(index);
                    setAnimationKey(key => key + 1);
                    setIsAnimating(true);
                  }, 500);
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div ref={rightSectionRef} className="w-1/3 h-screen relative opacity-0 translate-x-[100px] transition-all duration-1000">
        {rightImages.map((image, index) => (
          <div
            key={image.url}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out
              ${index === currentRightImage ? 'opacity-100' : 'opacity-0'}`}
          >
            <div className="absolute inset-0 bg-gradient-to-l from-gray-900/80 to-transparent z-10" />
            <Image
              src={image.url}
              alt={image.alt}
              fill
              sizes="33vw"
              className="object-cover object-center"
              priority={index === 0}
            />
          </div>
        ))}
        <div className="absolute inset-0 animate-pulse-slow bg-[#b62685]/20 mix-blend-overlay" />
      </div>
    </section>
  );
};

export default Hero; 