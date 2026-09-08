import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sun, Moon } from 'lucide-react';
import { Button } from './Button';
import './Navbar.css';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Why ZORX', href: '#why-zorx' },
  { label: 'Our Work', href: '#portfolio' },
];

export function Navbar({ theme = 'light', toggleTheme }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrolled = window.scrollY > 30;
          setIsScrolled((prev) => (prev !== scrolled ? scrolled : prev));

          const sections = ['about', 'services', 'why-zorx', 'portfolio', 'contact'];
          const scrollPosition = window.scrollY + 200;

          for (const sectionId of sections) {
            const el = document.getElementById(sectionId);
            if (el) {
              const top = el.offsetTop;
              const height = el.offsetHeight;
              if (scrollPosition >= top && scrollPosition < top + height) {
                setActiveSection((prev) => (prev !== sectionId ? sectionId : prev));
                break;
              }
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const logoSrc = theme === 'dark' 
    ? '/assets/brand/zorx-logo-white.png' 
    : '/assets/brand/zorx-logo-green.png';

  return (
    <header className={`zorx-navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        {/* Logo Asset */}
        <a href="#hero" className="nav-logo" onClick={closeMobileMenu}>
          <img 
            src={logoSrc} 
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

        {/* Right Actions: Theme Toggle + Contact CTA */}
        <div className="nav-actions desktop-only">
          {toggleTheme && (
            <button
              type="button"
              className="theme-toggle-btn"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'light' ? 'Dark' : 'Light'} Mode`}
              title={`Switch to ${theme === 'light' ? 'Dark' : 'Light'} Mode`}
            >
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>
          )}

          <Button href="#contact" variant="primary" size="sm" icon={ArrowUpRight}>
            Start a Project
          </Button>
        </div>

        {/* Mobile Actions: Theme Toggle + Hamburger Toggle */}
        <div className="mobile-actions-right">
          {toggleTheme && (
            <button
              type="button"
              className="theme-toggle-btn mobile-theme-btn"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'light' ? 'Dark' : 'Light'} Mode`}
            >
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>
          )}

          <button
            type="button"
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="drawer-inner">
          <div className="drawer-logo">
            <img 
              src={logoSrc} 
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

