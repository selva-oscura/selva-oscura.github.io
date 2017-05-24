import React from 'react';
import FindMe from './FindMe';
import Copyright from './Copyright';

const Contact = () => {
	return (
		<div className="wrapper style4">
			<article id="contact" className="container 75%">
				<header>
					<h2>Have me make stuff for you.</h2>
					<p>Ornare nulla proin odio consequat sapien vestibulum ipsum sed lorem.</p>
				</header>
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
				<FindMe />
			</article>
			<Copyright />
		</div>
	)
}

export default Contact;
