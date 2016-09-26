var React = require('react');
var ReactDOM = require('react-dom');
// var MyTitle = require('./MyTitle.js');
// import { MyTitle } from './MyTitle.js';
var Section = require('./Section.js');

var section = React.DOM.section;
var nav = React.DOM.nav;
var div = React.DOM.div;
var h1 = React.DOM.h1;
var h2 = React.DOM.h2;
var h3 = React.DOM.h3;
var p = React.DOM.p;
var a = React.DOM.a;
var em = React.DOM.em;
var span = React.DOM.span;
var ul = React.DOM.ul;
var li = React.DOM.li;
var img = React.DOM.img;
var strong = React.DOM.strong;
var form = React.DOM.form;
var label = React.DOM.label;
var input = React.DOM.input;
var textarea = React.DOM.textarea;

// var NavFactory = React.createFactory(Nav);
var SectionFactory = React.createFactory(Section);

var PageComponent = (
	div(null,
		nav(null, 
			div({className:'container'},
				ul(null,
					li(null,
						a({
							className:'navscroll active',
							id: 'home', 
						}, 'HOME')
					),
					li(null,
						a({
							className:'navscroll',
							id: 'about', 
						}, 'ABOUT')
					),
					li(null,
						a({
							className:'navscroll',
							id: 'portfolio', 
						}, 'PORTFOLIO')
					),
					li(null,
						a({
							className:'navscroll',
							id: 'contact', 
						}, 'CONTACT')
					)

				)
			)			
		),
		section({className:'home'},
			div({className:'container'},
				div({
					className: 'social',
					style: {paddingTop: '66vh'}
				},
					p(null,
						a({
							href:'https://github.com/selva-oscura',
							target: 'github'
						}, "GitHub"),
						a({
							href:'https://linkedin.com/in/stlouisc',
							target: 'LinkedIn'
						}, "LinkedIn")
					)
				)
			)
		),
		section({className:'about'},
			div({className:'container'},
				p({style: {paddingTop: "2em"}},"Full-stack web development freelancer with 3 years experience with HTML5, CSS3, full-stack JavaScript development (Meteor, MEAN (MongoDB, Express, Angular.js, Node.js), and React), PHP, and MySQL. I have a passion for learning, strong analytical and problem-solving skills, and enjoy writing software with an eye to clean and maintainable code. I\'m looking for new and exciting opportunities to thrive in a dynamic, collaborative environment."
				),
				div({className:'half'},
					h3(null, "Front-end:"),
					ul(null,
						li(null,
							span({className:'onethird'},
								em({className:"icon-html5"})
							),
							span({className:'twothird'},
								"HTML5"
							)
						),
						li(null,
							span({className:'onethird'},
								em({className:"icon-css3"})
							),
							span({className:'twothird'},
								"CSS3"
							)
						),
						li(null,
							span({className:'onethird'},
								em({className:"icon-bootstrap"})
							),
							span({className:'twothird'},
								"Bootstrap"
							)
						),
						li(null,
							span({className:'onethird'},
								em(null, ' ')
							),
							span({className:'twothird'},
								"Materialize"
							)
						),
						li(null,
							span({className:'onethird'},
								em({className:"icon-d3"})
							),
							span({className:'twothird'},
								"D3.js"
							)
						),
						li(null,
							span({className:'onethird'},
								em({className:"icon-jquery"})
							),
							span({className:'twothird'},
								"jQuery"
							)
						)
					),
					h3(null, "Databases:"),
					ul(null,
						li(null,
							span({className:'onethird'},
								em({className:"icon-mongodb"})
							),
							span({className:'twothird'},
								"MongoDB"
							)
						),
						li(null,
							span({className:'onethird'},
								em({className:"icon-mysql"})
							),
							span({className:'twothird'},
								"MySQL"
							)
						)
					),
					h3(null, "PaaS & DBaaS:"),
					ul(null,
						li(null,
							span({className:'onethird'},
								em({className:"icon-heroku"})
							),
							span({className:'twothird'},
								"Heroku"
							)
						),
						li(null,
							span({className:'onethird'},
								em(null, ' ')
							),
							span({className:'twothird'},
								"Galaxy"
							)
						),
						li(null,
							span({className:'onethird'},
								em(null, ' ')
							),
							span({className:'twothird'},
								"mLab"
							)
						)
					),
					h3(null, "Version Control:"),
					ul(null,
						li(null,
							span({className:'onethird'},
								em({className:"icon-github-circle"})
							),
							span({className:'twothird'},
								"GitHub"
							)
						),
						li(null,
							span({className:'onethird'},
								em(null, ' ')
							),
							span({className:'twothird'},
								"BitBucket"
							)
						)
					)
				),
				div({className:'half'},
					h3(null, "Languages"),
					ul(null,
						li(null,
							span({className:'onethird'},
								em({className:"icon-js"})
							),
							span({className:'twothird'},
								"JavaScript / ES6"
							)
						),
						li(null,
							span({className:'onethird'},
								em({className:"icon-php"})
							),
							span({className:'twothird'},
								"PHP"
							)
						),
						li(null,
							span({className:'onethird'},
								em({className:"icon-python"})
							),
							span({className:'twothird'},
								"Python"
							)
						),
						li(null,
							span({className:'onethird'},
								em({className:"icon-ruby"})
							),
							span({className:'twothird'},
								"Ruby"
							)
						)
					),
					h3(null, "JavaScript Frameworks:"),
					ul(null,
						li(null,
							span({className:'onethird'},
								img({
									className:"meteorIcon",
									src: './public/img/meteor.png'
								})
							),
							span({className:'twothird'},
								"Meteor"
							),
							ul(null,
								li(null,
									span({className:'onethird'},
										em({className:"icon-mongodb"})
									),
									span({className:'twothird'},
										"MongoDB"
									)
								),
								li(null,
									span({className:'onethird'},
										em({className:"icon-nodejs"})
									),
									span({className:'twothird'},
										"Node.js"
									)
								),
								li(null,
									span({className:'onethird'},
										em(null, '')
									),
									span({className:'twothird'},
										"Blaze"
									)
								),
								li(null,
									span({className:'onethird'},
										em(null, '')
									),
									span({className:'twothird'},
										"Spacebars"
									)
								)
							)
						),
						li(null,
							span({className:'onethird'},
								em({className:"icon-react"})
							),
							span({className:'twothird'},
								"React.js"
							)
						),
						li(null,
							span({className:'onethird'},
								em(null, '')
							),
							span({className:'twothird'},
								"MEAN"
							),
							ul(null,
								li(null,
									span({className:'onethird'},
										em({className:"icon-mongodb"})
									),
									span({className:'twothird'},
										"MongoDB"
									)
								),
								li(null,
									span({className:'onethird'},
										em({className: "icon-express"})
									),
									span({className:'twothird'},
										"Express.js"
									)
								),
								li(null,
									span({className:'onethird'},
										em({className:"icon-angular"})
									),
									span({className:'twothird'},
										"Angular.js"
									)
								),
								li(null,
									span({className:'onethird'},
										em({className:"icon-nodejs"})
									),
									span({className:'twothird'},
										"Node.js"
									)
								)
							)
						)
					),
					h3(null, "Operating Systems"),
					ul(null,
						li(null,
							span({className:'onethird'},
								em({className:"icon-ubuntu"})
							),
							span({className:'twothird'},
								"Ubuntu"
							)
						),
						li(null,
							span({className:'onethird'},
								em(null)
							),
							span({className:'twothird'},
								"Windows"
							)
						)
					)
				)
			)
		),
		section({className:'portfolio'},
			div({className:'container'},
				div({className: 'card'},
					img({
						src:"public/img/shines.png",
						alt:"Door-to-Door Shines screenshot"
					}),
					div(null,
						h3(null,
							a({
								href: 'https://doortodoorshines.com',
								target: 'shines'
							}, "Door-to-Door Shines")
						),
						p(null,"Door-to-Door Shines is an app to help busy people in the San Francisco Area with on-demand shoe shine and repair services.  Select the services you want, schedule pick-up and return times that are convenient for you, pay, and cross one more errand off your list!"),
						p(null, "As sole developer for Door-to-Door Shines, I built (1) the interfaces the user sees as s/he orders shine & repair services, schedules pick-up & delivery times, pays, leaves comments or asks questions; (2) the admin dashboard, displaying pending & completed orders, user feedback, & customer information, scheduling of delivery times, analytics on orders and revenue; and (3) the internals, including database and cron jobs."
						),
						p(null,
							strong(null, "Technologies: "),
							"Meteor.js (Blaze, Spacebars, MongoDB, Node.js), JavaScript, jQuery, HTML5, CSS3, Materialize.css, Stripe API"
						)
					)
				),
				div({className: 'card'},
					img({
						src:"public/img/zyrl.png",
						alt:"Zyrl screenshot"
					}),
					div(null,
						h3(null,
							a({
								href: 'https://zyrl.meteorapp.com',
								target: 'zyrl'
							}, "Zyrl")
						),
						p(null,"Zyrl is an app for connecting social media influencers and the merchants whose products and services they love."),
						p(null, "As a freelancer for Zyrl, I converted the site from WordPress to Meteor, rebuilding the app's front-end and back-end (sign-up and communications for influencers, merchants, and potential employees) and arranging site and database hosting. I then managed the Facebook and Instagram permissions process, designed and developed the internal APIs & the management of data from Facebook and Instagram's APIs, and designed the admin dashboard for managing influencers/merchants, admin permissions, and display of analytics of  influencers' Facebook and Instagram profiles and posts data."
						),
						p(null,
							strong(null, "Technologies: "),
							"Meteor.js (Blaze, Spacebars, MongoDB, Node.js), JavaScript/ES6, jQuery, HTML5, CSS3, Bootstrap, Facebook Graph API, Instagram API"
						)
					)
				),
				div({className: 'card'},
					img({
						src:"public/img/portcal.jpg",
						alt:"PoRTCal screenshot"
					}),
					div(null,
						h3(null,
							a({
								href: 'https://github.com/selva-oscura/poRTCal',
								target: 'portcal'
							}, "PoRTCal")
						),
						p(null,"PoRTCal is a WebRTC app inspired by the game Portal. The project was an entry into the October 2015 Meteor hackathon competition. Users could videoconference with each other by logging in to the app."),
						p(null,
							strong(null, "Technologies: "),
							"Meteor.js (Blaze, Spacebars, MongoDB, Node.js), HTML5, CSS3, Materialize.css, Javascript/ES6, WebRTC using the PeerJS library"
						)
					)
				),
				div({className: 'card'},
					img({
						src:"public/img/animal_rescue.png",
						alt:"Animal Rescue screenshot"
					}),
					div(null,
						h3(null,
							a({
								href: 'https://github.com/selva-oscura/meteor_animal_rescue',
								target: 'animal_rescue'
							}, "Animal Rescue")
						),
						p(null,"Animal Rescue is an app for uploading and finding animals that are available for adoption, make with Meteor, MongoDB, and Bootstrap. This project was developed and won 2nd place at the Women Who Code Silicon Valley hackathon at Paypal in April 2015."),
						p(null,
							strong(null, "Technologies: "),
							"Meteor.js (Blaze, Spacebars, MongoDB, Node.js), HTML5, CSS3, Bootstrap, MapQuest Geolocation API"
						)
					)
				),
				div({className: 'card'},
					img({
						src:"public/img/booksmart.png",
						alt:"Booksmart screenshot"
					}),
					div(null,
						h3(null,
							a({
								href: 'http://booksmartapp.com',
								target: 'booksmart'
							}, "Booksmart")
						),
						p(null,"Sole developer and lead maintainer of the web platform for a web, iOS, and Android project, created in collaboration with a team of mobile app developers to help students (1) contact other students at their university to buy or sell textbooks with one another and (2) buy from or sell to online vendors for students at universities where the app is not yet broadly adopted."),
						p(null,
							strong(null, "Technologies: "),
							"HTM5, CSS3, Bootstrap, PHP, MySQL, Javascript, AJAX, jQuery, Campusbooks API"
						)
					)
				),
				div({className: 'card'},
					img({
						src:"public/img/aloha_fun_zone.png",
						alt:"Aloha Fun Zone screenshot"
					}),
					div(null,
						h3(null,
							a({
								href: 'http://alohafunzone.com',
								target: 'aloha'
							}, "Aloha Fun Zone")
						),
						p(null,"Sole developer and maintainer of Aloha Fun Zone website, which displays the tours available from te company."),
						p(null,
							strong(null, "Technologies: "),
							"HTM5, CSS3, PHP, Javascript, AJAX, jQuery"
						)
					)
				)
			)
		),
		section({className:'contact'},
			div({className:'container'},
				div({className:'half'},
					form(null,
						label({
							htmlFor:'Name'
						}, 'Name'),
						input({
							type: 'text',
							name: 'name',
							id: 'name',
							required:'required'
						}),
						label({
							htmlFor:'email'
						}, 'E-mail Address'),
						input({
							type: 'email',
							name: 'email',
							id: 'email',
							required:'required'
						}),
						label({
							htmlFor:'Phone'
						}, 'Telephone Number'),
						input({
							type: 'tel',
							name: 'phone',
							id: 'phone',
							required:'required'
						}),
						label({
							htmlFor:'Message'
						}, 'Message'),
						textarea({
							type: 'text',
							name: 'message',
							id: 'message',
							value: '',
							required:'required'
						}),
						input({
							type: 'submit',
							value: 'SUBMIT',
							id: 'submit'
						})
					)
				),
				div({className:'half'},
					div({className:'onethird'},
						p(null," ")
					),
					div({className:'twothird'},
						p(null,"Want to get in touch with me? Be it to request more info about me and my experience or to ask for my resume, just drop me a line."
						),
						p(null, "I'll reply ASAP")
					)
				)
			)
		)
	)
);
ReactDOM.render(PageComponent, document.getElementById('app'));