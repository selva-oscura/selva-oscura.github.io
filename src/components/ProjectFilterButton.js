import React from 'react';

const ProjectFilterButton = (props) => {
	const handleClick = () => {
		props.setProjectFilters(Object.keys(props.filter));
	}
	return (
		<button
			onClick={handleClick}
		>
			{Object.values(props.filter)}
		</button>
	)
}

export default ProjectFilterButton;