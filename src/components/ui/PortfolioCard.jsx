import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import './PortfolioCard.css';

/**
 * Reusable PortfolioCard component displaying client case studies with metric badges.
 */
export function PortfolioCard({ item, index, onOpenModal }) {
  return (
    <div 
      className={`portfolio-card glass-card reveal-scale stagger-${(index % 6) + 1}`}
      onClick={() => onOpenModal && onOpenModal(item)}
    >
      <div 
        className="portfolio-card-bg"
        style={{ background: item.imageBg }}
      >
        <div className="portfolio-card-overlay"></div>
      </div>

      <div className="portfolio-card-content">
        <div className="portfolio-card-header">
          <span className="portfolio-category">{item.category}</span>
          <span className="portfolio-metric-badge" style={{ borderColor: item.accentColor, color: item.accentColor }}>
            {item.metricHighlight}
          </span>
        </div>

        <div className="portfolio-card-body">
          <p className="portfolio-client-name">{item.client}</p>
          <h3 className="portfolio-card-title">{item.title}</h3>
        </div>

        <div className="portfolio-card-footer">
          <span className="secondary-metric">{item.secondaryMetric}</span>
          <div className="portfolio-action-btn">
            <span>Case Study</span>
            <ArrowUpRight size={16} />
          </div>
        </div>
      </div>
    </div>
  );
}
