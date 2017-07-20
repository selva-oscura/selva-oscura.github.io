import React from 'react';

const ProjectFilterButton = props => {
  let className = '';
  if (
    props.projectFilters.includes(Object.keys(props.filter)[0]) ||
    (props.projectFilters.length === 0 &&
      Object.keys(props.filter)[0] === 'all')
  ) {
    className = 'alt';
  }
  const handleClick = () => {
    props.setProjectFilters(Object.keys(props.filter));
  };
  return (
    <button onClick={handleClick} className={className}>
      {Object.values(props.filter)}
    </button>
  );
};

export default ProjectFilterButton;
