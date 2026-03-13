import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Timeline.css';

const Timeline = () => {
    const { t } = useTranslation();
    const [activeIndex, setActiveIndex] = useState(null);
    const timelineData = t('timeline.items', { returnObjects: true }).map((item, index) => ({
        ...item,
        icon: index % 2 === 0 ? '🎓' : '💼',
        color: index === 0 ? '#e2c275' : index === 1 ? '#00d4aa' : index === 2 ? '#c5a059' : '#7c3aed'
    }));

    return (
        <section className="timeline-section">
            <div className="timeline-header">
                <h2 className="section-title">{t('timeline.title')}</h2>
                <p className="section-desc">{t('timeline.subtitle')}</p>
            </div>

            <div className="timeline-container">
                <div className="timeline-track">
                    <div className="timeline-line-single"></div>

                    {timelineData.map((item, index) => (
                        <div
                            key={index}
                            className={`timeline-point ${activeIndex === index ? 'active' : ''}`}
                            style={{
                                '--color': item.color,
                                '--position': `${(index / (timelineData.length - 1)) * 100}%`
                            }}
                            onMouseEnter={() => setActiveIndex(index)}
                            onMouseLeave={() => setActiveIndex(null)}
                        >
                            <div className="point-dot">
                                <span className="point-icon">{item.icon}</span>
                                <div className="point-ripple"></div>
                            </div>

                            <span className="point-year">{item.period}</span>

                            {activeIndex === index && (
                                <div className="point-card glass-card">
                                    <span className={`card-type ${item.type}`}>
                                        {item.type === 'education' ? `🎓 ${t('timeline.education')}` : `💼 ${t('timeline.work')}`}
                                    </span>
                                    <h3 className="card-title">{item.title}</h3>
                                    <p className="card-subtitle gradient-text">{item.subtitle}</p>
                                    <p className="card-org">{item.organization}</p>
                                    <p className="card-details">{item.details}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Timeline;

