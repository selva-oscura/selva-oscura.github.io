import React from 'react';

const LinkToProject = (props) => {
	const handleClick = () => {
		props.selectProject(props.target)
	}
	return (
		 <a 
		 	onClick={props.handleClick}
		 >
		 	{props.text}
		 </a>
	)
}

export default LinkToProject;