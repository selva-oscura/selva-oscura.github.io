import React from 'react';

const Project = (props) => {
	console.log(props.project)
	const handleClick = () => {
		props.selectProject(props.project.target)
	}
	return (
		<div className="4u 12u(mobile)">
			<article
				className="box style2"
				onClick={handleClick}
			>
				<div className="image featured project-screenshot">
					<img src={`./public/images/${props.project.target}.png`} alt={`screenshot of ${props.project.name}`} />
				</div>
				<h3>{props.project.name}</h3>
			</article>
		</div>
	)
}

export default Project;
