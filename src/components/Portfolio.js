import React from 'react';
import ProjectFilters from './ProjectFilters';
import Project from './Project';
import ProjectModal from './ProjectModal';
import ProjectFilterButton from './ProjectFilterButton';
import data from '../../public/assets/data/portfolio_data.json';


const Portfolio = (props) => {
	let projects = data.projects;
	props.projectFilters.forEach((projectFilter) => {
		projects = projects.filter((project) => {return project[projectFilter]});
	});
	let resetFilters = {"reset": "Reset All"};
	return (
		<div className="wrapper style1">
			<article id="portfolio">
				<header>
					<h2>Projects</h2>
					<p>Proin odio consequat sapien vestibulum consequat lorem dolore feugiat lorem ipsum dolore.</p>
					<ProjectFilters 
						projectFilters={props.projectFilters}
						setProjectFilters={props.setProjectFilters}
					/>
				</header>
				<div className="container">
					<div className="row">
						{
							projects.map((project, i) => (
								<Project
									key={i}
									project={project}
									num={i}
									selectProject={props.selectProject}
								/>
							))
						}
					</div>
					{
						projects.length>0 ? (
							projects.map((project, i) => (
								<ProjectModal
									key={i}
									project={project}
									selectedProject={props.selectedProject}
									unselectProject={props.unselectProject}
									deselectedProject={props.deselectedProject}
								/>
							))
						):(
							<div>
								<p>No projects meeting your criteria. <br />
									De-select a filter or reset all search critera.
								</p>
								<ProjectFilterButton
									filter={resetFilters} 
									setProjectFilters={props.setProjectFilters}
									projectFilters={props.projectFilters}
								/>
							</div>
						)
					}
				</div>
				<footer>
					<p>Interested in having me work for you?</p>
					<a href="#contact" className="button big scrolly">Get in touch with me</a>
				</footer>
			</article>
		</div>
	)
}

export default Portfolio;
