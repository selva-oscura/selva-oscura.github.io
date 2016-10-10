const React = require('react');
const ReactRouter = require('react-router');
const { Link } = ReactRouter;

const NavBar = require('./NavBar.js');
const About = require('./About.js');

const AboutPage = () => (
	<div>	
		<NavBar active="about" />
		<About />
	</div>
)

module.exports = AboutPage;