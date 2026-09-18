import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Mail, Phone, MapPin, Clock, Send, CheckCircle2, Globe, Building2, ExternalLink } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    serviceInterest: 'International Trade & Logistics',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full Name is required.';
    if (!formData.email.trim() || !formData.email.includes('@')) errs.email = 'Valid corporate email required.';
    if (!formData.phone.trim()) errs.phone = 'Phone number is required.';
    if (!formData.message.trim()) errs.message = 'Please provide brief details.';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          company: '',
          serviceInterest: 'International Trade & Logistics',
          message: ''
        });
        onClose();
      }, 3000);
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto bg-slate-900/60 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-3xl border border-slate-200 shadow-2xl bg-white text-slate-900"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-white/90 hover:bg-white text-slate-700 border border-slate-300 shadow-md transition-all cursor-pointer"
            aria-label="Close contact modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Column Office Details & Map */}
            <div className="lg:col-span-5 p-6 sm:p-8 bg-slate-50 border-b lg:border-b-0 lg:border-r border-slate-200 space-y-5">
              <div>
                <span className="px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-xs font-bold text-[#FF6B00] uppercase tracking-widest shadow-xs">
                  Direct Line & Regional Hub
                </span>
                <h3 className="text-2xl font-extrabold text-slate-900 font-heading mt-2">
                  Connect With TOP GROUP
                </h3>
                <p className="text-xs text-slate-600 mt-1 font-normal">
                  Our executive team responds to corporate inquiries and consultations within 12 business hours.
                </p>
              </div>

              {/* Real Office Contact Cards */}
              <div className="space-y-3">
                {/* Main Office Location */}
                <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs space-y-2">
                  <div className="text-xs font-bold text-[#FF6B00] flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-[#FF6B00]" /> Headquarters & Technology Hub
                  </div>
                  <div className="text-xs text-slate-800 font-semibold leading-relaxed">
                    40, Block 1, Sector B1, Township, Lahore
                  </div>
                  <div className="text-[11px] text-slate-500 font-medium">
                    Pakistan Regional Hub & Global Operations Desk
                  </div>
                </div>

                {/* Direct Contact Phone & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5">
                  <a
                    href="tel:03110911114"
                    className="p-3 rounded-xl bg-white hover:bg-orange-50/60 border border-slate-200 hover:border-orange-300 transition-all flex items-center justify-between group shadow-xs"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-orange-100/80 text-[#FF6B00] flex items-center justify-center group-hover:scale-105 transition-transform">
                        <Phone className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-[10px] uppercase font-bold text-slate-400">Official Line</div>
                        <div className="text-xs font-bold text-slate-900 group-hover:text-[#FF6B00] transition-colors">
                          0311 0911114
                        </div>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold text-[#FF6B00] opacity-0 group-hover:opacity-100 transition-opacity">
                      Call
                    </span>
                  </a>

                  <a
                    href="mailto:info@tech.topgroup.pk"
                    className="p-3 rounded-xl bg-white hover:bg-orange-50/60 border border-slate-200 hover:border-orange-300 transition-all flex items-center justify-between group shadow-xs"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center group-hover:scale-105 transition-transform">
                        <Mail className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-[10px] uppercase font-bold text-slate-400">Direct Email</div>
                        <div className="text-xs font-bold text-slate-900 group-hover:text-blue-600 transition-colors break-all">
                          info@tech.topgroup.pk
                        </div>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
                      Mail
                    </span>
                  </a>
                </div>

                {/* Global Corridor Network */}
                <div className="px-3 py-2 rounded-lg bg-slate-100/80 border border-slate-200 flex items-center gap-2 text-[11px] text-slate-600">
                  <Globe className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                  <span>Global Corridors: <strong>Tashkent</strong> • <strong>Dubai</strong> • <strong>London</strong></span>
                </div>
              </div>

              {/* Google Map Embed Frame (Exact user iframe location: Fintech Edge Institute, Township, Lahore) */}
              <div className="rounded-xl overflow-hidden border border-slate-200 aspect-video relative shadow-xs bg-slate-100">
                <iframe
                  title="TOP GROUP Location Map - Township, Lahore"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3403.2243795290283!2d74.3162516!3d31.4630133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190797f8f15237%3A0xe0a05440b31ae90a!2sFintech%20Edge%20Institute!5e0!3m2!1sen!2s!4v1789728236824!5m2!1sen!2s"
                  className="w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              </div>

              {/* Business Hours */}
              <div className="text-xs text-slate-600 space-y-1 pt-2 border-t border-slate-200 font-normal">
                <div className="flex items-center gap-2 font-bold text-slate-800">
                  <Clock className="w-4 h-4 text-[#FF6B00]" /> Business Operating Hours
                </div>
                <div>Mon — Sat: 09:00 AM – 07:00 PM (PKT / GMT+5)</div>
                <div>24/7 Corporate & Institutional Dispatch Support</div>
              </div>
            </div>

            {/* Right Column Form */}
            <div className="lg:col-span-7 p-6 sm:p-8 space-y-6">
              
              {submitted ? (
                <div className="py-16 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-orange-50 text-[#FF6B00] flex items-center justify-center mx-auto border border-orange-200 shadow-sm">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-bold text-slate-900 font-heading">Consultation Request Received</h4>
                  <p className="text-xs text-slate-600 max-w-sm mx-auto font-normal">
                    Thank you. Our team at <strong>info@tech.topgroup.pk</strong> has been notified and will reach out to your contact number shortly.
                  </p>
                  <div className="pt-2">
                    <a
                      href="https://wa.me/923110911114"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all shadow-sm"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>Instant WhatsApp Connect (+92 311 0911114)</span>
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 font-heading">Schedule Consultation</h4>
                    <p className="text-xs text-slate-500 font-medium">Fill in your information to connect directly with our corporate advisory board.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Full Name *</label>
                      <input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Usman / Corporate Partner"
                        className={`w-full px-4 py-2.5 rounded-xl bg-slate-50 border ${errors.fullName ? 'border-red-500' : 'border-slate-300'} text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#FF6B00] focus:bg-white`}
                      />
                      {errors.fullName && <p className="text-[10px] text-red-500 mt-0.5 font-bold">{errors.fullName}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Corporate Email *</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. yourname@company.com"
                        className={`w-full px-4 py-2.5 rounded-xl bg-slate-50 border ${errors.email ? 'border-red-500' : 'border-slate-300'} text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#FF6B00] focus:bg-white`}
                      />
                      {errors.email && <p className="text-[10px] text-red-500 mt-0.5 font-bold">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Phone Number *</label>
                      <input
                        type="text"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="0311 0911114"
                        className={`w-full px-4 py-2.5 rounded-xl bg-slate-50 border ${errors.phone ? 'border-red-500' : 'border-slate-300'} text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#FF6B00] focus:bg-white`}
                      />
                      {errors.phone && <p className="text-[10px] text-red-500 mt-0.5 font-bold">{errors.phone}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Organization / Firm</label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. Fintech Edge / Enterprise Corp"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#FF6B00] focus:bg-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Sector / Division Interest</label>
                    <select
                      value={formData.serviceInterest}
                      onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-[#FF6B00] focus:bg-white"
                    >
                      <option value="FinTech Education & Academy">FinTech Edge Institute & Tech Solutions</option>
                      <option value="International Trade & Logistics">International Trade & Customs (PakCIS)</option>
                      <option value="Corporate Travel & Aviation">Corporate Flight Charters (Travel Operations)</option>
                      <option value="Hospitality & Franchising">F&B Franchising (Chicken Charco)</option>
                      <option value="Manufacturing & Smart Home">Smart Appliance Manufacturing (Artel)</option>
                      <option value="Cloud Software & AI Automation">Industrial Cards & IT Automation (Vades Group)</option>
                      <option value="Medical Diagnostics">Medical Diagnostics & Labs (Metro City Lab)</option>
                      <option value="Tourism & Diplomatic Services">Tourism & Delegations (PSA Uzbekistan)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Project Details *</label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Outline target timeline, scope, or expected commercial outcome..."
                      className={`w-full px-4 py-2.5 rounded-xl bg-slate-50 border ${errors.message ? 'border-red-500' : 'border-slate-300'} text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#FF6B00] focus:bg-white`}
                    />
                    {errors.message && <p className="text-[10px] text-red-500 mt-0.5 font-bold">{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl text-sm font-bold text-white btn-orange-gradient flex items-center justify-center gap-2 shadow-md hover:scale-[1.01] transition-all cursor-pointer"
                  >
                    <span>Submit Executive Proposal Request</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}

            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
