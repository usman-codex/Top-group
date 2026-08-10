import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUp } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';

import { AboutSection } from './components/AboutSection';
import { AboutPage } from './components/AboutPage';
import { MediaEventsPage } from './components/MediaEventsPage';
import { ResourcesPage } from './components/ResourcesPage';
import { PakCisTradePage } from './components/PakCisTradePage';
import { FintechEdgePage } from './components/FintechEdgePage';
import { ArtelServicesPage } from './components/ArtelServicesPage';
import { PsaUzbekistanPage } from './components/PsaUzbekistanPage';
import { TravelOperationsPage } from './components/TravelOperationsPage';
import { WhyTopGroup } from './components/WhyTopGroup';
import { CompaniesGrid } from './components/CompaniesGrid';
import { CompanyDetailModal } from './components/CompanyDetailModal';
import { CompanyStats } from './components/CompanyStats';
import { CapabilitiesGrid } from './components/CapabilitiesGrid';
import { IndustriesServed } from './components/IndustriesServed';
import { WhatWeDoTimeline } from './components/WhatWeDoTimeline';
import { BusinessServices } from './components/BusinessServices';
import { MediaGallery } from './components/MediaGallery';
import { EventDetailModal } from './components/EventDetailModal';
import { GlobalImpactMap } from './components/GlobalImpactMap';
import { AchievementsSection } from './components/AchievementsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { BlogSection } from './components/BlogSection';
import { BlogPostModal } from './components/BlogPostModal';
import { FaqSection } from './components/FaqSection';
import { CtaBanner } from './components/CtaBanner';
import { ContactModal } from './components/ContactModal';
import { VideoModal } from './components/VideoModal';
import { Footer } from './components/Footer';
import { COMPANIES } from './data/mockData';
import { Company, MediaEvent, BlogPost } from './types';

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'about' | 'media-events' | 'resources' | 'pakcis-trade' | 'fintech-edge' | 'artel-services' | 'psa-uzbekistan' | 'travel-operations'>('home');
  const [contactOpen, setContactOpen] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 250);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<MediaEvent | null>(null);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const handleSelectCompanyById = (companyId: string) => {
    if (companyId === '1' || companyId === 'pakcis-trade' || companyId === 'pakcis') {
      setCurrentView('pakcis-trade');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    if (companyId === '2' || companyId === 'travel-operations' || companyId === 'travel') {
      setCurrentView('travel-operations');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    if (companyId === '4' || companyId === 'psa-uzbekistan' || companyId === 'psa-for-uzbekistan' || companyId === 'psa') {
      setCurrentView('psa-uzbekistan');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    if (companyId === '5' || companyId === 'fintech-edge-institute' || companyId === 'fintech-edge' || companyId === 'fintech') {
      setCurrentView('fintech-edge');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    if (companyId === '7' || companyId === 'artel-services' || companyId === 'artel') {
      setCurrentView('artel-services');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const comp = COMPANIES.find(c => c.id === companyId || c.slug === companyId);
    if (comp) {
      setSelectedCompany(comp);
    }
  };

  const handleNavigateSection = (sectionId: string) => {
    if (sectionId === 'pakcis-trade' || sectionId === 'pakcis' || sectionId === '1') {
      setCurrentView('pakcis-trade');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (sectionId === 'travel-operations' || sectionId === 'travel' || sectionId === '2') {
      setCurrentView('travel-operations');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (sectionId === 'psa-uzbekistan' || sectionId === 'psa-for-uzbekistan' || sectionId === 'psa' || sectionId === '4') {
      setCurrentView('psa-uzbekistan');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (sectionId === 'fintech-edge' || sectionId === 'fintech-edge-institute' || sectionId === 'fintech' || sectionId === '5') {
      setCurrentView('fintech-edge');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (sectionId === 'artel-services' || sectionId === 'artel' || sectionId === '7') {
      setCurrentView('artel-services');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (sectionId === 'about-page' || sectionId === 'about') {
      setCurrentView('about');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (sectionId === 'media' || sectionId === 'media-events') {
      setCurrentView('media-events');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (sectionId === 'resources' || sectionId === 'resources-page' || sectionId === 'blog') {
      setCurrentView('resources');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (currentView !== 'home') {
      setCurrentView('home');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 100);
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FFF6EE] text-slate-900 selection:bg-[#FF6B00] selection:text-white font-sans antialiased">
      {/* 1. Sticky Navigation Bar */}
      <Navbar 
        onOpenContact={() => setContactOpen(true)}
        onSelectCompany={handleSelectCompanyById}
        onNavigateSection={handleNavigateSection}
      />

      {/* Main Content View Switcher */}
      {currentView === 'about' ? (
        <AboutPage 
          onBackToHome={() => {
            setCurrentView('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          onOpenContact={() => setContactOpen(true)}
          onOpenVideo={() => setVideoOpen(true)}
          onSelectCompany={handleSelectCompanyById}
        />
      ) : currentView === 'media-events' ? (
        <MediaEventsPage 
          onBackToHome={() => {
            setCurrentView('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          onSelectEvent={(event) => setSelectedEvent(event)}
          onOpenContact={() => setContactOpen(true)}
          onOpenVideo={() => setVideoOpen(true)}
        />
      ) : currentView === 'resources' ? (
        <ResourcesPage 
          onBackToHome={() => {
            setCurrentView('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          onOpenContact={() => setContactOpen(true)}
          onOpenVideo={() => setVideoOpen(true)}
          onSelectPost={(post) => setSelectedPost(post)}
        />
      ) : currentView === 'pakcis-trade' ? (
        <PakCisTradePage
          onBackToHome={() => {
            setCurrentView('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          onOpenContact={() => setContactOpen(true)}
          onOpenVideo={() => setVideoOpen(true)}
          onSelectCompany={handleSelectCompanyById}
        />
      ) : currentView === 'fintech-edge' ? (
        <FintechEdgePage
          onBackToHome={() => {
            setCurrentView('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          onOpenContact={() => setContactOpen(true)}
          onOpenVideo={() => setVideoOpen(true)}
          onSelectCompany={handleSelectCompanyById}
        />
      ) : currentView === 'artel-services' ? (
        <ArtelServicesPage
          onBackToHome={() => {
            setCurrentView('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          onOpenContact={() => setContactOpen(true)}
          onOpenVideo={() => setVideoOpen(true)}
          onSelectCompany={handleSelectCompanyById}
        />
      ) : currentView === 'psa-uzbekistan' ? (
        <PsaUzbekistanPage
          onBackToHome={() => {
            setCurrentView('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          onOpenContact={() => setContactOpen(true)}
          onOpenVideo={() => setVideoOpen(true)}
          onSelectCompany={handleSelectCompanyById}
        />
      ) : currentView === 'travel-operations' ? (
        <TravelOperationsPage
          onBackToHome={() => {
            setCurrentView('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          onOpenContact={() => setContactOpen(true)}
          onSelectCompany={handleSelectCompanyById}
        />
      ) : (
        <main>
          {/* 2. Hero Section */}
          <Hero 
            onOpenContact={() => setContactOpen(true)}
  onNavigateSection={handleNavigateSection}
  
          />

           {/* 5. Our Companies (2 Rows x 3 Cards Grid) */}
          <CompaniesGrid 
            onSelectCompany={handleSelectCompanyById}
          />


          {/* 3. About TOP GROUP Ecosystem */}
          <AboutSection 
            onOpenVideo={() => setVideoOpen(true)}
            onNavigateSection={handleNavigateSection}
          />

          {/* 4. Why TOP GROUP (4 Glass Cards) */}
          <WhyTopGroup 
            onNavigateSection={handleNavigateSection}
          />

         
          {/* 6. Company Statistics (Animated Counters) */}
          <CompanyStats />

          {/* 7. Capabilities (4-Column Grid) */}
          <CapabilitiesGrid 
            onNavigateSection={handleNavigateSection}
            onOpenContact={() => setContactOpen(true)}
          />

          {/* 8. Industries We Serve (Bento Grid) */}
          <IndustriesServed />

          {/* 9. What We Do (8-Step Process Timeline) */}
          <WhatWeDoTimeline />

          {/* 10. Commercial Services & Advisory */}
          <BusinessServices 
            onOpenContact={() => setContactOpen(true)}
          />

          {/* 11. Events, Delegations & Media Gallery */}
          <MediaGallery 
            onSelectEvent={(event) => setSelectedEvent(event)}
            onNavigateSection={handleNavigateSection}
          />

          {/* 12. Global Impact & Network Map */}
          <GlobalImpactMap />

          {/* 13. Achievements & Certifications */}
          <AchievementsSection />

          {/* 14. Testimonials & Client Reviews */}
          <TestimonialsSection 
            onOpenVideo={() => setVideoOpen(true)}
          />

          {/* 15. Executive Blog & Resources */}
          <BlogSection 
            onSelectPost={(post) => setSelectedPost(post)}
            onNavigateSection={handleNavigateSection}
          />

          {/* 16. FAQ Accordion */}
          <div id="faq">
            <FaqSection />
          </div>

          {/* 17. Final CTA Banner */}
          <CtaBanner 
            onOpenContact={() => setContactOpen(true)}
            onNavigateSection={handleNavigateSection}
          />
        </main>
      )}

      {/* Footer */}
      <Footer 
        onOpenContact={() => setContactOpen(true)}
        onSelectCompany={handleSelectCompanyById}
        onNavigateSection={handleNavigateSection}
      />

      {/* Interactive Modals */}
      <CompanyDetailModal 
        company={selectedCompany}
        onClose={() => setSelectedCompany(null)}
        onOpenContact={() => setContactOpen(true)}
      />

      <EventDetailModal 
        event={selectedEvent}
        onClose={() => setSelectedEvent(null)}
        onOpenContact={() => setContactOpen(true)}
      />

      <BlogPostModal 
        post={selectedPost}
        onClose={() => setSelectedPost(null)}
      />

      <ContactModal 
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
      />

      <VideoModal 
        isOpen={videoOpen}
        onClose={() => setVideoOpen(false)}
      />
    </div>
  );
}
