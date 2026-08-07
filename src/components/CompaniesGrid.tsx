import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Building2, ArrowRight, ExternalLink, Globe, MapPin, Calendar, Layers, ShieldCheck } from 'lucide-react';
import { COMPANIES } from '../data/mockData';
import { Company } from '../types';
import { BrandLogo } from './BrandLogo';

interface CompaniesGridProps {
  onSelectCompany: (companyId: string) => void;
}

interface CompanyCardItemProps {
  comp: Company;
  index: number;
  onSelectCompany: (id: string) => void;
}

const INDUSTRY_FALLBACK_IMAGES: Record<string, string> = {
  'pakcis-trade': 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1000',
  'travel-operations': 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=1000',
  'chicken-charco': 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=1000',
  'fintech-edge-institute': 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=1000',
  'psa-uzbekistan': 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&q=80&w=1000',
  'vades-group': 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1000',
  'artel-services': 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000',
  'metro-city-lab': 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1000',
};

const CompanyCardItem: React.FC<CompanyCardItemProps> = ({ comp, index, onSelectCompany }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);
  const [coverSrc, setCoverSrc] = useState<string>(
    comp.coverImage || INDUSTRY_FALLBACK_IMAGES[comp.slug] || 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000'
  );
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current && !videoFailed) {
      videoRef.current.currentTime = 0;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          setVideoFailed(true);
        });
      }
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  const handleCoverError = () => {
    const fallback = INDUSTRY_FALLBACK_IMAGES[comp.slug] || 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000';
    if (coverSrc !== fallback) {
      setCoverSrc(fallback);
    }
  };

  return (
    <motion.div
      layout
      key={comp.id}
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="rounded-2xl bg-white border border-slate-200/90 hover:border-orange-500/50 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden group cursor-pointer"
      onClick={() => onSelectCompany(comp.id)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div>
        {/* Top Banner Cover Image with Video on Hover */}
        <div className="relative aspect-[16/9] overflow-hidden bg-slate-950 border-b border-slate-100">
          {/* Cover Image */}
          <img 
            src={coverSrc} 
            alt={comp.name}
            onError={handleCoverError}
            className={`w-full h-full object-cover transition-all duration-500 ${
              isHovered && !videoFailed ? 'opacity-0 scale-105' : 'opacity-95 group-hover:opacity-100 scale-100'
            }`}
          />

          {/* Video element - plays on hover */}
          {comp.videoUrl && !videoFailed && (
            <video
              ref={videoRef}
              src={comp.videoUrl}
              muted
              loop
              playsInline
              preload="auto"
              onError={() => setVideoFailed(true)}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                isHovered ? 'opacity-100 z-10' : 'opacity-0 pointer-events-none z-0'
              }`}
            />
          )}

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none z-20" />
        </div>

        {/* Card Content Body */}
        <div className="p-6 space-y-4">
          {/* Brand Logo & Industry */}
          <div className="flex items-center justify-between gap-3">
            <BrandLogo id={comp.slug} size="md" />
            <span className="px-2.5 py-1 rounded-full bg-slate-100 text-[11px] font-semibold text-slate-600 shrink-0">
              {comp.industry}
            </span>
          </div>

          {/* Company Name */}
          <div>
            <h3 className="text-xl font-extrabold text-slate-900 font-heading group-hover:text-[#FF6B00] transition-colors line-clamp-1">
              {comp.name}
            </h3>
          </div>

          {/* Description */}
          <p className="text-sm text-slate-600 leading-relaxed line-clamp-3 font-normal">
            {comp.description}
          </p>
        </div>
      </div>

      {/* Card Footer CTA */}
      <div className="px-6 pb-6 pt-2">
        <div className="relative w-full py-3 rounded-xl bg-slate-50 border border-slate-200/80 overflow-hidden text-xs font-bold text-slate-700 group-hover:text-white group-hover:border-[#FF6B00] transition-colors duration-300 flex items-center justify-center gap-2 shadow-2xs">
          {/* Left to right filling background */}
          <div className="absolute inset-0 bg-[#FF6B00] -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />
          <span className="relative z-10 flex items-center gap-2">
            <span>View Division Profile</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export const CompaniesGrid: React.FC<CompaniesGridProps> = ({ onSelectCompany }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    { label: 'All', filter: 'all' },
    { label: 'Trade & Logistics', filter: 'trade' },
    { label: 'Travel & Aviation', filter: 'travel' },
    { label: 'Technology & AI', filter: 'technology' },
    { label: 'Industrial Services', filter: 'industrial' },
    { label: 'Hospitality & F&B', filter: 'hospitality' },
    { label: 'Education & FinTech', filter: 'fintech' },
    { label: 'Healthcare', filter: 'healthcare' }
  ];

  const getCompanyCount = (catFilter: string) => {
    if (catFilter === 'all') return COMPANIES.length;
    return COMPANIES.filter(c => {
      const ind = c.industry.toLowerCase();
      if (catFilter === 'trade') return ind.includes('trade') || ind.includes('logistics');
      if (catFilter === 'travel') return ind.includes('travel') || ind.includes('aviation');
      if (catFilter === 'technology') return ind.includes('technology') || ind.includes('ai') || ind.includes('software');
      if (catFilter === 'industrial') return ind.includes('industrial') || ind.includes('manufacturing');
      if (catFilter === 'hospitality') return ind.includes('hospitality') || ind.includes('f&b') || ind.includes('food');
      if (catFilter === 'fintech') return ind.includes('education') || ind.includes('fintech');
      if (catFilter === 'healthcare') return ind.includes('healthcare') || ind.includes('diagnostics');
      return true;
    }).length;
  };

  const filteredCompanies = COMPANIES.filter(c => {
    if (selectedCategory === 'all') return true;
    const ind = c.industry.toLowerCase();
    if (selectedCategory === 'trade') return ind.includes('trade') || ind.includes('logistics');
    if (selectedCategory === 'travel') return ind.includes('travel') || ind.includes('aviation');
    if (selectedCategory === 'technology') return ind.includes('technology') || ind.includes('ai') || ind.includes('software');
    if (selectedCategory === 'industrial') return ind.includes('industrial') || ind.includes('manufacturing');
    if (selectedCategory === 'hospitality') return ind.includes('hospitality') || ind.includes('f&b') || ind.includes('food');
    if (selectedCategory === 'fintech') return ind.includes('education') || ind.includes('fintech');
    if (selectedCategory === 'healthcare') return ind.includes('healthcare') || ind.includes('diagnostics');
    return true;
  });

  return (
    <section id="companies" className="py-24 sm:py-32 bg-[#FAF8F5] relative overflow-hidden border-t border-amber-900/10">
      {/* Background Architectural Grid Accent */}
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />
      
      {/* Subtle Warm Gradient Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200/80 text-[11px] font-extrabold text-[#FF6B00] uppercase tracking-widest shadow-xs"
          >
            <Building2 className="w-3.5 h-3.5" /> Core Subsidiaries & Operating Divisions
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-heading leading-tight"
          >
            Group Companies & <span className="text-[#FF6B00] underline decoration-orange-300 decoration-4 underline-offset-8">Ventures</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-2xl mx-auto pt-1"
          >
            Empowering 8 specialized market leaders spanning Eurasia, Middle East, and Asia Pacific in trade, aviation, technology, hospitality, and healthcare.
          </motion.p>

          {/* Key Quick Stats Ribbon */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="pt-4 flex items-center justify-center flex-wrap gap-6 text-xs font-semibold text-slate-600 border-t border-slate-200/60 max-w-xl mx-auto mt-6"
          >
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>8 Active Companies</span>
            </div>
            <div className="text-slate-300">•</div>
            <div className="flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5 text-orange-500" />
              <span>38 Global Corridors</span>
            </div>
            <div className="text-slate-300">•</div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
              <span>ISO 9001:2025 Standard</span>
            </div>
          </motion.div>
        </div>

        {/* 8 Company Cards Grid (3 Cards Per Row) */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredCompanies.map((comp, index) => (
              <CompanyCardItem
                key={comp.id}
                comp={comp}
                index={index}
                onSelectCompany={onSelectCompany}
              />
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

