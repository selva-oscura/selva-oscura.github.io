import React from 'react';
import Copyright from './Copyright';

const FindMe = () => {
  return (
    <div className="wrapper style4">
      <article className="container">
        <div className="row">
          <div className="12u">
            <h3>Find me on ...</h3>
            <ul className="social">
              <li>
                <a
                  href="https://www.linkedin.com/in/stlouisc/"
                  className="icon fa-linkedin"
                >
                  <span className="label">LinkedIn</span>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/selva-oscura"
                  className="icon fa-github"
                >
                  <span className="label">Github</span>
                </a>
              </li>
              <li>
                <a
                  href="https://codepen.io/stlouis_c/"
                  className="icon fa-codepen"
                >
                  <span className="label">Codepen</span>
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/1_selva_oscura"
                  className="icon fa-twitter"
                >
                  <span className="label">Twitter</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </article>
      <Copyright />
    </div>
  );
};

export default FindMe;
