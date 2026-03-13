import React from 'react';
import { useTranslation } from 'react-i18next';
import './Hero.css';
import rachanaPhoto from '../assets/rachana_photo.jpeg';

const Hero = () => {
    const { t } = useTranslation();

    return (
        <section id="home" className="hero">
            <div className="hero-content">

                <h1 className="hero-title">
                    {t('hero.greeting')} <br />
                    <span className="hero-name">{t('hero.name')}</span>
                </h1>
                <p className="hero-role-line">{t('hero.title')} &nbsp;·&nbsp; {t('hero.problemSolver')}</p>
                <p className="hero-visa-status">🎓 {t('hero.openToWork')}</p>
                <p className="hero-description">
                    {t('hero.description')}
                </p>
                <div className="hero-btns">
                    <a href="/Rachana_Angara_Resume.pdf" download className="btn-primary">
                        {t('hero.downloadResume')}
                    </a>
                </div>
            </div>
            <div className="hero-visual">
                <div className="image-frame">
                    <img src={rachanaPhoto} alt={t('hero.name')} className="hero-image" />
                </div>
                <div className="blob"></div>
            </div>
        </section>
    );
};

export default Hero;

