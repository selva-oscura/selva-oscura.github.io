const React = require('react');

const BaseH2 = function(props){
	return (
		<h2 className={props.className}>{props.text}</h2>
	)

}

module.exports = BaseH2;