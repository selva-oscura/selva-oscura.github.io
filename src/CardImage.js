var React = require('react');
var img = React.DOM.img;

var CardImage = React.createClass({
	render(){
		return(
			img({
				src: this.props.src,
				alt: "screenshot of " + this.props.name
			})
		)
	}
});

module.exports = CardImage;