import React from 'react';

const Project = (props) => {
	const handleClick = () => {
		props.selectProject(props.project.target)
	}
	return (
		<div className="4u 12u(mobile)">
			<article
				className="box style2"
				onClick={handleClick}
			>
				<div className="image featured">
					<img src={`./public/images/pic0${props.num%4+1}.jpg`} alt={`screenshot of ${props.project.name}`} />
				</div>
				<h3>{props.project.name}</h3>
			</article>
		</div>
	)
}

export default Project;
