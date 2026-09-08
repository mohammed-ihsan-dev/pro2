import React, { useState, useRef, useEffect } from 'react';
import { 
  ArrowUpRight, 
  Share2, 
  Target, 
  Palette, 
  Search, 
  Layout, 
  Users 
} from 'lucide-react';
import { useParallax } from '../../hooks/useParallax';
import { servicesData } from '../../data/servicesData';
import './ServicesSection.css';

const iconMap = {
  Share2,
  Target,
  Palette,
  Search,
  Layout,
  Users
};

export function ServicesSection({ onSelectService }) {
  const N = servicesData.length;
  // Triple array for seamless infinite looping (set 0: 0..5, set 1: 6..11, set 2: 12..17)
  const extendedServices = [...servicesData, ...servicesData, ...servicesData];

  // Start virtual index at 6 (middle set, service 0)
  const [virtualIndex, setVirtualIndex] = useState(6);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const parallaxOffset = useParallax(25);

  const startXRef = useRef(0);
  const currentDragOffsetRef = useRef(0);
  const trackRef = useRef(null);

  const realIndex = ((virtualIndex % N) + N) % N;

  // Handle infinite loop index normalization after transition completes
  useEffect(() => {
    if (isDragging) return;

    const timer = setTimeout(() => {
      if (virtualIndex >= 12 || virtualIndex < 6) {
        setIsTransitioning(false);
        const normalizedIndex = (virtualIndex % N) + 6;
        setVirtualIndex(normalizedIndex);
      }
    }, 450); // Matches CSS transition duration

    return () => clearTimeout(timer);
  }, [virtualIndex, isDragging, N]);

  // Automatic slow right-to-left motion (slide -> settle -> pause 3.5s -> slide)
  useEffect(() => {
    if (isDragging || isHovered) return;

    const autoPlayTimer = setInterval(() => {
      setIsTransitioning(true);
      setVirtualIndex((prev) => prev + 1);
    }, 3500);

    return () => clearInterval(autoPlayTimer);
  }, [isDragging, isHovered]);

  // Pointer & Drag Handlers for seamless Desktop Drag + Mobile Swipe
  const handlePointerDown = (e) => {
    setIsDragging(true);
    setIsTransitioning(false);
    startXRef.current = e.clientX;
    currentDragOffsetRef.current = 0;
  };

  const handlePointerMove = (e) => {
    if (!isDragging) return;
    const diffX = e.clientX - startXRef.current;
    currentDragOffsetRef.current = diffX;
    setDragOffset(diffX);
  };

  const handlePointerUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    setIsTransitioning(true);

    const step = 384; // Card width (360) + gap (24)
    const deltaIndex = Math.round(-currentDragOffsetRef.current / step);
    
    // Minimum drag threshold (if dragged more than 40px, move at least 1 card)
    let finalDelta = deltaIndex;
    if (deltaIndex === 0 && Math.abs(currentDragOffsetRef.current) > 40) {
      finalDelta = currentDragOffsetRef.current < 0 ? 1 : -1;
    }

    setVirtualIndex((prev) => prev + finalDelta);
    setDragOffset(0);
    currentDragOffsetRef.current = 0;
  };

  // Card click handler: clicking a side card centers it directly
  const handleCardClick = (index, service) => {
    if (Math.abs(currentDragOffsetRef.current) > 10) return; // Ignore drag clicks
    setIsTransitioning(true);
    setVirtualIndex(index);
    if (onSelectService) onSelectService(service);
  };

  return (
    <section id="services" className="section zorx-services-section">
      <div className="container services-cinematic-container">
        
        {/* Top Area: Editorial Intro (Left) & Architectural "R" Frame (Right) */}
        <div className="services-hero-grid">
          
          {/* Left Side: Services Editorial Intro */}
          <div className="services-editorial-left">
            <div className="services-eyebrow-tag reveal-up">
              <span className="eyebrow-accent-line"></span>
              <span className="eyebrow-text">OUR SERVICES</span>
            </div>

            <h2 className="services-editorial-heading reveal-up stagger-1">
              <span className="heading-line">End-to-End</span>
              <span className="heading-line">Digital Growth</span>
              <span className="heading-line"><span className="green-accent">Solutions.</span></span>
            </h2>

            <p className="services-paragraph reveal-up stagger-2">
              From strategy and creative to media and technology, we build everything ambitious brands need to grow in the digital world.
            </p>

            <div className="services-action-wrap reveal-up stagger-3">
              <a href="#contact" className="services-cta-link">
                <span>Let's Talk</span>
                <ArrowUpRight size={16} className="link-arrow" />
              </a>
            </div>
          </div>

          {/* Right Side: The "R" Architectural Visual Frame */}
          <div className="services-r-frame-right reveal-fade stagger-2">
            <div className="r-frame-wrapper">
              <svg 
                viewBox="0 0 500 500" 
                className="r-architectural-svg"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <clipPath id="zorxLogoRClip">
                    <path 
                      d="M 60 40 H 320 A 120 120 0 0 1 320 280 H 220 L 440 480 H 310 L 150 280 V 480 H 60 Z M 150 115 H 270 A 50 50 0 0 1 270 205 H 150 Z" 
                      fillRule="evenodd" 
                    />
                  </clipPath>
                </defs>

                {/* Architectural Grid Lines & Crosshairs */}
                <line x1="0" y1="40" x2="500" y2="40" stroke="rgba(2, 109, 46, 0.3)" strokeWidth="1" />
                <line x1="0" y1="480" x2="500" y2="480" stroke="rgba(2, 109, 46, 0.3)" strokeWidth="1" />
                <line x1="60" y1="0" x2="60" y2="500" stroke="rgba(255, 255, 255, 0.04)" strokeWidth="1" />
                <line x1="440" y1="0" x2="440" y2="500" stroke="rgba(255, 255, 255, 0.04)" strokeWidth="1" strokeDasharray="4 8" />

                {/* Dubai Growth Architecture Photo Masked inside R */}
                <image 
                  href="/assets/images/zorx-services-growth.jpg" 
                  x="0" 
                  y="0" 
                  width="500" 
                  height="500" 
                  preserveAspectRatio="xMidYMid slice" 
                  clipPath="url(#zorxLogoRClip)"
                  opacity="0.9"
                  style={{
                    transform: `translate3d(${parallaxOffset.x * 0.15}px, ${parallaxOffset.y * 0.15}px, 0)`,
                    transition: 'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                />

                {/* ZORX Green Outlines */}
                <path 
                  d="M 60 40 H 320 A 120 120 0 0 1 320 280 H 220 L 440 480 H 310 L 150 280 V 480 H 60 Z" 
                  stroke="#026D2E" 
                  strokeWidth="2.5" 
                  fill="none" 
                />
                <path 
                  d="M 150 115 H 270 A 50 50 0 0 1 270 205 H 150 Z" 
                  stroke="#026D2E" 
                  strokeWidth="2.5" 
                  fill="none" 
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Bottom Area: Infinite Drag Carousel Showcase */}
        <div className="services-carousel-section reveal-up stagger-3">
          
          {/* Carousel Viewport (Drag & Touch Area) */}
          <div 
            className={`services-carousel-viewport ${isDragging ? 'is-dragging' : ''}`}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerLeave={handlePointerUp}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div 
              ref={trackRef}
              className="services-carousel-track"
              style={{
                transform: `translateX(calc(50% - (${virtualIndex} * var(--card-step) + var(--card-width) / 2) + ${dragOffset}px))`,
                transition: isTransitioning && !isDragging ? 'transform 0.45s cubic-bezier(0.16, 1, 0.3, 1)' : 'none'
              }}
            >
              {extendedServices.map((service, index) => {
                const IconComponent = iconMap[service.iconName] || Share2;
                const offset = index - virtualIndex;

                let cardStateClass = 'card-hidden';
                if (offset === 0) cardStateClass = 'card-active';
                else if (Math.abs(offset) === 1) cardStateClass = 'card-neighbor';
                else if (Math.abs(offset) === 2) cardStateClass = 'card-outer';

                return (
                  <div 
                    key={`${service.id}-${index}`}
                    className={`service-carousel-card ${cardStateClass}`}
                    onClick={() => handleCardClick(index, service)}
                  >
                    <div className="card-top-header">
                      <div className="service-card-icon-wrap">
                        <IconComponent size={20} className="card-icon" />
                      </div>
                    </div>

                    <h3 className="service-card-title">{service.title}</h3>
                    <p className="service-card-desc">{service.shortDesc}</p>

                    <div className="service-card-footer">
                      <span className="card-learn-text">Learn More</span>
                      <ArrowUpRight size={14} className="card-arrow" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Minimal Bottom Indicator: Counter & Green Line (NO Arrow Buttons) */}
          <div className="services-carousel-minimal-nav">
            <span className="nav-counter">
              {String(realIndex + 1).padStart(2, '0')} / {String(N).padStart(2, '0')}
            </span>
            <div className="progress-track-bar">
              <div 
                className="progress-fill-line"
                style={{
                  width: `${((realIndex + 1) / N) * 100}%`
                }}
              ></div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
