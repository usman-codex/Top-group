import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Cpu, Bot, BrainCircuit, Sparkles, Workflow, ArrowRight, ArrowLeft, CheckCircle2, 
  Mail, Phone, MapPin, Building2, Users, Award, 
  Check, Send, Layers, ShieldCheck, Zap, Database, FileText, Activity
} from 'lucide-react';

interface AiAutomationPageProps {
  onBackToHome: () => void;
  onOpenContact: () => void;
  onSelectCompany?: (companyId: string) => void;
}

export const AiAutomationPage: React.FC<AiAutomationPageProps> = ({
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
      icon: Bot,
      title: 'Agentic AI & Workflow Automation',
      description: 'Autonomous multi-step AI agents that plan, execute, and verify complex operational tasks across ERPs, CRMs, and internal databases.',
      tag: 'Autonomous AI',
      highlights: ['Multi-Agent Systems', 'Tool Calling & Function Execution', 'Human-in-the-Loop Safeguards']
    },
    {
      icon: BrainCircuit,
      title: 'Enterprise RAG & Custom LLMs',
      description: 'Retrieval-Augmented Generation architectures indexing millions of internal corporate documents for instant, accurate search and analysis.',
      tag: 'LLM & Knowledge',
      highlights: ['Private Vector Search', 'On-Premise & Local Models', 'Zero Data Leakage Security']
    },
    {
      icon: FileText,
      title: 'Intelligent Document Processing (IDP)',
      description: 'Combining computer vision, OCR, and NLP to parse unstructured invoices, contracts, passports, and medical records with 99.8% precision.',
      tag: 'OCR & Parsing',
      highlights: ['Automated Invoice Extraction', 'Multi-Language Support', 'Instant Structured JSON']
    },
    {
      icon: Activity,
      title: 'Predictive Analytics & ML Forecasting',
      description: 'Machine learning algorithms forecasting demand, inventory requirements, customer churn, and equipment maintenance schedules.',
      tag: 'Predictive ML',
      highlights: ['Supply Chain Forecasting', 'Anomaly & Fraud Detection', 'Predictive Maintenance']
    },
    {
      icon: Workflow,
      title: 'Robotic Process Automation (RPA)',
      description: 'Automating high-volume repetitive back-office tasks, data entry, reconciliation, and cross-system syncs without touching legacy code.',
      tag: 'Process Automation',
      highlights: ['Non-Invasive Integration', '24/7 Automated Execution', 'Error Rate Near Zero']
    },
    {
      icon: Sparkles,
      title: 'Conversational AI & Smart Support',
      description: 'Multilingual AI voice and chat assistants delivering human-quality customer service, ticket triage, and automated booking.',
      tag: 'Customer Experience',
      highlights: ['Omnichannel Chat & Voice', '20+ Languages Supported', 'Instant CRM Escalation']
    }
  ];

  const valuePillars = [
    {
      title: '85% Task Processing Speedup',
      desc: 'Clients experience drastic reductions in operational turnaround times across document processing and customer ops.',
      stat: '85%',
      statLabel: 'Speed Improvement'
    },
    {
      title: '100+ Production AI Agents',
      desc: 'Tested and deployed autonomous agents handling real-world enterprise workloads daily.',
      stat: '100+',
      statLabel: 'AI Agents Deployed'
    },
    {
      title: 'Strict Data Privacy & Security',
      desc: 'Your proprietary corporate data is never used to train public models. Local model deployments available.',
      stat: '100%',
      statLabel: 'Data Privacy'
    },
    {
      title: 'Seamless ERP & CRM Integration',
      desc: 'Pre-built connectors for SAP, Salesforce, 1C, Oracle, and custom REST API ecosystems.',
      stat: 'Instant',
      statLabel: 'System Integration'
    },
    {
      title: 'Continuous Accuracy Monitoring',
      desc: 'Real-time telemetry and validation metrics ensuring models perform reliably without hallucination.',
      stat: '99.8%',
      statLabel: 'Model Accuracy'
    },
    {
      title: 'ROI-Driven Automation Strategy',
      desc: 'We focus exclusively on automation use cases with clear, measurable cost savings and productivity gains.',
      stat: 'Measurable',
      statLabel: 'Business ROI'
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
            ENTERPRISE CAPABILITY • ARTIFICIAL INTELLIGENCE
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-[#1B365D] tracking-tight font-heading leading-tight mx-auto text-center">
            AI & Intelligent Process Automation
          </h1>

          <p className="text-lg sm:text-xl font-medium text-slate-600 leading-relaxed text-center mx-auto max-w-3xl">
            Integrating agentic LLM workflows, predictive machine learning models, natural language intelligence, and robotic process automation into enterprise operations.
          </p>

          <div className="py-3 px-6 rounded-2xl bg-white/80 border border-orange-200/90 text-slate-700 text-sm sm:text-base italic text-center mx-auto max-w-2xl shadow-xs backdrop-blur-sm">
            "We replace repetitive manual workflows with intelligent, self-correcting AI systems that work around the clock."
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
              <Cpu className="w-4 h-4 text-[#FF6B00]" />
              <span>Request AI Audit</span>
            </button>
          </div>

          {/* Trust Strip */}
          <div className="mt-12 pt-8 border-t border-orange-200/60 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center max-w-4xl mx-auto">
            <div className="bg-white/90 border border-orange-100 rounded-2xl p-5 shadow-xs space-y-1">
              <div className="text-3xl sm:text-4xl font-black text-[#FF6B00] font-heading">85%</div>
              <div className="text-xs sm:text-sm font-bold text-slate-500 uppercase tracking-wider">Manual Task Reduction</div>
            </div>

            <div className="bg-white/90 border border-orange-100 rounded-2xl p-5 shadow-xs space-y-1">
              <div className="text-3xl sm:text-4xl font-black text-[#1B365D] font-heading">100+</div>
              <div className="text-xs sm:text-sm font-bold text-slate-500 uppercase tracking-wider">AI Agents Deployed</div>
            </div>

            <div className="bg-white/90 border border-orange-100 rounded-2xl p-5 shadow-xs space-y-1">
              <div className="text-3xl sm:text-4xl font-black text-[#FF6B00] font-heading">10x</div>
              <div className="text-xs sm:text-sm font-bold text-slate-500 uppercase tracking-wider">Operational Throughput</div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1 — OVERVIEW & AI VISION */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-[#FF6B00] text-xs font-black uppercase tracking-widest">
              AI VISION & WORKFLOWS
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#1B365D] tracking-tight font-heading">
              Unlocking Next-Generation Operational Speed with Machine Intelligence
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              TOP GROUP designs and deploys secure, enterprise-grade AI solutions tailored to complex business environments. We combine the latest reasoning models, private vector databases, and robotic process automation to eliminate manual friction and drive rapid business performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-orange-100 text-[#FF6B00] flex items-center justify-center font-black">01</div>
              <h3 className="text-lg font-bold text-[#1B365D]">Agentic Reasoners</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Multi-agent systems that autonomously research, synthesize data, query databases, and execute operational workflows.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-orange-100 text-[#FF6B00] flex items-center justify-center font-black">02</div>
              <h3 className="text-lg font-bold text-[#1B365D]">Private Data RAG</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Connect your internal knowledge base, PDFs, and SQL tables to conversational AI search while maintaining total data privacy.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-orange-100 text-[#FF6B00] flex items-center justify-center font-black">03</div>
              <h3 className="text-lg font-bold text-[#1B365D]">Human-in-the-Loop</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Critical decisions require verification. Our AI architectures include intuitive human approval interfaces for complete compliance.
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
              AI & Automation Capabilities
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Custom model fine-tuning, autonomous agent deployment, and process automation solutions.
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

      {/* SECTION 3 — MEASURABLE IMPACT & WHY CHOOSE US */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-[#FF6B00] text-xs font-black uppercase tracking-widest">
              WHY TOP GROUP AI
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#1B365D] tracking-tight font-heading">
              Enterprise-Grade AI Architecture You Can Trust
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Why business leaders select TOP GROUP to build their core AI and process automation infrastructure.
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
                <h3 className="text-2xl font-black text-[#1B365D]">AI Audit Requested!</h3>
                <p className="text-sm text-slate-600">
                  Our Machine Intelligence team will get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <div className="space-y-5">
                <div>
                  <span className="text-xs font-extrabold text-[#FF6B00] uppercase tracking-wider">
                    AI & Automation Consultation
                  </span>
                  <h3 className="text-2xl font-black text-[#1B365D] mt-1">
                    Request an AI Audit
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    TOP GROUP AI Engineering Desk
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Timur Rakhimov"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#FF6B00]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Phone / Telegram *</label>
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
                    <label className="block text-xs font-bold text-slate-700 mb-1">Automation Focus</label>
                    <select
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#FF6B00]"
                    >
                      <option>Autonomous Agentic AI</option>
                      <option>Document Processing (OCR / IDP)</option>
                      <option>Enterprise Knowledge RAG</option>
                      <option>Predictive Analytics / ML</option>
                      <option>Robotic Process Automation (RPA)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Use Case Details</label>
                    <textarea
                      rows={3}
                      placeholder="Specify processes or systems you wish to automate..."
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
                    <span>Submit Audit Request</span>
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
