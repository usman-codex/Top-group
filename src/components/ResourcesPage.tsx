import React, { useState, useMemo, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'motion/react';
import { 
  Search, 
  Download, 
  FileText, 
  BookOpen, 
  Award, 
  ArrowLeft, 
  Sparkles, 
  Filter, 
  CheckCircle2, 
  Clock, 
  User, 
  Share2, 
  Eye, 
  X, 
  FileCheck, 
  Zap, 
  Globe, 
  Layers, 
  Play, 
  ChevronRight, 
  Mail, 
  Check, 
  HelpCircle,
  ExternalLink
} from 'lucide-react';
import { RESOURCE_ITEMS, BLOG_POSTS } from '../data/mockData';
import { ResourceItem, BlogPost } from '../types';

interface AnimatedStatProps {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}

const AnimatedStatNumber: React.FC<AnimatedStatProps> = ({
  end,
  suffix = '',
  prefix = '',
  duration = 1000,
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: false });

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
      {prefix}{count}{suffix}
    </span>
  );
};

interface ResourcesPageProps {
  onBackToHome: () => void;
  onOpenContact: () => void;
  onOpenVideo: () => void;
  onSelectPost?: (post: BlogPost) => void;
}

export const ResourcesPage: React.FC<ResourcesPageProps> = ({
  onBackToHome,
  onOpenContact,
  onOpenVideo,
  onSelectPost
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedType, setSelectedType] = useState<string>('All');
  const [selectedResource, setSelectedResource] = useState<ResourceItem | null>(null);
  const [downloadSuccess, setDownloadSuccess] = useState<string | null>(null);
  const [emailInput, setEmailInput] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  // Categories list
  const categories = ['All', 'Trade & Logistics', 'Technology & AI', 'FinTech Education', 'Travel & Aviation', 'Hospitality & F&B', 'Industrial Services'];
  const types = ['All', 'Market Report', 'Whitepaper', 'Executive Guide', 'Case Study', 'Research Paper'];

  // Filtered resources
  const filteredResources = useMemo(() => {
    return RESOURCE_ITEMS.filter((item) => {
      const matchesSearch = searchQuery === '' || 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
      const matchesType = selectedType === 'All' || item.type === selectedType;

      return matchesSearch && matchesCategory && matchesType;
    });
  }, [searchQuery, selectedCategory, selectedType]);

  const featuredResource = useMemo(() => {
    return RESOURCE_ITEMS.find((r) => r.featured) || RESOURCE_ITEMS[0];
  }, []);

  const handleDownload = (resourceTitle: string) => {
    setDownloadSuccess(resourceTitle);
    setTimeout(() => {
      setDownloadSuccess(null);
    }, 4000);
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setNewsletterSubscribed(true);
      setEmailInput('');
      setTimeout(() => {
        setNewsletterSubscribed(false);
      }, 5000);
    }
  };

  return (
    <div className="pt-24 pb-20 bg-[#FFF6EE] min-h-screen text-slate-900">
      
      {/* 2. HERO SECTION */}
      <section className="relative pt-6 pb-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-4xl mx-auto flex flex-col items-center">
            
            {/* HEADING */}
            <motion.h1 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 font-heading mb-4 leading-tight tracking-tight"
            >
              Executive Insights, Whitepapers & Industry Toolkits
            </motion.h1>

            {/* SUBTITLE */}
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg sm:text-xl text-slate-600 max-w-3xl mb-8 font-medium leading-relaxed"
            >
              Data-backed research, technical whitepapers, and operational blueprints engineered by TOP GROUP specialists across Eurasia & global markets.
            </motion.p>

            {/* QUICK HIGHLIGHT STATS TICKER */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 w-full max-w-4xl"
            >
              <div className="bg-white/80 backdrop-blur-md p-4 rounded-xl border border-slate-200/70 text-center shadow-xs">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#1B365D] font-heading">
                  <AnimatedStatNumber end={50} suffix="+" duration={800} />
                </div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-1">Published Reports</div>
              </div>
              <div className="bg-white/80 backdrop-blur-md p-4 rounded-xl border border-slate-200/70 text-center shadow-xs">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#FF6B00] font-heading">
                  <AnimatedStatNumber end={100} suffix="k+" duration={900} />
                </div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-1">Downloads</div>
              </div>
              <div className="bg-white/80 backdrop-blur-md p-4 rounded-xl border border-slate-200/70 text-center shadow-xs">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#1B365D] font-heading">
                  <AnimatedStatNumber end={8} suffix=" Sectors" duration={700} />
                </div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-1">Industry Scope</div>
              </div>
              <div className="bg-white/80 backdrop-blur-md p-4 rounded-xl border border-slate-200/70 text-center shadow-xs">
                <div className="text-2xl sm:text-3xl font-extrabold text-emerald-600 font-heading">
                  <AnimatedStatNumber end={100} suffix="%" duration={900} />
                </div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-1">Free Access</div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* SUCCESS TOAST FOR DOWNLOADS */}
      <AnimatePresence>
        {downloadSuccess && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.9 }}
            className="fixed top-24 right-4 sm:right-8 z-50 bg-[#0F172A] text-white p-4 rounded-2xl shadow-2xl border border-emerald-500/40 flex items-center gap-3 max-w-md"
          >
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
              <FileCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">Download Initiated!</div>
              <div className="text-xs text-slate-300 truncate mt-0.5">{downloadSuccess}</div>
            </div>
            <button 
              onClick={() => setDownloadSuccess(null)}
              className="ml-auto text-slate-400 hover:text-white p-1"
            >
              <X className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 3. FEATURED SPOTLIGHT RESOURCE */}
      <section className="pt-4 pb-16 bg-white relative border-y border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-10 flex flex-col items-center">
            <span className="inline-block text-xs font-extrabold text-[#FF6B00] uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 mb-5 shadow-xs">
              FLAGSHIP PUBLICATION
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading mb-4">
              Featured Executive Spotlight
            </h2>
            <p className="text-base text-slate-600 font-medium">
              Our highest impact market intelligence publication for C-suite leaders and policymakers.
            </p>
          </div>

          {/* BENTO HERO CARD */}
          <div className="bg-gradient-to-br from-slate-950 via-[#1B365D] to-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-800 text-white grid grid-cols-1 lg:grid-cols-12 gap-0">
            
            {/* Left Cover Image */}
            <div className="lg:col-span-5 relative min-h-[320px] lg:min-h-full overflow-hidden">
              <img
                src={featuredResource.coverImage}
                alt={featuredResource.title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-slate-950/40 lg:to-slate-950" />
              
              <div className="absolute top-4 left-4 flex gap-2">
                <span className="text-xs font-extrabold text-white bg-[#FF6B00] px-3 py-1 rounded-full shadow-md uppercase tracking-wider">
                  {featuredResource.type}
                </span>
                <span className="text-xs font-bold text-white bg-white/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/30">
                  {featuredResource.category}
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-slate-300 font-medium">
                <span className="flex items-center gap-1.5 bg-slate-950/70 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-800">
                  <FileText className="w-3.5 h-3.5 text-[#FF6B00]" /> {featuredResource.pages}
                </span>
                <span className="flex items-center gap-1.5 bg-slate-950/70 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-800">
                  <Download className="w-3.5 h-3.5 text-emerald-400" /> {featuredResource.downloadCount} downloads
                </span>
              </div>
            </div>

            {/* Right Content Details */}
            <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-xs text-orange-400 font-semibold tracking-wider uppercase">
                  <span>Published {featuredResource.publishedDate}</span>
                  <span>•</span>
                  <span>{featuredResource.fileSize}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-heading text-white leading-tight">
                  {featuredResource.title}
                </h3>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-medium">
                  {featuredResource.subtitle}
                </p>

                {/* Key takeaways list */}
                <div className="pt-2 space-y-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#FF6B00]" /> Core Executive Takeaways:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-200 font-medium">
                    {featuredResource.keyTakeaways.slice(0, 4).map((takeaway, idx) => (
                      <div key={idx} className="flex items-start gap-2 bg-white/5 p-2 rounded-lg border border-white/10">
                        <CheckCircle2 className="w-4 h-4 text-[#FF6B00] shrink-0 mt-0.5" />
                        <span>{takeaway}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Author & Action Buttons */}
              <div className="pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <img
                    src={featuredResource.author.avatar}
                    alt={featuredResource.author.name}
                    className="w-10 h-10 rounded-full object-cover border-2 border-[#FF6B00]"
                  />
                  <div>
                    <div className="text-sm font-bold text-white">{featuredResource.author.name}</div>
                    <div className="text-xs text-slate-400">{featuredResource.author.role}</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <button
                    onClick={() => setSelectedResource(featuredResource)}
                    className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs border border-white/20 flex items-center justify-center gap-2 transition-all cursor-pointer"
                  >
                    <Eye className="w-4 h-4" />
                    <span>Quick Preview</span>
                  </button>

                  <button
                    onClick={() => handleDownload(featuredResource.title)}
                    className="flex-1 sm:flex-none px-6 py-2.5 rounded-xl bg-[#FF6B00] hover:bg-[#e05e00] text-white font-bold text-xs shadow-lg hover:shadow-orange-500/30 flex items-center justify-center gap-2 transition-all cursor-pointer"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download Report</span>
                  </button>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 4. MAIN RESOURCE LIBRARY GRID WITH CATEGORY FILTER */}
      <section className="py-16 bg-[#FFF8F2] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-10 flex flex-col items-center">
            <span className="inline-block text-xs font-extrabold text-[#FF6B00] uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 mb-5 shadow-xs">
              BROWSE ALL RESOURCES
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading mb-4">
              Explore Our Knowledge Directory
            </h2>
            <p className="text-base text-slate-600 font-medium">
              Filter by industry domain or publication type to access specific market intelligence.
            </p>
          </div>

          {/* CATEGORY & TYPE TABS */}
          <div className="space-y-4 mb-10">
            {/* Category Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none justify-start sm:justify-center">
              <span className="text-xs font-extrabold uppercase text-slate-400 shrink-0 flex items-center gap-1 mr-2">
                <Filter className="w-3.5 h-3.5" /> Industry:
              </span>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-bold shrink-0 transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-[#1B365D] text-white shadow-md'
                      : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Publication Type Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none justify-start sm:justify-center">
              <span className="text-xs font-extrabold uppercase text-slate-400 shrink-0 flex items-center gap-1 mr-2">
                <Layers className="w-3.5 h-3.5" /> Format:
              </span>
              {types.map((t) => (
                <button
                  key={t}
                  onClick={() => setSelectedType(t)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold shrink-0 transition-all cursor-pointer ${
                    selectedType === t
                      ? 'bg-[#FF6B00] text-white shadow-xs'
                      : 'bg-white/80 text-slate-600 hover:bg-white border border-slate-200/80'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          {/* RESULTS COUNT & RESET BUTTON */}
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-200/80">
            <div className="text-sm font-bold text-slate-700">
              Showing <span className="text-[#FF6B00]">{filteredResources.length}</span> publications
              {selectedCategory !== 'All' && <span> in <span className="text-[#1B365D]">{selectedCategory}</span></span>}
            </div>

            {(selectedCategory !== 'All' || selectedType !== 'All' || searchQuery !== '') && (
              <button
                onClick={() => {
                  setSelectedCategory('All');
                  setSelectedType('All');
                  setSearchQuery('');
                }}
                className="text-xs font-bold text-[#FF6B00] hover:underline flex items-center gap-1 cursor-pointer"
              >
                Reset Filters
              </button>
            )}
          </div>

          {/* RESOURCES GRID */}
          {filteredResources.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredResources.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Thumbnail Image */}
                    <div className="relative h-48 overflow-hidden bg-slate-900">
                      <img
                        src={item.coverImage}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                      <div className="absolute top-3 left-3 flex gap-2">
                        <span className="text-[10px] font-extrabold text-white bg-[#1B365D] px-2.5 py-1 rounded-md shadow-xs uppercase tracking-wider">
                          {item.type}
                        </span>
                        <span className="text-[10px] font-bold text-slate-900 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-md">
                          {item.category}
                        </span>
                      </div>

                      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] text-white/90 font-medium">
                        <span className="flex items-center gap-1 bg-slate-950/60 px-2 py-0.5 rounded backdrop-blur-xs">
                          <FileText className="w-3 h-3 text-[#FF6B00]" /> {item.pages || '20+ Pages'}
                        </span>
                        <span className="flex items-center gap-1 bg-slate-950/60 px-2 py-0.5 rounded backdrop-blur-xs">
                          <Download className="w-3 h-3 text-emerald-400" /> {item.downloadCount}
                        </span>
                      </div>
                    </div>

                    {/* Content details */}
                    <div className="p-6 space-y-3">
                      <div className="text-xs text-slate-500 font-semibold flex items-center gap-2">
                        <span>{item.publishedDate}</span>
                        <span>•</span>
                        <span>{item.fileSize}</span>
                      </div>

                      <h3 className="text-lg font-bold text-slate-900 font-heading group-hover:text-[#1B365D] transition-colors line-clamp-2 leading-snug">
                        {item.title}
                      </h3>

                      <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed font-medium">
                        {item.subtitle}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {item.tags.slice(0, 3).map((tag, idx) => (
                          <span key={idx} className="text-[10px] font-bold text-slate-600 bg-slate-100 px-2 py-0.5 rounded-md">
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Footer Actions */}
                  <div className="px-6 pb-6 pt-2 border-t border-slate-100 flex items-center justify-between gap-2">
                    <button
                      onClick={() => setSelectedResource(item)}
                      className="text-xs font-bold text-[#1B365D] hover:text-[#FF6B00] flex items-center gap-1 transition-colors cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Details</span>
                    </button>

                    <button
                      onClick={() => handleDownload(item.title)}
                      className="px-3.5 py-1.5 rounded-lg bg-orange-50 hover:bg-[#FF6B00] text-[#FF6B00] hover:text-white border border-orange-200 text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer shadow-2xs"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download PDF</span>
                    </button>
                  </div>

                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 p-8 max-w-lg mx-auto space-y-4">
              <div className="w-12 h-12 rounded-full bg-orange-50 text-[#FF6B00] flex items-center justify-center mx-auto">
                <Search className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 font-heading">No Resources Found</h3>
              <p className="text-xs text-slate-500">
                We couldn't find any resources matching your current search query or filter selection.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                  setSelectedType('All');
                }}
                className="px-4 py-2 rounded-xl bg-[#1B365D] text-white text-xs font-bold cursor-pointer"
              >
                Clear Search & Filters
              </button>
            </div>
          )}

        </div>
      </section>

      {/* 5. DOWNLOADABLE TOOLKITS & BLUEPRINTS QUICK LIST */}
      <section className="py-16 bg-white relative border-t border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12 flex flex-col items-center">
            <span className="inline-block text-xs font-extrabold text-[#FF6B00] uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 mb-5 shadow-xs">
              EXECUTIVE TOOLKITS & TEMPLATES
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading mb-4">
              Instant Strategic Blueprints
            </h2>
            <p className="text-base text-slate-600 font-medium">
              Download concise frameworks, compliance checklists, and technical reference guides.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="p-6 rounded-2xl bg-gradient-to-b from-slate-50 to-orange-50/30 border border-orange-200/60 shadow-xs hover:shadow-md transition-all space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#1B365D] text-white flex items-center justify-center font-bold">
                  <Globe className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 font-heading">
                  Eurasian Customs & Tariff Matrix 2026
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  Updated tariff schedules, HS codes, and customs clearing SLA guidelines for Eurasian shipping corridors.
                </p>
              </div>
              <button
                onClick={() => handleDownload('Eurasian Customs & Tariff Matrix 2026')}
                className="w-full py-2.5 rounded-xl bg-white hover:bg-[#1B365D] text-[#1B365D] hover:text-white border border-slate-200 font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer shadow-2xs"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Matrix (2.1 MB)</span>
              </button>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-b from-slate-50 to-blue-50/30 border border-blue-200/60 shadow-xs hover:shadow-md transition-all space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#FF6B00] text-white flex items-center justify-center font-bold">
                  <Zap className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 font-heading">
                  Enterprise Agentic AI Architecture Blueprint
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  Reference system architecture diagram and tool-execution safety guidelines for autonomous multi-agent LLMs.
                </p>
              </div>
              <button
                onClick={() => handleDownload('Enterprise Agentic AI Architecture Blueprint')}
                className="w-full py-2.5 rounded-xl bg-white hover:bg-[#FF6B00] text-[#FF6B00] hover:text-white border border-slate-200 font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer shadow-2xs"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Blueprint (3.4 MB)</span>
              </button>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-b from-slate-50 to-emerald-50/30 border border-emerald-200/60 shadow-xs hover:shadow-md transition-all space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-700 text-white flex items-center justify-center font-bold">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 font-heading">
                  FinTech Quant Curriculum Accreditation Syllabus
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  Official course module breakdown for bank tech leads learning algorithmic trading and risk modeling.
                </p>
              </div>
              <button
                onClick={() => handleDownload('FinTech Quant Curriculum Syllabus')}
                className="w-full py-2.5 rounded-xl bg-white hover:bg-emerald-700 text-emerald-800 hover:text-white border border-slate-200 font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer shadow-2xs"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Syllabus (1.8 MB)</span>
              </button>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-b from-slate-50 to-purple-50/30 border border-purple-200/60 shadow-xs hover:shadow-md transition-all space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-purple-900 text-white flex items-center justify-center font-bold">
                  <BookOpen className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 font-heading">
                  Corporate Flight Readiness & VIP Charter Checklist
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  Operational protocol checklist for corporate travel officers arranging VIP aircraft charters and diplomatic visits.
                </p>
              </div>
              <button
                onClick={() => handleDownload('Corporate Flight Readiness Checklist')}
                className="w-full py-2.5 rounded-xl bg-white hover:bg-purple-900 text-purple-900 hover:text-white border border-slate-200 font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer shadow-2xs"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Checklist (1.5 MB)</span>
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* 6. ARTICLES & EXECUTIVE BLOG HIGHLIGHTS */}
      <section className="py-16 bg-[#FFF8F2] relative border-t border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-12 gap-4">
            <div>
              <span className="inline-block text-xs font-extrabold text-[#FF6B00] uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 mb-3 shadow-xs">
                EXECUTIVE THOUGHT LEADERSHIP
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900 font-heading">
                Latest Insights & Articles
              </h2>
            </div>
            <button
              onClick={onOpenContact}
              className="text-xs font-bold text-[#1B365D] hover:text-[#FF6B00] flex items-center gap-1 cursor-pointer"
            >
              <span>Submit Guest Research Inquiry</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post) => (
              <div
                key={post.id}
                onClick={() => onSelectPost && onSelectPost(post)}
                className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-44 overflow-hidden bg-slate-900">
                    <img
                      src={post.coverImage}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="text-[10px] font-extrabold text-white bg-[#FF6B00] px-2.5 py-1 rounded-md shadow-xs uppercase tracking-wider">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-5 space-y-3">
                    <div className="text-[11px] text-slate-500 font-medium flex items-center gap-2">
                      <span>{post.publishedDate}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>

                    <h3 className="text-base font-bold text-slate-900 font-heading group-hover:text-[#1B365D] transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0 flex items-center gap-3 border-t border-slate-100 mt-2">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="w-8 h-8 rounded-full object-cover border border-slate-200"
                  />
                  <div>
                    <div className="text-xs font-bold text-slate-900">{post.author.name}</div>
                    <div className="text-[10px] text-slate-500 truncate">{post.author.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. RESOURCE FAQ SECTION */}
      <section className="py-16 bg-white relative border-t border-slate-200/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12 flex flex-col items-center">
            <span className="inline-block text-xs font-extrabold text-[#FF6B00] uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 mb-5 shadow-xs">
              KNOWLEDGE HUB FREQUENT QUESTIONS
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 font-heading mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-slate-600 font-medium">
              Guidelines regarding executive whitepapers, research licensing, and citation rules.
            </p>
          </div>

          <div className="space-y-4">
            
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
              <h3 className="text-base font-bold text-slate-900 font-heading flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-[#FF6B00]" />
                Are TOP GROUP whitepapers and research reports free to download?
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed pl-6">
                Yes! All public whitepapers, executive guides, and industry toolkits published in the Knowledge Hub are provided free of charge for enterprise executives, researchers, and public sector stakeholders.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
              <h3 className="text-base font-bold text-slate-900 font-heading flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-[#FF6B00]" />
                Can we request custom market research or tailored advisory reports?
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed pl-6">
                Yes. TOP GROUP Advisory offers bespoke market intelligence, Eurasian customs feasibility studies, and custom FinTech software benchmarks tailored to your strategic project requirements.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
              <h3 className="text-base font-bold text-slate-900 font-heading flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-[#FF6B00]" />
                How do I cite TOP GROUP publications in academic or corporate papers?
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed pl-6">
                You are welcome to reference our data and findings by attributing "TOP GROUP Global Market Intelligence" along with the publication title and year.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 8. NEWSLETTER & CUSTOM RESEARCH CTA */}
      <section className="pt-14 pb-20 bg-gradient-to-r from-slate-950 via-[#1B365D] to-slate-950 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF6B00]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 flex flex-col items-center">
          
          <span className="inline-block text-xs font-extrabold text-[#FF6B00] uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 mb-5 shadow-xs">
            STAY INFORMED
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading leading-tight mb-4 text-white">
            Subscribe to TOP GROUP Executive Digest
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mb-8 font-medium">
            Receive monthly high-level research summaries, Eurasian trade metrics, and enterprise tech blueprints directly in your inbox.
          </p>

          <form onSubmit={handleNewsletterSubmit} className="w-full max-w-md flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              required
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
              placeholder="Enter your corporate email..."
              className="px-4 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-slate-400 text-sm focus:outline-none focus:border-[#FF6B00] flex-1"
            />
            <button
              type="submit"
              className="px-6 py-3.5 rounded-xl bg-[#FF6B00] hover:bg-[#e05e00] text-white font-bold text-sm shadow-lg hover:shadow-orange-500/30 transition-all cursor-pointer shrink-0 flex items-center justify-center gap-2"
            >
              <Mail className="w-4 h-4" />
              <span>Subscribe</span>
            </button>
          </form>

          {newsletterSubscribed && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 p-3 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-bold flex items-center gap-2"
            >
              <Check className="w-4 h-4 text-emerald-400" />
              <span>Thank you! You are now subscribed to TOP GROUP Executive Digest.</span>
            </motion.div>
          )}

          <div className="pt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-medium">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#FF6B00]" /> Monthly Curated Insights
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#FF6B00]" /> Zero Spam Guarantee
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#FF6B00]" /> One-Click Unsubscribe
            </span>
          </div>

        </div>
      </section>

      {/* 9. DETAILED RESOURCE MODAL */}
      <AnimatePresence>
        {selectedResource && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl border border-slate-200 relative my-8"
            >
              {/* Modal Header */}
              <div className="relative h-56 bg-slate-900 overflow-hidden">
                <img
                  src={selectedResource.coverImage}
                  alt={selectedResource.title}
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                <button
                  onClick={() => setSelectedResource(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-slate-950/60 hover:bg-slate-950 text-white transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="absolute bottom-4 left-6 right-6">
                  <div className="flex gap-2 mb-2">
                    <span className="text-[10px] font-extrabold text-white bg-[#FF6B00] px-2.5 py-1 rounded-md uppercase tracking-wider">
                      {selectedResource.type}
                    </span>
                    <span className="text-[10px] font-bold text-white bg-white/20 backdrop-blur-md px-2.5 py-1 rounded-md">
                      {selectedResource.category}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-extrabold font-heading text-white line-clamp-2">
                    {selectedResource.title}
                  </h3>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
                
                <div className="text-sm text-slate-700 leading-relaxed font-medium">
                  {selectedResource.description}
                </div>

                {/* Takeaways */}
                <div className="space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#1B365D] flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-[#FF6B00]" /> Key Executive Takeaways:
                  </h4>
                  <div className="space-y-2 text-xs text-slate-700 font-medium">
                    {selectedResource.keyTakeaways.map((takeaway, idx) => (
                      <div key={idx} className="flex items-start gap-2 bg-slate-50 p-2.5 rounded-xl border border-slate-200/80">
                        <CheckCircle2 className="w-4 h-4 text-[#FF6B00] shrink-0 mt-0.5" />
                        <span>{takeaway}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Table of contents if exists */}
                {selectedResource.tableOfContents && (
                  <div className="space-y-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#1B365D]">
                      Table of Contents Overview:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600 font-medium">
                      {selectedResource.tableOfContents.map((chap, idx) => (
                        <div key={idx} className="p-2 rounded-lg bg-slate-100/80 border border-slate-200/60 flex items-center gap-2">
                          <span className="font-bold text-[#FF6B00]">0{idx + 1}.</span>
                          <span>{chap}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Author Info */}
                <div className="p-4 rounded-2xl bg-orange-50/50 border border-orange-200/60 flex items-center gap-4">
                  <img
                    src={selectedResource.author.avatar}
                    alt={selectedResource.author.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-[#FF6B00]"
                  />
                  <div>
                    <div className="text-sm font-bold text-slate-900">{selectedResource.author.name}</div>
                    <div className="text-xs text-slate-600">{selectedResource.author.role}</div>
                    <div className="text-[11px] text-slate-400 mt-0.5">Published {selectedResource.publishedDate} • {selectedResource.fileSize}</div>
                  </div>
                </div>

              </div>

              {/* Modal Footer Actions */}
              <div className="p-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-slate-500 font-medium">
                  File format: <strong className="text-slate-800">{selectedResource.fileSize || 'PDF'}</strong> • <strong className="text-slate-800">{selectedResource.pages || '20+ Pages'}</strong>
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <button
                    onClick={() => setSelectedResource(null)}
                    className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-700 font-bold text-xs hover:bg-slate-100 cursor-pointer"
                  >
                    Close
                  </button>
                  <button
                    onClick={() => {
                      handleDownload(selectedResource.title);
                      setSelectedResource(null);
                    }}
                    className="flex-1 sm:flex-none px-6 py-2.5 rounded-xl bg-[#FF6B00] hover:bg-[#e05e00] text-white font-bold text-xs shadow-md flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download PDF Report</span>
                  </button>
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
};
