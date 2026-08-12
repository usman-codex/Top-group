import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView } from 'motion/react';
import { 
  CreditCard, Cpu, Printer, ShieldCheck, Settings, ArrowRight, ArrowLeft, 
  CheckCircle2, Mail, Phone, MapPin, Sparkles, Building2, Users, Award, 
  Clock, Lock, Check, FileText, Send, Star, Layers, ChevronRight, Globe2
} from 'lucide-react';
import vadesImage from "../assets/company-images/vade-image.png";
import coverImage from "../assets/images/vades-cover.png";

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

interface VadesGroupPageProps {
  onBackToHome: () => void;
  onOpenContact: () => void;
  onSelectCompany?: (companyId: string) => void;
}

export const VadesGroupPage: React.FC<VadesGroupPageProps> = ({
  onBackToHome,
  onOpenContact,
  onSelectCompany
}) => {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [modalType, setModalType] = useState<'quote' | 'call'>('quote');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    product: 'Plastic Cards & Loyalty',
    message: ''
  });

  const handleOpenModal = (type: 'quote' | 'call') => {
    setModalType(type);
    setFormSubmitted(false);
    setQuoteModalOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setQuoteModalOpen(false);
      setFormSubmitted(false);
      setFormData({ name: '', phone: '', email: '', product: 'Plastic Cards & Loyalty', message: '' });
    }, 2500);
  };

  const services = [
    {
      id: 'sim-cards',
      icon: Cpu,
      title: 'SIM Cards',
      description: 'Production and supply of SIM cards for all mobile operators in Uzbekistan, as well as Russia and the countries of Central Asia.',
      tag: 'Telco & Telecom',
      highlights: ['Custom Carrier OS', 'High-Security Chipsets', 'Full Personalization']
    },
    {
      id: 'plastic-cards',
      icon: CreditCard,
      title: 'Plastic Cards',
      description: 'Manufacturing of club, discount and loyalty cards for retail, hospitality and corporate clients.',
      tag: 'Retail & Hospitality',
      highlights: ['Magnetic Stripe & NFC', 'Embossing & Foil Stamping', 'Custom Loyalty Cards']
    },
    {
      id: 'it-technologies',
      icon: ShieldCheck,
      title: 'IT Technologies',
      description: 'Development of innovative IT solutions in the field of user identification.',
      tag: 'User Authentication',
      highlights: ['Biometric Access Systems', 'Digital ID Verification', 'Cloud Management Software']
    },
    {
      id: 'automation',
      icon: Settings,
      title: 'Business Process Automation',
      description: 'Supply and implementation of hardware-software complexes for business automation.',
      tag: 'Enterprise Systems',
      highlights: ['Hardware Integration', 'POS & Terminal Systems', 'Workflow Optimization']
    },
    {
      id: 'printing',
      icon: Printer,
      title: 'Operational Printing',
      description: 'Fast, high-quality printing on modern equipment. Creativity and imagination are what make advertising material stand out from the crowd.',
      tag: 'High-Speed Press',
      highlights: ['Large-Format & Digital', 'Premium Promotional Print', 'Fast Turnaround Times']
    },
    {
      id: 'anti-counterfeit',
      icon: Lock,
      title: 'Anti-Counterfeiting Protection',
      description: 'The CENTURION system provides maximum data protection against forgery.',
      tag: 'Proprietary Tech',
      highlights: ['CENTURION Security System', 'Cryptographic Watermarks', 'Tamper-Evident Elements']
    }
  ];

  const whyChooseUs = [
    {
      title: 'Operating in Uzbekistan since 2005',
      desc: 'Over 20 years of continuous manufacturing excellence and operational stability in Tashkent.',
      stat: '2005',
      statLabel: 'Established'
    },
    {
      title: '1,000+ permanent clients',
      desc: 'Trusted partner for leading telecom operators, banks, retail chains, and government institutions.',
      stat: '1,000+',
      statLabel: 'Active Clients'
    },
    {
      title: '3,700+ completed projects',
      desc: 'Delivered millions of SIM cards, loyalty programs, and automated identification complexes.',
      stat: '3,700+',
      statLabel: 'Projects Delivered'
    },
    {
      title: 'Full in-house production',
      desc: 'Cards, SIM production, and operational printing handled under one roof on modern European machinery.',
      stat: '100%',
      statLabel: 'In-House Control'
    },
    {
      title: 'Regional reach across Eurasia',
      desc: 'Supplying mobile operators and enterprises across Uzbekistan, Russia, and Central Asia.',
      stat: '3+',
      statLabel: 'Key Markets'
    },
    {
      title: 'CENTURION anti-counterfeiting',
      desc: 'Proprietary multi-layered protection system shielding client credentials from forgery.',
      stat: 'CENTURION',
      statLabel: 'Security Standard'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-[#FF6B00] selection:text-white">
      
    
      {/* HERO SECTION */}
      <section className="relative pt-12 sm:pt-20 pb-16 sm:pb-24 bg-gradient-to-b from-[#1B365D] via-[#162C4E] to-[#0F213D] text-white overflow-hidden">
        {/* Background Grid Accent */}
        {/* <div className="absolute inset-0 bg-[radial-gradient(#FF6B00_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" /> */}

         {/* Background Image with Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={coverImage}
            alt="Vades Group Manufacturing & Card Production"
            className="w-full h-full object-cover object-center opacity-40 scale-105 animate-pulse-subtle"
          />
          {/* <div className="absolute inset-0 bg-gradient-to-t from-[#1B365D]/95 via-[#1B365D]/80 to-slate-900/70" /> */}
          {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,107,0,0.18),transparent_70%)]" /> */}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-orange-400 text-xs font-black uppercase tracking-widest backdrop-blur-md">
                <span>TOP GROUP ECOSYSTEM COMPANY</span>
              </div>

              <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight font-heading leading-tight">
                Vades Group
              </h1>

              <p className="text-lg sm:text-xl font-medium text-slate-200 leading-relaxed max-w-2xl">
                Plastic cards, SIM production and operational printing — manufacturing innovative identification solutions in Tashkent since 2005.
              </p>

              <p className="text-sm sm:text-base font-normal text-slate-300/90 leading-relaxed max-w-2xl border-l-2 border-[#FF6B00] pl-4 italic">
                "We create innovative solutions that give clients convenient, fast and secure access to services and modern technology."
              </p>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => handleOpenModal('quote')}
                  className="px-7 py-3.5 rounded-xl font-extrabold text-sm text-white bg-[#FF6B00] hover:bg-orange-600 shadow-lg shadow-orange-950/40 hover:shadow-orange-500/20 transition-all flex items-center gap-2 cursor-pointer group"
                >
                  <span>Get a Price</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>

                <button
                  onClick={() => handleOpenModal('call')}
                  className="px-7 py-3.5 rounded-xl font-extrabold text-sm text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all flex items-center gap-2 cursor-pointer backdrop-blur-md"
                >
                  <Phone className="w-4 h-4 text-orange-400" />
                  <span>Request a Call</span>
                </button>
              </div>
            </div>

            {/* Right Card / Visual */}
            {/* Right Card / Visual */}
<div className="lg:col-span-5 lg:translate-y-10">
  <div className="relative rounded-3xl overflow-hidden border border-white/20 shadow-2xl bg-slate-950 p-2 sm:p-3 group">
                <img 
                  src={vadesImage} 
                  alt="Vades Group Manufacturing & Card Production" 
                  className="w-full h-auto rounded-2xl object-contain transition-transform duration-700 group-hover:scale-[1.02]"
                />
                
                <div className="mt-3 p-4 rounded-2xl bg-slate-900/90 border border-white/10 space-y-1">
                  <div className="flex items-center gap-2 text-xs font-bold text-orange-400">
                    <Building2 className="w-4 h-4" />
                    <span>Tashkent Manufacturing Plant</span>
                  </div>
                  <p className="text-xs sm:text-sm font-semibold text-white/90">
                    State-of-the-art SIM card encoding, smart plastic card production, and high-speed operational printing.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* TRUST STRIP (Hero Ke Neeche) */}
          <div className="mt-14 sm:mt-18 pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-md space-y-1">
              <div className="text-3xl sm:text-4xl font-black text-orange-400 font-heading">
                Since <AnimatedNumber end={2005} duration={1000} />
              </div>
              <div className="text-xs sm:text-sm font-bold text-slate-300 uppercase tracking-wider">
                Operating Experience
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-md space-y-1">
              <div className="text-3xl sm:text-4xl font-black text-white font-heading">
                <AnimatedNumber end={1000} suffix="+" duration={1200} />
              </div>
              <div className="text-xs sm:text-sm font-bold text-slate-300 uppercase tracking-wider">
                Permanent Clients
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-md space-y-1">
              <div className="text-3xl sm:text-4xl font-black text-orange-400 font-heading">
                <AnimatedNumber end={3700} suffix="+" duration={1400} />
              </div>
              <div className="text-xs sm:text-sm font-bold text-slate-300 uppercase tracking-wider">
                Completed Projects
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 1 — ABOUT */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Image & Stats Badge */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative">
                <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-slate-950 p-2 sm:p-3">
                  <img 
                    src={vadesImage} 
                    alt="Vades Group Manufacturing Facility" 
                    className="w-full h-auto rounded-2xl object-contain"
                  />
                </div>

                <div className="absolute -bottom-6 -right-2 sm:-right-4 bg-[#1B365D] text-white p-4 sm:p-5 rounded-2xl border border-slate-700 shadow-2xl max-w-xs space-y-1 z-10">
                  <div className="text-xs font-bold text-orange-400 uppercase tracking-widest flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4" />
                    <span>CENTURION System</span>
                  </div>
                  <div className="text-sm font-extrabold text-white">
                    Maximum Protection Against Forgery
                  </div>
                </div>
              </div>
            </div>

            {/* Right Text */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-[#FF6B00] text-xs font-black uppercase tracking-widest">
                <span>SECTION 1 — ABOUT</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-black text-[#1B365D] tracking-tight font-heading leading-tight">
                Two decades of card and identification technology
              </h2>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
                Vades Group has operated successfully in the Uzbekistan market since 2005. From our base in Tashkent we manufacture club, discount and loyalty cards, produce SIM cards for mobile operators across Uzbekistan, Russia and Central Asia, and run a full operational printing house on modern equipment. Alongside manufacturing, we develop IT solutions in the field of user identification and supply hardware-software systems for business automation.
              </p>

              {/* Key Highlights Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#FF6B00] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Full In-House Facility</h4>
                    <p className="text-xs text-slate-500 mt-0.5">End-to-end card embossing, chip encoding, and print finishing.</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                  <Globe2 className="w-5 h-5 text-[#FF6B00] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Eurasian Export Reach</h4>
                    <p className="text-xs text-slate-500 mt-0.5">Serving telecom operators in Uzbekistan, Russia & Central Asia.</p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2 — WHAT WE DO */}
      <section className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-[#FF6B00] text-xs font-black uppercase tracking-widest">
              <span>SECTION 2 — WHAT WE DO</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-[#1B365D] tracking-tight font-heading">
              Manufacturing, printing and identification technology
            </h2>

            <p className="text-slate-600 text-sm sm:text-base">
              Comprehensive hardware, card production, and software solutions for business automation and secure identification.
            </p>
          </div>

          {/* 6 Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => {
              const IconComp = service.icon;
              return (
                <div
                  key={service.id}
                  className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-xs hover:shadow-xl hover:border-orange-300 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-200 text-[#FF6B00] flex items-center justify-center group-hover:bg-[#FF6B00] group-hover:text-white transition-colors">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#FF6B00] bg-orange-50/80 px-2.5 py-0.5 rounded-full border border-orange-200">
                        {service.tag}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-[#1B365D] group-hover:text-[#FF6B00] transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-sm text-slate-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-slate-100 space-y-2">
                    {service.highlights.map((h, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                        <Check className="w-3.5 h-3.5 text-[#FF6B00] shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* SECTION 3 — WHY VADES GROUP */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-[#FF6B00] text-xs font-black uppercase tracking-widest">
              <span>SECTION 3 — WHY VADES GROUP</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-[#1B365D] tracking-tight font-heading">
              Trusted by over a thousand clients
            </h2>

            <p className="text-slate-600 text-sm sm:text-base">
              Why leading enterprises, financial institutions, and telecommunication carriers partner with Vades Group.
            </p>
          </div>

          {/* 6 Reasons Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((reason, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:bg-white hover:shadow-lg hover:border-orange-200 transition-all space-y-3 relative overflow-hidden"
              >
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-black text-[#FF6B00] font-heading">{reason.stat}</span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">{reason.statLabel}</span>
                </div>

                <h3 className="text-base font-bold text-[#1B365D]">
                  {reason.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {reason.desc}
                </p>
              </div>
            ))}
          </div>

          {/* CLOSING CTA BOX */}
          <div className="mt-12 rounded-3xl bg-gradient-to-br from-[#1B365D] to-[#0F213D] text-white p-8 sm:p-12 shadow-2xl relative overflow-hidden text-center sm:text-left flex flex-col lg:flex-row items-center justify-between gap-8 border border-slate-700">
            <div className="space-y-2 max-w-2xl">
              <span className="text-xs font-black uppercase tracking-widest text-orange-400 bg-white/10 px-3 py-1 rounded-full border border-white/10">
                START YOUR PROJECT
              </span>
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white font-heading">
                Need cards, SIM production or printing? Talk to our team.
              </h3>
              <p className="text-sm text-slate-300">
                Get custom pricing, technical specifications, or request a call back from our Tashkent engineering desk.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 shrink-0">
              <button
                onClick={() => handleOpenModal('quote')}
                className="px-6 py-3.5 rounded-xl font-extrabold text-sm text-white bg-[#FF6B00] hover:bg-orange-600 shadow-lg shadow-orange-950/50 transition-all cursor-pointer flex items-center gap-2"
              >
                <span>Get a Price</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => handleOpenModal('call')}
                className="px-6 py-3.5 rounded-xl font-extrabold text-sm text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all cursor-pointer flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-orange-400" />
                <span>Request a Call</span>
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* CONTACT INFORMATION BAR */}
      <section className="py-12 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left items-center">
            
            <div className="flex items-center justify-center md:justify-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/10 text-orange-400 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">Phone Lines</div>
                <div className="text-sm font-extrabold text-white">+998 71 202 15 00 • +998 71 202 26 00</div>
              </div>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/10 text-orange-400 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">Headquarters & Plant</div>
                <div className="text-sm font-extrabold text-white">Tashkent, Uzbekistan</div>
              </div>
            </div>

            <div className="flex items-center justify-center md:justify-end gap-3">
              <button
                onClick={() => handleOpenModal('quote')}
                className="px-5 py-2.5 rounded-xl font-bold text-xs text-slate-900 bg-white hover:bg-slate-100 transition-colors cursor-pointer flex items-center gap-1.5"
              >
                <Mail className="w-4 h-4 text-[#FF6B00]" />
                <span>Contact Engineering Team</span>
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* MODAL FOR GET A PRICE / REQUEST A CALL */}
      {quoteModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative">
            <button
              onClick={() => setQuoteModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 font-bold text-lg w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center"
            >
              ✕
            </button>

            {formSubmitted ? (
              <div className="text-center py-8 space-y-3">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-black text-[#1B365D]">Thank You!</h3>
                <p className="text-sm text-slate-600">
                  Your request has been sent to Vades Group Tashkent team. We will call you back shortly.
                </p>
              </div>
            ) : (
              <div className="space-y-5">
                <div>
                  <span className="text-xs font-extrabold text-[#FF6B00] uppercase tracking-wider">
                    {modalType === 'quote' ? 'Request Price Quote' : 'Request a Callback'}
                  </span>
                  <h3 className="text-2xl font-black text-[#1B365D] mt-1">
                    {modalType === 'quote' ? 'Get a Price Estimate' : 'Speak with our Team'}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Vades Group • Tashkent, Uzbekistan
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alisher Usmanov"
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

                  {modalType === 'quote' && (
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Product / Service</label>
                      <select
                        value={formData.product}
                        onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#FF6B00]"
                      >
                        <option value="Plastic Cards & Loyalty">Plastic Cards & Loyalty</option>
                        <option value="SIM Cards Production">SIM Cards Production</option>
                        <option value="IT Technologies & ID">IT Technologies & User ID</option>
                        <option value="Business Automation">Business Process Automation</option>
                        <option value="Operational Printing">Operational Printing</option>
                        <option value="CENTURION Protection">CENTURION Anti-Counterfeiting</option>
                      </select>
                    </div>
                  )}

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Message / Requirements</label>
                    <textarea
                      rows={3}
                      placeholder="Specify quantity or requirements..."
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
                    <span>Submit Request</span>
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
