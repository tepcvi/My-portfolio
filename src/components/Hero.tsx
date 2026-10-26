import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const { personal, socialLinks } = portfolioData;

  // Staggered profession titles for dynamic presentation
  const titles = [
    { word1: personal.professionWord1, word2: personal.professionWord2 },
    { word1: 'Frontend', word2: 'Specialist' },
    { word1: 'UI / UX', word2: 'Architect' },
    { word1: 'Creative', word2: 'Developer' }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [phase, setPhase] = useState<'enter' | 'exit'>('enter');

  useEffect(() => {
    const exitTimer = setTimeout(() => {
      setPhase('exit');
    }, 3800);

    const switchTimer = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % titles.length);
      setPhase('enter');
    }, 4500);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(switchTimer);
    };
  }, [currentIndex, titles.length]);

  const renderAnimatedWord = (text: string, isAccent: boolean) => (
    <span className="split-word">
      {text.split('').map((char, i) => (
        <span
          key={`${currentIndex}-${text}-${i}`}
          className={`split-char ${phase}`}
          style={{
            animationDelay: `${i * 65}ms`,
            color: isAccent ? 'var(--first-color)' : 'var(--title-color)'
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </span>
  );

  return (
    <section className="home section" id="home">
      <div className="home__shadow" />

      <div className="home__container container grid">
        {/* Left Side: Name and Greeting */}
        <div className="home__data">
          <h3 className="home__greeting">Hello, I'm</h3>
          <h1 className="home__name">
            {personal.firstName} <br />
            {personal.lastName}
          </h1>
        </div>

        {/* Center: Cutout Portrait & Ambient Blob */}
        <div className="home__image">
          <div className="blob-animate" />
          <img
            src={personal.heroImage}
            alt={`${personal.name} profile portrait`}
            className="home__profile"
            loading="eager"
            width={600}
            height={600}
          />
        </div>

        {/* Right Side: Creative Profession Split */}
        <div className="home__info">
          <h3 className="home__split">{personal.professionSplit}</h3>
          <div className="home__profession-wrapper">
            <h2 className="home__profession-1">
              {renderAnimatedWord(titles[currentIndex].word1, true)}
            </h2>
            <h2 className="home__profession-2">
              {renderAnimatedWord(titles[currentIndex].word2, false)}
            </h2>
          </div>
        </div>

        {/* Bottom Left: Social Media Floating Links */}
        <div className="home__social">
          {socialLinks.map((s) => (
            <a
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="home__social-link"
              aria-label={s.name}
              title={s.name}
            >
              <i className={s.icon} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
