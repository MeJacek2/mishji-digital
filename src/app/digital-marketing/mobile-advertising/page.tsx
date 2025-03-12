import { getImagePath } from '../../../utils/imagePath';
import React from 'react';
import Image from 'next/image';
import ServicePageLayout from '../../../components/ServicePageLayout';

const MobileAdvertisingPage = () => {
  return (
    <ServicePageLayout
      title="Mobile Advertising Services"
      description="Reach your audience on mobile devices with targeted advertising solutions"
      heroImage={getImagePath("/images/services/mobile-advertising-hero.jpg")}
    >
      <div className="space-y-16">
        {/* Introduction */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Transform Your Mobile Advertising Strategy
          </h2>
          <p className="text-lg text-gray-600">
            Reach your target audience where they spend most of their time - on mobile devices. Our comprehensive mobile advertising solutions combine advanced targeting, creative excellence, and data-driven optimization to deliver exceptional results across all mobile platforms.
          </p>
        </div>

        {/* Why Choose Mishji Section */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 lg:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Why Choose Mishji for Mobile Advertising
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Mobile-First Expertise</h3>
              <p className="text-gray-600">
                Specialized knowledge in mobile-specific advertising formats and platforms.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Advanced Targeting</h3>
              <p className="text-gray-600">
                Precise audience targeting using location, behavior, and demographics.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Real-Time Analytics</h3>
              <p className="text-gray-600">
                Comprehensive tracking and optimization of mobile campaign performance.
              </p>
            </div>
          </div>
        </div>

        {/* Mobile Ad Formats Section */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="p-8 lg:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Mobile Advertising Formats
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-6 border border-gray-200 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Mobile Display Ads</h3>
                <p className="text-gray-600">Banner ads, interstitials, and rich media formats optimized for mobile.</p>
              </div>
              <div className="p-6 border border-gray-200 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">In-App Advertising</h3>
                <p className="text-gray-600">Native ads seamlessly integrated into mobile applications.</p>
              </div>
              <div className="p-6 border border-gray-200 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Mobile Video Ads</h3>
                <p className="text-gray-600">Engaging video content optimized for mobile viewing.</p>
              </div>
              <div className="p-6 border border-gray-200 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Mobile Search Ads</h3>
                <p className="text-gray-600">Search advertising specifically targeted to mobile users.</p>
              </div>
              <div className="p-6 border border-gray-200 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Mobile Social Ads</h3>
                <p className="text-gray-600">Advertising across mobile social media platforms.</p>
              </div>
              <div className="p-6 border border-gray-200 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">SMS/MMS Marketing</h3>
                <p className="text-gray-600">Direct messaging campaigns to engaged mobile users.</p>
              </div>
            </div>
          </div>
        </div>

        {/* How We Can Help Section */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="p-8 lg:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Comprehensive Mobile Advertising Solutions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-semibold">1</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Strategy Development</h3>
                    <p className="text-gray-600 mt-2">Custom mobile advertising strategies aligned with your goals.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-semibold">2</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Creative Development</h3>
                    <p className="text-gray-600 mt-2">Mobile-optimized ad creative and messaging.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-semibold">3</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Platform Selection</h3>
                    <p className="text-gray-600 mt-2">Strategic selection of mobile advertising platforms and networks.</p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-semibold">4</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Audience Targeting</h3>
                    <p className="text-gray-600 mt-2">Advanced mobile audience targeting and segmentation.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-semibold">5</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Performance Tracking</h3>
                    <p className="text-gray-600 mt-2">Comprehensive mobile analytics and attribution.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-semibold">6</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Optimization & Scaling</h3>
                    <p className="text-gray-600 mt-2">Continuous optimization of mobile campaigns for maximum ROI.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Advanced Features Section */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="p-8 lg:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Advanced Mobile Advertising Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-6 border border-gray-200 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Location-Based Targeting</h3>
                <p className="text-gray-600">Precise targeting based on user location and movement patterns.</p>
              </div>
              <div className="p-6 border border-gray-200 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Cross-Device Tracking</h3>
                <p className="text-gray-600">Seamless tracking across multiple devices and platforms.</p>
              </div>
              <div className="p-6 border border-gray-200 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Dynamic Creative</h3>
                <p className="text-gray-600">Personalized ad content based on user behavior and preferences.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
            <div className="relative h-[400px]">
              <Image
                src={getImagePath("/images/services/mobile-advertising-benefits.jpg")}
                alt="Mobile Advertising Benefits"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-8 lg:p-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Benefits</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-gray-900">Precise Targeting</h4>
                    <p className="text-gray-600">Reach mobile users with highly targeted messaging.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-gray-900">Higher Engagement</h4>
                    <p className="text-gray-600">Better engagement rates through mobile-optimized formats.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-gray-900">Measurable Results</h4>
                    <p className="text-gray-600">Clear tracking and attribution of mobile campaign performance.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* ROI Section */}
        <div className="bg-blue-50 rounded-2xl p-8 lg:p-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Expected ROI & Performance Metrics</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl">
              <div className="text-3xl font-bold text-blue-600 mb-2">+200%</div>
              <div className="text-gray-600">Click-through rate</div>
            </div>
            <div className="bg-white p-6 rounded-xl">
              <div className="text-3xl font-bold text-blue-600 mb-2">-30%</div>
              <div className="text-gray-600">Cost per acquisition</div>
            </div>
            <div className="bg-white p-6 rounded-xl">
              <div className="text-3xl font-bold text-blue-600 mb-2">+150%</div>
              <div className="text-gray-600">Mobile engagement</div>
            </div>
            <div className="bg-white p-6 rounded-xl">
              <div className="text-3xl font-bold text-blue-600 mb-2">4x</div>
              <div className="text-gray-600">ROI increase</div>
            </div>
          </div>
        </div>

        {/* FAQs Section */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="p-8 lg:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Which mobile ad formats are most effective?
                </h3>
                <p className="text-gray-600">
                  The most effective formats depend on your goals, but we typically see strong results with mobile video ads, native in-app advertising, and mobile display ads.
                </p>
              </div>
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  How do you track mobile advertising success?
                </h3>
                <p className="text-gray-600">
                  We use advanced mobile analytics and attribution tools to track key metrics including impressions, clicks, conversions, and ROI across all campaigns.
                </p>
              </div>
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  What targeting options are available?
                </h3>
                <p className="text-gray-600">
                  We offer comprehensive targeting options including location, demographics, behavior, interests, and device-specific targeting.
                </p>
              </div>
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  How do you ensure brand safety?
                </h3>
                <p className="text-gray-600">
                  We implement strict brand safety measures including app/site whitelisting, content category exclusions, and real-time monitoring.
                </p>
              </div>
              <div className="pb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  What's the minimum budget needed?
                </h3>
                <p className="text-gray-600">
                  We recommend starting with a minimum budget of $3,000/month to effectively test different mobile ad formats and targeting options.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Transform Your Mobile Advertising?</h3>
          <p className="text-lg text-gray-600 mb-8">
            Let's create a mobile advertising strategy that drives real results for your business.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors">
            Get Started Today
          </button>
        </div>
      </div>
    </ServicePageLayout>
  );
};

export default MobileAdvertisingPage; 