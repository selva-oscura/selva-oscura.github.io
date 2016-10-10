const React = require('react');
const ReactRouter = require('react-router');
const { Link } = ReactRouter;

const NavBar = require('./NavBar.js');
const Portfolio = require('./Portfolio.js');

const PortfolioPage = () => (
	<div>	
		<NavBar active="portfolio" />
		<Portfolio />
	</div>
)

module.exports = PortfolioPage;