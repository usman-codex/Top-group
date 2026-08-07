import React from 'react';

interface TopGroupLogoProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'group' | 'digital';
  textColor?: 'dark' | 'light' | 'auto';
  className?: string;
}

export const TopGroupLogo: React.FC<TopGroupLogoProps> = ({
  size = 'md',
  variant = 'group',
  textColor = 'auto',
  className = '',
}) => {
  const sizeClasses = {
    sm: {
      box: 'w-5 h-5 text-xs rounded-[3px]',
      gap: 'gap-0.5',
      text: 'text-[9px] tracking-[0.2em] font-black mt-0.5',
    },
    md: {
      box: 'w-7 h-7 text-base rounded-[4px]',
      gap: 'gap-1',
      text: 'text-[11px] tracking-[0.25em] font-black mt-0.5',
    },
    lg: {
      box: 'w-10 h-10 text-xl rounded-[6px]',
      gap: 'gap-1.5',
      text: 'text-sm tracking-[0.3em] font-black mt-1',
    },
  }[size];

  const subTextColorClass =
    textColor === 'light'
      ? 'text-white'
      : textColor === 'dark'
      ? 'text-slate-900'
      : 'text-slate-900 dark:text-white';

  return (
    <div className={`inline-flex flex-col items-center select-none group cursor-pointer ${className}`}>
      {/* 3 Iconic Colored Squares: T (Blue), O (Orange), P (Green) */}
      <div className={`flex items-center ${sizeClasses.gap}`}>
        {/* T Square - Navy Blue */}
        <div className={`${sizeClasses.box} bg-[#1B365D] text-white flex items-center justify-center font-serif font-extrabold shadow-xs transition-transform group-hover:-translate-y-0.5`}>
          T
        </div>

        {/* O Square - Vibrant Orange */}
        <div className={`${sizeClasses.box} bg-[#E05228] text-white flex items-center justify-center font-serif font-extrabold shadow-xs transition-transform group-hover:-translate-y-0.5 delay-75`}>
          O
        </div>

        {/* P Square - Apple Green */}
        <div className={`${sizeClasses.box} bg-[#73B828] text-white flex items-center justify-center font-serif font-extrabold shadow-xs transition-transform group-hover:-translate-y-0.5 delay-150`}>
          P
        </div>
      </div>

      {/* Bottom Text - GROUP / DIGITAL */}
      <div className={`${sizeClasses.text} ${subTextColorClass} uppercase font-heading text-center leading-none`}>
        {variant === 'group' ? 'GROUP' : 'DIGITAL'}
      </div>
    </div>
  );
};
