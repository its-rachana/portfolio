import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './Navbar.css';

const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'hi', name: 'हिंदी', flag: '🇮🇳' }
];

const Navbar = ({ onLanguageChange }) => {
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const changeLanguage = (lng) => {
    if (onLanguageChange) {
      onLanguageChange(lng);
    } else {
      // Fallback if callback not provided
      i18n.changeLanguage(lng);
    }
    setLangOpen(false);
  };

  const currentLang = languages.find(l => l.code === i18n.language) || languages[0];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <a href="#home" className="nav-logo gradient-text">RA</a>

        <div className="nav-right">
          <ul className="nav-links">
            <li><a href="#home">{t('nav.about')}</a></li>
            <li><a href="#experience">{t('nav.experience')}</a></li>
            <li><a href="#education">{t('nav.education')}</a></li>
            <li><a href="#certifications">{t('nav.certifications')}</a></li>
            <li><a href="#skills">{t('nav.skills')}</a></li>
            <li><a href="#projects">{t('nav.projects')}</a></li>
            <li><a href="#contact">{t('nav.contact')}</a></li>
          </ul>

          <div className="language-selector">
            <button
              className="language-btn"
              onClick={() => setLangOpen(!langOpen)}
            >
              <span className="lang-flag">{currentLang.flag}</span>
              <span className="lang-code">{currentLang.code.toUpperCase()}</span>
              <span className="lang-arrow">▼</span>
            </button>

            {langOpen && (
              <div className="language-dropdown">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    className={`language-option ${i18n.language === lang.code ? 'active' : ''}`}
                    onClick={() => changeLanguage(lang.code)}
                  >
                    <span className="lang-flag">{lang.flag}</span>
                    <span>{lang.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <a href="#contact" className="btn-primary nav-cta">{t('nav.letsConnect')}</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
