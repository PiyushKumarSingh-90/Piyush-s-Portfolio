import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { portfolioData } from '../../data/portfolioData';
import ProjectFilters from './ProjectFilters';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import './Projects.css';

import fraudImg from '../../assets/projects/fraud-risk.png';
import defectImg from '../../assets/projects/defect-detection.png';
import jobPortalImg from '../../assets/projects/job-portal.png';
import projectsBg from '../../assets/projects/projects-background.png';

gsap.registerPlugin(ScrollTrigger);

const projectImageMap = {
  'fraud-detection': fraudImg,
  'defect-detection': defectImg,
  'job-portal': jobPortalImg,
};

const Projects = () => {
  const { projects } = portfolioData;
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });

      tl.from('.projects-eyebrow', {
        opacity: 0,
        y: 15,
        duration: 0.4,
        ease: 'power2.out',
        clearProps: 'all',
      })
      .from('.projects-heading', {
        opacity: 0,
        y: 18,
        duration: 0.5,
        ease: 'power2.out',
        clearProps: 'all',
      }, '-=0.2')
      .from('.projects-description', {
        opacity: 0,
        y: 12,
        duration: 0.4,
        ease: 'power2.out',
        clearProps: 'all',
      }, '-=0.2')
      .from('.project-card-outer', {
        opacity: 0,
        y: 25,
        duration: 0.5,
        stagger: 0.08,
        ease: 'power2.out',
        clearProps: 'all',
      }, '-=0.1')
      .from(['.projects-bottom-detail', '.projects-bottom-caption'], {
        opacity: 0,
        duration: 0.4,
        stagger: 0.08,
        ease: 'power2.out',
        clearProps: 'all',
      }, '-=0.1');
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === 'All') return true;
    return project.filterCategory === activeFilter;
  });

  return (
    <section id="projects" className="projects-section" ref={sectionRef}>
      {/* Background Image Layer with composition-preserving framing */}
      <div className="projects-bg-layer" aria-hidden="true">
        <img
          src={projectsBg}
          alt=""
          className="projects-bg-image"
          loading="eager"
        />
        <div className="projects-atmosphere-overlay" />
      </div>

      <div className="projects-container">
        {/* Main Content Area (occupying left ~80-82%) */}
        <div className="projects-content-area">
          {/* Top Introduction Area */}
          <div className="projects-intro">
            <div className="projects-eyebrow">
              <span className="eyebrow-text">MY WORK</span>
              <div className="eyebrow-adornment">
                <span className="eyebrow-line"></span>
                <span className="eyebrow-star">✦</span>
              </div>
            </div>

            <h2 className="projects-heading">
              Projects That Build<br />Intelligent Systems
            </h2>

            <p className="projects-description">
              A collection of real-world projects that combine AI, engineering,
              and creativity to solve meaningful problems.
            </p>
          </div>

          {/* Filter Buttons */}
          <ProjectFilters
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
          />

          {/* Project Cards Grid */}
          <div className="projects-grid">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                imageSrc={projectImageMap[project.id]}
                onOpenDetails={setSelectedProject}
              />
            ))}
          </div>
        </div>

        {/* Bottom Section Detail & Divider */}
        <div className="projects-footer-detail">
          <div className="projects-bottom-divider">
            <div className="divider-arm-group divider-arm-left-group">
              <span className="divider-arm divider-arm-left" />
              <span className="divider-pip" />
            </div>

            <div className="divider-star-wrapper">
              <svg
                width="32"
                height="36"
                viewBox="0 0 34 38"
                fill="none"
                className="divider-compass-star"
                aria-hidden="true"
              >
                <defs>
                  <filter id="goldBloom" x="-40%" y="-40%" width="180%" height="180%">
                    <feGaussianBlur stdDeviation="1" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>
                {/* 4 Diagonal rays with rounded tips */}
                <line x1="17" y1="19" x2="8.5" y2="10.5" stroke="#d49e4b" strokeWidth="1.3" strokeLinecap="round" />
                <line x1="17" y1="19" x2="25.5" y2="10.5" stroke="#d49e4b" strokeWidth="1.3" strokeLinecap="round" />
                <line x1="17" y1="19" x2="8.5" y2="27.5" stroke="#d49e4b" strokeWidth="1.3" strokeLinecap="round" />
                <line x1="17" y1="19" x2="25.5" y2="27.5" stroke="#d49e4b" strokeWidth="1.3" strokeLinecap="round" />
                
                {/* Faceted 8-point primary star with light and shadow facets */}
                {/* Top Ray */}
                <polygon points="17,1 17,19 14,16.5" fill="#a06e22" />
                <polygon points="17,1 19.5,16.5 17,19" fill="#fde8aa" />
                
                {/* Right Ray */}
                <polygon points="33,19 17,19 21.5,16.5" fill="#f6d382" />
                <polygon points="33,19 21.5,21.5 17,19" fill="#936018" />
                
                {/* Bottom Ray */}
                <polygon points="17,37 17,19 19.5,21.5" fill="#e0af52" />
                <polygon points="17,37 14,21.5 17,19" fill="#804f10" />
                
                {/* Left Ray */}
                <polygon points="1,19 17,19 12.5,21.5" fill="#936018" />
                <polygon points="1,19 12.5,16.5 17,19" fill="#fde8aa" />
                
                {/* Center Core Diamond Highlight */}
                <polygon points="17,15 20.5,19 17,23 13.5,19" fill="#fffbe8" filter="url(#goldBloom)" opacity="0.95" />
              </svg>
            </div>

            <div className="divider-arm-group divider-arm-right-group">
              <span className="divider-pip" />
              <span className="divider-arm divider-arm-right" />
            </div>
          </div>

          <p className="projects-bottom-caption">
            SMALL PROJECTS. BIGGER POSSIBILITIES.
          </p>
        </div>
      </div>

      {/* Expandable Project Details Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          imageSrc={projectImageMap[selectedProject.id]}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default Projects;
