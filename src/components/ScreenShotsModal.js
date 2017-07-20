import React from 'react';

const ScreenShotsModal = props => {
  const handleCloseClick = e => {
    if (e.target.className === 'modal modal-screenshots') {
      props.unselectProjectScreenshots();
    }
  };
  const handleNextClick = () => {
    props.updateScreenshotNum('increment');
  };

  const handlePreviousClick = () => {
    props.updateScreenshotNum('decrement');
  };

  let screenshotNum = props.screenshotNum % props.project.screenshots.length;
  let screenshot = {
    backgroundImage: `url(./public/assets/images/${props.project.screenshots[
      screenshotNum
    ]})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  };

  let modalContent = 'modal-content';
  if (
    props.selectedProjectScreenshots === props.project.target &&
    props.deselectedProjectScreenshots
  ) {
    modalContent = 'modal-out';
  }

  return (
    <div
      className="modal modal-screenshots"
      id={`screenshots${props.project.target}`}
      style={
        props.selectedProjectScreenshots ===
        `screenshots${props.project.target}`
          ? { display: 'block' }
          : { display: 'none' }
      }
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
          <h3>
            {props.project.name}
          </h3>
        </div>
        <div className="screenshots-body flex-grid-uneven-thirds">
          <div
            className="col screenshot-nav previous"
            onClick={handlePreviousClick}
          >
            <p className="icon fa-chevron-left" />
          </div>
          <div className="col main" style={screenshot} />
          <div className="col screenshot-nav next" onClick={handleNextClick}>
            <p className="icon fa-chevron-right" />
          </div>
        </div>
        <div className="modal-footer screenshot-caption">
          <p>
            {props.project.screenshotCaptions[screenshotNum]}
          </p>
          <div className="half text-left">
            {props.project.web
              ? <p>
                  <a href={props.project.web} target={props.project.target}>
                    <span className="icon featured fa-globe" /> Project Website
                  </a>
                </p>
              : ' '}
            {props.project.codepen
              ? <p>
                  <a href={props.project.codepen} target={props.project.target}>
                    <span className="icon featured fa-codepen" /> Project
                    Codepen
                  </a>
                </p>
              : ' '}
          </div>
          <div className="half text-right">
            {props.project.git
              ? <p>
                  <a href={props.project.git} target={props.project.target}>
                    <span className="icon featured fa-github" /> Project Repo
                  </a>
                </p>
              : ' '}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScreenShotsModal;
