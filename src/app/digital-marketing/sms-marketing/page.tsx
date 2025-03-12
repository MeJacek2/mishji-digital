'use client';

import React from 'react';
import Image from 'next/image';
import ServicePageLayout from '../../../components/ServicePageLayout';

const SMSMarketingPage = () => {
  return (
    <ServicePageLayout
      title="SMS Marketing Services"
      description="Drive instant engagement with targeted SMS marketing campaigns"
      heroImage={getImagePath("/images/services/sms-marketing-hero.jpg")}
    >
      <div className="space-y-16">
        {/* Introduction */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Transform Your Business with SMS Marketing
          </h2>
          <p className="text-lg text-gray-600">
            Reach your customers instantly with personalized SMS campaigns that drive engagement and conversions. Our SMS marketing solutions ensure your messages reach the right audience at the right time.
          </p>
        </div>

        {/* Why Choose Mishji Section */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 lg:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Why Choose Mishji for SMS Marketing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">High Deliverability</h3>
              <p className="text-gray-600">
                Industry-leading delivery rates with direct carrier connections and advanced routing technology.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Smart Segmentation</h3>
              <p className="text-gray-600">
                Advanced targeting capabilities to segment your audience for personalized messaging and better engagement.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Compliance Assured</h3>
              <p className="text-gray-600">
                Full compliance with TCPA regulations and industry best practices for SMS marketing.
              </p>
            </div>
          </div>
        </div>

        {/* How We Can Help Section */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="p-8 lg:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              How We Can Help With Your SMS Marketing
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
                    <h3 className="text-lg font-semibold text-gray-900">Campaign Strategy</h3>
                    <p className="text-gray-600 mt-2">Development of targeted SMS campaigns aligned with your business objectives.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-semibold">2</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">List Management</h3>
                    <p className="text-gray-600 mt-2">Professional handling of subscriber lists with proper opt-in/opt-out management.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-semibold">3</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Message Creation</h3>
                    <p className="text-gray-600 mt-2">Crafting compelling SMS content that drives action while staying within character limits.</p>
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
                    <h3 className="text-lg font-semibold text-gray-900">Automation Setup</h3>
                    <p className="text-gray-600 mt-2">Implementation of automated SMS workflows for timely message delivery.</p>
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
                    <p className="text-gray-600 mt-2">Detailed analytics and reporting on delivery rates, engagement, and conversions.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-semibold">6</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Compliance Management</h3>
                    <p className="text-gray-600 mt-2">Ensuring all campaigns comply with relevant regulations and best practices.</p>
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
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Strategy Development</h3>
            <p className="text-gray-600">
              Creating a comprehensive SMS marketing strategy tailored to your business goals and target audience.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <span className="text-blue-600 text-xl font-semibold">2</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Campaign Execution</h3>
            <p className="text-gray-600">
              Professional implementation of SMS campaigns with proper timing and targeting.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <span className="text-blue-600 text-xl font-semibold">3</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Optimization & Analysis</h3>
            <p className="text-gray-600">
              Continuous monitoring and optimization of campaigns based on performance data.
            </p>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
            <div className="relative h-[400px]">
              <Image
                src={getImagePath("/images/services/sms-marketing-benefits.jpg")}
                alt="SMS Marketing Benefits"
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
                    <h4 className="font-semibold text-gray-900">Instant Delivery</h4>
                    <p className="text-gray-600">Reach your audience immediately with time-sensitive messages and offers.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-gray-900">High Open Rates</h4>
                    <p className="text-gray-600">SMS messages have a 98% open rate, ensuring your message gets seen.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-gray-900">Direct Response</h4>
                    <p className="text-gray-600">Generate immediate customer responses and actions through SMS campaigns.</p>
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
              <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
              <div className="text-gray-600">Average open rate</div>
            </div>
            <div className="bg-white p-6 rounded-xl">
              <div className="text-3xl font-bold text-blue-600 mb-2">45%</div>
              <div className="text-gray-600">Average click-through rate</div>
            </div>
            <div className="bg-white p-6 rounded-xl">
              <div className="text-3xl font-bold text-blue-600 mb-2">+250%</div>
              <div className="text-gray-600">Increase in engagement</div>
            </div>
            <div className="bg-white p-6 rounded-xl">
              <div className="text-3xl font-bold text-blue-600 mb-2">19%</div>
              <div className="text-gray-600">Average conversion rate</div>
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
                  Is SMS marketing still effective?
                </h3>
                <p className="text-gray-600">
                  Yes, SMS marketing remains one of the most effective channels with a 98% open rate and high engagement levels. It's particularly effective for time-sensitive offers and important updates.
                </p>
              </div>
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  How do you ensure compliance with SMS regulations?
                </h3>
                <p className="text-gray-600">
                  We follow all TCPA guidelines, maintain proper opt-in/opt-out processes, and ensure message timing and frequency comply with industry regulations. Our team stays updated with the latest compliance requirements.
                </p>
              </div>
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  What types of messages work best for SMS marketing?
                </h3>
                <p className="text-gray-600">
                  Short, action-oriented messages work best for SMS. This includes limited-time offers, appointment reminders, order updates, and exclusive promotions. We help craft messages that drive engagement while staying within character limits.
                </p>
              </div>
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  How do you measure SMS campaign success?
                </h3>
                <p className="text-gray-600">
                  We track key metrics including delivery rates, open rates, click-through rates, conversion rates, and ROI. Regular reporting helps optimize campaigns for better performance.
                </p>
              </div>
              <div className="pb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  How often should we send SMS messages?
                </h3>
                <p className="text-gray-600">
                  The optimal frequency depends on your industry and audience preferences. We help determine the best timing and frequency based on data analysis and industry benchmarks to maximize engagement without causing subscriber fatigue.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Start SMS Marketing?</h3>
          <p className="text-lg text-gray-600 mb-8">
            Let's create a powerful SMS marketing strategy that connects with your audience and drives results.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors">
            Get Started Today
          </button>
        </div>
      </div>
    </ServicePageLayout>
  );
};

export default SMSMarketingPage; 