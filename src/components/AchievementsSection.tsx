import React from 'react';
import { motion } from 'motion/react';
import { Award, ShieldCheck, CheckCircle, Star } from 'lucide-react';
import { CERTIFICATIONS } from '../data/mockData';

export const AchievementsSection: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-[#FFF8F0] via-[#FFF4E8] to-[#FFF8F0] relative overflow-hidden border-t border-orange-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-[#FF6B00] uppercase tracking-widest bg-orange-50 px-3.5 py-1.5 rounded-full border border-orange-200 shadow-sm">
            Sovereign Standard
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mt-4 font-heading">
            Our <span className="text-[#FF6B00]">Achievements</span> & Accreditations
          </h2>
          <p className="mt-4 text-base text-slate-600 font-normal">
            Certified by global compliance bodies and enterprise tech giants to guarantee security, quality, and sovereign reliability.
          </p>
        </div>

        {/* Certifications Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((cert, idx) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: idx * 0.08, duration: 0.5 }}
              className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm hover:shadow-md hover:border-[#FF6B00]/40 flex items-start gap-4 group transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-200 flex items-center justify-center text-[#FF6B00] shrink-0 group-hover:scale-110 transition-transform shadow-xs">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-base font-bold text-slate-900 font-heading group-hover:text-[#FF6B00] transition-colors">
                    {cert.name}
                  </h3>
                  <span className="px-2.5 py-0.5 rounded-full bg-orange-50 border border-orange-200 text-[10px] font-bold text-[#FF6B00]">
                    {cert.badge}
                  </span>
                </div>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed font-normal">
                  {cert.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
