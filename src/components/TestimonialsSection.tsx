import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote, Play, CheckCircle } from 'lucide-react';
import { TESTIMONIALS } from '../data/mockData';

interface TestimonialsSectionProps {
  onOpenVideo: () => void;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ onOpenVideo }) => {
  return (
    <section className="py-24 bg-[#FFF5EB] relative overflow-hidden border-t border-orange-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-[#FF6B00] uppercase tracking-widest bg-orange-50 px-3.5 py-1.5 rounded-full border border-orange-200 shadow-sm">
            Client Voices
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mt-4 font-heading">
            Trusted by Industry <span className="text-[#FF6B00]">Leaders</span>
          </h2>
          <p className="mt-4 text-base text-slate-600 font-normal">
            Read what global executives and trade ministers say about partnering with TOP GROUP divisions.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="p-8 rounded-3xl bg-slate-50 border border-slate-200 shadow-md hover:shadow-xl hover:border-[#FF6B00]/40 flex flex-col justify-between group relative transition-all"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-slate-200 group-hover:text-orange-200 transition-colors" />

              <div className="space-y-4">
                {/* Rating Stars */}
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                <p className="text-sm text-slate-700 leading-relaxed italic font-normal">
                  "{t.review}"
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-200 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img src={t.avatar} alt={t.clientName} className="w-12 h-12 rounded-full object-cover border border-slate-200" />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 font-heading">{t.clientName}</h4>
                    <p className="text-[11px] text-slate-500 font-medium">{t.position}</p>
                    <p className="text-[10px] font-bold text-[#FF6B00]">{t.company}</p>
                  </div>
                </div>

                {t.hasVideo && (
                  <button
                    onClick={onOpenVideo}
                    className="p-2.5 rounded-full bg-orange-50 hover:bg-[#FF6B00] text-[#FF6B00] hover:text-white border border-orange-200 transition-all cursor-pointer shadow-sm"
                    title="Play Video Review"
                  >
                    <Play className="w-4 h-4 fill-current" />
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
