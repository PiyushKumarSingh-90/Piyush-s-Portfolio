import React from 'react';
import { Brain, Cpu, Layers } from 'lucide-react';

// Custom AllProjects 4-square icon matching user's exact design
// (top-left hollow, top-right solid/filled, bottom-left hollow, bottom-right hollow)
const AllProjectsIcon = ({ size = 18, className = '', strokeWidth = 1.8 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 18 18"
    fill="none"
    className={className}
    aria-hidden="true"
  >
    <rect x="2.5" y="2.5" width="5.2" height="5.2" rx="0.8" stroke="currentColor" strokeWidth={strokeWidth} />
    <rect x="10.3" y="2.5" width="5.2" height="5.2" rx="0.8" fill="currentColor" stroke="currentColor" strokeWidth={strokeWidth} />
    <rect x="2.5" y="10.3" width="5.2" height="5.2" rx="0.8" stroke="currentColor" strokeWidth={strokeWidth} />
    <rect x="10.3" y="10.3" width="5.2" height="5.2" rx="0.8" stroke="currentColor" strokeWidth={strokeWidth} />
  </svg>
);

const FILTER_ITEMS = [
  { id: 'All', label: 'All Projects', icon: AllProjectsIcon },
  { id: 'Machine Learning', label: 'Machine Learning', icon: Brain },
  { id: 'Deep Learning', label: 'Deep Learning', icon: Cpu },
  { id: 'Full Stack', label: 'Full Stack', icon: Layers },
];

const ProjectFilters = ({ activeFilter, onFilterChange }) => {
  return (
    <div className="project-filters-row" role="tablist" aria-label="Project Categories">
      {FILTER_ITEMS.map((item) => {
        const IconComponent = item.icon;
        const isActive = activeFilter === item.id;
        return (
          <button
            key={item.id}
            type="button"
            role="tab"
            aria-selected={isActive}
            className={`project-filter-pill ${isActive ? 'active' : ''}`}
            onClick={() => onFilterChange(item.id)}
          >
            <IconComponent className="filter-pill-icon" size={16} strokeWidth={1.8} />
            <span className="filter-pill-label">{item.label}</span>
          </button>
        );
      })}
    </div>
  );
};

export default ProjectFilters;
