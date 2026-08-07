import React from 'react';
import { motion } from 'motion/react';
import { BarChart3, Code2, Cpu, Server, WalletCards, Globe2, Target, BookOpenCheck, ArrowRight } from 'lucide-react';
import { CAPABILITIES } from '../data/mockData';

interface CapabilitiesGridProps {
  onNavigateSection: (sectionId: string) => void;
  onOpenContact: () => void;
}

export const CapabilitiesGrid: React.FC<CapabilitiesGridProps> = ({ onNavigateSection, onOpenContact }) => {
  const iconMap: Record<string, React.ElementType> = {
    TrendingUp: BarChart3,
    Code2,
    Cpu,
    Cloud: Server,
    CreditCard: WalletCards,
    Globe2,
    Megaphone: Target,
    GraduationCap: BookOpenCheck
  };

  return (
    <section id="capabilities" className="py-24 bg-[#FFF4E8] relative overflow-hidden border-t border-orange-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-[#1B365D] uppercase tracking-widest mb-4 shadow-sm"
          >
            Core Competencies
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-heading"
          >
            Our Enterprise <span className="text-[#1B365D]">Capabilities</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="mt-4 text-base text-slate-600 leading-relaxed font-normal"
          >
            From strategic growth consulting to deep technology software engineering, we empower enterprises with end-to-end execution capabilities.
          </motion.p>
        </div>

        {/* 4 Column Desktop / 2 Column Tablet / 1 Column Mobile Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CAPABILITIES.map((cap, index) => {
            const IconComponent = iconMap[cap.iconName] || BarChart3;
            return (
              <motion.div
                key={cap.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: index * 0.08, duration: 0.6 }}
                whileHover={{ y: -6 }}
                className="p-6 rounded-[24px] bg-white border border-slate-200 shadow-md hover:shadow-2xl hover:shadow-orange-500/20 hover:border-[#FF6B00] flex flex-col justify-between group transition-all duration-300 relative overflow-hidden"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-orange-50 border border-orange-200 flex items-center justify-center text-[#FF6B00] group-hover:bg-[#FF6B00] group-hover:text-white group-hover:border-[#FF6B00] group-hover:rotate-6 transition-all duration-300 mb-5 shadow-sm">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#FF6B00] bg-orange-50 px-2.5 py-0.5 rounded-full border border-orange-200">
                    {cap.category}
                  </span>

                  <h3 className="text-xl font-bold text-slate-900 mt-3 mb-2 font-heading group-hover:text-[#FF6B00] transition-colors">
                    {cap.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed mb-6 font-normal">
                    {cap.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={onOpenContact}
                    className="text-xs font-bold text-slate-900 group-hover:text-[#FF6B00] flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-slate-400 group-hover:text-[#FF6B00]" />
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
