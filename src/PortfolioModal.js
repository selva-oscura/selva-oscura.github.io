var React = require('react');

const PortfolioModal = React.createClass({
	hideModal: (target) => {
		var targeted = document.getElementById(target);
		targeted.style.display = "none";
	},
	render: function(){	
		return (
			<div className="modal" id={this.props.target}>
				<div className="modal-content">
					<div className="modal-header">
						<span className="modal-close" onClick={this.hideModal.bind(this,this.props.target)}>x</span>
						<h2>{this.props.name}</h2>
					</div>
					<div className="modal-body">
						<p>{this.props.text}</p>
						<p><strong>Technologies: </strong>{this.props.technologies}</p> 
					</div>
					<div className="modal-footer">
						<div className="half">
							{ this.props.web ? <a href={this.props.web} target={this.props.target}>Project Website</a> : " " }
						</div>
						<div className="half text-right">
							{ this.props.repo ? <a href={this.props.repo} target={this.props.target}>Project Repo</a> : " " }
						</div>
					</div>
				</div>
			</div>
		)
	}
});

module.exports = PortfolioModal;