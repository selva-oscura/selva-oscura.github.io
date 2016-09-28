var React = require('react');
var section = React.DOM.section;
var div = React.DOM.div;

var PortfolioCard = require('./PortfolioCard.js');

var Portfolio = React.createClass({
	render(){
		return (
			section({className: 'portfolio'},
				div({className: 'container'},
					React.createElement(PortfolioCard, {
						src:"public/img/shines.png",
						name:"Door-to-Door Shines",
						href: 'https://doortodoorshines.com',
						target: 'shines',
						text: ["Door-to-Door Shines is an app to help busy people in the San Francisco Area with on-demand shoe shine and repair services.  Select the services you want, schedule pick-up and return times that are convenient for you, pay, and cross one more errand off your list!","As sole developer for Door-to-Door Shines, I built (1) the interfaces the user sees as s/he orders shine & repair services, schedules pick-up & delivery times, pays, leaves comments or asks questions; (2) the admin dashboard, displaying pending & completed orders, user feedback, & customer information, scheduling of delivery times, analytics on orders and revenue; and (3) the internals, including database and cron jobs."],
						technologies: "Meteor.js (Blaze, Spacebars, MongoDB, Node.js), JavaScript, jQuery, HTML5, CSS3, Materialize.css, Stripe API"
					}),
					React.createElement(PortfolioCard, {
						src:"public/img/zyrl.png",
						name:"Zyrl",
						href: 'https://zyrl.meteorapp.com',
						target: 'zyrl',
						text: ["Zyrl is an app for connecting social media influencers and the merchants whose products and services they love.", "As a freelancer for Zyrl, I converted the site from WordPress to Meteor, rebuilding the app's front-end and back-end (sign-up and communications for influencers, merchants, and potential employees) and arranging site and database hosting. I then managed the Facebook and Instagram permissions process, designed and developed the internal APIs & the management of data from Facebook and Instagram's APIs, and designed the admin dashboard for managing influencers/merchants, admin permissions, and display of analytics of  influencers' Facebook and Instagram profiles and posts data."],
						technologies: "Meteor.js (Blaze, Spacebars, MongoDB, Node.js), JavaScript/ES6, jQuery, HTML5, CSS3, Bootstrap, Facebook Graph API, Instagram API"
					}),
					React.createElement(PortfolioCard, {
						src:"public/img/portcal.jpg",
						name:"PoRTCal",
						href: 'https://github.com/selva-oscura/poRTCal',
						target: 'portcal',
						text: ["PoRTCal is a WebRTC app inspired by the game Portal. The project was an entry into the October 2015 Meteor hackathon competition. Users could videoconference with each other by logging in to the app."],
						technologies: "Meteor.js (Blaze, Spacebars, MongoDB, Node.js), HTML5, CSS3, Materialize.css, Javascript/ES6, WebRTC using the PeerJS library"
					}),
					React.createElement(PortfolioCard, {
						src:"public/img/animal_rescue.png",
						name:"Animal Rescue",
						href: 'https://github.com/selva-oscura/meteor_animal_rescue',
						target: 'animal_rescue',
						text: ["Animal Rescue is an app for uploading and finding animals that are available for adoption, make with Meteor, MongoDB, and Bootstrap. This project was developed and won 2nd place at the Women Who Code Silicon Valley hackathon at Paypal in April 2015."],
						technologies: "Meteor.js (Blaze, Spacebars, MongoDB, Node.js), HTML5, CSS3, Bootstrap, MapQuest Geolocation API"
					}),
					React.createElement(PortfolioCard, {
						src:"public/img/booksmart.png",
						name:"Booksmart",
						href: 'http://booksmartapp.com',
						target: 'booksmart',
						text: ["Sole developer and lead maintainer of the web platform for a web, iOS, and Android project, created in collaboration with a team of mobile app developers to help students (1) contact other students at their university to buy or sell textbooks with one another and (2) buy from or sell to online vendors for students at universities where the app is not yet broadly adopted."],
						technologies: "HTM5, CSS3, Bootstrap, PHP, MySQL, Javascript, AJAX, jQuery, Campusbooks API"
					}),
					React.createElement(PortfolioCard, {
						src:"public/img/aloha_fun_zone.png",
						name:"Aloha Fun Zone",
						href: 'http://alohafunzone.com',
						target: 'aloha',
						text: ["Sole developer and maintainer of Aloha Fun Zone website, which displays the tours available from the company."],
						technologies: "HTM5, CSS3, PHP, Javascript, AJAX, jQuery"
					})
				)
			)
		)
	}
});

module.exports = Portfolio;