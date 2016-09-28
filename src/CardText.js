var React = require('react');
var div = React.DOM.div;
var h3 = React.DOM.h3;
var p = React.DOM.p;
var a = React.DOM.a;
var strong = React.DOM.strong;
// var CardPara = require('./CardPara.js');

var CardText = React.createClass({
	render(){
		var target = this.props.target
		return(
			div(null,
				h3(null,
					a({
						href: this.props.href,
						target: this.props.target,
					}, this.props.name)
				),
				this.props.text.map(function(para, index){
					return p({key:target+index}, para)
				}),
				p(null,
					strong(null, "Technologies: "),
					this.props.technologies
				)
			)
		)
	}
});

module.exports = CardText;