var React = require('react');
var img = React.DOM.img;
var div = React.DOM.div;
var h3 = React.DOM.h3;
var p = React.DOM.p;
var strong = React.DOM.strong;

var CardImage = require('./CardImage.js');
var CardText = require('./CardText.js');

var Card = React.createClass({
	render(){
		return(
			div({className: 'card'},
				React.createElement(CardImage, {
					src:this.props.src,
					name:this.props.name
				}),
				React.createElement(CardText,{					
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

module.exports = Card;