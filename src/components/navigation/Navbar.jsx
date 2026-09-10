import React, { useState, useEffect } from 'react';
import { useAudio } from '../../audio/AudioController';
import { Menu, X } from 'lucide-react';
import { FiFileText, FiMusic } from 'react-icons/fi';
import './Navbar.css';

const NAV_ITEMS = ['Home', 'About', 'Projects', 'Skills', 'Experience', 'Certificates', 'Contact'];

const Navbar = () => {
  const { isPlaying, toggleMute } = useAudio();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = NAV_ITEMS;

  useEffect(() => {
    const sectionIds = ['home', 'about', 'projects', 'skills', 'experience', 'certificates', 'contact'];

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          const matchedItem = NAV_ITEMS.find((item) => item.toLowerCase() === id);
          if (matchedItem) {
            setActiveLink(matchedItem);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: '-30% 0px -40% 0px',
      threshold: 0,
    });

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    setActiveLink(id);
    setMenuOpen(false);
    const element = document.getElementById(id.toLowerCase());
    if (element) {
      if (window.lenis) {
        window.lenis.scrollTo(element, {
          offset: 0,
          duration: 1.1,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });
      } else {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <>
      <nav className={`magical-navbar ${scrolled ? 'scrolled' : ''}`}>
        
        {/* Top Decorative Border */}
        <div className="nav-border-top"></div>

        {/* Corner Ornaments */}
        <div className="nav-corner top-left">✦</div>
        <div className="nav-corner top-right">✦</div>

        <div className="nav-container">
          {/* Left - Brand: PS monogram */}
          <div className="nav-brand interactive" onClick={() => scrollTo('Home')} role="button" tabIndex={0} aria-label="Home">
            <div className="brand-ps-monogram">PS</div>
          </div>

          {/* Center - Nav Links */}
          <div className="nav-links-center">
            {navItems.map((item) => (
              <button
                key={item}
                className={`nav-link interactive ${activeLink === item ? 'active' : ''}`}
                onClick={() => scrollTo(item)}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Right - Resume pill & Circular Music Button */}
          <div className="nav-controls">
            <a
              href="/Piyush_Singh_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-resume-btn interactive"
              title="View Resume"
            >
              <FiFileText size={14} className="resume-btn-icon" />
              <span>Resume</span>
            </a>

            <button
              className={`nav-music-btn interactive ${isPlaying ? 'playing' : ''}`}
              onClick={toggleMute}
              aria-label={isPlaying ? 'Mute Music' : 'Play Music'}
              title={isPlaying ? 'Ambient Music: Playing' : 'Ambient Music: Muted'}
            >
              <FiMusic size={15} className="music-btn-icon" />
            </button>

            <button
              className="menu-toggle interactive"
              onClick={() => setMenuOpen(true)}
              aria-label="Open Menu"
            >
              <Menu size={26} color="#D6AE62" />
            </button>
          </div>
        </div>

        {/* Bottom Decorative Border */}
        <div className="nav-border-bottom">
          <span className="border-star">✦</span>
          <div className="border-line"></div>
          
          <div className="border-center-ornament">
            <span className="diamond-small">◆</span>
            <span className="dot">·</span>
            <span className="diamond-large">◆</span>
            <span className="dot">·</span>
            <span className="diamond-small">◆</span>
          </div>

          <div className="border-line"></div>
          <span className="border-star">✦</span>
        </div>
      </nav>

      {/* Full-screen Overlay Menu (Mobile) */}
      <div className={`menu-overlay ${menuOpen ? 'open' : ''}`}>
        <div className="menu-close-container">
          <button
            className="menu-close interactive"
            onClick={() => setMenuOpen(false)}
            aria-label="Close Menu"
          >
            <X size={32} color="#D6AE62" />
          </button>
        </div>

        <div className="menu-content">
          <ul className="menu-links">
            {navItems.map((item) => (
              <li key={item}>
                <button
                  className={`menu-link interactive ${activeLink === item ? 'active' : ''}`}
                  onClick={() => scrollTo(item)}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
