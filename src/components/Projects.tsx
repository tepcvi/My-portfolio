import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation, Keyboard } from 'swiper/modules';
import { portfolioData } from '../data/portfolioData';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export const Projects: React.FC = () => {
  const { projects } = portfolioData;

  return (
    <section className="projects section" id="projects">
      <div className="projects__container container">
        {/* Section Header with Navigation Controls */}
        <div className="projects__header">
          <h2 className="section__title">
            Sample works<br />
            <span>Activities</span>
          </h2>

          <div className="projects__controls" aria-label="Project carousel navigation">
            <button
              className="projects__nav-btn"
              id="projects-prev-btn"
              aria-label="Previous project"
              title="Previous"
            >
              <i className="ri-arrow-left-s-line" />
            </button>
            <button
              className="projects__nav-btn"
              id="projects-next-btn"
              aria-label="Next project"
              title="Next"
            >
              <i className="ri-arrow-right-s-line" />
            </button>
          </div>
        </div>

        {/* Swiper Slider with Auto-Width Fluid Cards */}
        <div className="projects__swiper-wrapper">
          <Swiper
            modules={[Pagination, Autoplay, Navigation, Keyboard]}
            spaceBetween={24}
            slidesPerView="auto"
            grabCursor={true}
            loop={true}
            speed={600}
            keyboard={{ enabled: true }}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            }}
            pagination={{
              clickable: true,
              el: '.projects__pagination-bullets',
              bulletClass: 'projects__swiper-bullet',
              bulletActiveClass: 'projects__swiper-bullet-active'
            }}
            navigation={{
              prevEl: '#projects-prev-btn',
              nextEl: '#projects-next-btn'
            }}
            className="projects__swiper"
          >
            {projects.map((proj) => (
              <SwiperSlide key={proj.id} className="projects__slide">
                <article className="projects__card">
                  <div className="blob" />

                  {/* Top Badge: Number and Category */}
                  <div className="projects__number">
                    <h1>{proj.number}</h1>
                    <span className="projects__category-badge">{proj.category}</span>
                  </div>

                  {/* Project Info */}
                  <div className="projects__data">
                    <h3 className="projects__title">{proj.title}</h3>
                    <p className="projects__subtitle">{proj.subtitle}</p>
                    <p className="projects__description">{proj.description}</p>

                    <div className="projects__tech-tags">
                      {proj.techStack.map((tech) => (
                        <span key={tech} className="projects__tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Project Preview Image */}
                  <div className="projects__image">
                    <img
                      src={proj.image}
                      alt={`${proj.title} preview`}
                      className="projects__img"
                      loading="lazy"
                      width={400}
                      height={240}
                    />

                    <a
                      href={proj.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="projects__button"
                      aria-label={`Open live demo for ${proj.title}`}
                      title="Launch Project"
                    >
                      <i className="ri-arrow-right-up-long-line" />
                    </a>
                  </div>

                  {/* Action Link Footer */}
                  <div className="projects__footer">
                    <a
                      href={proj.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="projects__live-link"
                    >
                      <span>Live Preview</span>
                      <i className="ri-arrow-right-up-line" />
                    </a>
                    {proj.githubUrl && (
                      <a
                        href={proj.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="projects__github-link"
                        title="Source Code"
                        aria-label="View source code on GitHub"
                      >
                        <i className="ri-github-line" />
                      </a>
                    )}
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Pagination Bullets */}
          <div className="projects__pagination-bullets" />
        </div>
      </div>
    </section>
  );
};
