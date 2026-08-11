import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  TrendingUp, Compass, Target, ArrowRight, ArrowLeft, CheckCircle2, 
  Mail, Phone, MapPin, Sparkles, Building2, Users, Award, 
  Check, Send, Layers, Briefcase, BarChart3, Globe2, ShieldCheck, Zap
} from 'lucide-react';

interface BusinessStrategyPageProps {
  onBackToHome: () => void;
  onOpenContact: () => void;
  onSelectCompany?: (companyId: string) => void;
}

export const BusinessStrategyPage: React.FC<BusinessStrategyPageProps> = ({
  onBackToHome,
  onOpenContact
}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', company: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setModalOpen(false);
      setFormSubmitted(false);
      setFormData({ name: '', phone: '', email: '', company: '', message: '' });
    }, 2500);
  };

  const capabilities = [
    {
      icon: Compass,
      title: 'Market Entry & Feasibility',
      description: 'Comprehensive market sizing, competitor benchmarking, regulatory mapping, and strategic entry roadmaps for Eurasian and international markets.',
      tag: 'Strategic Expansion',
      highlights: ['Regulatory Clearance', 'Competitor Benchmarking', 'Geographic Expansion']
    },
    {
      icon: Target,
      title: 'Corporate Restructuring & Governance',
      description: 'Re-engineering operational workflows, optimizing board governance, and restructuring corporate entities for peak agility and profitability.',
      tag: 'Organizational Agility',
      highlights: ['Process Optimization', 'Board Advisory', 'KPI & OKR Frameworks']
    },
    {
      icon: Briefcase,
      title: 'Cross-Border M&A Advisory',
      description: 'End-to-end deal structuring, commercial due diligence, valuation modeling, and post-merger integration for high-impact transactions.',
      tag: 'M&A & Ventures',
      highlights: ['Valuation Modeling', 'Commercial Due Diligence', 'Post-Merger Integration']
    },
    {
      icon: BarChart3,
      title: 'Venture Building & Acceleration',
      description: 'Incubating new corporate ventures from concept validation and business model design to capital deployment and rapid scaling.',
      tag: 'Innovation & Growth',
      highlights: ['Concept Validation', 'Capital Allocation', 'Scale-up Strategy']
    },
    {
      icon: Globe2,
      title: 'Supply Chain & Trade Strategy',
      description: 'Structuring resilient cross-border supply chains, trade corridors, and logistics networks across Central Asia and global trade hubs.',
      tag: 'Trade & Logistics',
      highlights: ['Corridor Optimization', 'Customs Alignment', 'Risk Mitigation']
    },
    {
      icon: ShieldCheck,
      title: 'Commercial Risk & Compliance',
      description: 'Mitigating geopolitical, financial, and market risks with proactive governance, sanctions compliance, and crisis response frameworks.',
      tag: 'Risk Management',
      highlights: ['Sanctions Compliance', 'Financial Hedging', 'Crisis Contingency']
    }
  ];

  const valuePillars = [
    {
      title: 'Deep Eurasian & Global Expertise',
      desc: '20+ years of operational history with strategic networks across Uzbekistan, Central Asia, Europe, and Asia-Pacific.',
      stat: '20+ Yrs',
      statLabel: 'Market Presence'
    },
    {
      title: '150+ Corporate Ventures Structured',
      desc: 'Advised, built, and launched market-leading entities across industrial, fintech, trade, and technology sectors.',
      stat: '150+',
      statLabel: 'Ventures Advised'
    },
    {
      title: 'End-to-End Operational Execution',
      desc: 'We do not just hand over slide decks — our teams partner with leadership to execute strategy on the ground.',
      stat: '100%',
      statLabel: 'Execution Focus'
    },
    {
      title: '$2.5B+ In Valuations Created',
      desc: 'Demonstrated track record of scaling enterprise valuation through strategic clarity and commercial discipline.',
      stat: '$2.5B+',
      statLabel: 'Value Created'
    },
    {
      title: 'Multilingual Strategic Leadership',
      desc: 'Advisors and negotiators fluent in international business standards, local regulations, and cross-border trade.',
      stat: 'Global',
      statLabel: 'Advisory Team'
    },
    {
      title: 'Proprietary Market Intelligence',
      desc: 'Real-time industry insights, trade data, and local commercial intelligence powering every decision.',
      stat: 'Data-First',
      statLabel: 'Insights Engine'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-[#FF6B00] selection:text-white pt-16">
      
      {/* HERO SECTION */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-b from-orange-50/90 via-white to-amber-50/40 text-slate-800 overflow-hidden border-b border-orange-100">
        {/* Ambient Glows */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-[380px] bg-gradient-to-tr from-orange-200/40 via-amber-100/50 to-orange-300/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/3 -right-20 w-80 h-80 bg-orange-100/60 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(#FF6B00_1px,transparent_1px)] [background-size:28px_28px] opacity-[0.12] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100/90 border border-orange-200 text-[#FF6B00] text-xs font-black uppercase tracking-widest shadow-xs">
            ENTERPRISE CAPABILITY • CORPORATE GROWTH
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-[#1B365D] tracking-tight font-heading leading-tight mx-auto text-center">
            Business Strategy & Corporate Venture Building
          </h1>

          <p className="text-lg sm:text-xl font-medium text-slate-600 leading-relaxed text-center mx-auto max-w-3xl">
            Data-backed market positioning, competitive intelligence, cross-border merger structuring, and corporate growth frameworks across Eurasian and global markets.
          </p>

          <div className="py-3 px-6 rounded-2xl bg-white/80 border border-orange-200/90 text-slate-700 text-sm sm:text-base italic text-center mx-auto max-w-2xl shadow-xs backdrop-blur-sm">
            "We transform complex commercial challenges into structured growth engines, aligning capital, governance, and market opportunity."
          </div>

          {/* Action Buttons */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onOpenContact}
              className="px-7 py-3.5 rounded-xl font-extrabold text-sm text-white bg-[#FF6B00] hover:bg-orange-600 shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 transition-all flex items-center gap-2 cursor-pointer group"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <button
              onClick={() => setModalOpen(true)}
              className="px-7 py-3.5 rounded-xl font-extrabold text-sm text-[#1B365D] bg-white hover:bg-orange-50/80 border border-slate-200 hover:border-orange-300 transition-all flex items-center gap-2 cursor-pointer shadow-xs"
            >
              <Phone className="w-4 h-4 text-[#FF6B00]" />
              <span>Consult Specialists</span>
            </button>
          </div>

          {/* Trust Strip */}
          <div className="mt-12 pt-8 border-t border-orange-200/60 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center max-w-4xl mx-auto">
            <div className="bg-white/90 border border-orange-100 rounded-2xl p-5 shadow-xs space-y-1">
              <div className="text-3xl sm:text-4xl font-black text-[#FF6B00] font-heading">20+ Years</div>
              <div className="text-xs sm:text-sm font-bold text-slate-500 uppercase tracking-wider">Strategic Excellence</div>
            </div>

            <div className="bg-white/90 border border-orange-100 rounded-2xl p-5 shadow-xs space-y-1">
              <div className="text-3xl sm:text-4xl font-black text-[#1B365D] font-heading">150+</div>
              <div className="text-xs sm:text-sm font-bold text-slate-500 uppercase tracking-wider">Corporate Ventures</div>
            </div>

            <div className="bg-white/90 border border-orange-100 rounded-2xl p-5 shadow-xs space-y-1">
              <div className="text-3xl sm:text-4xl font-black text-[#FF6B00] font-heading">$2.5B+</div>
              <div className="text-xs sm:text-sm font-bold text-slate-500 uppercase tracking-wider">Valuations Created</div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1 — OVERVIEW & STRATEGIC FOUNDATION */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-[#FF6B00] text-xs font-black uppercase tracking-widest">
              STRATEGIC FOUNDATION
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#1B365D] tracking-tight font-heading">
              Transforming Vision into High-Growth Market Reality
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              TOP GROUP's strategy arm partners with enterprise founders, government stakeholders, and multi-national groups to design scalable business models. We combine rigorous quantitative research with on-the-ground operational execution in Eurasian emerging markets and international trade corridors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-orange-100 text-[#FF6B00] flex items-center justify-center font-black">01</div>
              <h3 className="text-lg font-bold text-[#1B365D]">Data-Driven Positioning</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We analyze micro and macro-economic fundamentals, competitive moats, and consumer dynamics to pinpoint precise market entry points.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-orange-100 text-[#FF6B00] flex items-center justify-center font-black">02</div>
              <h3 className="text-lg font-bold text-[#1B365D]">M&A & Joint Venture Structuring</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Structuring complex cross-border alliances, equity partnerships, and joint ventures with robust legal and commercial safeguards.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-orange-100 text-[#FF6B00] flex items-center justify-center font-black">03</div>
              <h3 className="text-lg font-bold text-[#1B365D]">Operational Excellence</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Optimizing corporate governance, executive alignment, and resource allocation to ensure strategy seamlessly converts to profit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — CORE CAPABILITIES & OFFERINGS */}
      <section className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-[#FF6B00] text-xs font-black uppercase tracking-widest">
              WHAT WE DO
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#1B365D] tracking-tight font-heading">
              Strategic Advisory & Venture Architecture
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              End-to-end consulting, venture acceleration, and corporate advisory built for modern enterprise scale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap, idx) => {
              const IconComp = cap.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-xs hover:shadow-xl hover:border-orange-300 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-200 text-[#FF6B00] flex items-center justify-center group-hover:bg-[#FF6B00] group-hover:text-white transition-colors">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#FF6B00] bg-orange-50/80 px-2.5 py-0.5 rounded-full border border-orange-200">
                        {cap.tag}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-[#1B365D] group-hover:text-[#FF6B00] transition-colors">
                      {cap.title}
                    </h3>

                    <p className="text-sm text-slate-600 leading-relaxed">
                      {cap.description}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-slate-100 space-y-2">
                    {cap.highlights.map((h, hIdx) => (
                      <div key={hIdx} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                        <Check className="w-3.5 h-3.5 text-[#FF6B00] shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 3 — STRATEGIC IMPACT & WHY CHOOSE US */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-[#FF6B00] text-xs font-black uppercase tracking-widest">
              WHY TOP GROUP STRATEGY
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#1B365D] tracking-tight font-heading">
              Trusted Strategy Partners for Regional & Global Leaders
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Why business leaders, sovereign investors, and enterprise conglomerates select TOP GROUP for strategic transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {valuePillars.map((pillar, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:bg-white hover:shadow-lg hover:border-orange-200 transition-all space-y-3 relative overflow-hidden"
              >
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-black text-[#FF6B00] font-heading">{pillar.stat}</span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">{pillar.statLabel}</span>
                </div>

                <h3 className="text-base font-bold text-[#1B365D]">
                  {pillar.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MODAL */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative text-left">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 font-bold text-lg w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center"
            >
              ✕
            </button>

            {formSubmitted ? (
              <div className="text-center py-8 space-y-3">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-black text-[#1B365D]">Consultation Requested!</h3>
                <p className="text-sm text-slate-600">
                  Our Strategy Advisory team will contact you within 24 hours.
                </p>
              </div>
            ) : (
              <div className="space-y-5">
                <div>
                  <span className="text-xs font-extrabold text-[#FF6B00] uppercase tracking-wider">
                    Business Strategy Advisory
                  </span>
                  <h3 className="text-2xl font-black text-[#1B365D] mt-1">
                    Consult Strategy Specialists
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    TOP GROUP Executive Strategy Desk
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Farrukh Tashpulatov"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#FF6B00]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Phone / WhatsApp *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+998 90 123 45 67"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#FF6B00]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Company / Organization</label>
                    <input
                      type="text"
                      placeholder="e.g. Global Tech Partners"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#FF6B00]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Brief Overview / Goals</label>
                    <textarea
                      rows={3}
                      placeholder="Describe your expansion, M&A or growth objective..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#FF6B00]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl font-bold text-sm text-white bg-[#FF6B00] hover:bg-orange-600 transition-colors shadow-md flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Request Strategy Session</span>
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
};
