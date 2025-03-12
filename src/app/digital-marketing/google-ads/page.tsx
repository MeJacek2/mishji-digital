'use client';
import { getImagePath } from '../../../utils/imagePath';

import React from 'react';
import Image from 'next/image';
import ServicePageLayout from '../../../components/ServicePageLayout';

const GoogleAdsPage = () => {
  return (
    <ServicePageLayout
      title="Google Ads Services"
      description="Drive targeted traffic and maximize ROI with data-driven Google Ads campaigns"
      heroImage={getImagePath("/images/services/google-ads-hero.jpg")}
    >
      <div className="space-y-16">
        {/* Introduction */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Transform Your Business with Google Ads
          </h2>
          <p className="text-lg text-gray-600">
            Harness the power of Google's advertising platform to reach potential customers at the exact moment they're searching for your products or services. Our data-driven approach ensures maximum return on your advertising investment.
          </p>
        </div>

        {/* Why Choose Mishji Section */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 lg:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Why Choose Mishji for Google Ads
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Google Ads Expertise</h3>
              <p className="text-gray-600">
                Our team consists of certified Google Ads professionals with years of experience managing successful campaigns across various industries.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Data-Driven Approach</h3>
              <p className="text-gray-600">
                We make decisions based on comprehensive data analysis, ensuring every dollar of your ad spend is optimized for maximum returns.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Dedicated Support</h3>
              <p className="text-gray-600">
                Get personalized attention from a dedicated account manager who understands your business goals and industry challenges.
              </p>
            </div>
          </div>
        </div>

        {/* How We Can Help Section */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="p-8 lg:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              How We Can Help With Your Google Ads
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
                    <h3 className="text-lg font-semibold text-gray-900">Account Setup & Optimization</h3>
                    <p className="text-gray-600 mt-2">Professional account structure and campaign setup with ongoing optimization for peak performance.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-semibold">2</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Keyword Research & Strategy</h3>
                    <p className="text-gray-600 mt-2">Comprehensive keyword research and strategic planning to target your ideal customers.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-semibold">3</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Ad Copy Creation</h3>
                    <p className="text-gray-600 mt-2">Compelling ad copy that drives clicks and conversions while maintaining brand voice.</p>
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
                    <h3 className="text-lg font-semibold text-gray-900">Landing Page Optimization</h3>
                    <p className="text-gray-600 mt-2">Conversion-focused landing page recommendations and optimization strategies.</p>
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
                    <p className="text-gray-600 mt-2">Detailed reporting and analytics to track campaign performance and ROI.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-semibold">6</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Competitor Analysis</h3>
                    <p className="text-gray-600 mt-2">Regular competitor monitoring and strategy adjustments to stay ahead.</p>
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
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Campaign Strategy</h3>
            <p className="text-gray-600">
              In-depth market research, keyword analysis, and competitor assessment to develop a targeted campaign strategy aligned with your business goals.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <span className="text-blue-600 text-xl font-semibold">2</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Campaign Setup</h3>
            <p className="text-gray-600">
              Professional account structure, compelling ad copy creation, and advanced tracking implementation for comprehensive performance monitoring.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <span className="text-blue-600 text-xl font-semibold">3</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Optimization & Scaling</h3>
            <p className="text-gray-600">
              Continuous performance monitoring, A/B testing, and data-driven optimizations to improve campaign effectiveness and ROI.
            </p>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
            <div className="relative h-[400px]">
              <Image
                src={getImagePath("/images/services/google-ads-benefits.jpg")}
                alt="Google Ads Benefits"
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
                    <h4 className="font-semibold text-gray-900">Immediate Results</h4>
                    <p className="text-gray-600">Start generating leads and sales as soon as your campaigns go live.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-gray-900">Precise Targeting</h4>
                    <p className="text-gray-600">Reach potential customers based on search intent, location, demographics, and more.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-gray-900">Measurable ROI</h4>
                    <p className="text-gray-600">Track every click, conversion, and penny spent with detailed analytics and reporting.</p>
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
              <div className="text-3xl font-bold text-blue-600 mb-2">300%</div>
              <div className="text-gray-600">Average ROI for optimized campaigns</div>
            </div>
            <div className="bg-white p-6 rounded-xl">
              <div className="text-3xl font-bold text-blue-600 mb-2">-25%</div>
              <div className="text-gray-600">Reduction in cost per acquisition</div>
            </div>
            <div className="bg-white p-6 rounded-xl">
              <div className="text-3xl font-bold text-blue-600 mb-2">+150%</div>
              <div className="text-gray-600">Increase in qualified leads</div>
            </div>
            <div className="bg-white p-6 rounded-xl">
              <div className="text-3xl font-bold text-blue-600 mb-2">+200%</div>
              <div className="text-gray-600">Improvement in click-through rate</div>
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
                  How long does it take to see results from Google Ads?
                </h3>
                <p className="text-gray-600">
                  While you can start seeing clicks and impressions immediately, it typically takes 2-3 months to optimize campaigns for best performance and ROI. We continuously monitor and adjust campaigns based on data to improve results over time.
                </p>
              </div>
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  What budget do I need for Google Ads?
                </h3>
                <p className="text-gray-600">
                  The recommended budget varies by industry and competition level. We typically suggest starting with a minimum monthly budget of $1,000 to gather sufficient data for optimization. We'll help you determine the ideal budget based on your goals and market analysis.
                </p>
              </div>
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  How do you measure campaign success?
                </h3>
                <p className="text-gray-600">
                  We track multiple KPIs including click-through rate (CTR), conversion rate, cost per conversion, return on ad spend (ROAS), and quality score. We provide regular reports showing these metrics and their impact on your business goals.
                </p>
              </div>
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Can you work with my existing Google Ads account?
                </h3>
                <p className="text-gray-600">
                  Yes, we can work with your existing account. We'll perform a comprehensive audit and implement improvements while maintaining your historical data and quality scores.
                </p>
              </div>
              <div className="pb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  What makes your Google Ads service different?
                </h3>
                <p className="text-gray-600">
                  We combine industry expertise with data-driven strategies, transparent reporting, and personalized service. Our team stays updated with the latest Google Ads features and best practices to ensure your campaigns perform at their best.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Grow Your Business?</h3>
          <p className="text-lg text-gray-600 mb-8">
            Let's create a customized Google Ads strategy that drives results for your business.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors">
            Get Started Today
          </button>
        </div>
      </div>
    </ServicePageLayout>
  );
};

export default GoogleAdsPage; 
