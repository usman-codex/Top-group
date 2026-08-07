import React, { useState } from 'react';

// Image asset imports
import logoPakcisTrade from '../assets/images/company-logos/pakcistrade-logo.png';
import logoTravelOps from '../assets/images/company-logos/travel-operations-logo.png';
import logoVadesGroup from '../assets/images/company-logos/vades-logo.png';
import logoArtelServ from '../assets/images/company-logos/artel-logo.png';
import logoChickenCharco from '../assets/images/company-logos/chickencharco-logo.png';
import logoFintechEdge from '../assets/images/company-logos/fintech-edge-logo.jpg';
import logoPsaUzbekistan from '../assets/images/company-logos/uzbekistan-logo.png';
import logoMetroCityLab from '../assets/images/company-logos/metrolab-logo.png';

export type BrandLogoId = 
  | 'pakcis-trade' 
  | 'travel-operations' 
  | 'vades-group' 
  | 'artel-services' 
  | 'chicken-charco' 
  | 'fintech-edge-institute' 
  | 'psa-uzbekistan' 
  | 'metro-city-lab'
  | string;

interface BrandLogoProps {
  id: BrandLogoId;
  variant?: 'full' | 'icon' | 'badge';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  darkBg?: boolean;
  className?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  id,
  size = 'md',
  className = '',
}) => {
  const [imgError, setImgError] = useState(false);
  const normId = id.toLowerCase();

  // Size mapping classes
  const containerSizeClasses = {
    sm: 'h-8 px-2.5 min-w-[90px]',
    md: 'h-11 px-3.5 min-w-[120px]',
    lg: 'h-14 px-4 min-w-[150px]',
    xl: 'h-20 px-6 min-w-[200px]',
  }[size];

  const imgHeightClasses = {
    sm: 'h-7 max-h-7',
    md: 'h-10 max-h-10',
    lg: 'h-12 max-h-12',
    xl: 'h-16 max-h-16',
  }[size];

  // Helper to get image source
  const getLogoSrc = (): string | null => {
    if (normId.includes('pakcis') || normId.includes('trade')) return logoPakcisTrade;
    if (normId.includes('travel') || normId.includes('operation')) return logoTravelOps;
    if (normId.includes('vades')) return logoVadesGroup;
    if (normId.includes('artel')) return logoArtelServ;
    if (normId.includes('chicken') || normId.includes('charco')) return logoChickenCharco;
    if (normId.includes('fintech') || normId.includes('edge') || normId.includes('institute')) return logoFintechEdge;
    if (normId.includes('uzbekistan') || normId.includes('psa')) return logoPsaUzbekistan;
    if (normId.includes('metro') || normId.includes('lab')) return logoMetroCityLab;
    return null;
  };

  const logoSrc = getLogoSrc();

  // If local image is available and hasn't failed, try rendering image tag
  if (logoSrc && !imgError) {
    return (
      <div className={`inline-flex items-center justify-center p-1 bg-white rounded-xl shadow-xs border border-slate-200/90 overflow-hidden ${className}`}>
        <img
          src={logoSrc}
          alt={`${id} official logo`}
          onError={() => setImgError(true)}
          className={`${imgHeightClasses} w-auto object-contain rounded-lg`}
          referrerPolicy="no-referrer"
        />
      </div>
    );
  }

  // Fallback high-definition vector brand badges if image fails or is missing
  if (normId.includes('pakcis') || normId.includes('trade')) {
    return (
      <div className={`inline-flex items-center justify-center bg-[#1B365D] border border-orange-500/40 rounded-xl shadow-sm text-white ${containerSizeClasses} ${className}`}>
        <div className="flex flex-col items-center justify-center leading-none">
          <div className="flex items-center gap-1">
            <span className="font-black tracking-tight text-[#FF6B00] text-sm sm:text-base">PakCIS</span>
            <span className="font-extrabold text-white text-xs sm:text-sm">TRADE</span>
          </div>
          <span className="text-[8px] font-bold text-slate-300 uppercase tracking-widest mt-0.5">B2B LOGISTICS</span>
        </div>
      </div>
    );
  }

  if (normId.includes('travel') || normId.includes('operation')) {
    return (
      <div className={`inline-flex items-center justify-center bg-[#0F2942] border border-blue-400/40 rounded-xl shadow-sm text-white ${containerSizeClasses} ${className}`}>
        <div className="flex flex-col items-center justify-center leading-none">
          <div className="flex items-center gap-1">
            <span className="font-black tracking-tight text-blue-400 text-sm sm:text-base">TRAVEL</span>
            <span className="font-extrabold text-slate-100 text-xs sm:text-sm">OPS</span>
          </div>
          <span className="text-[8px] font-bold text-sky-200 uppercase tracking-widest mt-0.5">MOBILITY & AVIATION</span>
        </div>
      </div>
    );
  }

  if (normId.includes('chicken') || normId.includes('charco')) {
    return (
      <div className={`inline-flex items-center justify-center bg-[#2A1208] border border-orange-500/40 rounded-xl shadow-sm text-white ${containerSizeClasses} ${className}`}>
        <div className="flex flex-col items-center justify-center leading-none">
          <div className="flex items-center gap-1">
            <span className="font-black tracking-tight text-amber-500 text-sm sm:text-base">CHICKEN</span>
            <span className="font-extrabold text-orange-400 text-xs sm:text-sm">CHARCO</span>
          </div>
          <span className="text-[8px] font-bold text-amber-200 uppercase tracking-widest mt-0.5">TURKISH GRILL</span>
        </div>
      </div>
    );
  }

  if (normId.includes('fintech') || normId.includes('edge') || normId.includes('institute')) {
    return (
      <div className={`inline-flex items-center justify-center bg-[#064E3B] border border-emerald-400/40 rounded-xl shadow-sm text-white ${containerSizeClasses} ${className}`}>
        <div className="flex flex-col items-center justify-center leading-none">
          <div className="flex items-center gap-1">
            <span className="font-black tracking-tight text-emerald-400 text-sm sm:text-base">FinTech</span>
            <span className="font-extrabold text-teal-100 text-xs sm:text-sm">EDGE</span>
          </div>
          <span className="text-[8px] font-bold text-emerald-200 uppercase tracking-widest mt-0.5">INSTITUTE</span>
        </div>
      </div>
    );
  }

  if (normId.includes('uzbekistan') || normId.includes('psa')) {
    return (
      <div className={`inline-flex items-center justify-center bg-[#0284C7] border border-cyan-300/40 rounded-xl shadow-sm text-white ${containerSizeClasses} ${className}`}>
        <div className="flex flex-col items-center justify-center leading-none">
          <div className="flex items-center gap-1">
            <span className="font-black tracking-tight text-white text-sm sm:text-base">PSA</span>
            <span className="font-extrabold text-cyan-200 text-xs sm:text-sm">AIRWAYS</span>
          </div>
          <span className="text-[8px] font-bold text-sky-100 uppercase tracking-widest mt-0.5">UZBEKISTAN AIRWAYS</span>
        </div>
      </div>
    );
  }

  if (normId.includes('vades')) {
    return (
      <div className={`inline-flex items-center justify-center bg-[#311042] border border-purple-400/40 rounded-xl shadow-sm text-white ${containerSizeClasses} ${className}`}>
        <div className="flex flex-col items-center justify-center leading-none">
          <div className="flex items-center gap-1">
            <span className="font-black tracking-tight text-purple-400 text-sm sm:text-base">VADES</span>
            <span className="font-extrabold text-purple-100 text-xs sm:text-sm">GROUP</span>
          </div>
          <span className="text-[8px] font-bold text-purple-200 uppercase tracking-widest mt-0.5">TECH & AI LABS</span>
        </div>
      </div>
    );
  }

  if (normId.includes('artel')) {
    return (
      <div className={`inline-flex items-center justify-center bg-[#881337] border border-rose-400/40 rounded-xl shadow-sm text-white ${containerSizeClasses} ${className}`}>
        <div className="flex flex-col items-center justify-center leading-none">
          <div className="flex items-center gap-1">
            <span className="font-black tracking-tight text-rose-300 text-sm sm:text-base">ARTEL</span>
            <span className="font-extrabold text-white text-xs sm:text-sm">SERVICES</span>
          </div>
          <span className="text-[8px] font-bold text-rose-100 uppercase tracking-widest mt-0.5">INDUSTRIAL TECH</span>
        </div>
      </div>
    );
  }

  if (normId.includes('metro') || normId.includes('lab')) {
    return (
      <div className={`inline-flex items-center justify-center bg-[#1E3A8A] border border-cyan-400/40 rounded-xl shadow-sm text-white ${containerSizeClasses} ${className}`}>
        <div className="flex flex-col items-center justify-center leading-none">
          <div className="flex items-center gap-1">
            <span className="font-black tracking-tight text-cyan-300 text-sm sm:text-base">METRO CITY</span>
            <span className="font-extrabold text-white text-xs sm:text-sm">LAB</span>
          </div>
          <span className="text-[8px] font-bold text-blue-200 uppercase tracking-widest mt-0.5">DIAGNOSTICS</span>
        </div>
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center justify-center font-extrabold text-slate-900 px-3 py-1 bg-slate-100 rounded-xl border border-slate-300 ${className}`}>
      {id}
    </div>
  );
};
