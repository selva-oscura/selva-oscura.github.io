var React = require('react');
var section = React.DOM.section;
var div = React.DOM.div;
var h3 = React.DOM.h3;
var p = React.DOM.p;
var a = React.DOM.a;
var ul = React.DOM.ul;
var li = React.DOM.li;
var em = React.DOM.em;
var span = React.DOM.span;
var img = React.DOM.img;

var About = React.createClass({
	render(){
		return(
			section({className:'about'},
				div({className:'container'},
					div({className:'half'},
					'Left'),
					div({className:'half'},
					'Right')
				)
			)
		)
	}
});


module.exports = About;