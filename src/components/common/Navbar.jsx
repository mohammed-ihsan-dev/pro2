import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { Button } from './Button';
import './Navbar.css';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Why ZORX', href: '#why-zorx' },
  { label: 'Our Work', href: '#portfolio' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = ['about', 'services', 'why-zorx', 'portfolio', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={`zorx-navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        {/* Logo Asset */}
        <a href="#hero" className="nav-logo" onClick={closeMobileMenu}>
          <img 
            src="/assets/brand/zorx-logo-white.png" 
            alt="ZORX Fueling Brands Growth" 
            className="nav-logo-img"
          />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="nav-links desktop-only">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`nav-link ${activeSection === item.href.replace('#', '') ? 'active' : ''}`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Action Button */}
        <div className="nav-actions desktop-only">
          <Button href="#contact" variant="primary" size="sm" icon={ArrowUpRight}>
            Start a Project
          </Button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          className="mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="drawer-inner">
          <div className="drawer-logo">
            <img 
              src="/assets/brand/zorx-logo-white.png" 
              alt="ZORX" 
              className="drawer-logo-img" 
            />
          </div>
          <nav className="mobile-nav-links">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="mobile-nav-link"
                onClick={closeMobileMenu}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="mobile-drawer-cta">
            <Button href="#contact" variant="primary" size="lg" icon={ArrowUpRight} onClick={closeMobileMenu}>
              Start a Project
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
