const React = require('react');

const BaseH6 = function(props){
	return (
		<h6 className={props.className}>{props.text}</h6>
	)

}

module.exports = BaseH6;