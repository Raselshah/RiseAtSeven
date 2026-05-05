// app/page.tsx
'use client';

import { useEffect } from 'react';
import AnouncmentBar from './components/HomepageV2/AnnouncementBar';
import BlogSection from './components/HomepageV2/BlogSection';
import ClientMarquee from './components/HomepageV2/ClientMarquee';
import DrivingDemand from './components/HomepageV2/DrivingDemand';
import FeaturedWork from './components/HomepageV2/FeaturedWork';
import Footer from './components/HomepageV2/Footer';
import Header from './components/HomepageV2/Header';
import Hero from './components/HomepageV2/Hero';
import LegacySection from './components/HomepageV2/LegacySection';
import MarqueeLoop from './components/HomepageV2/MarqueeLoop';
import ServicesSection from './components/HomepageV2/ServicesSection';
declare global {
  interface Window {
    gsap: any;
    ScrollTrigger: any;
    Swiper: any;
  }
}
export default function Home() {
  useEffect(() => {
    // Initialize GSAP and ScrollTrigger
    const initGSAP = () => {
      if (typeof window !== 'undefined' && window.gsap && window.ScrollTrigger) {
        window.gsap.registerPlugin(window.ScrollTrigger);
      }
    };
    
    initGSAP();
    
    // Poll for GSAP if not loaded yet
    const interval = setInterval(() => {
      if (window.gsap) {
        initGSAP();
        clearInterval(interval);
      }
    }, 100);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-grey-100">
      <AnouncmentBar/>
      <Header />
      <Hero />
      <ClientMarquee />
      <DrivingDemand />
      <FeaturedWork />
      <ServicesSection />
      <MarqueeLoop />
      <LegacySection />
      <BlogSection />
      <Footer />
    </div>
  );
}