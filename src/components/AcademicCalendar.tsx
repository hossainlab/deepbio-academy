'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Calendar, Clock, MapPin, Users, BookOpen, Award, AlertTriangle,
  ChevronLeft, ChevronRight, Filter, Download, ExternalLink,
  GraduationCap, Coffee, Play, CheckCircle, Star, Zap
} from 'lucide-react';

interface CalendarEvent {
  id: string;
  title: string;
  date: string;
  endDate?: string;
  time?: string;
  type: 'academic' | 'deadline' | 'holiday' | 'exam' | 'orientation' | 'workshop' | 'break';
  category: 'Q1' | 'Q2' | 'Q3' | 'Q4' | 'General';
  description: string;
  location?: string;
  instructor?: string;
  isImportant?: boolean;
  status?: 'upcoming' | 'ongoing' | 'completed';
}

interface AcademicCalendarProps {
  showFilters?: boolean;
  compact?: boolean;
  hideHeader?: boolean;
}

export default function AcademicCalendar({ showFilters = true, compact = false, hideHeader = false }: AcademicCalendarProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedType, setSelectedType] = useState<string>('All');
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  const academicYear = '2024-2025';

  const calendarEvents: CalendarEvent[] = [
    // Quarter 1 Events
    {
      id: 'orientation',
      title: 'Program Orientation & Welcome',
      date: '2025-11-05',
      time: '09:00 AM - 12:00 PM',
      type: 'orientation',
      category: 'General',
      description: 'Welcome ceremony, program overview, meet your cohort and instructors',
      location: 'DeepBio Campus, Main Auditorium',
      isImportant: true,
      status: 'completed'
    },
    {
      id: 'q1-start',
      title: 'Quarter 1 Classes Begin',
      date: '2025-11-07',
      type: 'academic',
      category: 'Q1',
      description: 'Foundation courses: BCB101, BCB102, BCB103',
      isImportant: true,
      status: 'completed'
    },
    {
      id: 'bcb101-midterm',
      title: 'BCB101 Midterm Exam',
      date: '2024-10-15',
      time: '02:00 PM - 04:00 PM',
      type: 'exam',
      category: 'Q1',
      description: 'Introduction to Bioinformatics and Computational Biology',
      location: 'Room 101, Academic Building',
      instructor: 'Dr. Md. Jubayer Hossain',
      status: 'completed'
    },
    {
      id: 'programming-workshop',
      title: 'Advanced Python Workshop',
      date: '2024-10-28',
      time: '10:00 AM - 04:00 PM',
      type: 'workshop',
      category: 'Q1',
      description: 'Hands-on workshop on advanced Python techniques for bioinformatics',
      location: 'Computer Lab 2',
      instructor: 'Prof. Sarah Chen',
      status: 'completed'
    },
    {
      id: 'q1-finals',
      title: 'Quarter 1 Final Exams',
      date: '2024-11-25',
      endDate: '2024-11-29',
      type: 'exam',
      category: 'Q1',
      description: 'Final examinations for all Q1 courses',
      isImportant: true,
      status: 'completed'
    },
    {
      id: 'thanksgiving-break',
      title: 'Thanksgiving Break',
      date: '2024-11-28',
      endDate: '2024-11-29',
      type: 'holiday',
      category: 'General',
      description: 'Campus closed - Thanksgiving holiday',
      status: 'completed'
    },

    // Quarter 2 Events
    {
      id: 'q2-start',
      title: 'Quarter 2 Classes Begin',
      date: '2024-12-02',
      type: 'academic',
      category: 'Q2',
      description: 'Core Methods: BCB201, BCB202, BCB203',
      isImportant: true,
      status: 'completed'
    },
    {
      id: 'winter-break',
      title: 'Winter Break',
      date: '2024-12-20',
      endDate: '2025-01-06',
      type: 'break',
      category: 'General',
      description: 'Winter holiday break - Campus closed',
      status: 'completed'
    },
    {
      id: 'guest-lecture-1',
      title: 'Industry Guest Lecture: AlphaFold Applications',
      date: '2025-01-15',
      time: '02:00 PM - 03:30 PM',
      type: 'workshop',
      category: 'Q2',
      description: 'Special lecture by Dr. James Liu from Google DeepMind',
      location: 'Virtual/Hybrid - Main Auditorium',
      instructor: 'Dr. James Liu',
      isImportant: true,
      status: 'upcoming'
    },
    {
      id: 'bcb201-project',
      title: 'BCB201 Pipeline Project Due',
      date: '2025-02-14',
      time: '11:59 PM',
      type: 'deadline',
      category: 'Q2',
      description: 'Complete bioinformatics pipeline development project',
      isImportant: true,
      status: 'upcoming'
    },
    {
      id: 'q2-finals',
      title: 'Quarter 2 Final Exams',
      date: '2025-02-24',
      endDate: '2025-02-28',
      type: 'exam',
      category: 'Q2',
      description: 'Final examinations for all Q2 courses',
      isImportant: true,
      status: 'upcoming'
    },

    // Quarter 3 Events
    {
      id: 'q3-start',
      title: 'Quarter 3 Classes Begin',
      date: '2025-03-03',
      type: 'academic',
      category: 'Q3',
      description: 'AI & Machine Learning: BCB301, BCB302, BCB303',
      isImportant: true,
      status: 'upcoming'
    },
    {
      id: 'spring-break',
      title: 'Spring Break',
      date: '2025-03-24',
      endDate: '2025-03-28',
      type: 'break',
      category: 'General',
      description: 'Spring break - No classes',
      status: 'upcoming'
    },
    {
      id: 'ai-symposium',
      title: 'AI in Biology Symposium',
      date: '2025-04-10',
      time: '09:00 AM - 05:00 PM',
      type: 'workshop',
      category: 'Q3',
      description: 'Full-day symposium featuring latest AI applications in biology',
      location: 'DeepBio Campus, Conference Center',
      isImportant: true,
      status: 'upcoming'
    },
    {
      id: 'bcb302-demo',
      title: 'BCB302 Deep Learning Project Demo',
      date: '2025-05-05',
      time: '01:00 PM - 05:00 PM',
      type: 'academic',
      category: 'Q3',
      description: 'Student presentations of deep learning projects',
      location: 'Presentation Hall',
      status: 'upcoming'
    },
    {
      id: 'q3-finals',
      title: 'Quarter 3 Final Exams',
      date: '2025-05-19',
      endDate: '2025-05-23',
      type: 'exam',
      category: 'Q3',
      description: 'Final examinations for all Q3 courses',
      isImportant: true,
      status: 'upcoming'
    },

    // Quarter 4 Events
    {
      id: 'q4-start',
      title: 'Quarter 4 - Capstone Begins',
      date: '2025-05-26',
      type: 'academic',
      category: 'Q4',
      description: 'Capstone research project and career readiness',
      isImportant: true,
      status: 'upcoming'
    },
    {
      id: 'research-proposal',
      title: 'Capstone Research Proposal Due',
      date: '2025-06-09',
      time: '11:59 PM',
      type: 'deadline',
      category: 'Q4',
      description: 'Submit detailed research proposal for capstone project',
      isImportant: true,
      status: 'upcoming'
    },
    {
      id: 'career-fair',
      title: 'Bioinformatics Career Fair',
      date: '2025-07-15',
      time: '10:00 AM - 04:00 PM',
      type: 'workshop',
      category: 'Q4',
      description: 'Network with industry partners and potential employers',
      location: 'DeepBio Campus, Exhibition Hall',
      isImportant: true,
      status: 'upcoming'
    },
    {
      id: 'capstone-presentation',
      title: 'Capstone Project Presentations',
      date: '2025-08-18',
      endDate: '2025-08-22',
      time: '09:00 AM - 05:00 PM',
      type: 'academic',
      category: 'Q4',
      description: 'Final capstone project presentations and thesis defense',
      location: 'Various Rooms',
      isImportant: true,
      status: 'upcoming'
    },
    {
      id: 'graduation',
      title: 'Graduation Ceremony',
      date: '2025-08-30',
      time: '03:00 PM - 06:00 PM',
      type: 'academic',
      category: 'General',
      description: 'Official graduation ceremony for BCB Program graduates',
      location: 'DeepBio Campus, Main Auditorium',
      isImportant: true,
      status: 'upcoming'
    }
  ];

  const eventTypes = ['All', 'academic', 'deadline', 'holiday', 'exam', 'orientation', 'workshop', 'break'];
  const categories = ['All', 'Q1', 'Q2', 'Q3', 'Q4', 'General'];

  const getEventIcon = (type: string) => {
    switch (type) {
      case 'academic': return <BookOpen className="w-5 h-5" />;
      case 'deadline': return <AlertTriangle className="w-5 h-5" />;
      case 'holiday': return <Star className="w-5 h-5" />;
      case 'exam': return <Award className="w-5 h-5" />;
      case 'orientation': return <GraduationCap className="w-5 h-5" />;
      case 'workshop': return <Zap className="w-5 h-5" />;
      case 'break': return <Coffee className="w-5 h-5" />;
      default: return <Calendar className="w-5 h-5" />;
    }
  };

  const getEventColor = (type: string) => {
    switch (type) {
      case 'academic': return 'from-blue-500 to-blue-600';
      case 'deadline': return 'from-red-500 to-red-600';
      case 'holiday': return 'from-green-500 to-green-600';
      case 'exam': return 'from-purple-500 to-purple-600';
      case 'orientation': return 'from-indigo-500 to-indigo-600';
      case 'workshop': return 'from-orange-500 to-orange-600';
      case 'break': return 'from-gray-500 to-gray-600';
      default: return 'from-blue-500 to-blue-600';
    }
  };

  const getStatusIcon = (status?: string) => {
    switch (status) {
      case 'completed': return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'ongoing': return <Play className="w-4 h-4 text-blue-500" />;
      case 'upcoming': return <Clock className="w-4 h-4 text-orange-500" />;
      default: return null;
    }
  };

  const filteredEvents = calendarEvents.filter(event => {
    const categoryMatch = selectedCategory === 'All' || event.category === selectedCategory;
    const typeMatch = selectedType === 'All' || event.type === selectedType;
    return categoryMatch && typeMatch;
  });

  const formatDate = (dateString: string, endDateString?: string) => {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = { 
      weekday: 'short', 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    };
    
    if (endDateString) {
      const endDate = new Date(endDateString);
      if (date.getMonth() === endDate.getMonth()) {
        return `${date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })} - ${endDate.getDate()}, ${date.getFullYear()}`;
      }
      return `${date.toLocaleDateString('en-US', options)} - ${endDate.toLocaleDateString('en-US', options)}`;
    }
    
    return date.toLocaleDateString('en-US', options);
  };

  const isEventSoon = (dateString: string) => {
    const eventDate = new Date(dateString);
    const today = new Date();
    const diffTime = eventDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays >= 0 && diffDays <= 7;
  };

  if (compact) {
    return (
      <div className="space-y-4">
        <h3 className="text-lg font-bold text-gray-900 flex items-center space-x-2">
          <Calendar className="w-5 h-5 text-blue-600" />
          <span>Upcoming Events</span>
        </h3>
        <div className="space-y-3">
          {filteredEvents.slice(0, 5).map((event) => (
            <motion.div
              key={event.id}
              className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              whileHover={{ scale: 1.02 }}
            >
              <div className={`p-2 bg-gradient-to-r ${getEventColor(event.type)} text-white rounded-lg`}>
                {getEventIcon(event.type)}
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-gray-900 truncate">{event.title}</h4>
                <p className="text-sm text-gray-500">{formatDate(event.date, event.endDate)}</p>
              </div>
              {getStatusIcon(event.status)}
            </motion.div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      {!hideHeader && (
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Academic Calendar
          </h1>
          <p className="text-xl text-gray-600 mb-2">
            Academic Year {academicYear}
          </p>
          <p className="text-lg text-gray-500">
            Bioinformatics and Computational Biology Program
          </p>
        </div>
      )}

      {/* Filters */}
      {showFilters && (
        <motion.div
          className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center space-x-2 mb-4">
            <Filter className="w-5 h-5 text-gray-600" />
            <h3 className="text-lg font-semibold text-gray-900">Filter Events</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-blue-600 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Event Type</label>
              <div className="flex flex-wrap gap-2">
                {eventTypes.map((type) => (
                  <button
                    key={type}
                    onClick={() => setSelectedType(type)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 capitalize ${
                      selectedType === type
                        ? 'bg-purple-600 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Events List */}
      <div className="space-y-6">
        <AnimatePresence>
          {filteredEvents.map((event, index) => (
            <motion.div
              key={event.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-200 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -2 }}
            >
              <div className="p-6">
                <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                  {/* Event Icon and Type */}
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 bg-gradient-to-r ${getEventColor(event.type)} text-white rounded-2xl shadow-lg`}>
                      {getEventIcon(event.type)}
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className={`px-3 py-1 bg-gray-100 text-gray-700 text-xs font-semibold rounded-full capitalize`}>
                        {event.type}
                      </span>
                      <span className={`px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full`}>
                        {event.category}
                      </span>
                      {event.isImportant && (
                        <span className="px-3 py-1 bg-red-100 text-red-700 text-xs font-semibold rounded-full">
                          Important
                        </span>
                      )}
                      {isEventSoon(event.date) && event.status === 'upcoming' && (
                        <span className="px-3 py-1 bg-orange-100 text-orange-700 text-xs font-semibold rounded-full animate-pulse">
                          Coming Soon
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Status */}
                  <div className="lg:ml-auto flex items-center space-x-2">
                    {getStatusIcon(event.status)}
                    <span className="text-sm font-medium text-gray-600 capitalize">
                      {event.status}
                    </span>
                  </div>
                </div>

                {/* Event Details */}
                <div className="mt-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{event.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">{event.description}</p>
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Calendar className="w-4 h-4 text-blue-500" />
                      <span>{formatDate(event.date, event.endDate)}</span>
                    </div>
                    
                    {event.time && (
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <Clock className="w-4 h-4 text-green-500" />
                        <span>{event.time}</span>
                      </div>
                    )}
                    
                    {event.location && (
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <MapPin className="w-4 h-4 text-purple-500" />
                        <span>{event.location}</span>
                      </div>
                    )}
                    
                    {event.instructor && (
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <Users className="w-4 h-4 text-orange-500" />
                        <span>{event.instructor}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Download/Export Options */}
      <motion.div
        className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
        <p className="text-lg mb-6">
          Download the academic calendar or subscribe to get notifications
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.button
            className="px-6 py-3 bg-white text-gray-900 font-semibold rounded-full hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download className="w-5 h-5" />
            <span>Download Calendar (PDF)</span>
          </motion.button>
          <motion.button
            className="px-6 py-3 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-gray-900 transition-all flex items-center justify-center space-x-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ExternalLink className="w-5 h-5" />
            <span>Add to Google Calendar</span>
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}