import React from 'react';
import './StatCard.css';

/**
 * Reusable StatCard component for showing agency metrics.
 */
export function StatCard({ stat, index }) {
  return (
    <div className={`stat-card glass-card reveal-up stagger-${(index % 4) + 1}`}>
      <div className="stat-value">
        {stat.value}
        {stat.suffix && <span className="stat-suffix">{stat.suffix}</span>}
      </div>
      <div className="stat-label">{stat.label}</div>
      <div className="stat-subtext">{stat.subtext}</div>
    </div>
  );
}
