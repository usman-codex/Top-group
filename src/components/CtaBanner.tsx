import React from 'react';
import { motion } from 'motion/react';
import { Calendar, ArrowRight } from 'lucide-react';

interface CtaBannerProps {
  onOpenContact: () => void;
  onNavigateSection: (sectionId: string) => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onOpenContact, onNavigateSection }) => {
  return (
    <section className="py-14 relative overflow-hidden bg-gradient-to-b from-white via-orange-50/30 to-white border-t border-slate-200/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="p-6 sm:p-8 lg:p-10 rounded-2xl border border-orange-200/80 shadow-md relative overflow-hidden bg-gradient-to-r from-[#FFF5EB] via-white to-[#EEF5FF] text-center space-y-4">
          
          {/* Background Decorative Mesh Orbs */}
          <div className="absolute -top-10 -left-10 w-48 h-48 bg-orange-200/30 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-blue-200/30 rounded-full blur-2xl pointer-events-none" />

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-orange-200 text-[11px] font-bold text-[#FF6B00] uppercase tracking-widest shadow-xs"
          >
            Start Your Venture Journey
          </motion.div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight font-heading max-w-2xl mx-auto leading-tight">
            Let's Build the <span className="text-[#FF6B00]">Future</span> <span className="text-[#1B365D]">Together</span>
          </h2>

          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto leading-relaxed font-normal">
            Invite TOP GROUP executive leaders to discuss cross-border trade, software development, or strategic joint ventures.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button
              onClick={onOpenContact}
              className="relative overflow-hidden px-6 py-3 rounded-full text-xs sm:text-sm font-bold text-[#FF6B00] hover:text-white bg-white border border-orange-300/80 shadow-md cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg group"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#FF6B00] to-[#FF8800] -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out z-0" />
              <span className="relative z-10 flex items-center justify-center gap-2">
                <Calendar className="w-4 h-4 text-[#FF6B00] group-hover:text-white transition-colors duration-300" />
                <span>Schedule Executive Consultation</span>
              </span>
            </button>

            <button
              onClick={() => onNavigateSection('companies')}
              className="relative overflow-hidden px-6 py-3 rounded-full text-xs sm:text-sm font-bold text-[#1B365D] hover:text-white bg-white border border-slate-300 hover:border-[#1B365D] shadow-xs cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-md group"
            >
              <span className="absolute inset-0 w-full h-full bg-[#1B365D] translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out z-0" />
              <span className="relative z-10 flex items-center justify-center gap-2">
                <span>Explore Our Companies</span>
                <ArrowRight className="w-4 h-4 text-[#1B365D] group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
              </span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
