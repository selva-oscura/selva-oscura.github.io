var React = require('react');
var section = React.DOM.section;

var Section = React.createClass({
	render () {
		return (
			section({className: this.props.className })
		)
	}
});

module.exports = Section