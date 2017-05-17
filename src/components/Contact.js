import React from 'react';

const Contact = () => {
	return (
		<section className="wrapper style3 special container">

				<div className="content">
					<form>
						<div className="row 50%">
							<div className="6u 12u(mobile)">
								<label forHtml="name">Name</label>
								<input type="text" name="name" placeholder="Name" id="name" />
							</div>
							<div className="6u 12u(mobile)">
								<label forHtml="email">E-Mail</label>
								<input type="email" name="email" placeholder="Email" id="email" />
							</div>
						</div>
						<div className="row 50%">
							<div className="12u">
								<label forHtml="subject">Subject</label>
								<input type="text" name="subject" placeholder="Subject" id="subject" />
							</div>
						</div>
						<div className="row 50%">
							<div className="12u">
								<label forHtml="message">Message</label>
								<textarea name="message" placeholder="Message" rows="7" id="message"></textarea>
							</div>
						</div>
						<div className="row">
							<div className="12u">
								<ul className="buttons">
									<li><input type="submit" className="special" value="Send Message" /></li>
								</ul>
							</div>
						</div>
					</form>
				</div>

		</section>
	)
}

export default Contact;