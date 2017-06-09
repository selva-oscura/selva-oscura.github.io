import React from 'react';
import SkillArea from './SkillArea';

const Profile = () => {
	const skillAreas = [
		{
			icon: "fa-user-circle",
			skillArea: "Front End",
			skills: [
				"HTML5,",
				"CSS3,",
				"JavaScript / ES6,",
				"React,",
				"Redux,",
				"jQuery,",
				"Angular,",
				"CSS Libraries: Bootstrap, Material Design, HTML5UP",
			]
		},{
			icon: "fa-server",
			skillArea: "Back End",
			skills: [
				"Node.js,",
				"MongoDB,",
				"Meteor.js,",
				"Express,",
				"PHP,",
				"MySQL,",
				"limited exp.: Python, Ruby, Golang, & Elm",
			]
		},{
			icon: "fa-cogs",
			skillArea: "Sundry",
			skills: [
				"Package Management: npm, yarn",
				"Version Control: git",
				"Progressive Web Apps (PWAs)",
				"PaaS: Galaxy, Heroku",
				"DBaaS: mLab",
				"APIs: Facebook, Instagram, & OpenWeather",
				"Wireframe: Balsamiq",
			]
		}
	]
	return (
		<div className="wrapper style2">
			<article id="profile">
				<div className="container">
					<header>
						<h2>Skills &amp; Experience</h2>
						<ul>
							<li>My more recent client projects are Node.js full-stack, usually using Meteor.js or MERN (MongoDB, Express.js, React, and Node.js).</li>
							<li>Personal projects have ranged from Progressive Web App (PWA) games utilizing React to Meteor-based hackathon apps that use WebRTC or that use geolocation and search criteria to match would-be pet owners with adoptable animals.</li>
							<li>Older client projects utilized the LAMP stack (Linux, Apache server, MySQL, and PHP).</li>
							<li>I&rsquo;ve also dabbled in Elm, GoLang, Python, and Ruby.</li>
						</ul>
					</header>
					<div className="row">
						{skillAreas.map((skillArea, i) => (
								<SkillArea
									key={i}
									skillArea={skillArea}
								/>
							)
						)}
					</div>
				</div>
				<div className="container">
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