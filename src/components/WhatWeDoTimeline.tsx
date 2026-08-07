import React from 'react';
import { motion } from 'motion/react';
import { PROCESS_STEPS } from '../data/mockData';
import { Search, Compass, Calendar, Palette, Code, ShieldCheck, Rocket, TrendingUp } from 'lucide-react';

export const WhatWeDoTimeline: React.FC = () => {
  const icons = [Search, Compass, Calendar, Palette, Code, ShieldCheck, Rocket, TrendingUp];

  return (
    <section className="py-24 bg-[#FFF6EE] relative overflow-hidden border-t border-orange-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-[#FF6B00] uppercase tracking-widest bg-orange-50 px-3.5 py-1.5 rounded-full border border-orange-200 shadow-sm">
            Our 8-Step Execution Method
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mt-4 font-heading">
            How We Turn Ideas Into <span className="text-[#FF6B00]">Market Leaders</span>
          </h2>
          <p className="mt-4 text-base text-slate-600 font-normal">
            A rigorous, battle-tested roadmap ensuring flawless venture launch, regulatory compliance, and international scaling.
          </p>
        </div>

        {/* Timeline Desktop Grid / Mobile Stack */}
        <div className="relative">
          {/* Connecting Background Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#FF6B00] via-[#005DFF] to-emerald-500 -translate-y-1/2 z-0 opacity-30" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {PROCESS_STEPS.map((ps, idx) => {
              const Icon = icons[idx % icons.length];
              return (
                <motion.div
                  key={ps.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: idx * 0.08, duration: 0.5 }}
                  className="p-6 rounded-2xl bg-white border border-slate-200 shadow-md hover:shadow-xl hover:border-[#FF6B00]/40 flex flex-col justify-between group relative transition-all"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-extrabold text-[#FF6B00] font-heading">{ps.step}</span>
                    <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-200 flex items-center justify-center text-[#FF6B00] group-hover:bg-[#FF6B00] group-hover:text-white transition-all shadow-xs">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2 font-heading group-hover:text-[#FF6B00] transition-colors">
                      {ps.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      {ps.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
