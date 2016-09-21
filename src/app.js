var React = require('react');
var ReactDOM = require('react-dom');

var div = React.DOM.div;
var h1 = React.DOM.h1;

var MyFirstComponent = (
 div(null,
     h1(null, "Hello React!!")
 )
);

ReactDOM.render(MyFirstComponent, document.getElementById('app')
    );
