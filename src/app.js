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
		SectionFactory({className:'about'}),
		SectionFactory({className:'portfolio'}),
		SectionFactory({className:'contact'})
	)
);
ReactDOM.render(PageComponent, document.getElementById('app'));