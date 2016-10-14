var React = require('react');
// const PortfolioCardImage = require('./PortfolioCardImage.js');
// const PortfolioCardText = require('./PortfolioCardText.js');

const PortfolioModal = (props) => {
	var modalClass = "modal " + props.target;
	return(
			<div className="modal-content">
				<div className="modal-header">
					<span className="close">x</span>
					<h2>{props.name}</h2>
				</div>
				<div className="modal-body">
					<p>{props.text}</p>
					<p><strong>Technologies: </strong>{props.technologies}</p> 
				</div>
				<div className="modal-footer">
					<div className="half">
						{ props.web ? <a href={props.web} target={props.target}>Project Website</a> : " " }
					</div>
					<div className="half text-right">
						{ props.repo ? <a href={props.repo} target={props.target}>Project Repo</a> : " " }
					</div>
				</div>
			</div>
	)
};

module.exports = PortfolioModal;
		// <div className={modalClass}>
		// </div>