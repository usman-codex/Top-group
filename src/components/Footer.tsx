import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Building2, Globe, Mail, Phone, MapPin, CheckCircle2 } from 'lucide-react';
import { COMPANIES } from '../data/mockData';
import { TopGroupLogo } from './TopGroupLogo';

interface FooterProps {
  onOpenContact: () => void;
  onSelectCompany: (companyId: string) => void;
  onNavigateSection: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenContact, onSelectCompany, onNavigateSection }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() && email.includes('@')) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail('');
      }, 3500);
    }
  };

  return (
    <footer className="bg-slate-900 text-white pt-20 pb-12 border-t border-slate-800 relative overflow-hidden">
      
      {/* Decorative Blur Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Newsletter & Brand Banner */}
        <div className="pb-16 border-b border-slate-800 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-3">
            <div className="flex items-center gap-3">
              <TopGroupLogo size="lg" variant="group" textColor="light" />
            </div>
            <p className="text-xs text-slate-400 max-w-md leading-relaxed font-normal">
              Global business ecosystem transforming ideas into scalable enterprises across trade, fintech, travel, hospitality, manufacturing, and AI.
            </p>
          </div>

          <div className="lg:col-span-6">
            <div className="p-4 sm:p-5 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-3">
              <div className="text-xs sm:text-sm font-bold text-white font-heading flex items-center gap-1.5">
                Executive Newsletter Subscription
              </div>
              {subscribed ? (
                <div className="text-xs font-semibold text-emerald-400 flex items-center gap-1.5 py-2">
                  <CheckCircle2 className="w-4 h-4" /> Thank you for subscribing to TOP GROUP Briefings.
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2.5 sm:gap-2 w-full">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter corporate email..."
                    className="w-full sm:flex-1 min-w-0 px-4 py-2.5 rounded-full bg-slate-900 border border-slate-700 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-[#FF6B00]"
                  />
                  <button type="submit" className="w-full sm:w-auto shrink-0 px-6 py-2.5 rounded-full text-xs font-bold text-white btn-orange-gradient cursor-pointer text-center">
                    Subscribe
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* 6 Columns Footer Grid */}
        <div className="py-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 text-xs">
          
          {/* Col 1: Company */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#FF6B00] font-heading">Company</h4>
            <ul className="space-y-2 text-slate-300">
              <li><button onClick={() => onNavigateSection('about')} className="hover:text-white transition-colors">About Us</button></li>
              <li><button onClick={() => onNavigateSection('about')} className="hover:text-white transition-colors">Mission & Vision</button></li>
              <li><button onClick={() => onNavigateSection('companies')} className="hover:text-white transition-colors">Ecosystem</button></li>
              <li><button onClick={() => onNavigateSection('capabilities')} className="hover:text-white transition-colors">Careers</button></li>
            </ul>
          </div>

          {/* Col 2: Our Companies */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-blue-400 font-heading">Our Portfolio</h4>
            <ul className="space-y-2 text-slate-300">
              {COMPANIES.map((c) => (
                <li key={c.id}>
                  <button onClick={() => onSelectCompany(c.id)} className="hover:text-white transition-colors text-left">
                    {c.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Capabilities */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#FF6B00] font-heading">Services</h4>
            <ul className="space-y-2 text-slate-300">
              <li><button onClick={() => onNavigateSection('capabilities')} className="hover:text-white transition-colors">Business Strategy</button></li>
              <li><button onClick={() => onNavigateSection('capabilities')} className="hover:text-white transition-colors">Software Engineering</button></li>
              <li><button onClick={() => onNavigateSection('capabilities')} className="hover:text-white transition-colors">Agentic AI Bots</button></li>
              <li><button onClick={() => onNavigateSection('capabilities')} className="hover:text-white transition-colors">Cloud & DevOps</button></li>
              <li><button onClick={() => onNavigateSection('capabilities')} className="hover:text-white transition-colors">FinTech Training</button></li>
            </ul>
          </div>

          {/* Col 4: Resources */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-blue-400 font-heading">Resources</h4>
            <ul className="space-y-2 text-slate-300">
              <li><button onClick={() => onNavigateSection('resources')} className="hover:text-white transition-colors">Whitepapers & Reports</button></li>
              <li><button onClick={() => onNavigateSection('resources')} className="hover:text-white transition-colors font-medium text-[#FF6B00]">Knowledge Hub</button></li>
              <li><button onClick={() => onNavigateSection('media')} className="hover:text-white transition-colors">Media Gallery</button></li>
              <li><button onClick={() => onNavigateSection('faq')} className="hover:text-white transition-colors">FAQ & Support</button></li>
              <li><button onClick={() => onNavigateSection('about')} className="hover:text-white transition-colors">Certifications</button></li>
            </ul>
          </div>

          {/* Col 5: Media & Press */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#FF6B00] font-heading">Media Center</h4>
            <ul className="space-y-2 text-slate-300">
              <li><button onClick={() => onNavigateSection('media')} className="hover:text-white transition-colors">Summits 2026</button></li>
              <li><button onClick={() => onNavigateSection('media')} className="hover:text-white transition-colors">Diplomatic Visits</button></li>
              <li><button onClick={() => onNavigateSection('media')} className="hover:text-white transition-colors">Awards Won</button></li>
              <li><button onClick={onOpenContact} className="hover:text-white transition-colors">Press Inquiries</button></li>
            </ul>
          </div>

          {/* Col 6: Contact & Global HQs */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-blue-400 font-heading">Global HQ</h4>
            <div className="text-slate-300 space-y-1">
              <div>Tashkent, Uzbekistan</div>
              <div>Dubai, UAE</div>
              <div>London, UK</div>
              <div className="text-[#FF6B00] font-bold pt-1">+998 (71) 200-8800</div>
            </div>
            <button
              onClick={onOpenContact}
              className="mt-2 w-full py-2 rounded-lg bg-slate-800 hover:bg-[#FF6B00] text-white font-bold transition-all text-[11px]"
            >
              Contact Board
            </button>
          </div>

        </div>

        {/* Bottom Bar & Back to Top */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} TOP GROUP Enterprise Ecosystem. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <a href="#privacy" onClick={(e) => { e.preventDefault(); alert("TOP GROUP Privacy Policy: All client and trade data is handled in strict compliance with GDPR and PDPA regulations."); }} className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#terms" onClick={(e) => { e.preventDefault(); alert("TOP GROUP Terms of Service: Standard enterprise SLA protocols apply."); }} className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
