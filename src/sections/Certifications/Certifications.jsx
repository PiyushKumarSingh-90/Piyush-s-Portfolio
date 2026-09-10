import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  FiGrid,
  FiBarChart2,
  FiCode,
  FiAward,
  FiBookOpen,
  FiArrowUpRight,
  FiX,
  FiExternalLink,
  FiDownload
} from 'react-icons/fi';
import { FaBrain, FaTrophy } from 'react-icons/fa6';
import { portfolioData } from '../../data/portfolioData';
import './Certifications.css';

import certsBg from '../../assets/certificates/certificates-background-2k.png';

gsap.registerPlugin(ScrollTrigger);

// ==========================================
// AUTHENTIC BRAND LOGOS MATCHING REFERENCE
// ==========================================

const CiscoLogo = () => (
  <div className="brand-logo-wrap brand-cisco" title="Cisco">
    <svg width="60" height="34" viewBox="0 0 76 42" fill="none">
      <g fill="#00bceb">
        <rect x="6" y="18" width="3.4" height="11" rx="1.7" />
        <rect x="13" y="12" width="3.4" height="17" rx="1.7" />
        <rect x="20" y="6" width="3.4" height="23" rx="1.7" />
        <rect x="27" y="12" width="3.4" height="17" rx="1.7" />
        <rect x="34" y="1" width="3.4" height="28" rx="1.7" />
        <rect x="41" y="12" width="3.4" height="17" rx="1.7" />
        <rect x="48" y="6" width="3.4" height="23" rx="1.7" />
        <rect x="55" y="12" width="3.4" height="17" rx="1.7" />
        <rect x="62" y="18" width="3.4" height="11" rx="1.7" />
      </g>
      <text
        x="36"
        y="40"
        textAnchor="middle"
        fill="#00bceb"
        fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
        fontWeight="800"
        fontSize="12.5"
        letterSpacing="0.08em"
      >
        CISCO
      </text>
    </svg>
  </div>
);

const DeloitteLogo = () => (
  <div className="brand-logo-wrap brand-deloitte" title="Deloitte">
    <span className="deloitte-wordmark">
      Deloitte<span className="deloitte-dot">.</span>
    </span>
  </div>
);

const TechfestLogo = () => (
  <div className="brand-logo-wrap brand-techfest" title="Techfest, IIT Bombay">
    <div className="techfest-lockup">
      <svg width="42" height="24" viewBox="0 0 54 30" fill="none">
        {/* Dynamic slanted TF monogram */}
        <path
          d="M13 2h36c2 0 3.5 1.8 3 3.8l-1 3.8c-.3 1.2-1.3 2-2.5 2H30l-1.8 5.8h11.5c1.8 0 3.2 1.6 2.8 3.4l-.8 3c-.3 1.2-1.3 2-2.5 2H28l-2.4 8.2c-.4 1.5-1.8 2.5-3.4 2.5H10c-2 0-3.5-1.8-3-3.8L13 2z"
          fill="#ffffff"
        />
        <path
          d="M20 7.8h18l-1 3.8h-18L20 7.8z"
          fill="#000000"
        />
      </svg>
      <div className="techfest-text-block">
        <span className="techfest-wordmark">Techfest<sup className="techfest-tm">®</sup></span>
        <span className="techfest-submark">IIT BOMBAY</span>
      </div>
    </div>
  </div>
);

const IbmLogo = () => (
  <div className="brand-logo-wrap brand-ibm" title="IBM">
    <svg width="68" height="30" viewBox="0 0 94 40" fill="none">
      <defs>
        <mask id="ibm-8bars">
          <rect y="0" width="94" height="2.6" fill="#fff" />
          <rect y="5.2" width="94" height="2.6" fill="#fff" />
          <rect y="10.4" width="94" height="2.6" fill="#fff" />
          <rect y="15.6" width="94" height="2.6" fill="#fff" />
          <rect y="20.8" width="94" height="2.6" fill="#fff" />
          <rect y="26" width="94" height="2.6" fill="#fff" />
          <rect y="31.2" width="94" height="2.6" fill="#fff" />
          <rect y="36.4" width="94" height="2.6" fill="#fff" />
        </mask>
      </defs>
      <g mask="url(#ibm-8bars)" fill="#1183fc">
        {/* I */}
        <rect x="4" y="0" width="16" height="40" />
        {/* B */}
        <path d="M26 0h20c6.5 0 10.5 3 10.5 8.5 0 3-1.8 5.5-4.8 7 3.8 1.5 6.3 4.5 6.3 9 0 6.5-4.8 15.5-12 15.5H26V0zm13 14h5.5c2.5 0 4.5-1.2 4.5-4s-2-4-4.5-4H39v8zm0 19h6.5c3 0 5.5-1.8 5.5-5s-2.5-5-5.5-5H39v10z" />
        {/* M */}
        <path d="M62 0h11l7.5 16L88 0h11v40H88V15.5L81 30h-4l-7-14.5V40H62V0z" />
      </g>
    </svg>
  </div>
);

const InfosysLogo = () => (
  <div className="brand-logo-wrap brand-infosys" title="Infosys">
    <div className="infosys-lockup">
      <span className="infosys-text">Infosys</span>
      <span className="infosys-reg">®</span>
    </div>
  </div>
);

const HackerRankLogo = () => (
  <div className="brand-logo-wrap brand-hackerrank" title="HackerRank">
    <div className="hackerrank-badge">
      <svg width="24" height="26" viewBox="0 0 32 36" fill="none">
        <path
          d="M16 1L30 9V27L16 35L2 27V9L16 1Z"
          fill="#00ea64"
        />
        <path
          d="M11 11h3.2v5.2h3.6V11H21v14h-3.2v-5.4h-3.6V25H11V11z"
          fill="#000000"
        />
      </svg>
      <span className="hackerrank-text">HackerRank</span>
    </div>
  </div>
);

const LeetCodeLogo = () => (
  <div className="brand-logo-wrap brand-leetcode" title="LeetCode">
    <div className="leetcode-badge">
      <svg width="24" height="26" viewBox="0 0 28 32" fill="none">
        <path
          d="M19.5 4.5L12 11.5c-2.5 2.5-2.5 6.5 0 9l7.5 7"
          stroke="#FFA116"
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <line
          x1="8"
          y1="16"
          x2="22"
          y2="16"
          stroke="#FFFFFF"
          strokeWidth="3.2"
          strokeLinecap="round"
        />
      </svg>
      <span className="leetcode-text">LeetCode</span>
    </div>
  </div>
);

const CodeChefLogo = () => (
  <div className="brand-logo-wrap brand-codechef" title="CodeChef">
    <div className="codechef-lockup">
      <svg width="32" height="30" viewBox="0 0 40 38" fill="none">
        {/* Warm cream/tan chef hat */}
        <path
          d="M20 2C15.2 2 11.6 5 11 9c-3.2 1-5.6 4-5.6 7.6 0 3.8 2.5 7 6.2 8v2h16.8v-2c3.7-1 6.2-4.2 6.2-8 0-3.6-2.4-6.6-5.6-7.6-.6-4-4.2-7-9-7z"
          fill="#fbe3cb"
        />
        {/* Hat Creases */}
        <line x1="15.5" y1="6.5" x2="15.5" y2="17" stroke="#4a3628" strokeWidth="1.4" strokeLinecap="round" />
        <line x1="20" y1="5" x2="20" y2="18" stroke="#4a3628" strokeWidth="1.4" strokeLinecap="round" />
        <line x1="24.5" y1="6.5" x2="24.5" y2="17" stroke="#4a3628" strokeWidth="1.4" strokeLinecap="round" />
        {/* Cute Face */}
        <ellipse cx="20" cy="30" rx="8.5" ry="7" fill="#fbe3cb" />
        <circle cx="16.8" cy="29" r="1.7" fill="#1b120c" />
        <circle cx="23.2" cy="29" r="1.7" fill="#1b120c" />
        <ellipse cx="20" cy="33" rx="1.8" ry="1.3" fill="#1b120c" />
      </svg>
      <div className="codechef-text-group">
        <span className="codechef-code">CODE</span>
        <span className="codechef-chef">CHEF</span>
      </div>
    </div>
  </div>
);

// Map logo keys to components
const BRAND_LOGOS = {
  cisco: CiscoLogo,
  deloitte: DeloitteLogo,
  techfest: TechfestLogo,
  ibm: IbmLogo,
  infosys: InfosysLogo,
  hackerrank: HackerRankLogo,
  leetcode: LeetCodeLogo,
  codechef: CodeChefLogo
};

// Filter Categories
const FILTER_TABS = [
  { key: 'all', label: 'All Certificates', icon: FiGrid },
  { key: 'data-science', label: 'Data Science', icon: FiBarChart2 },
  { key: 'ai-ml', label: 'AI / ML', icon: FaBrain },
  { key: 'programming', label: 'Programming', icon: FiCode },
  { key: 'achievements', label: 'Achievements', icon: FaTrophy }
];

const Certifications = () => {
  const sectionRef = useRef(null);
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedCert, setSelectedCert] = useState(null);

  const certificates = portfolioData.certifications || [];
  const achievements = portfolioData.achievements || [];

  // Filter items
  const filteredCertificates = certificates.filter((cert) => {
    if (activeFilter === 'all') return true;
    return cert.category === activeFilter;
  });

  const showAchievements = activeFilter === 'all' || activeFilter === 'achievements';

  // Handle ESC key for modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedCert(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedCert) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [selectedCert]);

  return (
    <section id="certificates" className="certs-section" ref={sectionRef}>
      {/* Background Layer preserving gothic library composition */}
      <div className="certs-bg-layer" aria-hidden="true">
        <img
          src={certsBg}
          alt=""
          className="certs-bg-image"
          loading="eager"
        />
        <div className="certs-atmosphere-overlay" />
      </div>

      <div className="certs-container">
        <div className="certs-content-area">
          
          {/* ─── Upper Intro & Quote Zone ─── */}
          <div className="certs-top-row">
            <div className="certs-intro">
              <span className="certs-eyebrow">CERTIFICATES</span>
              <div className="certs-eyebrow-adornment" aria-hidden="true">
                <span className="eyebrow-line" />
                <span className="eyebrow-star">✦</span>
                <span className="eyebrow-line" />
              </div>

              <h2 className="certs-heading">Learning Never Stops</h2>

              <p className="certs-subtitle">
                Certifications that fuel my curiosity and growth journey.
              </p>
            </div>

            {/* Vertical framing divider */}
            <div className="certs-divider-zone" aria-hidden="true">
              <span className="certs-v-line" />
            </div>

            {/* Right Quote Area */}
            <div className="certs-quote-zone">
              <p className="certs-quote-text">
                “A certified mind builds a brighter tomorrow.”
              </p>
              <div className="certs-quote-adornment" aria-hidden="true">
                <span className="quote-star-line" />
                <span className="quote-star">✦</span>
                <span className="quote-star-line" />
              </div>
            </div>
          </div>

          {/* ─── Filter Pills Bar ─── */}
          <div className="certs-filter-bar" role="tablist" aria-label="Certificate categories">
            {FILTER_TABS.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeFilter === tab.key;
              return (
                <button
                  key={tab.key}
                  role="tab"
                  aria-selected={isActive}
                  className={`certs-filter-pill ${isActive ? 'active' : ''}`}
                  onClick={() => setActiveFilter(tab.key)}
                >
                  <Icon className="filter-pill-icon" size={14} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* ─── 3x3 Certificates Grid ─── */}
          {filteredCertificates.length > 0 && (
            <div className="certs-grid">
              {filteredCertificates.map((cert) => {
                const LogoComponent = BRAND_LOGOS[cert.brand] || CiscoLogo;
                return (
                  <div
                    key={cert.id}
                    className="cert-card-outer"
                    onClick={() => setSelectedCert(cert)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === 'Enter' && setSelectedCert(cert)}
                  >
                    <div className="cert-card-inner">
                      {/* Top-Right Preview Indicator */}
                      <span className="cert-card-corner-arrow" aria-label="Preview Certificate">
                        <FiExternalLink size={13} />
                      </span>

                      {/* Left: Brand Logo */}
                      <div className="cert-card-left">
                        <LogoComponent />
                      </div>

                      {/* Right: Details */}
                      <div className="cert-card-right">
                        <h3 className="cert-card-title">{cert.title}</h3>
                        <p className="cert-card-issuer">{cert.issuer}</p>
                        <div className="cert-card-tag-row">
                          <span className="cert-card-tag">{cert.categoryLabel}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* ─── Achievements Row (2 Wider Cards) ─── */}
          {showAchievements && (
            <div className="certs-achievements-row">
              {achievements.map((ach) => {
                const LogoComponent = BRAND_LOGOS[ach.brand] || LeetCodeLogo;
                return (
                  <div
                    key={ach.id}
                    className="cert-card-outer achievement-card"
                    onClick={() => {
                      if (ach.link) window.open(ach.link, '_blank', 'noopener,noreferrer');
                    }}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && ach.link) window.open(ach.link, '_blank', 'noopener,noreferrer');
                    }}
                  >
                    <div className="cert-card-inner">
                      <span className="cert-card-corner-arrow">
                        <FiExternalLink size={13} />
                      </span>

                      <div className="cert-card-left">
                        <LogoComponent />
                      </div>

                      <div className="cert-card-right">
                        <h3 className="cert-card-title">{ach.title}</h3>
                        <p className="cert-card-issuer">{ach.issuer}</p>
                        <div className="cert-card-tag-row">
                          <span className="cert-card-tag achievement-tag">
                            {ach.categoryLabel}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* ─── Bottom Stats Row ─── */}
          <div className="certs-stats-strip">
            <div className="certs-stat-item">
              <FiAward className="certs-stat-icon" size={24} />
              <div className="certs-stat-text">
                <span className="certs-stat-number">9+</span>
                <span className="certs-stat-label">Certifications</span>
              </div>
            </div>

            <span className="certs-stat-divider" aria-hidden="true" />

            <div className="certs-stat-item">
              <FiBookOpen className="certs-stat-icon" size={24} />
              <div className="certs-stat-text">
                <span className="certs-stat-number">5+</span>
                <span className="certs-stat-label">Platforms</span>
              </div>
            </div>

            <span className="certs-stat-divider" aria-hidden="true" />

            <div className="certs-stat-item">
              <FiBarChart2 className="certs-stat-icon" size={24} />
              <div className="certs-stat-text">
                <span className="certs-stat-number">500+</span>
                <span className="certs-stat-label">Problems Solved</span>
              </div>
            </div>
          </div>

          {/* ─── Bottom Closing Motto ─── */}
          <div className="certs-footer-quote">
            <div className="certs-footer-star" aria-hidden="true">
              <span className="footer-star-line" />
              <span className="footer-star">✦</span>
              <span className="footer-star-line" />
            </div>
            <p className="certs-footer-text">
              SAME CURIOSITY. HIGHER POSSIBILITIES.
            </p>
          </div>

        </div>
      </div>

      {/* ─── Full Certificate Modal / Popup ─── */}
      {selectedCert && (
        <div
          className="cert-modal-backdrop"
          onClick={() => setSelectedCert(null)}
          role="dialog"
          aria-modal="true"
          aria-label={selectedCert.title}
        >
          <div
            className="cert-modal-dialog"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="cert-modal-header">
              <div className="cert-modal-title-group">
                <span className="cert-modal-badge">{selectedCert.categoryLabel}</span>
                <h3 className="cert-modal-title">{selectedCert.title}</h3>
                <p className="cert-modal-subtitle">
                  Issued by <strong className="gold-text">{selectedCert.issuer}</strong> {selectedCert.date ? `• ${selectedCert.date}` : ''}
                </p>
              </div>

              <button
                className="cert-modal-close-btn"
                onClick={() => setSelectedCert(null)}
                aria-label="Close certificate preview"
              >
                <FiX size={20} />
              </button>
            </div>

            {/* Modal Image / PDF Body */}
            <div className="cert-modal-body">
              {selectedCert.pdf ? (
                <iframe
                  src={`${selectedCert.pdf}#toolbar=0&navpanes=0&view=FitH`}
                  title={selectedCert.title}
                  className="cert-modal-iframe"
                />
              ) : selectedCert.image ? (
                <img
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  className="cert-modal-img"
                  loading="lazy"
                />
              ) : (
                <div className="cert-modal-placeholder">
                  <FiAward size={48} />
                  <p>Certificate Preview</p>
                </div>
              )}
            </div>

            {/* Modal Action Footer */}
            <div className="cert-modal-footer">
              <div className="cert-modal-meta">
                <span>Verified Official Credential</span>
              </div>
              <div className="cert-modal-actions">
                {selectedCert.pdf && (
                  <a
                    href={selectedCert.pdf}
                    download
                    className="cert-modal-btn btn-secondary"
                  >
                    <FiDownload size={14} /> Download PDF
                  </a>
                )}
                {selectedCert.link && (
                  <a
                    href={selectedCert.link}
                    target="_blank"
                    rel="noreferrer"
                    className="cert-modal-btn btn-secondary"
                  >
                    <FiExternalLink size={14} /> Verify Online
                  </a>
                )}
                <button
                  className="cert-modal-btn btn-primary"
                  onClick={() => setSelectedCert(null)}
                >
                  Done
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certifications;
