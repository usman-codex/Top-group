import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, Cpu, Container, Navigation, ArrowRight, CheckCircle2 } from 'lucide-react';
import { SERVICES } from '../data/mockData';

interface BusinessServicesProps {
  onOpenContact: () => void;
}

export const BusinessServices: React.FC<BusinessServicesProps> = ({ onOpenContact }) => {
  const iconMap: Record<string, React.ElementType> = {
    Briefcase,
    Zap: Cpu,
    Truck: Container,
    Navigation
  };

  return (
    <section className="py-24 bg-[#FFF6EE] relative overflow-hidden border-t border-orange-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-[#FF6B00] uppercase tracking-widest bg-orange-50 px-3.5 py-1.5 rounded-full border border-orange-200 shadow-sm">
            Tailored Enterprise Solutions
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mt-4 font-heading">
            Commercial <span className="text-[#FF6B00]">Services</span> & Advisory
          </h2>
          <p className="mt-4 text-base text-slate-600 font-normal">
            Discover how TOP GROUP's specialized advisory and operational divisions accelerate corporate growth.
          </p>
        </div>

        {/* 2x2 Large Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((srv, idx) => {
            const IconComponent = iconMap[srv.iconName] || Briefcase;
            return (
              <motion.div
                key={srv.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="p-8 rounded-3xl bg-white border border-slate-200 shadow-md hover:shadow-2xl hover:shadow-orange-500/15 hover:border-[#FF6B00] flex flex-col justify-between group transition-all duration-300"
              >
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-orange-50 border border-orange-200 flex items-center justify-center text-[#FF6B00] group-hover:bg-[#FF6B00] group-hover:text-white group-hover:border-[#FF6B00] group-hover:scale-110 transition-all duration-300 shadow-sm">
                    <IconComponent className="w-7 h-7" />
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 font-heading group-hover:text-[#FF6B00] transition-colors">
                    {srv.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {srv.description}
                  </p>

                  <div className="pt-2 space-y-2">
                    <div className="text-xs font-bold uppercase tracking-wider text-[#FF6B00]">Key Deliverables</div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {srv.benefits.map((b) => (
                        <div key={b} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                          <CheckCircle2 className="w-4 h-4 text-[#FF6B00] shrink-0" />
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={onOpenContact}
                    className="relative overflow-hidden px-6 py-2.5 rounded-full text-xs font-bold text-[#FF6B00] hover:text-white bg-white border border-orange-300/80 flex items-center gap-2 shadow-md hover:shadow-lg cursor-pointer transition-all duration-300 hover:scale-105 group/btn"
                  >
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#FF6B00] to-[#FF8800] translate-x-full group-hover/btn:translate-x-0 transition-transform duration-500 ease-out z-0" />
                    <span className="relative z-10 flex items-center gap-2">
                      <span>Request Proposal</span>
                      <ArrowRight className="w-4 h-4 text-[#FF6B00] group-hover/btn:text-white group-hover/btn:translate-x-1 transition-all duration-300" />
                    </span>
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
