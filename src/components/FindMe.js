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
							<li><a href="blah" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
							<li><a href="blah" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
							<li><a href="blah" className="icon fa-linkedin"><span className="label">LinkedIn</span></a></li>
							<li><a href="blah" className="icon fa-tumblr"><span className="label">Tumblr</span></a></li>
							<li><a href="blah" className="icon fa-google-plus"><span className="label">Google+</span></a></li>
							<li><a href="blah" className="icon fa-github"><span className="label">Github</span></a></li>
						</ul>
					</div>
				</div>
			</article>
			<Copyright />
		</div>
	)
}

export default FindMe;