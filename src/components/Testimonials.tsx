import React from 'react';
import { portfolioData } from '../data/portfolioData';

export const Testimonials: React.FC = () => {
  const { testimonials } = portfolioData;

  // Duplicate items for continuous infinite marquee looping
  const marqueeItems = [...testimonials, ...testimonials];

  return (
    <section className="testimonials section" id="testimonials">
      <div className="container">
        <h2 className="section__title">
          <span>What They Say</span>
          <br />
          Client & Team Endorsements
        </h2>
      </div>

      <div className="testimonials__container">
        {/* Track 1: Normal Direction */}
        <div className="testimonials__content">
          {marqueeItems.map((item, idx) => (
            <article key={`row1-${item.id}-${idx}`} className="testimonials__card">
              <div className="blob" />

              <div className="testimonials__data">
                <img
                  src={item.image}
                  alt={`${item.name} avatar`}
                  className="testimonials__img"
                  loading="lazy"
                  width={68}
                  height={68}
                />

                <h3 className="testimonials__name">{item.name}</h3>
                <p className="testimonials__role">{item.role}</p>

                <div className="testimonial__rating">
                  <div className="testimonial__stars" aria-label={`${item.rating} stars`}>
                    <i className="ri-star-fill" />
                    <i className="ri-star-fill" />
                    <i className="ri-star-fill" />
                    <i className="ri-star-fill" />
                    <i className="ri-star-fill" />
                  </div>
                  <span className="testimonials__number">{item.rating.toFixed(1)}</span>
                </div>

                <p className="testimonials__quote">"{item.quote}"</p>
              </div>
            </article>
          ))}
        </div>

        {/* Track 2: Reverse Direction */}
        <div className="testimonials__content testimonials__reverse">
          {marqueeItems.map((item, idx) => (
            <article key={`row2-${item.id}-${idx}`} className="testimonials__card">
              <div className="blob" />

              <div className="testimonials__data">
                <img
                  src={item.image}
                  alt={`${item.name} avatar`}
                  className="testimonials__img"
                  loading="lazy"
                  width={68}
                  height={68}
                />

                <h3 className="testimonials__name">{item.name}</h3>
                <p className="testimonials__role">{item.role}</p>

                <div className="testimonial__rating">
                  <div className="testimonial__stars" aria-label={`${item.rating} stars`}>
                    <i className="ri-star-fill" />
                    <i className="ri-star-fill" />
                    <i className="ri-star-fill" />
                    <i className="ri-star-fill" />
                    <i className="ri-star-fill" />
                  </div>
                  <span className="testimonials__number">{item.rating.toFixed(1)}</span>
                </div>

                <p className="testimonials__quote">"{item.quote}"</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
