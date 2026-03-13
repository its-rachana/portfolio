import React from 'react';
import { useTranslation } from 'react-i18next';
import './Projects.css';

const Projects = () => {
    const { t } = useTranslation();
    const projectData = t('projects.items', { returnObjects: true });

    return (
        <section id="projects" className="projects">
            <div className="section-header">
                <h2 className="section-title">{t('projects.title')}</h2>
                <p className="section-desc">{t('projects.subtitle')}</p>
            </div>
            <div className="projects-grid">
                {projectData.map((project, index) => (
                    <div key={index} className="project-card glass-card">
                        <div className="project-content">
                            <div className="project-tags">
                                {project.tags.map((tag, tIndex) => (
                                    <span key={tIndex} className="tag">{tag}</span>
                                ))}
                            </div>
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-desc">{project.desc}</p>

                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;

