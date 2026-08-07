import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView } from 'motion/react';
import {
  Globe2,
  Building2,
  Trophy,
  Users2,
  CheckCircle2,
  ShieldCheck
} from 'lucide-react';

import { TopGroupLogo } from './TopGroupLogo';

// Company Logo Images
import vadesLogo from '../assets/images/company-logos/vades-logo.png';
import artelLogo from '../assets/images/company-logos/artel-logo.png';
import chickenCharcoLogo from '../assets/images/company-logos/chickencharco-logo.png';
import fintechEdgeLogo from '../assets/images/company-logos/fintech-edge-logo.jpg';
import travelOperationsLogo from '../assets/images/company-logos/travel-operations-logo.png';
import pakcisTradeLogo from '../assets/images/company-logos/pakcistrade-logo.png';
import uzbekistanLogo from '../assets/images/company-logos/uzbekistan-logo.png';
import metrolabLogo from '../assets/images/company-logos/metrolab-logo.png';

const AnimatedCounter: React.FC<{ value: string }> = ({ value }) => {
  const [current, setCurrent] = useState<number>(0);
  const containerRef = useRef<HTMLSpanElement>(null);

  const isInView = useInView(containerRef, {
    once: false,
    margin: '-20px'
  });

  const prefix = value.match(/^[^\d]+/)?.[0] || '';
  const suffix =
    value.match(/[^\d,.]+$|\+$|%$/)?.[0] || '';

  const numPart = value
    .replace(/^[^\d]+/, '')
    .replace(/[^\d,.]+$|\+$|%$/, '');

  const hasCommas = numPart.includes(',');
  const cleanNum = numPart.replace(/,/g, '');

  const target = parseFloat(cleanNum);
  const isFloat = cleanNum.includes('.');

  const decimals = isFloat
    ? cleanNum.split('.')[1]?.length || 1
    : 0;

  useEffect(() => {
    if (!isInView || isNaN(target)) {
      setCurrent(0);
      return;
    }

    const duration = 1200;
    const startTime = performance.now();

    let animId: number;

    const updateCount = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const easeProgress =
        progress === 1
          ? 1
          : 1 - Math.pow(2, -10 * progress);

      setCurrent(easeProgress * target);

      if (progress < 1) {
        animId = requestAnimationFrame(updateCount);
      }
    };

    animId = requestAnimationFrame(updateCount);

    return () => cancelAnimationFrame(animId);
  }, [isInView, target]);

  if (isNaN(target)) {
    return <span>{value}</span>;
  }

  let formatted = isFloat
    ? current.toFixed(decimals)
    : Math.floor(current).toString();

  if (hasCommas) {
    const parts = formatted.split('.');

    parts[0] = parts[0].replace(
      /\B(?=(\d{3})+(?!\d))/g,
      ','
    );

    formatted = parts.join('.');
  }

  return (
    <span ref={containerRef}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
};


export const CompanyStats: React.FC = () => {

  const stats = [
    {
      label: 'Sister Companies',
      value: '15+',
      icon: Building2,
      color: 'text-[#FF6B00]'
    },
    {
      label: 'Global Enterprise Clients',
      value: '2,000+',
      icon: Users2,
      color: 'text-blue-600'
    },
    {
      label: 'Completed Megaprojects',
      value: '40+',
      icon: Trophy,
      color: 'text-[#FF6B00]'
    },
    {
      label: 'International Countries',
      value: '38+',
      icon: Globe2,
      color: 'text-blue-600'
    },
    {
      label: 'Specialized Workforce',
      value: '3,200+',
      icon: ShieldCheck,
      color: 'text-[#FF6B00]'
    },
    {
      label: 'Client Satisfaction SLA',
      value: '98.4%',
      icon: CheckCircle2,
      color: 'text-blue-600'
    }
  ];


  // ==============================
  // COMPANY LOGOS
  // ==============================

 const companyLogos = [
   {
    name: 'Pakcis Trade',
    image: pakcisTradeLogo
  },
  {
    name: 'Travel Operations',
    image: travelOperationsLogo
  },
   {
    name: 'Chicken Charco',
    image: chickenCharcoLogo
  },
   {
    name: 'FinTech Edge Institute',
    image: fintechEdgeLogo
  },
  {
  
    name: 'Vades Group',
    image: vadesLogo
  },
  {
    name: 'Artel Services',
    image: artelLogo
  },
 
  {
    name: 'Uzbekistan',
    image: uzbekistanLogo
  },
  {
    name: 'Metrolab',
    image: metrolabLogo
  }

];

  return (
    <section className="py-20 bg-white relative border-y border-slate-200 overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* ==============================
              LEFT COLUMN
          ============================== */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 space-y-6 text-left"
          >

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-xs font-bold text-[#FF6B00] uppercase tracking-widest shadow-sm">
              Impact at Scale
            </div>


            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
              Proven Global Excellence in{' '}
              <span className="text-[#FF6B00]">
                Numbers
              </span>
            </h2>


            <p className="text-base text-slate-600 leading-relaxed font-normal">
              Through strategic cross-border synergy, TOP GROUP drives measurable market capital, transit volume, and software efficiency for partners around the globe.
            </p>


            {/* TOP GROUP CARD */}

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm flex items-center gap-4">

              <div className="bg-white p-2.5 rounded-xl border border-slate-200 shadow-sm shrink-0">
                <TopGroupLogo
                  size="md"
                  variant="group"
                  textColor="dark"
                />
              </div>

              <div>
                <div className="text-sm font-bold text-slate-900 font-heading">
                  TOP GROUP Global Network
                </div>

                <div className="text-xs text-slate-500 font-medium">
                  Headquartered in Tashkent with hubs in Dubai & London
                </div>
              </div>

            </div>

          </motion.div>


          {/* ==============================
              RIGHT COLUMN - STATS
          ============================== */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-4"
          >

            {stats.map((st, idx) => {

              const Icon = st.icon;

              return (
                <motion.div
                  key={st.label}
                  initial={{
                    opacity: 0,
                    scale: 0.9
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1
                  }}
                  viewport={{
                    once: false
                  }}
                  transition={{
                    delay: idx * 0.08,
                    duration: 0.5
                  }}
                  className="p-5 rounded-2xl bg-white border border-slate-200 shadow-md hover:shadow-lg text-center flex flex-col items-center justify-center space-y-2 group transition-all"
                >

                  <div
                    className={`w-10 h-10 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center ${st.color} group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>


                  <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading tracking-tight">
                    <AnimatedCounter value={st.value} />
                  </div>


                  <div className="text-xs text-slate-500 font-semibold">
                    {st.label}
                  </div>

                </motion.div>
              );

            })}

          </motion.div>

        </div>


        {/* =====================================
            COMPANY LOGOS SECTION
        ===================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: false
          }}
          transition={{
            duration: 0.8,
            delay: 0.2
          }}
          className="mt-16 pt-10 border-t border-slate-200"
        >

          {/* Heading */}

          <div className="text-center mb-8">

            <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">
              POWERING OUR GLOBAL VENTURE ECOSYSTEM
            </span>

          </div>


          {/* =====================================
              LOGO GRID
          ===================================== */}

          {/* <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">

            {companyLogos.map((company, index) => (

              <motion.div
                key={company.name}
                initial={{
                  opacity: 0,
                  y: 15
                }}
                whileInView={{
                  opacity: 1,
                  y: 0
                }}
                viewport={{
                  once: false
                }}
                transition={{
                  delay: index * 0.08,
                  duration: 0.5
                }}
                className="
                  h-24
                  rounded-2xl
                  bg-slate-50
                  border
                  border-slate-200
                  hover:border-[#FF6B00]/50
                  hover:bg-white
                  hover:shadow-lg
                  transition-all
                  duration-300
                  flex
                  items-center
                  justify-center
                  p-4
                  group
                "
              >

                <img
                  src={company.image}
                  alt={company.name}
                  title={company.name}
                  className="
                    max-w-[140px]
                    max-h-[65px]
                    w-auto
                    h-auto
                    object-contain
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  "
                />

              </motion.div>

            ))}

          </div> */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
  {companyLogos.map((company, index) => (
    <motion.div
      key={company.name}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{
        delay: index * 0.08,
        duration: 0.5,
      }}
      className="
        h-32
        rounded-2xl
        bg-white
        border
        border-slate-200
        hover:border-[#FF6B00]
        hover:shadow-xl
        transition-all
        duration-300
        flex
        items-center
        justify-center
        p-6
        group
      "
    >
      <div className="w-[170px] h-[80px] flex items-center justify-center">
        <img
          src={company.image}
          alt={company.name}
          title={company.name}
          className="
            w-full
            h-full
            object-contain
            object-center
            transition-transform
            duration-300
            group-hover:scale-105
          "
        />
      </div>
    </motion.div>
  ))}
</div>

        </motion.div>

      </div>

    </section>
  );
};