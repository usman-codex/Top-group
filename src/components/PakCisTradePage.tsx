import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useInView } from 'motion/react';
import { 
  Building2, Globe, ArrowRight, ArrowLeft, Play, CheckCircle2, Award, ShieldCheck, 
  Users, TrendingUp, Cpu, Compass, Target, Zap, Layers, ChevronDown, 
  ExternalLink, Mail, Phone, MapPin, Calendar, HeartHandshake, FileText,
  Ship, Plane, Truck, Factory, Briefcase, ChevronRight, MessageSquare, HelpCircle, Star,
  DollarSign, Lock, ShieldAlert, Sparkles, Filter, Search, Check, RefreshCw, BarChart3,
  BadgeCheck, PackageCheck, Headphones, Percent, CreditCard, Box, ShoppingBag, Landmark
} from 'lucide-react';
import { COMPANIES } from '../data/mockData';
import pakcisImage from "../assets/company-images/pakcis-image.jpeg";
import pakcisVideo from "../assets/company-videos/pakcis-video.mp4";

// Animated Counter component that starts from 0 when scrolled into view
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
      // Fast start then smooth decelerate (cubic ease out)
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

interface PakCisTradePageProps {
  onBackToHome: () => void;
  onOpenContact: () => void;
  onOpenVideo?: () => void;
  onSelectCompany?: (companyId: string) => void;
}

export const PakCisTradePage: React.FC<PakCisTradePageProps> = ({
  onBackToHome,
  onOpenContact,
  onOpenVideo,
  onSelectCompany
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'services' | 'products' | 'corridors'>('overview');
  const [selectedProductCategory, setSelectedProductCategory] = useState<string>('All');
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [rfqModalOpen, setRfqModalOpen] = useState(false);
  const [rfqSubmitted, setRfqSubmitted] = useState(false);
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  const pakcisData = COMPANIES.find(c => c.slug === 'pakcis-trade') || COMPANIES[0];

  // Traded product categories requested
  const productCategories = [
    {
      id: 'textiles',
      title: 'Hand Embroidery & Traditional Textiles',
      subtitle: 'Premium Pakistani Lawn, Chiffon, Artisanal Embroidery & Khadi Fabrics',
      image: 'https://images.unsplash.com/photo-1606744837616-56c9a5c6a6eb?auto=format&fit=crop&w=800&q=80',
      badge: 'High Demand in CIS',
      items: ['Hand-embroidered Shawls', 'Unstitched Lawn Suits', 'Artisanal Khadi & Silk', 'Home Textiles & Bedding']
    },
    {
      id: 'denim-leather',
      title: 'Denim & Leather Apparel',
      subtitle: 'Industrial Denim, Jackets, Gloves & Genuine Leather Footwear',
      image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80',
      badge: 'Export Grade A',
      items: ['Genuine Leather Jackets', 'Heavy Duty Denim Jeans', 'Safety & Workwear Gloves', 'Leather Boots & Accessories']
    },
    {
      id: 'surgical-sports',
      title: 'Surgical Instruments & Sports Goods',
      subtitle: 'Sialkot Stainless Steel Medical Equipment & FIFA-grade Balls',
      image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80',
      badge: 'Global Benchmark',
      items: ['Precision Surgical Scissors', 'Dental & Orthopedic Tools', 'Match Footballs & Gear', 'Martial Arts Equipment']
    },
    {
      id: 'stationery',
      title: 'School & Stationery Supplies',
      subtitle: 'Bulk Paper Products, Notebooks, Ballpens & Office Supplies',
      image: 'https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?auto=format&fit=crop&w=800&q=80',
      badge: 'Wholesale Bulk',
      items: ['Standardized Exercise Books', 'Premium Ballpoint Pens', 'Corporate Filing Folders', 'Art & Craft Material']
    },
    {
      id: 'spices-food',
      title: 'Spices, Basmati Rice & Food Products',
      subtitle: 'Himalayan Pink Salt, Super Basmati Rice, Mangoes & Spices',
      image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80',
      badge: 'Phytosanitary Certified',
      items: ['Super Kernel Basmati Rice', 'Himalayan Pink Salt Crystals', 'Chaunsa & Sindhri Mangoes', 'Blended Spices & Pickles']
    },
    {
      id: 'electronics-home',
      title: 'Electronics, Home & Beauty Goods',
      subtitle: 'Smart Home Appliances, Consumer Beauty, Fashion & Groceries',
      image: 'https://images.unsplash.com/photo-1526738549149-8e07eca6c147?auto=format&fit=crop&w=800&q=80',
      badge: 'Full Warranty',
      items: ['Smart Refrigerators & TVs', 'Herbal Cosmetics & Skincare', 'Household Hardware', 'Processed Packaged Foods']
    }
  ];

  // Services list requested
  const servicesList = [
    {
      icon: Lock,
      title: 'Escrow-Protected Payment Processing',
      desc: 'Buyer funds are locked securely in an authorized escrow account and only released when delivery proof and customs clearance are digitally confirmed.',
      color: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      highlight: '100% Zero-Risk Buyer Protection'
    },
    {
      icon: BadgeCheck,
      title: 'Verified Suppliers Directory',
      desc: 'Access an audited directory of over 10,000+ verified exporters and CIS wholesale buyers with transparent credit ratings and trade histories.',
      color: 'bg-blue-50 text-blue-800 border-blue-200',
      highlight: '10,000+ Audited Companies'
    },
    {
      icon: Truck,
      title: 'End-to-End Logistics & Customs',
      desc: 'Complete overland TIR truck freight, railway container transit, sea-port clearance, and border customs paperwork handled by in-house specialists.',
      color: 'bg-amber-50 text-amber-800 border-amber-200',
      highlight: 'Karachi–Almaty Multimodal Corridor'
    },
    {
      icon: PackageCheck,
      title: 'Quality Assurance & Warehousing',
      desc: 'Pre-shipment inspection services and temperature-controlled bonded warehousing in Karachi, Tashkent, Almaty, and Moscow.',
      color: 'bg-indigo-50 text-indigo-800 border-indigo-200',
      highlight: 'SGS / ISO Pre-shipment Audit'
    },
    {
      icon: Sparkles,
      title: 'AI-Powered Sourcing Assistance',
      desc: 'Proprietary machine learning algorithms match buyer RFQs with ideal Pakistani manufacturers based on production capacity and pricing.',
      color: 'bg-purple-50 text-purple-800 border-purple-200',
      highlight: 'Smart Instant RFQ Matching'
    },
    {
      icon: CreditCard,
      title: 'PakCisTrade Plus Trade Financing',
      desc: 'Exclusive membership program offering up to Rs 5 Million (PKR 5,000,000) instant working capital credit lines for eligible exporters.',
      color: 'bg-orange-50 text-[#FF6B00] border-orange-200',
      highlight: 'Up to Rs 5M Instant Credit Line'
    },
    {
      icon: Zap,
      title: 'Priority RFQ Matching',
      desc: 'Buyer purchase inquiries are routed 2x faster to premium member manufacturers to lock in early buyer contracts.',
      color: 'bg-rose-50 text-rose-800 border-rose-200',
      highlight: '2x Faster Contract Closures'
    },
    {
      icon: Percent,
      title: 'Freight & Shipping Discounts',
      desc: 'Enjoy up to 30% discounted shipping and container freight rates through aggregated TOP GROUP logistics volume commitments.',
      color: 'bg-teal-50 text-teal-800 border-teal-200',
      highlight: 'Up to 30% Freight Savings'
    },
    {
      icon: ShieldCheck,
      title: 'Verified Exporter Program',
      desc: 'Bulk product catalog listing tools, golden trust badge verification, and dedicated international trade show booth representation.',
      color: 'bg-cyan-50 text-cyan-800 border-cyan-200',
      highlight: 'Golden Badge Certification'
    },
    {
      icon: Headphones,
      title: '24/7 Multilingual Support',
      desc: 'Dedicated trade desks staffed with native speakers in Urdu, English, Russian, and Uzbek available around the clock.',
      color: 'bg-slate-100 text-slate-800 border-slate-200',
      highlight: 'Urdu, Russian, Uzbek & English'
    }
  ];

  // Trade Corridors data
  const tradeCorridors = [
    {
      name: 'Pakistan – Iran Overland Corridor',
      route: 'Karachi / Quetta ➔ Taftan ➔ Mirjaveh ➔ Tehran ➔ Caspian Sea',
      type: 'TIR Road & Rail Freight',
      transitTime: '6 – 8 Days',
      status: 'Active Daily Dispatch'
    },
    {
      name: 'Pakistan – China (CPEC) Highway Route',
      route: 'Sost Dry Port ➔ Khunjerab Pass ➔ Kashgar Hub ➔ Central Asia',
      type: 'High-Altitude Overland Transit',
      transitTime: '5 – 7 Days',
      status: 'Seasonal / All-Weather Convoys'
    },
    {
      name: 'Afghanistan Tri-Border Transit',
      route: 'Peshawar (Torkham) & Chaman ➔ Kabul / Herat ➔ Termez (Uzbekistan)',
      type: 'Overland Rail & Heavy Duty Trucking',
      transitTime: '4 – 6 Days',
      status: 'Fast-Track Escrow Protected'
    },
    {
      name: 'Pakistan – Central Asia Direct Corridor',
      route: 'Karachi ➔ Uzbekistan (Tashkent) ➔ Kazakhstan (Almaty Hub)',
      type: 'Multimodal Road & Rail Corridor',
      transitTime: '7 – 9 Days',
      status: 'Primary PakCisTrade Spine'
    },
    {
      name: 'Pakistan – Azerbaijan Line',
      route: 'Gwadar / Karachi ➔ Bandar Abbas ➔ Baku Dry Port',
      type: 'Caspian Sea Feeder & Rail',
      transitTime: '8 – 10 Days',
      status: 'Expanded 2026 Route'
    },
    {
      name: 'Pakistan – Russia Caspian Route',
      route: 'Karachi ➔ Caspian Sea Ports (Astrakhan / Makhachkala) ➔ Moscow',
      type: 'Caspian Sea-Rail Logistics',
      transitTime: '10 – 12 Days',
      status: 'High Volume Freight Line'
    },
    {
      name: 'INSTC (North-South Corridor)',
      route: 'Indian Ocean / Arabian Sea ➔ Iran ➔ Russia ➔ Northern Europe',
      type: 'International Transit Corridor',
      transitTime: '12 – 14 Days',
      status: 'Strategic Global Line'
    },
    {
      name: 'CAREC Regional Corridors',
      route: 'Central Asia Regional Economic Cooperation Multimodal Grid',
      type: 'Inter-State Highway Network',
      transitTime: '3 – 5 Days Intra-CIS',
      status: 'Customs Pre-Cleared'
    }
  ];

  return (
    <div className="pt-20 pb-20 bg-[#FFF6EE] min-h-screen text-slate-900">
      
      {/* 1. HERO SECTION WITH IMAGE BACKGROUND */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-slate-950 text-white">
        
        {/* Background Image with Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={pakcisImage}
            alt="PakCisTrade Eurasia Logistics"
            className="w-full h-full object-cover object-center opacity-40 scale-105 animate-pulse-subtle"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950/50" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-[#1B365D]/70 to-slate-950/90" />
        </div>

        {/* Hero Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10 text-center flex flex-col items-center">
          
          {/* Top Badge */}
          <motion.div 
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-400/30 text-emerald-400 text-xs font-extrabold uppercase tracking-widest mb-6 shadow-lg backdrop-blur-md"
          >
            <Globe className="w-4 h-4 text-emerald-400" />
            <span>PAKISTAN–CIS B2B TRADE CORRIDOR • LAUNCHED 2026</span>
          </motion.div>

          {/* Heading */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-heading text-white max-w-5xl leading-tight tracking-tight mb-6"
          >
            PakCisTrade: Connecting Pakistani Exporters to <span className="text-[#FF6B00]">Eurasian Markets</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg sm:text-xl text-slate-300 max-w-3xl font-medium leading-relaxed mb-10"
          >
            The dedicated B2B trade marketplace bridging Pakistan with Russia, Kazakhstan, Uzbekistan, and Central Asia. Complete end-to-end escrow payments, customs clearing, and multimodal transit handled directly by TOP GROUP.
          </motion.p>

          {/* Hero Action Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md mb-12"
          >
            <a
              href="https://www.pakcistrade.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-[#FF6B00] hover:bg-[#e05e00] text-white font-extrabold text-sm shadow-xl hover:shadow-orange-500/30 transition-all cursor-pointer flex items-center justify-center gap-2 group"
            >
              <span>Visit Site</span>
              <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </motion.div>

          {/* Dual Headquarters Info Pill */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-300 font-bold bg-white/5 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/10">
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#FF6B00]" /> Karachi Hub: Port Qasim Trade Zone, Pakistan
            </span>
            <span className="hidden sm:inline text-slate-600">•</span>
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-emerald-400" /> Almaty Hub: Central Asia Trade Center, Kazakhstan
            </span>
          </div>

        </div>

        {/* Bottom Gradient Wave */}
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#FFF6EE] to-transparent pointer-events-none" />
      </section>

      {/* 2. RUNNING STATS TICKER SECTION */}
      <section className="py-12 bg-white relative z-20 border-b border-slate-200/80 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 text-center">
            
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1">
              <div className="text-3xl sm:text-4xl font-extrabold text-[#1B365D] font-heading">
                <AnimatedStatNumber end={11} suffix=" CIS" duration={1000} />
              </div>
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Countries Covered</div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1">
              <div className="text-3xl sm:text-4xl font-extrabold text-[#FF6B00] font-heading">
                <AnimatedStatNumber end={10000} suffix="+" duration={1300} />
              </div>
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Verified Exporters</div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1">
              <div className="text-3xl sm:text-4xl font-extrabold text-[#1B365D] font-heading">
                <AnimatedStatNumber end={700} prefix="$" suffix="B+" duration={1400} />
              </div>
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">2030 Corridor Potential</div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1">
              <div className="text-3xl sm:text-4xl font-extrabold text-emerald-600 font-heading">
                <AnimatedStatNumber end={580} suffix="M+" duration={1200} />
              </div>
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Regional Population</div>
            </div>

            <div className="col-span-2 lg:col-span-1 p-4 rounded-2xl bg-orange-50 border border-orange-200 space-y-1">
              <div className="text-2xl sm:text-3xl font-extrabold text-[#FF6B00] font-heading">
                Rs <AnimatedStatNumber end={5} suffix="M" duration={800} />
              </div>
              <div className="text-xs font-bold text-[#FF6B00] uppercase tracking-wider">PakCis Plus Credit Line</div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. MAIN PURPOSE & WHAT IS PAKCISTRADE */}
      <section className="py-20 bg-[#FFF6EE] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-block text-xs font-extrabold text-[#FF6B00] uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 shadow-xs">
                PURPOSE & VISION
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-heading leading-tight">
                What is <span className="text-[#1B365D]">PakCisTrade</span>?
              </h2>

              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-medium">
                <strong>PakCisTrade</strong> is a specialized B2B trade marketplace and cross-border logistics engine created explicitly for the <strong>Pakistan–CIS Trade Corridor</strong>. Launched in <strong>2026</strong> under the TOP GROUP umbrella, PakCisTrade connects Pakistani exporters and manufacturers directly with wholesale buyers in Russia, Kazakhstan, Uzbekistan, Azerbaijan, and neighboring Central Asian markets.
              </p>

              <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-md space-y-4">
                <h3 className="text-base font-bold text-slate-900 font-heading flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-[#FF6B00]" />
                  Solving Cross-Border Trade Friction
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Unlike generic international marketplaces where buyers and sellers struggle with payment safety and customs delays, PakCisTrade operates an <strong>end-to-end integrated platform</strong>. We handle seller verification, escrow payment security, customs clearing, and overland transport, backed by operational headquarters in <strong>Karachi, Pakistan</strong> and <strong>Almaty, Kazakhstan</strong>.
                </p>
              </div>

              {/* Key Highlights Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/80 border border-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold text-slate-900">Direct Factory Sourcing</div>
                    <div className="text-[11px] text-slate-500">Eliminating unnecessary middlemen margins</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/80 border border-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold text-slate-900">Overland Transit Speed</div>
                    <div className="text-[11px] text-slate-500">TIR truck routes in 4–8 days transit time</div>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Interactive Visual Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 text-white p-8 space-y-6">
                
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#FF6B00] text-white font-black flex items-center justify-center text-sm shadow-md">
                      PCT
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">PakCisTrade Gateway</div>
                      <div className="text-xs text-slate-400">Official B2B Hub 2026</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-extrabold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/30">
                    LIVE OPERATIONAL
                  </span>
                </div>

                <div className="space-y-4 text-xs text-slate-300">
                  <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700 flex items-center justify-between">
                    <span>Target Population</span>
                    <strong className="text-white font-bold">580 Million+ CIS Citizens</strong>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700 flex items-center justify-between">
                    <span>Target Trade Potential</span>
                    <strong className="text-[#FF6B00] font-bold">$700 Billion+ (2030)</strong>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700 flex items-center justify-between">
                    <span>Karachi HQ</span>
                    <strong className="text-white font-bold">Port Qasim Export Office</strong>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700 flex items-center justify-between">
                    <span>Almaty HQ</span>
                    <strong className="text-white font-bold">Central Asia Trade Hub</strong>
                  </div>
                </div>

                <a
                  href="https://www.pakcistrade.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 rounded-xl bg-[#FF6B00] hover:bg-[#e05e00] text-white font-bold text-xs shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>Visit Site</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. VALUE PROPOSITION & ESCROW PROTECTION (FAIDA) */}
      <section className="py-20 bg-white relative border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center">
            <span className="inline-block text-xs font-extrabold text-[#FF6B00] uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 mb-4 shadow-xs">
              THE PAKCISTRADE ADVANTAGE (FAIDA)
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading mb-4">
              Escrow Security & Fraud-Free Trade
            </h2>
            <p className="text-base text-slate-600 font-medium">
              Cross-border commerce between Pakistan and Central Asia historically involved payment risks and customs uncertainty. PakCisTrade eliminates all friction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Card 1 */}
            <div className="p-6 rounded-2xl bg-[#FFF6EE] border border-orange-200/80 shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 space-y-4 flex flex-col justify-between group">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-[#FF6B00] text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                  <Lock className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 font-heading">
                  Escrow Payment Protection
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  Buyer funds are locked safely in escrow and only released to the exporter once the buyer confirms delivery and port clearance, guaranteeing complete trust.
                </p>
              </div>
              <div className="text-[11px] font-bold text-[#FF6B00] flex items-center gap-1 pt-2">
                <span>100% Guaranteed Release</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Card 2 */}
            <div className="p-6 rounded-2xl bg-blue-50/50 border border-blue-200/80 shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 space-y-4 flex flex-col justify-between group">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-[#1B365D] text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                  <BadgeCheck className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 font-heading">
                  Audited & Verified Businesses
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  Every Pakistani manufacturer and CIS buyer undergoes strict physical factory audits, tax registration checks, and trade background vetting.
                </p>
              </div>
              <div className="text-[11px] font-bold text-[#1B365D] flex items-center gap-1 pt-2">
                <span>10,000+ Vetted Profiles</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Card 3 */}
            <div className="p-6 rounded-2xl bg-emerald-50/50 border border-emerald-200/80 shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 space-y-4 flex flex-col justify-between group">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                  <Truck className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 font-heading">
                  Real-Time Shipment Telematics
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  Track container trucks live across border posts from Karachi through Kabul, Tashkent, to Almaty with automated customs status alerts.
                </p>
              </div>
              <div className="text-[11px] font-bold text-emerald-700 flex items-center gap-1 pt-2">
                <span>GPS & Customs Status</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Card 4 */}
            <div className="p-6 rounded-2xl bg-purple-50/50 border border-purple-200/80 shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 space-y-4 flex flex-col justify-between group">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-purple-800 text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                  <ShieldAlert className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 font-heading">
                  Fraud Risk Mitigation
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  Built-in dispute arbitration desks, quality pre-inspection reports, and trade credit insurance eliminate non-delivery and counterfeit risks.
                </p>
              </div>
              <div className="text-[11px] font-bold text-purple-800 flex items-center gap-1 pt-2">
                <span>Zero Non-Payment Risk</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 5. SERVICES PROVIDED SECTION (10 KEY SERVICES) */}
      <section className="py-20 bg-[#FFF8F2] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center">
            <span className="inline-block text-xs font-extrabold text-[#FF6B00] uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 mb-4 shadow-xs">
              FULL SUITE OF SERVICES
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading mb-4">
              Comprehensive B2B Ecosystem Services
            </h2>
            <p className="text-base text-slate-600 font-medium">
              From instant financing to AI matching and bulk catalog tools, everything required for international trade growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesList.map((service, idx) => {
              const IconComp = service.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between space-y-4 group"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className={`p-3 rounded-xl border ${service.color} shrink-0`}>
                        <IconComp className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-md bg-slate-100 text-slate-700">
                        Service 0{idx + 1}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-slate-900 font-heading group-hover:text-[#1B365D] transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed font-medium">
                      {service.desc}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] font-bold text-[#FF6B00]">
                      {service.highlight}
                    </span>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#FF6B00] group-hover:translate-x-1 transition-all" />
                  </div>
                </motion.div>
              );
            })}
          </div>



        </div>
      </section>



      {/* 8. FREQUENTLY ASKED QUESTIONS */}
      <section className="py-20 bg-white relative border-t border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12 flex flex-col items-center">
            <span className="inline-block text-xs font-extrabold text-[#FF6B00] uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 mb-4 shadow-xs">
              QUESTIONS & ANSWERS
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 font-heading mb-3">
              PakCisTrade Frequently Asked Questions
            </h2>
            <p className="text-sm text-slate-600 font-medium">
              Everything you need to know about registering as an exporter or buyer.
            </p>
          </div>

          <div className="space-y-4">
            
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
              <h3 className="text-base font-bold text-slate-900 font-heading flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-[#FF6B00]" />
                How does escrow payment protection work on PakCisTrade?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-6">
                When a CIS buyer places an order, their payment is held securely in an authorized escrow account. Funds are released to the Pakistani exporter only after the buyer confirms pre-agreed port delivery and SGS inspection compliance.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
              <h3 className="text-base font-bold text-slate-900 font-heading flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-[#FF6B00]" />
                Who handles customs clearance and TIR transit documentation?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-6">
                PakCisTrade logistics teams manage complete end-to-end customs declarations at Karachi ports, border points (Taftan, Torkham, Khunjerab), and CIS destination dry ports in Tashkent and Almaty.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
              <h3 className="text-base font-bold text-slate-900 font-heading flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-[#FF6B00]" />
                How do I qualify for the PakCisTrade Plus Rs 5M financing line?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-6">
                Registered Pakistani manufacturers with an active tax status (FBR) and at least 6 months of trade history on PakCisTrade can apply for instant trade working capital credit lines up to PKR 5,000,000.
              </p>
            </div>

          </div>

        </div>
      </section>



      {/* B2B RFQ MODAL */}
      <AnimatePresence>
        {rfqModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-3xl max-w-lg w-full p-8 shadow-2xl border border-slate-200 relative my-8"
            >
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-[#FF6B00] text-white font-black flex items-center justify-center text-xs">
                    PCT
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 font-heading">PakCisTrade B2B Portal</h3>
                </div>
                <button
                  onClick={() => {
                    setRfqModalOpen(false);
                    setRfqSubmitted(false);
                  }}
                  className="text-slate-400 hover:text-slate-600 font-bold"
                >
                  ✕
                </button>
              </div>

              {rfqSubmitted ? (
                <div className="py-8 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 font-heading">RFQ Request Submitted!</h4>
                  <p className="text-xs text-slate-600">
                    A PakCisTrade account officer in Karachi / Almaty will contact you within 2 hours to process your RFQ and verify escrow details.
                  </p>
                  <button
                    onClick={() => {
                      setRfqModalOpen(false);
                      setRfqSubmitted(false);
                    }}
                    className="px-6 py-2.5 rounded-xl bg-[#1B365D] text-white font-bold text-xs"
                  >
                    Close Window
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setRfqSubmitted(true);
                  }}
                  className="pt-6 space-y-4"
                >
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Company / Factory Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sialkot Surgical & Sports Ltd."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-[#FF6B00]"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Work Email</label>
                      <input
                        type="email"
                        required
                        placeholder="export@company.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-[#FF6B00]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">WhatsApp / Phone</label>
                      <input
                        type="tel"
                        required
                        placeholder="+92 300 1234567"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-[#FF6B00]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Product Sector</label>
                    <select className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-[#FF6B00]">
                      <option>Hand Embroidery & Textiles</option>
                      <option>Denim & Leather Apparel</option>
                      <option>Surgical & Sports Goods</option>
                      <option>School & Stationery</option>
                      <option>Spices & Basmati Rice</option>
                      <option>Electronics & Appliances</option>
                      <option>Other Export Goods</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Trade Inquiry Details</label>
                    <textarea
                      rows={3}
                      placeholder="Mention expected shipment volume, target CIS country, or escrow inquiry..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-[#FF6B00]"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-[#FF6B00] hover:bg-[#e05e00] text-white font-bold text-xs shadow-lg transition-all cursor-pointer"
                  >
                    Submit B2B Inquiry Now
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* VIDEO MODAL */}
      <AnimatePresence>
        {videoModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-slate-900 rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl border border-slate-800 relative"
            >
              <div className="flex items-center justify-between p-4 bg-slate-950 text-white">
                <span className="text-xs font-bold">PakCisTrade Eurasian Corridor Operations</span>
                <button
                  onClick={() => setVideoModalOpen(false)}
                  className="p-1 rounded-full bg-slate-800 text-slate-300 hover:text-white"
                >
                  ✕
                </button>
              </div>
              <div className="relative aspect-video bg-black">
                <video
                  src={pakcisVideo}
                  controls
                  autoPlay
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
};
