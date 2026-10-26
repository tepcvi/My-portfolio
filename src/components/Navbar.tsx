import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About Me', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Journey', href: '#journey' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' }
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setIsMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      const headerEl = document.getElementById('header');
      const headerHeight = headerEl ? headerEl.offsetHeight : 72;
      const targetTop = target.getBoundingClientRect().top + window.scrollY - headerHeight;
      window.scrollTo({
        top: Math.max(0, targetTop),
        behavior: 'smooth'
      });
      window.history.pushState(null, '', href);
    }
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`} id="header">
      <div className="blob-animate" />

      <nav className="nav container">
        <a href="#" className="nav__logo" id="nav-logo" aria-label="Home">
          <span className="nav__logo-dot" />
          {portfolioData.personal.firstName}{' '}
          <span style={{ color: 'var(--first-color)' }}>
            {portfolioData.personal.lastName}
          </span>
        </a>

        {/* Desktop & Mobile Menu */}
        <div className={`nav__menu ${isMenuOpen ? 'show-menu' : ''}`} id="nav-menu">
          <i
            className="ri-close-line nav__close"
            id="nav-close"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
          />

          <ul className="nav__list">
            {navItems.map((item) => {
              const sectionId = item.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={`nav__link ${isActive ? 'active-link' : ''}`}
                    onClick={(e) => handleLinkClick(e, item.href)}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="nav__mobile-social">
            {portfolioData.socialLinks.slice(0, 4).map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.name}
              >
                <i className={s.icon} />
              </a>
            ))}
          </div>
        </div>

        <div className="nav__actions">
          <div
            className="nav__toggle"
            id="nav-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Open menu"
          >
            <i className="ri-menu-4-line" />
          </div>
        </div>
      </nav>
    </header>
  );
};
