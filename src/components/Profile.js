import React from 'react';

const Profile = () => {
	return (
		<div className="wrapper style2">
			<article id="profile">
				<header>
					<h2>Skills &amp; Experience</h2>
					<p>
						My more recent client projects are Node.js full-stack, usually using Meteor.js or MERN (MongoDB, Express.js, React, and Node.js).<br />
						Personal projects have ranged from Progressive Web App (PWA) games utilizing React to Meteor-based hackathon apps that use WebRTC or that use geolocation and search criteria to match would-be pet owners with adoptable animals.<br />
						Older client projects utilized the LAMP stack (Linux, Apache server, MySQL, and PHP).<br />
						I&rsquo;ve also dabbled in Elm, GoLang, Python, and Ruby.
					</p>
				</header>
				<div className="container">
					<div className="row">
						<div className="4u 12u(mobile)">
							<section className="box style1">
								<span className="icon featured fa-user-circle"></span>
								<h3>Front-End</h3>
								<p>
									HTML5,<br />
									CSS3,<br />
									JavaScript / ES6,<br />
									jQuery,<br />
									React,<br />
									Bootstrap, Material Design
								</p>
							</section>
						</div>
						<div className="4u 12u(mobile)">
							<section className="box style1">
								<span className="icon featured fa-server"></span>
								<h3>Back-End</h3>
								<p>
									Node.js,<br />
									Meteor.js<br />
									Express,<br />
									MongoDB, <br />
									PHP,<br />
									MySQL
								</p>
							</section>
						</div>
						<div className="4u 12u(mobile)">
							<section className="box style1">
								<span className="icon featured fa-cogs"></span>
								<h3>Sundry</h3>
								<p>
									Progressive Web Apps (PWAs),<br />
									Version Control: Git,<br />
									PaaS: Galaxy, Heroku, <br />
									DBaaS: mLab,<br />
									APIs: Facebook, Instagram<br />
									Wireframe: Balsamiq
								</p>
							</section>
						</div>
					</div>
				</div>
				<footer>
					<p>Lorem ipsum dolor sit sapien vestibulum ipsum primis?</p>
					<a href="#portfolio" className="button big scrolly">See some of my recent work</a>
				</footer>
			</article>
		</div>

	)
}

export default Profile;