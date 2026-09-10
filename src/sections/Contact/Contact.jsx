import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { portfolioData } from '../../data/portfolioData';
import contactBg from '../../assets/contact/contact-background-2k.png';
import {
  FiUser,
  FiFileText,
  FiMessageSquare,
  FiMail,
  FiSend,
  FiArrowRight,
  FiExternalLink
} from 'react-icons/fi';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { SiGithub, SiLeetcode, SiCodechef } from 'react-icons/si';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedSubject = formData.subject.trim();
    const trimmedMessage = formData.message.trim();

    // Name: Required, min 2 chars, max 80 chars
    if (!trimmedName) {
      newErrors.name = 'Please enter your name';
    } else if (trimmedName.length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    } else if (trimmedName.length > 80) {
      newErrors.name = 'Name must not exceed 80 characters';
    }

    // Email: Required, valid format, max 120 chars
    if (!trimmedEmail) {
      newErrors.email = 'Please enter your email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      newErrors.email = 'Please enter a valid email address';
    } else if (trimmedEmail.length > 120) {
      newErrors.email = 'Email must not exceed 120 characters';
    }

    // Subject: Required, min 3 chars, max 150 chars
    if (!trimmedSubject) {
      newErrors.subject = 'Please enter a subject';
    } else if (trimmedSubject.length < 3) {
      newErrors.subject = 'Subject must be at least 3 characters';
    } else if (trimmedSubject.length > 150) {
      newErrors.subject = 'Subject must not exceed 150 characters';
    }

    // Message: Required, min 10 chars, max 3000 chars
    if (!trimmedMessage) {
      newErrors.message = 'Please enter your message';
    } else if (trimmedMessage.length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    } else if (trimmedMessage.length > 3000) {
      newErrors.message = 'Message must not exceed 3000 characters';
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting) return;

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // Temporary delivery debug mode in development
    if (import.meta.env.DEV) {
      console.log('--- Contact Form Delivery Debug ---');
      console.log('Email provider: EmailJS');
      console.log('Service ID loaded:', Boolean(serviceId));
      console.log('Template ID loaded:', Boolean(templateId));
      console.log('Public Key loaded:', Boolean(publicKey));
      console.log('Destination configured: 2023.piyushs@isu.ac.in');
    }

    if (!serviceId || !templateId || !publicKey) {
      console.error('EmailJS configuration is missing in .env file.');
      setIsSubmitting(false);
      setSubmitStatus({
        type: 'error',
        message: 'Email service configuration missing. Please add VITE_EMAILJS keys to your .env file.'
      });
      return;
    }

    try {
      const destinationEmail = portfolioData.socials?.email
        ? portfolioData.socials.email.replace(/^mailto:/i, '').trim()
        : '2023.piyushs@isu.ac.in';

      const templateParams = {
        name: formData.name.trim(),
        from_name: formData.name.trim(),
        email: formData.email.trim(),
        from_email: formData.email.trim(),
        reply_to: formData.email.trim(),
        subject: formData.subject.trim(),
        title: formData.subject.trim(),
        message: formData.message.trim(),
        to_email: destinationEmail
      };

      const response = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        {
          publicKey: publicKey
        }
      );

      console.log('Email sent:', response.status, response.text);

      if (response.status === 200 || response.text === 'OK') {
        setSubmitStatus({
          type: 'success',
          message: "✓ Message sent successfully. I'll get back to you soon!"
        });
        // Reset form ONLY on confirmed delivery from provider
        setFormData({ name: '', email: '', subject: '', message: '' });

        setTimeout(() => {
          setSubmitStatus({ type: '', message: '' });
        }, 8000);
      } else {
        throw new Error(`Unexpected EmailJS status: ${response.status} - ${response.text}`);
      }
    } catch (err) {
      console.error('EmailJS delivery error:', err);
      const errText = err?.text || err?.message || 'Delivery error';
      // Keep form inputs so visitor does not lose their typed message
      setSubmitStatus({
        type: 'error',
        message: import.meta.env.DEV
          ? `Could not send: ${errText}. (Check .env & EmailJS setup)`
          : 'Message could not be sent. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      {/* Exact Background Composition Layer */}
      <div className="contact-bg-layer">
        <img
          src={contactBg}
          alt="Magical Gothic Library Contact Background"
          className="contact-bg-image"
        />
        <div className="contact-atmosphere-overlay" />
      </div>

      <div className="contact-container">
        <div className="contact-content-area">

          {/* ─── Upper Intro & Quote Zone ─── */}
          <div className="contact-top-row">
            <div className="contact-intro">
              <span className="contact-eyebrow">CONTACT</span>
              <div className="contact-eyebrow-adornment">
                <span className="eyebrow-line" />
                <span className="eyebrow-star">✦</span>
                <span className="eyebrow-line" />
              </div>
              <h2 className="contact-main-heading">
                Let’s Build<br />Something Meaningful
              </h2>
              <p className="contact-intro-desc">
                I’m always open to discussing new opportunities, exciting projects,
                or just having a conversation about technology, ideas, and the future.
              </p>
            </div>

            <div className="contact-quote-block">
              <div className="quote-divider-vertical" />
              <div className="quote-text-wrap">
                <p className="quote-phrase">
                  “Different ideas<br />
                  Same sky.<br />
                  Let’s connect.”
                </p>
                <div className="quote-bottom-adornment">
                  <span className="quote-line" />
                  <span className="quote-star">✦</span>
                  <span className="quote-line" />
                </div>
              </div>
            </div>
          </div>

          {/* ─── Main Two-Column Contact Area ─── */}
          <div className="contact-main-grid">

            {/* Left Column: 3 Contact Info Cards */}
            <div className="contact-info-col">

              {/* Card 1: Email */}
              <a
                href="mailto:2023.piyushs@isu.ac.in"
                className="contact-info-card-outer interactive"
                title="Send Email"
              >
                <div className="contact-info-card-inner">
                  <div className="contact-info-icon-box">
                    <FaEnvelope className="contact-info-icon" />
                  </div>
                  <div className="contact-info-divider" />
                  <div className="contact-info-text">
                    <span className="info-card-label">Email</span>
                    <span className="info-card-value">2023.piyushs@isu.ac.in</span>
                    <span className="info-card-sub">Drop me an email anytime</span>
                  </div>
                </div>
              </a>

              {/* Card 2: Phone */}
              <a
                href="tel:+917856968813"
                className="contact-info-card-outer interactive"
                title="Call Phone"
              >
                <div className="contact-info-card-inner">
                  <div className="contact-info-icon-box">
                    <FaPhoneAlt className="contact-info-icon" />
                  </div>
                  <div className="contact-info-divider" />
                  <div className="contact-info-text">
                    <span className="info-card-label">Phone</span>
                    <span className="info-card-value">+91 7856968813</span>
                    <span className="info-card-sub">Let’s talk</span>
                  </div>
                </div>
              </a>

              {/* Card 3: Location */}
              <div className="contact-info-card-outer">
                <div className="contact-info-card-inner">
                  <div className="contact-info-icon-box">
                    <FaMapMarkerAlt className="contact-info-icon" />
                  </div>
                  <div className="contact-info-divider" />
                  <div className="contact-info-text">
                    <span className="info-card-label">Location</span>
                    <span className="info-card-value">Navi Mumbai, Kharghar</span>
                    <span className="info-card-sub">Open to opportunities worldwide</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: Send a Message Form */}
            <div className="contact-form-outer">
              <div className="contact-form-inner">
                <div className="contact-form-header">
                  <div className="form-header-left">
                    <FaEnvelope className="form-header-icon" />
                    <span className="form-header-title">Send a Message</span>
                  </div>
                  <span className="form-header-subtitle">I’ll get back to you soon!</span>
                </div>

                <form className="contact-form" onSubmit={handleSubmit} noValidate>

                  <div className="form-row-two-col">
                    <div className={`form-field-wrap ${errors.name ? 'has-error' : ''}`}>
                      <label htmlFor="contact-name" className="visually-hidden">Your Name</label>
                      <FiUser className="field-icon" aria-hidden="true" />
                      <input
                        id="contact-name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        className="form-input"
                        autoComplete="name"
                        maxLength={80}
                        required
                      />
                      {errors.name && <span className="field-error-msg">{errors.name}</span>}
                    </div>

                    <div className={`form-field-wrap ${errors.email ? 'has-error' : ''}`}>
                      <label htmlFor="contact-email" className="visually-hidden">Your Email</label>
                      <FiMail className="field-icon" aria-hidden="true" />
                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your Email"
                        className="form-input"
                        autoComplete="email"
                        maxLength={120}
                        required
                      />
                      {errors.email && <span className="field-error-msg">{errors.email}</span>}
                    </div>
                  </div>

                  <div className={`form-field-wrap full-width ${errors.subject ? 'has-error' : ''}`}>
                    <label htmlFor="contact-subject" className="visually-hidden">Subject</label>
                    <FiFileText className="field-icon" aria-hidden="true" />
                    <input
                      id="contact-subject"
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Subject"
                      className="form-input"
                      maxLength={150}
                      required
                    />
                    {errors.subject && <span className="field-error-msg">{errors.subject}</span>}
                  </div>

                  <div className={`form-field-wrap full-width textarea-wrap ${errors.message ? 'has-error' : ''}`}>
                    <label htmlFor="contact-message" className="visually-hidden">Your Message</label>
                    <FiMessageSquare className="field-icon textarea-icon" aria-hidden="true" />
                    <textarea
                      id="contact-message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your Message"
                      rows={4}
                      className="form-textarea"
                      maxLength={3000}
                      required
                    />
                    {errors.message && <span className="field-error-msg">{errors.message}</span>}
                  </div>

                  <div className="form-footer-row">
                    {submitStatus.message && (
                      <div
                        className={`form-status-badge ${submitStatus.type}`}
                        role="status"
                        aria-live="polite"
                      >
                        {submitStatus.message}
                      </div>
                    )}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-send-message interactive"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="btn-spinner" aria-hidden="true" />
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <FiSend className="btn-send-icon" aria-hidden="true" />
                          <span>Send Message</span>
                          <FiArrowRight className="btn-arrow-icon" aria-hidden="true" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>

          </div>

          {/* ─── Find Me Online Section ─── */}
          <div className="find-online-section">
            <div className="find-online-header">
              <span className="find-line" />
              <h3 className="find-online-title">Find Me Online</h3>
              <span className="find-line" />
            </div>
            <div className="find-online-sub-ornament">
              <span className="find-star">✦</span>
            </div>

            <div className="social-cards-row">
              {/* 1: LinkedIn */}
              <a
                href={portfolioData.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-card-outer interactive"
                title="LinkedIn Profile"
              >
                <div className="social-card-inner">
                  <FiExternalLink className="social-ext-icon" />
                  <div className="social-logo-box linkedin-logo-box">
                    <span className="linkedin-custom-badge">in</span>
                  </div>
                  <span className="social-card-title">LinkedIn</span>
                  <span className="social-card-sub">Let’s connect</span>
                </div>
              </a>

              {/* 2: GitHub */}
              <a
                href={portfolioData.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="social-card-outer interactive"
                title="GitHub Profile"
              >
                <div className="social-card-inner">
                  <FiExternalLink className="social-ext-icon" />
                  <div className="social-logo-box github-logo-box">
                    <SiGithub className="social-logo github-svg" />
                  </div>
                  <span className="social-card-title">GitHub</span>
                  <span className="social-card-sub">Check my code</span>
                </div>
              </a>

              {/* 3: LeetCode */}
              <a
                href={portfolioData.socials.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="social-card-outer interactive"
                title="LeetCode Profile"
              >
                <div className="social-card-inner">
                  <FiExternalLink className="social-ext-icon" />
                  <div className="social-logo-box leetcode-logo-box">
                    <SiLeetcode className="social-logo leetcode-svg" />
                  </div>
                  <span className="social-card-title">LeetCode</span>
                  <span className="social-card-sub">Coding journey</span>
                </div>
              </a>

              {/* 4: CodeChef */}
              <a
                href={portfolioData.socials.codechef}
                target="_blank"
                rel="noopener noreferrer"
                className="social-card-outer interactive"
                title="CodeChef Profile"
              >
                <div className="social-card-inner">
                  <FiExternalLink className="social-ext-icon" />
                  <div className="social-logo-box codechef-logo-box">
                    <SiCodechef className="social-logo codechef-svg" />
                  </div>
                  <span className="social-card-title">CodeChef</span>
                  <span className="social-card-sub">Competitive programming</span>
                </div>
              </a>
            </div>
          </div>

          {/* ─── Bottom Decorative Divider & Final Motto ─── */}
          <div className="contact-bottom-divider">
            <span className="bottom-line" />
            <span className="bottom-star">✦</span>
            <span className="bottom-line" />
          </div>

          <div className="contact-closing-phrase">
            IDEAS &nbsp;&times;&nbsp; PEOPLE &nbsp;&times;&nbsp; TECHNOLOGY &nbsp;&times;&nbsp; A BRIGHTER TOMORROW.
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
