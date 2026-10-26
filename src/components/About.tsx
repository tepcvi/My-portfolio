import React from 'react';
import { portfolioData } from '../data/portfolioData';

export const About: React.FC = () => {
  const { personal } = portfolioData;

  return (
    <section className="about section" id="about">
      <div className="about__shadow" />

      <div className="about__container container">
        {/* Left / Top Text Data */}
        <div className="about__data">
          <h2 className="section__title">
            <span>{personal.aboutHeadlineFirst}</span>
            <br />
            {personal.aboutHeadlineSecond}
          </h2>

          <p className="about__description">
            I'm a <b>{personal.professionWord1} {personal.professionWord2}</b>{' '}
            passionate about experimenting with new <b>skills and creativity.</b>{' '}
            Driven by continuous learning and craft, I build fast, accessible, and
            visually captivating interfaces that elevate brand presence and user
            delight.
          </p>

          <a
            href={personal.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="button"
            id="about-resume-btn"
          >
            <span>Resume</span>
            <i className="ri-file-list-2-line" />
          </a>
        </div>

        {/* Right / Secondary Image with Twin Orbiting Blobs */}
        <div className="about__image">
          <div className="blob-animate" />
          <div className="blob-animate" />
          <img
            src={personal.aboutImage}
            alt={`${personal.name} about portrait`}
            className="about__profile"
            loading="lazy"
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  );
};
