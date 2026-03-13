import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Experience.css';

const Experience = () => {
    const { t } = useTranslation();
    const experiences = t('experience.items', { returnObjects: true });

    return (
        <section id="experience" className="experience">
            <div className="section-header">
                <h2 className="section-title">{t('experience.title')}</h2>
                <p className="section-desc">{t('experience.subtitle')}</p>
            </div>

            <div className="exp-timeline">
                {experiences.map((exp, index) => (
                    <div key={index} className="exp-card glass-card">
                        <div className="exp-header">
                            <div className="exp-company-info">
                                <div className="exp-company-logo">
                                    {exp.company[0]}
                                </div>
                                <div>
                                    <h3 className="exp-company">{exp.company} <span className="exp-location">· {exp.location}</span></h3>
                                    <p className="exp-role">{exp.role}</p>
                                </div>
                            </div>
                            <div className="exp-meta">
                                <span className="exp-period">{exp.period}</span>
                                <span className="exp-duration">{exp.duration}</span>
                            </div>
                        </div>

                        <div className="exp-highlights">
                            {exp.highlights.map((h, i) => (
                                <div key={i} className="exp-highlight">
                                    <span className="highlight-bullet">•</span>
                                    <p>{h.text}</p>
                                </div>
                            ))}
                        </div>

                        <div className="exp-tags">
                            {exp.tags.map((tag, i) => (
                                <span key={i} className="tag">{tag}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;

