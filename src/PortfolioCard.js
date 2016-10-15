var React = require('react');

const PortfolioCard = React.createClass({
	showModal: (target) => {
		var targeted = document.getElementById(target);
		targeted.style.display = "block";
	},
	render: function(){	
		return(
			<div className="card-container xs1 s2 m3 l4" onClick={this.showModal.bind(this, this.props.target)}>
				<div className="card">
					<img src={this.props.src} alt={this.props.name} />
					<div className="card-text-space">
						<h4><b>{this.props.name}</b></h4> 
						<p><strong>Technologies: </strong>{this.props.technologies}</p> 
					</div>
				</div>
			</div>
		)
	}
});

module.exports = PortfolioCard;
