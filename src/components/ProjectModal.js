import React from 'react';

const ProjectModal = (props) => {

	const handleCloseClick = (e) => {
		if(e.target.className==="modal"){
			props.unselectProject()
		}
	}
	const handleScreenshotsClick = () => {
		props.selectProjectScreenshots(`screenshots${props.project.target}`);
	}

	let modalContent = "modal-content";
	if(props.selectedProject===props.project.target && props.deselectedProject){
		modalContent = "modal-out";
	}

	return (
		<div
			className="modal"
			id={props.project.target}
			style={ props.selectedProject===props.project.target && !props.selectedProjectScreenshots ? {'display':'block'} : {'display':'none'}}
			onClick={handleCloseClick}
		>
			<div className={modalContent}>
				<div className="modal-header">
					<span 
						className="modal-close"
						onClick={props.unselectProject}
					>
						x
					</span>
					<h2>{props.project.name}</h2>
				</div>
				<div className="modal-body flex-grid-halves">
					<div className="col">
							<img src={`./public/assets/images/pic0${props.num%4+1}.jpg`} alt={`screenshot of ${props.project.name}`} />
					</div>
					<div className="col">
						<p><strong>Projects: </strong>
							{props.project.text.map((para, i) => (<span key={i}>{para}<br /></span>))}
						</p>
						<p><strong>Technologies: </strong>{props.project.technologies}</p>
					</div>
				</div>
				<div className="modal-footer">
					<div className="half text-left">
						{ props.project.web ? <p><a href={props.project.web} target={props.project.target}><span className="icon featured fa-globe"></span> Project Website</a></p> : " " }
						{ props.project.codepen ? <p><a href={props.project.codepen} target={props.project.target}><span className="icon featured fa-codepen"></span> Project Codepen</a></p> : " " }
					</div>
					<div className="half text-right">
						{ props.project.git ? <p><a href={props.project.git} target={props.project.target}><span className="icon featured fa-github"></span> Project Repo</a></p> : " " }
						{ props.project.screenshots ? <p><a target={`screenshots$${props.project.target}`} onClick={handleScreenshotsClick}>Project Screenshots</a></p> : " " }
					</div>
				</div>
			</div>
		</div>
	)
};

export default ProjectModal;