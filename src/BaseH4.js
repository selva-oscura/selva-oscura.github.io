const React = require('react');

const BaseH4 = function(props){
	return (
		<h4 className={props.className}>{props.text}</h4>
	)

}

module.exports = BaseH4;