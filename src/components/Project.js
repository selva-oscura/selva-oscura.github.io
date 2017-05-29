import React from 'react';

const Project = (props) => {
	console.log(props)
	return (
		<div 
			className="4u 12u(mobile)"
		>
			<article className="box style2">
				<a href="blah" className="image featured"><img src={`./public/images/pic0${props.num%4+1}.jpg`} alt={`screenshot of ${props.project.name}`} /></a>
				<h3>{props.project.name}</h3>
			</article>
		</div>
	)
}

export default Project;
