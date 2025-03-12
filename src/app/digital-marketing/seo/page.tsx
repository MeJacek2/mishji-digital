import { getImagePath } from '../../../utils/imagePath';
import React from 'react';
import Image from 'next/image';
import ServicePageLayout from '../../../components/ServicePageLayout';

const SEOPage = () => {
  return (
    <ServicePageLayout
      title="Search Engine Optimization Services"
      description="Drive organic traffic and improve search rankings with data-driven SEO strategies"
      heroImage={getImagePath("/images/services/seo-hero.jpg")}
    >
      <div className="space-y-16">
        {/* Introduction */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Transform Your Online Visibility with Strategic SEO
          </h2>
          <p className="text-lg text-gray-600">
            Improve your search engine rankings and drive sustainable organic traffic with our comprehensive SEO solutions. We combine technical expertise, content strategy, and data-driven optimization to help your business dominate search results.
          </p>
        </div>

        {/* Why Choose Mishji Section */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 lg:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Why Choose Mishji for SEO
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Data-Driven Approach</h3>
              <p className="text-gray-600">
                Strategic decisions backed by comprehensive analytics and research.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Technical Excellence</h3>
              <p className="text-gray-600">
                Advanced technical SEO optimization and implementation.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Content Strategy</h3>
              <p className="text-gray-600">
                SEO-optimized content that engages users and search engines.
              </p>
            </div>
          </div>
        </div>

        {/* SEO Services Section */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="p-8 lg:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Comprehensive SEO Solutions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-6 border border-gray-200 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Technical SEO</h3>
                <p className="text-gray-600">Site architecture, speed optimization, and technical improvements.</p>
              </div>
              <div className="p-6 border border-gray-200 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">On-Page SEO</h3>
                <p className="text-gray-600">Content optimization, meta tags, and internal linking strategy.</p>
              </div>
              <div className="p-6 border border-gray-200 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Off-Page SEO</h3>
                <p className="text-gray-600">Link building, brand mentions, and authority building.</p>
              </div>
              <div className="p-6 border border-gray-200 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Local SEO</h3>
                <p className="text-gray-600">Local search optimization and Google Business Profile management.</p>
              </div>
              <div className="p-6 border border-gray-200 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Content Strategy</h3>
                <p className="text-gray-600">Keyword research, content planning, and optimization.</p>
              </div>
              <div className="p-6 border border-gray-200 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">E-commerce SEO</h3>
                <p className="text-gray-600">Product optimization, category pages, and schema markup.</p>
              </div>
            </div>
          </div>
        </div>

        {/* How We Can Help Section */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="p-8 lg:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Our SEO Process
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
                    <h3 className="text-lg font-semibold text-gray-900">Technical Audit</h3>
                    <p className="text-gray-600 mt-2">Comprehensive analysis of your website's technical SEO elements.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-semibold">2</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Keyword Research</h3>
                    <p className="text-gray-600 mt-2">In-depth analysis of target keywords and search intent.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-semibold">3</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Strategy Development</h3>
                    <p className="text-gray-600 mt-2">Custom SEO strategy aligned with your business goals.</p>
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
                    <h3 className="text-lg font-semibold text-gray-900">Implementation</h3>
                    <p className="text-gray-600 mt-2">Execution of technical improvements and content optimization.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-semibold">5</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Content Creation</h3>
                    <p className="text-gray-600 mt-2">Development of SEO-optimized content that converts.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-semibold">6</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Monitoring & Optimization</h3>
                    <p className="text-gray-600 mt-2">Continuous tracking and improvement of SEO performance.</p>
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
              Advanced SEO Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-6 border border-gray-200 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">AI-Powered Analysis</h3>
                <p className="text-gray-600">Advanced algorithms for keyword and content optimization.</p>
              </div>
              <div className="p-6 border border-gray-200 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Competitor Analysis</h3>
                <p className="text-gray-600">In-depth analysis of competitor strategies and rankings.</p>
              </div>
              <div className="p-6 border border-gray-200 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Real-Time Tracking</h3>
                <p className="text-gray-600">Continuous monitoring of rankings and performance.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
            <div className="relative h-[400px]">
              <Image
                src={getImagePath("/images/services/seo-benefits.jpg")}
                alt="SEO Benefits"
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
                    <h4 className="font-semibold text-gray-900">Sustainable Traffic Growth</h4>
                    <p className="text-gray-600">Long-term organic traffic that continues to grow.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-gray-900">Higher Quality Leads</h4>
                    <p className="text-gray-600">Targeted traffic that's more likely to convert.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-gray-900">Brand Authority</h4>
                    <p className="text-gray-600">Improved online presence and industry authority.</p>
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
              <div className="text-3xl font-bold text-blue-600 mb-2">+150%</div>
              <div className="text-gray-600">Organic traffic</div>
            </div>
            <div className="bg-white p-6 rounded-xl">
              <div className="text-3xl font-bold text-blue-600 mb-2">Top 3</div>
              <div className="text-gray-600">Search rankings</div>
            </div>
            <div className="bg-white p-6 rounded-xl">
              <div className="text-3xl font-bold text-blue-600 mb-2">+80%</div>
              <div className="text-gray-600">Click-through rate</div>
            </div>
            <div className="bg-white p-6 rounded-xl">
              <div className="text-3xl font-bold text-blue-600 mb-2">5x</div>
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
                  How long does it take to see SEO results?
                </h3>
                <p className="text-gray-600">
                  While initial improvements can be seen in 3-6 months, significant results typically develop over 6-12 months as search engines recognize and reward your optimizations.
                </p>
              </div>
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  What's included in your SEO services?
                </h3>
                <p className="text-gray-600">
                  Our services include technical SEO, on-page optimization, content strategy, link building, local SEO, and comprehensive performance tracking.
                </p>
              </div>
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  How do you measure SEO success?
                </h3>
                <p className="text-gray-600">
                  We track key metrics including organic traffic, keyword rankings, conversion rates, backlink quality, and ROI to measure success.
                </p>
              </div>
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Do you guarantee first page rankings?
                </h3>
                <p className="text-gray-600">
                  While we can't guarantee specific rankings due to search engine algorithms, we have a proven track record of achieving significant ranking improvements for our clients.
                </p>
              </div>
              <div className="pb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  What's the minimum budget needed?
                </h3>
                <p className="text-gray-600">
                  We recommend starting with a minimum budget of $2,000/month for comprehensive SEO services and strategy implementation.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Improve Your Search Rankings?</h3>
          <p className="text-lg text-gray-600 mb-8">
            Let's create an SEO strategy that drives sustainable growth for your business.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors">
            Get Started Today
          </button>
        </div>
      </div>
    </ServicePageLayout>
  );
};

export default SEOPage; 