import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useParallax } from '../../hooks/useParallax';
import './AboutSection.css';

export function AboutSection() {
  const parallaxOffset = useParallax(25);

  return (
    <section id="about" className="section zorx-about-section">
      <div className="container about-cinematic-container">
        {/* Left Side: The "O" Architectural Image Mask Frame */}
        <div className="about-o-frame-left reveal-fade">
          <div className="o-frame-wrapper">
            <svg 
              viewBox="0 0 500 500" 
              className="o-architectural-svg"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                {/* Geometric ZORX Logo O Ring Clip Path */}
                <clipPath id="zorxLogoOClip">
                  <path d="M 250 40 A 210 210 0 1 0 250 460 A 210 210 0 1 0 250 40 Z M 250 145 A 105 105 0 1 1 250 355 A 105 105 0 1 1 250 145 Z" fillRule="evenodd" />
                </clipPath>
              </defs>

              {/* Thin Architectural Grid Lines & Crosshairs */}
              <line x1="0" y1="250" x2="500" y2="250" stroke="rgba(2, 109, 46, 0.3)" strokeWidth="1" />
              <line x1="250" y1="0" x2="250" y2="500" stroke="rgba(2, 109, 46, 0.3)" strokeWidth="1" />
              <circle cx="250" cy="250" r="235" stroke="rgba(255, 255, 255, 0.04)" strokeWidth="1" strokeDasharray="4 8" />

              {/* Dubai Creative Culture Photo Masked inside O Shape */}
              <image 
                href="/assets/images/zorx-about-culture.jpg" 
                x="0" 
                y="0" 
                width="500" 
                height="500" 
                preserveAspectRatio="xMidYMid slice" 
                clipPath="url(#zorxLogoOClip)"
                opacity="0.9"
                style={{
                  transform: `translate3d(${parallaxOffset.x * 0.15}px, ${parallaxOffset.y * 0.15}px, 0)`,
                  transition: 'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
              />

              {/* Crisp ZORX Primary Green Outer & Inner Ring Outlines */}
              <circle cx="250" cy="250" r="210" stroke="#026D2E" strokeWidth="2.5" fill="none" />
              <circle cx="250" cy="250" r="145" stroke="#026D2E" strokeWidth="2.5" fill="none" />
            </svg>
          </div>
        </div>

        {/* Right Side: Editorial Content */}
        <div className="about-editorial-right">
          {/* Eyebrow */}
          <div className="about-eyebrow-tag reveal-up">
            <span className="eyebrow-accent-line"></span>
            <span className="eyebrow-text">ABOUT ZORX</span>
          </div>

          {/* Editorial Heading */}
          <h2 className="about-editorial-heading reveal-up stagger-1">
            <span className="heading-line">We turn ideas</span>
            <span className="heading-line">into brands that <span className="green-accent">move.</span></span>
          </h2>

          {/* Paragraph 1 */}
          <p className="about-paragraph reveal-up stagger-2">
            ZORX is a Dubai-based digital marketing agency helping ambitious brands grow through strategy, creativity and digital experiences.
          </p>

          {/* Paragraph 2 */}
          <p className="about-paragraph reveal-up stagger-3">
            From brand thinking and social media to digital experiences and performance, we bring the right ideas together to create work that moves businesses forward.
          </p>

          {/* Discover Link */}
          <div className="about-action-wrap reveal-up stagger-4">
            <a href="#services" className="about-discover-link">
              <span>Discover ZORX</span>
              <ArrowUpRight size={16} className="link-arrow" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
