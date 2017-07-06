import React from 'react';

const ScreenShotsModal = (props) => {

	const handleClick = (e) => {
		if(e.target.className==="modal"){
			props.unselectProject()
		}
	}

	let modalContent = "modal-content";
	if(props.selectedProject===props.project.target && props.deselectedProject){
		modalContent = "modal-out";
	}

	return (
		<div
			className="modal"
			id={props.project.target}
			style={ props.selectedProject===props.project.target ? {'display':'block'} : {'display':'none'}}
			onClick={handleClick}
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
				<div className="screenshots-body flex-grid-uneven-thirds">
					<div className="col screenshot-nav previous">

					</div>
					<div className="col">

					</div>
				</div>
					<div className="col screenshot-nav next">

					</div>
				<div className="modal-footer">
					<div className="half text-left">
						{ props.project.web ? <p><a href={props.project.web} target={props.project.target}><span className="icon featured fa-globe"></span> Project Website</a></p> : " " }
						{ props.project.codepen ? <p><a href={props.project.codepen} target={props.project.target}><span className="icon featured fa-codepen"></span> Project Codepen</a></p> : " " }
					</div>
					<div className="half text-right">
						{ props.project.git ? <p><a href={props.project.git} target={props.project.target}><span className="icon featured fa-github"></span> Project Repo</a></p> : " " }
					</div>
				</div>
			</div>
		</div>
	)
};

export default ScreenShotsModal;