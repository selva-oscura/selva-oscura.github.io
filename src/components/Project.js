import React from 'react';

const Project = (props) => {
	return (
		<div className="6u 12u(narrower)">

			<section>
				<a href="#" className="image featured"><img src={`./public/images/${props.img}.jpg`} alt="" /></a>
				<header>
					<h3>{props.name}</h3>
				</header>
				<p>{props.description}</p>
			</section>

		</div>
	)
}

export default Project;