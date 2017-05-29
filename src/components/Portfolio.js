import React from 'react';
import data from '../../public/assets/data/portfolio_data.json';

console.log('data', data);

const Portfolio = () => {
	const clientProjects = data.projects.filter((project) => {return project.purpose==="client"});
	console.log('clientProjects', clientProjects);
	const personalProjects = data.projects.filter((project) => {return project.purpose==="personal"});
	console.log('personalProjects', personalProjects);
	return (
		<div className="wrapper style3">
			<article id="portfolio">
				<header>
					<h2>Projects for clients</h2>
					<p>Proin odio consequat  sapien vestibulum consequat lorem dolore feugiat lorem ipsum dolore.</p>
				</header>
				<div className="container">
					<div className="row">
						<div className="4u 12u(mobile)">
							<article className="box style2">
								<a href="blah" className="image featured"><img src="./public/images/pic01.jpg" alt="" /></a>
								<h3><a href="blah">Magna feugiat</a></h3>
								<p>Ornare nulla proin odio consequat.</p>
							</article>
						</div>
						<div className="4u 12u(mobile)">
							<article className="box style2">
								<a href="blah" className="image featured"><img src="./public/images/pic02.jpg" alt="" /></a>
								<h3><a href="blah">Veroeros primis</a></h3>
								<p>Ornare nulla proin odio consequat.</p>
							</article>
						</div>
						<div className="4u 12u(mobile)">
							<article className="box style2">
								<a href="blah" className="image featured"><img src="./public/images/pic03.jpg" alt="" /></a>
								<h3><a href="blah">Lorem ipsum</a></h3>
								<p>Ornare nulla proin odio consequat.</p>
							</article>
						</div>
					</div>
					<div className="row">
						<div className="4u 12u(mobile)">
							<article className="box style2">
								<a href="blah" className="image featured"><img src="./public/images/pic04.jpg" alt="" /></a>
								<h3><a href="blah">Tempus dolore</a></h3>
								<p>Ornare nulla proin odio consequat.</p>
							</article>
						</div>
						<div className="4u 12u(mobile)">
							<article className="box style2">
								<a href="blah" className="image featured"><img src="./public/images/pic05.jpg" alt="" /></a>
								<h3><a href="blah">Feugiat aliquam</a></h3>
								<p>Ornare nulla proin odio consequat.</p>
							</article>
						</div>
						<div className="4u 12u(mobile)">
							<article className="box style2">
								<a href="blah" className="image featured"><img src="./public/images/pic06.jpg" alt="" /></a>
								<h3><a href="blah">Sed amet ornare</a></h3>
								<p>Ornare nulla proin odio consequat.</p>
							</article>
						</div>
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