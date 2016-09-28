var React = require('react')
var nav = React.DOM.nav;
var div = React.DOM.div;
var ul = React.DOM.ul;
var NavLink = require('./NavLink.js');

var NavBar = React.createClass({
	render(){
		return (
			nav(null,
				div({className:'container'},
					ul(null,					
						React.createElement(NavLink, {
							className:"navscroll active", 
							id: "home",
							text: "HOME"
						}),
						React.createElement(NavLink, {
							className:"navscroll", 
							id: "about",
							text: "ABOUT"
						}),
						React.createElement(NavLink, {
							className:"navscroll", 
							id: "portfolio",
							text: "PORTFOLIO"
						}),
						React.createElement(NavLink, {
							className:"navscroll", 
							id: "contact",
							text: "CONTACT"
						}),
						React.createElement(NavLink, {
							className:"navscroll", 
							id: "tribute",
							href: "tribute",
							text: "TRIBUTE"
						})
					)
				)
			)
		)
	}
});

module.exports = NavBar