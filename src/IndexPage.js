const React = require('react');
const ReactRouter = require('react-router');
const { Link } = ReactRouter;

const NavBar = require('./NavBar.js');
const Home = require('./Home.js');
const About = require('./About.js');
const Portfolio = require('./Portfolio.js');
const Contact = require('./Contact.js');

const IndexPage = () => (
	<div>	
		<NavBar />
		<Home />
		<About />
		<Portfolio />
		<Contact />
	</div>
)

module.exports = IndexPage;