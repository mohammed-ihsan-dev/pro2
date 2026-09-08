import React, { useState } from 'react';
import './CTASection.css';

/**
 * Editorial ZORX Contact / Inquiry Section
 * Simple, elegant, quiet finish to the website.
 */
export function CTASection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);

    // Simple frontend submission simulation
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-grid">
          {/* Left Column: Heading, Subtitle & Direct Details */}
          <div className="contact-left">
            <h2 className="contact-title reveal-up">LET'S TALK.</h2>

            <p className="contact-subtitle reveal-up">
              Have a project, idea, or opportunity in mind?<br />
              Tell us a little about it and we'll get back to you.
            </p>

            <div className="contact-details reveal-up">
              <div className="contact-locations">
                <span className="location-item">Dubai</span>
                <span className="location-separator">•</span>
                <span className="location-item">Mannarkkad, Kerala</span>
              </div>

              <div className="contact-meta">
                <div className="meta-row">
                  <span className="meta-label">Phone:</span>
                  <a href="tel:9876543210" className="meta-link">9876543210</a>
                </div>
                <div className="meta-row">
                  <span className="meta-label">Email:</span>
                  <a href="mailto:zrox@gmail.com" className="meta-link">zrox@gmail.com</a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Inquiry Form */}
          <div className="contact-right">
            {isSubmitted ? (
              <div className="contact-success-box reveal-fade">
                <h3 className="success-heading">Thank you for reaching out.</h3>
                <p className="success-copy">
                  We've received your message and will get back to you shortly.
                </p>
                <button
                  type="button"
                  className="contact-reset-btn"
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({ name: '', email: '', company: '', message: '' });
                  }}
                >
                  Send another inquiry →
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="contact-field reveal-up">
                  <label htmlFor="name" className="contact-label">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    className="contact-input"
                  />
                </div>

                <div className="contact-field reveal-up">
                  <label htmlFor="email" className="contact-label">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="your.email@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="contact-input"
                  />
                </div>

                <div className="contact-field reveal-up">
                  <label htmlFor="company" className="contact-label">Company / Brand</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    placeholder="Company name"
                    value={formData.company}
                    onChange={handleChange}
                    className="contact-input"
                  />
                </div>

                <div className="contact-field reveal-up">
                  <label htmlFor="message" className="contact-label">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    placeholder="Tell us about your project..."
                    value={formData.message}
                    onChange={handleChange}
                    className="contact-textarea"
                  ></textarea>
                </div>

                <div className="contact-field reveal-up">
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="contact-submit-btn"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Inquiry →'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTASection;

