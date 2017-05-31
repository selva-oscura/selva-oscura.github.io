import React from 'react';

const ProjectFilterButton = (props) => {
	const handleClick = () => {
		console.log(Object.keys(props.filter))
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