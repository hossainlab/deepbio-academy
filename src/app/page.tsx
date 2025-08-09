'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { 
  BookOpen, Users, Award, ArrowRight, Mail, Phone, MapPin, GraduationCap, 
  Menu, X, ChevronDown, Star, Globe, Calendar, Clock, CheckCircle,
  PlayCircle, Download, ExternalLink, Zap, Target, TrendingUp
} from 'lucide-react';

export default function Home() {
  const [activeTab, setActiveTab] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  const headerOpacity = useTransform(scrollY, [0, 100], [0.8, 0.95]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const quarters = [
    {
      title: "Quarter 1",
      subtitle: "Foundations",
      description: "Build your foundational knowledge in molecular biology and computational methods",
      icon: "🧬",
      courses: [
        {
          code: "BCB101",
          credits: 3,
          title: "Foundational Biology for Bioinformatics",
          content: "Advanced concepts in genetics, gene expression, and epigenetics. In-depth study of genomics, transcriptomics, proteomics, and single-cell sequencing. Practical use of NCBI, EBI, UniProt databases.",
          goals: "Develop a strong understanding of molecular biology and 'omics technologies, and learn to navigate key biological databases.",
          difficulty: "Intermediate",
          duration: "12 weeks"
        },
        {
          code: "BCB102",
          credits: 3,
          title: "Programming and Statistical Computing",
          content: "Advanced Python scripting for data manipulation (Pandas, NumPy, BioPython). Statistical computing with R. Mandatory use of Git and GitHub for version control.",
          goals: "Master essential programming skills in Python and R for data analysis, and establish a foundation in collaborative software development.",
          difficulty: "Intermediate",
          duration: "12 weeks"
        },
        {
          code: "BCB103",
          credits: 3,
          title: "Biological Databases and Data Retrieval",
          content: "In-depth exploration of key databases and programmatic access via APIs. Hands-on work with standard data formats like FASTA, FASTQ, and VCF.",
          goals: "Gain proficiency in accessing, parsing, and managing diverse biological data formats, and learn to automate data retrieval.",
          difficulty: "Beginner",
          duration: "12 weeks"
        }
      ]
    },
    {
      title: "Quarter 2",
      subtitle: "Core Methods",
      description: "Master essential bioinformatics analysis techniques and workflows",
      icon: "⚗️",
      courses: [
        {
          code: "BCB201",
          credits: 3,
          title: "Genomics, Proteomics and Transcriptomics",
          content: "Comprehensive workflows for read quality control, alignment, and assembly. Differential expression analysis of RNA-seq data using DESeq2 and EdgeR.",
          goals: "Design and execute complete bioinformatics pipelines for NGS data, from raw reads to meaningful biological insights.",
          difficulty: "Advanced",
          duration: "12 weeks"
        },
        {
          code: "BCB202",
          credits: 3,
          title: "Structural and Evolutionary Bioinformatics",
          content: "Principles of protein folding and structural prediction. Hands-on use of modern tools like AlphaFold and molecular visualization software.",
          goals: "Understand protein structure and evolution, using cutting-edge computational tools for structural analysis.",
          difficulty: "Advanced",
          duration: "12 weeks"
        },
        {
          code: "BCB203",
          credits: 3,
          title: "Variant Calling and Population Genetics",
          content: "Introduction to genetic variation. Comprehensive variant calling pipelines using tools like GATK. Population genetics analysis.",
          goals: "Understand and identify genetic variations from sequencing data, and interpret their impact in population genetics context.",
          difficulty: "Intermediate",
          duration: "12 weeks"
        }
      ]
    },
    {
      title: "Quarter 3",
      subtitle: "AI & Machine Learning",
      description: "Harness the power of artificial intelligence in biological research",
      icon: "🤖",
      courses: [
        {
          code: "BCB301",
          credits: 3,
          title: "Machine Learning for Life Sciences",
          content: "Supervised and unsupervised learning models for biological data. Feature engineering, model validation, and ethical considerations in biomedical ML.",
          goals: "Apply machine learning algorithms to solve biological problems, from disease classification to biomarker discovery.",
          difficulty: "Advanced",
          duration: "12 weeks"
        },
        {
          code: "BCB302",
          credits: 3,
          title: "Deep Learning and Generative AI",
          content: "Understanding CNNs, RNNs, and Transformers. Applications of Generative AI to design novel proteins and optimize drug candidates.",
          goals: "Develop deep learning models for complex biological data and leverage Generative AI for innovative research.",
          difficulty: "Expert",
          duration: "12 weeks"
        },
        {
          code: "BCB303",
          credits: 3,
          title: "Computational Drug Discovery",
          content: "Molecular docking and virtual screening. Molecular dynamics simulations to understand drug-protein interactions and ADMET prediction.",
          goals: "Utilize computational methods to accelerate drug discovery, from identifying lead compounds to simulating interactions.",
          difficulty: "Advanced",
          duration: "12 weeks"
        }
      ]
    },
    {
      title: "Quarter 4",
      subtitle: "Capstone",
      description: "Apply your knowledge in real-world research projects",
      icon: "🎓",
      courses: [
        {
          code: "BCB401",
          credits: 6,
          title: "Capstone Research Project",
          content: "A significant research project with a faculty mentor from DeepBio Limited. Students work on cutting-edge problems in collaboration with industry partners.",
          goals: "Independently apply all skills learned throughout the program to a real-world problem, demonstrating professional research capabilities.",
          difficulty: "Expert",
          duration: "12 weeks"
        },
        {
          code: "BCB402",
          credits: 3,
          title: "Scientific Communication and Career Readiness",
          content: "Scientific writing, professional presentations, data visualization, grant writing, IP management, and biotech career pathways.",
          goals: "Effectively communicate complex scientific findings and prepare for a successful career in bioinformatics industry or academia.",
          difficulty: "Intermediate",
          duration: "12 weeks"
        }
      ]
    }
  ];

  const stats = [
    { number: "100%", label: "Employment Rate", description: "within 6 months" },
    { number: "36", label: "Credits", description: "internationally recognized" },
    { number: "15+", label: "Industry Partners", description: "for internships" },
    { number: "24/7", label: "Support", description: "technical assistance" }
  ];

  const features = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Recognition",
      description: "Internationally accredited program recognized by leading universities worldwide"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Hands-on Learning",
      description: "Real-world projects using cutting-edge tools and datasets from industry partners"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Career Focused",
      description: "Designed with input from hiring managers at top biotech and pharmaceutical companies"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Future-Ready Skills",
      description: "Learn the latest in AI, machine learning, and computational biology innovations"
    }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      role: "Bioinformatics Director, Pfizer",
      image: "👩‍💼",
      quote: "The BCB program produces graduates who are immediately productive in our research teams. The curriculum is perfectly aligned with industry needs."
    },
    {
      name: "Ahmed Rahman",
      role: "PhD Student, MIT",
      image: "👨‍🎓",
      quote: "This program gave me the foundation I needed to pursue my PhD at MIT. The hands-on experience with real datasets was invaluable."
    },
    {
      name: "Dr. Maria Rodriguez",
      role: "Senior Scientist, Illumina",
      image: "👩‍🔬",
      quote: "As a hiring manager, I specifically look for BCB program graduates. Their training in both biology and computation is exceptional."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
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
                  <h1 className="text-xl font-bold text-gray-900 tracking-tight">BCB Program</h1>
                  <p className="text-sm text-gray-600 font-medium">DeepBio University</p>
                </div>
              </motion.div>
            </Link>

            <nav className="hidden md:flex items-center space-x-8">
              {['Curriculum', 'Admissions', 'Faculty'].map((item, index) => (
                <motion.a
                  key={item}
                  href={item === 'Admissions' ? '/admissions' : item === 'Faculty' ? '/faculty' : item === 'Curriculum' ? '/curriculum' : `#${item.toLowerCase()}`}
                  className="relative text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 py-2"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {item}
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
                    initial={{ width: 0 }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.3 }}
                  />
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
                {['Curriculum', 'Admissions', 'Faculty'].map((item) => (
                  <a
                    key={item}
                    href={item === 'Admissions' ? '/admissions' : item === 'Faculty' ? '/faculty' : item === 'Curriculum' ? '/curriculum' : `#${item.toLowerCase()}`}
                    className="block text-gray-700 hover:text-blue-600 font-medium py-2 transition-colors"
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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl"></div>
          <div className="absolute top-3/4 left-1/2 w-48 h-48 bg-indigo-400/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="text-center">
            {/* Announcement Banner */}
            <motion.div
              className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full shadow-lg mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Star className="w-5 h-5 text-yellow-500 mr-2" />
              <span className="text-sm font-semibold text-gray-800">Now accepting applications for 2024</span>
              <ArrowRight className="w-4 h-4 ml-2 text-gray-600" />
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Master the Future of
              <motion.span
                className="bg-gradient-to-r from-blue-700 via-blue-600 to-purple-600 bg-clip-text text-transparent block leading-tight font-extrabold"
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

            {/* Subtitle */}
            <motion.p
              className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              A comprehensive one-year professional training program in Bioinformatics and Computational Biology, 
              combining cutting-edge data science, AI, and molecular analysis to prepare you for the next generation of life sciences careers.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.button
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center space-x-3"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Start Your Journey</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              
              <motion.button
                className="group px-8 py-4 bg-white/80 backdrop-blur-sm text-gray-800 font-bold rounded-full border-2 border-gray-300 hover:border-blue-500 hover:bg-white transition-all duration-300 flex items-center space-x-3"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <PlayCircle className="w-5 h-5" />
                <span>Watch Overview</span>
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                >
                  <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-sm font-semibold text-gray-700 mb-1">{stat.label}</div>
                  <div className="text-xs text-gray-500">{stat.description}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Why Choose Our Program?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Experience world-class education designed by industry experts and leading researchers
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="group relative p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
              >
                <div className="text-blue-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section id="program" className="py-24 bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Understanding the Field
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Learn the distinctions and intersections between bioinformatics, computational biology, and AI
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: <BookOpen className="w-12 h-12" />,
                title: "Bioinformatics",
                description: "Apply computational methods to analyze and interpret biological data, focusing on database management and algorithm development.",
                color: "from-blue-500 to-cyan-500",
                bgColor: "from-blue-50 to-cyan-50",
                features: ["Data Analysis", "Algorithm Development", "Database Management", "Statistical Methods"]
              },
              {
                icon: <Users className="w-12 h-12" />,
                title: "Computational Biology",
                description: "Use mathematical modeling and simulation to understand complex biological systems and predict biological behavior.",
                color: "from-green-500 to-emerald-500",
                bgColor: "from-green-50 to-emerald-50",
                features: ["Mathematical Modeling", "System Simulation", "Predictive Analysis", "Theoretical Framework"]
              },
              {
                icon: <Award className="w-12 h-12" />,
                title: "AI Integration",
                description: "Leverage machine learning, deep learning, and generative AI to solve complex biological problems and accelerate discovery.",
                color: "from-purple-500 to-pink-500",
                bgColor: "from-purple-50 to-pink-50",
                features: ["Machine Learning", "Deep Learning", "Generative AI", "Pattern Recognition"]
              }
            ].map((field, index) => (
              <motion.div
                key={field.title}
                className={`relative p-8 bg-gradient-to-br ${field.bgColor} rounded-3xl border border-gray-200 hover:shadow-2xl transition-all duration-500 group overflow-hidden`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className={`text-transparent bg-gradient-to-br ${field.color} bg-clip-text mb-6`}>
                  {field.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{field.title}</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">{field.description}</p>
                <div className="space-y-2">
                  {field.features.map((feature) => (
                    <div key={feature} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
                <div className={`absolute inset-0 bg-gradient-to-br ${field.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}></div>
              </motion.div>
            ))}
          </div>

          {/* Call-to-action section */}
          <motion.div
            className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 rounded-3xl p-12 md:p-16 text-white overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Healthcare?</h3>
              <p className="text-xl text-gray-200 mb-8 max-w-3xl">
                The revolution in high-throughput sequencing and AI is creating unprecedented opportunities. 
                Join the next generation of computational biologists who are transforming medicine, agriculture, and biotechnology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  className="px-8 py-4 bg-white text-gray-900 font-bold rounded-full hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Download className="w-5 h-5" />
                  <span>Download Brochure</span>
                </motion.button>
                <motion.button
                  className="px-8 py-4 border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-gray-900 transition-all flex items-center justify-center space-x-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ExternalLink className="w-5 h-5" />
                  <span>Schedule a Call</span>
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section id="curriculum" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              World-Class Curriculum
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              36 credits across four intensive quarters, designed by industry experts and updated annually
            </p>
          </motion.div>

          {/* Quarter Selection */}
          <div className="flex flex-wrap justify-center mb-16 bg-gray-50 rounded-2xl p-2">
            {quarters.map((quarter, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`relative px-6 py-4 rounded-xl font-bold transition-all duration-300 ${
                  activeTab === index
                    ? 'bg-white text-gray-900 shadow-lg'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{quarter.icon}</span>
                  <div className="text-left">
                    <div className="text-sm font-semibold">{quarter.title}</div>
                    <div className="text-xs text-gray-500">{quarter.subtitle}</div>
                  </div>
                </div>
                {activeTab === index && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                    layoutId="activeTab"
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Quarter Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                {quarters[activeTab].title}: {quarters[activeTab].subtitle}
              </h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                {quarters[activeTab].description}
              </p>
            </div>

            <div className="grid gap-8">
              {quarters[activeTab].courses.map((course, index) => (
                <motion.div
                  key={course.code}
                  className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex flex-col lg:flex-row gap-8">
                    <div className="lg:w-1/4 flex-shrink-0">
                      <div className="bg-gradient-to-br from-blue-600 to-purple-600 text-white px-6 py-4 rounded-2xl font-bold text-center mb-4">
                        {course.code}
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center text-sm text-gray-600">
                          <Clock className="w-4 h-4 mr-2" />
                          {course.duration}
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <Award className="w-4 h-4 mr-2" />
                          {course.credits} Credits
                        </div>
                        <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${
                          course.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
                          course.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                          course.difficulty === 'Advanced' ? 'bg-orange-100 text-orange-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {course.difficulty}
                        </div>
                      </div>
                    </div>
                    
                    <div className="lg:w-3/4">
                      <h4 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                        {course.title}
                      </h4>
                      <p className="text-gray-700 mb-6 leading-relaxed">
                        {course.content}
                      </p>
                      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-2xl border-l-4 border-blue-500">
                        <h5 className="font-bold text-gray-900 mb-3 flex items-center">
                          <Target className="w-5 h-5 mr-2 text-blue-600" />
                          Learning Objectives:
                        </h5>
                        <p className="text-gray-700 leading-relaxed">{course.goals}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              What Our Alumni Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join a network of successful professionals making impact across the globe
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center mb-6">
                  <div className="text-4xl mr-4">{testimonial.image}</div>
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed italic">"{testimonial.quote}"</p>
                <div className="flex text-yellow-400 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              Join the next cohort of computational biology leaders. Applications are now open for our 2024 program.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <motion.button
                className="px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Apply Now - Early Bird 20% Off
              </motion.button>
              <motion.button
                className="px-10 py-5 border-2 border-gray-300 text-gray-800 font-bold text-lg rounded-full hover:border-blue-500 hover:text-blue-600 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Request Information
              </motion.button>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-600">
              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-2 text-blue-600" />
                Application Deadline: March 15, 2024
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2 text-green-600" />
                Rolling Admissions Available
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