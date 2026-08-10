import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView } from 'motion/react';
import { 
  Building2, ArrowRight, ArrowLeft, CheckCircle2, Award, ShieldCheck, 
  ExternalLink, Mail, Phone, Clock, ChevronRight, Sparkles,
  Wrench, FileText, RefreshCw, Headphones, Store, Download, Package, Briefcase
} from 'lucide-react';
import { COMPANIES } from '../data/mockData';
import artelImage from "../assets/company-images/artel-image-1.png";

// Animated Counter component that starts counting when scrolled into view
interface AnimatedStatNumberProps {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}

const AnimatedStatNumber: React.FC<AnimatedStatNumberProps> = ({
  end,
  suffix = '',
  prefix = '',
  duration = 1200,
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-10px" });

  useEffect(() => {
    if (!isInView) {
      setCount(0);
      return;
    }

    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeProgress * end));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isInView, end, duration]);

  return (
    <span ref={ref}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
};

interface ArtelServicesPageProps {
  onBackToHome: () => void;
  onOpenContact: () => void;
  onOpenVideo?: () => void;
  onSelectCompany?: (companyId: string) => void;
}

export const ArtelServicesPage: React.FC<ArtelServicesPageProps> = ({
  onBackToHome,
}) => {
  // 9 Core Customer & Technical Services
  const servicesList = [
    {
      id: 'repair-service',
      icon: Wrench,
      title: 'Home Repair Service',
      subtitle: 'On-site doorstep technical assistance',
      description: 'Certified engineers provide on-site diagnostics, emergency repairs, and maintenance directly at your residence for all major household appliances.',
      badge: 'Home Visit Available'
    },
    {
      id: 'repair-request',
      icon: FileText,
      title: 'Online Repair Application',
      subtitle: 'Instant digital service booking',
      description: 'Submit technical service requests 24/7 through an intuitive online portal for hassle-free scheduling with preferred time slots.',
      badge: '24/7 Digital Form'
    },
    {
      id: 'repair-status',
      icon: RefreshCw,
      title: 'Repair Status Tracker',
      subtitle: 'Real-time order progress monitoring',
      description: 'Track the status of your submitted repair request in real time using your phone number or unique service ticket ID.',
      badge: 'Live Tracking'
    },
    {
      id: 'warranty',
      icon: ShieldCheck,
      title: '3-Year Official Warranty',
      subtitle: 'Comprehensive factory protection',
      description: 'All Artel home appliances are backed by an industry-leading 3-year official warranty covering genuine parts and repair work.',
      badge: '3 Years Guaranteed'
    },
    {
      id: 'call-center',
      icon: Headphones,
      title: 'Customer Call Center',
      subtitle: 'Multi-lingual hotline support',
      description: 'Dedicated customer support team available daily from 08:00 to 21:00 to answer technical questions and dispatch service technicians.',
      badge: '08:00 - 21:00 Support'
    },
    {
      id: 'where-to-buy',
      icon: Store,
      title: 'Where to Buy Locator',
      subtitle: 'Official showroom & retail directory',
      description: 'Locate nearest authorized Artel retail stores, partner electronics centers, and official brand showrooms across the region.',
      badge: 'Nationwide Network'
    },
    {
      id: 'manuals-catalogues',
      icon: Download,
      title: 'Manuals & Catalogues',
      subtitle: 'Digital documentation library',
      description: 'Instantly access and download user manuals, technical specification sheets, and annual product catalogues in multiple languages.',
      badge: 'Instant PDF Download'
    },
    {
      id: 'spare-parts',
      icon: Package,
      title: 'Genuine Spare Parts',
      subtitle: 'Factory-original components',
      description: 'Purchase authentic replacement parts, filters, attachments, and original accessories engineered specifically for Artel appliances.',
      badge: '100% Original Parts'
    },
    {
      id: 'b2b-solutions',
      icon: Briefcase,
      title: 'B2B & Enterprise Solutions',
      subtitle: 'Commercial HVAC & appliance supply',
      description: 'Custom bulk procurement, HVAC climate solutions, and appliance fleet management for hotels, restaurants, offices, and retail developments.',
      badge: 'Corporate Supply'
    }
  ];

  return (
    <div className="min-h-screen bg-[#FFF9F5] text-slate-800 selection:bg-[#FF6B00] selection:text-white font-sans antialiased overflow-x-hidden">
      
      {/* Top Header Breadcrumb Bar */}
      <div className="bg-white/90 border-b border-orange-100 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
          <button
            onClick={onBackToHome}
            className="flex items-center gap-2 text-xs font-bold text-slate-700 hover:text-[#FF6B00] transition-colors cursor-pointer group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform text-[#FF6B00]" />
            <span>Back to TOP GROUP Ecosystem</span>
          </button>

          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100/80 border border-orange-200 text-[#FF6B00] text-[11px] font-extrabold uppercase tracking-wider">
              <Building2 className="w-3.5 h-3.5" /> Central Asia Electronics Leader
            </span>
            <a
              href="https://artelelectronics.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-1.5 rounded-lg bg-[#FF6B00] hover:bg-orange-600 text-white font-extrabold text-xs flex items-center gap-1.5 transition-all shadow-md hover:shadow-orange-500/20"
            >
              <span>Visit Official Site</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* 1. Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden py-20">
        {/* Clear Background Image with Light Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={artelImage}
            alt="Artel Electronics Manufacturing Facility"
            className="w-full h-full object-cover object-center filter brightness-95"
          />
          {/* Subtle gradient overlay for clean text legibility without blocking the background image */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-950/30" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center flex flex-col items-center space-y-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center space-y-6 text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/20 border border-orange-500/40 text-orange-400 text-xs font-extrabold uppercase tracking-widest backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-[#FF6B00]" />
              <span>Central Asian Manufacturing Powerhouse</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-black font-heading tracking-tight leading-none text-white text-center">
              Artel <span className="text-[#FF6B00]">Electronics</span>
            </h1>

            <p className="text-base sm:text-xl text-slate-100 font-medium leading-relaxed max-w-2xl text-center mx-auto drop-shadow-md">
              Artel Electronics is a leader in the production of household appliances and electronics in the Central Asian region — manufacturing top-tier refrigerators, washing machines, smart TVs, air conditioners, and kitchen appliances across 33 product categories.
            </p>

            {/* Action Buttons Centered */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
              <a
                href="https://artelelectronics.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#FF6B00] hover:bg-orange-600 text-white font-extrabold text-sm shadow-xl hover:shadow-orange-500/25 transition-all flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Visit Official Site</span>
                <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

            {/* Centered Tagline Card */}
            <div className="mt-6 max-w-xl w-full p-5 sm:p-6 rounded-2xl bg-white/95 border border-orange-100 backdrop-blur-md text-center space-y-2 shadow-2xl">
              <span className="text-[11px] font-extrabold text-[#FF6B00] uppercase tracking-wider block">Official Tagline</span>
              <p className="text-sm sm:text-base font-semibold text-slate-800 italic leading-snug">
                "Artel Electronics is a leader in the production of household appliances and electronics in the Central Asian region."
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Key Metrics Bar (Animated Counter) */}
      <section className="py-12 bg-white border-y border-orange-100/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            
            <div className="p-5 rounded-2xl bg-[#FFF9F5] border border-orange-100 shadow-xs hover:shadow-md hover:border-orange-300 transition-all duration-300">
              <span className="text-3xl sm:text-4xl font-black text-[#FF6B00]">
                <AnimatedStatNumber end={33} suffix="+" />
              </span>
              <span className="text-xs font-bold text-slate-600 block mt-1 uppercase tracking-wider">Product Categories</span>
            </div>

            <div className="p-5 rounded-2xl bg-[#FFF9F5] border border-orange-100 shadow-xs hover:shadow-md hover:border-orange-300 transition-all duration-300">
              <span className="text-3xl sm:text-4xl font-black text-slate-900">
                <AnimatedStatNumber end={3} suffix=" Years" />
              </span>
              <span className="text-xs font-bold text-slate-600 block mt-1 uppercase tracking-wider">Comprehensive Warranty</span>
            </div>

            <div className="p-5 rounded-2xl bg-[#FFF9F5] border border-orange-100 shadow-xs hover:shadow-md hover:border-orange-300 transition-all duration-300">
              <span className="text-3xl sm:text-4xl font-black text-blue-600">
                <AnimatedStatNumber end={120} suffix="+" />
              </span>
              <span className="text-xs font-bold text-slate-600 block mt-1 uppercase tracking-wider">Authorized Service Hubs</span>
            </div>

            <div className="p-5 rounded-2xl bg-[#FFF9F5] border border-orange-100 shadow-xs hover:shadow-md hover:border-orange-300 transition-all duration-300">
              <span className="text-3xl sm:text-4xl font-black text-emerald-600">
                <AnimatedStatNumber end={500} suffix="k+" />
              </span>
              <span className="text-xs font-bold text-slate-600 block mt-1 uppercase tracking-wider">Annual Repairs & Services</span>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Company Overview Section */}
      <section className="py-20 bg-[#FFF9F5] text-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto flex flex-col items-center">
            <span className="inline-block px-3.5 py-1.5 rounded-full bg-orange-100 border border-orange-200 text-[#FF6B00] text-xs font-extrabold uppercase tracking-widest mb-3">
              Industry Leadership
            </span>
            <h2 className="text-3xl sm:text-5xl font-black font-heading tracking-tight text-slate-900 mt-1">
              About Artel <span className="text-[#FF6B00]">Electronics</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mt-3">
              Uzbekistan's flagship manufacturer of domestic electronics and smart home infrastructure, providing affordable innovation across Central Asia.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Image Container with Floating Badges */}
            <div className="relative group">
              <div className="rounded-3xl overflow-hidden border border-orange-100 shadow-xl relative">
                <img
                  src={artelImage}
                  alt="Artel Manufacturing Facility"
                  className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-80" />
              </div>

              {/* Floating Badge 1 */}
              <div className="absolute -bottom-6 -left-6 bg-white border border-orange-100 p-4 rounded-2xl shadow-xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-orange-100 text-[#FF6B00] flex items-center justify-center font-bold">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">#1 Household Brand</div>
                  <div className="text-[10px] text-slate-500">Central Asian Region</div>
                </div>
              </div>

              {/* Floating Badge 2 */}
              <div className="absolute -top-6 -right-6 bg-white border border-orange-100 p-4 rounded-2xl shadow-xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">3 Years Guarantee</div>
                  <div className="text-[10px] text-slate-500">Full Repair Coverage</div>
                </div>
              </div>
            </div>

            {/* Explanatory Content */}
            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-white border border-orange-100/90 shadow-md space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold text-[#FF6B00] uppercase tracking-wider">
                  <Building2 className="w-4 h-4" /> Core Mission & Scope
                </div>
                <h3 className="text-xl font-bold text-slate-900">Home Appliances & Electronics Giant</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Headquartered in Uzbekistan, Artel Electronics manufactures a broad spectrum of consumer appliances including Refrigerators, Washing Machines, Air Conditioners, TVs, Kitchen Stoves, Vacuum Cleaners, and Water Heaters across 33 product categories.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-white border border-orange-100 shadow-xs hover:shadow-md hover:border-orange-300 hover:bg-orange-50/30 transition-all duration-300 space-y-1">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#FF6B00]" />
                    <span>Nationwide Service</span>
                  </div>
                  <p className="text-xs text-slate-500">Doorstep repair visits by qualified service engineers.</p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-orange-100 shadow-xs hover:shadow-md hover:border-orange-300 hover:bg-orange-50/30 transition-all duration-300 space-y-1">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#FF6B00]" />
                    <span>33 Product Lines</span>
                  </div>
                  <p className="text-xs text-slate-500">Complete home outfitting from kitchen to climate control.</p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-orange-100 shadow-xs hover:shadow-md hover:border-orange-300 hover:bg-orange-50/30 transition-all duration-300 space-y-1">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#FF6B00]" />
                    <span>Direct Call Helpline</span>
                  </div>
                  <p className="text-xs text-slate-500">Daily support center operating 08:00 to 21:00.</p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-orange-100 shadow-xs hover:shadow-md hover:border-orange-300 hover:bg-orange-50/30 transition-all duration-300 space-y-1">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#FF6B00]" />
                    <span>Enterprise & B2B</span>
                  </div>
                  <p className="text-xs text-slate-500">Commercial HVAC and bulk appliance procurement.</p>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="https://artelelectronics.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#FF6B00] hover:text-orange-600 transition-colors group"
                >
                  <span>Learn more on artelelectronics.com</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Customer Services Grid */}
      <section className="py-20 bg-white border-t border-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto flex flex-col items-center">
            <span className="inline-block px-3.5 py-1.5 rounded-full bg-orange-100 border border-orange-200 text-[#FF6B00] text-xs font-extrabold uppercase tracking-widest mb-3">
              Comprehensive Support
            </span>
            <h2 className="text-3xl sm:text-5xl font-black font-heading tracking-tight text-slate-900 mt-1">
              Customer & <span className="text-[#FF6B00]">Technical Services</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-3">
              End-to-end service support designed to keep your home electronics and commercial equipment running at peak performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesList.map((service, index) => {
              const IconComp = service.icon;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="p-6 rounded-2xl bg-white border border-slate-200/80 hover:border-[#FF6B00] shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group relative overflow-hidden flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-100 text-[#FF6B00] flex items-center justify-center group-hover:scale-110 group-hover:bg-[#FF6B00] group-hover:text-white transition-all duration-300 shadow-xs">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <span className="px-2.5 py-1 rounded-md bg-orange-50/80 text-[10px] font-extrabold text-orange-700 border border-orange-200/70">
                        {service.badge}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#FF6B00] transition-colors">
                        {service.title}
                      </h3>
                      <span className="text-xs text-orange-600 font-semibold block mt-0.5">
                        {service.subtitle}
                      </span>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-slate-100 mt-4">
                    <a
                      href="https://artelelectronics.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 group-hover:text-[#FF6B00] transition-colors"
                    >
                      <span>Access Service</span>
                      <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 5. Contact & Official Info Section */}
      <section className="py-20 bg-[#FFF9F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-white border border-orange-200/80 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#FF6B00]/5 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-7 space-y-6">
                <span className="px-3.5 py-1 rounded-full bg-orange-100 text-[#FF6B00] text-[11px] font-extrabold uppercase tracking-wider">
                  Official Communication
                </span>
                <h3 className="text-2xl sm:text-4xl font-black text-slate-900">
                  Get in Touch with Artel Electronics
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  For customer service requests, repair appointments, warranty claims, or enterprise bulk orders, contact official representatives or visit the digital portal.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-800">
                    <Phone className="w-4 h-4 text-[#FF6B00]" />
                    <span className="font-bold">Phone:</span>
                    <a href="tel:+998781488888" className="hover:text-[#FF6B00] transition-colors">+998 (78) 148-88-88</a>
                  </div>
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-800">
                    <Mail className="w-4 h-4 text-blue-600" />
                    <span className="font-bold">Email:</span>
                    <a href="mailto:info@artelelectronics.com" className="hover:text-blue-600 transition-colors">info@artelelectronics.com</a>
                  </div>
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-800">
                    <Clock className="w-4 h-4 text-emerald-600" />
                    <span className="font-bold">Support Hours:</span>
                    <span>08:00 – 21:00 Daily</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 flex flex-col items-center justify-center gap-4 bg-[#FFF6EE] p-6 rounded-2xl border border-orange-200/80">
                <Building2 className="w-12 h-12 text-[#FF6B00]" />
                <div className="text-center">
                  <span className="text-sm font-extrabold text-slate-900 block">Official Website</span>
                  <span className="text-xs text-slate-500 block">artelelectronics.com</span>
                </div>
                <a
                  href="https://artelelectronics.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 rounded-xl bg-[#FF6B00] hover:bg-orange-600 text-white font-extrabold text-xs shadow-lg hover:shadow-orange-500/25 flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <span>Visit Official Site</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
