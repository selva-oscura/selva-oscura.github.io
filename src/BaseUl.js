const React = require('react');

const BaseUl = function(props){
	var listItems = [];
	props.items.forEach(function(item, i){
		listItems.push(<li key={i}>{item}</li>)
	});
	return (
		<ul className={props.className}>
			{listItems}
		</ul>
	)
}

module.exports = BaseUl;