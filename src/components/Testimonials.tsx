import React from 'react';
import { portfolioData } from '../data/portfolioData';

export const Testimonials: React.FC = () => {
  const techStack = portfolioData.techStack || [];

  // Split into two tracks for variety, and duplicate for infinite continuous marquee scrolling
  const mid = Math.ceil(techStack.length / 2);
  const track1 = techStack.slice(0, mid);
  const track2 = techStack.slice(mid);

  const marqueeItems1 = [...track1, ...track1, ...track1];
  const marqueeItems2 = [...track2, ...track2, ...track2];

  return (
    <section className="testimonials section" id="tech-stack">
      <div className="container">
        <h2 className="section__title">
          <span>Tech Stack</span>
          <br />
          Technologies & Tools I Use
        </h2>
      </div>

      <div className="testimonials__container">
        {/* Track 1: Normal Direction */}
        <div className="testimonials__content">
          {marqueeItems1.map((item, idx) => (
            <article key={`row1-${item.id}-${idx}`} className="testimonials__card tech-stack__card">
              <div className="blob" />

              <div className="testimonials__data">
                <div className="tech-stack__icon-box">
                  <i className={item.icon} />
                </div>

                <h3 className="testimonials__name">{item.name}</h3>
                <p className="testimonials__role">{item.category}</p>

                <div className="tech-stack__badge">
                  <i className="ri-checkbox-circle-fill" />
                  <span>{item.level}</span>
                </div>

                <p className="testimonials__quote tech-stack__desc">{item.description}</p>
              </div>
            </article>
          ))}
        </div>

        {/* Track 2: Reverse Direction */}
        <div className="testimonials__content testimonials__reverse">
          {marqueeItems2.map((item, idx) => (
            <article key={`row2-${item.id}-${idx}`} className="testimonials__card tech-stack__card">
              <div className="blob" />

              <div className="testimonials__data">
                <div className="tech-stack__icon-box">
                  <i className={item.icon} />
                </div>

                <h3 className="testimonials__name">{item.name}</h3>
                <p className="testimonials__role">{item.category}</p>

                <div className="tech-stack__badge">
                  <i className="ri-checkbox-circle-fill" />
                  <span>{item.level}</span>
                </div>

                <p className="testimonials__quote tech-stack__desc">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
