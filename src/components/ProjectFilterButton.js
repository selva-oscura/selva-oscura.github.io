import React from 'react';

const ProjectFilterButton = (props) => {
	return (
		<button>
			{Object.values(props.filter)}
		</button>
	)
}

export default ProjectFilterButton;