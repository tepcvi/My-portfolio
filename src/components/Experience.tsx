import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';

export const Experience: React.FC = () => {
  const { experience, education } = portfolioData;
  const [activeTab, setActiveTab] = useState<'experience' | 'education'>('experience');

  return (
    <section className="work section" id="journey">
      <div className="work__container container">
        <h2 className="section__title">
          <span>My Journey</span>
          <br />
          Experience & Education
        </h2>

        {/* Tab Switcher */}
        <div className="work__tabs-wrapper">
          <div className="work__tabs" role="tablist">
            <button
              className={`work__button ${activeTab === 'experience' ? 'work-active' : ''}`}
              onClick={() => setActiveTab('experience')}
              role="tab"
              aria-selected={activeTab === 'experience'}
            >
              <span>Experience</span>
              <i className="ri-briefcase-3-line" />
            </button>

            <button
              className={`work__button ${activeTab === 'education' ? 'work-active' : ''}`}
              onClick={() => setActiveTab('education')}
              role="tab"
              aria-selected={activeTab === 'education'}
            >
              <span>Education</span>
              <i className="ri-graduation-cap-line" />
            </button>
          </div>
        </div>

        {/* Timeline Area */}
        <div className="work__area">
          <div className="work__line" />

          {/* Experience Content */}
          <div
            className={`work__content ${activeTab === 'experience' ? 'work-active' : ''}`}
            role="tabpanel"
          >
            {experience.map((item) => (
              <div key={item.id} className="work__card">
                <div className="work__data">
                  <div>
                    <h3 className="work__title">{item.role}</h3>
                    <h4 className="work__subtitle">{item.company}</h4>
                  </div>
                  <span className="work__year">{item.period}</span>
                </div>
                <p className="work__description">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Education Content */}
          <div
            className={`work__content ${activeTab === 'education' ? 'work-active' : ''}`}
            role="tabpanel"
          >
            {education.map((item) => (
              <div key={item.id} className="work__card">
                <div className="work__data">
                  <div>
                    <h3 className="work__title">{item.degree}</h3>
                    <h4 className="work__subtitle">{item.institution}</h4>
                  </div>
                  <span className="work__year">{item.period}</span>
                </div>
                <p className="work__description">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
