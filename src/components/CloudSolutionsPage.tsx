import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Cloud, Server, ShieldCheck, Database, HardDrive, Lock, ArrowRight, ArrowLeft, CheckCircle2, 
  Mail, Phone, MapPin, Building2, Users, Award, 
  Check, Send, Layers, Zap, Cpu, RefreshCw, Network
} from 'lucide-react';

interface CloudSolutionsPageProps {
  onBackToHome: () => void;
  onOpenContact: () => void;
  onSelectCompany?: (companyId: string) => void;
}

export const CloudSolutionsPage: React.FC<CloudSolutionsPageProps> = ({
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
      icon: Network,
      title: 'Kubernetes & Container Orchestration',
      description: 'Production-grade Kubernetes clusters (EKS, GKE, AKS) with automated autoscaling, self-healing nodes, and service mesh management.',
      tag: 'K8s & DevOps',
      highlights: ['Auto-Scaling Clusters', 'Zero-Downtime Rolling Updates', 'Service Mesh (Istio / Linkerd)']
    },
    {
      icon: Cloud,
      title: 'Multi-Cloud & Hybrid Migration',
      description: 'Seamlessly migrating enterprise legacy workloads to AWS, Google Cloud, Microsoft Azure, or hybrid on-premise infrastructure.',
      tag: 'Cloud Migration',
      highlights: ['Zero Data Loss Migration', 'Hybrid Cloud Networking', 'Vendor Lock-in Mitigation']
    },
    {
      icon: Lock,
      title: 'Zero-Trust Cloud Security',
      description: 'Protecting cloud infrastructure with granular IAM permissions, cryptographic secrets management, identity federation, and continuous vulnerability scanning.',
      tag: 'Security & Compliance',
      highlights: ['Identity & Access Management (IAM)', 'Automated Compliance Scans', 'End-to-End Traffic Encryption']
    },
    {
      icon: HardDrive,
      title: 'Disaster Recovery & High Availability',
      description: 'Multi-region failover, automated point-in-time backups, and sub-minute Recovery Point Objective (RPO) and Recovery Time Objective (RTO).',
      tag: 'Resilience & DR',
      highlights: ['Multi-Region Active-Active', 'Sub-minute RPO/RTO', 'Automated Daily Backups']
    },
    {
      icon: RefreshCw,
      title: 'Cloud FinOps & Cost Optimization',
      description: 'Continuous cloud spend auditing, reserved instance optimization, serverless auto-pausing, and rightsizing resources to cut cloud bills by 30-50%.',
      tag: 'Cost Optimization',
      highlights: ['Up to 50% Cloud Savings', 'Real-Time Cost Anomaly Alerts', 'Resource Rightsizing']
    },
    {
      icon: Server,
      title: 'Infrastructure-as-Code (IaC)',
      description: 'Managing infrastructure declaratively using Terraform, Pulumi, and Ansible for reproducible, version-controlled cloud environments.',
      tag: 'IaC & Automation',
      highlights: ['Terraform & Ansible', 'GitOps Infrastructure Workflow', 'Automated Environment Provisioning']
    }
  ];

  const valuePillars = [
    {
      title: '99.999% Infrastructure Uptime',
      desc: 'High-availability cloud architecture engineered for multi-region redundancy and fault isolation.',
      stat: '99.999%',
      statLabel: 'Uptime Reliability'
    },
    {
      title: 'Certified Cloud Architects',
      desc: 'Team of AWS, GCP, and Azure certified DevOps and security engineers managing your clusters.',
      stat: 'Multi-Cloud',
      statLabel: 'Certified Team'
    },
    {
      title: '30-50% Average Cost Reduction',
      desc: 'Our FinOps frameworks eliminate wasted compute capacity and optimize cloud instance usage.',
      stat: '-40%',
      statLabel: 'Avg Cloud Bill'
    },
    {
      title: '24/7/365 Incident Response SLA',
      desc: 'Round-the-clock Site Reliability Engineering (SRE) monitoring and immediate escalation for critical alerts.',
      stat: '<15 Mins',
      statLabel: 'Response SLA'
    },
    {
      title: 'SOC2 & ISO 27001 Preparedness',
      desc: 'Compliant logging, audit trails, and data sovereignty safeguards meeting Eurasian and EU privacy regulations.',
      stat: '100%',
      statLabel: 'Compliance Ready'
    },
    {
      title: 'Low-Latency Regional Edge',
      desc: 'Optimized routing and CDN edge nodes across Central Asia, Europe, and Middle East data centers.',
      stat: 'Sub-10ms',
      statLabel: 'Regional Latency'
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
            ENTERPRISE CAPABILITY • INFRASTRUCTURE
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-[#1B365D] tracking-tight font-heading leading-tight mx-auto text-center">
            Cloud Solutions & Hybrid Infrastructure
          </h1>

          <p className="text-lg sm:text-xl font-medium text-slate-600 leading-relaxed text-center mx-auto max-w-3xl">
            High-availability Kubernetes deployment, multi-cloud strategy, serverless pipelines, disaster recovery, and zero-trust security frameworks.
          </p>

          <div className="py-3 px-6 rounded-2xl bg-white/80 border border-orange-200/90 text-slate-700 text-sm sm:text-base italic text-center mx-auto max-w-2xl shadow-xs backdrop-blur-sm">
            "We build resilient, zero-downtime cloud environments that scale effortlessly while keeping cloud expenses strictly optimized."
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
              <Cloud className="w-4 h-4 text-[#FF6B00]" />
              <span>Consult Cloud Architect</span>
            </button>
          </div>

          {/* Trust Strip */}
          <div className="mt-12 pt-8 border-t border-orange-200/60 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center max-w-4xl mx-auto">
            <div className="bg-white/90 border border-orange-100 rounded-2xl p-5 shadow-xs space-y-1">
              <div className="text-3xl sm:text-4xl font-black text-[#FF6B00] font-heading">99.999%</div>
              <div className="text-xs sm:text-sm font-bold text-slate-500 uppercase tracking-wider">Infrastructure Uptime</div>
            </div>

            <div className="bg-white/90 border border-orange-100 rounded-2xl p-5 shadow-xs space-y-1">
              <div className="text-3xl sm:text-4xl font-black text-[#1B365D] font-heading">Multi-Cloud</div>
              <div className="text-xs sm:text-sm font-bold text-slate-500 uppercase tracking-wider">AWS • GCP • Azure</div>
            </div>

            <div className="bg-white/90 border border-orange-100 rounded-2xl p-5 shadow-xs space-y-1">
              <div className="text-3xl sm:text-4xl font-black text-[#FF6B00] font-heading">Zero-Trust</div>
              <div className="text-xs sm:text-sm font-bold text-slate-500 uppercase tracking-wider">Security Standard</div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1 — OVERVIEW & CLOUD VISION */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-[#FF6B00] text-xs font-black uppercase tracking-widest">
              CLOUD ARCHITECTURE
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#1B365D] tracking-tight font-heading">
              Resilient, Scalable & High-Availability Cloud Environments
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              TOP GROUP's infrastructure engineering team designs and manages enterprise cloud environments for high-concurrency platforms. Whether migrating legacy databases to Kubernetes clusters or managing multi-cloud setups across AWS, Google Cloud, and Azure, we deliver peak performance, robust security compliance, and controlled cloud expenditures.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-orange-100 text-[#FF6B00] flex items-center justify-center font-black">01</div>
              <h3 className="text-lg font-bold text-[#1B365D]">High Concurrency & K8s</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Containerized microservices auto-scaling dynamically to handle heavy traffic spikes without latency drops or server downtime.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-orange-100 text-[#FF6B00] flex items-center justify-center font-black">02</div>
              <h3 className="text-lg font-bold text-[#1B365D]">Zero-Trust Perimeter</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Every API call and user connection is authenticated and authorized. Encrypted traffic and identity federation at every layer.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-orange-100 text-[#FF6B00] flex items-center justify-center font-black">03</div>
              <h3 className="text-lg font-bold text-[#1B365D]">Continuous FinOps</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Proactive monitoring and automated resource scaling ensure you never pay for idle cloud compute or unattached storage.
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
              Cloud & Infrastructure Engineering
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Managed cloud services, migration execution, FinOps optimization, and SRE operations.
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
              WHY TOP GROUP CLOUD
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#1B365D] tracking-tight font-heading">
              Cloud Infrastructure Built for Mission-Critical Reliability
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Why enterprises, banks, and telecom leaders entrust TOP GROUP with their cloud architecture.
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
                <h3 className="text-2xl font-black text-[#1B365D]">Consultation Scheduled!</h3>
                <p className="text-sm text-slate-600">
                  A Senior Cloud Architect will reach out to review your infrastructure setup.
                </p>
              </div>
            ) : (
              <div className="space-y-5">
                <div>
                  <span className="text-xs font-extrabold text-[#FF6B00] uppercase tracking-wider">
                    Cloud Solutions Advisory
                  </span>
                  <h3 className="text-2xl font-black text-[#1B365D] mt-1">
                    Consult Cloud Architect
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    TOP GROUP Cloud Infrastructure Team
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sardor Umarov"
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
                    <label className="block text-xs font-bold text-slate-700 mb-1">Service Required</label>
                    <select
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#FF6B00]"
                    >
                      <option>Kubernetes Deployment & Tuning</option>
                      <option>Cloud Migration (AWS / GCP / Azure)</option>
                      <option>Cloud FinOps & Cost Audit</option>
                      <option>Disaster Recovery & High Availability</option>
                      <option>Zero-Trust Security Audit</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Infrastructure Details</label>
                    <textarea
                      rows={3}
                      placeholder="Specify cloud providers, current servers, or key requirements..."
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
                    <span>Request Cloud Session</span>
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
