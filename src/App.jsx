import React, { useState, useEffect, useCallback } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BackgroundFlow from './components/BackgroundFlow';
import Timeline from './components/Timeline';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import { useTranslation } from 'react-i18next';

function App() {
  const { t, i18n } = useTranslation();
  const [langOverlayState, setLangOverlayState] = useState('hidden'); // 'hidden' | 'animating' | 'opaque'

  const handleLanguageChange = useCallback((newLang) => {
    // Step 1: Start overlay animation (fade in)
    setLangOverlayState('animating');

    // Step 2: After fade-in completes (~300ms), make overlay opaque
    setTimeout(() => {
      setLangOverlayState('opaque');

      // Step 3: After overlay is opaque (~300ms more), change the language
      setTimeout(() => {
        i18n.changeLanguage(newLang);

        // Step 4: After language changed, hide overlay
        setTimeout(() => {
          setLangOverlayState('hidden');
        }, 300);
      }, 300);
    }, 300);
  }, [i18n]);

  return (
    <div className="app">
      <div className={`lang-transition-overlay ${langOverlayState}`}></div>
      <BackgroundFlow />
      <Navbar onLanguageChange={handleLanguageChange} />
      <main>
        <Hero />
        <Timeline />
        <Skills />
        <Experience />
        <Education />
        <Certifications />
        <Projects />
        <Testimonials />
        <Contact />
      </main>
      <footer style={{
        textAlign: 'center',
        padding: '40px',
        color: 'var(--text-secondary)',
        fontSize: '14px',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)'
      }}>
        <p>© {new Date().getFullYear()} {t('footer.text')}</p>
      </footer>
    </div>
  );
}

export default App;
