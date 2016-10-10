const React = require('react');
const ReactRouter = require('react-router');
const { Link } = ReactRouter;

const NavBar = require('./NavBar.js');
const Home = require('./Home.js');

const HomePage = () => (
	<div>	
		<NavBar active="home" />
		<Home />
	</div>
)

module.exports = HomePage;