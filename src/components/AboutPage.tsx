import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useInView } from 'motion/react';
import { 
  Building2, Globe, ArrowRight, Play, CheckCircle2, Award, ShieldCheck, 
  Users, TrendingUp, Cpu, Compass, Target, Zap, Leaf, Layers, ChevronDown, 
  ExternalLink, Linkedin, Mail, MapPin, Calendar, HeartHandshake, FileText,
  Ship, Plane, Factory, Briefcase, ChevronRight, MessageSquare, HelpCircle, Star, Share2,
  Eye, Rocket, Gem, Twitter, Facebook, Instagram
} from 'lucide-react';
import { COMPANIES } from '../data/mockData';
import { Company } from '../types';
import { BrandLogo } from './BrandLogo';

// Animated CountUp Number Component
const AnimatedCounter: React.FC<{ value: string }> = ({ value }) => {
  const [current, setCurrent] = useState<number>(0);
  const containerRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(containerRef, { once: false, margin: "-20px" });

  const isDollar = value.includes('$');
  const hasPlus = value.includes('+');
  const cleanVal = value.replace('$', '').replace('+', '').replace(/,/g, '');
  
  let target = 0;
  let suffix = hasPlus ? '+' : '';
  let prefix = isDollar ? '$' : '';
  let isFloat = false;

  if (cleanVal.endsWith('B')) {
    target = parseFloat(cleanVal.replace('B', ''));
    suffix = 'B' + suffix;
    isFloat = true;
  } else {
    target = parseFloat(cleanVal);
  }

  useEffect(() => {
    if (!isInView) {
      setCurrent(0);
      return;
    }

    const duration = 1600; // ms
    const startTime = performance.now();

    const updateCount = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      
      setCurrent(easeProgress * target);

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      }
    };

    const animId = requestAnimationFrame(updateCount);
    return () => cancelAnimationFrame(animId);
  }, [isInView, target]);

  const formatted = isFloat 
    ? current.toFixed(1) 
    : Math.floor(current).toLocaleString();

  return (
    <span ref={containerRef}>
      {prefix}{formatted}{suffix}
    </span>
  );
};

interface AboutPageProps {
  onBackToHome: () => void;
  onOpenContact: () => void;
  onOpenVideo: () => void;
  onSelectCompany: (companyId: string) => void;
}

// Sub-component for Ecosystem Cards with Video Hover
const AboutCompanyCard: React.FC<{ comp: Company; onSelectCompany: (id: string) => void }> = ({ comp, onSelectCompany }) => {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      whileHover={{ y: -6 }}
      onClick={() => onSelectCompany(comp.id)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group relative rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-2xl hover:border-[#FF6B00]/60 hover:shadow-[0_10px_30px_rgba(255,107,0,0.15)] transition-all duration-300 overflow-hidden cursor-pointer flex flex-col justify-between"
    >
      <div>
        {/* Cover Image & Video preview */}
        <div className="relative aspect-[16/9] overflow-hidden bg-slate-950">
          <img 
            src={comp.coverImage} 
            alt={comp.name}
            className={`w-full h-full object-cover transition-all duration-500 ${
              isHovered ? 'opacity-0 scale-105' : 'opacity-90 group-hover:scale-100'
            }`}
          />
          {comp.videoUrl && (
            <video
              ref={videoRef}
              src={comp.videoUrl}
              muted
              loop
              playsInline
              preload="auto"
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                isHovered ? 'opacity-100 z-10' : 'opacity-0 pointer-events-none'
              }`}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none z-20" />
        </div>

        {/* Content */}
        <div className="p-6 space-y-3">
          <div className="flex items-center gap-3">
            <BrandLogo id={comp.slug} size="md" />
            <h3 className="text-xl font-extrabold text-slate-900 font-heading group-hover:text-[#FF6B00] transition-colors">
              {comp.name}
            </h3>
          </div>
          <p className="text-sm text-slate-600 line-clamp-3 leading-relaxed">
            {comp.description}
          </p>
        </div>
      </div>

      <div className="px-6 pb-6 pt-2">
        <div className="relative overflow-hidden w-full py-2.5 rounded-xl bg-slate-100 border border-slate-200/80 group-hover:border-[#FF6B00] group-hover:shadow-[0_0_15px_rgba(255,107,0,0.45)] text-xs font-bold text-slate-700 flex items-center justify-center gap-2 transition-all duration-300">
          {/* Left to right expanding blue color fill on hover */}
          <span className="absolute inset-0 bg-[#1B365D] -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out origin-left pointer-events-none" />
          
          <span className="relative z-10 group-hover:text-white transition-colors duration-300">View Division Details</span>
          <ArrowRight className="relative z-10 w-4 h-4 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
        </div>
      </div>
    </motion.div>
  );
};

export const AboutPage: React.FC<AboutPageProps> = ({
  onBackToHome,
  onOpenContact,
  onOpenVideo,
  onSelectCompany,
}) => {
  const [activeTab, setActiveTab] = useState<string>('All');
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [activeStoryMilestone, setActiveStoryMilestone] = useState<number>(0);
  const [leadershipPage, setLeadershipPage] = useState<number>(0);

  // 3. Story Milestones
  const milestones = [
    { year: '2012', title: 'Foundation & Industrial Manufacturing', desc: 'Established Artel Electronics as part of the ecosystem, building state-of-the-art manufacturing plants in Central Asia.', icon: Factory },
    { year: '2015', title: 'Aviation & Strategic Air Freight', desc: 'Launched Premier Smart Aviation (PSA) to facilitate high-priority executive air travel and global charter operations.', icon: Plane },
    { year: '2016', title: 'B2B Trade Corridor Expansion', desc: 'Founded PakCIS Logistics, pioneering direct trade corridors connecting CIS nations with Asian & Middle Eastern ports.', icon: Ship },
    { year: '2018', title: 'Corporate Tourism & Hospitality', desc: 'Expanded into luxury corporate travel and international trade delegations through Silk Road Tourism.', icon: Briefcase },
    { year: '2019', title: 'Culinary & Retail Enterprise', desc: 'Launched Charco, scaling international casual dining, premium food distribution, and franchise networks.', icon: Star },
    { year: '2020', title: 'Financial Technology & Capital Advisory', desc: 'Incorporated FEI (Financial Advisory & FinTech) for cross-border trade settlements, corporate structuring, and venture capital.', icon: TrendingUp },
    { year: '2021', title: 'Enterprise Software & Agentic AI', desc: 'Founded Vades Technology to deliver next-generation AI platforms, custom software, and digital transformation.', icon: Cpu },
    { year: '2026+', title: 'Future Vision: Autonomous Ecosystem', desc: 'Pioneering AI-driven supply chains, renewable energy logistics, and sovereign enterprise incubators worldwide.', icon: Globe }
  ];

  // 5. What We Do Capabilities
  const capabilitiesList = [
    { title: 'Global Trade & Logistics', desc: 'Direct multi-modal corridors connecting CIS, Middle East, Asia, and European maritime networks.', icon: Ship },
    { title: 'Enterprise Technology & AI', desc: 'Custom enterprise software, agentic AI agents, cloud architecture, and cybersecurity.', icon: Cpu },
    { title: 'B2B Financial Advisory', desc: 'Cross-border trade settlements, capital structuring, risk mitigation, and venture investments.', icon: TrendingUp },
    { title: 'Healthcare & Science', desc: 'International medical equipment distribution, clinical lab diagnostic networks, and biotechnology.', icon: HeartHandshake },
    { title: 'Industrial Manufacturing', desc: 'Smart consumer electronics, heavy appliance manufacturing, and OEM assembly.', icon: Factory },
    { title: 'Executive Aviation & Travel', desc: 'Private jet charters, luxury corporate travel, and diplomatic delegation management.', icon: Plane },
    { title: 'Higher Education & Skills', desc: 'Global university partnerships, vocational training centers, and corporate leadership academies.', icon: Award },
    { title: 'Digital Media & Marketing', desc: 'Omnichannel brand management, public relations, and executive communications.', icon: Share2 },
    { title: 'Hospitality & Retail', desc: 'International restaurant chains, premium hospitality management, and commercial food distribution.', icon: Star },
    { title: 'Supply Chain Optimization', desc: 'End-to-end automated warehousing, inventory tracking, and customs compliance.', icon: Layers },
    { title: 'Corporate Structuring', desc: 'M&A advisory, cross-border corporate registration, and regulatory compliance.', icon: ShieldCheck },
    { title: 'Strategic Partnerships', desc: 'Joint venture incubation, sovereign fund alignment, and international trade summits.', icon: Users }
  ];

  // 7. Why Top Group Reasons
  const whyReasons = [
    { title: 'Global Integrated Network', desc: 'Direct presence across Tashkent, Dubai, London, Istanbul, Singapore, and Munich.', icon: Globe },
    { title: 'Cross-Industry Synergy', desc: 'Unifying trade, tech, finance, and logistics into a single cohesive ecosystem.', icon: Layers },
    { title: 'Proven Execution Track Record', desc: 'Over 25 years of combined leadership scaling multi-million dollar B2B ventures.', icon: Award },
    { title: 'Sovereign & Diplomatic Trust', desc: 'Recognized partner for international trade delegations, ministries, and enterprise conglomerates.', icon: ShieldCheck },
    { title: 'Cutting-Edge AI Infrastructure', desc: 'Infusing agentic AI and cloud automation directly into traditional industrial operations.', icon: Cpu },
    { title: 'Uncompromising Quality & Ethics', desc: 'Adhering to strict international ESG standards, transparency, and corporate governance.', icon: CheckCircle2 }
  ];

  // 8. Core Values
  const coreValues = [
    { name: 'Integrity', desc: 'Unwavering commitment to ethical partnerships and corporate governance.', icon: ShieldCheck },
    { name: 'Innovation', desc: 'Continuously pioneering technological frontiers in trade and enterprise.', icon: Cpu },
    { name: 'Growth', desc: 'Dedicated to sustainable economic expansion for our partners and society.', icon: TrendingUp },
    { name: 'Transparency', desc: 'Open, clear, and institutional communication across all business tiers.', icon: Eye },
    { name: 'Leadership', desc: 'Setting global benchmarks in operational excellence and strategic foresight.', icon: Award },
    { name: 'Trust', desc: 'Earning long-term confidence from sovereign entities, clients, and investors.', icon: HeartHandshake },
    { name: 'Collaboration', desc: 'Uniting diverse industries and international teams towards shared success.', icon: Users },
    { name: 'Excellence', desc: 'Delivering world-class standards in every product, service, and shipment.', icon: Star }
  ];

  // 10. Leadership Profiles
  const leadership = [
    {
      name: 'Sherzod A. Karimov',
      role: 'Group Chairman & Founder',
      quote: 'We do not simply invest in businesses; we architect economic ecosystems that bridge continents and empower future generations.',
      bio: '25+ years of strategic leadership across Eurasian trade, industrial manufacturing, and cross-border financial advisory.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'Farrukh T. Rakhimov',
      role: 'Chief Executive Officer (CEO)',
      quote: 'Our growth is driven by ruthless operational discipline, technological adoption, and deep-rooted trust with global partners.',
      bio: 'Former McKinsey partner with extensive experience in scaling multinational supply chains and technology conglomerates.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'Elena V. Sidorova',
      role: 'Chief Operating Officer (COO)',
      quote: 'Seamless cross-border synergy requires precision execution, regulatory mastery, and relentless focus on human capital.',
      bio: 'Spearheads corporate strategy, international trade corridor operations, and group-wide compliance across 8 global hubs.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'Alexander M. Weber',
      role: 'Chief Financial Officer (CFO)',
      quote: 'Fiscal integrity and strategic capital allocation allow us to navigate complex global markets with confidence and speed.',
      bio: 'Over 20 years managing multi-billion dollar capital structures, sovereign wealth advisory, and international M&A.',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'Dilnoza K. Ahmedova',
      role: 'Chief Technology Officer (CTO)',
      quote: 'Infusing agentic AI and automated logistics into traditional enterprise unlocks unprecedented efficiency across trade corridors.',
      bio: 'Ex-Silicon Valley engineering director leading digital transformation, automated trade portals, and enterprise AI systems.',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'Marcus Vance',
      role: 'Managing Director & Global Operations Manager',
      quote: 'Our global network thrives on direct operational presence, local expertise, and an unyielding commitment to service excellence.',
      bio: 'Over 18 years directing cross-continental supply chains, aviation charter networks, and strategic B2B trade partnerships.',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80'
    }
  ];

  // 16. Corporate Responsibility (ESG)
  const esgItems = [
    { title: 'Green Logistics & Eco Transit', desc: 'Transitioning trade fleets to low-emission transit and optimizing shipping corridors.', icon: Leaf },
    { title: 'Community & Education Funds', desc: 'Supporting STEM scholarships, vocational training centers, and youth tech incubators.', icon: HeartHandshake },
    { title: 'Ethical Supply Chains', desc: 'Enforcing zero-tolerance labor policies and fair trade practices across all suppliers.', icon: ShieldCheck },
    { title: 'Economic Development', desc: 'Creating 3,000+ high-value employment opportunities across developing trade regions.', icon: TrendingUp }
  ];

  // 17. FAQs
  const faqs = [
    {
      q: 'What is TOP GROUP and how does the ecosystem function?',
      a: 'TOP GROUP is a diversified corporate holding company and enterprise ecosystem operating across global trade, technology, aviation, fintech, manufacturing, hospitality, and healthcare. Rather than functioning as a passive investment firm, we provide active strategic stewardship, shared technology, capital, and global network access to each sister company.'
    },
    {
      q: 'How can our company partner with TOP GROUP for global expansion?',
      a: 'We welcome joint ventures, trade partnerships, technology collaborations, and investment inquiries. You can initiate a consultation through our "Partner With Us" or "Contact Us" forms, where our executive team evaluates synergy and market opportunity.'
    },
    {
      q: 'In which countries does TOP GROUP have physical offices or operations?',
      a: 'Our executive headquarters are located in Tashkent and Dubai, with strategic corporate hubs and operating divisions in London, Istanbul, Munich, Singapore, Tashkent, and Dubai, connecting over 147 countries through trade and technology corridors.'
    },
    {
      q: 'What role does AI and technology play across TOP GROUP companies?',
      a: 'Technology is our core growth driver. Through Vades Technology and our group AI infrastructure, we integrate custom software, agentic AI automation, automated customs processing, and digital supply chain analytics directly into all traditional trade and manufacturing divisions.'
    }
  ];

  // Ecosystem Filtered list
  const filteredEcosystem = activeTab === 'All' 
    ? COMPANIES 
    : COMPANIES.filter(c => c.industry.toLowerCase().includes(activeTab.toLowerCase()));

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-[#FF6B00] selection:text-white font-sans antialiased w-full max-w-full overflow-x-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-28 pb-16 sm:pt-32 sm:pb-24 lg:pt-40 lg:pb-32 bg-slate-950 text-white overflow-hidden w-full max-w-full">
        {/* Background Image Layer - High Visibility */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50 pointer-events-none" 
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80')" }} 
        />

        {/* Subtle Dark Vignette for Readability (No Orange Circle / No Heavy Blue Glow) */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/40 to-slate-950/90 pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-15 pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-4 sm:space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-[10px] sm:text-xs font-bold text-[#FF6B00] uppercase tracking-wider sm:tracking-widest backdrop-blur-md max-w-full break-words">
              Global Corporate Holding & B2B Ecosystem
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight font-heading leading-[1.15] max-w-4xl mx-auto break-words">
              Building Businesses That <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B00] via-orange-400 to-amber-300">Shape Tomorrow</span>
            </h1>

            <p className="text-base sm:text-xl text-slate-200 leading-relaxed font-normal max-w-3xl mx-auto drop-shadow-sm px-2">
              TOP GROUP is a global business ecosystem driving innovation, international trade, strategic partnerships, and enterprise growth across industries and borders.
            </p>

            <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <button
                onClick={() => {
                  const elem = document.getElementById('about-ecosystem-section');
                  if (elem) elem.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full sm:w-auto px-6 sm:px-7 py-3.5 rounded-xl font-extrabold text-white bg-[#FF6B00] hover:bg-orange-600 shadow-xl shadow-orange-500/25 flex items-center justify-center gap-2 transition-all hover:scale-105 cursor-pointer text-sm"
              >
                <span>Explore Our Ecosystem</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenContact}
                className="w-full sm:w-auto px-6 sm:px-7 py-3.5 rounded-xl font-bold text-white bg-slate-900/90 hover:bg-slate-800 border border-slate-700 backdrop-blur-md flex items-center justify-center gap-2 transition-all cursor-pointer text-sm"
              >
                <span>Partner With Us</span>
              </button>
            </div>

            {/* Floating Metrics Bar */}
            <div className="pt-8 sm:pt-10 mt-6 sm:mt-8 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white font-heading"><AnimatedCounter value="25+" /></div>
                <div className="text-xs text-slate-300 mt-1 font-medium">Years Combined Leadership</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#FF6B00] font-heading"><AnimatedCounter value="2,000+" /></div>
                <div className="text-xs text-slate-300 mt-1 font-medium">Global Enterprise Partners</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white font-heading"><AnimatedCounter value="147+" /></div>
                <div className="text-xs text-slate-300 mt-1 font-medium">Countries Connected</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. WHO WE ARE */}
      <section className="py-16 sm:py-24 bg-white relative border-b border-slate-100 overflow-hidden w-full max-w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Executive Image Left */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="lg:col-span-5"
            >
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-slate-100 p-2 group">
                <div className="rounded-xl sm:rounded-2xl overflow-hidden relative">
                  <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80" 
                    alt="TOP GROUP Boardroom and Executive Strategy"
                    className="w-full h-[280px] sm:h-[480px] object-cover scale-105 group-hover:scale-100 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
                </div>
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 p-3.5 sm:p-5 rounded-xl sm:rounded-2xl bg-slate-900/90 text-white backdrop-blur-md border border-slate-800 shadow-lg">
                  <div className="text-[10px] sm:text-xs font-bold text-[#FF6B00] uppercase tracking-wider mb-1">Diversified Holding Ecosystem</div>
                  <div className="text-xs sm:text-sm font-semibold text-slate-200">
                    "Uniting technology, trade corridors, and financial innovation under one global roof."
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Content Right */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="lg:col-span-7 space-y-4 sm:space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-xs font-bold text-[#FF6B00] uppercase tracking-widest">
                Who We Are
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading tracking-tight leading-tight">
                A Diversified Corporate Holding & B2B Growth Engine
              </h2>

              <p className="text-base text-slate-600 leading-relaxed">
                TOP GROUP is a diversified corporate holding company dedicated to building sustainable businesses, enabling international trade, and delivering future-ready enterprise solutions.
              </p>

              <p className="text-base text-slate-600 leading-relaxed">
                Rather than operating as a single organization, we unite multiple businesses under one ecosystem, empowering them with strategy, technology, investment, operational excellence, and global market access.
              </p>

              {/* Mission / Vision / Purpose Cards with Hover Border and Glow Shadow */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2 hover:border-[#FF6B00] hover:shadow-xl hover:shadow-orange-500/10 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                  <div className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center text-[#FF6B00]">
                    <Target className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 font-heading">Our Mission</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">To build and scale market-leading enterprises through global trade corridors and technological innovation.</p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2 hover:border-[#FF6B00] hover:shadow-xl hover:shadow-orange-500/10 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center text-[#1B365D]">
                    <Compass className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 font-heading">Our Vision</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">To become the premier Eurasian-global business ecosystem connecting markets and industries.</p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2 hover:border-[#FF6B00] hover:shadow-xl hover:shadow-orange-500/10 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-600">
                    <HeartHandshake className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 font-heading">Our Purpose</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">To create long-term economic value, sustainable jobs, and seamless B2B partnerships worldwide.</p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 3. OUR STORY & COMPANY PILLARS */}
      <section className="py-16 sm:py-24 bg-white text-slate-900 relative overflow-hidden border-y border-slate-200 w-full max-w-full">
        {/* Subtle Decorative Background Gradients */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 flex flex-col items-center gap-3 sm:gap-5">
            <span className="inline-block px-3.5 sm:px-4 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-xs font-extrabold text-[#FF6B00] uppercase tracking-widest shadow-sm">
              Our Journey & Core Pillars
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-heading tracking-tight">
              Building Legacy Through Decades of Growth
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Discover how TOP GROUP evolved into a multi-sector global corporate holding company powering international trade, industrial manufacturing, technology, and strategic investment.
            </p>
          </div>

          {/* Company Cards with Vertical Fade Entrance Animations */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            
            {/* Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="rounded-2xl sm:rounded-3xl bg-slate-50/80 border border-slate-200 overflow-hidden shadow-lg hover:shadow-2xl hover:border-orange-500/40 transition-all duration-500 flex flex-col justify-between group"
            >
              <div>
                <div className="relative aspect-[16/9] overflow-hidden bg-slate-900">
                  <img 
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=80" 
                    alt="Industrial Manufacturing & Electronics" 
                    className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700 ease-out opacity-95"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                </div>

                <div className="p-5 sm:p-7 space-y-3 sm:space-y-4">
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-heading group-hover:text-[#FF6B00] transition-colors">
                    Industrial Manufacturing & Electronics
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    Starting with state-of-the-art consumer electronics manufacturing plants in Central Asia, TOP GROUP built an industrial backbone delivering smart home appliances, HVAC technology, and heavy industrial products worldwide.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
              className="rounded-2xl sm:rounded-3xl bg-slate-50/80 border border-slate-200 overflow-hidden shadow-lg hover:shadow-2xl hover:border-orange-500/40 transition-all duration-500 flex flex-col justify-between group"
            >
              <div>
                <div className="relative aspect-[16/9] overflow-hidden bg-slate-900">
                  <img 
                    src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1000&q=80" 
                    alt="Global Trade Corridors & Aviation" 
                    className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700 ease-out opacity-95"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                </div>

                <div className="p-5 sm:p-7 space-y-3 sm:space-y-4">
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-heading group-hover:text-[#FF6B00] transition-colors">
                    Global Trade Corridors & Aviation
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    Pioneering direct air freight, maritime shipping, and multi-modal logistics, our aviation and trade divisions connect Eurasia, the Middle East, and Europe through seamless customs processing and express transport.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
              className="rounded-2xl sm:rounded-3xl bg-slate-50/80 border border-slate-200 overflow-hidden shadow-lg hover:shadow-2xl hover:border-orange-500/40 transition-all duration-500 flex flex-col justify-between group"
            >
              <div>
                <div className="relative aspect-[16/9] overflow-hidden bg-slate-900">
                  <img 
                    src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=80" 
                    alt="Enterprise Tech & Agentic AI Solutions" 
                    className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700 ease-out opacity-95"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                </div>

                <div className="p-5 sm:p-7 space-y-3 sm:space-y-4">
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-heading group-hover:text-[#FF6B00] transition-colors">
                    Enterprise Tech & Agentic AI Solutions
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    Through Vades Technology, we develop proprietary software platforms, agentic AI engines, and enterprise cloud solutions that automate supply chains, financial trade settlement, and corporate workflows.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Card 4 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
              className="rounded-2xl sm:rounded-3xl bg-slate-50/80 border border-slate-200 overflow-hidden shadow-lg hover:shadow-2xl hover:border-orange-500/40 transition-all duration-500 flex flex-col justify-between group"
            >
              <div>
                <div className="relative aspect-[16/9] overflow-hidden bg-slate-900">
                  <img 
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80" 
                    alt="Financial Advisory & Strategic Capital" 
                    className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700 ease-out opacity-95"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                </div>

                <div className="p-5 sm:p-7 space-y-3 sm:space-y-4">
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-heading group-hover:text-[#FF6B00] transition-colors">
                    Financial Advisory & Strategic Capital
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    Our financial advisory and venture capital arms structure cross-border mergers, facilitate trade financing, manage currency liquidity, and incubate high-growth B2B startups across emerging markets.
                  </p>
                </div>
              </div>
            </motion.div>

          </div>

        </div>
      </section>

      {/* 4. GLOBAL IMPACT */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-amber-50/70 via-orange-50/50 to-slate-50 text-slate-900 relative border-y border-orange-200/80 overflow-hidden w-full max-w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            
            {/* Left Content Column */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="lg:col-span-6 space-y-6 flex flex-col justify-between"
            >
              <div>
                <span className="px-3.5 py-1.5 rounded-full bg-orange-100 border border-orange-200 text-xs font-bold text-[#FF6B00] uppercase tracking-widest shadow-sm">
                  Global Footprint & Trade Networks
                </span>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 font-heading mt-4">
                  Connecting Continental Trade Corridors Worldwide
                </h2>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mt-3">
                  TOP GROUP bridges markets between Central Asia, Europe, the Middle East, and Asia-Pacific. Our operational network covers over 147 countries through direct logistics hubs, trade delegations, and institutional partnerships.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:gap-4 pt-2">
                <div className="p-3.5 sm:p-5 rounded-2xl bg-white border border-orange-200/80 shadow-sm hover:shadow-md hover:border-[#FF6B00]/40 transition-all">
                  <div className="text-2xl sm:text-4xl font-extrabold text-[#FF6B00] font-heading">
                    <AnimatedCounter value="147+" />
                  </div>
                  <div className="text-[11px] sm:text-xs text-slate-600 mt-1 font-semibold">Countries Connected</div>
                </div>
                <div className="p-3.5 sm:p-5 rounded-2xl bg-white border border-orange-200/80 shadow-sm hover:shadow-md hover:border-[#FF6B00]/40 transition-all">
                  <div className="text-2xl sm:text-4xl font-extrabold text-slate-900 font-heading">
                    <AnimatedCounter value="10,000+" />
                  </div>
                  <div className="text-[11px] sm:text-xs text-slate-600 mt-1 font-semibold">B2B Clients & Cargoes</div>
                </div>
                <div className="p-3.5 sm:p-5 rounded-2xl bg-white border border-orange-200/80 shadow-sm hover:shadow-md hover:border-[#FF6B00]/40 transition-all">
                  <div className="text-2xl sm:text-4xl font-extrabold text-slate-900 font-heading">
                    <AnimatedCounter value="2,000+" />
                  </div>
                  <div className="text-[11px] sm:text-xs text-slate-600 mt-1 font-semibold">Institutional Partners</div>
                </div>
                <div className="p-3.5 sm:p-5 rounded-2xl bg-white border border-orange-200/80 shadow-sm hover:shadow-md hover:border-[#FF6B00]/40 transition-all">
                  <div className="text-2xl sm:text-4xl font-extrabold text-[#FF6B00] font-heading">
                    <AnimatedCounter value="$1.5B+" />
                  </div>
                  <div className="text-[11px] sm:text-xs text-slate-600 mt-1 font-semibold">Annual Trade Volume</div>
                </div>
              </div>
            </motion.div>

            {/* Right Image Column */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
              className="lg:col-span-6 flex flex-col h-full"
            >
              <div className="h-full min-h-[260px] sm:min-h-[420px] rounded-2xl sm:rounded-3xl overflow-hidden border border-orange-200/80 shadow-xl bg-slate-900 relative group">
                <img 
                  src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1000&q=80" 
                  alt="Global Trade Corridors & World Connections"
                  className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700 ease-out opacity-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent pointer-events-none" />
              </div>
            </motion.div>

          </div>

        </div>
      </section>

      {/* 5. WHAT WE DO / VISION & MISSION */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200/80 overflow-hidden w-full max-w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Main Title */}
          <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-heading tracking-tight leading-tight px-2">
              Driving growth for B2B companies<br className="hidden sm:inline" /> around the world
            </h2>
          </div>

          {/* 3 Columns Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 lg:gap-14">
            
            {/* Column 1: Vision */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex flex-col items-center text-center"
            >
              {/* Circular Badge Icon */}
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-slate-100 flex items-center justify-center group cursor-pointer">
                <div className="absolute -inset-1 rounded-full border-t-2 border-l-2 border-emerald-400/60 -rotate-45 pointer-events-none" />
                <Eye className="w-6 h-6 sm:w-8 sm:h-8 text-slate-500 stroke-[1.5] group-hover:scale-110 transition-transform duration-300" />
              </div>

              {/* Blue Divider Line with Center Node */}
              <div className="relative flex items-center justify-center my-5 sm:my-7 w-full max-w-[160px] sm:max-w-[200px]">
                <div className="w-full h-[2px] bg-[#3170B8]"></div>
                <div className="absolute w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full bg-[#3170B8] border-2 border-white shadow-sm"></div>
              </div>

              {/* Description */}
              <p className="text-slate-700 text-xs sm:text-base leading-relaxed text-center font-normal px-2">
                Our vision is to become a globally recognized business group that drives innovation, empowers enterprises, and creates lasting economic value across industries. We aim to build an ecosystem where businesses can grow without limitations, supported by strategic insight, advanced technology, and strong operational foundations.
              </p>
            </motion.div>

            {/* Column 2: Mission */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              className="flex flex-col items-center text-center"
            >
              {/* Circular Badge Icon */}
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-slate-100 flex items-center justify-center group cursor-pointer">
                <div className="absolute -inset-1 rounded-full border-t-2 border-r-2 border-sky-400/60 rotate-45 pointer-events-none" />
                <Rocket className="w-6 h-6 sm:w-8 sm:h-8 text-slate-500 stroke-[1.5] group-hover:scale-110 transition-transform duration-300" />
              </div>

              {/* Blue Divider Line with Center Node */}
              <div className="relative flex items-center justify-center my-5 sm:my-7 w-full max-w-[160px] sm:max-w-[200px]">
                <div className="w-full h-[2px] bg-[#3170B8]"></div>
                <div className="absolute w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full bg-[#3170B8] border-2 border-white shadow-sm"></div>
              </div>

              {/* Description */}
              <p className="text-slate-700 text-xs sm:text-base leading-relaxed text-center font-normal px-2">
                Our mission is to build, scale, and support businesses through integrated solutions that combine strategy, technology, and growth. We are committed to helping organizations launch efficiently, operate effectively, and expand sustainably in both local and global markets. By understanding each client’s unique challenges.
              </p>
            </motion.div>

            {/* Column 3: Impact */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              className="flex flex-col items-center text-center"
            >
              {/* Circular Badge Icon */}
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-slate-100 flex items-center justify-center group cursor-pointer">
                <div className="absolute -inset-1 rounded-full border-t-2 border-amber-400/60 pointer-events-none" />
                <Gem className="w-6 h-6 sm:w-8 sm:h-8 text-slate-500 stroke-[1.5] group-hover:scale-110 transition-transform duration-300" />
              </div>

              {/* Blue Divider Line with Center Node */}
              <div className="relative flex items-center justify-center my-5 sm:my-7 w-full max-w-[160px] sm:max-w-[200px]">
                <div className="w-full h-[2px] bg-[#3170B8]"></div>
                <div className="absolute w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full bg-[#3170B8] border-2 border-white shadow-sm"></div>
              </div>

              {/* Description */}
              <p className="text-slate-700 text-xs sm:text-base leading-relaxed text-center font-normal px-2">
                Our impact is defined by the success of businesses we support. Across industries we have enabled organizations to transform ideas into achieve measurable results. Through our ecosystem-driven approach, we provide the tools, expertise, and infrastructure required to drive efficiency, innovation, and expansion.
              </p>
            </motion.div>

          </div>

        </div>
      </section>

      {/* 6. OUR BUSINESS ECOSYSTEM */}
      <section id="about-ecosystem-section" className="py-16 sm:py-24 bg-gradient-to-br from-amber-50/60 via-orange-50/40 to-slate-50 border-y border-orange-200/60 overflow-hidden w-full max-w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-heading">
              Our Global Business Divisions & Subsidiaries
            </h2>
            <p className="text-base sm:text-xl text-slate-700 font-medium leading-relaxed mt-3 sm:mt-4 px-2">
              Hover over any division card to watch live video previews of our global operations and multi-industry enterprise footprint.
            </p>
          </div>

          {/* Company Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <AnimatePresence>
              {COMPANIES.slice(0, 6).map((comp) => (
                <AboutCompanyCard 
                  key={comp.id} 
                  comp={comp} 
                  onSelectCompany={onSelectCompany} 
                />
              ))}
            </AnimatePresence>
          </div>

        </div>
      </section>

      {/* 7. WHY TOP GROUP */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-orange-50/60 via-white to-orange-50/30 text-slate-900 relative border-b border-slate-200/80 overflow-hidden w-full max-w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
            <span className="px-3.5 py-1.5 rounded-full bg-orange-100 border border-orange-200 text-xs font-bold text-[#FF6B00] uppercase tracking-widest shadow-sm">
              Competitive Advantage
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-heading mt-4">
              Why Global Enterprises Choose TOP GROUP
            </h2>
            <p className="text-slate-600 text-sm sm:text-lg mt-3 font-medium px-2">
              Delivering unmatched strategic advantages through global scale, integrated logistics, and trusted expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {whyReasons.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div 
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: idx * 0.05 }}
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                  className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 hover:border-[#1B365D] hover:shadow-xl hover:shadow-blue-900/10 transition-all duration-300 space-y-4 group cursor-pointer"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-200/80 flex items-center justify-center text-[#FF6B00] group-hover:scale-110 group-hover:bg-[#1B365D] group-hover:text-white group-hover:border-[#1B365D] transition-all duration-300 shadow-sm">
                      <Icon className="w-6 h-6 stroke-[2]" />
                    </div>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-heading group-hover:text-[#1B365D] transition-colors">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 8. CORE VALUES */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-orange-50/30 via-white to-orange-50/60 border-b border-slate-200 overflow-hidden w-full max-w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
            <span className="px-3.5 py-1.5 rounded-full bg-orange-100 border border-orange-200 text-xs font-bold text-[#FF6B00] uppercase tracking-widest">
              Our Guiding Principles
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 font-heading mt-4">
              The Values Driving Our Global Ecosystem
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {coreValues.map((val) => {
              const Icon = val.icon;
              return (
                <div 
                  key={val.name}
                  className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-lg hover:border-[#1B365D] transition-all group space-y-3"
                >
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-orange-50 border border-orange-200/60 text-[#FF6B00] flex items-center justify-center group-hover:scale-110 group-hover:bg-[#1B365D] group-hover:text-white group-hover:border-[#1B365D] transition-all duration-300 shadow-sm">
                    <Icon className="w-5 h-5 stroke-[2]" />
                  </div>
                  <h3 className="text-base font-extrabold text-slate-900 font-heading group-hover:text-[#1B365D] transition-colors">{val.name}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{val.desc}</p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 10. EXECUTIVE LEADERSHIP */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200 overflow-hidden w-full max-w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
            <span className="px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-[#1B365D] uppercase tracking-widest">
              Executive Stewardship
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 font-heading mt-4">
              Visionary Leadership Driving Excellence
            </h2>
          </div>

          <div className="min-h-[420px]">
            <AnimatePresence mode="wait">
              <motion.div 
                key={leadershipPage}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
              >
                {leadership
                  .slice(leadershipPage * 3, leadershipPage * 3 + 3)
                  .map((leader) => (
                    <div 
                      key={leader.name}
                      className="rounded-2xl sm:rounded-3xl bg-slate-50 border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-xl hover:border-[#1B365D] transition-all space-y-4 p-5 sm:p-6 flex flex-col justify-between group cursor-pointer"
                    >
                      <div className="space-y-4">
                        <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-slate-200">
                          <img 
                            src={leader.image} 
                            alt={leader.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                        <div>
                          <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 font-heading group-hover:text-[#1B365D] transition-colors">{leader.name}</h3>
                          <div className="text-xs font-bold text-[#FF6B00] uppercase tracking-wider">{leader.role}</div>
                        </div>
                        <p className="text-xs text-slate-600 leading-relaxed italic">
                          "{leader.quote}"
                        </p>
                        <p className="text-xs text-slate-500 leading-relaxed">
                          {leader.bio}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-slate-200/80 flex items-center justify-start">
                        <div className="flex flex-wrap items-center gap-2">
                          <a 
                            href="#" 
                            onClick={(e) => e.preventDefault()} 
                            className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200/80 text-slate-600 hover:text-white hover:bg-[#FF6B00] hover:border-[#FF6B00] flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-xs hover:shadow-md cursor-pointer"
                            title="LinkedIn"
                          >
                            <Linkedin className="w-3.5 h-3.5" />
                          </a>
                          <a 
                            href="#" 
                            onClick={(e) => e.preventDefault()} 
                            className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200/80 text-slate-600 hover:text-white hover:bg-[#1B365D] hover:border-[#1B365D] flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-xs hover:shadow-md cursor-pointer"
                            title="Twitter / X"
                          >
                            <Twitter className="w-3.5 h-3.5" />
                          </a>
                          <a 
                            href="#" 
                            onClick={(e) => e.preventDefault()} 
                            className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200/80 text-slate-600 hover:text-white hover:bg-[#FF6B00] hover:border-[#FF6B00] flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-xs hover:shadow-md cursor-pointer"
                            title="Facebook"
                          >
                            <Facebook className="w-3.5 h-3.5" />
                          </a>
                          <a 
                            href="#" 
                            onClick={(e) => e.preventDefault()} 
                            className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200/80 text-slate-600 hover:text-white hover:bg-[#1B365D] hover:border-[#1B365D] flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-xs hover:shadow-md cursor-pointer"
                            title="Instagram"
                          >
                            <Instagram className="w-3.5 h-3.5" />
                          </a>
                          <a 
                            href="#" 
                            onClick={(e) => e.preventDefault()} 
                            className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200/80 text-slate-600 hover:text-white hover:bg-[#FF6B00] hover:border-[#FF6B00] flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-xs hover:shadow-md cursor-pointer"
                            title="Email"
                          >
                            <Mail className="w-3.5 h-3.5" />
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Pagination Dot Buttons */}
          <div className="flex items-center justify-center gap-2.5 mt-8 sm:mt-12">
            {Array.from({ length: Math.ceil(leadership.length / 3) }).map((_, pageIdx) => (
              <button
                key={pageIdx}
                onClick={() => setLeadershipPage(pageIdx)}
                className={`h-3 rounded-full transition-all duration-300 cursor-pointer ${
                  leadershipPage === pageIdx 
                    ? 'w-8 bg-[#FF6B00] shadow-sm' 
                    : 'w-3 bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Go to page ${pageIdx + 1}`}
              />
            ))}
          </div>

        </div>
      </section>

      {/* 16. CORPORATE RESPONSIBILITY (ESG) */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-orange-50/60 via-white to-orange-50/40 text-slate-900 border-b border-slate-200/80 relative overflow-hidden w-full max-w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
            <span className="px-3.5 py-1.5 rounded-full bg-orange-100 border border-orange-200 text-xs font-bold text-[#FF6B00] uppercase tracking-widest shadow-sm">
              ESG & Sustainability
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-heading mt-4">
              Pioneering Sustainable Growth & Community Impact
            </h2>
            <p className="text-slate-600 text-sm sm:text-lg mt-3 font-medium px-2">
              Driving responsible stewardship, eco-friendly logistics, and sustainable empowerment across all market footprints.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {esgItems.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div 
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: idx * 0.05 }}
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                  className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-[#1B365D] transition-all duration-300 space-y-4 group cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-200/80 text-[#FF6B00] flex items-center justify-center group-hover:scale-110 group-hover:bg-[#1B365D] group-hover:text-white group-hover:border-[#1B365D] transition-all duration-300 shadow-sm">
                    <Icon className="w-6 h-6 stroke-[2]" />
                  </div>
                  <h3 className="text-base sm:text-lg font-extrabold text-slate-900 font-heading group-hover:text-[#1B365D] transition-colors">{item.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 17. FREQUENTLY ASKED QUESTIONS */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200 overflow-hidden w-full max-w-full">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
            <span className="px-3.5 py-1.5 rounded-full bg-orange-100 border border-orange-200 text-xs font-bold text-[#FF6B00] uppercase tracking-widest">
              Frequently Asked Questions
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 font-heading mt-4">
              Everything You Need to Know About TOP GROUP
            </h2>
          </div>

          <div className="space-y-3 sm:space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div 
                  key={faq.q}
                  onMouseEnter={() => setActiveFaq(idx)}
                  onMouseLeave={() => setActiveFaq(null)}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen 
                      ? 'bg-orange-50/60 border-[#FF6B00]/50 shadow-md scale-[1.01]' 
                      : 'bg-white border-slate-200/90 hover:border-[#FF6B00]/40 hover:bg-orange-50/20'
                  }`}
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full p-4 sm:p-5 text-left font-bold text-slate-900 flex items-center justify-between gap-3 cursor-pointer"
                  >
                    <span className={`text-sm sm:text-base font-heading transition-colors ${isOpen ? 'text-[#FF6B00]' : 'text-slate-900'}`}>{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 text-[#FF6B00] transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-orange-100/80 pt-3">
                          {faq.a}
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

      {/* 18. FINAL CTA BANNER */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-white via-orange-50/50 to-blue-50/30 text-slate-900 border-t border-slate-200/80 relative overflow-hidden w-full max-w-full">
        {/* Background Decorative Mesh Orbs */}
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-orange-200/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4 sm:space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="space-y-3 sm:space-y-4"
          >
            <span className="inline-block px-3.5 py-1.5 rounded-full bg-orange-100 border border-orange-200 text-xs font-bold text-[#FF6B00] uppercase tracking-widest shadow-xs">
              Global Collaboration
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-heading tracking-tight">
              Let's Build the <span className="text-[#FF6B00]">Future</span> <span className="text-[#1B365D]">Together</span>
            </h2>
            <p className="text-sm sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-medium px-2">
              Whether you're looking to expand globally, build strategic partnerships, or scale your business through innovation, TOP GROUP is ready to help.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
            className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
          >
            <button
              onClick={onOpenContact}
              className="w-full sm:w-auto relative overflow-hidden px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-extrabold text-[#FF6B00] hover:text-white bg-white border border-orange-300/80 shadow-lg shadow-orange-500/10 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-orange-500/30 cursor-pointer text-xs sm:text-sm group flex items-center justify-center"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#FF6B00] to-[#FF8800] -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out z-0" />
              <span className="relative z-10 flex items-center justify-center gap-2">
                <span>Partner With Us</span>
                <ArrowRight className="w-4 h-4 text-[#FF6B00] group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
              </span>
            </button>

            <button
              onClick={onBackToHome}
              className="w-full sm:w-auto relative overflow-hidden px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-bold text-[#1B365D] hover:text-white bg-white border border-slate-300 hover:border-[#1B365D] shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 cursor-pointer text-xs sm:text-sm group flex items-center justify-center"
            >
              <span className="absolute inset-0 w-full h-full bg-[#1B365D] translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out z-0" />
              <span className="relative z-10 flex items-center justify-center gap-2">
                <span>Back to Main Dashboard</span>
                <ArrowRight className="w-4 h-4 text-[#1B365D] group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
              </span>
            </button>
          </motion.div>
        </div>
      </section>

    </div>
  );
};
