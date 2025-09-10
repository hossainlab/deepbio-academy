'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronDown, ChevronUp, HelpCircle, BookOpen, Calendar, 
  DollarSign, GraduationCap, Clock, Users, Globe, 
  Award, FileText, Phone, MapPin, ExternalLink, CheckCircle
} from 'lucide-react';
import Navbar from '../../components/Navbar';

export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  const faqCategories = [
    {
      title: "Program Overview",
      icon: <BookOpen className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
      faqs: [
        {
          question: "What is the Professional Training in Bioinformatics and Computational Biology program?",
          answer: "This is a comprehensive 42-credit professional training program designed to prepare students for careers in bioinformatics and computational biology. The program combines theoretical knowledge with hands-on practical skills, covering everything from basic molecular biology to advanced computational methods used in modern biological research."
        },
        {
          question: "What makes this program unique?",
          answer: "Our program stands out through its industry-focused curriculum, direct mentorship from leading professionals, international certification opportunities, and strong emphasis on practical application. We bridge the gap between academic theory and industry requirements, ensuring graduates are job-ready."
        },
        {
          question: "Is this program recognized internationally?",
          answer: "Yes, our program offers international certificates and is designed to meet global industry standards. We have partnerships with international institutions and our curriculum is aligned with international best practices in bioinformatics education."
        },
        {
          question: "What career opportunities will this program open for me?",
          answer: "Graduates can pursue roles as Bioinformatics Analysts, Computational Biologists, Data Scientists in biotech/pharma, Research Scientists, Genomics Specialists, and Biostatisticians. The field is rapidly growing with excellent job prospects globally."
        }
      ]
    },
    {
      title: "Admissions & Requirements",
      icon: <GraduationCap className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500",
      faqs: [
        {
          question: "What are the admission requirements?",
          answer: "Applicants need a Bachelor's degree in Biology, Computer Science, Mathematics, Chemistry, Physics, or related field. We also require two academic/professional reference letters, a statement of purpose (500-1000 words), and successful completion of our interview process."
        },
        {
          question: "Do I need programming experience to apply?",
          answer: "While programming experience is helpful, it's not mandatory. Our curriculum starts with programming fundamentals and gradually builds up to advanced computational methods. However, strong analytical thinking and problem-solving skills are essential."
        },
        {
          question: "Can international students apply?",
          answer: "Absolutely! We welcome international students. International applicants should ensure they have proper documentation and may need to provide additional visa-related paperwork upon acceptance."
        },
        {
          question: "What is the selection process?",
          answer: "Our selection process includes: 1) Online application review, 2) Technical interview (20-30 minutes covering basic concepts), 3) Assessment of motivation and career goals, 4) Academic background evaluation. The entire process typically takes 3-4 weeks."
        },
        {
          question: "Is there an application fee?",
          answer: "No, there is no application fee. However, upon acceptance, students need to pay an acceptance fee of ৳10,000 BDT, which is deductible from the total program fees."
        }
      ]
    },
    {
      title: "Curriculum & Learning",
      icon: <FileText className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500",
      faqs: [
        {
          question: "How is the curriculum structured?",
          answer: "The program consists of 42 credits covering: Molecular Biology Fundamentals, Programming for Biology, Statistics and Data Analysis, Genomics and Proteomics, Machine Learning Applications, Database Management, and a capstone research project. Each module builds upon previous knowledge."
        },
        {
          question: "What programming languages will I learn?",
          answer: "The program covers Python (primary language for bioinformatics), R (for statistical analysis), SQL (for database management), and introduces other relevant tools like Bash scripting and version control with Git."
        },
        {
          question: "How much time should I dedicate to studies?",
          answer: "We recommend 15-20 hours per week for optimal learning. This includes attending classes, completing assignments, working on projects, and self-study. The program is designed to be intensive but manageable for working professionals."
        },
        {
          question: "Are there practical projects included?",
          answer: "Yes, the curriculum includes multiple hands-on projects, case studies using real biological datasets, and a comprehensive capstone research project. Students work with industry-standard tools and databases throughout the program."
        },
        {
          question: "Will I receive certificates?",
          answer: "Upon successful completion, you'll receive both institutional certificates and international certificates. These credentials are recognized by employers globally and demonstrate your competency in bioinformatics and computational biology."
        }
      ]
    },
    {
      title: "Fees & Payment",
      icon: <DollarSign className="w-6 h-6" />,
      color: "from-orange-500 to-red-500",
      faqs: [
        {
          question: "What are the program fees?",
          answer: "The base program fee is ৳80,000 BDT. However, early applicants and students from Academic Partner institutions receive a ৳20,000 BDT discount, making the final fee ৳60,000 BDT."
        },
        {
          question: "How can I qualify for the discount?",
          answer: "Discounts are available for: 1) Early applications (apply early and save ৳20,000), 2) Students from Academic Partner institutions (automatic ৳20,000 discount). Check our Academic Partnership section for institution registration."
        },
        {
          question: "What payment options are available?",
          answer: "Payment can be made in installments: 1) Acceptance fee: ৳10,000 BDT (upon admission), 2) Remaining balance: ৳50,000 BDT (before program start). We accept bank transfers, mobile banking, and other standard payment methods."
        },
        {
          question: "Are there any hidden costs?",
          answer: "No hidden costs. The program fee covers all course materials, access to computational resources, mentorship, career guidance, and certification. Students may need their own computer and internet connection for online components."
        },
        {
          question: "Is financial assistance available?",
          answer: "We offer various discount schemes including early bird discounts and academic partner benefits. For exceptional cases, we may consider payment plans. Contact our admissions team to discuss your specific situation."
        }
      ]
    },
    {
      title: "Schedule & Format",
      icon: <Calendar className="w-6 h-6" />,
      color: "from-indigo-500 to-purple-500",
      faqs: [
        {
          question: "How long is the program?",
          answer: "The program duration varies based on your pace and schedule, typically ranging from 8-12 months for full-time study or 12-18 months for part-time study. The flexible structure allows working professionals to complete it alongside their current commitments."
        },
        {
          question: "Is the program offered online or in-person?",
          answer: "The program offers a hybrid format with both online and in-person components. Core lectures and practical sessions can be attended online, while some workshops and networking events are held in-person for enhanced learning experience."
        },
        {
          question: "What are the class schedules?",
          answer: "Classes are scheduled to accommodate working professionals, typically in evenings and weekends. Recorded sessions are available for those who cannot attend live classes. The flexible schedule allows you to balance work and studies."
        },
        {
          question: "Can I study part-time while working?",
          answer: "Absolutely! The program is designed with working professionals in mind. The flexible schedule, recorded lectures, and asynchronous assignments allow you to progress at your own pace while maintaining your current job."
        }
      ]
    },
    {
      title: "Career Support & Placement",
      icon: <Award className="w-6 h-6" />,
      color: "from-emerald-500 to-teal-500",
      faqs: [
        {
          question: "Do you provide job placement assistance?",
          answer: "Yes, we offer comprehensive career placement assistance including resume building, interview preparation, job matching with our industry partners, and ongoing career guidance. Our strong industry network helps connect graduates with relevant opportunities."
        },
        {
          question: "What is the job placement rate?",
          answer: "Our graduates have an excellent track record with high placement rates in bioinformatics and computational biology roles. Many find positions within 3-6 months of graduation, with competitive salaries reflecting their enhanced skills."
        },
        {
          question: "Can I network with industry professionals?",
          answer: "Yes, the program includes industry mentorship, guest lectures from leading professionals, networking events, and access to our alumni network. These connections often lead to job opportunities and collaborations."
        },
        {
          question: "What salary range can I expect after graduation?",
          answer: "Salaries vary by location, experience, and role, but bioinformatics professionals typically command competitive salaries. Entry-level positions often start at competitive rates, with significant growth potential as you gain experience."
        }
      ]
    },
    {
      title: "Technical Requirements",
      icon: <Globe className="w-6 h-6" />,
      color: "from-cyan-500 to-blue-500",
      faqs: [
        {
          question: "What computer requirements do I need?",
          answer: "A modern computer (laptop or desktop) with at least 8GB RAM, sufficient storage space, and a reliable internet connection. We'll provide guidance on setting up the required software environments. Both Windows, Mac, and Linux systems are supported."
        },
        {
          question: "Will software and tools be provided?",
          answer: "Yes, we provide access to all necessary software, databases, and computational resources. Most tools used are open-source, and we'll guide you through installation and setup. Cloud computing resources are also provided for computationally intensive tasks."
        },
        {
          question: "Do I need prior experience with specific software?",
          answer: "No prior experience with bioinformatics software is required. The program starts with basics and progressively introduces more advanced tools. However, basic computer literacy and willingness to learn new software are essential."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
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
              Frequently Asked
              <motion.span
                className="bg-gradient-to-r from-blue-700 via-blue-600 to-purple-600 bg-clip-text text-transparent block leading-tight font-extrabold"
                style={{ lineHeight: '1.2', paddingBottom: '0.1em' }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                Questions
              </motion.span>
            </motion.h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto">
              Find answers to common questions about our Professional Training in Bioinformatics and Computational Biology program
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.a
                href="https://forms.gle/kEdbyBf1bHsDmiU57"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Apply Now</span>
                <ExternalLink className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="mailto:info@deepbioacademy.com"
                className="px-8 py-4 bg-white/80 backdrop-blur-sm text-gray-800 font-bold rounded-full border-2 border-gray-300 hover:border-blue-500 transition-all duration-300 flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="w-5 h-5" />
                <span>Contact Us</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {faqCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden"
              >
                <div className={`bg-gradient-to-r ${category.color} p-6`}>
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-white/20 rounded-lg backdrop-blur-sm">
                      {category.icon}
                    </div>
                    <h2 className="text-2xl font-bold text-white">{category.title}</h2>
                  </div>
                </div>
                
                <div className="divide-y divide-gray-200">
                  {category.faqs.map((faq, faqIndex) => {
                    const itemIndex = categoryIndex * 1000 + faqIndex;
                    const isOpen = openItems.includes(itemIndex);
                    
                    return (
                      <div key={faqIndex}>
                        <button
                          onClick={() => toggleItem(itemIndex)}
                          className="w-full px-6 py-6 text-left hover:bg-gray-50 transition-colors focus:outline-none focus:bg-gray-50"
                        >
                          <div className="flex items-center justify-between">
                            <h3 className="text-lg font-semibold text-gray-900 pr-4">
                              {faq.question}
                            </h3>
                            <div className="flex-shrink-0">
                              {isOpen ? (
                                <ChevronUp className="w-5 h-5 text-gray-500" />
                              ) : (
                                <ChevronDown className="w-5 h-5 text-gray-500" />
                              )}
                            </div>
                          </div>
                        </button>
                        
                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <div className="px-6 pb-6">
                                <p className="text-gray-700 leading-relaxed">
                                  {faq.answer}
                                </p>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions Section */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Still Have Questions?
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Our admissions team is here to help you make the best decision for your career
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <motion.a
                href="mailto:info@deepbioacademy.com"
                className="flex items-center justify-center space-x-3 bg-white/20 backdrop-blur-sm text-white font-semibold py-4 px-6 rounded-xl hover:bg-white/30 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="w-5 h-5" />
                <span>Contact Admissions</span>
              </motion.a>
              
              <motion.a
                href="https://forms.gle/kEdbyBf1bHsDmiU57"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-3 bg-white text-blue-600 font-semibold py-4 px-6 rounded-xl hover:bg-blue-50 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink className="w-5 h-5" />
                <span>Apply Now</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Links Footer */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Explore More
            </h2>
            <p className="text-lg text-gray-600">
              Learn more about our program and take the next step
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Curriculum Details",
                description: "Explore our comprehensive 42-credit curriculum",
                href: "/curriculum",
                icon: <BookOpen className="w-6 h-6" />,
                color: "from-blue-500 to-cyan-500"
              },
              {
                title: "Admission Process",
                description: "Learn about our step-by-step admission process",
                href: "/admissions",
                icon: <GraduationCap className="w-6 h-6" />,
                color: "from-green-500 to-emerald-500"
              },
              {
                title: "Meet Instructors",
                description: "Get to know our expert faculty and mentors",
                href: "/instructors",
                icon: <Users className="w-6 h-6" />,
                color: "from-purple-500 to-pink-500"
              }
            ].map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                className="block bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${link.color} rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {link.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {link.title}
                </h3>
                <p className="text-gray-600">
                  {link.description}
                </p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}