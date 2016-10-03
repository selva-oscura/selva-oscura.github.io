const React = require('react');

const PortfolioCardImage = (props) => (
	<img src={props.src} alt={props.name} />
)

module.exports = PortfolioCardImage;