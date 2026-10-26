import React from 'react';
import { portfolioData } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const { personal } = portfolioData;

  return (
    <footer className="footer grid">
      <div className="blob-animate" />

      <div className="footer__copy">
        Crafted with precision & passion by <span>{personal.name}</span>
      </div>

      <div className="footer__year">
        &#169; <span id="footer-year">{currentYear}</span>. All rights reserved.
      </div>
    </footer>
  );
};
