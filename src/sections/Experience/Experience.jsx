import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  FiBriefcase, 
  FiCode, 
  FiDatabase, 
  FiUsers, 
  FiBookOpen, 
  FiSettings, 
  FiTrendingUp 
} from 'react-icons/fi';
import { 
  SiReact, 
  SiNextdotjs, 
  SiMongodb, 
  SiGit, 
  SiGithub 
} from 'react-icons/si';
import { FaGear, FaBrain, FaCalendarDays } from 'react-icons/fa6';
import './Experience.css';

import expBg from '../../assets/experience/experience-background-2k.png';
import openPaymntLogo from '../../assets/experience/openpaymnt-logo-crisp.png';

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });

      tl.from('.experience-intro', {
        opacity: 0,
        y: 20,
        duration: 0.5,
        ease: 'power2.out',
        clearProps: 'all',
      })
      .from('.experience-card-outer', {
        opacity: 0,
        y: 24,
        duration: 0.55,
        ease: 'power2.out',
        clearProps: 'all',
      }, '-=0.2')
      .from('.experience-subcard-outer', {
        opacity: 0,
        y: 18,
        duration: 0.45,
        stagger: 0.08,
        ease: 'power2.out',
        clearProps: 'all',
      }, '-=0.2')
      .from('.experience-footer-area', {
        opacity: 0,
        y: 14,
        duration: 0.45,
        ease: 'power2.out',
        clearProps: 'all',
      }, '-=0.15');
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" className="experience-section" ref={sectionRef}>
      {/* Background Image Layer with composition-preserving framing */}
      <div className="experience-bg-layer" aria-hidden="true">
        <img
          src={expBg}
          alt=""
          className="experience-bg-image"
          loading="eager"
        />
        <div className="experience-atmosphere-overlay" />
      </div>

      <div className="experience-container">
        {/* Main Content Area positioned cleanly in the center-left open study zone */}
        <div className="experience-content-area">
          {/* Top Intro Block */}
          <div className="experience-intro">
            <span className="experience-eyebrow">EXPERIENCE</span>
            <div className="experience-eyebrow-adornment" aria-hidden="true">
              <span className="eyebrow-line" />
              <span className="eyebrow-star">✦</span>
              <span className="eyebrow-line" />
            </div>

            <h2 className="experience-heading">Where Curiosity Met Real-World Work</h2>
            <p className="experience-subtitle">
              Building products, improving interfaces, and exploring intelligent systems.
            </p>
          </div>

          {/* Main Featured Experience Card */}
          <div className="experience-card-outer">
            <div className="experience-card-inner">
              {/* Left Vertical Timeline Accent */}
              <div className="experience-timeline-accent" aria-hidden="true">
                <div className="timeline-line-top" />
                <div className="timeline-badge">
                  <FiBriefcase className="timeline-badge-icon" size={16} />
                </div>
                <div className="timeline-line-bottom">
                  <span className="timeline-node" />
                </div>
              </div>

              {/* Card Body */}
              <div className="experience-card-body">
                {/* Header Row: Logo, Company, Role, and Date */}
                <div className="experience-card-header">
                  <div className="experience-company-group">
                    <div className="experience-logo-box">
                      <img
                        src={openPaymntLogo}
                        alt="OpenPaymnt logo"
                        className="experience-logo-img"
                      />
                    </div>
                    <div className="experience-title-group">
                      <h3 className="experience-company-name">OpenPaymnt</h3>
                      <p className="experience-role-title">Software Development Intern</p>
                    </div>
                  </div>

                  <div className="experience-date-badge">
                    <FaCalendarDays className="experience-calendar-icon" size={14} />
                    <span>Jul 2025 – Dec 2025</span>
                  </div>
                </div>

                {/* Bullet Points */}
                <ul className="experience-bullets">
                  <li className="experience-bullet-item">
                    <span className="bullet-dot" aria-hidden="true" />
                    <span>
                      Implemented responsive <span className="exp-highlight">frontend features with React.js</span> and Next.js, including API integration, debugging, and UI performance improvements.
                    </span>
                  </li>
                  <li className="experience-bullet-item">
                    <span className="bullet-dot" aria-hidden="true" />
                    <span>
                      Supported backend development tasks involving <span className="exp-highlight">MongoDB and AI/ML workflows</span> while collaborating with the product team through Git and GitHub.
                    </span>
                  </li>
                </ul>

                {/* Tech Stack Section */}
                <div className="experience-tech-section">
                  <div className="experience-tech-header">
                    <span className="experience-tech-label">TECH STACK</span>
                    <span className="experience-tech-divider" aria-hidden="true" />
                  </div>

                  <div className="experience-tech-pills" aria-label="Tech stack used">
                    <div className="experience-tech-pill">
                      <SiReact className="pill-icon pill-icon-react" size={14} />
                      <span>React.js</span>
                    </div>
                    <div className="experience-tech-pill">
                      <SiNextdotjs className="pill-icon pill-icon-next" size={14} />
                      <span>Next.js</span>
                    </div>
                    <div className="experience-tech-pill">
                      <SiMongodb className="pill-icon pill-icon-mongo" size={14} />
                      <span>MongoDB</span>
                    </div>
                    <div className="experience-tech-pill">
                      <SiGit className="pill-icon pill-icon-git" size={14} />
                      <span>Git</span>
                    </div>
                    <div className="experience-tech-pill">
                      <SiGithub className="pill-icon pill-icon-github" size={14} />
                      <span>GitHub</span>
                    </div>
                    <div className="experience-tech-pill">
                      <FaGear className="pill-icon pill-icon-api" size={13} />
                      <span>API Integration</span>
                    </div>
                    <div className="experience-tech-pill">
                      <FaBrain className="pill-icon pill-icon-ai" size={13} />
                      <span>AI/ML Workflows</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Three Supporting Highlight Cards */}
          <div className="experience-subcards-grid">
            {/* Card 1: Frontend Development */}
            <div className="experience-subcard-outer">
              <div className="experience-subcard-inner">
                <div className="subcard-icon-medallion" aria-hidden="true">
                  <FiCode className="subcard-icon" size={17} />
                </div>
                <div className="subcard-text-group">
                  <h4 className="subcard-title">Frontend Development</h4>
                  <p className="subcard-desc">Building responsive and user-friendly interfaces.</p>
                </div>
              </div>
            </div>

            {/* Card 2: Backend Support */}
            <div className="experience-subcard-outer">
              <div className="experience-subcard-inner">
                <div className="subcard-icon-medallion" aria-hidden="true">
                  <FiDatabase className="subcard-icon" size={16} />
                </div>
                <div className="subcard-text-group">
                  <h4 className="subcard-title">Backend Support</h4>
                  <p className="subcard-desc">Working with databases and intelligent systems.</p>
                </div>
              </div>
            </div>

            {/* Card 3: Team Collaboration */}
            <div className="experience-subcard-outer">
              <div className="experience-subcard-inner">
                <div className="subcard-icon-medallion" aria-hidden="true">
                  <FiUsers className="subcard-icon" size={17} />
                </div>
                <div className="subcard-text-group">
                  <h4 className="subcard-title">Team Collaboration</h4>
                  <p className="subcard-desc">Contributing, learning and growing together.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Closing & Decorative Area */}
          <div className="experience-footer-area">
            {/* Center Decorative Divider with Faceted 8-Point Compass Star */}
            <div className="experience-bottom-divider" aria-hidden="true">
              <div className="divider-arm-group divider-arm-left-group">
                <span className="divider-arm divider-arm-left" />
                <span className="divider-pip" />
              </div>

              <div className="divider-star-wrapper">
                <svg
                  width="26"
                  height="30"
                  viewBox="0 0 34 38"
                  fill="none"
                  className="experience-compass-star"
                  aria-hidden="true"
                >
                  <defs>
                    <filter id="expGoldBloom" x="-40%" y="-40%" width="180%" height="180%">
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
                  <polygon points="17,1 17,19 14,16.5" fill="#a06e22" />
                  <polygon points="17,1 19.5,16.5 17,19" fill="#fde8aa" />

                  <polygon points="33,19 17,19 21.5,16.5" fill="#f6d382" />
                  <polygon points="33,19 21.5,21.5 17,19" fill="#936018" />

                  <polygon points="17,37 17,19 19.5,21.5" fill="#95621a" />
                  <polygon points="17,37 14,21.5 17,19" fill="#f5ce79" />

                  <polygon points="1,19 17,19 12.5,21.5" fill="#fde39f" />
                  <polygon points="1,19 12.5,16.5 17,19" fill="#915f18" />
                </svg>
              </div>

              <div className="divider-arm-group divider-arm-right-group">
                <span className="divider-pip" />
                <span className="divider-arm divider-arm-right" />
              </div>
            </div>

            {/* 4 Symbolic Items Row */}
            <div className="experience-symbolic-row" aria-label="Experience core values">
              <div className="experience-symbol-item">
                <FiBookOpen className="symbol-icon" size={16} />
                <span className="symbol-label">LEARN</span>
              </div>
              <div className="experience-symbol-item">
                <FiSettings className="symbol-icon" size={16} />
                <span className="symbol-label">BUILD</span>
              </div>
              <div className="experience-symbol-item">
                <FiTrendingUp className="symbol-icon" size={16} />
                <span className="symbol-label">IMPROVE</span>
              </div>
              <div className="experience-symbol-item">
                <FiUsers className="symbol-icon" size={16} />
                <span className="symbol-label">COLLABORATE</span>
              </div>
            </div>

            {/* Final Closing Line */}
            <p className="experience-closing-text">
              EXPERIENCES TODAY. A BRIGHTER TOMORROW.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
