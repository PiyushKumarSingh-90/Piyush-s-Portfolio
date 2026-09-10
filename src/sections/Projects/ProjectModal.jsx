import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { FiGithub } from 'react-icons/fi';

const ProjectModal = ({ project, imageSrc, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="project-modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="project-modal-wrapper" onClick={(e) => e.stopPropagation()}>
        <div className="project-modal-card">
          {/* Header */}
          <div className="project-modal-header">
            <div>
              <span className="modal-category-tag">{project.category}</span>
              <h2 className="modal-title">{project.name}</h2>
            </div>
            <button
              type="button"
              className="modal-close-btn"
              onClick={onClose}
              aria-label="Close details modal"
            >
              <X size={20} />
            </button>
          </div>

          {/* Modal Content */}
          <div className="project-modal-body">
            {/* Image Preview */}
            <div className="modal-image-wrapper">
              <img src={imageSrc} alt={project.name} className="modal-image" />
              <div className="modal-image-overlay" />
            </div>

            {/* Problem & Solution */}
            <div className="modal-section">
              <h4 className="modal-section-title">CHRONICLE OVERVIEW</h4>
              <p className="modal-text">{project.description}</p>
            </div>

            {project.problem && (
              <div className="modal-section">
                <h4 className="modal-section-title">THE CHALLENGE</h4>
                <p className="modal-text">{project.problem}</p>
              </div>
            )}

            {project.solution && (
              <div className="modal-section">
                <h4 className="modal-section-title">THE ARCHITECTURAL SOLUTION</h4>
                <p className="modal-text">{project.solution}</p>
              </div>
            )}

            {/* Architecture Pipeline */}
            {project.architecture && (
              <div className="modal-section">
                <h4 className="modal-section-title">SYSTEM PIPELINE</h4>
                <div className="modal-pipeline">
                  {project.architecture.map((step, idx) => (
                    <React.Fragment key={idx}>
                      <span className="pipeline-node">{step}</span>
                      {idx < project.architecture.length - 1 && (
                        <span className="pipeline-arrow">→</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            )}

            {/* Results / Key Metrics */}
            {project.results && (
              <div className="modal-section">
                <h4 className="modal-section-title">VERIFIED PERFORMANCE</h4>
                <ul className="modal-results-list">
                  {project.results.map((res, idx) => (
                    <li key={idx} className="modal-result-item">
                      <span className="result-bullet">✦</span>
                      <span>{res}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tech Stack */}
            <div className="modal-section">
              <h4 className="modal-section-title">TECHNOLOGIES & TOOLING</h4>
              <div className="modal-tech-pills">
                {project.techStack.map((tech, idx) => (
                  <span key={idx} className="project-tech-pill">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Modal Footer Actions */}
          <div className="project-modal-footer">
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="modal-action-btn gold-btn"
              >
                <FiGithub size={16} />
                <span>EXPLORE CODE ON GITHUB</span>
              </a>
            )}
            <button type="button" className="modal-action-btn close-btn" onClick={onClose}>
              <span>RETURN TO ARCHIVE</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
