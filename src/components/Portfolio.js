import React from 'react';
import Project from './Project';

const Portfolio = () => {
	const projects = [
		{
			name: "A Really Fast Train",
			img: "pic01",
			description: "Sed tristique purus vitae volutpat commodo suscipit amet sed nibh. Proin a ullamcorper sed blandit. Sed tristique purus vitae volutpat commodo suscipit ullamcorper sed blandit lorem ipsum dolore.",
		},{
			name: "An Airport Terminal",
			img: "pic02",
			description: "Sed tristique purus vitae volutpat commodo suscipit amet sed nibh. Proin a ullamcorper sed blandit. Sed tristique purus vitae volutpat commodo suscipit ullamcorper sed blandit lorem ipsum dolore.",
		},{
			name: "Hyperspace Travel",
			img: "pic03",
			description: "Sed tristique purus vitae volutpat commodo suscipit amet sed nibh. Proin a ullamcorper sed blandit. Sed tristique purus vitae volutpat commodo suscipit ullamcorper sed blandit lorem ipsum dolore."
		},{
			name: "An Airport Terminal",
			img: "pic04",
			description: "Sed tristique purus vitae volutpat commodo suscipit amet sed nibh. Proin a ullamcorper sed blandit. Sed tristique purus vitae volutpat commodo suscipit ullamcorper sed blandit lorem ipsum dolore.",
		}
	]
	return (
		<section className="wrapper style3 container special">

			<header className="major">
				<h2>Projects</h2>
			</header>

			<div className="row">
				{projects.map((project, i) => (<Project key={i} name={project.name} img={project.img} description={project.description} />))}
			</div>

			<footer className="major">
				<ul className="buttons">
					<li><a href="#" className="button">See More</a></li>
				</ul>
			</footer>

		</section>
	)
}

export default Portfolio;
