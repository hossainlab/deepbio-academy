'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { 
  CheckCircle, ArrowRight, Calendar, Clock, Users, DollarSign, 
  FileText, Phone, Award, AlertCircle, Download, ExternalLink,
  GraduationCap, Target, Globe, BookOpen, User, Mail, Menu, X, MapPin
} from 'lucide-react';
import Navbar from '../../components/Navbar';

export default function Admissions() {
  const [selectedStep, setSelectedStep] = useState(0);

  const admissionSteps = [
    {
      number: 1,
      title: "Initial Application",
      description: "Complete your online application with all required documents",
      details: [
        "Submit completed application form online",
        "Upload academic transcripts (Bachelor's degree required)",
        "Submit two academic/professional reference letters",
        "Write a statement of purpose (500-1000 words)",
        "Pay application fee (1,000 BDT)"
      ],
      duration: "2-3 weeks",
      icon: <FileText className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      number: 2,
      title: "Interview Call",
      description: "Selected candidates will be invited for a comprehensive interview",
      details: [
        "Technical interview covering basic biology and programming concepts",
        "Academic background assessment",
        "Motivation and career goals discussion",
        "Problem-solving and analytical thinking evaluation",
        "Available via video call or in-person",
        "Interview duration: 45-60 minutes"
      ],
      duration: "1-2 weeks after application review",
      icon: <Phone className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      number: 3,
      title: "Admission Offer",
      description: "Successful candidates receive conditional admission offer",
      details: [
        "Admission decision communicated within 1 week of interview",
        "Conditional offer letter issued with detailed terms",
        "Financial aid information (if applicable)",
        "Program start date and orientation details",
        "Housing and accommodation guidance",
        "Offer valid for 2 weeks from issue date"
      ],
      duration: "1 week after interview",
      icon: <Award className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      number: 4,
      title: "Acceptance/Rejection",
      description: "Candidates must respond to the admission offer",
      details: [
        "Accept offer by signing admission agreement",
        "Submit acceptance fee (10,000 BDT - deductible from total fees)",
        "Complete medical examination form",
        "Provide final academic transcripts",
        "Submit visa documentation (for international students)",
        "Confirm attendance at mandatory orientation"
      ],
      duration: "2 weeks to respond",
      icon: <CheckCircle className="w-8 h-8" />,
      color: "from-orange-500 to-red-500"
    },
    {
      number: 5,
      title: "Official Admission & Fees",
      description: "Complete enrollment and fee payment to secure your seat",
      details: [
        "Pay remaining program fees (50,000 BDT)",
        "Receive official enrollment confirmation",
        "Access to student portal and learning management system",
        "Welcome package with program materials",
        "Orientation session attendance (mandatory)",
        "Begin your transformative journey in computational biology"
      ],
      duration: "Before program start date",
      icon: <GraduationCap className="w-8 h-8" />,
      color: "from-indigo-500 to-purple-500"
    }
  ];

  const admissionRequirements = [
    {
      category: "Academic Requirements",
      items: [
        "Bachelor's degree in Biology, Chemistry, Physics, Computer Science, Mathematics, or related field",
        "Strong foundation in mathematics and statistics",
        "Basic programming experience preferred (not mandatory)"
      ]
    },
    {
      category: "Additional Requirements",
      items: [
        "Two academic or professional reference letters",
        "Statement of Purpose (500-1000 words)",
        "Updated CV/Resume",
        "Copy of passport (for international applicants)",
        "Medical fitness certificate"
      ]
    },
    {
      category: "Special Note for Undergraduates",
      items: [
        "Undergraduate students can take this training as a minor alongside their major",
        "Flexible scheduling available for students enrolled in other programs",
        "Ideal for students seeking specialized skills in computational biology"
      ]
    }
  ];

  const keyInformation = [
    {
      icon: <DollarSign className="w-8 h-8 text-green-600" />,
      title: "Program Fees",
      value: "৳60,000 BDT",
      description: "Total professional training fees",
      details: "Includes all course materials, lab access, and certification"
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Available Seats",
      value: "40 Seats",
      description: "Limited enrollment for personalized attention",
      details: "Small cohort ensures quality mentorship and peer interaction"
    },
    {
      icon: <Calendar className="w-8 h-8 text-purple-600" />,
      title: "Application Deadline",
      value: "October 31, 2025",
      description: "Rolling admissions available",
      details: "Early applications recommended for best consideration"
    },
    {
      icon: <Clock className="w-8 h-8 text-orange-600" />,
      title: "Program Duration",
      value: "12 Months",
      description: "Intensive full-time program",
      details: "4 quarters of comprehensive training and research"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Join the Future of
              <motion.span
                className="bg-gradient-to-r from-blue-700 via-blue-600 to-purple-600 bg-clip-text text-transparent block leading-tight font-extrabold"
                style={{ lineHeight: '1.2', paddingBottom: '0.1em' }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                Bioinformatics &
              </motion.span>
              <motion.span
                className="bg-gradient-to-r from-blue-700 via-blue-600 to-purple-600 bg-clip-text text-transparent block font-extrabold"
                style={{ lineHeight: '1.2', paddingBottom: '0.1em' }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.7 }}
              >
                Computational Biology
              </motion.span>
            </motion.h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto">
              Start your journey with our world-class BCB Professional Training Program. 
              Limited seats available for exceptional candidates.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Apply Now</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                className="px-8 py-4 bg-white/80 backdrop-blur-sm text-gray-800 font-bold rounded-full border-2 border-gray-300 hover:border-blue-500 transition-all duration-300 flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="w-5 h-5" />
                <span>Download Brochure</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Information */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Program Overview</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to know about our internationally recognized program
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyInformation.map((info, index) => (
              <motion.div
                key={info.title}
                className="text-center p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="mb-6">
                  {info.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{info.value}</div>
                <div className="text-lg font-semibold text-gray-700 mb-2">{info.title}</div>
                <div className="text-sm text-gray-600 mb-4">{info.description}</div>
                <div className="text-xs text-gray-500">{info.details}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Admission Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A comprehensive 5-step process designed to select the most promising candidates
            </p>
          </motion.div>

          {/* Process Steps Navigation */}
          <div className="flex flex-wrap justify-center mb-16 gap-4">
            {admissionSteps.map((step, index) => (
              <motion.button
                key={step.number}
                onClick={() => setSelectedStep(index)}
                className={`flex items-center space-x-3 px-6 py-4 rounded-2xl font-semibold transition-all duration-300 ${
                  selectedStep === index
                    ? 'bg-white text-gray-900 shadow-xl border-2 border-blue-500'
                    : 'bg-white/60 text-gray-600 hover:bg-white hover:shadow-lg'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold bg-gradient-to-r ${step.color}`}>
                  {step.number}
                </div>
                <span className="hidden sm:block">{step.title}</span>
              </motion.button>
            ))}
          </div>

          {/* Selected Step Details */}
          <motion.div
            key={selectedStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white rounded-3xl p-12 shadow-2xl border border-gray-100">
              <div className="flex items-center space-x-4 mb-8">
                <div className={`p-4 rounded-2xl bg-gradient-to-r ${admissionSteps[selectedStep].color} text-white`}>
                  {admissionSteps[selectedStep].icon}
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900">
                    Step {admissionSteps[selectedStep].number}: {admissionSteps[selectedStep].title}
                  </h3>
                  <p className="text-lg text-gray-600 mt-2">
                    {admissionSteps[selectedStep].description}
                  </p>
                  <div className="flex items-center mt-2 text-sm text-blue-600">
                    <Clock className="w-4 h-4 mr-2" />
                    Timeline: {admissionSteps[selectedStep].duration}
                  </div>
                </div>
              </div>
              
              <div className="grid gap-4">
                {admissionSteps[selectedStep].details.map((detail, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-3 p-4 bg-gray-50 rounded-xl"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{detail}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Admission Requirements */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Admission Requirements</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              International standards ensuring quality education and diverse perspectives
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {admissionRequirements.map((requirement, index) => (
              <motion.div
                key={requirement.category}
                className="p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{requirement.category}</h3>
                <div className="space-y-4">
                  {requirement.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-700 leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Financial Information */}
      <section className="py-24 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Investment in Your Future</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transparent pricing with exceptional value for world-class education
            </p>
          </motion.div>

          <div className="bg-white rounded-3xl p-12 shadow-2xl border border-gray-200">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Program Investment</h3>
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 bg-blue-50 rounded-xl">
                    <span className="font-semibold text-gray-800">Application Fee</span>
                    <span className="font-bold text-blue-600">৳1,000 BDT</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-green-50 rounded-xl">
                    <span className="font-semibold text-gray-800">Acceptance Fee</span>
                    <span className="font-bold text-green-600">৳10,000 BDT</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-purple-50 rounded-xl">
                    <span className="font-semibold text-gray-800">Remaining Fees</span>
                    <span className="font-bold text-purple-600">৳50,000 BDT</span>
                  </div>
                  <div className="border-t-2 border-gray-200 pt-4">
                    <div className="flex items-center justify-between p-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl">
                      <span className="text-xl font-bold">Total Program Fees</span>
                      <span className="text-2xl font-bold">৳60,000 BDT</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <h4 className="text-2xl font-bold text-gray-900">What's Included</h4>
                <div className="space-y-4">
                  {[
                    "42 credits of intensive coursework",
                    "Access to cutting-edge computational resources",
                    "Industry mentorship and networking",
                    "Career placement assistance",
                    "Certificate from DeepBio University",
                    "Lifetime alumni network access",
                    "Research project supervision",
                    "Professional development workshops"
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to Transform Your Career?</h2>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              Join only 40 selected candidates in this exclusive program. Applications close October 31, 2025.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <motion.button
                className="px-10 py-5 bg-white text-gray-900 font-bold text-lg rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <User className="w-6 h-6" />
                <span>Start Application</span>
              </motion.button>
              <motion.button
                className="px-10 py-5 border-2 border-white text-white font-bold text-lg rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300 flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-6 h-6" />
                <span>Contact Admissions</span>
              </motion.button>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm">
              <div className="flex items-center space-x-2">
                <AlertCircle className="w-5 h-5 text-yellow-400" />
                <span>Early Bird Discount: 20% off until September 30, 2025</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-blue-400" />
                <span>Limited to 40 seats only</span>
              </div>
            </div>
          </motion.div>
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
              <div className="flex space-x-4">
                <motion.a
                  href="https://linkedin.com/company/deepbio-limited"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </motion.a>
                <motion.a
                  href="https://twitter.com/deepbiolimited"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-400 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </motion.a>
                <motion.a
                  href="https://youtube.com/@deepbiolimited"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </motion.a>
                <motion.a
                  href="https://github.com/deepbio-limited"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </motion.a>
                <motion.a
                  href="https://instagram.com/deepbiolimited"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </motion.a>
                <motion.a
                  href="https://facebook.com/deepbiolimited"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </motion.a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3 text-gray-400">
                {['Program Overview', 'Curriculum', 'Admissions', 'Instructors', 'Career Services', 'Student Life'].map((link) => (
                  <li key={link}>
                    <a href="#" className="hover:text-white transition-colors">{link}</a>
                  </li>
                ))}
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