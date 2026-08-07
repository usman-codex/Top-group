import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import heroBgImage from '../assets/images/topgroup-img.jpeg';

interface HeroProps {
  onOpenContact: () => void;
  onNavigateSection: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenContact,
  onNavigateSection,
}) => {
  return (
    <section id="hero" className="w-full bg-white">

 
<div className="w-full bg-white pt-[85px]">
  <img
    src={heroBgImage}
    alt="TOP GROUP Global Logistics & Trade Network"
    className="w-full h-auto block object-contain"
    referrerPolicy="no-referrer"
  />
</div>


      {/* =====================================================
          CONTENT SECTION
          Everything below the image
      ===================================================== */}
      <div className="w-full bg-[#FFF6EE]">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24">

          {/* =================================================
              CENTER CONTENT
          ================================================= */}
          <div className="max-w-4xl mx-auto text-center">


            {/* =================================================
                SMALL LABEL
            ================================================= */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{
                delay: 0.1,
                duration: 0.6,
              }}
              className="
                inline-flex
                items-center
                justify-center
                gap-2
                px-4
                py-1.5
                rounded-full
                bg-orange-50
                border
                border-orange-200
                text-xs
                font-bold
                tracking-widest
                text-[#FF6B00]
                uppercase
                shadow-sm
              "
            >
              <span
                className="
                  w-2
                  h-2
                  rounded-full
                  bg-[#FF6B00]
                "
              />

              TRADE • TRUST • TOGETHER
            </motion.div>


            {/* =================================================
                MAIN HEADING
            ================================================= */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{
                delay: 0.2,
                duration: 0.7,
              }}
              className="
                mt-5
                text-4xl
                sm:text-5xl
                lg:text-6xl
                font-extrabold
                tracking-tight
                text-slate-900
                leading-[1.15]
                font-heading
              "
            >
              Group of{' '}

              <span className="text-[#FF6B00] relative inline-block">

                Companies

                {/* Orange underline */}
                <span
                  className="
                    absolute
                    bottom-0
                    left-0
                    w-full
                    h-1
                    bg-orange-500/80
                    rounded-full
                  "
                />

              </span>
            </motion.h1>


            {/* =================================================
                TAGLINE
            ================================================= */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{
                delay: 0.3,
                duration: 0.7,
              }}
              className="
                mt-4
                text-2xl
                sm:text-3xl
                lg:text-4xl
                font-normal
                italic
                text-slate-600
                font-heading
              "
            >
              “One Group, Multiple Solutions”
            </motion.p>


            {/* =================================================
                DESCRIPTION
            ================================================= */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{
                delay: 0.4,
                duration: 0.7,
              }}
              className="
                mt-6
                text-base
                sm:text-lg
                text-slate-600
                font-normal
                leading-relaxed
                max-w-3xl
                mx-auto
              "
            >
              TOP GROUP is a diversified global business ecosystem
              empowering companies across technology, international trade,
              education, travel, hospitality, fintech, and digital innovation.
              We transform ideas into scalable market leaders through
              strategic execution.
            </motion.p>


            {/* =================================================
                CTA BUTTONS
            ================================================= */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{
                delay: 0.5,
                duration: 0.7,
              }}
              className="
                flex
                flex-col
                sm:flex-row
                items-center
                justify-center
                gap-4
                pt-8
              "
            >

              {/* Explore Ecosystem */}
              <button
                onClick={() => onNavigateSection('companies')}
                className="
                  px-8
                  py-4
                  rounded-full
                  font-bold
                  text-base
                  text-white
                  btn-orange-gradient
                  flex
                  items-center
                  justify-center
                  gap-3
                  cursor-pointer
                  group
                  shadow-xl
                  hover:shadow-orange-500/30
                  hover:scale-105
                  transition-all
                "
              >
                <span>
                  Explore Our Ecosystem
                </span>

                <ArrowRight
                  className="
                    w-5
                    h-5
                    group-hover:translate-x-1
                    transition-transform
                  "
                />
              </button>


              {/* Book Consultation */}
              <button
                onClick={onOpenContact}
                className="
                  px-8
                  py-4
                  rounded-full
                  font-bold
                  text-base
                  text-white
                  bg-[#1B365D]
                  hover:bg-[#142A48]
                  border
                  border-[#1B365D]
                  transition-all
                  flex
                  items-center
                  justify-center
                  gap-3
                  cursor-pointer
                  shadow-lg
                  hover:shadow-blue-900/30
                  hover:scale-105
                "
              >
                <span>
                  Book a Consultation
                </span>
              </button>

            </motion.div>


            {/* =================================================
                TRUST / STATS
            ================================================= */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{
                delay: 0.6,
                duration: 0.8,
              }}
              className="
                mt-12
                pt-8
                border-t
                border-slate-200
                grid
                grid-cols-1
                sm:grid-cols-3
                gap-8
              "
            >

              {/* =============================================
                  STAT 1
              ============================================= */}
              <div className="text-center">

                <div
                  className="
                    text-3xl
                    sm:text-4xl
                    font-extrabold
                    text-[#FF6B00]
                    font-heading
                  "
                >
                  15+
                </div>

                <div
                  className="
                    text-sm
                    font-semibold
                    text-slate-600
                    mt-1
                  "
                >
                  Sister Ventures
                </div>

              </div>


              {/* =============================================
                  STAT 2
              ============================================= */}
              <div className="text-center">

                <div
                  className="
                    text-3xl
                    sm:text-4xl
                    font-extrabold
                    text-[#1B365D]
                    font-heading
                  "
                >
                  38+
                </div>

                <div
                  className="
                    text-sm
                    font-semibold
                    text-slate-600
                    mt-1
                  "
                >
                  Global Trade Routes
                </div>

              </div>


              {/* =============================================
                  STAT 3
              ============================================= */}
              <div className="text-center">

                <div
                  className="
                    text-3xl
                    sm:text-4xl
                    font-extrabold
                    text-[#1B365D]
                    font-heading
                  "
                >
                  $2.4B+
                </div>

                <div
                  className="
                    text-sm
                    font-semibold
                    text-slate-600
                    mt-1
                  "
                >
                  Ecosystem Value
                </div>

              </div>

            </motion.div>

          </div>
        </div>
      </div>

    </section>
  );
};
