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
var h3 = React.DOM.h2;
var p = React.DOM.p;
var a = React.DOM.a;
var em = React.DOM.em;
var span = React.DOM.span;
var ul = React.DOM.ul;
var li = React.DOM.li;
var img = React.DOM.img;

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
		SectionFactory({className:'portfolio'}),
		SectionFactory({className:'contact'})
	)
);
ReactDOM.render(PageComponent, document.getElementById('app'));