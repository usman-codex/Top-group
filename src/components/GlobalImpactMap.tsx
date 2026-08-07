import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Globe, MapPin, Building2, Users, ArrowUpRight } from 'lucide-react';
import { IMPACT_COUNTRIES } from '../data/mockData';
import { CountryImpact } from '../types';

export const GlobalImpactMap: React.FC = () => {
  const [activeCountry, setActiveCountry] = useState<CountryImpact>(IMPACT_COUNTRIES[0]);

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-[#FF6B00] uppercase tracking-widest bg-orange-50 px-3.5 py-1.5 rounded-full border border-orange-200 shadow-sm">
            Sovereign Reach
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mt-4 font-heading">
            Global <span className="text-[#FF6B00]">Impact</span> & Network Map
          </h2>
          <p className="mt-4 text-base text-slate-600 font-normal">
            Hover over active operational hubs to inspect regional trade routes, corporate offices, and client density.
          </p>
        </div>

        {/* Map Interactive Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Map Vector Stage Left */}
          <div className="lg:col-span-8 relative aspect-[16/9] w-full bg-white rounded-3xl border border-slate-200 shadow-md overflow-hidden p-6 flex items-center justify-center">
            {/* World Map Background Dot Grid Pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(#FF6B00_1.5px,transparent_1.5px)] [background-size:20px_20px] opacity-15" />

            {/* Stylized Map Outline Canvas Graphic */}
            <svg className="w-full h-full opacity-30" viewBox="0 0 1000 500" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M150,150 Q200,100 300,120 T450,160 T600,120 T800,180" stroke="#005DFF" strokeWidth="2" strokeDasharray="4 4" />
              <path d="M200,300 Q350,250 500,280 T750,220" stroke="#FF6B00" strokeWidth="2" strokeDasharray="4 4" />
            </svg>

            {/* Country Pins */}
            {IMPACT_COUNTRIES.map((item) => {
              const isSelected = activeCountry.id === item.id;
              return (
                <div
                  key={item.id}
                  style={{ left: `${item.coordinates.x}%`, top: `${item.coordinates.y}%` }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer z-20 group"
                  onClick={() => setActiveCountry(item)}
                  onMouseEnter={() => setActiveCountry(item)}
                >
                  <div className={`relative flex items-center justify-center transition-all ${isSelected ? 'scale-125' : 'scale-100 hover:scale-110'}`}>
                    <div className={`w-8 h-8 rounded-full p-0.5 shadow-md ${isSelected ? 'bg-gradient-to-r from-[#FF6B00] to-[#005DFF] animate-pulse' : 'bg-slate-200'}`}>
                      <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                        <MapPin className={`w-4 h-4 ${isSelected ? 'text-[#FF6B00]' : 'text-slate-500'}`} />
                      </div>
                    </div>

                    {/* Tooltip Hover Badge */}
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block whitespace-nowrap bg-slate-900 px-3 py-1 rounded-lg text-[10px] text-white border border-slate-700 shadow-xl z-30 font-semibold">
                      {item.country} ({item.status})
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Active Country Details Card Right */}
          <div className="lg:col-span-4">
            <motion.div
              key={activeCountry.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="p-6 rounded-3xl bg-white border border-slate-200 shadow-lg space-y-6"
            >
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div>
                  <span className="text-[10px] font-bold text-[#FF6B00] uppercase tracking-wider">{activeCountry.region}</span>
                  <h3 className="text-2xl font-bold text-slate-900 font-heading">{activeCountry.country}</h3>
                </div>
                <span className="px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-xs font-bold text-[#FF6B00]">
                  {activeCountry.status}
                </span>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm text-slate-800 font-bold">
                  <Users className="w-5 h-5 text-[#FF6B00]" />
                  <span>{activeCountry.clients}</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {activeCountry.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <div className="text-[11px] text-slate-500 font-medium">Connected Divisions: PakCIS Logistics, Travel Ops, FinTech Edge Academy</div>
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
};
