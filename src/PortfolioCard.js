var React = require('react');
// const PortfolioCardImage = require('./PortfolioCardImage.js');
// const PortfolioCardText = require('./PortfolioCardText.js');

const PortfolioCard = (props) => (
	<div className="card cardModalTrigger xs1 s2 m3 l4" id={props.target}>
		<img src={props.src} alt={props.name} />
		<div className="card-container">
			<h4><b>{props.name}</b></h4> 
			<p><strong>Technologies: </strong>{props.technologies}</p> 
		</div>
	</div>
);

module.exports = PortfolioCard;
