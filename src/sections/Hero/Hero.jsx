import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { portfolioData } from '../../data/portfolioData';
import './Hero.css';

const Hero = () => {
  const eyebrowRef = useRef(null);
  const nameRef = useRef(null);
  const subtitleRef = useRef(null);
  const taglineRef = useRef(null);
  const buttonsRef = useRef(null);
  const socialIconsRef = useRef(null);

  const handleExploreWork = () => {
    const el = document.getElementById('projects');
    if (el) {
      if (window.lenis) {
        window.lenis.scrollTo(el, { offset: -60 });
      } else {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(eyebrowRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out', delay: 0.3 }
    )
      .fromTo(nameRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.0, ease: 'power3.out' },
        "-=0.4"
      )
      .fromTo(subtitleRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7 },
        "-=0.6"
      )
      .fromTo(taglineRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7 },
        "-=0.5"
      )
      .fromTo(buttonsRef.current.children,
        { y: 15, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.15 },
        "-=0.4"
      )
      .fromTo(socialIconsRef.current.children,
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.5, stagger: 0.1 },
        "-=0.3"
      );

  }, []);

  return (
    <section id="home" className="hero-section">
      <div className="hero-background-image"></div>

      <div className="hero-content">
        {/* Eyebrow */}
        <div className="hero-eyebrow" ref={eyebrowRef}>
          <div className="eyebrow-line"></div>
          <div className="eyebrow-center">
            <span className="eyebrow-star">✦</span>
            <span className="eyebrow-text">WELCOME TO MY PORTFOLIO</span>
          </div>
          <div className="eyebrow-line"></div>
        </div>

        {/* Main Name */}
        <h1 className="hero-name" ref={nameRef}>
          PIYUSH KUMAR SINGH
        </h1>

        {/* Subtitle */}
        <div className="hero-subtitle-container" ref={subtitleRef}>
          <div className="subtitle-rule">
            <div className="subtitle-line"></div>
            <span className="subtitle-diamond">◆</span>
            <div className="subtitle-line"></div>
          </div>
          <h2 className="hero-subtitle">
            AI / ML Engineer · Software Developer
          </h2>
          <div className="subtitle-rule">
            <div className="subtitle-line"></div>
            <span className="subtitle-diamond">◆</span>
            <div className="subtitle-line"></div>
          </div>
        </div>

        {/* Tagline */}
        <p className="hero-tagline" ref={taglineRef}>
          Crafting intelligent systems through code, data and curiosity.
        </p>

        {/* CTA Buttons */}
        <div className="hero-buttons" ref={buttonsRef}>
          <button 
            className="hero-btn btn-primary interactive"
            onClick={handleExploreWork}
          >
            Explore My Work →
          </button>
          <a 
            href={portfolioData.personal.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hero-btn btn-secondary interactive"
          >
            View Resume
          </a>
        </div>

        {/* Social Icons */}
        <div className="hero-socials" ref={socialIconsRef}>
          <a 
            href={portfolioData.socials.github} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-icon interactive"
            title="GitHub"
          >
            <FiGithub size={20} />
          </a>
          <span className="social-separator">+</span>
          <a 
            href={portfolioData.socials.linkedin} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-icon interactive"
            title="LinkedIn"
          >
            <FiLinkedin size={20} />
          </a>
          <span className="social-separator">+</span>
          <a 
            href={portfolioData.socials.email} 
            className="social-icon interactive"
            title="Email"
          >
            <FiMail size={20} />
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <span className="scroll-text">SCROLL TO EXPLORE</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  );
};

export default Hero;
