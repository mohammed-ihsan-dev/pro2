import React from 'react';
import { 
  ArrowUpRight, 
  Users, 
  Lightbulb, 
  TrendingUp, 
  Layers 
} from 'lucide-react';
import { useParallax } from '../../hooks/useParallax';
import './WhyZorxSection.css';

const reasons = [
  {
    number: '01',
    icon: Users,
    title: 'GCC Market Expertise',
    description: 'Deep understanding of the Dubai and GCC market, culture and audience.'
  },
  {
    number: '02',
    icon: Lightbulb,
    title: 'Strategy-Led Creativity',
    description: 'Ideas backed by research, data and real business goals.'
  },
  {
    number: '03',
    icon: TrendingUp,
    title: 'Performance-Driven Approach',
    description: 'Creative that looks great and delivers measurable results.'
  },
  {
    number: '04',
    icon: Layers,
    title: 'End-to-End Digital Partner',
    description: 'From brand to performance, everything you need under one roof.'
  }
];

export function WhyZorxSection() {
  const parallaxOffset = useParallax(25);

  return (
    <section id="why-zorx" className="section zorx-why-section">
      <div className="container why-cinematic-container">
        
        {/* Left Side: Large Geometric ZORX "X" Architectural Frame */}
        <div className="why-x-frame-left reveal-fade">
          <div className="x-frame-wrapper">
            <svg 
              viewBox="0 0 500 500" 
              className="x-architectural-svg"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                {/* Geometric ZORX Logo X Clip Path */}
                <clipPath id="zorxLogoXClip">
                  <path 
                    d="M 60 50 L 150 50 L 250 180 L 350 50 L 440 50 L 320 250 L 440 450 L 350 450 L 250 320 L 150 450 L 60 450 L 180 250 Z" 
                  />
                </clipPath>
              </defs>

              {/* Architectural Grid Lines & Crosshair Axis Extensions */}
              <line x1="0" y1="50" x2="500" y2="50" stroke="rgba(2, 109, 46, 0.3)" strokeWidth="1" />
              <line x1="0" y1="450" x2="500" y2="450" stroke="rgba(2, 109, 46, 0.3)" strokeWidth="1" />
              <line x1="60" y1="0" x2="60" y2="500" stroke="rgba(255, 255, 255, 0.04)" strokeWidth="1" />
              <line x1="440" y1="0" x2="440" y2="500" stroke="rgba(255, 255, 255, 0.04)" strokeWidth="1" />
              <line x1="20" y1="480" x2="480" y2="20" stroke="rgba(2, 109, 46, 0.35)" strokeWidth="1" />
              <line x1="20" y1="20" x2="480" y2="480" stroke="rgba(2, 109, 46, 0.35)" strokeWidth="1" />

              {/* Dubai Architecture & Skyline Photography Masked inside X */}
              <image 
                href="/assets/images/zorx-dubai-architecture.jpg" 
                x="0" 
                y="0" 
                width="500" 
                height="500" 
                preserveAspectRatio="xMidYMid slice" 
                clipPath="url(#zorxLogoXClip)"
                opacity="0.9"
                style={{
                  transform: `translate3d(${parallaxOffset.x * 0.15}px, ${parallaxOffset.y * 0.15}px, 0)`,
                  transition: 'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
              />

              {/* Crisp ZORX Primary Green Outer Polygon Outline */}
              <path 
                d="M 60 50 L 150 50 L 250 180 L 350 50 L 440 50 L 320 250 L 440 450 L 350 450 L 250 320 L 150 450 L 60 450 L 180 250 Z" 
                stroke="#026D2E" 
                strokeWidth="2.5" 
                fill="none" 
              />
            </svg>
          </div>
        </div>

        {/* Right Side: Editorial Content & 4 Differentiators Vertical List */}
        <div className="why-editorial-right">
          {/* Eyebrow Label */}
          <div className="why-eyebrow-tag reveal-up">
            <span className="eyebrow-accent-line"></span>
            <span className="eyebrow-text">WHY ZORX</span>
          </div>

          {/* Main Heading */}
          <h2 className="why-editorial-heading reveal-up stagger-1">
            <span className="heading-line">More than a partner,</span>
            <span className="heading-line">a <span className="green-accent">growth engine.</span></span>
          </h2>

          {/* Supporting Copy */}
          <p className="why-paragraph reveal-up stagger-2">
            We blend strategy, creativity and technology to help ambitious brands grow with purpose.
          </p>

          {/* 4 Differentiators Vertical Editorial List */}
          <div className="why-differentiators-list">
            {reasons.map((reason, index) => {
              const IconComponent = reason.icon;
              return (
                <div 
                  key={reason.number}
                  className={`differentiator-row reveal-up stagger-${index + 1}`}
                >
                  <div className="differentiator-icon-badge">
                    <IconComponent size={20} className="diff-icon" />
                  </div>

                  <div className="differentiator-content">
                    <h3 className="diff-title">
                      {reason.title}
                    </h3>
                    <p className="diff-desc">{reason.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Action Link */}
          <div className="why-action-wrap reveal-up stagger-4">
            <a href="#portfolio" className="why-approach-link">
              <span>Our Approach</span>
              <ArrowUpRight size={16} className="link-arrow" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
