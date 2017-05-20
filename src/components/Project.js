import React from 'react';

const Project = (props) => {
	return (
		<div className="6u 12u(narrower)">

			<section>
				<div className="image featured"><img src={`./public/images/${props.img}.jpg`} alt="" /></div>
				<header>
					<h3>{props.name}</h3>
				</header>
				<p>{props.description}</p>
			</section>

		</div>
	)
}

export default Project;