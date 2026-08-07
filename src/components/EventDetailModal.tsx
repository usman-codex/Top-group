import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, MapPin, Users, Award, Image as ImageIcon } from 'lucide-react';
import { MediaEvent } from '../types';

interface EventDetailModalProps {
  event: MediaEvent | null;
  onClose: () => void;
  onOpenContact: () => void;
}

export const EventDetailModal: React.FC<EventDetailModalProps> = ({ event, onClose, onOpenContact }) => {
  if (!event) return null;

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

          {/* Banner */}
          <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-slate-100">
            <img 
              src={event.coverImage} 
              alt={event.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

            <div className="absolute bottom-6 left-6 right-6 space-y-2">
              <span className="px-3 py-1 rounded-full bg-[#FF6B00] text-xs font-bold text-white uppercase tracking-widest shadow-xs">
                {event.category}
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-heading">
                {event.title}
              </h2>
              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-200 font-semibold">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-orange-400" />
                  {event.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-orange-400" />
                  {event.location}
                </span>
              </div>
            </div>
          </div>

          {/* Body */}
          <div className="p-6 sm:p-8 space-y-8">
            
            {/* Story text */}
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-slate-900 font-heading">Event Story & Key Highlights</h3>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                {event.fullStory}
              </p>
            </div>

            {/* Gallery Images */}
            {event.galleryImages.length > 0 && (
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-blue-600 flex items-center gap-1.5">
                  <ImageIcon className="w-4 h-4" /> Photo Highlights
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {event.galleryImages.map((img, idx) => (
                    <div key={idx} className="aspect-video rounded-xl overflow-hidden border border-slate-200 shadow-xs group">
                      <img src={img} alt="Gallery highlight" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Key Guests */}
            {event.keyGuests.length > 0 && (
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#FF6B00] flex items-center gap-1.5">
                  <Users className="w-4 h-4" /> Notable Delegates & Dignitaries
                </h4>
                <div className="flex flex-wrap gap-2">
                  {event.keyGuests.map((guest) => (
                    <span key={guest} className="px-3 py-1.5 rounded-lg bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-700">
                      {guest}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Certificates */}
            {event.certificates && event.certificates.length > 0 && (
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#FF6B00] flex items-center gap-1.5">
                  <Award className="w-4 h-4" /> Commemorative Accreditations
                </h4>
                <div className="space-y-2">
                  {event.certificates.map((cert) => (
                    <div key={cert} className="p-3 rounded-xl bg-orange-50 border border-orange-200 text-xs font-bold text-[#FF6B00] flex items-center gap-2">
                      <Award className="w-4 h-4" />
                      <span>{cert}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Action CTA */}
            <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-500 font-medium">Want to invite TOP GROUP to your summit?</span>
              <button
                onClick={() => {
                  onClose();
                  onOpenContact();
                }}
                className="px-6 py-2.5 rounded-full text-xs font-bold text-white btn-orange-gradient shadow-md hover:scale-105 transition-all cursor-pointer"
              >
                Inquire for Press & Speaking
              </button>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
