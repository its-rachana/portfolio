import React from 'react';
import { useTranslation } from 'react-i18next';
import './Education.css';

const Education = () => {
    const { t } = useTranslation();
    const education = t('education.items', { returnObjects: true });

    return (
        <section id="education" className="education">
            <div className="section-header">
                <h2 className="section-title">{t('education.title')}</h2>
                <p className="section-desc">{t('education.subtitle')}</p>
            </div>

            <div className="edu-grid">
                {education.map((edu, index) => (
                    <div key={index} className="edu-card glass-card">
                        <div className="edu-icon-wrap" style={{ background: `${edu.color}22`, border: `1px solid ${edu.color}44` }}>
                            <span className="edu-icon">{edu.icon}</span>
                        </div>
                        <div className="edu-body">
                            <div className="edu-top">
                                <div>
                                    <h3 className="edu-degree">{edu.degree}</h3>
                                    <p className="edu-field gradient-text">{edu.field}</p>
                                </div>
                                <span className={`edu-status ${edu.status === 'Expected' || edu.status === 'Esperado' || edu.status === 'अपेक्षित' ? 'status-expected' : 'status-done'}`}>
                                    {edu.status}
                                </span>
                            </div>
                            <p className="edu-school">{edu.school}</p>
                            <div className="edu-footer">
                                <span className="edu-location">📍 {edu.location}</span>
                                <span className="edu-period">🗓 {edu.period}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Education;

