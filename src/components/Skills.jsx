import React from 'react';
import { useTranslation } from 'react-i18next';
import './Skills.css';

const Skills = () => {
    const { t } = useTranslation();
    const skillCategories = t('skills.categories', { returnObjects: true });

    return (
        <section id="skills" className="skills">
            <div className="section-header">
                <h2 className="section-title">{t('skills.title')}</h2>
                <p className="section-desc">{t('skills.subtitle')}</p>
            </div>
            <div className="skills-container">
                {skillCategories.map((category, index) => (
                    <div key={index} className="skill-category glass-card">
                        <h3 className="category-title">{category.title}</h3>
                        <div className="category-skills">
                            {category.skills.map((skill, sIndex) => (
                                <div key={sIndex} className="skill-item">
                                    <div className="skill-info">
                                        <span className="skill-name">{skill.name}</span>
                                        <span className="skill-percentage">{skill.level}</span>
                                    </div>
                                    <div className="skill-progress">
                                        <div className="progress-bar" style={{ width: skill.level }}></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;

