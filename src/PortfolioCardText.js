const React = require('react');

const PortfolioCardText = (props) => {
	var text = [];
	props.text.forEach(function(para,i){
		text.push(<p key={i}>{para}</p>)
	})
	return (
		<div>
			<h3>
				<a href={props.href} target={props.target}>{props.name}</a>
			</h3>
			{text}
			<p>
				<strong>Technologies: </strong>
				{props.technologies}
			</p>
		</div>
	)
}

module.exports = PortfolioCardText;