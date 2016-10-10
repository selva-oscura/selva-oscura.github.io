const React = require('react');
const ReactRouter = require('react-router');
const { Link } = ReactRouter;

const NavBar = require('./NavBar');
const Tribute = require('./Tribute.js');

const TributePage = () => (
	<div>
		<NavBar active="tribute" />
		<Tribute />
	</div>
);

module.exports = TributePage;