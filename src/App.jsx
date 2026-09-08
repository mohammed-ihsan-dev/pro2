import React, { useState, useEffect } from 'react';
import { Preloader } from './components/common/Preloader';
import { Navbar } from './components/common/Navbar';
import { HeroSection } from './components/sections/HeroSection';
import { AboutSection } from './components/sections/AboutSection';
import { ServicesSection } from './components/sections/ServicesSection';
import { WhyZorxSection } from './components/sections/WhyZorxSection';
import { PortfolioSection } from './components/sections/PortfolioSection';
import { CTASection } from './components/sections/CTASection';
import { FooterSection } from './components/sections/FooterSection';
import { PortfolioModal } from './components/common/PortfolioModal';
import { useIntersectionObserver } from './hooks/useIntersectionObserver';
import './styles/globals.css';

const sectionTitleMap = {
  hero: 'ZORX | Home',
  about: 'ZORX | About',
  services: 'ZORX | Services',
  'why-zorx': 'ZORX | Why ZORX',
  portfolio: 'ZORX | Our Work',
  contact: 'ZORX | Contact',
};

export function App() {
  const [loading, setLoading] = useState(true);
  const [selectedItem, setSelectedItem] = useState(null);

  // Initialize Intersection Observer hook for scroll-triggered animations
  useIntersectionObserver({
    selector: '.reveal-up, .reveal-fade, .reveal-scale, .img-reveal-wrapper',
    threshold: 0.1,
    once: true
  });

  // Dynamic document title update based on active visible section
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const titleObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            if (sectionTitleMap[sectionId]) {
              document.title = sectionTitleMap[sectionId];
            }
          }
        });
      },
      { threshold: 0.35 }
    );

    sections.forEach((sec) => titleObserver.observe(sec));
    return () => titleObserver.disconnect();
  }, []);

  return (
    <div className="zorx-app">
      {loading && <Preloader onComplete={() => setLoading(false)} />}

      <Navbar />

      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection onSelectService={(service) => setSelectedItem(service)} />
        <WhyZorxSection />
        <PortfolioSection onOpenModal={(item) => setSelectedItem(item)} />
        <CTASection />
      </main>

      <FooterSection />

      {selectedItem && (
        <PortfolioModal 
          item={selectedItem} 
          onClose={() => setSelectedItem(null)} 
        />
      )}
    </div>
  );
}

export default App;

