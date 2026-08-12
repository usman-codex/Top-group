import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView } from 'motion/react';
import { 
  Utensils, Flame, Store, Truck, ShieldCheck, ArrowRight, ArrowLeft, 
  CheckCircle2, Mail, Phone, MapPin, Sparkles, Building2, Users, Award, 
  Clock, Send, Star, ChevronRight, Globe2, ChefHat, Heart, Award as MedalIcon
} from 'lucide-react';

import chickenCharcoMain from '../assets/images/chicken-charco-image.png';
import chickenCharco1 from '../assets/images/chicken-charco-image1.png';
import chickenCharco2 from '../assets/images/chicken-charco-image2.png';
import coverImage from "../assets/images/chicken-charco-cover.png";
import coverImageMobile from "../assets/images/chicken-mob.png";

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

interface ChickenCharcoPageProps {
  onBackToHome: () => void;
  onOpenContact: () => void;
  onSelectCompany?: (companyId: string) => void;
}

export const ChickenCharcoPage: React.FC<ChickenCharcoPageProps> = ({
  onBackToHome,
  onOpenContact,
  onSelectCompany
}) => {
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [modalType, setModalType] = useState<'franchise' | 'catering' | 'general'>('franchise');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    message: ''
  });

  const handleOpenModal = (type: 'franchise' | 'catering' | 'general') => {
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
      setFormData({ name: '', phone: '', email: '', city: '', message: '' });
    }, 2500);
  };

  const offerings = [
    {
      id: 'authentic-grill',
      icon: Flame,
      title: 'Turkish Charcoal Grill',
      description: 'Slow-roasted wood-charcoal marinated chicken prepared with authentic Mediterranean spices, secret marinades, and fresh farm-sourced ingredients.',
      tag: 'Culinary Masterpiece',
      highlights: ['Authentic Wood-Charcoal Ovens', '24-Hour Secret Herb Marination', '100% Farm-Fresh Poultry']
    },
    {
      id: 'central-kitchen',
      icon: ChefHat,
      title: 'Central Cloud Kitchens',
      description: 'Standardized central processing units ensuring uniform quality control, daily marinade prep, and high-capacity catering distribution.',
      tag: 'Standardized Quality',
      highlights: ['ISO Certified Quality Control', 'Cold-Chain Daily Delivery', 'High Capacity Processing']
    },
    {
      id: 'pos-tech',
      icon: Store,
      title: 'AI Kitchen & POS Ecosystem',
      description: 'Integrated cloud POS system, intelligent kitchen display monitors, inventory forecast bots, and mobile ordering apps.',
      tag: 'Smart Restaurant Tech',
      highlights: ['Cloud POS & Inventory Bots', 'Mobile App & Loyalty Rewards', 'Real-Time Kitchen KDS']
    },
    {
      id: 'farm-logistics',
      icon: Truck,
      title: 'Farm-to-Table Supply Chain',
      description: 'Direct partnerships with premium poultry farms ensuring 100% organic, antibiotic-free, and halal certified ingredients.',
      tag: 'Sourcing Excellence',
      highlights: ['Direct Farm Procurement', 'Halal Certified Standard', 'Zero Preservative Guarantee']
    },
    {
      id: 'franchise-package',
      icon: Award,
      title: 'Turnkey Franchise System',
      description: 'End-to-end franchise support including architectural store layout design, operational training, POS software, and regional marketing.',
      tag: 'Global Expansion',
      highlights: ['Complete Store Blueprint', 'Comprehensive Staff Onboarding', 'High ROI Business Model']
    },
    {
      id: 'express-catering',
      icon: Utensils,
      title: 'Express Delivery & Corporate Catering',
      description: 'Dedicated corporate meal packages, event catering, and fast-casual delivery hubs serving thousands of daily customers.',
      tag: 'High Capacity Service',
      highlights: ['Custom Event Menus', 'Corporate Lunch Subscriptions', 'Hot-Box Delivery Fleet']
    }
  ];

  const whyChooseCharco = [
    {
      title: 'Fastest-Growing F&B Brand in Central Asia',
      desc: 'Rapidly scaling across key international markets with 42+ active outlets in Tashkent, Dubai, and regional capitals.',
      stat: '42+',
      statLabel: 'Active Outlets'
    },
    {
      title: '3.5 Million+ Meals Served Annually',
      desc: 'Loved by families, corporate teams, and food enthusiasts for its rich charcoal flavor and quick-service speed.',
      stat: '3.5M+',
      statLabel: 'Meals / Year'
    },
    {
      title: '4.9/5 Average Customer Rating',
      desc: 'Consistently top-rated across major food delivery platforms and customer review channels.',
      stat: '4.9/5',
      statLabel: 'Customer Rating'
    },
    {
      title: '100% Halal & Organic Sourcing',
      desc: 'Strict adherence to halal standards and daily farm-fresh deliveries with zero frozen artificial additives.',
      stat: '100%',
      statLabel: 'Halal Certified'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-[#FF6B00] selection:text-white pt-16">
      
      {/* HERO SECTION — WHITE & ORANGE THEME WITH CENTERED HERO TEXT */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-b from-orange-50/90 via-white to-amber-50/40 text-slate-800 overflow-hidden border-b border-orange-100">
      
         <div className="absolute inset-0 z-0">
          <picture className="w-full h-full block">
            <source media="(max-width: 767px)" srcSet={coverImageMobile || coverImage} />
            <img 
              src={coverImage} 
              alt="Chicken Charco Background" 
              className="w-full h-full object-cover object-center filter brightness-[0.85]"
            />
          </picture>
          <div className="absolute inset-0 bg-slate-950/70 sm:bg-slate-950/60" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100/90 border border-orange-200 text-[#FF6B00] text-xs font-black uppercase tracking-widest shadow-xs">
            TOP GROUP ECOSYSTEM • HOSPITALITY & F&B
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight font-heading leading-tight mx-auto text-center">
            Chicken Charco
          </h1>

          <p className="text-lg sm:text-xl font-medium text-slate-600 leading-relaxed text-center text-white mx-auto max-w-3xl">
            Turkish Charcoal-Grilled Culinary Excellence & Modern F&B Operations. Bringing authentic wood-charcoal flavors, farm-to-table freshness, and automated kitchen workflows to international markets.
          </p>

          <div className="py-3 px-6 rounded-2xl bg-white/80 border border-orange-200/90 text-slate-700 text-sm sm:text-base italic text-center mx-auto max-w-2xl shadow-xs backdrop-blur-sm">
            "Combining traditional charcoal grilling heritage with automated kitchen technology and strict quality standards."
          </div>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => handleOpenModal('franchise')}
              className="px-7 py-3.5 rounded-xl font-extrabold text-sm text-white bg-[#FF6B00] hover:bg-orange-600 shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 transition-all flex items-center gap-2 cursor-pointer group"
            >
              <span>Franchise Inquiry</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <button
              onClick={() => handleOpenModal('catering')}
              className="px-7 py-3.5 rounded-xl font-extrabold text-sm text-[#1B365D] bg-white hover:bg-orange-50/80 border border-slate-200 hover:border-orange-300 transition-all flex items-center gap-2 cursor-pointer shadow-xs"
            >
              <Utensils className="w-4 h-4 text-[#FF6B00]" />
              <span>Catering & Orders</span>
            </button>
          </div>

          {/* Centered Image Gallery Showcase */}
          <div className="pt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
            <div className="rounded-2xl overflow-hidden border border-orange-200 shadow-md bg-white group">
              <img 
                src={chickenCharcoMain} 
                alt="Chicken Charco Restaurant Dining" 
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="p-3 bg-white text-center">
                <span className="text-xs font-bold text-[#1B365D]">Modern Dining Spaces</span>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-orange-200 shadow-md bg-white group">
              <img 
                src={chickenCharco1} 
                alt="Charcoal Grilled Delicacies" 
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="p-3 bg-white text-center">
                <span className="text-xs font-bold text-[#1B365D]">Turkish Wood Charcoal Grill</span>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-orange-200 shadow-md bg-white group">
              <img 
                src={chickenCharco2} 
                alt="Chicken Charco Signature Dishes" 
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="p-3 bg-white text-center">
                <span className="text-xs font-bold text-[#1B365D]">Farm-Fresh Signature Dishes</span>
              </div>
            </div>
          </div>

          {/* Centered Trust Strip */}
          <div className="mt-12 pt-8 border-t border-orange-200/60 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center max-w-4xl mx-auto">
            <div className="bg-white/90 border border-orange-100 rounded-2xl p-5 shadow-xs space-y-1">
              <div className="text-3xl sm:text-4xl font-black text-[#FF6B00] font-heading">
                <AnimatedNumber end={42} suffix="+" duration={1000} />
              </div>
              <div className="text-xs sm:text-sm font-bold text-slate-500 uppercase tracking-wider">Active Outlets</div>
            </div>

            <div className="bg-white/90 border border-orange-100 rounded-2xl p-5 shadow-xs space-y-1">
              <div className="text-3xl sm:text-4xl font-black text-[#1B365D] font-heading">
                <AnimatedNumber end={35} suffix="M+" duration={1200} />
              </div>
              <div className="text-xs sm:text-sm font-bold text-slate-500 uppercase tracking-wider">Meals Served / Year</div>
            </div>

            <div className="bg-white/90 border border-orange-100 rounded-2xl p-5 shadow-xs space-y-1">
              <div className="text-3xl sm:text-4xl font-black text-[#FF6B00] font-heading">4.9 / 5</div>
              <div className="text-xs sm:text-sm font-bold text-slate-500 uppercase tracking-wider">Franchise Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1 — ABOUT & BRAND HERITAGE */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Image & Badge */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative">
                <div className="rounded-3xl overflow-hidden border border-orange-200 shadow-xl bg-orange-50/50">
                  <img 
                    src={chickenCharcoMain} 
                    alt="Chicken Charco Restaurant Experience" 
                    className="w-full h-80 sm:h-[420px] object-cover"
                  />
                </div>

                <div className="absolute -bottom-6 -right-2 sm:-right-6 bg-[#1B365D] text-white p-5 rounded-2xl border border-slate-700 shadow-2xl max-w-xs space-y-1">
                  <div className="text-xs font-bold text-orange-400 uppercase tracking-widest flex items-center gap-1.5">
                    <Flame className="w-4 h-4 text-[#FF6B00]" />
                    <span>AUTHENTIC FLAVOR</span>
                  </div>
                  <div className="text-sm font-extrabold text-white">
                    100% Wood-Charcoal Smoked Culinary Recipe
                  </div>
                </div>
              </div>
            </div>

            {/* Right Text */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-6 text-left">
              <h2 className="text-3xl sm:text-4xl font-black text-[#1B365D] tracking-tight font-heading leading-tight">
                Authentic Turkish Charcoal Grilling Meets Modern Fast-Casual Innovation
              </h2>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
                Chicken Charco is one of the fastest growing food & beverage concepts under TOP GROUP's hospitality portfolio. Founded with a commitment to authentic culinary craftsmanship, Chicken Charco fuses traditional Mediterranean wood-charcoal roasting with automated kitchen operations, cloud POS inventory management, and farm-to-table sourcing.
              </p>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Every dish is prepared using fresh, never-frozen poultry marinated in proprietary spice blends for 24 hours, then slow-grilled over natural wood coals to lock in tender juiciness and rich smoky aroma.
              </p>

              {/* Key Highlights Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-orange-50/60 border border-orange-200 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#FF6B00] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Farm-to-Table Sourcing</h4>
                    <p className="text-xs text-slate-500 mt-0.5">100% organic, halal-certified fresh daily procurement.</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-orange-50/60 border border-orange-200 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#FF6B00] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Automated Central Kitchens</h4>
                    <p className="text-xs text-slate-500 mt-0.5">Standardized marinades and cold-chain supply for every store.</p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2 — CORE OFFERINGS & FRANCHISE ECOSYSTEM */}
      <section className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-3xl sm:text-4xl font-black text-[#1B365D] tracking-tight font-heading">
              Signature Culinary Experience & Turnkey Franchise Systems
            </h2>

            <p className="text-slate-600 text-sm sm:text-base">
              Explore how Chicken Charco delivers unmatched quality at scale across retail outlets, cloud kitchens, and corporate dining.
            </p>
          </div>

          {/* 6 Grid Offerings */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {offerings.map((item) => {
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

          {/* WHY CHOOSE CHARCO GRID */}
          <div className="pt-8">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <h3 className="text-2xl font-black text-[#1B365D] font-heading">
                Why Entrepreneurs & Diners Choose Chicken Charco
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyChooseCharco.map((reason, idx) => (
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

      {/* MODAL FOR FRANCHISE & CATERING */}
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
                <h3 className="text-2xl font-black text-[#1B365D]">Thank You!</h3>
                <p className="text-sm text-slate-600">
                  Your inquiry has been received by Chicken Charco operations team. We will get in touch shortly.
                </p>
              </div>
            ) : (
              <div className="space-y-5">
                <div>
                  <span className="text-xs font-extrabold text-[#FF6B00] uppercase tracking-wider">
                    {modalType === 'franchise' ? 'Franchise Partner Inquiry' : modalType === 'catering' ? 'Catering & Event Booking' : 'Contact Chicken Charco'}
                  </span>
                  <h3 className="text-2xl font-black text-[#1B365D] mt-1">
                    {modalType === 'franchise' ? 'Become a Franchisee' : 'Request Event Catering'}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Chicken Charco • TOP GROUP Ecosystem
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
                    <label className="block text-xs font-bold text-slate-700 mb-1">Target City / Country</label>
                    <input
                      type="text"
                      placeholder="e.g. Tashkent, Dubai, Lahore"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#FF6B00]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Message / Requirements</label>
                    <textarea
                      rows={3}
                      placeholder="Share details about your location or event..."
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
