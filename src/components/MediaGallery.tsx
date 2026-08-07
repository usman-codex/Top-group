import React from 'react';
import { motion } from 'motion/react';
import { Camera, Calendar, MapPin, ArrowRight, Image as ImageIcon } from 'lucide-react';
import { MEDIA_EVENTS } from '../data/mockData';
import { MediaEvent } from '../types';

interface MediaGalleryProps {
  onSelectEvent: (event: MediaEvent) => void;
  onNavigateSection?: (sectionId: string) => void;
}

export const MediaGallery: React.FC<MediaGalleryProps> = ({ onSelectEvent, onNavigateSection }) => {
  return (
    <section id="media" className="py-24 bg-gradient-to-b from-[#FFF8F2] via-[#FFF4E8] to-[#FFF8F2] relative overflow-hidden border-t border-orange-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-xs font-bold text-[#FF6B00] uppercase tracking-widest mb-4 shadow-sm"
          >
            <Camera className="w-3.5 h-3.5" /> Media Center & Corporate Culture
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-heading"
          >
            Events, Delegations & <span className="text-[#FF6B00]">Media</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="mt-4 text-base text-slate-600 leading-relaxed font-normal"
          >
            Explore our high-level international economic summits, diplomatic visits, enterprise launches, and global partner conventions.
          </motion.p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {MEDIA_EVENTS.map((event, idx) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="rounded-3xl bg-white border border-slate-200 shadow-md hover:shadow-xl hover:border-[#FF6B00]/40 overflow-hidden flex flex-col justify-between group cursor-pointer transition-all"
              onClick={() => onSelectEvent(event)}
            >
              <div>
                {/* Event Image Banner */}
                <div className="relative aspect-[16/9] overflow-hidden bg-slate-100">
                  <img 
                    src={event.coverImage} 
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-slate-200 text-[11px] font-bold text-[#FF6B00] shadow-sm">
                    {event.category}
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white font-semibold">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-orange-400" />
                      {event.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-orange-400" />
                      {event.location.split(',')[0]}
                    </span>
                  </div>
                </div>

                {/* Event Content */}
                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-bold text-slate-900 font-heading group-hover:text-[#FF6B00] transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 font-normal">
                    {event.shortDesc}
                  </p>
                </div>
              </div>

              {/* Read Story CTA Footer */}
              <div className="p-6 pt-0">
                <div className="relative overflow-hidden w-full py-3 rounded-xl bg-slate-100 border border-slate-200 group-hover:border-[#FF6B00] text-xs font-bold text-slate-900 group-hover:text-white transition-colors duration-300 flex items-center justify-center shadow-xs group-hover:shadow-lg group-hover:shadow-orange-500/30">
                  <span className="absolute inset-0 bg-gradient-to-r from-[#FF6B00] to-[#FF8800] -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <span>Read Full Story & View Gallery</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Dedicated Page Button */}
        {onNavigateSection && (
          <div className="mt-12 text-center">
            <button
              onClick={() => onNavigateSection('media-events')}
              className="px-8 py-3.5 rounded-full text-sm font-extrabold text-white btn-orange-gradient shadow-lg hover:shadow-orange-500/30 hover:scale-105 transition-all inline-flex items-center gap-2 cursor-pointer group"
            >
              <span>Explore Dedicated Media & Events Page</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
