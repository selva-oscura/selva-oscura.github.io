var React = require('react');

var section = React.DOM.section;
var div = React.DOM.div;

var Section = React.createClass({
	render () {
		return (
			section({className: this.props.className },
				div({className: 'container'})
			)
		)

	}
});

module.exports = Section