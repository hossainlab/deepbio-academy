'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  GraduationCap, Mail, Phone, MapPin, Cookie, Settings, Eye, 
  BarChart3, Globe, Shield, ArrowLeft, CheckCircle, X
} from 'lucide-react';

export default function CookiePolicy() {
  const lastUpdated = "January 15, 2024";

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="flex items-center space-x-4">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                  <GraduationCap className="w-7 h-7 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900 tracking-tight">BCB Program</h1>
                <p className="text-sm text-gray-600 font-medium">DeepBio University</p>
              </div>
            </Link>

            <Link 
              href="/"
              className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 font-medium transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center mb-6">
              <div className="p-4 bg-blue-600 rounded-full">
                <Cookie className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Cookie Policy
            </h1>
            <p className="text-xl text-gray-600 mb-4">
              Learn how we use cookies and similar technologies to enhance your experience on our website.
            </p>
            <p className="text-sm text-gray-500">
              Last updated: {lastUpdated}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-12"
            >
              {/* What Are Cookies */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Cookie className="w-6 h-6 text-orange-600 mr-3" />
                  What Are Cookies?
                </h2>
                <div className="bg-orange-50 rounded-xl p-6">
                  <p className="text-gray-700 mb-4">
                    Cookies are small text files that are placed on your computer or mobile device when you visit a website. 
                    They are widely used to make websites work more efficiently and provide information to website owners.
                  </p>
                  <div className="bg-white rounded-lg p-4 border-l-4 border-orange-500">
                    <p className="text-sm text-gray-700">
                      <strong>Note:</strong> Cookies cannot harm your computer and do not contain any personal information until you provide it.
                    </p>
                  </div>
                </div>
              </div>

              {/* Types of Cookies */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Settings className="w-6 h-6 text-blue-600 mr-3" />
                  Types of Cookies We Use
                </h2>
                <div className="grid gap-6">
                  <div className="bg-blue-50 rounded-xl p-6">
                    <div className="flex items-center mb-4">
                      <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                      <h3 className="text-lg font-semibold text-gray-900">Essential Cookies</h3>
                      <span className="ml-auto px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">Always Active</span>
                    </div>
                    <p className="text-gray-700 mb-3">
                      These cookies are necessary for the website to function and cannot be disabled. They are usually set in response to actions made by you.
                    </p>
                    <div className="bg-white rounded-lg p-4">
                      <h4 className="font-medium text-gray-900 mb-2">Examples:</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Authentication and security</li>
                        <li>• Session management</li>
                        <li>• Form submissions</li>
                        <li>• Shopping cart functionality</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-purple-50 rounded-xl p-6">
                    <div className="flex items-center mb-4">
                      <BarChart3 className="w-6 h-6 text-purple-500 mr-3" />
                      <h3 className="text-lg font-semibold text-gray-900">Analytics Cookies</h3>
                      <span className="ml-auto px-3 py-1 bg-purple-100 text-purple-800 text-xs font-medium rounded-full">Optional</span>
                    </div>
                    <p className="text-gray-700 mb-3">
                      These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.
                    </p>
                    <div className="bg-white rounded-lg p-4">
                      <h4 className="font-medium text-gray-900 mb-2">We use:</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Google Analytics</li>
                        <li>• Page view statistics</li>
                        <li>• User behavior analysis</li>
                        <li>• Performance monitoring</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-green-50 rounded-xl p-6">
                    <div className="flex items-center mb-4">
                      <Settings className="w-6 h-6 text-green-500 mr-3" />
                      <h3 className="text-lg font-semibold text-gray-900">Functional Cookies</h3>
                      <span className="ml-auto px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">Optional</span>
                    </div>
                    <p className="text-gray-700 mb-3">
                      These cookies enable enhanced functionality and personalization, such as remembering your preferences.
                    </p>
                    <div className="bg-white rounded-lg p-4">
                      <h4 className="font-medium text-gray-900 mb-2">Features:</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Language preferences</li>
                        <li>• Theme settings</li>
                        <li>• Form auto-fill</li>
                        <li>• Customized content</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-yellow-50 rounded-xl p-6">
                    <div className="flex items-center mb-4">
                      <Globe className="w-6 h-6 text-yellow-500 mr-3" />
                      <h3 className="text-lg font-semibold text-gray-900">Marketing Cookies</h3>
                      <span className="ml-auto px-3 py-1 bg-yellow-100 text-yellow-800 text-xs font-medium rounded-full">Optional</span>
                    </div>
                    <p className="text-gray-700 mb-3">
                      These cookies are used to track visitors across websites and display relevant advertisements.
                    </p>
                    <div className="bg-white rounded-lg p-4">
                      <h4 className="font-medium text-gray-900 mb-2">Used for:</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Targeted advertising</li>
                        <li>• Social media integration</li>
                        <li>• Cross-platform tracking</li>
                        <li>• Remarketing campaigns</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Third-Party Cookies */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Eye className="w-6 h-6 text-indigo-600 mr-3" />
                  Third-Party Cookies and Services
                </h2>
                <div className="bg-indigo-50 rounded-xl p-6">
                  <p className="text-gray-700 mb-6">
                    We use several third-party services that may set their own cookies. These services help us provide better functionality and understand our audience.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white rounded-lg p-4 border border-indigo-200">
                      <h3 className="font-semibold text-gray-900 mb-3">Analytics Services</h3>
                      <div className="space-y-3">
                        <div>
                          <h4 className="text-sm font-medium text-gray-800">Google Analytics</h4>
                          <p className="text-xs text-gray-600">Tracks website usage and user behavior</p>
                          <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:underline">Privacy Policy</a>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white rounded-lg p-4 border border-indigo-200">
                      <h3 className="font-semibold text-gray-900 mb-3">Social Media</h3>
                      <div className="space-y-3">
                        <div>
                          <h4 className="text-sm font-medium text-gray-800">LinkedIn</h4>
                          <p className="text-xs text-gray-600">Social sharing and professional networking</p>
                          <a href="https://www.linkedin.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:underline">Privacy Policy</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Managing Cookies */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Settings className="w-6 h-6 text-green-600 mr-3" />
                  Managing Your Cookie Preferences
                </h2>
                <div className="bg-green-50 rounded-xl p-6">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Browser Settings</h3>
                      <p className="text-gray-700 mb-4">
                        You can control and manage cookies in various ways. Most browsers allow you to:
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-white rounded-lg p-4">
                          <h4 className="font-medium text-gray-900 mb-2">Cookie Controls</h4>
                          <ul className="text-sm text-gray-700 space-y-1">
                            <li>• Block all cookies</li>
                            <li>• Block third-party cookies</li>
                            <li>• Clear existing cookies</li>
                            <li>• Set cookie expiration</li>
                          </ul>
                        </div>
                        <div className="bg-white rounded-lg p-4">
                          <h4 className="font-medium text-gray-900 mb-2">Browser Help</h4>
                          <ul className="text-sm text-gray-700 space-y-1">
                            <li>• <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Chrome</a></li>
                            <li>• <a href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Firefox</a></li>
                            <li>• <a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Safari</a></li>
                            <li>• <a href="https://support.microsoft.com/en-us/topic/delete-and-manage-cookies-168dab11-0753-043d-7c16-ede5947fc64d" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Edge</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white rounded-lg p-4 border-l-4 border-yellow-500">
                      <h4 className="font-medium text-gray-900 mb-2 flex items-center">
                        <span className="text-yellow-500 mr-2">⚠️</span>
                        Important Note
                      </h4>
                      <p className="text-sm text-gray-700">
                        Blocking or deleting cookies may impact your experience on our website. Some features may not work properly without certain cookies enabled.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Cookie Consent */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Shield className="w-6 h-6 text-purple-600 mr-3" />
                  Cookie Consent and Your Choices
                </h2>
                <div className="bg-purple-50 rounded-xl p-6">
                  <div className="space-y-4">
                    <div className="bg-white rounded-lg p-4 border-l-4 border-green-500">
                      <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                        Consent Management
                      </h3>
                      <p className="text-sm text-gray-700 mb-3">
                        When you first visit our website, you'll see a cookie consent banner. You can choose which categories of cookies to accept:
                      </p>
                      <ul className="text-sm text-gray-700 space-y-1 ml-4">
                        <li>• Accept all cookies for the full experience</li>
                        <li>• Choose specific categories to customize your preferences</li>
                        <li>• Reject non-essential cookies (some features may be limited)</li>
                        <li>• Change your preferences at any time</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white rounded-lg p-4 border-l-4 border-blue-500">
                      <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                        <Settings className="w-5 h-5 text-blue-500 mr-2" />
                        Update Preferences
                      </h3>
                      <p className="text-sm text-gray-700">
                        You can update your cookie preferences at any time by clicking the "Cookie Settings" link in our website footer or by clearing your browser cookies and revisiting our site.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Data Retention */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Cookie Data Retention</h2>
                <div className="bg-gray-100 rounded-xl p-6">
                  <p className="text-gray-700 mb-4">
                    Different cookies have different lifespans:
                  </p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-white rounded-lg p-4 text-center">
                      <h3 className="font-semibold text-gray-900 mb-2">Session Cookies</h3>
                      <p className="text-2xl font-bold text-blue-600 mb-1">Browser Session</p>
                      <p className="text-xs text-gray-600">Deleted when you close your browser</p>
                    </div>
                    <div className="bg-white rounded-lg p-4 text-center">
                      <h3 className="font-semibold text-gray-900 mb-2">Short-term Cookies</h3>
                      <p className="text-2xl font-bold text-green-600 mb-1">1-30 Days</p>
                      <p className="text-xs text-gray-600">For temporary preferences and features</p>
                    </div>
                    <div className="bg-white rounded-lg p-4 text-center">
                      <h3 className="font-semibold text-gray-900 mb-2">Long-term Cookies</h3>
                      <p className="text-2xl font-bold text-orange-600 mb-1">1-2 Years</p>
                      <p className="text-xs text-gray-600">For analytics and persistent preferences</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Questions About Cookies</h2>
                <div className="bg-gray-100 rounded-xl p-6">
                  <p className="text-gray-700 mb-4">
                    If you have any questions about our use of cookies or this Cookie Policy, please contact us:
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-blue-600" />
                      <span className="text-gray-700">privacy@deepbio.edu</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-blue-600" />
                      <span className="text-gray-700">+880-XXX-XXXXX</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-5 h-5 text-blue-600" />
                      <span className="text-gray-700">DeepBio University, Dhaka, Bangladesh</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Updates to Policy */}
              <div className="border-t border-gray-200 pt-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Updates to This Policy</h2>
                <p className="text-gray-700">
                  We may update this Cookie Policy from time to time to reflect changes in our practices, technology, or legal requirements. 
                  When we make changes, we will update the "Last updated" date at the top of this page. We encourage you to review this policy periodically to stay informed about our use of cookies.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="col-span-2">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                  <GraduationCap className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">BCB Program</h3>
                  <p className="text-sm text-gray-400">DeepBio University</p>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6">
                Transforming the next generation of computational biologists through world-class education, 
                cutting-edge research, and industry partnerships.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3 text-gray-400">
                <li><Link href="/curriculum" className="hover:text-white transition-colors">Curriculum</Link></li>
                <li><Link href="/admissions" className="hover:text-white transition-colors">Admissions</Link></li>
                <li><Link href="/faculty" className="hover:text-white transition-colors">Faculty</Link></li>
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6">Contact</h4>
              <div className="space-y-4 text-gray-400">
                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <div>
                    <p>admissions@deepbio.edu</p>
                    <p>info@deepbio.edu</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <p>+880-XXX-XXXXX</p>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <p>Dhaka, Bangladesh</p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; 2024 DeepBio University. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 sm:mt-0 text-sm text-gray-400">
              <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
              <Link href="/cookie-policy" className="hover:text-white transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}