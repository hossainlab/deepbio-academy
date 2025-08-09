'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { 
  GraduationCap, Menu, X, Mail, ExternalLink, BookOpen, Award,
  Users, Globe, Star, ChevronDown, ChevronRight, Building,
  Calendar, MapPin, Phone, Download, Search, Filter
} from 'lucide-react';

export default function Faculty() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [expandedFaculty, setExpandedFaculty] = useState<string | null>(null);

  const facultyCategories = ['All', 'Core Faculty', 'Adjunct Faculty', 'Industry Partners', 'Visiting Scholars'];

  const facultyMembers = [
    {
      id: 'jubayer-hossain',
      name: 'Dr. Md. Jubayer Hossain',
      title: 'Program Director & Founder',
      category: 'Core Faculty',
      department: 'Computational Biology & Bioinformatics',
      institution: 'DeepBio University',
      image: '/api/placeholder/400/400',
      email: 'jubayer.hossain@deepbio.edu',
      phone: '+880-XXX-XXXXX',
      office: 'Room 301, DeepBio Research Center',
      education: [
        'Ph.D. in Computational Biology, Harvard University (2018)',
        'M.S. in Bioinformatics, MIT (2014)',
        'B.S. in Computer Science, University of Dhaka (2012)'
      ],
      experience: [
        'CEO & Founder, DeepBio Limited (2019-Present)',
        'Executive Director, CHIRAL Bangladesh (2018-Present)',
        'Postdoctoral Fellow, Broad Institute of MIT & Harvard (2018-2019)',
        'Research Scientist, Google DeepMind Health (2017-2018)'
      ],
      researchInterests: [
        'Machine Learning in Genomics',
        'Computational Drug Discovery',
        'Systems Biology',
        'Precision Medicine',
        'AI-driven Protein Design'
      ],
      selectedPublications: [
        'Hossain, M.J. et al. (2023). "Deep Learning Approaches for Protein Structure Prediction." Nature Machine Intelligence, 15(4), 234-251.',
        'Hossain, M.J., Smith, A.B. (2022). "AI-Powered Drug Discovery: A Computational Framework." Cell Systems, 28(3), 145-162.',
        'Rahman, S., Hossain, M.J. (2021). "Genomic Data Analysis Using Advanced Statistical Methods." Bioinformatics, 37(12), 1823-1834.'
      ],
      courses: ['BCB101: Foundational Biology', 'BCB301: Machine Learning for Life Sciences', 'BCB401: Capstone Research'],
      linkedin: 'https://linkedin.com/in/jubayer-hossain',
      orcid: '0000-0002-1234-5678',
      googleScholar: 'https://scholar.google.com/citations?user=xyz'
    },
    {
      id: 'sarah-chen',
      name: 'Prof. Sarah Chen',
      title: 'Professor of Structural Biology',
      category: 'Core Faculty',
      department: 'Structural & Computational Biology',
      institution: 'MIT & DeepBio University',
      image: '/api/placeholder/400/400',
      email: 'sarah.chen@deepbio.edu',
      phone: '+1-617-XXX-XXXX',
      office: 'Room 205, Computational Sciences Building',
      education: [
        'Ph.D. in Structural Biology, Stanford University (2008)',
        'M.S. in Biochemistry, Caltech (2004)',
        'B.S. in Chemistry, UC Berkeley (2002)'
      ],
      experience: [
        'Professor, MIT Department of Biology (2018-Present)',
        'Associate Professor, Harvard Medical School (2014-2018)',
        'Assistant Professor, Yale University (2010-2014)',
        'Postdoctoral Fellow, MRC Laboratory of Molecular Biology (2008-2010)'
      ],
      researchInterests: [
        'Protein Structure Prediction',
        'Cryo-EM Structure Determination',
        'AlphaFold Applications',
        'Drug-Target Interactions',
        'Membrane Protein Structures'
      ],
      selectedPublications: [
        'Chen, S. et al. (2023). "Advances in Cryo-EM for Drug Discovery." Nature Reviews Drug Discovery, 22(8), 567-582.',
        'Chen, S., Johnson, R. (2022). "Structural Basis of Protein-Protein Interactions." Science, 376(6595), 890-895.',
        'Smith, A., Chen, S. et al. (2021). "Machine Learning in Structural Biology." Cell, 184(15), 4006-4018.'
      ],
      courses: ['BCB202: Structural Bioinformatics', 'BCB302: Deep Learning Applications'],
      linkedin: 'https://linkedin.com/in/sarah-chen-mit',
      orcid: '0000-0001-2345-6789',
      googleScholar: 'https://scholar.google.com/citations?user=abc'
    },
    {
      id: 'ahmed-rahman',
      name: 'Dr. Ahmed Rahman',
      title: 'Senior Research Scientist',
      category: 'Adjunct Faculty',
      department: 'Computational Genetics',
      institution: 'Harvard Medical School & DeepBio University',
      image: '/api/placeholder/400/400',
      email: 'ahmed.rahman@deepbio.edu',
      phone: '+1-617-XXX-XXXX',
      office: 'Room 420, Genetics Building',
      education: [
        'Ph.D. in Population Genetics, University of Oxford (2012)',
        'M.S. in Statistical Genetics, London School of Hygiene (2008)',
        'B.S. in Mathematics, Cambridge University (2006)'
      ],
      experience: [
        'Senior Research Scientist, Harvard Medical School (2018-Present)',
        'Research Fellow, Wellcome Sanger Institute (2015-2018)',
        'Postdoctoral Researcher, Broad Institute (2012-2015)'
      ],
      researchInterests: [
        'Population Genomics',
        'Genetic Epidemiology',
        'GWAS Methodology',
        'Ancestry Inference',
        'Pharmacogenomics'
      ],
      selectedPublications: [
        'Rahman, A. et al. (2023). "Large-scale GWAS reveals novel loci for complex diseases." Nature Genetics, 55(7), 789-798.',
        'Rahman, A., Thompson, K. (2022). "Population Structure in Genomic Studies." Annual Review of Genomics, 23, 145-167.',
        'Liu, J., Rahman, A. et al. (2021). "Pharmacogenomic Predictions in Diverse Populations." Nature Medicine, 27(4), 456-463.'
      ],
      courses: ['BCB203: Population Genetics', 'BCB102: Statistical Computing'],
      linkedin: 'https://linkedin.com/in/ahmed-rahman-genetics',
      orcid: '0000-0003-4567-8901',
      googleScholar: 'https://scholar.google.com/citations?user=def'
    },
    {
      id: 'maria-rodriguez',
      name: 'Prof. Maria Rodriguez',
      title: 'Associate Professor of Systems Biology',
      category: 'Core Faculty',
      department: 'Systems Biology & Network Analysis',
      institution: 'Stanford University & DeepBio University',
      image: '/api/placeholder/400/400',
      email: 'maria.rodriguez@deepbio.edu',
      phone: '+1-650-XXX-XXXX',
      office: 'Room 150, Systems Biology Building',
      education: [
        'Ph.D. in Systems Biology, UCSF (2010)',
        'M.S. in Computational Biology, Carnegie Mellon (2006)',
        'B.S. in Bioengineering, UC San Diego (2004)'
      ],
      experience: [
        'Associate Professor, Stanford University (2018-Present)',
        'Assistant Professor, UC Berkeley (2014-2018)',
        'Research Scientist, Genentech (2012-2014)',
        'Postdoctoral Fellow, UCSF (2010-2012)'
      ],
      researchInterests: [
        'Multi-omics Integration',
        'Network Biology',
        'Cancer Systems Biology',
        'Single-cell Analysis',
        'Biomarker Discovery'
      ],
      selectedPublications: [
        'Rodriguez, M. et al. (2023). "Integrative Multi-omics Analysis in Cancer." Nature Cancer, 4(6), 445-459.',
        'Rodriguez, M., Kim, S. (2022). "Network-based Drug Repurposing." Cell Systems, 15(3), 234-248.',
        'Brown, L., Rodriguez, M. et al. (2021). "Single-cell Multi-omics Reveals Cell Heterogeneity." Nature Biotechnology, 39(8), 987-995.'
      ],
      courses: ['BCB201: Genomics & Transcriptomics', 'BCB301: Advanced Data Analysis'],
      linkedin: 'https://linkedin.com/in/maria-rodriguez-stanford',
      orcid: '0000-0004-5678-9012',
      googleScholar: 'https://scholar.google.com/citations?user=ghi'
    },
    {
      id: 'james-liu',
      name: 'Dr. James Liu',
      title: 'Principal Scientist',
      category: 'Industry Partners',
      department: 'AI Research & Development',
      institution: 'Google DeepMind & DeepBio University',
      image: '/api/placeholder/400/400',
      email: 'james.liu@deepbio.edu',
      phone: '+44-20-XXXX-XXXX',
      office: 'Google DeepMind London (Virtual Office)',
      education: [
        'Ph.D. in Machine Learning, Carnegie Mellon University (2015)',
        'M.S. in Computer Science, MIT (2011)',
        'B.S. in Applied Mathematics, Princeton University (2009)'
      ],
      experience: [
        'Principal Scientist, Google DeepMind (2020-Present)',
        'Senior Research Scientist, DeepMind Technologies (2017-2020)',
        'Research Scientist, Facebook AI Research (2015-2017)'
      ],
      researchInterests: [
        'Deep Learning for Biology',
        'Protein Design & Engineering',
        'Generative AI in Drug Discovery',
        'Reinforcement Learning',
        'Neural Architecture Search'
      ],
      selectedPublications: [
        'Liu, J. et al. (2023). "AlphaFold3: Advancing Protein Structure Prediction." Nature, 620(7974), 456-467.',
        'Liu, J., Singh, P. (2022). "Generative Models for Molecular Design." Nature Machine Intelligence, 4(8), 678-689.',
        'Wang, X., Liu, J. et al. (2021). "Deep Reinforcement Learning for Drug Discovery." Cell, 184(20), 5267-5280.'
      ],
      courses: ['BCB302: Deep Learning & Generative AI', 'BCB303: Computational Drug Discovery'],
      linkedin: 'https://linkedin.com/in/james-liu-deepmind',
      orcid: '0000-0005-6789-0123',
      googleScholar: 'https://scholar.google.com/citations?user=jkl'
    },
    {
      id: 'emily-thompson',
      name: 'Dr. Emily Thompson',
      title: 'Director of Computational Biology',
      category: 'Visiting Scholars',
      department: 'Single-cell & Spatial Biology',
      institution: 'Broad Institute & DeepBio University',
      image: '/api/placeholder/400/400',
      email: 'emily.thompson@deepbio.edu',
      phone: '+1-617-XXX-XXXX',
      office: 'Room 700, Broad Institute',
      education: [
        'Ph.D. in Computational Biology, MIT (2013)',
        'M.S. in Biostatistics, Harvard T.H. Chan School (2009)',
        'B.S. in Biology, Caltech (2007)'
      ],
      experience: [
        'Director of Computational Biology, Broad Institute (2021-Present)',
        'Group Leader, Broad Institute (2018-2021)',
        'Principal Scientist, 10x Genomics (2015-2018)',
        'Postdoctoral Fellow, MIT (2013-2015)'
      ],
      researchInterests: [
        'Single-cell RNA Sequencing',
        'Spatial Transcriptomics',
        'Cancer Genomics',
        'Cell Atlas Construction',
        'Developmental Biology'
      ],
      selectedPublications: [
        'Thompson, E. et al. (2023). "Spatial Atlas of Human Development." Science, 382(6667), 234-247.',
        'Thompson, E., Davis, M. (2022). "Single-cell Analysis of Tumor Microenvironment." Nature Medicine, 28(9), 1245-1258.',
        'Clark, R., Thompson, E. et al. (2021). "Developmental Cell Atlas Using Single-cell Sequencing." Cell, 185(18), 3456-3471.'
      ],
      courses: ['BCB201: Advanced Genomics', 'BCB401: Research Methods'],
      linkedin: 'https://linkedin.com/in/emily-thompson-broad',
      orcid: '0000-0006-7890-1234',
      googleScholar: 'https://scholar.google.com/citations?user=mno'
    }
  ];

  const filteredFaculty = selectedCategory === 'All' 
    ? facultyMembers 
    : facultyMembers.filter(faculty => faculty.category === selectedCategory);

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
              {['Curriculum', 'Admissions', 'Faculty'].map((item, index) => (
                <motion.a
                  key={item}
                  href={item === 'Admissions' ? '/admissions' : item === 'Faculty' ? '/faculty' : item === 'Curriculum' ? '/curriculum' : `/#${item.toLowerCase()}`}
                  className={`relative font-medium transition-colors duration-300 py-2 ${
                    item === 'Faculty' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
                  }`}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {item}
                  {item === 'Faculty' && (
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
                Contact Faculty
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
                {['Curriculum', 'Admissions', 'Faculty'].map((item) => (
                  <a
                    key={item}
                    href={item === 'Admissions' ? '/admissions' : item === 'Faculty' ? '/faculty' : item === 'Curriculum' ? '/curriculum' : `/#${item.toLowerCase()}`}
                    className={`block font-medium py-2 transition-colors ${
                      item === 'Faculty' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
                <button className="w-full mt-4 px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors">
                  Contact Faculty
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
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8">
              Distinguished
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent block">
                Faculty & Researchers
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto">
              Learn from world-renowned experts, industry leaders, and pioneering researchers 
              at the forefront of computational biology and bioinformatics.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div className="flex items-center justify-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <Award className="w-5 h-5 text-blue-600" />
                  <span>World-Class Faculty</span>
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

      {/* Faculty Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {facultyCategories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Profiles */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8">
            {filteredFaculty.map((faculty, index) => (
              <motion.div
                key={faculty.id}
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
                          <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white text-4xl font-bold">
                            {faculty.name.split(' ').map(n => n[0]).join('')}
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-3 text-center lg:text-left">
                        <div className="flex items-center justify-center lg:justify-start space-x-2 text-sm text-gray-600">
                          <Building className="w-4 h-4" />
                          <span>{faculty.institution}</span>
                        </div>
                        <div className="flex items-center justify-center lg:justify-start space-x-2 text-sm text-gray-600">
                          <Mail className="w-4 h-4" />
                          <a href={`mailto:${faculty.email}`} className="text-blue-600 hover:underline">{faculty.email}</a>
                        </div>
                        <div className="flex items-center justify-center lg:justify-start space-x-2 text-sm text-gray-600">
                          <MapPin className="w-4 h-4" />
                          <span>{faculty.office}</span>
                        </div>
                      </div>

                      {/* Social Links */}
                      <div className="mt-6 flex justify-center lg:justify-start">
                        <a href={faculty.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors shadow-lg" title="LinkedIn Profile">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                          </svg>
                        </a>
                      </div>
                    </div>
                    
                    {/* Faculty Information */}
                    <div className="lg:w-3/4">
                      <div className="mb-6">
                        <h2 className="text-3xl font-bold text-gray-900 mb-2">{faculty.name}</h2>
                        <p className="text-xl text-blue-600 font-semibold mb-2">{faculty.title}</p>
                        <p className="text-lg text-gray-600 mb-4">{faculty.department}</p>
                        <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                          {faculty.category}
                        </span>
                      </div>

                      {/* Research Interests */}
                      <div className="mb-6">
                        <h3 className="text-lg font-bold text-gray-900 mb-3">Research Interests</h3>
                        <div className="flex flex-wrap gap-2">
                          {faculty.researchInterests.map((interest) => (
                            <span key={interest} className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full">
                              {interest}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Courses */}
                      <div className="mb-6">
                        <h3 className="text-lg font-bold text-gray-900 mb-3">Courses Teaching</h3>
                        <div className="grid md:grid-cols-2 gap-2">
                          {faculty.courses.map((course) => (
                            <div key={course} className="flex items-center space-x-2 text-sm text-gray-700">
                              <BookOpen className="w-4 h-4 text-blue-500" />
                              <span>{course}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Expandable Sections */}
                      <div className="space-y-4">
                        <motion.button
                          onClick={() => setExpandedFaculty(expandedFaculty === faculty.id ? null : faculty.id)}
                          className="flex items-center justify-between w-full p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                          whileHover={{ scale: 1.02 }}
                        >
                          <span className="font-semibold text-gray-900">View Detailed Profile</span>
                          <motion.div
                            animate={{ rotate: expandedFaculty === faculty.id ? 90 : 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <ChevronRight className="w-5 h-5 text-gray-600" />
                          </motion.div>
                        </motion.button>

                        <AnimatePresence>
                          {expandedFaculty === faculty.id && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <div className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl space-y-6">
                                {/* Education */}
                                <div>
                                  <h4 className="text-lg font-bold text-gray-900 mb-3">Education</h4>
                                  <div className="space-y-2">
                                    {faculty.education.map((edu, index) => (
                                      <div key={index} className="flex items-start space-x-2 text-sm text-gray-700">
                                        <GraduationCap className="w-4 h-4 text-blue-500 mt-0.5" />
                                        <span>{edu}</span>
                                      </div>
                                    ))}
                                  </div>
                                </div>

                                {/* Experience */}
                                <div>
                                  <h4 className="text-lg font-bold text-gray-900 mb-3">Professional Experience</h4>
                                  <div className="space-y-2">
                                    {faculty.experience.map((exp, index) => (
                                      <div key={index} className="flex items-start space-x-2 text-sm text-gray-700">
                                        <Building className="w-4 h-4 text-green-500 mt-0.5" />
                                        <span>{exp}</span>
                                      </div>
                                    ))}
                                  </div>
                                </div>


                                {/* Selected Publications */}
                                <div>
                                  <h4 className="text-lg font-bold text-gray-900 mb-3">Selected Publications</h4>
                                  <div className="space-y-3">
                                    {faculty.selectedPublications.map((pub, index) => (
                                      <div key={index} className="p-3 bg-white rounded-lg shadow-sm">
                                        <p className="text-sm text-gray-800 leading-relaxed">{pub}</p>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </div>
                </div>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to Learn from the Best?</h2>
            <p className="text-xl text-gray-300 mb-12">
              Join our exclusive program and receive mentorship from world-renowned faculty and industry experts.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.button
                className="px-10 py-5 bg-white text-gray-900 font-bold text-lg rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Users className="w-6 h-6" />
                <span>Meet Our Faculty</span>
              </motion.button>
              <motion.a
                href="/admissions"
                className="px-10 py-5 border-2 border-white text-white font-bold text-lg rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300 flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <GraduationCap className="w-6 h-6" />
                <span>Apply Now</span>
              </motion.a>
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
                {['Program Overview', 'Curriculum', 'Admissions', 'Faculty', 'Career Services', 'Student Life'].map((link) => (
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