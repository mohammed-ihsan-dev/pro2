import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import './PortfolioSection.css';

// High-resolution photography assets for full-screen covers
const darkProjectImages = [
  '/assets/images/zorx-dubai-architecture.jpg',
  '/assets/images/zorx-services-growth.jpg',
  '/assets/images/zorx-about-culture.jpg'
];

const lightProjectImages = [
  '/assets/images/zorx-about-culture-light.jpg',
  '/assets/images/zorx-dubai-architecture-light.jpg',
  '/assets/images/zorx-services-growth-light.jpg'
];

export function PortfolioSection({ theme = 'light' }) {
  const projectImages = theme === 'dark' ? darkProjectImages : lightProjectImages;
  return (
    <section id="portfolio" className="zorx-portfolio-container">
      
      {/* --------------------------------------------------
          CHAPTER TRANSITION: GIANT CINEMATIC "OUR WORK" INTRO
          -------------------------------------------------- */}
      <div className="work-intro-screen">
        {/* Subtle Background Architectural Lines */}
        <div className="work-intro-bg-lines">
          <div className="bg-line line-v1"></div>
          <div className="bg-line line-v2"></div>
          <div className="bg-line line-h1"></div>
        </div>

        {/* Abstract Geometric Motion Composition */}
        <div className="work-intro-abstract-motion" aria-hidden="true">
          <div className="abstract-element abstract-circle-lg"></div>
          <div className="abstract-element abstract-circle-outline"></div>
          <div className="abstract-element abstract-square-solid"></div>
          <div className="abstract-element abstract-line-thin"></div>
        </div>

        <div className="work-intro-content reveal-up">
          <div className="intro-eyebrow-tag">
            <span className="eyebrow-accent-line"></span>
            <span className="eyebrow-text">SELECTED CASE STUDIES</span>
          </div>

          <h2 className="giant-work-typography">
            <span className="word-our reveal-up stagger-1">OUR</span>
            <span className="word-work reveal-up stagger-2">WORK<span className="green-dot">.</span></span>
          </h2>

          <p className="work-intro-subtext reveal-up stagger-3">
            A selection of brands, campaigns and digital experiences we've brought to life.
          </p>
        </div>

        <div className="work-scroll-indicator reveal-up stagger-4">
          <span className="indicator-label">SCROLL TO EXPLORE</span>
          <div className="scroll-arrow-line"></div>
        </div>
      </div>

      {/* --------------------------------------------------
          FULL-SCREEN VERTICAL STACKED PROJECT SHOWCASE (EXACTLY 3 PROJECTS)
          -------------------------------------------------- */}
      <div className="fullbleed-projects-stack">
        {portfolioData.slice(0, 3).map((project, index) => {
          const projectImg = projectImages[index % projectImages.length];
          const projectNumber = String(index + 1).padStart(2, '0');

          return (
            <div 
              key={project.id}
              className="fullscreen-project-section reveal-up"
            >
              {/* Full-Bleed Image Background */}
              <div className="fullscreen-image-wrapper">
                <img 
                  src={projectImg} 
                  alt={project.title} 
                  loading={index === 0 ? "eager" : "lazy"}
                  decoding="async"
                  className="fullscreen-bg-image"
                />
                <div className="fullscreen-gradient-overlay"></div>
              </div>

              {/* Minimal Overlaid Editorial Content */}
              <div className="fullscreen-project-content">
                
                {/* Top Meta Bar */}
                <div className="project-top-bar">
                  <span className="project-number-tag">{projectNumber} / 03</span>
                  <span className="project-category-tag">{project.category}</span>
                </div>

                {/* Bottom Main Info */}
                <div className="project-bottom-main">
                  <div className="project-metrics-pills">
                    <span className="metric-pill">{project.metricHighlight}</span>
                    <span className="metric-pill secondary">{project.secondaryMetric}</span>
                  </div>

                  <h3 className="project-editorial-title">{project.title}</h3>
                  <p className="project-editorial-desc">{project.description}</p>

                  <div className="project-action-link">
                    <span>View Project</span>
                    <ArrowUpRight size={18} className="link-arrow" />
                  </div>
                </div>

              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
}
