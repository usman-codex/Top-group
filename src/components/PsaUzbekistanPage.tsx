import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView } from 'motion/react';
import { 
  Plane, ArrowRight, ArrowLeft, CheckCircle2, ShieldCheck, 
  Mail, Phone, Clock, Sparkles,
  Ticket, FileCheck, Calendar, Hotel, Bus, Users,
  Globe2, Award, Headset, MapPin, Play
} from 'lucide-react';
import { COMPANIES } from '../data/mockData';
import psaImage from "../assets/company-images/psa-uzbekistan.jpg";

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

interface PsaUzbekistanPageProps {
  onBackToHome: () => void;
  onOpenContact: () => void;
  onOpenVideo?: () => void;
  onSelectCompany: (companyId: string) => void;
}

export const PsaUzbekistanPage: React.FC<PsaUzbekistanPageProps> = ({
  onBackToHome,
  onOpenContact,
  onOpenVideo,
  onSelectCompany
}) => {
  const psaCompany = COMPANIES.find(c => c.slug === 'psa-uzbekistan' || c.id === '4');

  const psaMeans = [
    {
      icon: Ticket,
      title: "Direct Ticketing Authority",
      desc: "Tickets issued directly by us, without going through a third party."
    },
    {
      icon: CheckCircle2,
      title: "Confirmed Fares & Seats",
      desc: "Access to official fares and inventory for the Uzbekistan route."
    },
    {
      icon: Clock,
      title: "Faster Booking & Changes",
      desc: "Reservations, date changes, cancellations and refunds handled in-house."
    },
    {
      icon: Users,
      title: "Group & Corporate Bookings",
      desc: "Dedicated handling for group travel, corporate accounts and bulk bookings."
    },
    {
      icon: ShieldCheck,
      title: "End-to-End Support",
      desc: "One point of contact from ticket issuance to departure."
    }
  ];

  const uzbekistanServices = [
    {
      icon: Plane,
      title: "Air Ticketing",
      desc: "Confirmed bookings on the Uzbekistan sector for individuals, families and groups.",
      badge: "Official PSA Fares"
    },
    {
      icon: FileCheck,
      title: "Visa Assistance",
      desc: "Complete guidance and documentation support for Uzbekistan visas.",
      badge: "Fast Processing"
    },
    {
      icon: MapPin,
      title: "Tour Packages",
      desc: "Tashkent, Samarkand, Bukhara and Khiva — customised itineraries.",
      badge: "Heritage Cities"
    },
    {
      icon: Hotel,
      title: "Hotel Bookings",
      desc: "Accommodation across major Uzbek cities.",
      badge: "Verified Stays"
    },
    {
      icon: Bus,
      title: "Transfers & Transport",
      desc: "Airport pickups and in-country travel arrangements.",
      badge: "Private Logistics"
    },
    {
      icon: Users,
      title: "Corporate & Group Travel",
      desc: "Business delegations, trade visits and group tours.",
      badge: "Dedicated Agent"
    }
  ];

  const whyBookUs = [
    "Appointed PSA status for Uzbekistan",
    "Official fares, no hidden markups",
    "In-house ticketing and visa handling",
    "Experienced team familiar with the Uzbekistan sector",
    "Support before, during and after travel"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-orange-50/20 to-slate-50 text-slate-800 font-sans selection:bg-[#FF6B00] selection:text-white pt-20">
      
      {/* Hero Section with Background Image */}
      <section className="relative min-h-[520px] sm:min-h-[580px] flex items-center justify-center overflow-hidden py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        {/* Background Image Container */}
        <div className="absolute inset-0 z-0">
          <img 
            src={psaImage} 
            alt="PSA Uzbekistan Background" 
            className="w-full h-full object-cover object-center scale-105 filter brightness-[0.85]"
          />
          {/* Overlay Gradient: Deep dark indigo/navy with warm white-orange tint */}
         <div className="absolute inset-0 bg-gradient-to-t from-[#1B365D]/95 via-[#1B365D]/80 to-slate-900/70" />
          {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,107,0,0.18),transparent_70%)]" /> */}
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-orange-300/40 text-orange-200 text-xs sm:text-sm font-semibold mb-6 shadow-sm">
              <Plane className="w-4 h-4 text-[#FF6B00]" />
              <span>PSA — UZBEKISTAN</span>
            </div>

            {/* Page Heading */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight mb-4 drop-shadow-md">
              Authorised PSA for Uzbekistan
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-2xl font-medium text-orange-100 max-w-2xl mx-auto mb-6 leading-relaxed">
              Your direct link to Uzbekistan — flights, visas and travel, handled by an appointed agent.
            </p>

            {/* Intro Paragraph */}
            <p className="text-sm sm:text-base text-slate-200/90 max-w-3xl mx-auto leading-relaxed mb-8 font-normal bg-slate-900/40 backdrop-blur-xs p-4 sm:p-6 rounded-2xl border border-white/10">
              As an appointed Passenger Sales Agent (PSA) for Uzbekistan, we hold direct authority to issue tickets, manage bookings and handle travel arrangements for the Uzbekistan sector. This means our customers deal with an official channel — not a reseller — for confirmed fares, faster ticketing and reliable support from booking to arrival.
            </p>

            {/* CTA Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://www.traveloperations.pk/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-[#FF6B00] to-orange-500 hover:from-orange-600 hover:to-orange-500 shadow-lg shadow-orange-500/30 transition-all hover:scale-[1.02] flex items-center gap-2 cursor-pointer"
              >
                <span>Book Flights & Visas</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Stats Bar */}
      <section className="relative z-20 max-w-6xl mx-auto -mt-8 px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl bg-white border border-orange-100 shadow-xl shadow-orange-950/5">
          <div className="text-center p-3 border-r border-slate-100 last:border-0">
            <div className="text-2xl sm:text-3xl font-black text-[#1B365D] mb-1">
              <AnimatedStatNumber end={320} suffix="K+" />
            </div>
            <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Tickets Issued / Yr</div>
          </div>
          <div className="text-center p-3 border-r border-slate-100 last:border-0">
            <div className="text-2xl sm:text-3xl font-black text-[#FF6B00] mb-1">
              <AnimatedStatNumber end={100} suffix="%" />
            </div>
            <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Direct Authority</div>
          </div>
          <div className="text-center p-3 border-r border-slate-100 last:border-0">
            <div className="text-2xl sm:text-3xl font-black text-[#1B365D] mb-1">
              <AnimatedStatNumber end={450} suffix="+" />
            </div>
            <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Agency Partners</div>
          </div>
          <div className="text-center p-3">
            <div className="text-2xl sm:text-3xl font-black text-[#FF6B00] mb-1">
              <AnimatedStatNumber end={55} suffix="+" />
            </div>
            <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Aviation Routes</div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 space-y-20">

        {/* Section 1: What a PSA Means for You */}
        <section className="space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="inline-block text-xs font-black tracking-widest text-[#FF6B00] uppercase bg-orange-50 px-3 py-1 rounded-full border border-orange-200">
              Official Partner Benefits
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#1B365D]">
              What a PSA Means for You
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Working with an appointed Passenger Sales Agent guarantees official reliability, direct pricing, and dedicated route support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {psaMeans.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="p-6 rounded-2xl bg-white border border-slate-100 hover:border-orange-200 hover:shadow-lg hover:shadow-orange-500/5 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center text-[#FF6B00] group-hover:bg-[#FF6B00] group-hover:text-white transition-all mb-4">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-[#1B365D] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Section 2: Our Uzbekistan Services */}
        <section className="space-y-10 bg-gradient-to-br from-orange-50/50 via-white to-blue-50/30 p-6 sm:p-12 rounded-3xl border border-orange-100 shadow-sm">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="inline-block text-xs font-black tracking-widest text-[#1B365D] uppercase bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
              End-To-End Aviation & Travel Solutions
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#1B365D]">
              Our Uzbekistan Services
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Comprehensive travel management for individuals, corporate delegations, and tour groups traveling to and from Uzbekistan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {uzbekistanServices.map((service, idx) => {
              const ServiceIcon = service.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-slate-100 hover:border-orange-300 hover:shadow-xl hover:shadow-orange-500/10 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-lg bg-orange-100/70 text-[#FF6B00] flex items-center justify-center">
                        <ServiceIcon className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] font-bold text-[#FF6B00] bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200/80">
                        {service.badge}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-[#1B365D] mb-2 group-hover:text-[#FF6B00] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {service.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-500 group-hover:text-[#1B365D]">
                    <span>Inquire Service</span>
                    <ArrowRight className="w-4 h-4 text-[#FF6B00] transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Section 3: Why Book Through Us */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white p-8 sm:p-12 rounded-3xl border border-slate-200/80 shadow-md">
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 text-[#FF6B00] text-xs font-bold border border-orange-200">
              <Award className="w-3.5 h-3.5" />
              <span>Official Aviation Agency</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#1B365D] leading-tight">
              Why Book Through Us
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              We streamline travel to Uzbekistan with official authority, competitive fare structures, and end-to-end customer support at every step of your journey.
            </p>

            <div className="pt-2">
              <a
                href="https://www.traveloperations.pk/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl font-bold text-xs sm:text-sm text-white bg-[#1B365D] hover:bg-[#FF6B00] transition-colors shadow-md inline-flex items-center gap-2 cursor-pointer"
              >
                <span>Speak to Uzbekistan Desk</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 bg-gradient-to-br from-slate-50 via-orange-50/40 to-white p-6 sm:p-8 rounded-2xl border border-orange-100 space-y-4">
            {whyBookUs.map((reason, idx) => (
              <div 
                key={idx}
                className="flex items-start gap-3.5 p-3.5 bg-white rounded-xl border border-slate-100 hover:border-orange-200 transition-all shadow-2xs"
              >
                <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span className="text-slate-800 font-semibold text-sm sm:text-base">
                  {reason}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Banner Section */}
        <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#1B365D] via-slate-900 to-[#1B365D] text-white p-8 sm:p-12 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 max-w-xl">
            <h3 className="text-xl sm:text-3xl font-extrabold text-white">
              Planning Travel to Uzbekistan?
            </h3>
            <p className="text-slate-300 text-sm sm:text-base">
              Get instant assistance with fares, group bookings, flight schedules and visa guidance.
            </p>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <a
              href="https://www.traveloperations.pk/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-[#FF6B00] hover:bg-orange-600 shadow-lg shadow-orange-500/30 transition-all text-center inline-flex items-center justify-center cursor-pointer"
            >
              Contact PSA Desk
            </a>
            <button
              onClick={onBackToHome}
              className="px-6 py-3.5 rounded-xl font-bold text-sm text-slate-200 bg-white/10 hover:bg-white/20 border border-white/20 transition-all text-center cursor-pointer"
            >
              Back to Main Menu
            </button>
          </div>
        </section>

      </div>
    </div>
  );
};
