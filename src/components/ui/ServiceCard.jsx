import React from 'react';
import { 
  TrendingUp, 
  Search, 
  Layout, 
  Sparkles, 
  Users, 
  BarChart3, 
  ArrowRight 
} from 'lucide-react';
import './ServiceCard.css';

const iconMap = {
  TrendingUp,
  Search,
  Layout,
  Sparkles,
  Users,
  BarChart3
};

/**
 * Reusable ServiceCard component with hover glow, deliverables list, and modal trigger.
 */
export function ServiceCard({ service, index, onSelect }) {
  const IconComponent = iconMap[service.iconName] || TrendingUp;

  return (
    <div 
      className={`service-card glass-card reveal-up stagger-${(index % 6) + 1}`}
      onClick={() => onSelect && onSelect(service)}
    >
      <div className="service-card-top">
        <div className="service-icon-wrapper">
          <IconComponent size={24} className="service-icon" />
        </div>
        <span className="service-badge">{service.badge}</span>
      </div>

      <h3 className="service-card-title">{service.title}</h3>
      <p className="service-card-desc">{service.shortDesc}</p>

      <div className="service-deliverables-preview">
        {service.deliverables.slice(0, 2).map((item, i) => (
          <div key={i} className="deliverable-chip">
            <span className="chip-bullet">•</span> {item}
          </div>
        ))}
      </div>

      <div className="service-card-footer">
        <span className="action-text">Explore Capability</span>
        <ArrowRight size={16} className="arrow-icon" />
      </div>
    </div>
  );
}
