import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Contact.css';

const Contact = () => {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xqeybdwq';

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus('sending');

        try {
            const response = await fetch(FORMSPREE_ENDPOINT, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }

        setIsSubmitting(false);
    };

    return (
        <section id="contact" className="contact">
            <div className="contact-container glass-card">
                <div className="contact-info">
                    <h2 className="section-title">{t('contact.title')}</h2>
                    <p className="contact-desc">
                        {t('contact.subtitle')}
                    </p>
                    <div className="contact-details">
                        <div className="detail-item">
                            <span className="accent-text">{t('contact.email')}</span>
                            <p>{t('contact.contactEmail')}</p>
                        </div>
                        <div className="detail-item">
                            <span className="accent-text">{t('contact.social')}</span>
                            <div className="social-links">
                                <a href="https://www.linkedin.com/in/rachana-angara/" target="_blank" rel="noopener noreferrer">{t('contact.linkedIn')}</a>
                                <a href="https://github.com/its-rachana" target="_blank" rel="noopener noreferrer">{t('contact.github')}</a>
                            </div>
                        </div>
                    </div>
                </div>
                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>{t('contact.name')}</label>
                        <input
                            type="text"
                            name="name"
                            placeholder={t('contact.yourName')}
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>{t('contact.email')}</label>
                        <input
                            type="email"
                            name="email"
                            placeholder={t('contact.yourEmail')}
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>{t('contact.message')}</label>
                        <textarea
                            name="message"
                            placeholder={t('contact.tellMeProject')}
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>

                    {status === 'sending' && (
                        <div className="form-status sending">{t('contact.sending')}</div>
                    )}
                    {status === 'success' && (
                        <div className="form-status success">{t('contact.success')}</div>
                    )}
                    {status === 'error' && (
                        <div className="form-status error">{t('contact.error')}</div>
                    )}

                    <button
                        type="submit"
                        className="btn-primary"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? t('contact.sending') : t('contact.sendMessage')}
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
