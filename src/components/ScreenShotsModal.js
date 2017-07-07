import React from 'react';

const ScreenShotsModal = (props) => {

	const handleCloseClick = (e) => {
		if(e.target.className==="modal"){
			props.unselectProjectScreenshots()
		}
	}
	const handleNextClick = () => {
		props.updateScreenshotNum('increment');
	}

	const handlePreviousClick = () => {
		props.updateScreenshotNum('decrement');
	}

	let screenshotNum = props.screenshotNum % props.project.screenshots.length;

			// style={ props.selectedProjectScreenshots===props.project.target ? {'display':'block'} : {'display':'none'}}
	let modalContent = "modal-content";
	if(props.selectedProjectScreenshots===props.project.target && props.deselectedProjectScreenshots){
		modalContent = "modal-out";
	}

	return (
		<div
			className="modal"
			id={`screenshots${props.project.target}`}
			onClick={handleCloseClick}
		>
			<div className={modalContent}>
				<div className="modal-header">
					<span 
						className="modal-close"
						onClick={props.unselectProjectScreenshots}
					>
						x
					</span>
					<h2>{props.project.name}</h2>
				</div>
				<div className="screenshots-body flex-grid-uneven-thirds">
					<div
						className="col screenshot-nav previous"
						onClick={handlePreviousClick}
					>
						Previous
					</div>
					<div className="col main">
						<img 
							className="screenshot"
							src={`./public/assets/images/pic0${screenshotNum}.jpg`}
						/>
					</div>
					<div
						className="col screenshot-nav next"
						onClick={handleNextClick}
					>
						Next
					</div>
				</div>
			</div>
		</div>
	)
};

export default ScreenShotsModal;