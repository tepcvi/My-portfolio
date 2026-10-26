import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const { skillCategories } = portfolioData;

  // Both open by default or toggleable
  const [openCards, setOpenCards] = useState<Record<string, boolean>>({
    'dev-skills': true,
    'dev-tools': true
  });

  const toggleCard = (id: string) => {
    setOpenCards((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <section className="services section" id="skills">
      <div className="container">
        <h2 className="section__title">
          Technical <span>Stack</span> & Tools
        </h2>

        <div className="services__container">
          {skillCategories.map((cat, index) => {
            const isOpen = openCards[cat.id];
            return (
              <div
                key={cat.id}
                className={`services__card ${isOpen ? 'services__open' : 'services__close'}`}
              >
                <div className={`blob ${index === 1 ? 'blob-2' : ''}`} />

                <div className="services__data">
                  <h3 className="services__title">{cat.title}</h3>
                  <p className="services__description">{cat.description}</p>
                </div>

                <div className="services__info">
                  <h4 className="services__subtitle">Technologies</h4>
                  <ul className="services__skills">
                    {cat.skills.map((skill) => (
                      <li key={skill} className="services__skill">
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  className="services__button"
                  onClick={() => toggleCard(cat.id)}
                  aria-label={`Toggle ${cat.title} details`}
                >
                  <i className="ri-arrow-down-s-line" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
