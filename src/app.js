var React = require('react');
var ReactDOM = require('react-dom');

var MyTitle = React.createElement({
	render () {
		return (
			div(
				null, 
				h1(null, "Hello world")
			)
		)
	}
});

ReactDOM.render(MyTitle, document.getElementById('app'));