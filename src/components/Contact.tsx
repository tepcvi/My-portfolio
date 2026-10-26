import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const { personal, socialLinks, directMessaging } = portfolioData;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  return (
    <section className="contact section" id="contact">
      <div className="contact__container container grid">
        {/* Top Data */}
        <div className="contact__data">
          <h2 className="section__title">Contact Me</h2>
          <p className="contact__description">Tell me about your next project.</p>

          <button
            className="contact__button button"
            id="contact-btn"
            onClick={handleCopyEmail}
            aria-label="Copy email address"
          >
            <span>{copied ? 'Email Copied' : 'Copy Email'}</span>
            <i className={copied ? 'ri-check-line' : 'ri-file-copy-line'} />
          </button>
        </div>

        {/* 3 Columns Grid */}
        <div className="contact__content grid">
          {/* Column 1: Direct Coordinates */}
          <div className="contact__info">
            <div>
              <h3 className="contact__title">Email</h3>
              <address className="contact__address">
                <a
                  href={`mailto:${personal.email}`}
                  style={{ color: 'var(--title-color)', textDecoration: 'none' }}
                >
                  {personal.email}
                </a>
              </address>
            </div>

            <div>
              <h3 className="contact__title">Location</h3>
              <address className="contact__address">{personal.location}</address>
            </div>

            <div>
              <h3 className="contact__title">Availability</h3>
              <address className="contact__address" style={{ color: 'var(--first-color)' }}>
                ● Open to new projects & roles
              </address>
            </div>
          </div>

          {/* Column 2: Social Media Links */}
          <div className="contact__social">
            <h3 className="contact__title">Social Profiles</h3>
            <div className="contact__links">
              {socialLinks.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact__link"
                >
                  <span>{s.name}</span>
                  <i className="ri-arrow-right-up-long-line" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 3: Instant Messaging */}
          <div className="contact__write">
            <h3 className="contact__title">Write Me & We'll Talk</h3>
            <div className="contact__links">
              {directMessaging.map((m) => (
                <a
                  key={m.name}
                  href={m.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact__link"
                >
                  <span>{m.name}</span>
                  <i className="ri-arrow-right-up-long-line" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
