import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronDown, Building2, Globe, Cpu, ArrowRight, ShieldCheck, Mail, Phone } from 'lucide-react';
import { COMPANIES, CAPABILITIES } from '../data/mockData';
import { TopGroupLogo } from './TopGroupLogo';
import { BrandLogo } from './BrandLogo';

interface NavbarProps {
  onOpenContact: () => void;
  onSelectCompany: (companyId: string) => void;
  onNavigateSection: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact, onSelectCompany, onNavigateSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    onNavigateSection(sectionId);
    setActiveDropdown(null);
    setMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full max-w-full overflow-x-clip ${scrolled ? 'glass-nav py-3 shadow-md' : 'bg-white/80 backdrop-blur-md py-4 border-b border-slate-100'}`}>
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2">
          
          {/* Logo Left */}
          <a 
            href="#hero" 
            onClick={(e) => { e.preventDefault(); handleNavClick('hero'); }}
            className="flex items-center gap-2 sm:gap-3 group py-1 shrink-0"
          >
            <TopGroupLogo size="md" variant="group" textColor="dark" />
          </a>

          {/* Desktop Navigation Center */}
          <nav className="hidden lg:flex items-center gap-1">
            <button 
              onClick={() => handleNavClick('hero')}
              className="px-3.5 py-2 text-sm font-semibold text-slate-700 hover:text-[#FF6B00] transition-colors relative group"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FF6B00] group-hover:w-full transition-all duration-300"></span>
            </button>

            <button 
              onClick={() => handleNavClick('about')}
              className="px-3.5 py-2 text-sm font-semibold text-slate-700 hover:text-[#1B365D] transition-colors relative group"
            >
              About Us
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#1B365D] group-hover:w-full transition-all duration-300"></span>
            </button>

            {/* Our Ecosystem Mega Menu Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('ecosystem')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button 
                onClick={() => handleNavClick('companies')}
                className="px-3.5 py-2 text-sm font-semibold text-slate-700 hover:text-[#1B365D] transition-colors flex items-center gap-1 group"
              >
                Our Ecosystem
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'ecosystem' ? 'rotate-180 text-[#1B365D]' : ''}`} />
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#1B365D] group-hover:w-full transition-all duration-300"></span>
              </button>

              <AnimatePresence>
                {activeDropdown === 'ecosystem' && (
                  <motion.div
                    initial={{ opacity: 0, y: 12, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[560px] p-5 bg-white rounded-2xl border border-slate-200 shadow-2xl z-50 grid grid-cols-2 gap-3"
                  >
                    <div className="col-span-2 mb-1 pb-2 border-b border-slate-100 flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#1B365D] flex items-center gap-1.5">
                        <Building2 className="w-3.5 h-3.5 text-[#1B365D]" /> TOP GROUP Sister Portfolio
                      </span>
                      <button 
                        onClick={() => handleNavClick('companies')}
                        className="text-xs font-bold text-[#1B365D] hover:text-[#FF6B00] flex items-center gap-1 transition-colors"
                      >
                        View All (6) <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>

                    {COMPANIES.slice(0, 6).map((comp) => {
                      const isPakCis = comp.slug === 'pakcis-trade' || comp.id === '1';
                      return (
                        <div
                          key={comp.id}
                          onClick={() => {
                            onSelectCompany(comp.id);
                            setActiveDropdown(null);
                          }}
                          className={`p-3 rounded-xl transition-all cursor-pointer flex items-start gap-3 group shadow-2xs hover:shadow-md border ${
                            isPakCis 
                              ? 'bg-gradient-to-r from-blue-50/90 to-orange-50/80 border-orange-200/90 hover:border-[#FF6B00]' 
                              : 'bg-slate-50 hover:bg-blue-50/70 border-slate-100 hover:border-[#1B365D]/40'
                          }`}
                        >
                          {/* Official Brand Logo Badge */}
                          <div className="relative shrink-0 group-hover:scale-105 transition-transform">
                            <BrandLogo id={comp.slug} size="sm" className="w-10 h-10 border border-slate-200/80 bg-white shadow-xs p-1 rounded-xl" />
                            {isPakCis && (
                              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-white animate-ping" />
                            )}
                          </div>

                          <div className="overflow-hidden w-full">
                            <div className="flex items-center justify-between gap-1">
                              <span className="text-sm font-extrabold text-slate-900 group-hover:text-[#1B365D] transition-colors truncate">
                                {comp.name}
                              </span>
                              {isPakCis && (
                                <span className="text-[9px] font-extrabold text-white bg-[#FF6B00] px-1.5 py-0.5 rounded-md uppercase tracking-wider shrink-0 shadow-2xs">
                                  B2B Hub
                                </span>
                              )}
                            </div>
                            <div className="text-[11px] text-slate-500 truncate mt-0.5">
                              {comp.industry}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* What We Do Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('capabilities')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button 
                onClick={() => handleNavClick('capabilities')}
                className="px-3.5 py-2 text-sm font-semibold text-slate-700 hover:text-[#1B365D] transition-colors flex items-center gap-1 group"
              >
                What We Do
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'capabilities' ? 'rotate-180 text-[#1B365D]' : ''}`} />
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#1B365D] group-hover:w-full transition-all duration-300"></span>
              </button>

              <AnimatePresence>
                {activeDropdown === 'capabilities' && (
                  <motion.div
                    initial={{ opacity: 0, y: 12, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 top-full mt-2 w-[420px] p-4 bg-white rounded-2xl border border-slate-200 shadow-2xl z-50 space-y-2"
                  >
                    <div className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2 flex items-center gap-1.5 pb-2 border-b border-slate-100">
                      <Cpu className="w-3.5 h-3.5 text-[#FF6B00]" /> Enterprise Capabilities & Services
                    </div>
                    {CAPABILITIES.slice(0, 4).map((cap) => (
                      <div
                        key={cap.id}
                        onClick={() => handleNavClick('capabilities')}
                        className="p-2.5 rounded-lg hover:bg-orange-50 transition-colors cursor-pointer flex items-center justify-between group"
                      >
                        <div>
                          <div className="text-sm font-bold text-slate-900 group-hover:text-[#FF6B00] transition-colors">{cap.title}</div>
                          <div className="text-xs text-slate-500">{cap.category}</div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#FF6B00] group-hover:translate-x-1 transition-all" />
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button 
              onClick={() => handleNavClick('media')}
              className="px-3.5 py-2 text-sm font-semibold text-slate-700 hover:text-[#1B365D] transition-colors relative group"
            >
              Media & Events
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#1B365D] group-hover:w-full transition-all duration-300"></span>
            </button>

            <button 
              onClick={() => handleNavClick('resources')}
              className="px-3.5 py-2 text-sm font-semibold text-slate-700 hover:text-[#1B365D] transition-colors relative group"
            >
              Resources
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#1B365D] group-hover:w-full transition-all duration-300"></span>
            </button>
          </nav>

          {/* Right CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={onOpenContact}
              className="px-5 py-2.5 rounded-full text-sm font-bold text-white bg-[#1B365D] hover:bg-[#112440] border border-[#1B365D] flex items-center gap-2 cursor-pointer shadow-md hover:shadow-blue-900/30 transition-all hover:scale-105"
            >
              <span>Get in Touch</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenContact}
              className="px-3 py-1.5 rounded-full text-xs font-semibold text-white btn-orange-gradient"
            >
              Contact
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-slate-100 text-slate-700 hover:text-slate-900 border border-slate-200"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-slate-200 shadow-xl overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-4 py-6 space-y-4">
              <button
                onClick={() => handleNavClick('hero')}
                className="w-full text-left py-2 text-base font-semibold text-slate-800 hover:text-[#FF6B00] border-b border-slate-100"
              >
                Home
              </button>
              <button
                onClick={() => handleNavClick('about')}
                className="w-full text-left py-2 text-base font-semibold text-slate-800 hover:text-[#FF6B00] border-b border-slate-100"
              >
                About Us
              </button>
              <button
                onClick={() => handleNavClick('companies')}
                className="w-full text-left py-2 text-base font-semibold text-slate-800 hover:text-[#FF6B00] border-b border-slate-100 flex items-center justify-between"
              >
                <span>Our Ecosystem</span>
                <span className="text-xs text-[#FF6B00] bg-orange-50 px-2.5 py-0.5 rounded-full border border-orange-200 font-bold">6 Companies</span>
              </button>
              <button
                onClick={() => handleNavClick('capabilities')}
                className="w-full text-left py-2 text-base font-semibold text-slate-800 hover:text-[#FF6B00] border-b border-slate-100"
              >
                What We Do
              </button>
              <button
                onClick={() => handleNavClick('media')}
                className="w-full text-left py-2 text-base font-semibold text-slate-800 hover:text-[#FF6B00] border-b border-slate-100"
              >
                Media & Events
              </button>
              <button
                onClick={() => handleNavClick('blog')}
                className="w-full text-left py-2 text-base font-semibold text-slate-800 hover:text-[#FF6B00] border-b border-slate-100"
              >
                Resources & Blog
              </button>

              <div className="pt-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenContact();
                  }}
                  className="w-full py-3 rounded-xl text-center text-sm font-semibold text-white btn-orange-gradient shadow-lg"
                >
                  Schedule Consultation
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
