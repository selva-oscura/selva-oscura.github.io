const React = require('react');
const ReactRouter = require('react-router');
const { Link } = ReactRouter;

const NavBar = require('./NavBar.js');
const Contact = require('./Contact.js');

const ContactPage = () => (
	<div>	
		<NavBar active="contact" />
		<Contact />
	</div>
)

module.exports = ContactPage;