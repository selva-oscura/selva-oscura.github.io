var React = require('react');
var ReactDOM = require('react-dom');

var div = React.DOM.div;
var h1 = React.DOM.h1;

var TitleComponent = (
	div(null,
		h1(null, "Hello React!!")
	)
);

ReactDOM.render(TitleComponent, document.getElementById('app'));