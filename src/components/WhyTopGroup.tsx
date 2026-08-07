import React from 'react';
import { motion } from 'motion/react';
import { BarChart3, Cpu, Globe2, ShieldCheck, ArrowUpRight } from 'lucide-react';

interface WhyTopGroupProps {
  onNavigateSection: (sectionId: string) => void;
}

export const WhyTopGroup: React.FC<WhyTopGroupProps> = ({ onNavigateSection }) => {
  const cards = [
    {
      id: '1',
      title: (
  <>
    Technology <span className="normal-amp">&</span> Innovation
  </>
),
      description: 'Institutional-grade market entry positioning, capital deployment, and cross-border M&A advisory engineered for high-growth ventures.',
      icon: BarChart3,
      stat: '3.4x Average Revenue Growth',
      accent: 'from-[#FF6B00] to-orange-400'
    },
    {
      id: '2',
      title: 'Technology & Innovation',
      description: 'Proprietary agentic AI systems, modern cloud microservices, and industry 4.0 IoT manufacturing pipelines embedded across all ventures.',
      icon: Cpu,
      stat: '100% In-House Software IP',
      accent: 'from-blue-500 to-blue-700'
    },
    {
      id: '3',
      title: 'Global Business Network',
      description: 'Direct bilateral relationships with ministries, customs authorities, port operators, and financial institutions across 38+ nations.',
      icon: Globe2,
      stat: '38+ Countries Reached',
      accent: 'from-[#FF6B00] to-amber-500'
    },
    {
      id: '4',
      title: 'End-to-End Execution',
      description: 'From initial seed capitalization to global distribution, legal compliance, and daily operations, we deliver turnkey commercial success.',
      icon: ShieldCheck,
      stat: '99.4% SLA Compliance Rate',
      accent: 'from-blue-600 to-indigo-600'
    }
  ];

  return (
    <section className="py-20 bg-[#FFF6EE] relative overflow-hidden border-t border-orange-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs font-bold text-[#FF6B00] uppercase tracking-widest bg-orange-50 px-3 py-1 rounded-full border border-orange-200 shadow-sm">
              Why Partner With Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 font-heading">
              The TOP GROUP Advantage
            </h2>
          </div>
          <p className="text-slate-600 text-sm max-w-md mt-4 md:mt-0 font-normal">
            Uniting deep domain expertise, sovereign trade relationships, and cutting-edge software engineering to build resilient market leaders.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: index * 0.12, duration: 0.6 }}
                className="p-6 rounded-2xl bg-white border border-slate-200 shadow-md hover:shadow-xl hover:border-[#FF6B00]/40 flex flex-col justify-between group relative overflow-hidden transition-all"
              >
                {/* Top Accent Line */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${card.accent} opacity-80 group-hover:h-1.5 transition-all`} />

                <div>
                  <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-200 flex items-center justify-center text-[#FF6B00] group-hover:rotate-6 transition-all mb-5 shadow-sm">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 font-heading group-hover:text-[#FF6B00] transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-6 font-normal">
                    {card.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-[#FF6B00]">{card.stat}</span>
                  <div 
                    onClick={() => onNavigateSection('capabilities')}
                    className="w-7 h-7 rounded-full bg-slate-100 group-hover:bg-[#FF6B00] flex items-center justify-center text-slate-600 group-hover:text-white transition-all cursor-pointer"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
