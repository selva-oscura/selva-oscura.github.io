var React = require('react');
var ReactDOM = require('react-dom');

var div = React.DOM.div;
var h1 = React.DOM.h1;

var MyTitle = React.createClass({
	render () {
		return (
			div(null, 
				h1(null, "Hallo Welt")
			)
		)
	}
});

var TitleComponent = (
	div(null,
		React.createElement(MyTitle, null)
	)
);

ReactDOM.render(TitleComponent, document.getElementById('app'));