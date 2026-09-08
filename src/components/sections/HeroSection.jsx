import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useParallax } from '../../hooks/useParallax';
import './HeroSection.css';

export function HeroSection() {
  // Parallax offset for smooth, subtle movement
  const parallaxOffset = useParallax(25);

  return (
    <section id="hero" className="zorx-cinematic-hero">
      <div className="container hero-cinematic-container">
        {/* Left Column: Editorial Headline & Copy */}
        <div className="hero-editorial-left">
          {/* Eyebrow Label */}
          <div className="hero-eyebrow-tag reveal-up">
            <span className="eyebrow-accent-line"></span>
            <span className="eyebrow-text">IDEAS TO IMPACT</span>
          </div>

          {/* Main Headline */}
          <h1 className="hero-cinematic-headline reveal-up stagger-1">
            <span className="headline-part-1">We build brands</span>
            <span className="headline-part-2">
              for <span className="headline-green-glow">what's next.</span>
            </span>
          </h1>

          {/* Supporting Copy */}
          <p className="hero-cinematic-subtext reveal-up stagger-2">
            Strategy, creativity and digital experiences for ambitious brands.
          </p>

          {/* CTA Actions */}
          <div className="hero-cinematic-ctas reveal-up stagger-3">
            <a href="#contact" className="hero-btn-green">
              <span>Start a Project</span>
              <ArrowUpRight size={18} className="btn-icon" />
            </a>

            <a href="#portfolio" className="hero-btn-text">
              <span>Explore Our Work</span>
              <ArrowUpRight size={16} className="link-icon" />
            </a>
          </div>
        </div>

        {/* Right Column: Architectural Z Image Mask Frame */}
        <div className="hero-z-frame-right reveal-fade stagger-2">
          <div className="z-frame-wrapper">
            <svg 
              viewBox="0 0 500 600" 
              className="z-architectural-svg"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                {/* Geometric Z Clip Path matching logo diagonal angles */}
                <clipPath id="zorxLogoZClip">
                  <path d="M 60 70 H 440 L 160 480 H 440 V 530 H 60 L 340 120 H 60 Z" />
                </clipPath>
              </defs>

              {/* Thin Architectural Grid Lines */}
              <line x1="0" y1="70" x2="500" y2="70" stroke="rgba(2, 109, 46, 0.35)" strokeWidth="1" />
              <line x1="0" y1="530" x2="500" y2="530" stroke="rgba(2, 109, 46, 0.35)" strokeWidth="1" />
              <line x1="60" y1="0" x2="60" y2="600" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="1" />
              <line x1="440" y1="0" x2="440" y2="600" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="1" />
              <line x1="20" y1="570" x2="480" y2="30" stroke="rgba(8, 169, 79, 0.2)" strokeWidth="1" />

              {/* Dubai Architecture Image Masked inside Z Shape */}
              <image 
                href="/assets/images/zorx-dubai-architecture.jpg" 
                x="0" 
                y="0" 
                width="500" 
                height="600" 
                preserveAspectRatio="xMidYMid slice" 
                clipPath="url(#zorxLogoZClip)"
                opacity="0.9"
                style={{
                  transform: `translate3d(${parallaxOffset.x * 0.15}px, ${parallaxOffset.y * 0.15}px, 0)`,
                  transition: 'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
              />

              {/* Crisp ZORX Primary Green Stroke Outline */}
              <path 
                d="M 60 70 H 440 L 160 480 H 440 V 530 H 60 L 340 120 H 60 Z" 
                stroke="#026D2E" 
                strokeWidth="2.5" 
                fill="none" 
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Bottom Service Index Strip */}
      <div className="hero-service-index-strip reveal-up stagger-4">
        <div className="container">
          <div className="service-index-container">
            <a href="#services" className="index-item">
              <span className="index-num">01</span>
              <span className="index-title">DIGITAL STRATEGY</span>
              <span className="index-hover-line"></span>
            </a>

            <span className="index-dash">—</span>

            <a href="#services" className="index-item">
              <span className="index-num">02</span>
              <span className="index-title">BRANDING</span>
              <span className="index-hover-line"></span>
            </a>

            <span className="index-dash">—</span>

            <a href="#services" className="index-item">
              <span className="index-num">03</span>
              <span className="index-title">WEB & PRODUCTS</span>
              <span className="index-hover-line"></span>
            </a>

            <span className="index-dash">—</span>

            <a href="#services" className="index-item">
              <span className="index-num">04</span>
              <span className="index-title">PERFORMANCE GROWTH</span>
              <span className="index-hover-line"></span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
