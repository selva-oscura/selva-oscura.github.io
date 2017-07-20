import React from 'react';

const LinkToProject = props => {
  const handleClick = () => {
    props.selectProject(props.target);
  };
  return (
    <a href="#portfolio" className="scrolly" onClick={handleClick}>
      &nbsp;{props.text}
    </a>
  );
};

export default LinkToProject;
