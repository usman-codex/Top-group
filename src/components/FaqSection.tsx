import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQS } from '../data/mockData';

export const FaqSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('Company');
  const [openId, setOpenId] = useState<string | null>('f1');

  const categories = ['Company', 'Services', 'Pricing', 'Projects', 'Partnerships', 'Support'];

  const filteredFaqs = FAQS.filter(f => f.category === activeTab);

  return (
    <section className="py-24 bg-gradient-to-b from-[#FFF5EB] via-[#FFF8F0] to-[#FFF3E6] relative overflow-hidden border-t border-orange-200/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-[#FF6B00] uppercase tracking-widest bg-orange-50 px-3.5 py-1.5 rounded-full border border-orange-200 shadow-sm">
            Got Questions?
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 font-heading">
            Frequently Asked <span className="text-[#FF6B00]">Questions</span>
          </h2>
          <p className="mt-4 text-base text-slate-600 font-normal">
            Everything you need to know about partnering with TOP GROUP divisions.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveTab(cat);
                const first = FAQS.find(f => f.category === cat);
                if (first) setOpenId(first.id);
              }}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeTab === cat
                  ? 'btn-orange-gradient text-white shadow-md'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="rounded-2xl bg-slate-50 border border-slate-200 overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-slate-900 hover:text-[#FF6B00] transition-colors cursor-pointer"
                >
                  <span className="text-sm font-heading">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-blue-600 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#FF6B00]' : ''}`} />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="p-5 pt-0 text-xs text-slate-600 leading-relaxed border-t border-slate-200/60 mt-1 font-normal">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
