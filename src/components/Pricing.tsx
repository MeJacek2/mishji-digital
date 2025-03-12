'use client';

import React, { useState } from 'react';

const pricingPlans = [
  {
    name: 'Basic Display',
    price: 'Custom',
    description: 'Perfect for small businesses starting with digital displays',
    features: [
      'HD LED Display Installation',
      'Basic Content Management System',
      'Standard Technical Support',
      'One-time Setup Assistance',
      '1-Year Hardware Warranty',
      'Basic Training Session'
    ],
    cta: 'Get Started'
  },
  {
    name: 'Professional Suite',
    price: 'Custom',
    description: 'Comprehensive solution for growing businesses',
    features: [
      '4K LED Display Installation',
      'Advanced Content Management',
      'Priority Technical Support',
      'Professional Installation',
      'Extended 2-Year Warranty',
      'Multiple Training Sessions',
      'Digital Marketing Consultation',
      'Content Creation Support'
    ],
    featured: true,
    cta: 'Contact Sales'
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'Full-scale solution for large organizations',
    features: [
      'Premium LED Display Network',
      'Enterprise CMS Solution',
      '24/7 Technical Support',
      'Custom Installation & Setup',
      'Extended 3-Year Warranty',
      'Comprehensive Training Program',
      'Dedicated Account Manager',
      'Content Strategy & Creation',
      'Analytics & Reporting',
      'API Integration Support'
    ],
    cta: 'Contact Sales'
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Display Solutions Pricing
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the perfect display solution package for your business needs
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border ${
                plan.featured
                  ? 'border-[#b62685] shadow-xl scale-105'
                  : 'border-gray-200 shadow-sm hover:shadow-lg'
              } bg-white p-8 transition-all duration-300`}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex rounded-full bg-[#b62685] px-4 py-1 text-sm font-semibold text-white">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900">{plan.name}</h3>
                <p className="mt-4 text-sm text-gray-500">{plan.description}</p>
                <p className="mt-6">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                </p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <svg
                      className="h-6 w-6 text-[#b62685] mr-2"
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

              <button
                className={`w-full rounded-full px-6 py-3 text-center text-sm font-semibold transition-all duration-300 ${
                  plan.featured
                    ? 'bg-[#b62685] text-white hover:bg-[#a11f75] shadow-md hover:shadow-lg'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Need a custom solution?{' '}
            <a href="#contact" className="text-[#b62685] font-semibold hover:text-[#a11f75]">
              Contact us
            </a>{' '}
            for personalized pricing
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing; 