import React from 'react';

const Project = (props) => {
	const handleClick = () => {
		props.selectProject(props.project.target)
	}
	return (
		<div className="col">
			<figure
				className="project"
				onClick={handleClick}
			>
				<img src={`./public/assets/images/${props.project.target}.png`} alt={`screenshot of ${props.project.name}`} />
				<figcaption>
					<label>{props.project.name}</label>
				</figcaption>
			</figure>
		</div>
	)
}

export default Project;
