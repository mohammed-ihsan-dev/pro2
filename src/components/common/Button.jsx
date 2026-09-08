import React from 'react';
import './Button.css';

/**
 * Reusable Button component supporting primary (gold gradient), secondary (glass), and text variants.
 */
export function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  icon: Icon,
  iconPosition = 'right',
  onClick, 
  href, 
  type = 'button',
  className = '',
  ...props 
}) {
  const baseClass = `zorx-btn zorx-btn-${variant} zorx-btn-${size} ${className}`;

  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon className="zorx-btn-icon left" size={18} />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon className="zorx-btn-icon right" size={18} />}
    </>
  );

  if (href) {
    return (
      <a href={href} className={baseClass} onClick={onClick} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} className={baseClass} onClick={onClick} {...props}>
      {content}
    </button>
  );
}
