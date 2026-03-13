import React from 'react';
import { useTranslation } from 'react-i18next';
import './Certifications.css';

const Certifications = () => {
    const { t } = useTranslation();
    const certifications = t('certifications.items', { returnObjects: true });

    return (
        <section id="certifications" className="certifications">
            <div className="section-header">
                <h2 className="section-title">{t('certifications.title')}</h2>
                <p className="section-desc">{t('certifications.subtitle')}</p>
            </div>

            <div className="cert-grid">
                {certifications.map((cert, index) => (
                    <div key={index} className="cert-card glass-card">
                        <div className="cert-icon-wrap" style={{ background: `${cert.color}22`, border: `1px solid ${cert.color}44` }}>
                            <span className="cert-icon">{cert.icon}</span>
                        </div>
                        <div className="cert-content">
                            <h3 className="cert-title">{cert.title}</h3>
                            <p className="cert-issuer">{cert.issuer}</p>
                            <p className="cert-desc">{cert.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Certifications;

