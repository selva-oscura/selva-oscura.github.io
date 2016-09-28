var React = require('react');
var img = React.DOM.img;
var div = React.DOM.div;
var h3 = React.DOM.h3;
var p = React.DOM.p;
var strong = React.DOM.strong;

var PortfolioCardImage = require('./PortfolioCardImage.js');
var PortfolioCardText = require('./PortfolioCardText.js');

var PortfolioCard = React.createClass({
	render(){
		return(
			div({className: 'card'},
				React.createElement(PortfolioCardImage, {
					src:this.props.src,
					name:this.props.name
				}),
				React.createElement(PortfolioCardText,{					
					href: this.props.href,
					target: this.props.target,
					name:this.props.name,
					text: this.props.text,
					technologies: this.props.technologies
				})
			)
		)
	}
});

module.exports = PortfolioCard;