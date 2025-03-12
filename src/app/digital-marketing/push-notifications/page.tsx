import React from 'react';
import Image from 'next/image';
import ServicePageLayout from '../../../components/ServicePageLayout';

const PushNotificationsPage = () => {
  return (
    <ServicePageLayout
      title="Push Notification Services"
      description="Drive engagement and retention with strategic push notification campaigns"
      heroImage="/images/services/push-notifications-hero.jpg"
    >
      <div className="space-y-16">
        {/* Introduction */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Transform Your Customer Engagement with Push Notifications
          </h2>
          <p className="text-lg text-gray-600">
            Reach your audience instantly with personalized push notifications that drive engagement, retention, and conversions. Our strategic approach combines behavioral targeting, compelling content, and perfect timing to deliver messages that resonate with your users.
          </p>
        </div>

        {/* Why Choose Mishji Section */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 lg:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Why Choose Mishji for Push Notifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Behavioral Targeting</h3>
              <p className="text-gray-600">
                Advanced user segmentation based on behavior and preferences.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Perfect Timing</h3>
              <p className="text-gray-600">
                AI-powered delivery optimization for maximum engagement.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Proven Results</h3>
              <p className="text-gray-600">
                Data-driven strategies that deliver measurable outcomes.
              </p>
            </div>
          </div>
        </div>

        {/* Notification Types Section */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="p-8 lg:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Push Notification Types
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-6 border border-gray-200 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Promotional Notifications</h3>
                <p className="text-gray-600">Special offers, discounts, and limited-time deals.</p>
              </div>
              <div className="p-6 border border-gray-200 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Transactional Updates</h3>
                <p className="text-gray-600">Order confirmations, shipping updates, and account alerts.</p>
              </div>
              <div className="p-6 border border-gray-200 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Behavioral Triggers</h3>
                <p className="text-gray-600">Cart abandonment, browsing history, and engagement-based notifications.</p>
              </div>
              <div className="p-6 border border-gray-200 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Content Updates</h3>
                <p className="text-gray-600">New blog posts, product launches, and feature announcements.</p>
              </div>
              <div className="p-6 border border-gray-200 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Re-engagement Campaigns</h3>
                <p className="text-gray-600">Personalized messages to bring back inactive users.</p>
              </div>
              <div className="p-6 border border-gray-200 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Location-Based Alerts</h3>
                <p className="text-gray-600">Geo-targeted notifications for local offers and events.</p>
              </div>
            </div>
          </div>
        </div>

        {/* How We Can Help Section */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="p-8 lg:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Comprehensive Push Notification Solutions
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
                    <p className="text-gray-600 mt-2">Custom notification strategies aligned with your business goals.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-semibold">2</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Audience Segmentation</h3>
                    <p className="text-gray-600 mt-2">Advanced targeting based on behavior and preferences.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-semibold">3</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Content Creation</h3>
                    <p className="text-gray-600 mt-2">Compelling notification copy that drives action.</p>
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
                    <h3 className="text-lg font-semibold text-gray-900">A/B Testing</h3>
                    <p className="text-gray-600 mt-2">Continuous optimization of message content and timing.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-semibold">5</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Performance Analytics</h3>
                    <p className="text-gray-600 mt-2">Detailed tracking of engagement and conversion metrics.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-semibold">6</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Campaign Automation</h3>
                    <p className="text-gray-600 mt-2">Automated triggers and personalized notification flows.</p>
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
              Advanced Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-6 border border-gray-200 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Smart Timing</h3>
                <p className="text-gray-600">AI-powered delivery optimization based on user activity patterns.</p>
              </div>
              <div className="p-6 border border-gray-200 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Rich Media</h3>
                <p className="text-gray-600">Support for images, emoji, and interactive elements.</p>
              </div>
              <div className="p-6 border border-gray-200 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Dynamic Content</h3>
                <p className="text-gray-600">Personalized content based on user data and behavior.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
            <div className="relative h-[400px]">
              <Image
                src="/images/services/push-notifications-benefits.jpg"
                alt="Push Notifications Benefits"
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
                    <h4 className="font-semibold text-gray-900">Instant Engagement</h4>
                    <p className="text-gray-600">Direct communication channel to reach users instantly.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-gray-900">Higher Retention</h4>
                    <p className="text-gray-600">Keep users engaged and coming back to your platform.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-gray-900">Increased Conversions</h4>
                    <p className="text-gray-600">Drive immediate action with timely notifications.</p>
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
              <div className="text-3xl font-bold text-blue-600 mb-2">+85%</div>
              <div className="text-gray-600">Open rate</div>
            </div>
            <div className="bg-white p-6 rounded-xl">
              <div className="text-3xl font-bold text-blue-600 mb-2">+65%</div>
              <div className="text-gray-600">Click-through rate</div>
            </div>
            <div className="bg-white p-6 rounded-xl">
              <div className="text-3xl font-bold text-blue-600 mb-2">+40%</div>
              <div className="text-gray-600">User retention</div>
            </div>
            <div className="bg-white p-6 rounded-xl">
              <div className="text-3xl font-bold text-blue-600 mb-2">3x</div>
              <div className="text-gray-600">Conversion increase</div>
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
                  How often should we send push notifications?
                </h3>
                <p className="text-gray-600">
                  The optimal frequency depends on your audience and content type, but we typically recommend 2-3 notifications per week to maintain engagement without causing fatigue.
                </p>
              </div>
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  How do you measure push notification success?
                </h3>
                <p className="text-gray-600">
                  We track key metrics including delivery rates, open rates, click-through rates, conversion rates, and user retention to measure campaign success.
                </p>
              </div>
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  What platforms do you support?
                </h3>
                <p className="text-gray-600">
                  We support all major platforms including iOS, Android, web browsers, and desktop applications.
                </p>
              </div>
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  How do you handle user privacy?
                </h3>
                <p className="text-gray-600">
                  We follow strict data protection guidelines and ensure all notifications comply with GDPR, CCPA, and other privacy regulations.
                </p>
              </div>
              <div className="pb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  What's the minimum budget needed?
                </h3>
                <p className="text-gray-600">
                  We recommend starting with a minimum budget of $1,500/month for comprehensive push notification strategy and management.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Transform Your Push Notification Strategy?</h3>
          <p className="text-lg text-gray-600 mb-8">
            Let's create engaging push notifications that drive results for your business.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors">
            Get Started Today
          </button>
        </div>
      </div>
    </ServicePageLayout>
  );
};

export default PushNotificationsPage; 