'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  GraduationCap, Mail, Phone, MapPin, Scale, FileText, AlertTriangle, 
  CheckCircle, Users, Clock, ArrowLeft, Shield
} from 'lucide-react';

export default function TermsOfService() {
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
                <Scale className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-gray-600 mb-4">
              These terms govern your use of our services and participation in the BCB Program.
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
              {/* Acceptance of Terms */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-600 mr-3" />
                  Acceptance of Terms
                </h2>
                <div className="bg-green-50 rounded-xl p-6">
                  <p className="text-gray-700 mb-4">
                    By accessing and using the BCB Program website, services, and participating in our educational programs, you accept and agree to be bound by the terms and provision of this agreement.
                  </p>
                  <div className="bg-white rounded-lg p-4 border-l-4 border-green-500">
                    <p className="text-sm text-gray-700">
                      <strong>Important:</strong> If you do not agree to abide by the above, please do not use this service or participate in our programs.
                    </p>
                  </div>
                </div>
              </div>

              {/* Program Enrollment */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Users className="w-6 h-6 text-blue-600 mr-3" />
                  Program Enrollment and Participation
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Eligibility Requirements</h3>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• Must meet all admission requirements</li>
                      <li>• Provide accurate and complete information</li>
                      <li>• Maintain academic and professional standards</li>
                      <li>• Comply with program policies and procedures</li>
                    </ul>
                  </div>
                  
                  <div className="bg-purple-50 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Student Responsibilities</h3>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• Regular attendance and participation</li>
                      <li>• Completion of assignments and assessments</li>
                      <li>• Respectful interaction with faculty and peers</li>
                      <li>• Adherence to academic integrity policies</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Academic Policies */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <FileText className="w-6 h-6 text-orange-600 mr-3" />
                  Academic Policies and Standards
                </h2>
                <div className="bg-orange-50 rounded-xl p-6">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Academic Integrity</h3>
                      <p className="text-gray-700 mb-3">
                        All students must maintain the highest standards of academic integrity. This includes:
                      </p>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>Original work on all assignments and projects</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>Proper citation and attribution of sources</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>No plagiarism, cheating, or unauthorized collaboration</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>Respect for intellectual property rights</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Grading and Assessment</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Assignments must be submitted by specified deadlines</li>
                        <li>• Late submissions may result in grade penalties</li>
                        <li>• Students have the right to appeal grades through proper channels</li>
                        <li>• Minimum passing grade requirements apply to all courses</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Financial Terms */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Clock className="w-6 h-6 text-green-600 mr-3" />
                  Financial Terms and Refund Policy
                </h2>
                <div className="bg-green-50 rounded-xl p-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Payment Terms</h3>
                      <ul className="space-y-2 text-gray-700 text-sm">
                        <li>• Total program fee: ৳60,000 BDT</li>
                        <li>• Application fee: ৳2,000 BDT (non-refundable)</li>
                        <li>• Acceptance fee: ৳10,000 BDT (deductible from total)</li>
                        <li>• Remaining balance due before program start</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Refund Policy</h3>
                      <ul className="space-y-2 text-gray-700 text-sm">
                        <li>• Full refund if program is cancelled by institution</li>
                        <li>• Partial refund available within first two weeks</li>
                        <li>• No refund after 25% course completion</li>
                        <li>• Medical withdrawals considered case-by-case</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Intellectual Property */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Shield className="w-6 h-6 text-purple-600 mr-3" />
                  Intellectual Property Rights
                </h2>
                <div className="bg-purple-50 rounded-xl p-6">
                  <div className="space-y-4">
                    <div className="bg-white rounded-lg p-4 border-l-4 border-purple-500">
                      <h3 className="font-semibold text-gray-900 mb-2">Course Materials</h3>
                      <p className="text-sm text-gray-700">
                        All course materials, including but not limited to lectures, presentations, assignments, and assessments, are the intellectual property of DeepBio University and its faculty. Students may not reproduce, distribute, or use these materials for commercial purposes without written permission.
                      </p>
                    </div>
                    
                    <div className="bg-white rounded-lg p-4 border-l-4 border-purple-500">
                      <h3 className="font-semibold text-gray-900 mb-2">Student Work</h3>
                      <p className="text-sm text-gray-700">
                        Students retain ownership of their original work, but grant DeepBio University a non-exclusive license to use student work for educational, promotional, and research purposes. Outstanding student projects may be featured in program marketing materials with proper attribution.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Code of Conduct */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <AlertTriangle className="w-6 h-6 text-red-600 mr-3" />
                  Code of Conduct
                </h2>
                <div className="bg-red-50 rounded-xl p-6">
                  <p className="text-gray-700 mb-4">
                    All participants in the BCB Program must adhere to our code of conduct:
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">1</div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Respectful Behavior</h4>
                        <p className="text-sm text-gray-700">Treat all faculty, staff, and fellow students with respect and professionalism</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">2</div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Non-Discrimination</h4>
                        <p className="text-sm text-gray-700">No harassment or discrimination based on race, gender, religion, nationality, or other protected characteristics</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">3</div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Professional Ethics</h4>
                        <p className="text-sm text-gray-700">Maintain high ethical standards in all academic and professional interactions</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">4</div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Compliance with Laws</h4>
                        <p className="text-sm text-gray-700">Abide by all applicable local, national, and international laws and regulations</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Limitation of Liability */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Limitation of Liability</h2>
                <div className="bg-gray-100 rounded-xl p-6">
                  <p className="text-gray-700 mb-4">
                    DeepBio University and the BCB Program provide educational services "as is" without warranty of any kind. We are not liable for:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Career outcomes or employment guarantees</li>
                    <li>• Third-party services or partnerships</li>
                    <li>• Technical issues or service interruptions</li>
                    <li>• Loss of data or course materials</li>
                    <li>• Indirect, incidental, or consequential damages</li>
                  </ul>
                </div>
              </div>

              {/* Modifications */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Modifications to Terms</h2>
                <div className="bg-blue-100 rounded-xl p-6">
                  <p className="text-gray-700">
                    We reserve the right to modify these Terms of Service at any time. Changes will be posted on this page with an updated revision date. 
                    Continued use of our services after changes are posted constitutes acceptance of the modified terms. 
                    We recommend reviewing these terms periodically to stay informed of any updates.
                  </p>
                </div>
              </div>

              {/* Governing Law */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Governing Law and Jurisdiction</h2>
                <div className="bg-indigo-100 rounded-xl p-6">
                  <p className="text-gray-700">
                    These Terms of Service are governed by and construed in accordance with the laws of Bangladesh. 
                    Any disputes arising from or relating to these terms or your use of our services will be subject to the exclusive jurisdiction of the courts of Dhaka, Bangladesh.
                  </p>
                </div>
              </div>

              {/* Contact Information */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
                <div className="bg-gray-100 rounded-xl p-6">
                  <p className="text-gray-700 mb-4">
                    If you have any questions about these Terms of Service, please contact us:
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-blue-600" />
                      <span className="text-gray-700">legal@deepbio.edu</span>
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

              {/* Severability */}
              <div className="border-t border-gray-200 pt-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Severability</h2>
                <p className="text-gray-700">
                  If any provision of these Terms of Service is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary so that these Terms of Service will otherwise remain in full force and effect and enforceable.
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