var React = require('react');
var img = React.DOM.img;

var PortfolioCardImage = React.createClass({
	render(){
		return(
			img({
				src: this.props.src,
				alt: "screenshot of " + this.props.name
			})
		)
	}
});

module.exports = PortfolioCardImage;