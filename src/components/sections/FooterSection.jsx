import React from 'react';
import { ArrowUp, MapPin, Mail, Phone } from 'lucide-react';
import './FooterSection.css';

export function FooterSection() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="zorx-footer">
      <div className="container">
        <div className="footer-top-grid">
          {/* Column 1: Brand Info & Official White Logo */}
          <div className="footer-brand-col">
            <a href="#" className="footer-logo">
              <img 
                src="/assets/brand/zorx-logo-white.png" 
                alt="ZORX Fueling Brands Growth" 
                className="footer-logo-img" 
              />
            </a>
            <p className="footer-tagline">
              Middle East's premier digital performance marketing & brand transformation agency. Architecting revenue dominance for ambitious enterprises in Dubai & global markets.
            </p>
            <div className="footer-contact-info">
              <div className="contact-item">
                <Mail size={16} className="contact-icon" />
                <span>zrox@gmail.com</span>
              </div>
              <div className="contact-item">
                <Phone size={16} className="contact-icon" />
                <span>9876543210</span>
              </div>
            </div>
          </div>

          {/* Column 2: Regional Offices */}
          <div className="footer-nav-col">
            <h4 className="footer-col-title">Offices</h4>
            <div className="office-location">
              <div className="office-header">
                <MapPin size={16} className="pin-icon" />
                <strong>DUBAI</strong>
              </div>
              <p className="office-address">
                Building 7, Dubai Design District (d3), UAE
              </p>
            </div>
            <div className="office-location">
              <div className="office-header">
                <MapPin size={16} className="pin-icon" />
                <strong>MANNARKKAD, KERALA</strong>
              </div>
              <p className="office-address">
                Building One<br />
                Mannarkkad, Palakkad, Kerala
              </p>
            </div>
          </div>

          {/* Column 3: Quick Navigation */}
          <div className="footer-nav-col">
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-links-list">
              <li><a href="#hero">Home</a></li>
              <li><a href="#about">About ZORX</a></li>
              <li><a href="#services">Capabilities</a></li>
              <li><a href="#why-zorx">The ZORX Advantage</a></li>
              <li><a href="#portfolio">Our Work</a></li>
              <li><a href="#contact">Get Proposal</a></li>
            </ul>
          </div>

          {/* Column 4: Core Services */}
          <div className="footer-nav-col">
            <h4 className="footer-col-title">Capabilities</h4>
            <ul className="footer-links-list">
              <li><a href="#services">Paid Media Buying</a></li>
              <li><a href="#services">SEO & GEO Search</a></li>
              <li><a href="#services">CRO & Funnel Tech</a></li>
              <li><a href="#services">3D Brand Studio</a></li>
              <li><a href="#services">GCC Influencer PR</a></li>
              <li><a href="#services">AI Analytics Engine</a></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom-bar">
          <p className="copyright-text">
            © {new Date().getFullYear()} ZORX Digital Marketing FZ-LLC. All Rights Reserved. Built with precision for the Middle East market.
          </p>

          <button type="button" className="scroll-top-btn" onClick={scrollToTop} aria-label="Scroll to top">
            <span>Back to top</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
