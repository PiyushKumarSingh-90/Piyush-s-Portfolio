import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  FiCode,
  FiMonitor,
  FiDatabase,
  FiTool,
  FiShare2,
  FiHardDrive,
  FiCheckCircle,
  FiCloud,
  FiFileText
} from 'react-icons/fi';
import {
  SiPython,
  SiCplusplus,
  SiScikitlearn,
  SiTensorflow,
  SiOpencv,
  SiHtml5,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiFastapi,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiSqlite,
  SiGit,
  SiGithub,
  SiPostman,
  SiJupyter,
  SiDocker
} from 'react-icons/si';
import { FaCss3Alt, FaBrain, FaAtom, FaWrench, FaGear } from 'react-icons/fa6';
import { VscVscode } from 'react-icons/vsc';
import './Skills.css';

import skillsBg from '../../assets/skills/skills-background-2k.png';

gsap.registerPlugin(ScrollTrigger);

// Custom high-fidelity icon marks matching the reference design exactly
const XgboostMark = () => (
  <svg width="48" height="32" viewBox="0 0 64 32" fill="none" className="pill-brand-icon">
    <text x="0" y="23" fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" fontStyle="italic" fontWeight="800" fontSize="18" fill="#00b4d8" letterSpacing="-0.5">XGBoost</text>
  </svg>
);

const EdaMark = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="pill-brand-icon">
    <rect x="2" y="16" width="5" height="13" rx="1.5" fill="#7928CA" />
    <rect x="9" y="9" width="5" height="20" rx="1.5" fill="#0070F3" />
    <rect x="16" y="4" width="5" height="25" rx="1.5" fill="#00DFD8" />
    <rect x="23" y="12" width="5" height="17" rx="1.5" fill="#FFFFFF" />
  </svg>
);

const KerasMark = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="pill-brand-icon">
    <rect width="32" height="32" rx="4" fill="#D00000" />
    <path d="M9 6h4.2v8.5l6.5-8.5h5.5l-8 10 8.5 10h-5.6l-6.9-8.8V26H9V6z" fill="#FFFFFF" />
  </svg>
);

const GradCamMark = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="pill-brand-icon">
    <rect width="32" height="32" rx="5" fill="#0e1320" stroke="rgba(214,174,98,0.3)" strokeWidth="1" />
    <defs>
      <radialGradient id="camHeatmap" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#ff2200" />
        <stop offset="35%" stopColor="#ffaa00" />
        <stop offset="65%" stopColor="#00dd55" />
        <stop offset="85%" stopColor="#0088ff" />
        <stop offset="100%" stopColor="#440099" />
      </radialGradient>
    </defs>
    <circle cx="16" cy="16" r="10" fill="url(#camHeatmap)" />
  </svg>
);

const ExpressMark = () => (
  <svg width="34" height="32" viewBox="0 0 36 32" fill="none" className="pill-brand-icon">
    <text x="2" y="24" fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" fontWeight="300" fontSize="26" fill="#ffffff" letterSpacing="-1">ex</text>
  </svg>
);

const Skills = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          toggleActions: 'play none none none',
        },
      });

      tl.from('.skills-intro', {
        opacity: 0,
        y: 22,
        duration: 0.5,
        ease: 'power2.out',
        clearProps: 'all',
      })
      .from('.skills-card-outer', {
        opacity: 0,
        y: 20,
        duration: 0.45,
        stagger: 0.07,
        ease: 'power2.out',
        clearProps: 'all',
      }, '-=0.2')
      .from('.skills-footer-area', {
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
    <section id="skills" className="skills-section" ref={sectionRef}>
      {/* Background Layer preserving study room composition */}
      <div className="skills-bg-layer" aria-hidden="true">
        <img
          src={skillsBg}
          alt=""
          className="skills-bg-image"
          loading="eager"
        />
        <div className="skills-atmosphere-overlay" />
      </div>

      <div className="skills-container">
        {/* Main Content Area centered in open zone between left books and right poster */}
        <div className="skills-content-area">
          
          {/* Upper Intro & Quote Zone Row */}
          <div className="skills-top-row">
            <div className="skills-intro">
              <span className="skills-eyebrow">SKILLS</span>
              <div className="skills-eyebrow-adornment" aria-hidden="true">
                <span className="eyebrow-line" />
                <span className="eyebrow-star">✦</span>
                <span className="eyebrow-line" />
              </div>

              <h2 className="skills-heading">
                Tools &amp; Technologies<br />I Work With
              </h2>

              <p className="skills-subtitle">
                A blend of problem-solving, creativity, and continuous learning to turn ideas into impactful solutions.
              </p>
            </div>

            {/* Vertical framing divider separating intro block and the moonlit window quote area */}
            <div className="skills-window-divider-zone" aria-hidden="true">
              <span className="skills-window-v-line" />
            </div>
          </div>

          {/* 3-Row Skills Grid */}
          <div className="skills-cards-grid">
            
            {/* ROW 1: 3 Cards */}
            {/* Card 1: Programming Languages */}
            <div className="skills-card-outer card-programming">
              <div className="skills-card-inner">
                <div className="card-header-row">
                  <FiCode className="card-header-icon" size={17} />
                  <h3 className="card-title">Programming Languages</h3>
                </div>
                <p className="card-description">
                  Languages I use to build, experiment and solve problems.
                </p>
                <div className="skill-pills-row">
                  <div className="skill-pill">
                    <SiPython className="pill-brand-icon icon-python" size={34} />
                    <span>Python</span>
                  </div>
                  <div className="skill-pill">
                    <SiCplusplus className="pill-brand-icon icon-cpp" size={34} />
                    <span>C++</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: Machine Learning */}
            <div className="skills-card-outer card-ml">
              <div className="skills-card-inner">
                <div className="card-header-row">
                  <FaBrain className="card-header-icon" size={16} />
                  <h3 className="card-title">Machine Learning</h3>
                </div>
                <p className="card-description">
                  ML libraries and techniques I work with.
                </p>
                <div className="skill-pills-row">
                  <div className="skill-pill">
                    <SiScikitlearn className="pill-brand-icon icon-scikit" size={34} />
                    <span>Scikit-learn</span>
                  </div>
                  <div className="skill-pill">
                    <XgboostMark />
                    <span>XGBoost</span>
                  </div>
                  <div className="skill-pill">
                    <EdaMark />
                    <span>EDA</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3: Deep Learning & Computer Vision */}
            <div className="skills-card-outer card-dl">
              <div className="skills-card-inner">
                <div className="card-header-row">
                  <FaAtom className="card-header-icon" size={17} />
                  <h3 className="card-title">Deep Learning &amp; Computer Vision</h3>
                </div>
                <p className="card-description">
                  Frameworks for building intelligent systems.
                </p>
                <div className="skill-pills-row">
                  <div className="skill-pill">
                    <SiTensorflow className="pill-brand-icon icon-tf" size={34} />
                    <span>TensorFlow</span>
                  </div>
                  <div className="skill-pill">
                    <KerasMark />
                    <span>Keras</span>
                  </div>
                  <div className="skill-pill">
                    <SiOpencv className="pill-brand-icon icon-opencv" size={34} />
                    <span>OpenCV</span>
                  </div>
                  <div className="skill-pill">
                    <GradCamMark />
                    <span>Grad-CAM</span>
                  </div>
                </div>
              </div>
            </div>

            {/* ROW 2: 2 Cards (Wide Web Dev + Databases) */}
            {/* Card 4: Web Development (Wide) */}
            <div className="skills-card-outer card-web-dev card-span-2">
              <div className="skills-card-inner">
                <div className="card-header-row">
                  <FiMonitor className="card-header-icon" size={17} />
                  <h3 className="card-title">Web Development</h3>
                </div>
                <p className="card-description">
                  Frontend and backend technologies.
                </p>
                <div className="skill-pills-row">
                  <div className="skill-pill">
                    <SiHtml5 className="pill-brand-icon icon-html" size={34} />
                    <span>HTML</span>
                  </div>
                  <div className="skill-pill">
                    <FaCss3Alt className="pill-brand-icon icon-css" size={34} />
                    <span>CSS</span>
                  </div>
                  <div className="skill-pill">
                    <SiJavascript className="pill-brand-icon icon-js" size={32} />
                    <span>JavaScript</span>
                  </div>
                  <div className="skill-pill">
                    <SiReact className="pill-brand-icon icon-react" size={34} />
                    <span>React</span>
                  </div>
                  <div className="skill-pill">
                    <SiNextdotjs className="pill-brand-icon icon-next" size={32} />
                    <span>Next.js</span>
                  </div>
                  <div className="skill-pill">
                    <SiNodedotjs className="pill-brand-icon icon-node" size={34} />
                    <span>Node.js</span>
                  </div>
                  <div className="skill-pill">
                    <ExpressMark />
                    <span>Express.js</span>
                  </div>
                  <div className="skill-pill">
                    <SiFastapi className="pill-brand-icon icon-fastapi" size={34} />
                    <span>FastAPI</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 5: Databases */}
            <div className="skills-card-outer card-databases">
              <div className="skills-card-inner">
                <div className="card-header-row">
                  <FiDatabase className="card-header-icon" size={17} />
                  <h3 className="card-title">Databases</h3>
                </div>
                <p className="card-description">
                  Databases I work with.
                </p>
                <div className="skill-pills-row">
                  <div className="skill-pill">
                    <SiMongodb className="pill-brand-icon icon-mongo" size={34} />
                    <span>MongoDB</span>
                  </div>
                  <div className="skill-pill">
                    <SiMysql className="pill-brand-icon icon-mysql" size={34} />
                    <span>MySQL</span>
                  </div>
                  <div className="skill-pill">
                    <SiPostgresql className="pill-brand-icon icon-postgres" size={34} />
                    <span>PostgreSQL</span>
                  </div>
                  <div className="skill-pill">
                    <SiSqlite className="pill-brand-icon icon-sqlite" size={34} />
                    <span>SQLite</span>
                  </div>
                </div>
              </div>
            </div>

            {/* ROW 3: 2 Cards (Wide Tools & Platforms + Core CS) */}
            {/* Card 6: Tools & Platforms (Wide) */}
            <div className="skills-card-outer card-tools card-span-2">
              <div className="skills-card-inner">
                <div className="card-header-row">
                  <FaWrench className="card-header-icon" size={16} />
                  <h3 className="card-title">Tools &amp; Platforms</h3>
                </div>
                <p className="card-description">
                  Tools that power my development workflow.
                </p>
                <div className="skill-pills-row">
                  <div className="skill-pill">
                    <SiGit className="pill-brand-icon icon-git" size={34} />
                    <span>Git</span>
                  </div>
                  <div className="skill-pill">
                    <SiGithub className="pill-brand-icon icon-github" size={34} />
                    <span>GitHub</span>
                  </div>
                  <div className="skill-pill">
                    <VscVscode className="pill-brand-icon icon-vscode" size={34} />
                    <span>VS Code</span>
                  </div>
                  <div className="skill-pill">
                    <SiPostman className="pill-brand-icon icon-postman" size={34} />
                    <span>Postman</span>
                  </div>
                  <div className="skill-pill">
                    <SiJupyter className="pill-brand-icon icon-jupyter" size={34} />
                    <span>Jupyter</span>
                  </div>
                  <div className="skill-pill">
                    <SiDocker className="pill-brand-icon icon-docker" size={34} />
                    <span>Docker</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 7: Core CS & Other Skills */}
            <div className="skills-card-outer card-core-cs">
              <div className="skills-card-inner">
                <div className="card-header-row">
                  <FaGear className="card-header-icon" size={16} />
                  <h3 className="card-title">Core CS &amp; Other Skills</h3>
                </div>
                <p className="card-description">
                  Core computer science and additional expertise.
                </p>
                <div className="skill-pills-row">
                  <div className="skill-pill">
                    <FiCode className="pill-brand-icon icon-core" size={28} />
                    <span>DSA</span>
                  </div>
                  <div className="skill-pill">
                    <FiShare2 className="pill-brand-icon icon-core" size={28} />
                    <span>Computer Networks</span>
                  </div>
                  <div className="skill-pill">
                    <FiHardDrive className="pill-brand-icon icon-core" size={28} />
                    <span>Operating Systems</span>
                  </div>
                  <div className="skill-pill">
                    <FiCloud className="pill-brand-icon icon-core" size={28} />
                    <span>REST APIs</span>
                  </div>
                  <div className="skill-pill">
                    <FiFileText className="pill-brand-icon icon-core" size={28} />
                    <span>Problem Solving</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Footer Treatment */}
          <div className="skills-footer-area">
            {/* Center Decorative Divider with Faceted 8-Point Compass Star */}
            <div className="skills-bottom-divider" aria-hidden="true">
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
                  className="skills-compass-star"
                  aria-hidden="true"
                >
                  <defs>
                    <filter id="skillsGoldBloom" x="-40%" y="-40%" width="180%" height="180%">
                      <feGaussianBlur stdDeviation="1" result="blur" />
                      <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>
                  {/* 4 Diagonal rays */}
                  <line x1="17" y1="19" x2="8.5" y2="10.5" stroke="#d49e4b" strokeWidth="1.3" strokeLinecap="round" />
                  <line x1="17" y1="19" x2="25.5" y2="10.5" stroke="#d49e4b" strokeWidth="1.3" strokeLinecap="round" />
                  <line x1="17" y1="19" x2="8.5" y2="27.5" stroke="#d49e4b" strokeWidth="1.3" strokeLinecap="round" />
                  <line x1="17" y1="19" x2="25.5" y2="27.5" stroke="#d49e4b" strokeWidth="1.3" strokeLinecap="round" />

                  {/* Faceted 8-point primary star */}
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

            {/* Footer Text */}
            <p className="skills-closing-text">
              SKILLS TODAY. A BRIGHTER TOMORROW.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;
