var React = require('react');
var li = React.DOM.li;
var a = React.DOM.a;


var NavLink = React.createClass({
	render(){
		return (
			li(null, 
				a({
					className: this.props.className,
					id: this.props.id
				}, this.props.text)
			)
		)
	}
});

module.exports = NavLink