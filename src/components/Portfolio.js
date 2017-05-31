import React from 'react';
import Project from './Project';
import ProjectModal from './ProjectModal';
import data from '../../public/assets/data/portfolio_data.json';


const Portfolio = (props) => {
	const clientProjects = data.projects.filter((project) => {return project.purpose==="client"});
	const personalProjects = data.projects.filter((project) => {return project.purpose==="personal"});
	return (
		<div className="wrapper style3">
			<article id="portfolio">
				<header>
					<h2>Projects</h2>
					<p>Proin odio consequat  sapien vestibulum consequat lorem dolore feugiat lorem ipsum dolore.</p>
				</header>
				<div className="container">
					<div className="row">
						{data.projects.map((project, i) => (
							<Project
								key={i}
								project={project}
								num={i}
								selectProject={props.selectProject}
							/>
						))}
						{data.projects.map((project, i) => (
							<ProjectModal
								key={i}
								project={project}
								selectedProject={props.selectedProject}
							/>
						))}
					</div>
				</div>
				<footer>
					<p>Lorem ipsum dolor sit sapien vestibulum ipsum primis?</p>
					<a href="#contact" className="button big scrolly">Get in touch with me</a>
				</footer>
			</article>
		</div>
	)
}

export default Portfolio;
