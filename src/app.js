var React = require('react');
var ReactDOM = require('react-dom');
var MyTitle = require('./MyTitle.js');
// import { MyTitle } from './MyTitle.js';

var div = React.DOM.div;
var h1 = React.DOM.h1;

var MyTitleFactory = React.createFactory(MyTitle);

var TitleComponent = (
	div(null,
		React.createElement(MyTitle, null),
		React.createElement(MyTitle, {title:"Hello World"}),
		React.createElement(MyTitle, {color:"#4078C0"}),
		React.createElement(MyTitle, {color:"#006400", title:"Hello World with different colour"}),
		MyTitleFactory(null),
		MyTitleFactory({color:"#4078C0", title:"Now with Factory!"})
	)
);

ReactDOM.render(TitleComponent, document.getElementById('app'));