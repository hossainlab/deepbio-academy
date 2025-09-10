'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { GraduationCap, Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';

interface NavbarProps {
  isScrolled?: boolean;
}

export default function Navbar({ isScrolled = false }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  const navigationItems = [
    { name: 'Curriculum', href: '/curriculum' },
    { name: 'Admissions', href: '/admissions' },
    { name: 'Instructors', href: '/instructors' },
    { name: 'Academic Policy', href: '/academic-integrity' },
    { name: 'FAQ', href: '/faq' }
  ];

  const isActive = (href: string) => {
    if (!mounted) return false;
    const normalizedPathname = pathname.endsWith('/') && pathname !== '/' ? pathname.slice(0, -1) : pathname;
    const normalizedHref = href.endsWith('/') && href !== '/' ? href.slice(0, -1) : href;
    return normalizedPathname === normalizedHref;
  };

  return (
    <motion.header 
      className="fixed top-0 w-full z-50 transition-all duration-300"
      style={{ 
        backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.8)',
        backdropFilter: 'blur(20px)',
        borderBottom: isScrolled ? '1px solid rgba(0, 0, 0, 0.1)' : 'none'
      }}
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
                <h1 className="text-xl font-bold text-gray-900 tracking-tight">BioinfoComBio</h1>
                <p className="text-sm text-gray-600 font-medium">DeepBio Academy</p>
              </div>
            </motion.div>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className={`relative font-medium transition-colors duration-300 py-2 ${
                  isActive(item.href) ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
                }`}
                style={{ lineHeight: '1.4', paddingBottom: '0.2em' }}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                {item.name}
                {isActive(item.href) && (
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
            <motion.a
              href="https://forms.gle/kEdbyBf1bHsDmiU57"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 text-blue-600 font-semibold border-2 border-blue-600 rounded-full hover:bg-blue-50 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Apply Now
            </motion.a>
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
              {navigationItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`block font-medium py-2 transition-colors ${
                    isActive(item.href) ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
                  }`}
                  style={{ lineHeight: '1.4', paddingBottom: '0.2em' }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <a
                href="https://forms.gle/kEdbyBf1bHsDmiU57"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full mt-4 px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors block text-center"
              >
                Apply Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}