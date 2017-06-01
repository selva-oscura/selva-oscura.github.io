import React from 'react';

const ProjectModal = (props) => {
	const handleClick = (e) => {
		if(e.target.className==="modal"){
			props.unselectProject()
		}
	}
	return (
		<div
			className="modal"
			id={props.project.target}
			style={ props.selectedProject===props.project.target ? {'display':'block'} : {'display':'none'}}
			onClick={handleClick}
		>
			<div className="modal-content">
				<div className="modal-header">
					<span 
						className="modal-close"
						onClick={props.unselectProject}
					>
						x
					</span>
					<h2>{props.project.name}</h2>
				</div>
				<div className="modal-body">
					<p>
						{props.project.text.map((para, i) => (<span key={i}>{para}<br /></span>))}
					</p>
					<p><strong>Technologies: </strong>{props.project.technologies}</p> 
				</div>
				<div className="modal-footer">
					<div className="half text-left">
						{ props.project.web ? <a href={props.project.web} target={props.project.target}><span className="icon featured fa-globe"></span> Project Website</a> : " " }
						{ props.project.codepen ? <a href={props.project.codepen} target={props.project.target}><span className="icon featured fa-codepen"></span> Project Codepen</a> : " " }
					</div>
					<div className="half text-right">
						{ props.project.git ? <a href={props.project.git} target={props.project.target}><span className="icon featured fa-github"></span> Project Repo</a> : " " }
					</div>
				</div>
			</div>
		</div>
	)
};

export default ProjectModal;