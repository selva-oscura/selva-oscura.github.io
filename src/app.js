var React = require('react');
var ReactDOM = require('react-dom');

var div = React.DOM.div;
var h1 = React.DOM.h1;

var MyTitle = React.createClass({
	render () {
		return (
			div({style: {color:"red"} }, 
				h1({style:{color: this.props.color}} || null, this.props.title || "Hallo Vorgabewert")
			)
		)
	}
});

var TitleComponent = (
	div(null,
		React.createElement(MyTitle, null),
		React.createElement(MyTitle, {color:"#4078C0"}),
		React.createElement(MyTitle, {color:"#006400", title:"Hallo Welt"})
	)
);

ReactDOM.render(TitleComponent, document.getElementById('app'));