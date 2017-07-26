import React from 'react';
import ProjectFilterButton from './ProjectFilterButton';

const ProjectFilters = props => {
  const filters = [
    { all: 'All' },
    { node: 'Node.js' },
    { mongo: 'MongoDB' },
    { meteor: 'Meteor' },
    { react: 'React' },
    { angular: 'Angular' },
    { pwa: 'Progressive Web App (PWA)' },
    { webrtc: 'WebRTC' },
    { d3: 'D3' },
    { svg: 'svg' },
    { php: 'PHP' },
    { lamp: 'PHP / MySQL' },
  ];
  return (
    <div className="container project-filters">
      {filters.map((filter, i) =>
        <ProjectFilterButton
          key={i}
          filter={filter}
          setProjectFilters={props.setProjectFilters}
          projectFilters={props.projectFilters}
        />
      )}
    </div>
  );
};

export default ProjectFilters;
