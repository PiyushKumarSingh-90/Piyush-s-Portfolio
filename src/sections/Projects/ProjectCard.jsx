import React from 'react';
import { FiGithub } from 'react-icons/fi';
import { FileText } from 'lucide-react';

const ProjectCard = ({ project, imageSrc, onOpenDetails }) => {
  return (
    <div className="project-card-outer">
      <article className="project-card-inner">
        {/* Cinematic Card Image */}
        <div className="project-image-wrapper">
          <img
            src={imageSrc}
            alt={project.name}
            className="project-card-image"
            loading="lazy"
          />
          <div className="project-image-vignette" />
        </div>

        {/* Card Body */}
        <div className="project-body">
          <h3 className="project-card-title">{project.name}</h3>
          
          <div className="project-category-row">
            <span className="project-category-label">{project.category}</span>
          </div>

          <p className="project-card-description">{project.description}</p>

          {/* Technology Pills */}
          <div className="project-tech-pills" aria-label="Technologies used">
            {project.techStack.map((tech, idx) => (
              <span key={idx} className="project-tech-pill">
                {tech}
              </span>
            ))}
          </div>

          {/* Bottom Action Bar */}
          <div className="project-action-bar">
            {project.githubLink ? (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="project-action-btn project-action-github"
                aria-label={`View ${project.name} on GitHub`}
              >
                <FiGithub className="action-btn-icon" size={14} />
                <span>GitHub</span>
              </a>
            ) : (
              <span className="project-action-btn project-action-disabled">
                <FiGithub className="action-btn-icon" size={14} />
                <span>GitHub</span>
              </span>
            )}

            <div className="action-bar-divider" role="separator" />

            <button
              type="button"
              className="project-action-btn project-action-details"
              onClick={() => onOpenDetails(project)}
              aria-label={`View details for ${project.name}`}
            >
              <FileText className="action-btn-icon" size={14} />
              <span>Details</span>
            </button>
          </div>
        </div>
      </article>
    </div>
  );
};

export default ProjectCard;
