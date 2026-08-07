import React from 'react';
import { motion } from 'motion/react';
import { Globe, Ship, Cpu, Network } from 'lucide-react';
import { COMPANIES } from '../data/mockData';
import { TopGroupLogo } from './TopGroupLogo';
import { BrandLogo } from './BrandLogo';

interface EcosystemGraphicSectionProps {
  onSelectCompany: (companyId: string) => void;
}

export const EcosystemGraphicSection: React.FC<EcosystemGraphicSectionProps> = ({ onSelectCompany }) => {
  return (
    <section className="py-16 bg-slate-900 text-white relative overflow-hidden border-t border-slate-800">
      {/* Background Decorative Accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Description Column */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 space-y-5 text-left"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/20 border border-orange-500/30 text-xs font-bold text-orange-400 uppercase tracking-widest shadow-sm">
              <Network className="w-3.5 h-3.5 text-[#FF6B00]" /> Interactive Network Hub
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading tracking-tight leading-tight">
              Ecosystem <span className="text-[#FF6B00]">Orbit</span> & Venture Map
            </h2>

            <p className="text-slate-300 text-sm leading-relaxed font-normal">
              Click any floating sister venture on the interactive orbit canvas to view its operational profile, executive metrics, and joint venture opportunities.
            </p>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-orange-400">
                <Network className="w-4 h-4" /> Live Interconnected Hub
              </div>
              <p className="text-xs text-slate-400 leading-normal font-normal">
                Connecting trade logistics (PakCIS), aviation (Travel Operations), hospitality (Chicken Charco), smart electronics (Artel), financial engineering (FinTech Edge), and digital media (Vades Group).
              </p>
            </div>
          </motion.div>

          {/* Right Interactive Orbital Canvas */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex items-center justify-center relative py-6"
          >
            <div className="relative w-full aspect-square max-w-[460px] sm:max-w-[500px] rounded-3xl p-6 bg-slate-950 border border-slate-800 shadow-2xl flex items-center justify-center overflow-hidden">
              
              {/* Background Map Grid */}
              <div className="absolute inset-0 bg-[radial-gradient(#005DFF_1px,transparent_1px)] [background-size:18px_18px] opacity-20" />
              
              {/* Central Globe Core */}
              <div className="relative z-10 w-44 h-44 rounded-full bg-gradient-to-tr from-[#FF6B00]/30 to-[#005DFF]/30 p-1 flex items-center justify-center shadow-2xl shadow-orange-500/20 animate-pulse">
                <div className="w-full h-full rounded-full bg-slate-900 flex flex-col items-center justify-center text-center p-3 border border-orange-500/40">
                  <TopGroupLogo size="sm" variant="group" textColor="light" />
                  <span className="text-[9px] text-blue-400 font-bold mt-1">GLOBAL NETWORK</span>
                </div>
              </div>

              {/* Orbital Connecting Ring */}
              <div className="absolute inset-10 rounded-full border border-dashed border-slate-700 animate-spin-slow pointer-events-none" />

              {/* Floating Interactive Venture Logos */}
              {COMPANIES.map((company, index) => {
                const angles = [0, 60, 120, 180, 240, 300];
                const angle = angles[index % angles.length];
                const radius = 150;
                const x = Math.cos((angle * Math.PI) / 180) * radius;
                const y = Math.sin((angle * Math.PI) / 180) * radius;

                return (
                  <motion.div
                    key={company.id}
                    onClick={() => onSelectCompany(company.id)}
                    initial={{ x: 0, y: 0, opacity: 0 }}
                    whileInView={{ x, y, opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ delay: 0.1 + index * 0.1, duration: 0.7, type: 'spring', stiffness: 80 }}
                    whileHover={{ scale: 1.15, zIndex: 30 }}
                    className="absolute z-20 cursor-pointer"
                    style={{
                      transform: `translate(${x}px, ${y}px)`
                    }}
                  >
                    <div className="p-2 sm:p-2.5 rounded-xl bg-slate-900/90 border border-slate-700 hover:border-[#FF6B00] shadow-lg hover:shadow-orange-500/30 flex items-center gap-2 transition-all group backdrop-blur-xl">
                      <BrandLogo id={company.slug} size="sm" variant="full" darkBg={true} />
                    </div>
                  </motion.div>
                );
              })}

              {/* Corner Badges */}
              <div className="absolute top-4 left-4 p-2 rounded-lg bg-slate-900/80 border border-slate-800 flex items-center gap-1.5 text-[10px] font-semibold text-slate-300">
                <Ship className="w-3.5 h-3.5 text-blue-400" /> Maritime & Air Transit
              </div>
              <div className="absolute bottom-4 right-4 p-2 rounded-lg bg-orange-950/60 border border-orange-500/30 flex items-center gap-1.5 text-[10px] font-bold text-orange-400">
                <Cpu className="w-3.5 h-3.5 text-[#FF6B00]" /> Agentic AI Engine
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
