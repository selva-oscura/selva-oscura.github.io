var React = require('react');
const PortfolioCardImage = require('./PortfolioCardImage.js');
const PortfolioCardText = require('./PortfolioCardText.js');

const PortfolioCard = (props) => (
	<div className='card'>
		<PortfolioCardImage src={props.src} name={props.name} />
		<PortfolioCardText href={props.href} target={props.target} name={props.name} text={props.text} technologies={props.technologies} />
	</div>
)

module.exports = PortfolioCard;