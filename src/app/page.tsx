'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { 
  BookOpen, Users, Award, ArrowRight, Mail, Phone, MapPin, GraduationCap, 
  Globe, Calendar, Clock, CheckCircle, Download, ExternalLink, Zap, Target, TrendingUp,
  ChevronLeft, ChevronRight
} from 'lucide-react';
import Navbar from '../components/Navbar';

// =============================================================================
// DATA & CONFIGURATION
// =============================================================================

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
        title: "Introduction to Bioinformatics and Computational Biology",
        content: "Advanced concepts in genetics, gene expression, and epigenetics. In-depth study of genomics, transcriptomics, proteomics, and single-cell sequencing. Practical use of NCBI, EBI, UniProt databases.",
        goals: "Develop a strong understanding of molecular biology and 'omics technologies, and learn to navigate key biological databases.",
        difficulty: "Intermediate",
        duration: "12 weeks"
      },
      {
        code: "BCB102",
        credits: 3,
        title: "Programming and Statistical Computing for Life Sciences",
        content: "Advanced Python scripting for data manipulation (Pandas, NumPy, BioPython). Statistical computing with R. Mandatory use of Git and GitHub for version control.",
        goals: "Master essential programming skills in Python and R for data analysis, and establish a foundation in collaborative software development.",
        difficulty: "Intermediate",
        duration: "12 weeks"
      },
      {
        code: "BCB103",
        credits: 3,
        title: "Mathematics for Bioinformatics and Computational Biology",
        content: "In-depth exploration of key databases and programmatic access via APIs. Hands-on work with standard data formats like FASTA, FASTQ, and VCF.",
        goals: "Gain proficiency in accessing, parsing, and managing diverse biological data formats, and learn to automate data retrieval.",
        difficulty: "Beginner",
        duration: "12 weeks"
      },
      {
        code: "BCB104",
        credits: 2,
        title: "Semester Project I",
        content: "First semester capstone project applying foundational concepts learned in BCB101-103. Students work individually or in small groups on a bioinformatics problem.",
        goals: "Apply foundational knowledge to solve a real-world bioinformatics problem and develop project management skills.",
        difficulty: "Intermediate",
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
        title: "Metagenomics and Microbiome Data Analysis",
        content: "Analysis of microbial communities through metagenomic sequencing. Taxonomic profiling, functional annotation, and comparative microbiome analysis.",
        goals: "Understand microbiome analysis workflows and interpret microbial community structure and function.",
        difficulty: "Advanced",
        duration: "12 weeks"
      },
      {
        code: "BCB203",
        credits: 3,
        title: "Structural Bioinformatics: Molecular Modeling and Simulation",
        content: "Protein structure prediction, molecular docking, and molecular dynamics simulations. Understanding protein-drug interactions and structure-function relationships.",
        goals: "Master computational structural biology techniques for understanding protein function and drug design.",
        difficulty: "Intermediate",
        duration: "12 weeks"
      },
      {
        code: "BCB204",
        credits: 2,
        title: "Semester Project II",
        content: "Second semester project building on advanced analysis techniques. Focus on genomics, proteomics, or structural bioinformatics applications.",
        goals: "Apply intermediate bioinformatics skills to complex biological problems and develop advanced analytical thinking.",
        difficulty: "Advanced",
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
        title: "Machine Learning in Computational Biology",
        content: "Supervised and unsupervised learning models for biological data. Feature engineering, model validation, and ethical considerations in biomedical ML.",
        goals: "Apply machine learning algorithms to solve biological problems, from disease classification to biomarker discovery.",
        difficulty: "Advanced",
        duration: "12 weeks"
      },
      {
        code: "BCB302",
        credits: 3,
        title: "Computational Systems Biology: Deep Learning in the Life Sciences",
        content: "Understanding CNNs, RNNs, and Transformers. Applications of Generative AI to design novel proteins and optimize drug candidates.",
        goals: "Develop deep learning models for complex biological data and leverage Generative AI for innovative research.",
        difficulty: "Expert",
        duration: "12 weeks"
      },
      {
        code: "BCB303",
        credits: 3,
        title: "Generative AI for Life Sciences",
        content: "Application of generative AI models for drug discovery, protein design, and biological sequence generation. Large language models in biology.",
        goals: "Master generative AI techniques for innovative biological research and drug discovery applications.",
        difficulty: "Advanced",
        duration: "12 weeks"
      },
      {
        code: "BCB304",
        credits: 2,
        title: "Semester Project III",
        content: "Advanced research project incorporating machine learning and AI techniques. Students tackle complex biological problems using cutting-edge computational methods.",
        goals: "Demonstrate mastery of advanced computational biology techniques and ability to innovate in the field.",
        difficulty: "Expert",
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
        content: "A significant research project with an instructor mentor from DeepBio Limited. Students work on cutting-edge problems in collaboration with industry partners.",
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
  { number: "100%", label: "Job Ready", description: "within 6 months" },
  { number: "42", label: "Credits", description: "internationally recognized" },
  { number: "3+", label: "Industry Partners", description: "for internships" },
  { number: "24/7", label: "Support", description: "technical assistance" }
];

const features = [
  {
    icon: <Globe className="w-8 h-8" />,
    title: "International Standard",
    description: "International standard program designed by leading experts."
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

const mentorTestimonials = [
  {
    name: "Sayed Mashequl Bari",
    role: "Assistant Professor, Faculty of Fisheries and Marine Science",
    institution: "Sher-e-Bangla Agricultural University, Dhaka, Bangladesh",
    image: "/images/mentors/bari.jpeg",
    quote: "Bioinformatics and Computational Biology are at the forefront of modern science, shaping breakthroughs in genomics, drug discovery, and personalized medicine. Programs like the Professional Training in Bioinformatics & Computational Biology by DeepBio, under the guidance of Md. Jubayer Hossain, provide students in Bangladesh with an invaluable opportunity to gain hands-on expertise in these rapidly evolving fields."
  },
  {
    name: "Syeda Tasneem Towhid, PhD",
    role: "Associate Professor, Department of Microbiology",
    institution: "Jagannath University",
    image: "/images/mentors/tasneem.jpg",
    quote: "I am pleased we are finally having an opportunity to train the graduate students in advanced AI techniques that would help us reach international levels."
  },
  {
    name: "Sabia Sultana",
    role: "Assistant Professor, Department of Microbiology",
    institution: "Jagannath University",
    image: "/images/mentors/sabia.jpg",
    quote: "I strongly believe this One-Year Professional Training in Bioinformatics & Computational Biology is more than just an academic program—it is an opportunity to step into the future of science. This program will bridge the gap between theory and practice, giving you the ability to analyze real-world biological data and prepare for global opportunities. The skills you gain here will open doors to higher studies, research positions, and meaningful careers in healthcare, biotechnology, and agriculture. You will become part of a growing community of young researchers making lasting contributions to Bangladesh and the global scientific community."
  }
];

// =============================================================================
// MAIN COMPONENT
// =============================================================================

export default function Home() {
  // State
  const [activeTab, setActiveTab] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Effects
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const testimonialInterval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % mentorTestimonials.length);
    }, 6000);
    return () => clearInterval(testimonialInterval);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      
      {/* =================================================================== */}
      {/* NAVIGATION */}
      {/* =================================================================== */}
      <Navbar isScrolled={isScrolled} />

      {/* =================================================================== */}
      {/* HERO SECTION */}
      {/* =================================================================== */}
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
              <Award className="w-5 h-5 text-blue-500 mr-2" />
              <span className="text-sm font-semibold text-gray-800">Earn International Standard Professional Certificates</span>
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
              A comprehensive one-year professional training program in Bioinformatics and Computational Biology. 
              Graduate with internationally recognized certificates that open doors to top biotech companies, research institutions, and graduate programs worldwide.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.a
                href="https://forms.gle/PAs7XKJxJnAhZ5o58"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center space-x-3"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Start Your Journey</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              
              <motion.a
                href="https://docs.google.com/spreadsheets/d/1pIDFq1UkoXbtE55Sm92zaKxVOx436Iv-rM6C7M3ufF0/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-8 py-4 bg-white/80 backdrop-blur-sm text-gray-800 font-bold rounded-full border-2 border-gray-300 hover:border-blue-500 hover:bg-white transition-all duration-300 flex items-center space-x-3"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <BookOpen className="w-5 h-5" />
                <span>View Curriculum</span>
                <ExternalLink className="w-4 h-4" />
              </motion.a>
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

      {/* =================================================================== */}
      {/* PROGRAM OVERVIEW */}
      {/* =================================================================== */}
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

        </div>
      </section>

      {/* =================================================================== */}
      {/* FEATURES SECTION */}
      {/* =================================================================== */}
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
              Experience international standard education designed by industry experts and researchers
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

      {/* =================================================================== */}
      {/* CURRICULUM SECTION */}
      {/* =================================================================== */}
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
              International Standard Curriculum
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              42 credits across four intensive quarters, designed by industry experts and updated annually
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

      {/* =================================================================== */}
      {/* UPCOMING EVENTS SECTION */}
      {/* =================================================================== */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Important Dates & Events
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Stay updated with key academic milestones, deadlines, and exciting events throughout your journey.
              </p>
              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <motion.a
                  href="https://docs.google.com/spreadsheets/d/1pIDFq1UkoXbtE55Sm92zaKxVOx436Iv-rM6C7M3ufF0/edit?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Calendar className="w-5 h-5" />
                  <span>View Academic Calendar</span>
                </motion.a>
                <motion.a
                  href="https://docs.google.com/spreadsheets/d/1pIDFq1UkoXbtE55Sm92zaKxVOx436Iv-rM6C7M3ufF0/export?format=pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border-2 border-gray-300 text-gray-700 font-bold rounded-full hover:border-blue-500 hover:text-blue-600 transition-all duration-300 flex items-center justify-center space-x-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Download className="w-5 h-5" />
                  <span>Download Calendar</span>
                </motion.a>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100"
            >
              <div className="text-center">
                <Calendar className="w-16 h-16 text-blue-600 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Academic Calendar</h3>
                <p className="text-gray-600 mb-6">
                  Access our comprehensive academic calendar with all important dates, deadlines, and events.
                </p>
                <motion.a
                  href="https://docs.google.com/spreadsheets/d/1pIDFq1UkoXbtE55Sm92zaKxVOx436Iv-rM6C7M3ufF0/edit?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 space-x-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ExternalLink className="w-5 h-5" />
                  <span>Open Calendar</span>
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =================================================================== */}
      {/* TEACHER/MENTOR ENDORSEMENTS SECTION */}
      {/* =================================================================== */}
      <section className="py-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-6">
              <Users className="w-4 h-4 mr-2" />
              Endorsed by Academic Leaders
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Endorsed by Leading Educators
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Respected teachers, professors, and researchers across Bangladesh share their perspectives on 
              the importance of bioinformatics education and encourage students to pursue this transformative program.
            </p>
          </motion.div>

          {/* Testimonial Slider */}
          <div className="relative mb-16">
            <div className="overflow-hidden rounded-3xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTestimonial}
                  initial={{ opacity: 0, x: 300 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -300 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 relative overflow-hidden"
                >
                  {/* Background decoration */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-purple-600/5 to-indigo-600/5"></div>
                  <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full blur-3xl opacity-30 -translate-y-32 translate-x-32"></div>
                  
                  <div className="relative z-10">
                    <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
                      {/* Profile */}
                      <div className="flex flex-col sm:flex-row items-center lg:items-start gap-6 lg:w-1/3">
                        <div className="relative">
                          <div className="w-24 h-24 lg:w-28 lg:h-28 rounded-2xl overflow-hidden shadow-xl ring-4 ring-white">
                            <Image
                              src={mentorTestimonials[activeTestimonial].image}
                              alt={mentorTestimonials[activeTestimonial].name}
                              fill
                              className="object-cover"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.style.display = 'none';
                                const fallback = target.nextElementSibling as HTMLDivElement;
                                if (fallback) fallback.style.display = 'flex';
                              }}
                            />
                            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100" style={{ display: 'none' }}>
                              <div className="w-12 h-12 rounded-xl bg-white/80 flex items-center justify-center">
                                <svg className="w-8 h-8 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                </svg>
                              </div>
                            </div>
                          </div>
                          <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                            <Award className="w-4 h-4 text-white" />
                          </div>
                        </div>
                        
                        <div className="text-center sm:text-left">
                          <h3 className="text-2xl font-bold text-gray-900 mb-2">{mentorTestimonials[activeTestimonial].name}</h3>
                          <p className="text-blue-600 font-semibold mb-1">{mentorTestimonials[activeTestimonial].role}</p>
                          <p className="text-gray-600 text-sm leading-relaxed">{mentorTestimonials[activeTestimonial].institution}</p>
                          <div className="flex justify-center sm:justify-start mt-3">
                            <div className="flex space-x-1">
                              {[...Array(5)].map((_, i) => (
                                <div key={i} className="w-2 h-2 rounded-full bg-yellow-400"></div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Quote */}
                      <div className="lg:w-2/3">
                        <blockquote className="text-lg lg:text-xl text-gray-700 leading-relaxed font-medium mb-6">
                          {mentorTestimonials[activeTestimonial].quote}
                        </blockquote>
                        <div className="flex items-center">
                          <div className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">
                            Academic Endorsement
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation buttons */}
            <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 flex justify-between pointer-events-none">
              <motion.button
                onClick={() => setActiveTestimonial((prev) => (prev - 1 + mentorTestimonials.length) % mentorTestimonials.length)}
                className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center pointer-events-auto group"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronLeft className="w-6 h-6 text-gray-700 group-hover:text-blue-600 transition-colors" />
              </motion.button>
              
              <motion.button
                onClick={() => setActiveTestimonial((prev) => (prev + 1) % mentorTestimonials.length)}
                className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center pointer-events-auto group"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronRight className="w-6 h-6 text-gray-700 group-hover:text-blue-600 transition-colors" />
              </motion.button>
            </div>
          </div>

          {/* Slider Indicators */}
          <div className="flex justify-center space-x-3 mb-16">
            {mentorTestimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeTestimonial
                    ? 'bg-blue-600 scale-125'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

        </div>
      </section>

      {/* =================================================================== */}
      {/* CERTIFICATE SHOWCASE SECTION */}
      {/* =================================================================== */}
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
              Earn Your Professional Certificate
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Graduate with internationally recognized certificates that open doors to top biotech companies, 
              research institutions, and graduate programs worldwide.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Industry Recognition</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Our certificates are recognized by leading biotech companies, pharmaceutical giants, 
                      and top-tier universities across 50+ countries worldwide.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Verified Credentials</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Each certificate includes blockchain verification, unique ID, and QR code 
                      for instant online verification by employers and institutions.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Career Advancement</h3>
                    <p className="text-gray-600 leading-relaxed">
                      95% of our certificate holders receive job offers or promotions within 6 months, 
                      with average salary increases of 40-60%.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <motion.div
                  className="flex flex-col sm:flex-row gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <motion.a
                    href="https://forms.gle/kEdbyBf1bHsDmiU57"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Award className="w-5 h-5" />
                    <span>Apply Now</span>
                  </motion.a>
                  <motion.button
                    className="px-8 py-4 border-2 border-gray-300 text-gray-700 font-bold rounded-full hover:border-blue-500 hover:text-blue-600 transition-all duration-300 flex items-center justify-center space-x-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Download className="w-5 h-5" />
                    <span>Sample Certificate</span>
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Certificate Preview */}
              <div className="relative bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl p-8 shadow-2xl">
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
                  {/* Mini Certificate Design */}
                  <div className="text-center space-y-4">
                    <div className="flex items-center justify-center mb-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mr-3">
                        <Award className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-left">
                        <h4 className="text-lg font-bold text-gray-900">DeepBio Academy</h4>
                        <p className="text-xs text-gray-600">Professional Training Institute</p>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-800">CERTIFICATE OF COMPLETION</h3>
                    <p className="text-sm text-gray-600">This is to certify that</p>
                    
                    <h4 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      [Your Name Here]
                    </h4>
                    
                    <p className="text-sm text-gray-600">has successfully completed the</p>
                    <h5 className="text-lg font-bold text-gray-800">Bioinformatics and Computational Biology Program</h5>
                    
                    <div className="flex justify-center items-center space-x-6 pt-4">
                      <div className="text-center">
                        <div className="text-lg font-bold text-blue-600">42</div>
                        <div className="text-xs text-gray-600">Credits</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-purple-600">Distinction</div>
                        <div className="text-xs text-gray-600">Grade</div>
                      </div>
                    </div>

                    <div className="flex justify-between items-end pt-6 text-xs text-gray-500">
                      <div>Dec 2024</div>
                      <div>Certificate ID: BCB-2024-XXX</div>
                    </div>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full opacity-80"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-400 rounded-full opacity-60"></div>
                <div className="absolute top-1/2 -right-2 w-4 h-4 bg-purple-400 rounded-full opacity-70"></div>
              </div>

              {/* Floating badges */}
              <motion.div
                className="absolute -top-6 right-8 bg-white rounded-full p-3 shadow-lg border border-gray-200"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="text-center">
                  <div className="text-sm font-bold text-green-600">95%</div>
                  <div className="text-xs text-gray-600">Job Rate</div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-6 left-8 bg-white rounded-full p-3 shadow-lg border border-gray-200"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              >
                <div className="text-center">
                  <div className="text-sm font-bold text-blue-600">10+</div>
                  <div className="text-xs text-gray-600">Target Countries</div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Certificate Types Preview */}
          <motion.div
            className="grid md:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {[
              {
                title: "Program Completion",
                description: "Full 42-credit certification",
                icon: <GraduationCap className="w-8 h-8" />,
                color: "from-blue-500 to-cyan-500"
              },
              {
                title: "Specialization Track",
                description: "Focus area expertise",
                icon: <Target className="w-8 h-8" />,
                color: "from-purple-500 to-pink-500"
              },
              {
                title: "Professional Skills",
                description: "Communication & leadership",
                icon: <Users className="w-8 h-8" />,
                color: "from-green-500 to-emerald-500"
              }
            ].map((cert, index) => (
              <motion.div
                key={cert.title}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                whileHover={{ y: -5 }}
              >
                <div className={`text-transparent bg-gradient-to-br ${cert.color} bg-clip-text mb-4`}>
                  {cert.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{cert.title}</h3>
                <p className="text-gray-600 text-sm">{cert.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* =================================================================== */}
      {/* PRICING SECTION */}
      {/* =================================================================== */}
      <section className="py-24 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Program Investment</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transparent pricing with exceptional value for world-class education
            </p>
          </motion.div>

          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-200 mb-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-8">Course Fees & Discounts</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-orange-50 rounded-xl border-l-4 border-orange-500">
                    <span className="font-semibold text-gray-800">Base Course Fee</span>
                    <span className="font-bold text-orange-600 text-xl">৳80,000 BDT</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-green-50 rounded-xl border-l-4 border-green-500">
                    <div>
                      <span className="font-semibold text-gray-800 block">Early Bird & Academic Partner Discount</span>
                      <span className="text-sm text-gray-600">Available for qualifying applicants</span>
                    </div>
                    <span className="font-bold text-green-600 text-xl">-৳20,000 BDT</span>
                  </div>
                  <div className="border-t-2 border-gray-200 pt-6">
                    <div className="flex items-center justify-between p-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl shadow-lg">
                      <div>
                        <span className="text-xl font-bold block">Final Course Fee</span>
                        <span className="text-sm opacity-90">After discount (if eligible)</span>
                      </div>
                      <span className="text-3xl font-bold">৳60,000 BDT</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <h4 className="text-2xl font-bold text-gray-900">Discount Eligibility</h4>
                <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6">
                  <div className="flex items-start space-x-3 mb-4">
                    <Award className="w-6 h-6 text-yellow-600 mt-1 flex-shrink-0" />
                    <div>
                      <h5 className="font-bold text-yellow-800 mb-2">Early Applications</h5>
                      <p className="text-sm text-yellow-700">Apply early and save ৳20,000 on your course fees</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Users className="w-6 h-6 text-yellow-600 mt-1 flex-shrink-0" />
                    <div>
                      <h5 className="font-bold text-yellow-800 mb-2">Academic Partners</h5>
                      <p className="text-sm text-yellow-700">Students from partner universities receive automatic discount</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <h5 className="font-semibold text-gray-900">What's Included</h5>
                  {[
                    "42 credits of intensive coursework",
                    "Industry mentorship and networking",
                    "Career placement assistance",
                    "International certificates",
                    "Research project supervision"
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================================== */}
      {/* CTA SECTION */}
      {/* =================================================================== */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8">
              Ready to Earn Your Professional Certificate?
            </h2>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              Join the next cohort of bioinformatics and computational biology leaders. Graduate with internationally recognized certificates that accelerate your career.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <motion.a
                href="https://forms.gle/kEdbyBf1bHsDmiU57"
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Apply Now
              </motion.a>
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
                Application Deadline: October 31, 2025
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2 text-green-600" />
                Rolling Admissions Not Available
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =================================================================== */}
      {/* FOOTER */}
      {/* =================================================================== */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="col-span-2">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                  <GraduationCap className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">BioinfoComBio</h3>
                  <p className="text-sm text-gray-400">DeepBio Academy</p>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6">
                Transforming the next generation of computational biologists through international standard training, 
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
                {[
                  { name: 'Program Overview', href: '/' }, 
                  { name: 'Curriculum', href: '/curriculum' }, 
                  { name: 'Admissions', href: '/admissions' }, 
                  { name: 'Instructors', href: '/instructors' }, 
                  { name: 'Career Services', href: '#' },
                  { name: 'Student Life', href: '#' }
                ].map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="hover:text-white transition-colors">{link.name}</a>
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
                    <p>academy@deepbioltd.com</p>
                    <p>admission@deepbioltd.com</p>
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
              &copy; 2024 DeepBio Limited. All rights reserved.
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