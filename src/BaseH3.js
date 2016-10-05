const React = require('react');

const BaseH3 = function(props){
	return (
		<h3 className={props.className}>{props.text}</h3>
	)

}

module.exports = BaseH3;