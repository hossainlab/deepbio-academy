'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  GraduationCap, Mail, Award,
  Users, Globe, Star, Building,
  MapPin, Phone
} from 'lucide-react';
import Navbar from '../../components/Navbar';

export default function Instructors() {

  const instructorMembers = [
    {
      id: 'jubayer',
      name: 'Md. Jubayer Hossain',
      title: 'Lead Organizer & Instructor',
      category: 'Core Instructors',
      image: '/images/instructors/jubayer.png',
      email: 'jubayer@deepbioltd.com',
      office: 'DeepBio Limited, Dhaka, Bangladesh',
      education: [
        'Master of Science in Microbiology, Jagannath University',
        'Bachelor of Science in Microbiology, Jagannath University'
      ],
      experience: [
        'Founder & Chief Executive officer, DeepBio Limited',
        'Founder & Chief Executive Director, CHIRAL Bangladesh',
        'Faculty, Center for Bioinformatics Learning Advancement and Systematics Training(cBLAST), University of Dhaka',
        'Visiting Researcher, Department of Public Health, Daffodil International University',
        'Instructor, Daffodil International University (Micro-credential Academy, AI for Public Health)',
        'Program Lead, GSA Bioinformatics Internship'
      ],
      researchInterests: [
        'Transcriptomics',
        'Single Cell Analysis',
        'bulk RNA-Seq Meta Analysis',
        'Single Cell Meta Analysis', 
        'Machine Learning for Computational Biology',
        'GenAI for Biology'
      ],
      linkedin: 'https://www.linkedin.com/in/hossainmj/',
      github: 'https://github.com/hossainlab'
    }, 
    {
      id: 'wahid',
      name: 'Md. Wahidul Islam',
      title: 'Instructor',
      category: 'Core Instructors',
      image: '/images/instructors/wahidul.jpg',
      email: 'wahid@deepbioltd.com',
      office: 'OneHealth Lab, Jahangirnagar University',
      education: [
        'Master of Science in Microbiology, Jagannath University',
        'Bachelor of Science in Microbiology, Jagannath University'
      ],
      experience: [
        'Research Assistant, One Health Lab, Jahangirnagar University'
      ],
      researchInterests: [
        'Transcriptomics',
        'Single Cell Analysis',
        'bulk RNA-Seq Meta Analysis',
        'Single Cell Meta Analysis', 
        'Machine Learning for Computational Biology',
        'GenAI for Biology'
      ],
      linkedin: 'https://www.linkedin.com/in/islammw/',
      github: 'https://github.com/wahid'
    },
    {
      id: 'adib',
      name: 'Tasmim Rahman Adib',
      title: 'Instructor',
      category: 'Core Instructors',
      image: '/images/instructors/adib.jpg',
      email: 'adib@deepbioltd.com',
      office: 'Penta Global Limited',
      education: [
        'Master of Science in Computer Science Engineering, University of Dhaka',
        'Bachelor of Science in Computer Science Engineering, University of Dhaka'
      ],
      experience: [
        'Software Engineering, Penta Global Limited'
      ],
      researchInterests: [
        'Deep Learning',
        'Artificial Intelligence',
        'GenAI for Biology'
      ],
      linkedin: 'https://www.linkedin.com/in/tasmim-rahman-adib-403074221/',
      github: 'https://github.com/Tasmim-Adib'
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
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8">
              Distinguished
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent block">
                Instructors & Researchers
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto">
              We are assembling a world-class team of instructors and researchers. 
              Meet our incoming expert instructors who will guide your learning journey.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div className="flex items-center justify-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <Award className="w-5 h-5 text-blue-600" />
                  <span>International Standard Instructors</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Globe className="w-5 h-5 text-green-600" />
                  <span>International Recognition</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Building className="w-5 h-5 text-purple-600" />
                  <span>Top Institutions</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>


      {/* Program Administration */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leadership and guidance from experienced professionals in computational biology and bioinformatics.
            </p>
          </motion.div>
          <div className="grid gap-8">
            {instructorMembers.filter(instructor => instructor.category === 'Core Instructors').map((instructor, index) => (
              <motion.div
                key={instructor.id}
                className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="p-8">
                  <div className="flex flex-col lg:flex-row gap-8">
                    {/* Profile Image & Basic Info */}
                    <div className="lg:w-1/4 flex-shrink-0">
                      <div className="relative mb-6">
                        <div className="w-48 h-48 mx-auto lg:mx-0 rounded-2xl overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100 border-4 border-white shadow-lg">
                          <img
                            src={instructor.image}
                            alt={instructor.name}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              // Fallback to initials if image fails to load
                              const target = e.target as HTMLImageElement;
                              target.style.display = 'none';
                              const fallbackDiv = target.nextElementSibling as HTMLElement;
                              if (fallbackDiv) fallbackDiv.classList.remove('hidden');
                            }}
                          />
                          <div className="hidden w-full h-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white text-4xl font-bold">
                            {instructor.name.split(' ').map(n => n[0]).join('')}
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-3 text-center lg:text-left">
                        <div className="flex items-center justify-center lg:justify-start space-x-2 text-sm text-gray-600">
                          <Mail className="w-4 h-4" />
                          <a href={`mailto:${instructor.email}`} className="text-blue-600 hover:underline">{instructor.email}</a>
                        </div>
                        <div className="flex items-center justify-center lg:justify-start space-x-2 text-sm text-gray-600">
                          <MapPin className="w-4 h-4" />
                          <span>{instructor.office}</span>
                        </div>
                      </div>

                      {/* Social Links */}
                      <div className="mt-6 flex justify-center lg:justify-start space-x-3">
                        <a href={instructor.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors shadow-lg" title="LinkedIn Profile">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                          </svg>
                        </a>
                        <a href={instructor.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors shadow-lg" title="GitHub Profile">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                        </a>
                      </div>
                    </div>
                    
                    {/* Instructor Information */}
                    <div className="lg:w-3/4">
                      <div className="mb-6">
                        <h2 className="text-3xl font-bold text-gray-900 mb-2">{instructor.name}</h2>
                        <p className="text-xl text-blue-600 font-semibold mb-2">{instructor.title}</p>
                        <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                          {instructor.category}
                        </span>
                      </div>

                      {/* Research Interests */}
                      <div className="mb-6">
                        <h3 className="text-lg font-bold text-gray-900 mb-3">Research Interests</h3>
                        <div className="flex flex-wrap gap-2">
                          {instructor.researchInterests.map((interest) => (
                            <span key={interest} className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full">
                              {interest}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Education */}
                      <div className="mb-6">
                        <h3 className="text-lg font-bold text-gray-900 mb-3">Education</h3>
                        <div className="space-y-2">
                          {instructor.education.map((edu, index) => (
                            <div key={index} className="flex items-start space-x-2 text-sm text-gray-700">
                              <GraduationCap className="w-4 h-4 text-blue-500 mt-0.5" />
                              <span>{edu}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Professional Experience */}
                      <div className="mb-6">
                        <h3 className="text-lg font-bold text-gray-900 mb-3">Professional Experience</h3>
                        <div className="space-y-2">
                          {instructor.experience.map((exp, index) => (
                            <div key={index} className="flex items-start space-x-2 text-sm text-gray-700">
                              <Building className="w-4 h-4 text-green-500 mt-0.5" />
                              <span>{exp}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
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
                  <p className="text-sm text-gray-400">DeepBio Academy</p>
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
                    <p>deepbiobd@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <p>+8801843381652</p>
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