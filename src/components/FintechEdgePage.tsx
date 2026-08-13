import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useInView } from 'motion/react';
import {
  GraduationCap, BookOpen, ExternalLink, ArrowRight, ArrowLeft, CheckCircle2,
  Calendar, Clock, Users, Award, ShieldCheck, Sparkles, Star, Globe,
  Cpu, Lock, Layers, Laptop, Code2, Terminal, ChevronDown, Check,
  Mail, Phone, MapPin, Search, Filter, HelpCircle, Video, MessageSquare,
  TrendingUp, BarChart2, DollarSign, Wallet, Send, UserCheck, Briefcase
} from 'lucide-react';
import { COMPANIES } from '../data/mockData';
// import fintechImage from "../assets/company-images/fintech_edge_institutes_image.jpg";
import fintechVideo from "../assets/company-videos/fintech-edge-video.mp4";
import coverImage from "../assets/images/fintech-cover.png";
import coverImageMobile from "../assets/images/fintech-mob.png";

interface AnimatedNumberProps {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({
  end,
  suffix = '',
  prefix = '',
  duration = 1200
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: false, margin: '-10px' });

  useEffect(() => {
    if (!isInView) {
      setCount(0);
      return;
    }
    let startTime: number | null = null;
    let animId: number;

    const animate = (time: number) => {
      if (!startTime) startTime = time;
      const progress = Math.min((time - startTime) / duration, 1);
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeProgress * end));

      if (progress < 1) {
        animId = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, [isInView, end, duration]);

  return (
    <span ref={ref}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
};

interface FintechEdgePageProps {
  onBackToHome: () => void;
  onOpenContact: () => void;
  onOpenVideo?: () => void;
  onSelectCompany?: (companyId: string) => void;
}

export const FintechEdgePage: React.FC<FintechEdgePageProps> = ({
  onBackToHome,
  onOpenContact,
  onSelectCompany
}) => {
  const [selectedFormat, setSelectedFormat] = useState<string>('all');
  const [appointmentOpen, setAppointmentOpen] = useState(false);
  const [appointmentSuccess, setAppointmentSuccess] = useState(false);
  const [selectedCourseForBooking, setSelectedCourseForBooking] = useState<string>('Web3 & Blockchain Masterclass');
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  // Form State for Appointment Booking
  const [bookingForm, setBookingForm] = useState({
    name: '',
    email: '',
    phone: '',
    track: 'Web3 & Blockchain Engineering',
    preferredDate: '',
    timeSlot: '10:00 AM - 11:00 AM',
    notes: ''
  });

  const compData = COMPANIES.find(c => c.slug === 'fintech-edge-institute') || {
    name: 'FinTech Edge Institute',
    tagline: 'Online learning platform for Web3, crypto and fintech education.',
    description: 'A course platform for a Lahore-based institute teaching FinTech, Blockchain, Web3 and AI. Includes program listings, coaching packages, appointment booking and student testimonials.',
    headquarters: 'Lahore, Pakistan & Singapore',
    foundedYear: '2020',
    employeeCount: '120+',
    websiteUrl: 'https://fintechedgeinstitute.ezycourse.com'
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setAppointmentSuccess(true);
    setTimeout(() => {
      setAppointmentSuccess(false);
      setAppointmentOpen(false);
      setBookingForm({
        name: '',
        email: '',
        phone: '',
        track: 'Web3 & Blockchain Engineering',
        preferredDate: '',
        timeSlot: '10:00 AM - 11:00 AM',
        notes: ''
      });
    }, 2500);
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setNewsletterSubscribed(true);
      setTimeout(() => setNewsletterSubscribed(false), 4000);
      setNewsletterEmail('');
    }
  };

  const courses = [
    {
      id: 'c1',
      title: 'Web3 & Smart Contract Engineering',
      category: 'Web3 / Blockchain',
      format: 'self-paced',
      duration: '8 Weeks (Self-Paced)',
      level: 'Intermediate to Advanced',
      price: '$299',
      rating: 4.9,
      students: '3,400+',
      badge: 'Bestseller',
      description: 'Master Solidity, Rust, EVM architecture, and decentralized application (dApp) development with hands-on auditing labs.',
      modules: [
        'Solidity & EVM Deep Dive',
        'DeFi Protocols & Yield Mechanics',
        'Smart Contract Security & Auditing',
        'Hardhat, Foundry & Ethers.js Testing'
      ]
    },
    {
      id: 'c2',
      title: 'Algorithmic Trading & Crypto Quant Analytics',
      category: 'Crypto / Quant',
      format: 'bundle',
      duration: '12 Weeks (Comprehensive Bundle)',
      level: 'All Levels',
      price: '$499',
      rating: 5.0,
      students: '2,800+',
      badge: 'Popular Bundle',
      description: 'Build automated crypto trading bots, backtest quantitative strategies in Python, and leverage machine learning models.',
      modules: [
        'Python for Quantitative Finance',
        'Market Microstructure & Orderbook Dynamics',
        'Binance & Bybit API Bot Engineering',
        'Risk Management & Sharpe Ratio Optimization'
      ]
    },
    {
      id: 'c3',
      title: 'AI in FinTech & Automated Risk Modeling',
      category: 'AI / FinTech',
      format: 'self-paced',
      duration: '6 Weeks (Self-Paced)',
      level: 'Beginner to Intermediate',
      price: '$249',
      rating: 4.8,
      students: '1,950+',
      badge: 'New Launch',
      description: 'Deploy LLMs and machine learning algorithms for credit scoring, fraud detection, and automated financial advisory.',
      modules: [
        'Predictive Credit Scoring Algorithms',
        'Fraud Detection with Graph Neural Networks',
        'Financial LLMs & Agentic Analytics',
        'Regulatory Compliance & Model Risk'
      ]
    },
    {
      id: 'c4',
      title: '1-on-1 FinTech Executive & Web3 Mentorship',
      category: 'Mentorship',
      format: 'coaching',
      duration: '4 Weeks Direct Mentorship',
      level: 'Executive & Career Switchers',
      price: '$799',
      rating: 5.0,
      students: '420+ Executives',
      badge: '1-on-1 VIP',
      description: 'Personalized 1-on-1 weekly coaching with senior blockchain architects and fintech founders in Lahore & Dubai.',
      modules: [
        'Customized Career & Portfolio Roadmap',
        'Live Code Reviews & dApp Architecture',
        'Pitch Deck & Venture Capital Guidance',
        'Direct Hiring Network Intro in GCC & Asia'
      ]
    },
    {
      id: 'c5',
      title: 'Decentralized Finance (DeFi) & Tokenomics Architecture',
      category: 'Web3 / FinTech',
      format: 'bundle',
      duration: '10 Weeks Master Bundle',
      level: 'Intermediate',
      price: '$399',
      rating: 4.9,
      students: '2,100+',
      badge: 'High Industry Demand',
      description: 'Architect sustainable tokenomics, automated market makers (AMMs), liquidity pools, and staking governance structures.',
      modules: [
        'AMM Math (Uniswap v3 / v4)',
        'Token Supply & Emission Modeling',
        'Cross-Chain Bridges & Layer-2 Scaling',
        'Crypto Tax & Global Regulatory Compliance'
      ]
    },
    {
      id: 'c6',
      title: 'Full-Stack FinTech Developer Bootcamp',
      category: 'Software House Track',
      format: 'bundle',
      duration: '16 Weeks Intensive',
      level: 'Beginner Friendly',
      price: '$899',
      rating: 4.9,
      students: '1,500+',
      badge: 'Career Guarantee',
      description: 'Complete hands-on software house training combining React, Node.js, PostgreSQL, Stripe & Crypto Payment Gateways.',
      modules: [
        'Modern Full-Stack Web Development',
        'Stripe & Crypto Payment Gateway APIs',
        'KYC/AML Identity Verification Pipelines',
        'Software House Internship Placement'
      ]
    }
  ];

  const filteredCourses = courses.filter(c => {
    if (selectedFormat === 'all') return true;
    return c.format === selectedFormat;
  });

  const faqs = [
    {
      question: 'Where is FinTech Edge Institute located?',
      answer: 'Our main software house and physical training lab are located in Lahore, Pakistan, with virtual students and accreditation hubs across Singapore, Dubai, and Tashkent.'
    },
    {
      question: 'Can I access the course material online self-paced?',
      answer: 'Yes! All self-paced courses and bundles are hosted on our dedicated LMS platform at fintechedgeinstitute.ezycourse.com with lifetime video access and downloadable resources.'
    },
    {
      question: 'How does the 1-on-1 coaching package work?',
      answer: 'When you sign up for 1-on-1 coaching, you are assigned a dedicated Web3/FinTech industry mentor. You get 4 to 8 live video sessions, custom code audits, and direct WhatsApp/Discord access.'
    },
    {
      question: 'Do I get a verified certificate upon completion?',
      answer: 'Yes! Every graduate receives a blockchain-verified certificate of completion backed by FinTech Edge Institute and TOP GROUP, shareable directly on LinkedIn.'
    },
    {
      question: 'Is prior programming experience required?',
      answer: 'We offer beginner-friendly tracks (like Full-Stack Bootcamp and AI in FinTech) as well as advanced quantitative and smart contract auditing courses.'
    }
  ];

  const testimonials = [
    {
      name: 'Osman Khan',
      role: 'Senior Web3 Engineer @ Dubai Crypto Lab',
      quote: 'FinTech Edge Institute transformed my career from a traditional web developer to a certified blockchain engineer. The Solidity labs and 1-on-1 mentorship were world-class.',
      location: 'Lahore -> Dubai'
    },
    {
      name: 'Ayesha Malik',
      role: 'FinTech Product Manager @ NeoBank',
      quote: 'The AI in FinTech course gave me a practical edge in building automated credit scoring models. The ezycourse platform made self-paced learning super smooth.',
      location: 'Karachi, Pakistan'
    },
    {
      name: 'Zain Ul Abidin',
      role: 'Quant Trader & Bot Developer',
      quote: 'Building real-time Binance API trading bots during the Python Quant bundle landed me my first institutional client within 3 weeks of graduating!',
      location: 'Lahore, Pakistan'
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-slate-900 font-sans antialiased">
      {/* 1. Sub-Header Navigation Banner */}
      <div className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-xs px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
          

          {/* Quick Info Badge */}
          <div className="hidden md:flex items-center gap-3 text-xs font-semibold text-slate-600">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Lahore Institute & Software House</span>
            </span>
            <span className="text-slate-300">•</span>
            <span className="flex items-center gap-1 text-[#FF6B00] font-bold">
              <GraduationCap className="w-4 h-4" /> 14,000+ Alumni Certified
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setAppointmentOpen(true)}
              className="px-3.5 py-1.5 rounded-xl text-xs font-extrabold text-white bg-[#1B365D] hover:bg-slate-800 transition-all shadow-xs flex items-center gap-1.5"
            >
              <Calendar className="w-3.5 h-3.5 text-orange-400" />
              <span>Book Appointment</span>
            </button>

            <a
              href="https://fintechedgeinstitute.ezycourse.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 rounded-xl text-xs font-extrabold text-white bg-[#FF6B00] hover:bg-orange-600 transition-all shadow-xs flex items-center gap-1.5"
            >
              <span>View Live Project</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* 2. Hero Section */}
      <section className="relative pt-12 pb-20 overflow-hidden bg-slate-950 text-white">
      {/* Background Image Container */}
        <div className="absolute inset-0 z-0">
          <picture className="w-full h-full block">
            <source media="(max-width: 767px)" srcSet={coverImageMobile || coverImage} />
            <img
              src={coverImage}
              alt="FinTech Edge Institute"
              className="w-full h-full object-cover object-center"
            />
          </picture>

          <div className="absolute inset-0 bg-slate-950/70 sm:bg-slate-950/60" />
        </div>
        

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center py-6">
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center text-center space-y-6"
          >
            {/* Badges */}
            <div className="flex flex-wrap items-center justify-center gap-2">
              <span className="px-3 py-1 rounded-full bg-orange-500/20 border border-orange-500/40 text-orange-400 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 backdrop-blur-md">
                <GraduationCap className="w-3.5 h-3.5" /> Education / EdTech
              </span>
              <span className="px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/40 text-blue-300 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 backdrop-blur-md">
                <MapPin className="w-3.5 h-3.5" /> Lahore, Pakistan
              </span>
            </div>

            {/* Title & One-Liner */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-heading tracking-tight text-white leading-tight">
                FinTech Edge <span className="text-[#FF6B00]">Institute</span>
              </h1>
              <p className="text-xl sm:text-2xl font-bold text-slate-200 font-heading">
                {compData.tagline}
              </p>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl font-normal mx-auto">
              {compData.description}
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://fintechedgeinstitute.ezycourse.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-xl font-extrabold text-sm text-white bg-[#FF6B00] hover:bg-orange-600 transition-all shadow-xl hover:shadow-orange-500/25 flex items-center gap-2 group cursor-pointer"
              >
                <span>View Live Platform</span>
                <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

            {/* Quick Metrics Ribbon */}
            <div className="mt-4 pt-6 border-t border-white/15 grid grid-cols-3 gap-6 text-center max-w-2xl w-full bg-slate-900/80 backdrop-blur-md p-4 rounded-2xl border border-white/10">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
                  <AnimatedNumber end={14000} suffix="+" />
                </div>
                <div className="text-xs font-medium text-slate-300">Certified Alumni</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#FF6B00] font-heading">
                  <AnimatedNumber end={65} suffix="+" />
                </div>
                <div className="text-xs font-medium text-slate-300">Corporate Partners</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-blue-400 font-heading">
                  <AnimatedNumber end={94} suffix="%" />
                </div>
                <div className="text-xs font-medium text-slate-300">Job Placement</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. Project Key Details & Highlights Overview */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1: Key Metadata */}
            <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-slate-200/90 shadow-sm space-y-4">
              <div className="w-10 h-10 rounded-xl bg-orange-100 border border-orange-200 flex items-center justify-center text-[#FF6B00]">
                <Briefcase className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-extrabold text-slate-900 font-heading">Key Project Metadata</h3>
              <ul className="space-y-2.5 text-xs text-slate-600 font-medium">
                <li className="flex justify-between pb-1.5 border-b border-slate-200/60">
                  <span className="text-slate-500">Industry:</span>
                  <span className="font-bold text-slate-900">Online Education / EdTech</span>
                </li>
                <li className="flex justify-between pb-1.5 border-b border-slate-200/60">
                  <span className="text-slate-500">Location:</span>
                  <span className="font-bold text-slate-900">Lahore, Pakistan</span>
                </li>
                <li className="flex justify-between pb-1.5 border-b border-slate-200/60">
                  <span className="text-slate-500">LMS URL:</span>
                  <a href="https://fintechedgeinstitute.ezycourse.com" target="_blank" rel="noreferrer" className="font-bold text-[#FF6B00] hover:underline truncate max-w-[150px]">
                    ezycourse.com
                  </a>
                </li>
                <li className="flex justify-between">
                  <span className="text-slate-500">Target Audience:</span>
                  <span className="font-bold text-slate-900">Developers & Bankers</span>
                </li>
              </ul>
            </div>

            {/* Card 2: Highlights */}
            <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-slate-200/90 shadow-sm space-y-4">
              <div className="w-10 h-10 rounded-xl bg-blue-100 border border-blue-200 flex items-center justify-center text-blue-600">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-extrabold text-slate-900 font-heading">Core Highlights</h3>
              <ul className="space-y-2 text-xs text-slate-700 font-medium">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>Course catalogue with self-paced, bundle, and 1-on-1 coaching options.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>Integrated appointment booking system for 1-on-1 career consultations.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>Alumni testimonials, interactive FAQ accordion, and newsletter capture.</span>
                </li>
              </ul>
            </div>

            {/* Card 3: Software House & Tech Hub Integration */}
            <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-slate-200/90 shadow-sm space-y-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 border border-emerald-200 flex items-center justify-center text-emerald-600">
                <Laptop className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-extrabold text-slate-900 font-heading">Software House Labs</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Connected directly with Lahore tech teams to offer real-world internship projects, smart contract auditing practice, and algorithmic trading bot deployments.
              </p>
              <button
                onClick={() => setAppointmentOpen(true)}
                className="w-full py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-colors"
              >
                Schedule Student Advisory Session
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* 4. Course Catalogue & Programs Grid */}
      <section id="programs" className="py-20 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-xs font-extrabold text-[#FF6B00] uppercase tracking-wider">
              <BookOpen className="w-3.5 h-3.5" /> Program Catalogue & Courses
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 font-heading tracking-tight">
              Master Web3, FinTech & <span className="text-[#FF6B00]">AI Finance</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Select from self-paced online modules, masterclass bundles, or intensive 1-on-1 mentorship coached by senior engineers.
            </p>

            {/* Format Filter Buttons */}
            <div className="pt-4 flex items-center justify-center flex-wrap gap-2">
              {[
                { label: 'All Formats', value: 'all' },
                { label: 'Self-Paced Courses', value: 'self-paced' },
                { label: 'Masterclass Bundles', value: 'bundle' },
                { label: '1-on-1 Coaching', value: 'coaching' }
              ].map(tab => (
                <button
                  key={tab.value}
                  onClick={() => setSelectedFormat(tab.value)}
                  className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all cursor-pointer ${
                    selectedFormat === tab.value
                      ? 'bg-[#1B365D] text-white shadow-md'
                      : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Courses Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((c, idx) => (
              <motion.div
                key={c.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="rounded-2xl bg-white border border-slate-200 hover:border-orange-400 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group"
              >
                <div className="p-6 space-y-4">
                  {/* Category & Badge */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="px-2.5 py-1 rounded-md bg-orange-50 border border-orange-100 text-[11px] font-bold text-[#FF6B00]">
                      {c.category}
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-slate-900 text-white text-[10px] font-extrabold uppercase tracking-wider">
                      {c.badge}
                    </span>
                  </div>

                  {/* Title & Level */}
                  <div>
                    <h3 className="text-lg font-extrabold text-slate-900 font-heading group-hover:text-[#FF6B00] transition-colors leading-snug">
                      {c.title}
                    </h3>
                    <div className="flex items-center gap-3 text-xs text-slate-500 font-medium mt-2">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-slate-400" /> {c.duration}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Users className="w-3.5 h-3.5 text-slate-400" /> {c.students}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {c.description}
                  </p>
                </div>


              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. 4-Step Admissions Process */}
      <section className="py-20 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-extrabold text-blue-700 uppercase tracking-wider">
              <UserCheck className="w-3.5 h-3.5" /> Admissions & Learning Journey
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading">
              Your 4-Step Path to <span className="text-[#FF6B00]">Certification</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                title: 'Select Your Track',
                desc: 'Choose between self-paced web3 modules, quantitative crypto bundles, or 1-on-1 mentorship.'
              },
              {
                step: '02',
                title: 'Book 1-on-1 Consultation',
                desc: 'Meet with our Lahore advisory team to map out your skill gaps, schedule, and career goals.'
              },
              {
                step: '03',
                title: 'Hands-on Labs & Projects',
                desc: 'Build live dApps, automated Python bots, and AI risk models inside our simulation hub.'
              },
              {
                step: '04',
                title: 'Earn Certification & Placement',
                desc: 'Receive blockchain-verified credentials and get introduced to our corporate hiring partners.'
              }
            ].map((st, i) => (
              <div key={st.step} className="p-6 rounded-2xl bg-[#FAF8F5] border border-slate-200 relative group hover:border-[#FF6B00] transition-colors">
                <div className="text-4xl font-black text-slate-300 group-hover:text-[#FF6B00] transition-colors font-heading mb-3">
                  {st.step}
                </div>
                <h3 className="text-base font-extrabold text-slate-900 mb-2 font-heading">{st.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{st.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. Student Testimonials */}
      <section className="py-20 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 text-xs font-bold text-[#FF6B00] uppercase">
              <Star className="w-3.5 h-3.5 fill-orange-400 text-orange-400" /> Student Success & Reviews
            </div>
            <h2 className="text-3xl font-black text-slate-900 font-heading">
              What Our <span className="text-[#FF6B00]">Graduates Say</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                    "{t.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-extrabold text-slate-900">{t.name}</div>
                    <div className="text-[11px] text-slate-500 font-medium">{t.role}</div>
                  </div>
                  <span className="text-[10px] font-bold text-[#FF6B00] bg-orange-50 px-2 py-1 rounded-md">
                    {t.location}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. FAQ Accordion */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-xs font-bold text-slate-700 uppercase">
              <HelpCircle className="w-3.5 h-3.5 text-blue-600" /> Frequently Asked Questions
            </div>
            <h2 className="text-3xl font-black text-slate-900 font-heading">
              Everything You Need to Know
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  onMouseEnter={() => setActiveFaq(idx)}
                  className={`rounded-2xl overflow-hidden transition-all duration-300 ${
                    isOpen
                      ? 'bg-white border-2 border-[#FF6B00] shadow-md'
                      : 'bg-[#FAF8F5] border border-slate-200/90 hover:border-orange-300'
                  }`}
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-extrabold text-sm sm:text-base text-slate-900 font-heading cursor-pointer"
                  >
                    <span className={isOpen ? 'text-[#FF6B00] transition-colors' : 'text-slate-900'}>{faq.question}</span>
                    <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#FF6B00]' : 'text-slate-500'}`} />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                      >
                        <div className="px-5 pb-5 pt-0 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 font-normal">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 9. Interactive Appointment Booking Modal */}
      <AnimatePresence>
        {appointmentOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-lg bg-white rounded-3xl border border-slate-200 shadow-2xl overflow-hidden p-6 sm:p-8 relative"
            >
              <button
                onClick={() => setAppointmentOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 text-slate-600 hover:text-slate-900 text-xs font-bold"
              >
                ✕
              </button>

              {appointmentSuccess ? (
                <div className="text-center py-10 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 font-heading">Appointment Scheduled!</h3>
                  <p className="text-xs text-slate-600 max-w-xs mx-auto">
                    Our Lahore FinTech Edge advisory team will contact you via email & phone to confirm your 1-on-1 session.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleBookingSubmit} className="space-y-4">
                  <div>
                    <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FF6B00] uppercase tracking-wider mb-1">
                      <Calendar className="w-3.5 h-3.5" /> Book 1-on-1 Consultation
                    </div>
                    <h3 className="text-xl font-black text-slate-900 font-heading">
                      Schedule Student Advisory Session
                    </h3>
                  </div>

                  <div className="space-y-3 text-xs">
                    <div>
                      <label className="block text-slate-700 font-bold mb-1">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={bookingForm.name}
                        onChange={(e) => setBookingForm({ ...bookingForm, name: e.target.value })}
                        placeholder="e.g. Ahmad Hassan"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[#FF6B00]"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="block text-slate-700 font-bold mb-1">Email *</label>
                        <input
                          type="email"
                          required
                          value={bookingForm.email}
                          onChange={(e) => setBookingForm({ ...bookingForm, email: e.target.value })}
                          placeholder="ahmad@example.com"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[#FF6B00]"
                        />
                      </div>
                      <div>
                        <label className="block text-slate-700 font-bold mb-1">Phone / WhatsApp *</label>
                        <input
                          type="tel"
                          required
                          value={bookingForm.phone}
                          onChange={(e) => setBookingForm({ ...bookingForm, phone: e.target.value })}
                          placeholder="+92 300 1234567"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[#FF6B00]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-slate-700 font-bold mb-1">Select Program Track</label>
                      <select
                        value={selectedCourseForBooking}
                        onChange={(e) => setSelectedCourseForBooking(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[#FF6B00]"
                      >
                        <option value="Web3 & Smart Contract Engineering">Web3 & Smart Contract Engineering</option>
                        <option value="Algorithmic Trading & Crypto Quant Analytics">Algorithmic Trading & Crypto Quant Analytics</option>
                        <option value="AI in FinTech & Automated Risk Modeling">AI in FinTech & Automated Risk Modeling</option>
                        <option value="1-on-1 FinTech Executive & Web3 Mentorship">1-on-1 FinTech Executive Mentorship</option>
                        <option value="Full-Stack FinTech Developer Bootcamp">Full-Stack FinTech Developer Bootcamp</option>
                      </select>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="block text-slate-700 font-bold mb-1">Preferred Date *</label>
                        <input
                          type="date"
                          required
                          value={bookingForm.preferredDate}
                          onChange={(e) => setBookingForm({ ...bookingForm, preferredDate: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[#FF6B00]"
                        />
                      </div>
                      <div>
                        <label className="block text-slate-700 font-bold mb-1">Time Slot</label>
                        <select
                          value={bookingForm.timeSlot}
                          onChange={(e) => setBookingForm({ ...bookingForm, timeSlot: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[#FF6B00]"
                        >
                          <option value="10:00 AM - 11:00 AM">10:00 AM - 11:00 AM</option>
                          <option value="02:00 PM - 03:00 PM">02:00 PM - 03:00 PM</option>
                          <option value="06:00 PM - 07:00 PM">06:00 PM - 07:00 PM</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-slate-700 font-bold mb-1">Notes / Questions</label>
                      <textarea
                        rows={2}
                        value={bookingForm.notes}
                        onChange={(e) => setBookingForm({ ...bookingForm, notes: e.target.value })}
                        placeholder="Tell us about your background or career goals..."
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[#FF6B00]"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-[#FF6B00] hover:bg-orange-600 text-white font-extrabold text-xs transition-all shadow-md"
                  >
                    Confirm Booking Request
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
