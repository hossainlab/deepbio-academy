'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { 
  CheckCircle, ArrowRight, Users, BookOpen, AlertTriangle, 
  FileText, MessageSquare, Shield, Award, GraduationCap, 
  Menu, X, ChevronRight, Lightbulb, UserCheck, Database,
  Mail, Phone, MapPin
} from 'lucide-react';

export default function AcademicIntegrity() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(0);

  const sections = [
    {
      title: "Collaboration Guidelines",
      icon: <Users className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      content: [
        {
          rule: "Independent Work First",
          description: "You must work independently on each problem before discussing it with others.",
          details: "This ensures you develop your own understanding and problem-solving skills before seeking help or collaboration."
        },
        {
          rule: "Write Your Own Solutions",
          description: "You must write all solutions entirely on your own, even after collaboration.",
          details: "While discussion is encouraged, the final written work must be your original composition and demonstrate your understanding."
        },
        {
          rule: "Acknowledge All Sources",
          description: "You must acknowledge all outside sources and collaborators in your submissions.",
          details: "Include names of collaborators, resources used, and any assistance received. Transparency builds trust and academic honesty."
        }
      ]
    },
    {
      title: "AI/LLM Usage Policy",
      icon: <MessageSquare className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      content: [
        {
          rule: "Acknowledge AI Collaboration",
          description: "You must acknowledge ChatGPT/LLM usage the same way you would acknowledge a human collaboration partner.",
          details: "Treat AI tools as collaboration partners and provide full transparency about how and when they were used."
        },
        {
          rule: "Complete Transparency",
          description: "Be transparent about AI usage, save all chat conversations, and submit them with your homework.",
          details: "Include chat logs, prompts used, and explain how AI assistance contributed to your work. This helps instructors understand your learning process."
        },
        {
          rule: "Learning Enhancement",
          description: "AI tools should enhance your learning, not replace your critical thinking and analysis.",
          details: "Use AI to clarify concepts, check reasoning, or explore ideas, but ensure the core analysis and conclusions are your own."
        }
      ]
    },
    {
      title: "Academic Misconduct",
      icon: <AlertTriangle className="w-8 h-8" />,
      color: "from-red-500 to-orange-500",
      content: [
        {
          rule: "Plagiarism",
          description: "Copying work from others, AI, or published sources without proper attribution is strictly prohibited.",
          details: "This includes copying code, analysis, interpretations, or written explanations without acknowledgment."
        },
        {
          rule: "Unauthorized Collaboration",
          description: "Working together on assignments that are meant to be completed individually.",
          details: "Some assignments require independent work to assess individual understanding. Follow specific guidelines for each assignment."
        },
        {
          rule: "Misrepresentation",
          description: "Failing to acknowledge sources, collaborators, or AI assistance constitutes academic dishonesty.",
          details: "Even unintentional omissions can be considered misconduct. When in doubt, over-acknowledge rather than under-acknowledge."
        }
      ]
    },
    {
      title: "Best Practices",
      icon: <Lightbulb className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      content: [
        {
          rule: "Document Your Process",
          description: "Keep detailed records of your work process, including sources consulted and collaborations.",
          details: "Maintain a research journal or log of your problem-solving process, resources used, and insights gained."
        },
        {
          rule: "Seek Help Appropriately",
          description: "Use office hours, study groups, and peer discussions to enhance understanding.",
          details: "Engage with instructors and TAs for conceptual clarification. Form study groups for discussion while maintaining individual work integrity."
        },
        {
          rule: "Cite Everything",
          description: "When in doubt about whether to cite something, always err on the side of citation.",
          details: "Include textbooks, online resources, discussion partners, AI tools, and any external assistance in your acknowledgments."
        }
      ]
    }
  ];

  const consequences = [
    {
      level: "First Violation",
      action: "Warning and Re-submission",
      description: "Educational discussion with instructor and opportunity to resubmit with proper attribution."
    },
    {
      level: "Second Violation",
      action: "Assignment Zero Grade",
      description: "Failing grade on the assignment and mandatory academic integrity workshop."
    },
    {
      level: "Serious/Repeated Violations",
      action: "Course Failure",
      description: "Failure of the entire course and formal academic misconduct proceedings."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <motion.header 
        className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-20px border-b border-gray-200"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="flex items-center space-x-4">
              <motion.div 
                className="flex items-center space-x-4 cursor-pointer"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                whileHover={{ scale: 1.02 }}
              >
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
              </motion.div>
            </Link>

            <nav className="hidden md:flex items-center space-x-8">
              {['Curriculum', 'Admissions', 'Instructors', 'Academic Policy'].map((item, index) => (
                <motion.a
                  key={item}
                  href={item === 'Admissions' ? '/admissions' : item === 'Instructors' ? '/instructors' : item === 'Curriculum' ? '/curriculum' : item === 'Academic Policy' ? '/academic-integrity' : `/#${item.toLowerCase()}`}
                  className={`relative font-medium transition-colors duration-300 py-2 ${
                    item === 'Academic Policy' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
                  }`}
                  style={{ lineHeight: '1.4', paddingBottom: '0.2em' }}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {item}
                  {item === 'Academic Policy' && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </motion.a>
              ))}
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              <motion.button
                className="px-6 py-2.5 text-blue-600 font-semibold border-2 border-blue-600 rounded-full hover:bg-blue-50 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Apply Now
              </motion.button>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-xl hover:bg-gray-100 transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white/95 backdrop-blur-xl border-t border-gray-200"
            >
              <div className="px-4 py-6 space-y-4">
                {['Curriculum', 'Admissions', 'Instructors', 'Academic Policy'].map((item) => (
                  <a
                    key={item}
                    href={item === 'Admissions' ? '/admissions' : item === 'Instructors' ? '/instructors' : item === 'Curriculum' ? '/curriculum' : item === 'Academic Policy' ? '/academic-integrity' : `/#${item.toLowerCase()}`}
                    className={`block font-medium py-2 transition-colors ${
                      item === 'Academic Policy' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
                    }`}
                    style={{ lineHeight: '1.4', paddingBottom: '0.2em' }}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
                <button className="w-full mt-4 px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors">
                  Apply Now
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

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
            <div className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full shadow-lg mb-8">
              <Shield className="w-5 h-5 text-blue-500 mr-2" />
              <span className="text-sm font-semibold text-gray-800">Academic Standards & Ethics</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8">
              Academic Integrity &
              <span className="bg-gradient-to-r from-blue-700 via-blue-600 to-purple-600 bg-clip-text text-transparent block">
                Collaboration Policy
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto">
              Guidelines for ethical collaboration, proper attribution, and responsible use of AI tools in your academic work.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Policy Sections */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Policy Framework</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive guidelines for maintaining academic integrity while fostering collaborative learning
            </p>
          </motion.div>

          {/* Section Navigation */}
          <div className="flex flex-wrap justify-center mb-16 gap-4">
            {sections.map((section, index) => (
              <motion.button
                key={section.title}
                onClick={() => setActiveSection(index)}
                className={`flex items-center space-x-3 px-6 py-4 rounded-2xl font-semibold transition-all duration-300 ${
                  activeSection === index
                    ? 'bg-white text-gray-900 shadow-xl border-2 border-blue-500'
                    : 'bg-white/60 text-gray-600 hover:bg-white hover:shadow-lg'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className={`p-2 rounded-lg bg-gradient-to-r ${section.color} text-white`}>
                  {section.icon}
                </div>
                <span className="hidden sm:block">{section.title}</span>
              </motion.button>
            ))}
          </div>

          {/* Active Section Content */}
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-5xl mx-auto"
          >
            <div className="bg-white rounded-3xl p-12 shadow-2xl border border-gray-100">
              <div className="flex items-center space-x-4 mb-8">
                <div className={`p-4 rounded-2xl bg-gradient-to-r ${sections[activeSection].color} text-white`}>
                  {sections[activeSection].icon}
                </div>
                <h3 className="text-3xl font-bold text-gray-900">
                  {sections[activeSection].title}
                </h3>
              </div>
              
              <div className="grid gap-6">
                {sections[activeSection].content.map((item, index) => (
                  <motion.div
                    key={index}
                    className="p-6 bg-gray-50 rounded-xl border-l-4 border-blue-500"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <h4 className="text-xl font-bold text-gray-900 mb-3">{item.rule}</h4>
                    <p className="text-lg text-gray-700 mb-4">{item.description}</p>
                    <p className="text-gray-600 leading-relaxed">{item.details}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Consequences Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Violation Consequences</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Progressive disciplinary actions for academic integrity violations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {consequences.map((consequence, index) => (
              <motion.div
                key={consequence.level}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center mb-6">
                  <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{consequence.level}</h3>
                </div>
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
                  <p className="font-semibold text-red-800">{consequence.action}</p>
                </div>
                <p className="text-gray-700">{consequence.description}</p>
              </motion.div>
            ))}
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
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Questions About Academic Integrity?</h2>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              When in doubt, ask! Our instructors and academic advisors are here to help you navigate ethical challenges and maintain the highest standards of academic integrity.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <motion.button
                className="px-10 py-5 bg-white text-gray-900 font-bold text-lg rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <UserCheck className="w-6 h-6" />
                <span>Contact Academic Advisor</span>
              </motion.button>
              <motion.button
                className="px-10 py-5 border-2 border-white text-white font-bold text-lg rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300 flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FileText className="w-6 h-6" />
                <span>Download Full Policy</span>
              </motion.button>
            </div>

            <div className="text-sm text-gray-400">
              <p className="mb-2">
                <strong>Remember:</strong> Academic integrity is not just about avoiding plagiarism—it's about developing as an ethical scientist and researcher.
              </p>
              <p>
                Foster a culture of honesty, collaboration, and intellectual growth in the BCB community.
              </p>
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