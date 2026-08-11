import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView } from 'motion/react';
import { 
  Activity, Stethoscope, Microchip, ShieldCheck, ArrowRight, ArrowLeft, 
  CheckCircle2, Mail, Phone, MapPin, Sparkles, Building2, Users, Award, 
  Clock, Send, Star, ChevronRight, Globe2, HeartPulse, TestTube, FileText, Smartphone
} from 'lucide-react';

import metroImage from '../assets/company-images/metro-city-lab.jpg';
import metroLogo from '../assets/images/company-logos/metrolab-logo.png';

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

interface MetroCityLabPageProps {
  onBackToHome: () => void;
  onOpenContact: () => void;
  onSelectCompany?: (companyId: string) => void;
}

export const MetroCityLabPage: React.FC<MetroCityLabPageProps> = ({
  onBackToHome,
  onOpenContact,
  onSelectCompany
}) => {
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [modalType, setModalType] = useState<'test' | 'corporate' | 'general'>('test');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    testType: '',
    message: ''
  });

  const handleOpenModal = (type: 'test' | 'corporate' | 'general') => {
    setModalType(type);
    setFormSubmitted(false);
    setInquiryModalOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setInquiryModalOpen(false);
      setFormSubmitted(false);
      setFormData({ name: '', phone: '', email: '', testType: '', message: '' });
    }, 2500);
  };

  const services = [
    {
      id: 'clinical-pathology',
      icon: TestTube,
      title: 'Clinical Pathology & Blood Diagnostics',
      description: 'Comprehensive routine and specialized blood panels including CBC, lipid profiles, liver & kidney function tests, and endocrine hormone assays.',
      tag: 'High Precision',
      highlights: ['Automated Immunoassay Analyzers', 'Same-Day Digital Results', '100% Barcode Sample Tracking']
    },
    {
      id: 'molecular-genetics',
      icon: Microchip,
      title: 'Molecular & PCR Testing',
      description: 'Advanced real-time PCR testing for infectious diseases, viral load quantification, and genetic biomarker screening.',
      tag: 'Advanced Biotech',
      highlights: ['Real-Time Quantitative PCR', 'Infectious Disease Panels', 'High Sensitivity Screening']
    },
    {
      id: 'health-checkups',
      icon: HeartPulse,
      title: 'Preventive Health Checkup Packages',
      description: 'Tailored full-body wellness screening packages designed for preventive healthcare, diabetic care, cardiac health, and executive wellness.',
      tag: 'Wellness & Prevention',
      highlights: ['Full Body Screening Packages', 'Doctor Consultation Included', 'Affordable Transparent Pricing']
    },
    {
      id: 'corporate-wellness',
      icon: Building2,
      title: 'Corporate Occupational Health',
      description: 'On-site corporate health checkups, pre-employment medical clearances, and industrial employee health monitoring programs.',
      tag: 'Enterprise Solutions',
      highlights: ['On-Site Mobile Health Camps', 'Custom Corporate Billing', 'Pre-Employment Certificates']
    },
    {
      id: 'digital-portal',
      icon: Smartphone,
      title: 'Automated Patient Portal & App',
      description: 'Instant SMS, WhatsApp, and mobile app delivery of diagnostic test results with digital barcode verification and patient history access.',
      tag: 'Smart Health Tech',
      highlights: ['Instant WhatsApp PDF Reports', 'Mobile Test History Portal', 'Secure Cloud Encryption']
    },
    {
      id: 'home-sample',
      icon: Stethoscope,
      title: 'Express Home Sample Collection',
      description: 'Certified phlebotomist home and office visits for convenient, sterile blood draw and express transport to central laboratories.',
      tag: 'Doorstep Convenience',
      highlights: ['Certified Phlebotomist Fleet', 'Temperature-Controlled Transport', 'Flexible Online Booking']
    }
  ];

  const whyChooseMetroLab = [
    {
      title: '1.8 Million+ Tests Processed Annually',
      desc: 'Trusted by over 500,000 patients and leading regional hospitals for accurate and timely pathology reporting.',
      stat: '1.8M+',
      statLabel: 'Annual Tests'
    },
    {
      title: '28 Modern Diagnostic Hubs',
      desc: 'Convenient sample collection centers and fully equipped central laboratories across Tashkent and key regions.',
      stat: '28',
      statLabel: 'Diagnostic Hubs'
    },
    {
      title: '99.9% Diagnostic Accuracy',
      desc: 'Rigorous internal quality controls and international proficiency testing standards ensuring dependable accuracy.',
      stat: '99.9%',
      statLabel: 'Accuracy Rating'
    },
    {
      title: 'Same-Day Express Digital Reporting',
      desc: 'Fast turnaround times with real-time digital report delivery directly to patients and attending physicians.',
      stat: '< 6 Hrs',
      statLabel: 'Average Turnaround'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-[#FF6B00] selection:text-white pt-16">
      
      {/* HERO SECTION — WHITE & ORANGE THEME WITH CENTERED HERO TEXT */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-b from-orange-50/90 via-white to-amber-50/40 text-slate-800 overflow-hidden border-b border-orange-100">
        {/* Ambient Glows */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-[380px] bg-gradient-to-tr from-orange-200/40 via-amber-100/50 to-orange-300/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/3 -right-20 w-80 h-80 bg-orange-100/60 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(#FF6B00_1px,transparent_1px)] [background-size:28px_28px] opacity-[0.12] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100/90 border border-orange-200 text-[#FF6B00] text-xs font-black uppercase tracking-widest shadow-xs">
            TOP GROUP ECOSYSTEM • HEALTHCARE & DIAGNOSTICS
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-[#1B365D] tracking-tight font-heading leading-tight mx-auto text-center">
            Metro City Lab
          </h1>

          <p className="text-lg sm:text-xl font-medium text-[#FF6B00] tracking-wide text-center mx-auto max-w-2xl font-heading">
            High Quality Testing at Affordable Price
          </p>

          <p className="text-base sm:text-lg font-normal text-slate-600 leading-relaxed text-center mx-auto max-w-3xl">
            Modern diagnostic pathology laboratory network delivering reliable medical testing, preventive health screenings, clinical diagnostics, and automated digital patient portal reporting across Central Asia.
          </p>

          <div className="py-3 px-6 rounded-2xl bg-white/80 border border-orange-200/90 text-slate-700 text-sm sm:text-base italic text-center mx-auto max-w-2xl shadow-xs backdrop-blur-sm">
            "Dedicated to accessible, high-precision healthcare diagnostics powered by automated laboratory software and international standards."
          </div>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => handleOpenModal('test')}
              className="px-7 py-3.5 rounded-xl font-extrabold text-sm text-white bg-[#FF6B00] hover:bg-orange-600 shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 transition-all flex items-center gap-2 cursor-pointer group"
            >
              <TestTube className="w-4 h-4" />
              <span>Book a Test / Inquiry</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <button
              onClick={() => handleOpenModal('corporate')}
              className="px-7 py-3.5 rounded-xl font-extrabold text-sm text-[#1B365D] bg-white hover:bg-orange-50/80 border border-slate-200 hover:border-orange-300 transition-all flex items-center gap-2 cursor-pointer shadow-xs"
            >
              <Building2 className="w-4 h-4 text-[#FF6B00]" />
              <span>Corporate Wellness</span>
            </button>
          </div>

          {/* Centered Image Gallery / Brand Showcase */}
          <div className="pt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto items-center">
            <div className="rounded-2xl overflow-hidden border border-orange-200 shadow-md bg-white group p-2">
              <img 
                src={metroImage} 
                alt="Metro City Lab Diagnostic Facility" 
                className="w-full h-52 object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
              />
              <div className="p-3 bg-white text-center">
                <span className="text-xs font-bold text-[#1B365D]">State-of-the-Art Clinical Laboratory</span>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-orange-200 shadow-md bg-white group p-6 flex flex-col items-center justify-center space-y-3 h-full">
              <img 
                src={metroLogo} 
                alt="Metro City Lab Official Logo" 
                className="h-16 w-auto object-contain group-hover:scale-105 transition-transform"
              />
              <div className="text-center space-y-1">
                <div className="text-xs font-bold text-[#1B365D]">ISO Standard Quality Control</div>
                <div className="text-[11px] text-slate-500">Barcode Tracking & Digital Patient Portal</div>
              </div>
            </div>
          </div>

          {/* Centered Trust Strip */}
          <div className="mt-12 pt-8 border-t border-orange-200/60 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center max-w-4xl mx-auto">
            <div className="bg-white/90 border border-orange-100 rounded-2xl p-5 shadow-xs space-y-1">
              <div className="text-3xl sm:text-4xl font-black text-[#FF6B00] font-heading">
                <AnimatedNumber end={1800000} suffix="+" duration={1200} />
              </div>
              <div className="text-xs sm:text-sm font-bold text-slate-500 uppercase tracking-wider">Annual Tests Processed</div>
            </div>

            <div className="bg-white/90 border border-orange-100 rounded-2xl p-5 shadow-xs space-y-1">
              <div className="text-3xl sm:text-4xl font-black text-[#1B365D] font-heading">
                <AnimatedNumber end={28} suffix="" duration={1000} />
              </div>
              <div className="text-xs sm:text-sm font-bold text-slate-500 uppercase tracking-wider">Diagnostic Hubs</div>
            </div>

            <div className="bg-white/90 border border-orange-100 rounded-2xl p-5 shadow-xs space-y-1">
              <div className="text-3xl sm:text-4xl font-black text-[#FF6B00] font-heading">99.9%</div>
              <div className="text-xs sm:text-sm font-bold text-slate-500 uppercase tracking-wider">Diagnostic Accuracy</div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1 — ABOUT & DIAGNOSTIC PATHOLOGY EXCELLENCE */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Image & Badge */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative">
                <div className="rounded-3xl overflow-hidden border border-orange-200 shadow-xl bg-orange-50/50 p-2">
                  <img 
                    src={metroImage} 
                    alt="Metro City Lab Medical Diagnostics" 
                    className="w-full h-80 sm:h-[420px] object-cover rounded-2xl"
                  />
                </div>

                <div className="absolute -bottom-6 -right-2 sm:-right-6 bg-[#1B365D] text-white p-5 rounded-2xl border border-slate-700 shadow-2xl max-w-xs space-y-1">
                  <div className="text-xs font-bold text-orange-400 uppercase tracking-widest flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-[#FF6B00]" />
                    <span>PRECISION ACCREDITATION</span>
                  </div>
                  <div className="text-sm font-extrabold text-white">
                    Fully Automated Immunoassay & Barcode Tracking
                  </div>
                </div>
              </div>
            </div>

            {/* Right Text */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-6 text-left">
              <h2 className="text-3xl sm:text-4xl font-black text-[#1B365D] tracking-tight font-heading leading-tight">
                Automated Clinical Pathology & High-Precision Diagnostics
              </h2>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
                Metro City Lab operates at the forefront of modern medical diagnostics in Central Asia. Founded with the mission to deliver world-class clinical pathology tests at transparent, affordable rates, Metro City Lab combines robotic sample handling, automated LIS software, and stringent international laboratory quality controls.
              </p>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                From routine blood work and preventive wellness panels to specialized molecular PCR assays, every specimen is tracked via unique barcodes to eliminate human error and ensure rapid, dependable report turnarounds.
              </p>

              {/* Key Highlights Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-orange-50/60 border border-orange-200 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#FF6B00] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Automated LIS Software</h4>
                    <p className="text-xs text-slate-500 mt-0.5">End-to-end digital tracking from sample draw to patient portal.</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-orange-50/60 border border-orange-200 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#FF6B00] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Affordable Transparent Pricing</h4>
                    <p className="text-xs text-slate-500 mt-0.5">High-quality diagnostics priced accessibly for all families.</p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2 — DIAGNOSTIC SERVICES & HEALTH PACKAGES */}
      <section className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-3xl sm:text-4xl font-black text-[#1B365D] tracking-tight font-heading">
              Comprehensive Diagnostic Services & Health Test Packages
            </h2>

            <p className="text-slate-600 text-sm sm:text-base">
              Discover our wide spectrum of diagnostic pathology, molecular screenings, and digital patient services.
            </p>
          </div>

          {/* 6 Grid Services */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((item) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-xs hover:shadow-xl hover:border-orange-300 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-200 text-[#FF6B00] flex items-center justify-center group-hover:bg-[#FF6B00] group-hover:text-white transition-colors">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#FF6B00] bg-orange-50/80 px-2.5 py-0.5 rounded-full border border-orange-200">
                        {item.tag}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-[#1B365D] group-hover:text-[#FF6B00] transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-sm text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-slate-100 space-y-2">
                    {item.highlights.map((h, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#FF6B00] shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* WHY PATIENTS CHOOSE METRO LAB GRID */}
          <div className="pt-8">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <h3 className="text-2xl font-black text-[#1B365D] font-heading">
                Why Patients & Physicians Trust Metro City Lab
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyChooseMetroLab.map((reason, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-orange-200/80 shadow-xs hover:shadow-md transition-all space-y-3"
                >
                  <div className="text-3xl font-black text-[#FF6B00] font-heading">{reason.stat}</div>
                  <h4 className="text-base font-bold text-[#1B365D]">{reason.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{reason.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* MODAL FOR TEST BOOKING & INQUIRIES */}
      {inquiryModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative">
            <button
              onClick={() => setInquiryModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 font-bold text-lg w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center"
            >
              ✕
            </button>

            {formSubmitted ? (
              <div className="text-center py-8 space-y-3">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-black text-[#1B365D]">Appointment Received!</h3>
                <p className="text-sm text-slate-600">
                  Metro City Lab support team will contact you shortly to confirm your diagnostic test or home collection.
                </p>
              </div>
            ) : (
              <div className="space-y-5">
                <div>
                  <span className="text-xs font-extrabold text-[#FF6B00] uppercase tracking-wider">
                    {modalType === 'test' ? 'Book Diagnostic Test' : modalType === 'corporate' ? 'Corporate Health Program' : 'Contact Metro City Lab'}
                  </span>
                  <h3 className="text-2xl font-black text-[#1B365D] mt-1">
                    {modalType === 'test' ? 'Schedule Test / Home Visit' : 'Corporate Health Inquiry'}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Metro City Lab • TOP GROUP Ecosystem
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Usman Ahmad"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#FF6B00]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+998 90 123 45 67"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#FF6B00]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Test Required / Health Package</label>
                    <input
                      type="text"
                      placeholder="e.g. Routine Blood Panel, PCR, Full Body Checkup"
                      value={formData.testType}
                      onChange={(e) => setFormData({ ...formData, testType: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#FF6B00]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Message / Home Address</label>
                    <textarea
                      rows={3}
                      placeholder="Specify home visit details or any special requests..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#FF6B00]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl font-bold text-sm text-white bg-[#FF6B00] hover:bg-orange-600 transition-colors shadow-md flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Appointment</span>
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
};
