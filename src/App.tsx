import React, { useState, useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ThemeSwitcher } from './components/ThemeSwitcher';

export const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    // Initialize ScrollReveal animations matching Panda Coders reference (reset: true repeats fade-in/fade-out on scroll up & down)
    try {
      const sr = ScrollReveal({
        origin: 'top',
        distance: '60px',
        duration: 2000,
        delay: 300,
        reset: true // Repeats animations on scroll down and scroll up
      });

      // Hero image, projects, work, testimonials, contact containers
      sr.reveal(
        '.home__image, .projects__container, .work__container, .testimonials__container, .contact__container'
      );
      sr.reveal('.home__data', { delay: 900, origin: 'bottom' });
      sr.reveal('.home__info', { delay: 1200, origin: 'bottom' });
      sr.reveal('.home__social, .home__cv', { delay: 1200, origin: 'bottom' });
      // About section: text from left, picture from right
      sr.reveal('.about__data', { origin: 'left', delay: 300 });
      sr.reveal('.about__image', { origin: 'right', delay: 300 });
      // Services/Skills cards with stagger interval
      sr.reveal('.services__card', { interval: 100, origin: 'bottom' });
    } catch {
      // Graceful fallback if window environment restricts
    }

    const handleScroll = () => {
      const sections = document.querySelectorAll<HTMLElement>('section[id]');
      const scrollY = window.scrollY;

      sections.forEach((section) => {
        const top = section.offsetTop - 140;
        const height = section.offsetHeight;
        const id = section.getAttribute('id') || '';

        if (scrollY >= top && scrollY < top + height) {
          setActiveSection(id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <CustomCursor />
      <Navbar activeSection={activeSection} />

      <main className="main">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
      <ThemeSwitcher />
    </>
  );
};

export default App;
