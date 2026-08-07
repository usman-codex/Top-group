import React from 'react';
import { motion } from 'motion/react';
import { 
  Cpu, 
  Landmark, 
  HeartPulse, 
  GraduationCap, 
  PlaneTakeoff, 
  UtensilsCrossed, 
  Building2, 
  Factory, 
  Container, 
  ShoppingBag, 
  Building, 
  Rocket 
} from 'lucide-react';
import { INDUSTRIES } from '../data/mockData';

export const IndustriesServed: React.FC = () => {
  const iconMap: Record<string, React.ElementType> = {
    Laptop: Cpu,
    Coins: Landmark,
    Activity: HeartPulse,
    BookOpen: GraduationCap,
    Plane: PlaneTakeoff,
    Utensils: UtensilsCrossed,
    Building2: Building2,
    Factory: Factory,
    Ship: Container,
    ShoppingBag: ShoppingBag,
    Home: Building,
    Rocket: Rocket
  };

  return (
    <section className="py-24 bg-gradient-to-b from-[#FFF8F2] via-[#FFF3E6] to-[#FFF8F2] relative overflow-hidden border-t border-orange-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-xs font-bold text-[#FF6B00] uppercase tracking-widest bg-orange-50 px-3.5 py-1.5 rounded-full border border-orange-200 shadow-sm"
          >
            Global Industry Reach
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mt-4 font-heading"
          >
            Helping Every Industry <span className="text-[#FF6B00]">Grow</span>
          </motion.h2>
          <p className="mt-4 text-base text-slate-600 font-normal">
            Our multi-disciplinary ecosystem creates tailored commercial models, logistics channels, and software applications for diverse economic sectors.
          </p>
        </div>

        {/* Bento Grid Layout (12 Cards) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {INDUSTRIES.map((ind, idx) => {
            const IconComponent = iconMap[ind.icon] || Cpu;
            return (
              <motion.div
                key={ind.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                transition={{ delay: idx * 0.05, duration: 0.5 }}
                className="p-5 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm hover:shadow-md hover:border-[#FF6B00]/40 flex flex-col justify-between group cursor-pointer transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-200 flex items-center justify-center text-[#FF6B00] group-hover:bg-[#FF6B00] group-hover:text-white transition-all mb-4 shadow-xs">
                  <IconComponent className="w-5 h-5" />
                </div>

                <div>
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-[#FF6B00] transition-colors font-heading">
                    {ind.name}
                  </h3>
                  <span className="text-[11px] font-semibold text-slate-500 mt-1 block">
                    {ind.count}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
