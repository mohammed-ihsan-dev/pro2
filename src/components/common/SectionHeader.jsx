import React from 'react';

/**
 * Reusable SectionHeader with badge, main title with highlighted keyword, and optional subtitle.
 */
export function SectionHeader({ badge, title, highlightText, description, centered = false, className = '' }) {
  // If highlightText is provided, split the title and wrap the highlight phrase
  const renderTitle = () => {
    if (!highlightText) return title;

    const parts = title.split(highlightText);
    if (parts.length < 2) return title;

    return (
      <>
        {parts[0]}
        <span className="highlight">{highlightText}</span>
        {parts[1]}
      </>
    );
  };

  return (
    <div className={`section-header reveal-up ${centered ? 'text-center' : ''} ${className}`}>
      {badge && (
        <div className="section-badge">
          <span className="dot"></span>
          <span>{badge}</span>
        </div>
      )}
      
      <h2 className="section-title">
        {renderTitle()}
      </h2>

      {description && (
        <p className="section-description" style={centered ? { margin: '1rem auto 0' } : {}}>
          {description}
        </p>
      )}
    </div>
  );
}
