'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, BookOpen, Users, Award, ArrowRight, Mail, Phone, MapPin, GraduationCap, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Home() {
  const [activeTab, setActiveTab] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const quarters = [
    {
      title: "Quarter 1: Foundations",
      courses: [
        {
          code: "BCB101",
          credits: 3,
          title: "Foundational Biology for Bioinformatics",
          content: "Advanced concepts in genetics, gene expression, and epigenetics. In-depth study of genomics, transcriptomics, proteomics, and single-cell sequencing.",
          goals: "Develop a strong understanding of molecular biology and 'omics technologies, and learn to navigate key biological databases."
        },
        {
          code: "BCB102",
          credits: 3,
          title: "Programming and Statistical Computing",
          content: "Advanced Python scripting for data manipulation (Pandas, NumPy, BioPython). Statistical computing with R. Mandatory use of Git and GitHub.",
          goals: "Master essential programming skills in Python and R for data analysis, and establish a foundation in collaborative software development."
        },
        {
          code: "BCB103",
          credits: 3,
          title: "Biological Databases and Data Retrieval",
          content: "In-depth exploration of key databases and programmatic access via APIs. Hands-on work with standard data formats like FASTA, FASTQ, and VCF.",
          goals: "Gain proficiency in accessing, parsing, and managing diverse biological data formats, and learn to automate data retrieval."
        }
      ]
    },
    {
      title: "Quarter 2: Core Methods",
      courses: [
        {
          code: "BCB201",
          credits: 3,
          title: "Genomics, Proteomics and Transcriptomics",
          content: "Comprehensive workflows for read quality control, alignment, and assembly. Differential expression analysis of RNA-seq data (DESeq2, EdgeR).",
          goals: "Design and execute complete bioinformatics pipelines for NGS data, from raw reads to meaningful biological insights."
        },
        {
          code: "BCB202",
          credits: 3,
          title: "Structural and Evolutionary Bioinformatics",
          content: "Principles of protein folding and structural prediction. Hands-on use of modern tools like AlphaFold and molecular visualization software.",
          goals: "Understand protein structure and evolution, using cutting-edge computational tools for structural analysis."
        },
        {
          code: "BCB203",
          credits: 3,
          title: "Variant Calling and Population Genetics",
          content: "Introduction to genetic variation. Comprehensive variant calling pipelines using tools like GATK.",
          goals: "Understand and identify genetic variations from sequencing data, and interpret their impact in population genetics."
        }
      ]
    },
    {
      title: "Quarter 3: AI & Machine Learning",
      courses: [
        {
          code: "BCB301",
          credits: 3,
          title: "Machine Learning for Life Sciences",
          content: "Supervised and unsupervised learning models for biological data. Ethical considerations and robust model validation.",
          goals: "Apply machine learning algorithms to solve biological problems, from disease classification to biomarker discovery."
        },
        {
          code: "BCB302",
          credits: 3,
          title: "Deep Learning and Generative AI",
          content: "Understanding and implementing CNNs, RNNs, and Transformers. Applications of Generative AI to design novel proteins and optimize drug candidates.",
          goals: "Develop deep learning models for complex biological data and leverage Generative AI for innovative research."
        },
        {
          code: "BCB303",
          credits: 3,
          title: "Computational Drug Discovery",
          content: "Molecular docking and virtual screening for drug discovery. Molecular dynamics simulations to understand drug-protein interactions.",
          goals: "Utilize computational methods to accelerate drug discovery, from identifying lead compounds to simulating interactions."
        }
      ]
    },
    {
      title: "Quarter 4: Capstone",
      courses: [
        {
          code: "BCB401",
          credits: 6,
          title: "Capstone Project",
          content: "A significant research project with an instructor mentor from DeepBio Limited. Culminates in a final presentation of findings and methodology.",
          goals: "Independently apply all skills learned throughout the program to a real-world problem, demonstrating professional research capabilities."
        },
        {
          code: "BCB402",
          credits: 3,
          title: "Scientific Communication and Career Readiness",
          content: "Mastering scientific writing, preparing professional presentations, and data visualization. Workshops on grant writing and career pathways.",
          goals: "Effectively communicate complex scientific findings and prepare for a successful career in bioinformatics industry or academia."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-lg font-bold text-gray-900">BCB Program</h1>
                <p className="text-xs text-gray-600">DeepBio Limited</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#overview" className="text-gray-700 hover:text-blue-600 transition-colors">Overview</a>
              <a href="#curriculum" className="text-gray-700 hover:text-blue-600 transition-colors">Curriculum</a>
              <a href="#program-guide" className="text-gray-700 hover:text-blue-600 transition-colors">Program Guide</a>
              <a href="#director" className="text-gray-700 hover:text-blue-600 transition-colors">Director</a>
            </nav>
            
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-white border-t border-gray-200 shadow-lg"
            >
            <div className="px-4 py-4 space-y-3">
              <a
                href="#overview"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-gray-700 hover:text-blue-600 transition-colors py-2"
              >
                Overview
              </a>
              <a
                href="#curriculum"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-gray-700 hover:text-blue-600 transition-colors py-2"
              >
                Curriculum
              </a>
              <a
                href="#program-guide"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-gray-700 hover:text-blue-600 transition-colors py-2"
              >
                Program Guide
              </a>
              <a
                href="#director"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-gray-700 hover:text-blue-600 transition-colors py-2"
              >
                Director
              </a>
            </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <motion.div 
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center">
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              One-Year Professional Training in
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent block">
                Bioinformatics & Computational Biology
              </span>
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              A comprehensive program designed to provide participants with theoretical knowledge and practical skills 
              required to excel in the interdisciplinary fields of bioinformatics and computational biology.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <a
                href="#curriculum"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-lg font-semibold flex items-center gap-2 hover:shadow-lg transition-all inline-flex"
              >
                View Curriculum <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#overview"
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-all inline-flex"
              >
                Learn More
              </a>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Program Overview */}
      <section id="overview" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Understanding the Field</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Learn the distinctions between bioinformatics, computational biology, and data science
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <motion.div 
              className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <BookOpen className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Bioinformatics</h3>
              <p className="text-gray-600 mb-4">
                The application of computer science, statistics, and mathematics to analyze and interpret biological data. 
                Primarily concerned with management and analysis of large-scale biological datasets.
              </p>
              <div className="text-sm text-blue-600 font-medium">Data-driven • Analysis-focused</div>
            </motion.div>

            <motion.div 
              className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl border border-green-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Users className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Computational Biology</h3>
              <p className="text-gray-600 mb-4">
                Uses computational and mathematical modeling to understand biological systems. 
                Focuses on developing theoretical models and simulations to predict biological behavior.
              </p>
              <div className="text-sm text-green-600 font-medium">Hypothesis-driven • Model-based</div>
            </motion.div>

            <motion.div 
              className="bg-gradient-to-br from-purple-50 to-violet-50 p-8 rounded-2xl border border-purple-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Award className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Integration</h3>
              <p className="text-gray-600 mb-4">
                Modern bioinformatics leverages Machine Learning, Deep Learning, and Generative AI 
                to find complex patterns and create novel solutions in biological research.
              </p>
              <div className="text-sm text-purple-600 font-medium">AI-powered • Innovation-focused</div>
            </motion.div>
          </div>

          <motion.div 
            className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 md:p-12 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-6">Why This Matters Now</h3>
            <p className="text-lg text-gray-300 mb-6">
              The revolution in high-throughput sequencing technologies has led to an exponential increase in biological data. 
              Traditional biological methods are insufficient to handle this "big data" from genomics, proteomics, and metabolomics.
            </p>
            <p className="text-lg text-gray-300">
              Bioinformatics and computational biology provide the essential tools to organize, analyze, and interpret this massive 
              influx of information, transforming raw data into actionable insights for healthcare, drug discovery, and agriculture.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section id="curriculum" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Course Catalog</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              36 credits across four quarters, designed to meet international standards
            </p>
          </motion.div>

          {/* Quarter Tabs */}
          <div className="flex flex-wrap justify-center mb-12 bg-white rounded-2xl p-2 shadow-sm">
            {quarters.map((quarter, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                  activeTab === index
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                {quarter.title}
              </button>
            ))}
          </div>

          {/* Course Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="grid gap-6"
          >
            {quarters[activeTab].courses.map((course, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="bg-gradient-to-br from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-lg font-bold text-center">
                      {course.code}
                    </div>
                    <div className="text-sm text-gray-500 text-center mt-1">
                      {course.credits} Credits
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{course.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{course.content}</p>
                    <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600">
                      <h4 className="font-semibold text-blue-900 mb-2">Learning Goals:</h4>
                      <p className="text-blue-800">{course.goals}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Program Guide Preview */}
      <section id="program-guide" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Program Management Guide</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive framework for administration, instructors, and students
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Users className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">For Students</h3>
              <ul className="space-y-3 text-gray-600">
                <li>• Prerequisites and expectations</li>
                <li>• Learning outcomes and resources</li>
                <li>• Assessment and grading policies</li>
                <li>• Capstone project requirements</li>
                <li>• Academic integrity guidelines</li>
              </ul>
            </motion.div>

            <motion.div 
              className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl border border-green-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <BookOpen className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">For Instructors</h3>
              <ul className="space-y-3 text-gray-600">
                <li>• Instructional excellence standards</li>
                <li>• Mentorship responsibilities</li>
                <li>• Project-based learning approach</li>
                <li>• Interdisciplinary collaboration</li>
                <li>• Ethical considerations integration</li>
              </ul>
            </motion.div>

            <motion.div 
              className="bg-gradient-to-br from-purple-50 to-violet-50 p-8 rounded-2xl border border-purple-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Award className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">For Administration</h3>
              <ul className="space-y-3 text-gray-600">
                <li>• Quality assurance processes</li>
                <li>• Resource management</li>
                <li>• Student support services</li>
                <li>• International partnerships</li>
                <li>• Budget and infrastructure</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Program Director */}
      <section id="director" className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Program Director</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Leading expertise in bioinformatics education and research
            </p>
          </motion.div>

          <motion.div 
            className="max-w-4xl mx-auto bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-4">Md. Jubayer Hossain</h3>
              <div className="space-y-2 text-gray-300">
                <p className="text-lg font-semibold text-blue-300">Founder & Chief Executive Officer, DeepBio Limited</p>
                <p>Founder & Executive Director, CHIRAL Bangladesh</p>
                <p>Instructor, Daffodil International University</p>
                <p>Instructor, cBLAST, University of Dhaka</p>
                <p>Program Lead, GSA Bioinformatics Internship</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">BCB Program</h3>
                  <p className="text-sm text-gray-400">DeepBio Limited</p>
                </div>
              </div>
              <p className="text-gray-400">
                Professional training in bioinformatics and computational biology, 
                preparing the next generation of interdisciplinary researchers.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#overview" className="hover:text-white transition-colors">Program Overview</a></li>
                <li><a href="#curriculum" className="hover:text-white transition-colors">Curriculum</a></li>
                <li><a href="#program-guide" className="hover:text-white transition-colors">Program Guide</a></li>
                <li><a href="#director" className="hover:text-white transition-colors">Director</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5" />
                  <span>info@deepbio.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5" />
                  <span>+880-XXX-XXXXX</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5" />
                  <span>Dhaka, Bangladesh</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 DeepBio Limited. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
