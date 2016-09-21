var React = require('react');
var div = React.DOM.div;
var h1 = React.DOM.h1;

var MyTitle = React.createClass({
	render () {
		return (
			div({style: {color:"red"} }, 
				h1({style:{color: this.props.color}} || null, this.props.title || "Hello Default Text")
			)
		)
	}
});

module.exports = MyTitle