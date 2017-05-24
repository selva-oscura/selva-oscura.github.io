import React from 'react';

const Contact = () => {
	return (
		<div className="wrapper style4">
			<article id="contact" className="container 75%">
				<header>
					<h2>Have me make stuff for you.</h2>
					<p>Ornare nulla proin odio consequat sapien vestibulum ipsum sed lorem.</p>
				</header>
				<div>
					<div className="row">
						<div className="12u">
							<form method="post" action="#">
								<div>
									<div className="row">
										<div className="6u 12u(mobile)">
											<input type="text" name="name" id="name" placeholder="Name" />
										</div>
										<div className="6u 12u(mobile)">
											<input type="text" name="email" id="email" placeholder="Email" />
										</div>
									</div>
									<div className="row">
										<div className="12u">
											<input type="text" name="subject" id="subject" placeholder="Subject" />
										</div>
									</div>
									<div className="row">
										<div className="12u">
											<textarea name="message" id="message" placeholder="Message"></textarea>
										</div>
									</div>
									<div className="row 200%">
										<div className="12u">
											<ul className="actions">
												<li><input type="submit" value="Send Message" /></li>
												<li><input type="reset" value="Clear Form" className="alt" /></li>
											</ul>
										</div>
									</div>
								</div>
							</form>
						</div>
					</div>
					<div className="row">
						<div className="12u">
							<hr />
							<h3>Find me on ...</h3>
							<ul className="social">
								<li><a href="blah" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
								<li><a href="blah" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
								<li><a href="blah" className="icon fa-dribbble"><span className="label">Dribbble</span></a></li>
								<li><a href="blah" className="icon fa-linkedin"><span className="label">LinkedIn</span></a></li>
								<li><a href="blah" className="icon fa-tumblr"><span className="label">Tumblr</span></a></li>
								<li><a href="blah" className="icon fa-google-plus"><span className="label">Google+</span></a></li>
								<li><a href="blah" className="icon fa-github"><span className="label">Github</span></a></li>
							</ul>
							<hr />
						</div>
					</div>
				</div>
				<footer>
					<ul id="copyright">
						<li>&copy; Untitled. All rights reserved.</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
					</ul>
				</footer>
			</article>
		</div>
	)
}

export default Contact;