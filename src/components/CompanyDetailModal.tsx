import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Globe, Building2, Calendar, Users, Cpu, ArrowUpRight, CheckCircle2, MapPin } from 'lucide-react';
import { Company } from '../types';
import { BrandLogo } from './BrandLogo';

interface CompanyDetailModalProps {
  company: Company | null;
  onClose: () => void;
  onOpenContact: () => void;
}

export const CompanyDetailModal: React.FC<CompanyDetailModalProps> = ({ company, onClose, onOpenContact }) => {
  if (!company) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto bg-slate-900/60 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl border border-slate-200 shadow-2xl bg-white text-slate-900"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-white/90 hover:bg-white text-slate-700 border border-slate-300 shadow-md transition-all cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Banner Header */}
          <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-100">
            <img 
              src={company.coverImage} 
              alt={company.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

            <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="bg-slate-900/90 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/20 shadow-xl flex items-center justify-center">
                  <BrandLogo id={company.slug} size="md" variant="full" darkBg={true} />
                </div>
                <div>
                  <span className="px-3 py-1 rounded-full bg-[#FF6B00] text-xs font-bold text-white uppercase tracking-widest shadow-xs">
                    {company.industry}
                  </span>
                  <h2 className="text-3xl font-extrabold text-white font-heading mt-1">
                    {company.name}
                  </h2>
                  <p className="text-sm text-slate-200 italic font-medium">
                    "{company.tagline}"
                  </p>
                </div>
              </div>

              <a
                href={company.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-full bg-white/20 hover:bg-white/30 border border-white/30 text-xs font-bold text-white flex items-center gap-2 transition-all self-start sm:self-auto shadow-sm"
              >
                <span>Visit Official Site</span>
                <ArrowUpRight className="w-4 h-4 text-orange-400" />
              </a>
            </div>
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-8 space-y-8">
            
            {/* Quick Metadata Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-[#FF6B00]" />
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Headquarters</div>
                  <div className="text-xs font-bold text-slate-900">{company.headquarters}</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-blue-600" />
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Founded</div>
                  <div className="text-xs font-bold text-slate-900">{company.foundedYear}</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Users className="w-5 h-5 text-emerald-600" />
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Workforce</div>
                  <div className="text-xs font-bold text-slate-900">{company.employeeCount} Experts</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Building2 className="w-5 h-5 text-purple-600" />
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Ecosystem Tier</div>
                  <div className="text-xs font-bold text-slate-900">Sister Division</div>
                </div>
              </div>
            </div>

            {/* Overview & Long Description */}
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-slate-900 font-heading flex items-center gap-2">
                <Building2 className="w-5 h-5 text-[#FF6B00]" />
                Executive Profile & Operations
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                {company.longDescription}
              </p>
            </div>

            {/* Key Statistics */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#FF6B00]">Performance Metrics</h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {company.stats.map((st) => (
                  <div key={st.label} className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center">
                    <div className="text-2xl font-extrabold text-slate-900 font-heading">{st.value}</div>
                    <div className="text-xs text-slate-500 font-medium mt-1">{st.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Services Grid */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-blue-600">Core Service Offerings</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {company.keyServices.map((srv) => (
                  <div key={srv} className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#FF6B00] shrink-0" />
                    <span className="text-xs font-medium text-slate-800">{srv}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Pills */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                <Cpu className="w-4 h-4 text-purple-600" /> Technology & Infrastructure Engine
              </h4>
              <div className="flex flex-wrap gap-2">
                {company.techStack.map((tech) => (
                  <span key={tech} className="px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-xs text-[#FF6B00] font-bold">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-slate-500 font-medium">
                Interested in joint venture partnership with {company.name}?
              </div>
              <button
                onClick={() => {
                  onClose();
                  onOpenContact();
                }}
                className="w-full sm:w-auto px-6 py-3 rounded-full text-sm font-bold text-white btn-orange-gradient flex items-center justify-center gap-2 shadow-md cursor-pointer hover:scale-105 transition-all"
              >
                <span>Initiate Business Inquiry</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
