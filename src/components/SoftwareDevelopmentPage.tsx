import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Code2, Cpu, Smartphone, Globe, Database, Server, Terminal, ArrowRight, ArrowLeft, CheckCircle2, 
  Mail, Phone, MapPin, Sparkles, Building2, Users, Award, 
  Check, Send, Layers, ShieldCheck, Zap, Laptop, GitBranch, Lock
} from 'lucide-react';

interface SoftwareDevelopmentPageProps {
  onBackToHome: () => void;
  onOpenContact: () => void;
  onSelectCompany?: (companyId: string) => void;
}

export const SoftwareDevelopmentPage: React.FC<SoftwareDevelopmentPageProps> = ({
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
      icon: Laptop,
      title: 'Custom Web & Cloud Applications',
      description: 'High-performance React/Next.js and Node.js web platforms built with modular components, ultra-responsive UI, and microsecond rendering speed.',
      tag: 'Web & Cloud',
      highlights: ['React & Next.js Ecosystem', 'Serverless & SSR', 'SEO & Performance Optimized']
    },
    {
      icon: Smartphone,
      title: 'Native & Cross-Platform Mobile Apps',
      description: 'Feature-rich iOS and Android applications engineered with Flutter and React Native for fluid, 60fps native user experiences.',
      tag: 'Mobile Engineering',
      highlights: ['iOS & Android Native Performance', 'Offline-First Data Sync', 'Biometric & Payment Auth']
    },
    {
      icon: Server,
      title: 'Enterprise API & Microservices',
      description: 'Robust RESTful and GraphQL API backends, event-driven architectures (Kafka, RabbitMQ), and high-throughput microservice clusters.',
      tag: 'Backend Architecture',
      highlights: ['High-Throughput Microservices', 'GraphQL & REST Gateways', 'Low-Latency Message Queues']
    },
    {
      icon: Database,
      title: 'Database Architecture & Data Pipelines',
      description: 'Optimized relational (PostgreSQL, MySQL) and NoSQL (MongoDB, Redis) databases engineered for multi-region replication and sub-millisecond query speed.',
      tag: 'Data Engineering',
      highlights: ['Multi-Region Sharding', 'ACID Compliance', 'Sub-millisecond Caching']
    },
    {
      icon: GitBranch,
      title: 'DevOps & CI/CD Automation',
      description: 'Automated deployment pipelines, Docker containerization, Kubernetes orchestration, and Infrastructure-as-Code for zero-downtime releases.',
      tag: 'DevOps & Infra',
      highlights: ['Docker & Kubernetes', 'Automated Testing Suites', 'Zero-Downtime Deployments']
    },
    {
      icon: Lock,
      title: 'Cybersecurity & Code Audit',
      description: 'Penetration testing, OWASP Top 10 code security hardening, cryptographic data encryption, and SOC2 / ISO 27001 regulatory compliance.',
      tag: 'Security & Audit',
      highlights: ['End-to-End Encryption', 'Penetration Testing', 'SOC2 & ISO 27001 Hardening']
    }
  ];

  const valuePillars = [
    {
      title: '500+ Digital Products Delivered',
      desc: 'Proven engineering experience building fintech platforms, logistics hubs, e-commerce networks, and corporate portals.',
      stat: '500+',
      statLabel: 'Products Shipped'
    },
    {
      title: '99.99% Architecture SLA',
      desc: 'Engineered for high-concurrency uptime, handling millions of active daily transactions without performance degradation.',
      stat: '99.99%',
      statLabel: 'Uptime SLA'
    },
    {
      title: '50M+ End Users Served',
      desc: 'Our software ecosystems power mobile operators, national banks, retail networks, and healthcare providers daily.',
      stat: '50M+',
      statLabel: 'Users Reached'
    },
    {
      title: 'Agile & Rapid Sprint Delivery',
      desc: 'Bi-weekly sprint iterations with transparent Jira tracking, continuous integration, and immediate staging previews.',
      stat: '2 Wks',
      statLabel: 'Sprint Cycles'
    },
    {
      title: 'Senior Engineering Talent',
      desc: 'Dedicated full-stack software engineers, solutions architects, UI/UX designers, and QA automation specialists.',
      stat: 'Top 3%',
      statLabel: 'Engineer Talent'
    },
    {
      title: 'Clean, Maintainable Codebases',
      desc: 'Fully typed TypeScript/Go/Python codebases built to international standards with complete documentation and IP transfer.',
      stat: '100%',
      statLabel: 'IP Ownership'
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
            ENTERPRISE CAPABILITY • TECHNOLOGY
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-[#1B365D] tracking-tight font-heading leading-tight mx-auto text-center">
            Software Development & Enterprise Engineering
          </h1>

          <p className="text-lg sm:text-xl font-medium text-slate-600 leading-relaxed text-center mx-auto max-w-3xl">
            Scalable microservice architectures, high-performance web platforms, native mobile apps, and robust API ecosystems engineered for mission-critical operations.
          </p>

          <div className="py-3 px-6 rounded-2xl bg-white/80 border border-orange-200/90 text-slate-700 text-sm sm:text-base italic text-center mx-auto max-w-2xl shadow-xs backdrop-blur-sm">
            "We write clean, resilient, and secure code that scales seamlessly from launch to millions of concurrent users."
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
              <Terminal className="w-4 h-4 text-[#FF6B00]" />
              <span>Discuss Your Project</span>
            </button>
          </div>

          {/* Trust Strip */}
          <div className="mt-12 pt-8 border-t border-orange-200/60 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center max-w-4xl mx-auto">
            <div className="bg-white/90 border border-orange-100 rounded-2xl p-5 shadow-xs space-y-1">
              <div className="text-3xl sm:text-4xl font-black text-[#FF6B00] font-heading">500+</div>
              <div className="text-xs sm:text-sm font-bold text-slate-500 uppercase tracking-wider">Digital Products</div>
            </div>

            <div className="bg-white/90 border border-orange-100 rounded-2xl p-5 shadow-xs space-y-1">
              <div className="text-3xl sm:text-4xl font-black text-[#1B365D] font-heading">99.99%</div>
              <div className="text-xs sm:text-sm font-bold text-slate-500 uppercase tracking-wider">Architecture SLA</div>
            </div>

            <div className="bg-white/90 border border-orange-100 rounded-2xl p-5 shadow-xs space-y-1">
              <div className="text-3xl sm:text-4xl font-black text-[#FF6B00] font-heading">50M+</div>
              <div className="text-xs sm:text-sm font-bold text-slate-500 uppercase tracking-wider">End Users Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1 — OVERVIEW & ENGINEERING STANDARDS */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-[#FF6B00] text-xs font-black uppercase tracking-widest">
              ENGINEERING STANDARDS
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#1B365D] tracking-tight font-heading">
              Building Enterprise Software That Powers Digital Acceleration
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              TOP GROUP engineers resilient, modular software systems for fintech, logistics, industrial manufacturing, healthcare, and e-commerce. From cloud-native microservices to cross-platform mobile apps, we deliver secure, high-throughput technology that powers rapid market expansion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-orange-100 text-[#FF6B00] flex items-center justify-center font-black">01</div>
              <h3 className="text-lg font-bold text-[#1B365D]">Modern Tech Stack</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                React, TypeScript, Next.js, Node.js, Python, Go, and Flutter. We select the optimal tools for high speed and long-term maintainability.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-orange-100 text-[#FF6B00] flex items-center justify-center font-black">02</div>
              <h3 className="text-lg font-bold text-[#1B365D]">Microservices & Decoupling</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Decoupled backend services and containerized deployments ensure independent scaling, fault isolation, and effortless feature updates.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-orange-100 text-[#FF6B00] flex items-center justify-center font-black">03</div>
              <h3 className="text-lg font-bold text-[#1B365D]">Security & Compliance</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Strict adherence to OWASP security guidelines, end-to-end TLS encryption, automated security scans, and ISO-compliant data governance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — CORE CAPABILITIES & SERVICES */}
      <section className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-[#FF6B00] text-xs font-black uppercase tracking-widest">
              WHAT WE BUILD
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#1B365D] tracking-tight font-heading">
              Full-Lifecycle Software Engineering
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              From initial architectural blueprint to production deployment and 24/7 maintenance support.
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

      {/* SECTION 3 — ENGINEERING IMPACT & WHY CHOOSE US */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-[#FF6B00] text-xs font-black uppercase tracking-widest">
              WHY TOP GROUP SOFTWARE
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#1B365D] tracking-tight font-heading">
              Engineered for Speed, Scalability & Precision
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Why leading enterprises and tech ventures choose TOP GROUP for their critical software infrastructure.
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
                <h3 className="text-2xl font-black text-[#1B365D]">Project Request Received!</h3>
                <p className="text-sm text-slate-600">
                  Our Engineering Lead will review your specs and contact you within 24 hours.
                </p>
              </div>
            ) : (
              <div className="space-y-5">
                <div>
                  <span className="text-xs font-extrabold text-[#FF6B00] uppercase tracking-wider">
                    Software Development Inquiry
                  </span>
                  <h3 className="text-2xl font-black text-[#1B365D] mt-1">
                    Discuss Your Project
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    TOP GROUP Software Engineering Team
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alisher Navoi"
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
                    <label className="block text-xs font-bold text-slate-700 mb-1">Project Type</label>
                    <select
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#FF6B00]"
                    >
                      <option>Custom Web Application</option>
                      <option>Mobile App (iOS / Android)</option>
                      <option>Enterprise API & Microservices</option>
                      <option>DevOps & Infrastructure</option>
                      <option>Legacy System Refactoring</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Brief Description</label>
                    <textarea
                      rows={3}
                      placeholder="Describe your project requirements or tech stack..."
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
                    <span>Submit Project Scope</span>
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
