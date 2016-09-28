var React = require('react');
var section = React.DOM.section;
var div = React.DOM.div;
var p = React.DOM.p;
var a = React.DOM.a;


var Home = React.createClass({
	render(){
		return(
			section({className:'home'},
				div({className:'container'},
					div({
						className: 'social',
						style: {paddingTop: '66vh'}
					},
						p(null,
							a({
								href:'https://github.com/selva-oscura',
								target: 'github'
							}, "GitHub"),
							a({
								href:'https://linkedin.com/in/stlouisc',
								target: 'LinkedIn'
							}, "LinkedIn")
						)
					)
				)
			)
		)
	}
});


module.exports = Home;