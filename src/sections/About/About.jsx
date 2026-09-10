import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './About.css';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Create a timeline to ensure all elements animate in sequence
      // and aren't left stuck at opacity: 0 if ScrollTrigger misses them.
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%'
        }
      });

      tl.from('.about-left > *', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power2.out'
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" className="about-section" ref={sectionRef}>
      <div className="about-container">

        <div className="about-left">

          {/* Eyebrow */}
          <div className="about-eyebrow">
            <span className="eyebrow-text">ABOUT ME</span>
            <div className="eyebrow-rest">
              <div className="gold-line flex-line"></div>
              <svg width="56" height="20" viewBox="0 0 56 20" fill="none" className="divider-diamond-svg">
                <line x1="0" y1="10" x2="9" y2="10" stroke="rgba(214, 174, 98, 0.6)" strokeWidth="1" />
                <polygon points="12,7.5 14.5,10 12,12.5 9.5,10" fill="#E4C27A" />
                <line x1="14.5" y1="10" x2="19" y2="10" stroke="rgba(214, 174, 98, 0.6)" strokeWidth="1" />
                <line x1="28" y1="1" x2="28" y2="19" stroke="#E4C27A" strokeWidth="1" strokeLinecap="round" />
                <polygon points="28,2.5 35.5,10 28,17.5 20.5,10" stroke="#E4C27A" strokeWidth="1.2" fill="rgba(8, 10, 15, 0.88)" />
                <polygon points="28,5.5 32.5,10 28,14.5 23.5,10" stroke="rgba(240, 227, 194, 0.8)" strokeWidth="0.8" fill="rgba(228, 194, 122, 0.2)" />
                <circle cx="28" cy="10" r="1.6" fill="#FFF8E7" />
                <line x1="37" y1="10" x2="41.5" y2="10" stroke="rgba(214, 174, 98, 0.6)" strokeWidth="1" />
                <polygon points="44,7.5 46.5,10 44,12.5 41.5,10" fill="#E4C27A" />
                <line x1="46.5" y1="10" x2="56" y2="10" stroke="rgba(214, 174, 98, 0.6)" strokeWidth="1" />
              </svg>
              <div className="gold-line flex-line"></div>
            </div>
          </div>

          {/* Headings */}
          <h2 className="about-heading">More Than Just Code</h2>
          <h3 className="about-subheading">A MIND CURIOUS ABOUT INTELLIGENCE, IMPACT AND A BRIGHTER TOMORROW</h3>

          {/* Subheading Divider */}
          <div className="about-divider about-divider-subheading">
            <div className="gold-line flex-line"></div>
            <svg width="56" height="20" viewBox="0 0 56 20" fill="none" className="divider-diamond-svg">
              <line x1="0" y1="10" x2="9" y2="10" stroke="rgba(214, 174, 98, 0.6)" strokeWidth="1" />
              <polygon points="12,7.5 14.5,10 12,12.5 9.5,10" fill="#E4C27A" />
              <line x1="14.5" y1="10" x2="19" y2="10" stroke="rgba(214, 174, 98, 0.6)" strokeWidth="1" />
              <line x1="28" y1="1" x2="28" y2="19" stroke="#E4C27A" strokeWidth="1" strokeLinecap="round" />
              <polygon points="28,2.5 35.5,10 28,17.5 20.5,10" stroke="#E4C27A" strokeWidth="1.2" fill="rgba(8, 10, 15, 0.88)" />
              <polygon points="28,5.5 32.5,10 28,14.5 23.5,10" stroke="rgba(240, 227, 194, 0.8)" strokeWidth="0.8" fill="rgba(228, 194, 122, 0.2)" />
              <circle cx="28" cy="10" r="1.6" fill="#FFF8E7" />
              <line x1="37" y1="10" x2="41.5" y2="10" stroke="rgba(214, 174, 98, 0.6)" strokeWidth="1" />
              <polygon points="44,7.5 46.5,10 44,12.5 41.5,10" fill="#E4C27A" />
              <line x1="46.5" y1="10" x2="56" y2="10" stroke="rgba(214, 174, 98, 0.6)" strokeWidth="1" />
            </svg>
            <div className="gold-line flex-line"></div>
          </div>

          {/* Paragraph */}
          <p className="about-desc">
            Hi, I'm Piyush Kumar Singh an AI/ML Engineer and Software Developer
            who loves turning ideas into intelligent systems. I enjoy exploring how
            technology can solve real-world problems, from machine learning models
            to full-stack applications. I'm driven by curiosity, continuous learning,
            and the desire to create meaningful impact through code, data and innovation.
          </p>

          {/* Info Cards Grid */}
          <div className="about-grid">

            <div className="about-card-wrapper">
              <div className="about-card">
                <svg viewBox="0 0 32 32" className="card-icon" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 26v2M12 26v-1c0-1.5-1-3-2.5-3.5a6 6 0 01-3.5-7C6 11 8 8 12 8c2.5 0 3.5 1 4 1.5.5-.5 1.5-1.5 4-1.5 4 0 6 3 6 6.5a6 6 0 01-3.5 7C21 22 20 23.5 20 25v1M16 9.5V13" />
                  <path d="M12 16h8M12 19h8M16 13v9" strokeWidth="1" opacity="0.6" />
                </svg>
                <div className="card-content">
                  <div className="card-label">Current Focus</div>
                  <div className="card-value">Machine Learning<br />Deep Learning</div>
                </div>
              </div>
            </div>

            <div className="about-card-wrapper">
              <div className="about-card">
                <svg viewBox="0 0 32 32" className="card-icon" fill="currentColor">
                  <path d="M16 5.5L2 12.5L16 19.5L28.5 13.25V21H30V12.5L16 5.5ZM6.5 15.75V22C6.5 22 10 26 16 26C22 26 25.5 22 25.5 22V15.75L16 20.5L6.5 15.75Z" />
                </svg>
                <div className="card-content">
                  <div className="card-label">Education</div>
                  <div className="card-value">B.Tech<br />Computer Science</div>
                </div>
              </div>
            </div>

            <div className="about-card-wrapper">
              <div className="about-card">
                <svg viewBox="0 0 32 32" className="card-icon" fill="currentColor">
                  <path d="M16 3C10.5 3 6 7.5 6 13C6 20.5 16 29 16 29C16 29 26 20.5 26 13C26 7.5 21.5 3 16 3ZM16 16.5C14.1 16.5 12.5 14.9 12.5 13C12.5 11.1 14.1 9.5 16 9.5C17.9 9.5 19.5 11.1 19.5 13C19.5 14.9 17.9 16.5 16 16.5Z" />
                </svg>
                <div className="card-content">
                  <div className="card-label">Location</div>
                  <div className="card-value">India</div>
                </div>
              </div>
            </div>

            <div className="about-card-wrapper">
              <div className="about-card">
                <svg viewBox="0 0 32 32" className="card-icon" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 25V7C13.5 5 9 5 5 6V24C9 23 13.5 23 16 25Z" />
                  <path d="M16 25V7C18.5 5 23 5 27 6V24C23 23 18.5 23 16 25Z" />
                  <path d="M5 10H12M5 14H12M5 18H12" strokeWidth="1.2" opacity="0.7" />
                </svg>
                <div className="card-content">
                  <div className="card-label">Interests</div>
                  <div className="card-value">AI, Problem Solving<br />Tech, Research</div>
                </div>
              </div>
            </div>

            <div className="about-card-wrapper">
              <div className="about-card">
                <svg viewBox="0 0 32 32" className="card-icon" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M11 10L4 16L11 22M21 10L28 16L21 22M18 5L14 27" />
                </svg>
                <div className="card-content">
                  <div className="card-label">Languages</div>
                  <div className="card-value">Python, Java, C++<br />JavaScript</div>
                </div>
              </div>
            </div>

            <div className="about-card-wrapper">
              <div className="about-card">
                <svg viewBox="0 0 32 32" className="card-icon" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 5H23M9 27H23M11 5V10L16 16L21 10V5M11 27V22L16 16L21 22V27" />
                  <path d="M13 25H19M13 22H19" strokeWidth="1" />
                </svg>
                <div className="card-content">
                  <div className="card-label">Availability</div>
                  <div className="card-value">Open to Opportunities</div>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Divider */}
          <div className="about-divider about-divider-bottom">
            <div className="gold-line flex-line"></div>
            <svg width="56" height="20" viewBox="0 0 56 20" fill="none" className="divider-diamond-svg">
              <line x1="0" y1="10" x2="9" y2="10" stroke="rgba(214, 174, 98, 0.6)" strokeWidth="1" />
              <polygon points="12,7.5 14.5,10 12,12.5 9.5,10" fill="#E4C27A" />
              <line x1="14.5" y1="10" x2="19" y2="10" stroke="rgba(214, 174, 98, 0.6)" strokeWidth="1" />
              <line x1="28" y1="1" x2="28" y2="19" stroke="#E4C27A" strokeWidth="1" strokeLinecap="round" />
              <polygon points="28,2.5 35.5,10 28,17.5 20.5,10" stroke="#E4C27A" strokeWidth="1.2" fill="rgba(8, 10, 15, 0.88)" />
              <polygon points="28,5.5 32.5,10 28,14.5 23.5,10" stroke="rgba(240, 227, 194, 0.8)" strokeWidth="0.8" fill="rgba(228, 194, 122, 0.2)" />
              <circle cx="28" cy="10" r="1.6" fill="#FFF8E7" />
              <line x1="37" y1="10" x2="41.5" y2="10" stroke="rgba(214, 174, 98, 0.6)" strokeWidth="1" />
              <polygon points="44,7.5 46.5,10 44,12.5 41.5,10" fill="#E4C27A" />
              <line x1="46.5" y1="10" x2="56" y2="10" stroke="rgba(214, 174, 98, 0.6)" strokeWidth="1" />
            </svg>
            <div className="gold-line flex-line"></div>
          </div>

          {/* Ethos Row */}
          <div className="about-ethos">
            <div className="ethos-block">
              <svg viewBox="0 0 24 24" className="ethos-icon" fill="currentColor">
                <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22L6.71 19.7A9 9 0 0 0 21 10L21 6L17 8Z" />
              </svg>
              <span className="ethos-title">LEARN</span>
              <span className="ethos-desc">Continuously</span>
            </div>

            <div className="ethos-sep"></div>

            <div className="ethos-block">
              <svg viewBox="0 0 24 24" className="ethos-icon" fill="currentColor">
                <path d="M12 2A7 7 0 0 0 5 9C5 11.38 6.19 13.47 8 14.74V17A1 1 0 0 0 9 18H15A1 1 0 0 0 16 17V14.74C17.81 13.47 19 11.38 19 9A7 7 0 0 0 12 2M9 21A1 1 0 0 0 10 22H14A1 1 0 0 0 15 21V20H9V21Z" />
              </svg>
              <span className="ethos-title">BUILD</span>
              <span className="ethos-desc">Meaningful Solutions</span>
            </div>

            <div className="ethos-sep"></div>

            <div className="ethos-block">
              <svg viewBox="0 0 24 24" className="ethos-icon" fill="currentColor">
                <path d="M16 11C17.66 11 19 9.66 19 8C19 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 11 9.66 11 8C11 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V19H15V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C16.19 13.89 17 15.02 17 16.5V19H23V16.5C23 14.17 18.33 13 16 13Z" />
              </svg>
              <span className="ethos-title">COLLABORATE</span>
              <span className="ethos-desc">With Great Minds</span>
            </div>

            <div className="ethos-sep"></div>

            <div className="ethos-block">
              <svg viewBox="0 0 24 24" className="ethos-icon" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3L22 20H2L12 3Z" />
                <path d="M12 3L6 14H18L12 3Z" opacity="0.6" />
              </svg>
              <span className="ethos-title">CREATE</span>
              <span className="ethos-desc">A Brighter Tomorrow</span>
            </div>
          </div>

        </div>

        {/* Right Column - Empty space to let the background image's parchment show through */}
        <div className="about-right">
        </div>

      </div>
    </section>
  );
};

export default About;
