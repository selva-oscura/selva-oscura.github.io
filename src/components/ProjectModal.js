import React from 'react';

const ProjectModal = (props) => {
	return (
		<div
			className="modal"
			id={props.project.target}
			style={ props.selectedProject===props.project.target ? {'display':'block'} : {'display':'none'}}
		>
			<div className="modal-content">
				<div className="modal-header">
					<span 
						className="modal-close"
					>
						x
					</span>
					<h2>{props.project.name}</h2>
				</div>
				<div className="modal-body">
					<p>{props.project.text}</p>
					<p><strong>Technologies: </strong>{props.project.technologies}</p> 
				</div>
				<div className="modal-footer">
					<div className="half">
						{ props.project.web ? <a href={props.project.web} target={props.project.target}>Project Website</a> : " " }
					</div>
					<div className="half text-right">
						{ props.project.git ? <a href={props.project.git} target={props.project.target}>Project Repo</a> : " " }
					</div>
				</div>
			</div>
		</div>
	)
};

export default ProjectModal;
