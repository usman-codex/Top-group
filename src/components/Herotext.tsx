import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck, Building2, Ship, Truck, Cpu, Plane, Compass } from 'lucide-react';
import heroBgImage from '../assets/images/top_group_hero_banner_1786128739698.jpg';
import fallbackHeroImg from '../assets/images/hero_trade_bg_1785836814950.jpg';


interface HeroProps {
  onOpenContact: () => void;
  onNavigateSection: (sectionId: string) => void;
  onSelectCompany: (companyId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact, onNavigateSection }) => {
  const [bgSrc, setBgSrc] = useState(heroBgImage);

  return (
    <section id="hero" className="relative min-h-[85vh] sm:min-h-screen pt-40 pb-20 md:pt-40 md:pb-28 flex items-center overflow-hidden bg-slate-950 text-white">
    {/* Background Image & Gradient Overlay Layer */}
      {/* Background Image & Gradient Overlay Layer */}
      <div className="absolute inset-x-0 top-20 bottom-0 z-0 overflow-hidden">
        <img 
          src={bgSrc} 
          alt="TOP GROUP Global Logistics & Trade Network Background" 
          className="w-full h-full object-cover object-[center_45%] brightness-90"
          referrerPolicy="no-referrer"
          onError={() => {
            if (bgSrc !== fallbackHeroImg) {
              setBgSrc(fallbackHeroImg);
            } else {
              setBgSrc('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=2000');
            }
          }}
        />
      
      </div>


    
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-3xl space-y-6 text-left">
          
          {/* Small Label Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/20 border border-orange-500/40 text-xs font-bold tracking-widest text-orange-400 uppercase shadow-lg backdrop-blur-md"
          >
            <span className="w-2 h-2 rounded-full bg-[#FF6B00] animate-ping"></span>
            TRADE • TRUST • TOGETHER
          </motion.div>

          {/* Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15] font-heading drop-shadow-md"
          >
            <span className="block text-white">
              Group of <span className="text-[#FF6B00] relative inline-block">Companies<span className="absolute bottom-1 left-0 w-full h-1 bg-orange-500/80 rounded-full"></span></span>
            </span>
            <span className="block mt-3 text-2xl sm:text-3xl lg:text-4xl font-normal italic text-slate-200">
              “One Group, Multiple Solutions”
            </span>
          </motion.h1>

          {/* Paragraph */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl drop-shadow-sm"
          >
            TOP GROUP is a diversified global business ecosystem empowering companies across technology, international trade, education, travel, hospitality, fintech, and digital innovation. We transform ideas into scalable market leaders through strategic execution.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
          >
            <button
              onClick={() => onNavigateSection('companies')}
              className="px-8 py-4 rounded-full font-bold text-base text-white btn-orange-gradient flex items-center justify-center gap-3 cursor-pointer group shadow-xl hover:shadow-orange-500/30 hover:scale-105 transition-all"
            >
              <span>Explore Our Ecosystem</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onOpenContact}
              className="px-8 py-4 rounded-full font-bold text-base text-white bg-slate-900/80 hover:bg-[#1B365D] border border-slate-700 hover:border-[#1B365D] transition-all flex items-center justify-center gap-3 cursor-pointer backdrop-blur-md shadow-lg hover:shadow-blue-900/40 hover:scale-105"
            >
              <span>Book a Consultation</span>
            </button>
          </motion.div>

          {/* Trust Highlights Strip */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="pt-8 border-t border-white/15 grid grid-cols-3 gap-6 text-left max-w-2xl"
          >
            <div>
              <div className="text-3xl font-extrabold text-[#FF6B00] font-heading">15+</div>
              <div className="text-xs font-semibold text-slate-300 mt-0.5">Sister Ventures</div>
            </div>
            <div>
              <div className="text-3xl font-extrabold text-white font-heading">38+</div>
              <div className="text-xs font-semibold text-slate-300 mt-0.5">Global Trade Routes</div>
            </div>
            <div>
              <div className="text-3xl font-extrabold text-blue-400 font-heading">$2.4B+</div>
              <div className="text-xs font-semibold text-slate-300 mt-0.5">Ecosystem Value</div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
