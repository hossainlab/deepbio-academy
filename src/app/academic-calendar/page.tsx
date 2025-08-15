'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, Download, Calendar } from 'lucide-react';
import Navbar from '../../components/Navbar';

export default function AcademicCalendarPage() {
  useEffect(() => {
    // Auto-redirect to Google Sheets after 3 seconds
    const timer = setTimeout(() => {
      window.open('https://docs.google.com/spreadsheets/d/1pIDFq1UkoXbtE55Sm92zaKxVOx436Iv-rM6C7M3ufF0/edit?usp=sharing', '_blank');
    }, 3000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20 min-h-screen flex items-center">
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
            <div className="flex items-center justify-center mb-6">
              <Link 
                href="/"
                className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 font-medium transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Back to Home</span>
              </Link>
            </div>
            
            <div className="flex items-center justify-center mb-8">
              <Calendar className="w-24 h-24 text-blue-600" />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8">
              Academic
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent block">
                Calendar
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
              You're being redirected to our Google Sheets academic calendar...
            </p>
            
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-12 max-w-2xl mx-auto">
              <p className="text-lg text-blue-800 mb-4">
                🕒 Automatic redirect in 3 seconds
              </p>
              <p className="text-blue-600">
                If you're not redirected automatically, click the button below.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <motion.a
                href="https://docs.google.com/spreadsheets/d/1pIDFq1UkoXbtE55Sm92zaKxVOx436Iv-rM6C7M3ufF0/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink className="w-5 h-5" />
                <span>Open Academic Calendar</span>
              </motion.a>
              <motion.a
                href="https://docs.google.com/spreadsheets/d/1pIDFq1UkoXbtE55Sm92zaKxVOx436Iv-rM6C7M3ufF0/export?format=pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white/80 backdrop-blur-sm text-gray-800 font-bold rounded-full border-2 border-gray-300 hover:border-blue-500 transition-all duration-300 flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="w-5 h-5" />
                <span>Download as PDF</span>
              </motion.a>
            </div>

            {/* Benefits Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Google Sheets?</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                  <div className="text-blue-600 text-4xl mb-4">📅</div>
                  <h3 className="font-bold text-gray-900 mb-2">Real-time Updates</h3>
                  <p className="text-gray-600">Always access the most current calendar information with instant updates</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                  <div className="text-green-600 text-4xl mb-4">🔄</div>
                  <h3 className="font-bold text-gray-900 mb-2">Easy Management</h3>
                  <p className="text-gray-600">Quick updates and modifications when needed by administrators</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                  <div className="text-purple-600 text-4xl mb-4">📱</div>
                  <h3 className="font-bold text-gray-900 mb-2">Mobile Friendly</h3>
                  <p className="text-gray-600">Access from any device, anywhere, anytime</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400 text-sm">
              &copy; 2024 DeepBio Limited. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}