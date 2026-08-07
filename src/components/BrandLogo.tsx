import React from 'react';

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
  const normId = id.toLowerCase();

  // Size mappings
  const heightClasses = {
    sm: 'h-7 sm:h-8',
    md: 'h-10 sm:h-12',
    lg: 'h-14 sm:h-16',
    xl: 'h-20 sm:h-24',
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

  if (!logoSrc) {
    return <div className={`font-bold text-slate-900 ${className}`}>{id}</div>;
  }

  return (
    <div className={`inline-flex items-center justify-center p-1 bg-white rounded-xl shadow-xs border border-slate-200/80 overflow-hidden ${className}`}>
      <img
        src={logoSrc}
        alt={`${id} official logo`}
        className={`${heightClasses} w-auto object-contain rounded-lg`}
        referrerPolicy="no-referrer"
      />
    </div>
  );
};


