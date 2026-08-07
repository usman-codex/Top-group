import React from 'react';
import { motion } from 'motion/react';
import { Target, Compass, Award, Globe, Zap, Leaf, Play, CheckCircle2 } from 'lucide-react';

interface AboutSectionProps {
  onOpenVideo: () => void;
  onNavigateSection: (sectionId: string) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenVideo, onNavigateSection }) => {
  const pillars = [
    { icon: Target, title: 'Our Mission', desc: 'To catalyze sustainable economic growth by building, scaling, and financing world-class enterprises across Eurasian and global markets.' },
    { icon: Compass, title: 'Our Vision', desc: 'To become the premier enterprise incubator and operational powerhouse connecting trade, finance, and software innovation globally.' },
    { icon: Award, title: 'Core Values', desc: 'Integrity in partnerships, relentless technological execution, corporate transparency, and long-term economic stewardship.' },
    { icon: Globe, title: 'Global Network', desc: 'Established trade corridors, diplomatic relations, and active partner offices across Central Asia, the Middle East, Europe, and Asia Pacific.' },
    { icon: Zap, title: 'Innovation', desc: 'Integrating cutting-edge agentic AI, cloud robotics, and automated logistics into traditional enterprise operations.' },
    { icon: Leaf, title: 'Sustainability', desc: 'Commitment to carbon-neutral trade routes, energy-efficient smart hardware manufacturing, and ethical human capital development.' }
  ];

  return (
    <section id="about" className="py-24 relative bg-gradient-to-b from-[#FFF5EB] via-[#FFF8F0] to-[#FFF3E6] overflow-hidden border-t border-orange-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-xs font-bold text-[#FF6B00] uppercase tracking-widest mb-4 shadow-sm"
          >
            About TOP GROUP Ecosystem
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-heading"
          >
            Building Businesses That <span className="text-[#FF6B00]">Matter</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal"
          >
            TOP GROUP is a diversified business ecosystem empowering companies across technology, international trade, education, travel, hospitality, fintech, and digital innovation. We transform ideas into scalable businesses through strategy, execution, and long-term partnerships.
          </motion.p>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column Content & Feature Grid */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-lg space-y-4">
              <h3 className="text-xl font-bold text-slate-900 font-heading flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#FF6B00]" />
                Parent Ecosystem Behind Industry Leaders
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed font-normal">
                Rather than operating as a passive holding firm, TOP GROUP provides active executive stewardship, shared technological infrastructure, regulatory compliance clearing, and institutional growth capital to each sister enterprise.
              </p>
            </div>

            {/* 6 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {pillars.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="p-4 rounded-xl bg-white border border-slate-200 hover:border-[#FF6B00]/50 shadow-sm hover:shadow-md transition-all group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-orange-50 border border-orange-200 flex items-center justify-center text-[#FF6B00] group-hover:scale-110 transition-all mb-3">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="text-base font-bold text-slate-900 mb-1 font-heading">{item.title}</h4>
                    <p className="text-xs text-slate-500 leading-relaxed font-normal">{item.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column Video Preview / Interactive Media Block */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-3xl overflow-hidden bg-white border border-slate-200 p-2 shadow-xl group">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-slate-900">
                <img 
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80" 
                  alt="TOP GROUP Headquarters & Strategic Meeting"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-85"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent" />

                {/* Video Play Button Trigger */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10">
                  <button
                    onClick={onOpenVideo}
                    className="w-20 h-20 rounded-full bg-gradient-to-br from-[#FF6B00] to-[#005DFF] p-0.5 shadow-2xl shadow-orange-500/50 hover:scale-110 transition-transform cursor-pointer group/btn"
                    aria-label="Play Corporate Overview Video"
                  >
                    <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center pl-1">
                      <Play className="w-8 h-8 text-white fill-white group-hover/btn:scale-110 transition-transform" />
                    </div>
                  </button>
                  <span className="mt-4 text-sm font-bold text-white tracking-wide">Watch Corporate Overview</span>
                  <span className="text-xs text-slate-300 font-medium">2 min 45 sec • 4K Film</span>
                </div>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-white/90 backdrop-blur-md border border-slate-200/50 shadow-md">
                  <div className="text-xs font-bold text-[#FF6B00] uppercase tracking-wider">Tashkent • Dubai • London</div>
                  <div className="text-sm font-extrabold text-slate-900 mt-0.5">Global Executive Headquarters</div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
