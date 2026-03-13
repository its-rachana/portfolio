import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Testimonials.css';

const Testimonials = () => {
    const { t } = useTranslation();
    const testimonials = t('testimonials.items', { returnObjects: true });
    const [active, setActive] = useState(0);

    return (
        <section id="testimonials" className="testimonials">
            <div className="section-header">
                <h2 className="section-title">{t('testimonials.title')}</h2>
                <p className="section-desc">{t('testimonials.subtitle')}</p>
            </div>

            <div className="testimonials-layout">
                { }
                <div className="testimonials-sidebar">
                    {testimonials.map((item, i) => (
                        <button
                            key={i}
                            className={`testi-tab ${active === i ? 'active' : ''}`}
                            onClick={() => setActive(i)}
                        >
                            <div className="testi-avatar" style={{ background: item.color }}>{item.initials}</div>
                            <div className="testi-tab-info">
                                <span className="testi-tab-name">{item.name}</span>
                                <span className="testi-tab-role">{item.title} · {item.company}</span>
                            </div>
                        </button>
                    ))}
                </div>

                { }
                <div className="testimonials-card glass-card" key={active}>
                    <div className="quote-icon">"</div>
                    <p className="testi-quote">{testimonials[active].quote}</p>
                    <div className="testi-author">
                        <div className="testi-avatar large" style={{ background: testimonials[active].color }}>
                            {testimonials[active].initials}
                        </div>
                        <div>
                            <p className="testi-name">{testimonials[active].name}</p>
                            <p className="testi-role">{testimonials[active].title} · {testimonials[active].company}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
