import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView } from 'motion/react';
import { 
  Plane, ArrowRight, ArrowLeft, CheckCircle2, ShieldCheck, 
  Mail, Phone, Clock, Sparkles, MapPin, Globe2, Award, 
  Headset, Star, Hotel, Compass, FileCheck, Users, Calendar,
  ExternalLink, Building2
} from 'lucide-react';
import travelImage from "../assets/company-images/traveloperations-image.jpg";
import coverImage from "../assets/images/travel-cover.png";

// Animated Counter component
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

interface TravelOperationsPageProps {
  onBackToHome: () => void;
  onOpenContact: () => void;
  onSelectCompany?: (companyId: string) => void;
}

export const TravelOperationsPage: React.FC<TravelOperationsPageProps> = ({
  onBackToHome,
  onOpenContact,
  onSelectCompany
}) => {
  const servicesList = [
    {
      icon: Plane,
      title: "Flights",
      desc: "Direct airline contracts and member-only fares across 30+ carriers.",
      badge: "30+ Carriers"
    },
    {
      icon: Building2,
      title: "Umrah Packages",
      desc: "Hotels within walking distance of Haram, direct flights, and a dedicated mu'allim for every group. Four tiers, transparent pricing.",
      badge: "4 Tiers Available"
    },
    {
      icon: Compass,
      title: "Tour Packages",
      desc: "Curated trips to Uzbekistan, Turkey, Azerbaijan, Thailand, Malaysia, Sri Lanka and beyond.",
      badge: "Curated Itineraries"
    },
    {
      icon: FileCheck,
      title: "Visa Consultancy",
      desc: "Embassy-grade documentation for UK, USA, UAE and more, with strong approval rates.",
      badge: "High Approval Rate"
    },
    {
      icon: Hotel,
      title: "Hotels & Transfers",
      desc: "Vetted stays and private transport arranged end to end.",
      badge: "Vetted Stays"
    },
    {
      icon: Users,
      title: "Corporate & Group Travel",
      desc: "Delegations, group tours and business travel handled in-house.",
      badge: "In-House Handling"
    }
  ];

  const whyUsFeatures = [
    { label: "50,000+ travellers served", value: "50K+", icon: Users },
    { label: "20,000+ bookings completed", value: "20K+", icon: CheckCircle2 },
    { label: "100+ destinations covered", value: "100+", icon: Globe2 },
    { label: "98% satisfaction rate", value: "98%", icon: Star },
    { label: "24/7 on-trip support line", value: "24/7", icon: Headset },
    { label: "English & Urdu language desk", value: "Bilingual", icon: Sparkles },
    { label: "PSA Approved", value: "Official", icon: ShieldCheck }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-orange-50/20 to-slate-50 text-slate-800 font-sans selection:bg-[#FF6B00] selection:text-white pt-20">

      {/* HERO SECTION */}
      <section className="relative min-h-[540px] sm:min-h-[600px] flex items-center justify-center overflow-hidden py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        {/* Background Image Container */}
        <div className="absolute inset-0 z-0">
          <img 
            src={coverImage} 
            alt="Travel Operations Background" 
            className="w-full h-full object-cover object-center filter brightness-[0.8] scale-105"
          />
          {/* Overlay Gradient */}
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
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-orange-300/40 text-orange-200 text-xs sm:text-sm font-semibold mb-6 shadow-xs">
              <ShieldCheck className="w-4 h-4 text-[#FF6B00]" />
              <span>PSA APPROVED TRAVEL DESK</span>
            </div>

            {/* Page Heading */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-tight mb-4 drop-shadow-md">
              Travel Operations
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-2xl font-semibold text-orange-100 max-w-3xl mx-auto mb-4 leading-relaxed">
              Pakistan's PSA-approved travel desk — Umrah, Uzbekistan tours, flights, hotels and visa consultancy, engineered seamlessly.
            </p>

            {/* Supporting Line */}
            <p className="text-sm sm:text-base text-slate-200/90 max-w-2xl mx-auto leading-relaxed mb-8 font-normal bg-slate-900/40 backdrop-blur-xs p-4 rounded-2xl border border-white/10">
              From the first idea to the last boarding pass, we plan it, book it, and stay on call the entire way.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://www.traveloperations.pk/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-[#FF6B00] to-orange-500 hover:from-orange-600 hover:to-orange-500 shadow-lg shadow-orange-500/30 transition-all hover:scale-[1.02] flex items-center gap-2 cursor-pointer"
              >
                <span>Explore Tours</span>
                <Compass className="w-4 h-4" />
              </a>

              <a
                href="https://www.traveloperations.pk/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 rounded-xl font-bold text-sm text-white bg-white/15 hover:bg-white/25 border border-white/30 backdrop-blur-md transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Book Now</span>
                <ExternalLink className="w-4 h-4 text-orange-300" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* TRUST STRIP (Below Hero) */}
      <section className="relative z-20 max-w-5xl mx-auto -mt-8 px-4 sm:px-6">
        <div className="p-4 sm:p-6 rounded-2xl bg-white border border-orange-100 shadow-xl shadow-orange-950/5 flex flex-wrap items-center justify-around gap-4 text-center">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-orange-50/80 border border-orange-200/60 text-[#1B365D]">
            <ShieldCheck className="w-5 h-5 text-[#FF6B00]" />
            <span className="text-xs sm:text-sm font-extrabold">PSA Approved</span>
          </div>

          <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200/80 text-[#1B365D]">
            <Users className="w-5 h-5 text-[#FF6B00]" />
            <span className="text-xs sm:text-sm font-bold">
              <AnimatedStatNumber end={50000} suffix="+" /> Travellers
            </span>
          </div>

          <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200/80 text-[#1B365D]">
            <Globe2 className="w-5 h-5 text-[#FF6B00]" />
            <span className="text-xs sm:text-sm font-bold">
              <AnimatedStatNumber end={100} suffix="+" /> Destinations
            </span>
          </div>

          <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-amber-50/80 border border-amber-200/80 text-[#1B365D]">
            <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
            <span className="text-xs sm:text-sm font-bold">4.9 on Google</span>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT CONTAINERS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 space-y-20">

        {/* SECTION 1 — ABOUT */}
        <section className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200/80 shadow-sm space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-50 text-[#FF6B00] text-xs font-black uppercase tracking-widest border border-orange-200">
            <Building2 className="w-3.5 h-3.5" />
            <span>About Us</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#1B365D] leading-tight">
            A full-service travel desk based in Pakistan
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-4xl">
            Travel Operations is a PSA-approved travel agency operating from Lahore. We handle Umrah, international tours, flight bookings, hotel reservations, visa consultancy and corporate travel — all under one roof. With direct contracts across 30+ airlines, led by Uzbekistan Airways, we negotiate the fares so our travellers simply arrive.
          </p>
        </section>

        {/* SECTION 2 — WHAT WE DO */}
        <section className="space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="inline-block text-xs font-black tracking-widest text-[#FF6B00] uppercase bg-orange-50 px-3 py-1 rounded-full border border-orange-200">
              Our Core Offerings
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#1B365D]">
              Everything your trip needs, in one place
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              End-to-end travel solutions built for seamless experiences, competitive fares, and complete peace of mind.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesList.map((service, idx) => {
              const ServiceIcon = service.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="p-6 rounded-2xl bg-white border border-slate-100 hover:border-orange-300 hover:shadow-xl hover:shadow-orange-500/10 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center text-[#FF6B00] group-hover:bg-[#FF6B00] group-hover:text-white transition-all">
                        <ServiceIcon className="w-6 h-6" />
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
                    <span>Inquire Option</span>
                    <ArrowRight className="w-4 h-4 text-[#FF6B00] transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* SECTION 3 — WHY US */}
        <section className="bg-gradient-to-br from-slate-900 via-[#1B365D] to-slate-900 text-white p-8 sm:p-12 rounded-3xl shadow-xl space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="inline-block text-xs font-black tracking-widest text-orange-400 uppercase bg-white/10 px-3 py-1 rounded-full border border-orange-400/30">
              Trusted Excellence
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              Why travellers choose Travel Operations
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              A decade of reliable flight management, direct official agency ties, and round-the-clock traveler care.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {whyUsFeatures.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div 
                  key={idx}
                  className="p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 hover:border-orange-400/50 transition-all flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-orange-500/20 text-orange-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[#FF6B00] font-black text-lg sm:text-xl">
                      {item.value}
                    </div>
                    <div className="text-slate-200 text-xs sm:text-sm font-medium">
                      {item.label}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section className="bg-gradient-to-r from-orange-500 via-[#FF6B00] to-orange-600 rounded-3xl text-white p-8 sm:p-12 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-4 max-w-2xl text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold border border-white/30">
              <Headset className="w-3.5 h-3.5" />
              <span>24/7 Dedicated Support</span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-black text-white">
              Ready to Plan Your Next Journey?
            </h3>
            <p className="text-orange-100 text-sm sm:text-base leading-relaxed">
              Get in touch with our expert travel agents in Lahore for instant quotes, visa consultancy, and custom tour packages.
            </p>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2 text-xs sm:text-sm font-semibold text-white/90">
              <a href="tel:+923111240111" className="inline-flex items-center gap-2 bg-black/20 px-3.5 py-2 rounded-xl hover:bg-black/30 transition-colors">
                <Phone className="w-4 h-4 text-orange-200" />
                <span>+92 311 1240111 (24/7)</span>
              </a>
              <a href="mailto:info@traveloperations.pk" className="inline-flex items-center gap-2 bg-black/20 px-3.5 py-2 rounded-xl hover:bg-black/30 transition-colors">
                <Mail className="w-4 h-4 text-orange-200" />
                <span>info@traveloperations.pk</span>
              </a>
              <div className="inline-flex items-center gap-2 bg-black/20 px-3.5 py-2 rounded-xl">
                <MapPin className="w-4 h-4 text-orange-200" />
                <span>Lahore, Pakistan</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row lg:flex-col gap-3 w-full sm:w-auto shrink-0">
            <a
              href="https://www.traveloperations.pk/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-xl font-extrabold text-sm text-[#1B365D] bg-white hover:bg-orange-50 shadow-lg transition-all text-center inline-flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Visit Official Website</span>
              <ExternalLink className="w-4 h-4 text-[#FF6B00]" />
            </a>
            <button
              onClick={onOpenContact}
              className="px-8 py-4 rounded-xl font-bold text-sm text-white bg-black/20 hover:bg-black/30 border border-white/20 transition-all text-center cursor-pointer"
            >
              Inquire / Book Direct
            </button>
            <button
              onClick={onBackToHome}
              className="px-8 py-4 rounded-xl font-medium text-xs text-orange-100 hover:text-white transition-all text-center cursor-pointer"
            >
              Back to Ecosystem
            </button>
          </div>
        </section>

      </div>
    </div>
  );
};
