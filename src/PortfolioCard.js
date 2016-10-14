var React = require('react');
// const PortfolioCardImage = require('./PortfolioCardImage.js');
// const PortfolioCardText = require('./PortfolioCardText.js');

const PortfolioCard = (props) => {
	return(
		<div className="card-container xs1 s2 m3 l4">
			<div className="card cardModalTrigger" id={props.target}>
				<img src={props.src} alt={props.name} />
				<div className="card-text-space">
					<h4><b>{props.name}</b></h4> 
					<p><strong>Technologies: </strong>{props.technologies}</p> 
				</div>
			</div>
		</div>
	)
};

module.exports = PortfolioCard;
