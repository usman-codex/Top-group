import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useInView } from 'motion/react';
import { 
  Camera, Calendar, MapPin, ArrowRight, Play, Award, ShieldCheck, 
  Globe2, Users2, Building2, Sparkles, CheckCircle2, ChevronRight, 
  Newspaper, ExternalLink, Filter, Video, Trophy, Clock, ArrowUpRight
} from 'lucide-react';
import { EXPANDED_MEDIA_EVENTS } from '../data/mediaEventsData';
import { MediaEvent } from '../types';

interface MediaEventsPageProps {
  onBackToHome: () => void;
  onSelectEvent: (event: MediaEvent) => void;
  onOpenContact: () => void;
  onOpenVideo: () => void;
}

// Animated Counter Component counting rapidly from 0
const StatCounter: React.FC<{ value: string }> = ({ value }) => {
  const [current, setCurrent] = useState<number>(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-20px" });

  const prefix = value.match(/^[^\d]+/)?.[0] || '';
  const suffix = value.match(/[^\d,.]+$|\+$|%$/)?.[0] || '';
  const numPart = value.replace(/^[^\d]+/, '').replace(/[^\d,.]+$|\+$|%$/, '');
  const target = parseFloat(numPart.replace(/,/g, ''));

  useEffect(() => {
    if (!isInView || isNaN(target)) {
      setCurrent(0);
      return;
    }

    const duration = 1200;
    const startTime = performance.now();
    let animId: number;

    const updateCount = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      
      setCurrent(easeProgress * target);

      if (progress < 1) {
        animId = requestAnimationFrame(updateCount);
      }
    };

    animId = requestAnimationFrame(updateCount);
    return () => cancelAnimationFrame(animId);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {prefix}{Math.floor(current).toLocaleString()}{suffix}
    </span>
  );
};

export const MediaEventsPage: React.FC<MediaEventsPageProps> = ({
  onBackToHome,
  onSelectEvent,
  onOpenContact,
  onOpenVideo,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [activeTimelineYear, setActiveTimelineYear] = useState<string>('2026');

  const categories = [
    'All',
    'Corporate Events',
    'Business Meetings',
    'Partnerships',
    'Trade Missions',
    'Guest Visits',
    'Awards',
    'Certifications',
    'Exhibitions',
    'Media Coverage',
    'CSR Activities',
    'Team Events'
  ];

  const filteredEvents = activeCategory === 'All'
    ? EXPANDED_MEDIA_EVENTS
    : EXPANDED_MEDIA_EVENTS.filter(e => e.category.toLowerCase() === activeCategory.toLowerCase());

  const marqueeItems = [
    'International Conferences',
    'Business Delegations',
    'Global Partnerships',
    'Corporate Events',
    'Trade Missions',
    'Industry Awards',
    'Media Recognition',
    'Executive Summits',
    'Official Signing Ceremonies',
    'Foreign Ministry Visits'
  ];

  const bentoHighlights = [
    {
      id: 'm1',
      title: 'Pakistan–Central Asia Trade Summit 2026',
      category: 'Trade Missions',
      badge: 'Featured Summit',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80',
      size: 'col-span-1 lg:col-span-2 row-span-2',
      date: 'July 2026',
      location: 'Islamabad, Pakistan',
      desc: 'TOP GROUP convened over 350 international delegates and ministers to establish strategic Eurasian trade corridors.'
    },
    {
      id: 'm3',
      title: 'PSA Uzbekistan Airways Aviation Pact',
      category: 'Partnerships',
      badge: 'Aviation Alliance',
      image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=800&q=80',
      size: 'col-span-1 lg:col-span-1 row-span-1',
      date: 'April 2026',
      location: 'Tashkent Airport VIP Terminal',
      desc: 'Expanding executive charter routes and express cargo logistics.'
    },
    {
      id: 'm5',
      title: 'Conglomerate of the Year Award',
      category: 'Awards',
      badge: 'Excellence Honor',
      image: 'https://images.unsplash.com/photo-1531058240690-006c446962d8?auto=format&fit=crop&w=800&q=80',
      size: 'col-span-1 lg:col-span-1 row-span-1',
      date: 'February 2026',
      location: 'Dubai, UAE',
      desc: 'Honored at the Eurasian Business Excellence Gala for regional leadership.'
    },
    {
      id: 'm2',
      title: 'FinTech Edge Convocation 2026',
      category: 'Corporate Events',
      badge: '1,200 Graduates',
      image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=800&q=80',
      size: 'col-span-1 lg:col-span-1 row-span-1',
      date: 'May 2026',
      location: 'Tashkent Grand Ballroom',
      desc: 'Awarding $250,000 in AI and FinTech startup grants.'
    },
    {
      id: 'm6',
      title: 'ISO 9001 & ISO 27001 Certification',
      category: 'Certifications',
      badge: 'Dual ISO Compliance',
      image: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80',
      size: 'col-span-1 lg:col-span-2 row-span-1',
      date: 'January 2026',
      location: 'London, UK',
      desc: 'Achieving international accreditation for zero-trust security and supply chain management.'
    }
  ];

  const videos = [
    {
      id: 'v1',
      title: 'Eurasian Economic Cooperation Summit 2026 Keynote',
      duration: '03:45',
      category: 'Keynote & Panel',
      thumbnail: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'v2',
      title: 'Official Signing Ceremony – Trade Logistics Pact',
      duration: '02:15',
      category: 'Partnership Signing',
      thumbnail: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'v3',
      title: 'Global FinTech Edge Convocation & Awards',
      duration: '04:20',
      category: 'Annual Convocation',
      thumbnail: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=800&q=80',
    }
  ];

  const certifications = [
    {
      name: 'ISO 9001:2025 Quality Management System',
      org: 'International Organization for Standardization',
      year: '2025',
      desc: 'Certified for highest standards in multi-sector supply chain and corporate governance.'
    },
    {
      name: 'ISO 27001 Information Security Management',
      org: 'Global Cybersecurity Audit Bureau',
      year: '2025',
      desc: 'Zero-trust enterprise cloud security & automated data compliance.'
    },
    {
      name: 'IATA Passenger & Cargo Sales Agency',
      org: 'International Air Transport Association',
      year: '2024',
      desc: 'Official GSA certification for Uzbekistan Airways and global charter operations.'
    },
    {
      name: 'Eurasian FinTech & Cross-Border Compliance Honor',
      org: 'Central Asian Economic Forum',
      year: '2026',
      desc: 'Excellence in transparent, automated trade financial settlements.'
    },
    {
      name: 'Top Trade Logistics Enterprise Partner',
      org: 'Ministry of Foreign Commerce & Trade',
      year: '2025',
      desc: 'Recognized for pioneering high-capacity multimodal transit corridors.'
    },
    {
      name: 'Corporate Social Responsibility Distinction',
      org: 'Global CSR Foundation',
      year: '2026',
      desc: 'Honoring Green Eurasia tree planting and rural clean energy initiatives.'
    }
  ];

  const timelineData = [
    {
      year: '2021',
      title: 'Foundation of High-Tech Incubators',
      desc: 'Launched Vades Group and expanded digital trade infrastructure into 10 new markets.',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80'
    },
    {
      year: '2022',
      title: 'Aviation & Logistics Alliance',
      desc: 'Established PSA Uzbekistan Airways partnership and PakCIS logistics corridors.',
      image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=600&q=80'
    },
    {
      year: '2023',
      title: 'FinTech & Academy Scaling',
      desc: 'Graduated over 2,500 students from FinTech Edge Institute with international placement.',
      image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=600&q=80'
    },
    {
      year: '2024',
      title: 'Global Trade Summits',
      desc: 'Hosted 50+ international delegations across Dubai, Istanbul, Tashkent, and London.',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=600&q=80'
    },
    {
      year: '2025',
      title: 'Dual ISO Certifications & CSR Launch',
      desc: 'Earned ISO 9001 & ISO 27001 credentials and initiated Green Eurasia solar drive.',
      image: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=600&q=80'
    },
    {
      year: '2026',
      title: 'Autonomous Ecosystem Rollout',
      desc: 'Pioneering AI-driven supply chains, multilateral trade pacts, and global expansion.',
      image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=600&q=80'
    }
  ];

  const newsCoverage = [
    {
      publisher: 'Bloomberg Markets',
      date: 'July 2026',
      headline: 'Top Group Expands Eurasian Logistics Corridor with $120M Trade Investment',
      excerpt: 'Top Group leadership announces strategic expansion in multimodal freight routes, bridging Central Asia, South Asia, and European ports.',
      image: 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?auto=format&fit=crop&w=800&q=80'
    },
    {
      publisher: 'Financial Times',
      date: 'May 2026',
      headline: 'How Central Asian Conglomerates Are Driving Next-Gen FinTech & Cross-Border Commerce',
      excerpt: 'An in-depth analysis of Top Group’s unified venture ecosystem, blending software incubators with real-world trade logistics.',
      image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=800&q=80'
    },
    {
      publisher: 'Reuters Executive',
      date: 'March 2026',
      headline: 'Pakistan–Central Asia Trade Forum Marks Milestone in Regional Economic Integration',
      excerpt: 'Over 350 diplomatic envoys and corporate CEOs convened in Islamabad under the auspices of Top Group to finalize bilateral pacts.',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80'
    }
  ];

  const statsList = [
    { label: 'Corporate Events', value: '250+' },
    { label: 'Strategic Meetings', value: '120+' },
    { label: 'International Delegations', value: '75+' },
    { label: 'Industry Awards', value: '50+' },
    { label: 'Global Partnerships', value: '40+' },
    { label: 'Countries Represented', value: '15+' }
  ];

  const scrollToGallery = () => {
    const el = document.getElementById('media-gallery-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FFF6EE] text-slate-900 pt-20 overflow-hidden font-sans">
      
      {/* 1. HERO SECTION WITH FULL BACKGROUND IMAGE */}
      <section className="relative py-24 lg:py-32 bg-slate-950 text-white border-b border-orange-500/20 overflow-hidden">
        {/* Background Corporate Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=2000&q=80" 
            alt="Corporate Events Background" 
            className="w-full h-full object-cover object-center opacity-30 scale-105"
          />
        
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/80" />
        </div>

     

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="max-w-3xl space-y-6">
            
            {/* Hero Left Content */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white font-heading leading-[1.1] tracking-tight">
                Capturing Every Milestone.{' '}
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B00] via-[#FF8800] to-amber-300">
                  Celebrating Every Achievement.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 font-medium leading-relaxed">
                Every partnership, conference, business summit, certification, and milestone reflects our commitment to building stronger businesses and creating lasting impact across global markets.
              </p>
              <p className="text-sm sm:text-base text-slate-400 font-normal leading-relaxed">
                Explore the moments that define Top Group’s journey of innovation, collaboration, and international growth.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={scrollToGallery}
                  className="px-8 py-4 rounded-full text-sm font-bold text-white btn-orange-gradient shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:scale-105 transition-all flex items-center gap-2 cursor-pointer group"
                >
                  <span>Explore Gallery</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. TRUST BAR (Infinite Scrolling Marquee) */}
      <section className="bg-[#0F172A] text-white py-6 border-y border-slate-800 overflow-hidden relative w-full">
        <div className="flex animate-marquee whitespace-nowrap">
          <div className="flex items-center gap-8 pr-8 shrink-0">
            {[...marqueeItems, ...marqueeItems].map((item, idx) => (
              <div key={idx} className="flex items-center gap-8 shrink-0">
                <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-slate-300 hover:text-[#FF6B00] transition-colors flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#FF6B00]" />
                  {item}
                </span>
                <span className="text-slate-700 font-bold">•</span>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-8 pr-8 shrink-0" aria-hidden="true">
            {[...marqueeItems, ...marqueeItems].map((item, idx) => (
              <div key={`dup-${idx}`} className="flex items-center gap-8 shrink-0">
                <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-slate-300 hover:text-[#FF6B00] transition-colors flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#FF6B00]" />
                  {item}
                </span>
                <span className="text-slate-700 font-bold">•</span>
              </div>
            ))}
          </div>
        </div>
      </section>

   

      {/* 4. MEDIA GALLERY (Main Section) */}
      <section id="media-gallery-section" className="pt-16 pb-24 bg-gradient-to-b from-[#FFF8F2] via-[#FFF4E8] to-[#FFF8F2] relative border-t border-orange-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12 flex flex-col items-center">
            <span className="inline-block text-xs font-extrabold text-[#FF6B00] uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 mb-5 shadow-xs">
              MAIN MEDIA GALLERY
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading mb-4">
              Media Gallery
            </h2>
            <p className="text-base text-slate-600 font-medium">
              Browse our growing collection of conferences, exhibitions, business meetings, certifications, networking sessions, leadership events, and international collaborations.
            </p>
          </div>

          {/* Animated Filter Category Pills */}
          <div className="flex items-center justify-center flex-wrap gap-2.5 mb-14">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-extrabold transition-all duration-300 cursor-pointer shadow-xs ${
                    isActive
                      ? 'btn-orange-gradient text-white shadow-md shadow-orange-500/30 scale-105'
                      : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200/90'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Gallery Grid (3 Cards Per Row on Desktop) */}
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {filteredEvents.map((event, idx) => (
                <motion.div
                  key={event.id}
                  layout
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  onClick={() => onSelectEvent(event)}
                  className="group bg-white rounded-3xl border border-slate-200/80 shadow-md hover:shadow-2xl hover:border-[#FF6B00] transition-all duration-300 overflow-hidden cursor-pointer flex flex-col justify-between"
                >
                  <div>
                    {/* Card Top Image */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                      <img
                        src={event.coverImage}
                        alt={event.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                      
                      <span className="absolute top-4 right-4 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-white/95 text-slate-900 backdrop-blur-md shadow-md border border-slate-100">
                        {event.category}
                      </span>
                    </div>

                    {/* Content Body */}
                    <div className="p-6 space-y-3">
                      <div className="flex items-center gap-4 text-xs font-semibold text-slate-500">
                        <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5 text-[#FF6B00]" /> {event.date}</span>
                        <span className="flex items-center gap-1.5 truncate"><MapPin className="w-3.5 h-3.5 text-[#FF6B00]" /> {event.location}</span>
                      </div>

                      <h3 className="text-lg font-bold text-slate-900 font-heading group-hover:text-[#FF6B00] transition-colors leading-snug line-clamp-2">
                        {event.title}
                      </h3>

                      <p className="text-xs text-slate-600 font-normal leading-relaxed line-clamp-3">
                        {event.shortDesc}
                      </p>
                    </div>
                  </div>

                  {/* Card Footer Button */}
                  <div className="px-6 pb-6 pt-2">
                    <div className="w-full py-2.5 rounded-xl bg-slate-50 border border-slate-200/80 group-hover:bg-[#FF6B00] group-hover:border-[#FF6B00] group-hover:text-white text-xs font-bold text-slate-700 flex items-center justify-center gap-2 transition-all duration-300 shadow-2xs group-hover:shadow-md">
                      <span>Read Full Story</span>
                      <ArrowRight className="w-4 h-4 text-[#FF6B00] group-hover:text-white group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>

                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

        </div>
      </section>

   
      {/* 6. CERTIFICATIONS & RECOGNITIONS */}
      <section className="pt-16 pb-24 bg-white relative border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center">
            <span className="inline-block text-xs font-extrabold text-[#FF6B00] uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 mb-5 shadow-xs">
              TRUST & COMPLIANCE
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading mb-4">
              Certifications & Recognitions
            </h2>
            <p className="text-base text-slate-600 font-medium">
              Our certifications and industry recognitions reflect our commitment to quality, compliance, innovation, and operational excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, idx) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="group relative rounded-3xl p-6 bg-slate-50 hover:bg-white border border-slate-200/80 hover:border-[#FF6B00] shadow-sm hover:shadow-xl transition-all duration-300 space-y-4"
              >
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#FF6B00] to-[#FF8800] text-white flex items-center justify-center shadow-md">
                    <Award className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-extrabold text-slate-400 bg-white px-2.5 py-1 rounded-full border border-slate-200">
                    {cert.year}
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="text-base font-bold text-slate-900 font-heading group-hover:text-[#FF6B00] transition-colors">
                    {cert.name}
                  </h3>
                  <div className="text-xs font-semibold text-[#FF6B00]">
                    {cert.org}
                  </div>
                </div>

                <p className="text-xs text-slate-600 font-normal leading-relaxed">
                  {cert.desc}
                </p>

                <div className="pt-2 flex items-center gap-1.5 text-xs font-bold text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>Verified Global Accreditation</span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

   
   

      {/* 9. EVENT STATISTICS */}
      <section className="pt-14 pb-20 bg-[#0A1128] text-white relative border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14 flex flex-col items-center">
            <span className="inline-block text-xs font-extrabold text-[#FF6B00] uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 mb-5 shadow-xs">
              MILESTONES IN NUMBERS
            </span>
            <h2 className="text-3xl font-extrabold font-heading text-white">
              Global Event Impact
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
            {statsList.map((st) => (
              <div key={st.label} className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-[#FF6B00]/60 transition-colors">
                <div className="text-3xl sm:text-4xl font-extrabold text-[#FF6B00] font-heading">
                  <StatCounter value={st.value} />
                </div>
                <div className="text-xs text-slate-400 font-medium mt-2">
                  {st.label}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 10. CTA SECTION */}
      <section className="pt-14 pb-20 bg-gradient-to-r from-slate-950 via-[#1B365D] to-slate-950 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF6B00]/20 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 flex flex-col items-center">
          <span className="inline-block text-xs font-extrabold text-[#FF6B00] uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 mb-5 shadow-xs">
            CONNECT WITH TOP GROUP
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading leading-tight mb-4">
            Let's Create the Next Success Story Together
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-medium max-w-2xl mx-auto leading-relaxed">
            Whether you're looking to partner with us, attend future events, or explore collaboration opportunities, Top Group is ready to connect.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onOpenContact}
              className="px-8 py-4 rounded-full text-sm font-extrabold text-white btn-orange-gradient shadow-xl hover:scale-105 transition-all cursor-pointer"
            >
              Contact Us
            </button>

            <button
              onClick={onOpenContact}
              className="px-8 py-4 rounded-full text-sm font-extrabold text-white bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md hover:scale-105 transition-all cursor-pointer"
            >
              Become a Partner
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
