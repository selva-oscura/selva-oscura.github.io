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
							<li>I'm a full-stack web developer with 4 years of experience.  I specialize in developing websites which are fast, easy-to-use, and beautiful.</li>
							<li>JavaScript / ECMAScript is my favorite language for web development, courtesy of its flexibility and the incredible development of powerful libraries and frameworks in recent years.  My most recent projects are Node.js full-stack, using Meteor.js, the MERN stack (MongoDB, Express.js, React, and Node.js) or the MEAN stack (MongoDB, Express.js, Angular, and Node.js).</li>
							<li>For client projects, I have automated server-side cron jobs on Node.js that allow automation of notifications and clearing of holds for uncompleted transactions (see Door-to-Door Shines below or <a href="https://www.doortodoorshines.com" target="shines">live</a>), and updating of data that clients are monitoring (see Zyrl below)</li>
							<li>In my personal projects and at hackathons, I've enjoyed exploring HTML5's new APIs, new JS libraries, and the ever greater browser capabilities that make it possible:</li>
								<ul>
									<li>to use React, web workers, and local storage on the client to make Progressive Web App games (see Sudoku, Hangman, and Tic-Tac-Toe below),</li>
									<li>use Meteor.js, MongoDB, Materialize.css (an adaptation of Google's Material Design), and PeerJS to implement a Portal-themed WebRTC live video chat site (PoRTCal),</li>
									<li>use Meteor.js, TwitterBootstrap, MongoDB, and geolocation & search criteria to match would-be pet owners with adoptable animals (see Animal Rescue below).</li>
								</ul>
							<li>Older clients projects and bootcamp projects utilized the LAMP stack (Linux, Apache server, MySQL, and PHP) and Ruby on Rails.</li>
							<li>I&rsquo;ve also dabbled in Elm, GoLang, Python, and Ruby.</li>
						</ul>
					</header>
					<div className="flex-grid-thirds">
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