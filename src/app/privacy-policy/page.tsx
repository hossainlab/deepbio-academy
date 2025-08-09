'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  GraduationCap, Mail, Phone, MapPin, Shield, Lock, Eye, 
  FileText, Users, Clock, ArrowLeft
} from 'lucide-react';

export default function PrivacyPolicy() {
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
                <Shield className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-600 mb-4">
              Your privacy is important to us. This policy explains how we collect, use, and protect your information.
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
              {/* Information We Collect */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Eye className="w-6 h-6 text-blue-600 mr-3" />
                  Information We Collect
                </h2>
                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Personal Information</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Name, email address, phone number, and mailing address</li>
                    <li>• Educational background and academic transcripts</li>
                    <li>• Professional experience and career information</li>
                    <li>• Application materials and supporting documents</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Technical Information</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• IP address, browser type, and device information</li>
                    <li>• Website usage data and navigation patterns</li>
                    <li>• Cookies and similar tracking technologies</li>
                    <li>• Log files and server data</li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Academic Information</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Course enrollment and academic performance</li>
                    <li>• Assignment submissions and project work</li>
                    <li>• Participation in program activities</li>
                    <li>• Communication with faculty and staff</li>
                  </ul>
                </div>
              </div>

              {/* How We Use Your Information */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <FileText className="w-6 h-6 text-green-600 mr-3" />
                  How We Use Your Information
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-green-50 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Educational Purposes</h3>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• Processing applications and admissions</li>
                      <li>• Providing educational services and support</li>
                      <li>• Academic progress tracking and assessment</li>
                      <li>• Career guidance and placement services</li>
                    </ul>
                  </div>
                  
                  <div className="bg-blue-50 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Communication</h3>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• Program updates and announcements</li>
                      <li>• Administrative communications</li>
                      <li>• Marketing and promotional materials</li>
                      <li>• Alumni network and events</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Information Sharing */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Users className="w-6 h-6 text-purple-600 mr-3" />
                  Information Sharing and Disclosure
                </h2>
                <div className="bg-purple-50 rounded-xl p-6">
                  <p className="text-gray-700 mb-4">
                    We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Educational Partners:</strong> Sharing with accredited institutions for credit transfer or joint programs</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Service Providers:</strong> Third-party vendors who assist in delivering our services</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Career Services:</strong> With your consent, sharing information with potential employers</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Data Security */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Lock className="w-6 h-6 text-red-600 mr-3" />
                  Data Security and Protection
                </h2>
                <div className="bg-red-50 rounded-xl p-6">
                  <p className="text-gray-700 mb-4">
                    We implement appropriate security measures to protect your personal information:
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Technical Safeguards</h4>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li>• SSL/TLS encryption for data transmission</li>
                        <li>• Secure database storage with encryption</li>
                        <li>• Regular security audits and updates</li>
                        <li>• Access controls and authentication</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Administrative Safeguards</h4>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li>• Limited access to personal information</li>
                        <li>• Employee training on data protection</li>
                        <li>• Incident response procedures</li>
                        <li>• Data retention and disposal policies</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Your Rights */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Shield className="w-6 h-6 text-orange-600 mr-3" />
                  Your Privacy Rights
                </h2>
                <div className="bg-orange-50 rounded-xl p-6">
                  <p className="text-gray-700 mb-4">You have the following rights regarding your personal information:</p>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">1</div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Access and Portability</h4>
                        <p className="text-sm text-gray-700">Request access to your personal information and receive a copy in a portable format</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">2</div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Correction and Updates</h4>
                        <p className="text-sm text-gray-700">Request correction of inaccurate or incomplete personal information</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">3</div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Deletion</h4>
                        <p className="text-sm text-gray-700">Request deletion of your personal information, subject to legal and contractual obligations</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">4</div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Opt-out</h4>
                        <p className="text-sm text-gray-700">Unsubscribe from marketing communications and non-essential services</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Cookies and Tracking */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Clock className="w-6 h-6 text-indigo-600 mr-3" />
                  Cookies and Tracking Technologies
                </h2>
                <div className="bg-indigo-50 rounded-xl p-6">
                  <p className="text-gray-700 mb-4">
                    We use cookies and similar technologies to enhance your experience on our website. For detailed information about our cookie practices, please see our 
                    <Link href="/cookie-policy" className="text-blue-600 hover:text-blue-800 font-medium ml-1">Cookie Policy</Link>.
                  </p>
                </div>
              </div>

              {/* Contact Information */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Us</h2>
                <div className="bg-gray-100 rounded-xl p-6">
                  <p className="text-gray-700 mb-4">
                    If you have any questions about this Privacy Policy or our privacy practices, please contact us:
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

              {/* Changes to Policy */}
              <div className="border-t border-gray-200 pt-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Policy</h2>
                <p className="text-gray-700">
                  We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. 
                  We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last updated" date. 
                  We encourage you to review this Privacy Policy periodically to stay informed about how we protect your information.
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