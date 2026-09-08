import React, { useEffect } from 'react';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from './Button';
import './PortfolioModal.css';

/**
 * Detailed Case Study / Service Detail Modal with backdrop blur and keyboard escape listener.
 */
export function PortfolioModal({ item, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!item) return null;

  const isService = !!item.deliverables;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-container glass-card" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="modal-close-btn" onClick={onClose} aria-label="Close Modal">
          <X size={20} />
        </button>

        <div className="modal-header">
          <span className="modal-badge">{item.category || item.badge}</span>
          <h2 className="modal-title">{item.title}</h2>
          {item.client && <p className="modal-client">Client: <span>{item.client}</span></p>}
        </div>

        <div className="modal-body">
          {/* Key Metrics Row */}
          {item.metricHighlight && (
            <div className="modal-metrics-box">
              <div className="metric-item">
                <span className="metric-label">Primary Metric Gain</span>
                <span className="metric-val" style={{ color: item.accentColor || 'var(--accent-gold)' }}>
                  {item.metricHighlight}
                </span>
              </div>
              {item.secondaryMetric && (
                <div className="metric-item">
                  <span className="metric-label">Secondary Impact</span>
                  <span className="metric-val">{item.secondaryMetric}</span>
                </div>
              )}
            </div>
          )}

          {/* Description / Story */}
          <div className="modal-section">
            <h4 className="modal-section-heading">{isService ? 'Overview' : 'Strategic Brief'}</h4>
            <p className="modal-text">{item.description || item.fullDesc}</p>
          </div>

          {/* Challenge & Solution for Portfolio */}
          {!isService && item.challenge && (
            <div className="modal-grid-2">
              <div className="modal-subcard">
                <h5 className="subcard-title">The Challenge</h5>
                <p className="subcard-text">{item.challenge}</p>
              </div>
              <div className="modal-subcard">
                <h5 className="subcard-title">The ZORX Solution</h5>
                <p className="subcard-text">{item.solution}</p>
              </div>
            </div>
          )}

          {/* Results List */}
          <div className="modal-section">
            <h4 className="modal-section-heading">
              {isService ? 'Key Deliverables' : 'Verified Results & Impact'}
            </h4>
            <ul className="modal-results-list">
              {(item.results || item.deliverables || []).map((point, index) => (
                <li key={index} className="result-item">
                  <CheckCircle2 size={18} className="check-icon" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="modal-footer">
          <Button href="#contact" variant="primary" size="md" icon={ArrowRight} onClick={onClose}>
            Request Similar Growth Strategy
          </Button>
        </div>
      </div>
    </div>
  );
}
