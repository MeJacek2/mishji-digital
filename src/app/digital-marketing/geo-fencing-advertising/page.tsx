import React from 'react';
import Image from 'next/image';
import ServicePageLayout from '../../../components/ServicePageLayout';

const GeoFencingAdvertisingPage = () => {
  return (
    <ServicePageLayout
      title="GEO Fencing Advertising Services"
      description="Target customers with precision using location-based digital advertising"
      heroImage={getImagePath("/images/services/geo-fencing-advertising-hero.jpg")}
    >
      <div className="space-y-16">
        {/* Introduction */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Transform Your Business with GEO Fencing Advertising
          </h2>
          <p className="text-lg text-gray-600">
            Reach your ideal customers at the right place and the right time with precision location-based targeting. Our GEO fencing solutions create virtual boundaries that trigger targeted ads when potential customers enter specific locations.
          </p>
        </div>

        {/* Why Choose Mishji Section */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 lg:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Why Choose Mishji for GEO Fencing Advertising
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Precision Targeting</h3>
              <p className="text-gray-600">
                Industry-leading accuracy in location targeting with custom geo-fence creation.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Real-Time Analytics</h3>
              <p className="text-gray-600">
                Advanced tracking and reporting of customer movement patterns and engagement.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Dynamic Optimization</h3>
              <p className="text-gray-600">
                Continuous optimization of geo-fences and campaigns based on performance data.
              </p>
            </div>
          </div>
        </div>

        {/* How We Can Help Section */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="p-8 lg:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              How We Can Help With Your GEO Fencing Advertising
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
                    <h3 className="text-lg font-semibold text-gray-900">Custom Fence Creation</h3>
                    <p className="text-gray-600 mt-2">Strategic development of geo-fences around key locations and target areas.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-semibold">2</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Audience Targeting</h3>
                    <p className="text-gray-600 mt-2">Precise targeting based on location behavior and demographic data.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-semibold">3</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Campaign Creation</h3>
                    <p className="text-gray-600 mt-2">Development of engaging ad content tailored to location-specific audiences.</p>
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
                    <h3 className="text-lg font-semibold text-gray-900">Conversion Tracking</h3>
                    <p className="text-gray-600 mt-2">Advanced tracking of store visits, conversions, and customer actions.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-semibold">5</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Performance Analysis</h3>
                    <p className="text-gray-600 mt-2">Detailed analysis of campaign performance and customer behavior patterns.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-semibold">6</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Campaign Optimization</h3>
                    <p className="text-gray-600 mt-2">Continuous optimization of geo-fences and ad campaigns for maximum ROI.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Services Process */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <span className="text-blue-600 text-xl font-semibold">1</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Location Analysis</h3>
            <p className="text-gray-600">
              Strategic analysis of target locations and customer movement patterns.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <span className="text-blue-600 text-xl font-semibold">2</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Campaign Setup</h3>
            <p className="text-gray-600">
              Implementation of geo-fences and targeted advertising campaigns.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <span className="text-blue-600 text-xl font-semibold">3</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Optimization & Scaling</h3>
            <p className="text-gray-600">
              Continuous monitoring and optimization of campaign performance.
            </p>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
            <div className="relative h-[400px]">
              <Image
                src={getImagePath("/images/services/geo-fencing-advertising-benefits.jpg")}
                alt="GEO Fencing Advertising Benefits"
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
                    <h4 className="font-semibold text-gray-900">Hyper-Local Targeting</h4>
                    <p className="text-gray-600">Reach customers within specific geographic areas with precision.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-gray-900">Increased Foot Traffic</h4>
                    <p className="text-gray-600">Drive more physical visits to your business locations.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-gray-900">Better ROI</h4>
                    <p className="text-gray-600">Higher conversion rates through targeted location-based messaging.</p>
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
              <div className="text-3xl font-bold text-blue-600 mb-2">+70%</div>
              <div className="text-gray-600">Location accuracy</div>
            </div>
            <div className="bg-white p-6 rounded-xl">
              <div className="text-3xl font-bold text-blue-600 mb-2">+45%</div>
              <div className="text-gray-600">Store visits</div>
            </div>
            <div className="bg-white p-6 rounded-xl">
              <div className="text-3xl font-bold text-blue-600 mb-2">3.2x</div>
              <div className="text-gray-600">Conversion rate</div>
            </div>
            <div className="bg-white p-6 rounded-xl">
              <div className="text-3xl font-bold text-blue-600 mb-2">-25%</div>
              <div className="text-gray-600">Cost per conversion</div>
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
                  What is GEO fencing advertising?
                </h3>
                <p className="text-gray-600">
                  GEO fencing advertising creates virtual boundaries around specific locations to trigger targeted mobile ads when users enter or exit these areas.
                </p>
              </div>
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  How accurate is GEO fencing?
                </h3>
                <p className="text-gray-600">
                  Our GEO fencing technology provides accuracy up to 70% within a range of 100 meters, ensuring your ads reach the right audience at the right location.
                </p>
              </div>
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  What size should my geo-fence be?
                </h3>
                <p className="text-gray-600">
                  The optimal size depends on your business type and location, but typically ranges from 100 meters to 5 kilometers. We'll help determine the best size for your needs.
                </p>
              </div>
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  How do you measure success?
                </h3>
                <p className="text-gray-600">
                  We track key metrics including store visits, engagement rates, conversion rates, and return on ad spend to measure campaign success.
                </p>
              </div>
              <div className="pb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  What's the minimum budget needed?
                </h3>
                <p className="text-gray-600">
                  We recommend starting with a minimum budget of $1,000/month to effectively test different locations and gather meaningful data.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Target Local Customers?</h3>
          <p className="text-lg text-gray-600 mb-8">
            Let's create a GEO fencing strategy that drives foot traffic and increases conversions.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors">
            Get Started Today
          </button>
        </div>
      </div>
    </ServicePageLayout>
  );
};

export default GeoFencingAdvertisingPage; 