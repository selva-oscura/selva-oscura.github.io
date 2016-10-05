const React = require('react');

const BaseP = function(props){
	return (
		<p className={props.className}>{props.text}</p>
	)

}

module.exports = BaseP;