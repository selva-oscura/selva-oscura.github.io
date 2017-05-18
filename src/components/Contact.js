import React from 'react';
import FormElement from './FormElement';

const Contact = () => {
	return (
		<section className="wrapper style3 special container">

				<div className="content">
					<form>
						<div className="row 50%">
							<FormElement
								type="text"
								name="name"
								id="name"
								label="Name"
								layout="6u 12u(mobile)"
							/>
							<FormElement
								type="email"
								name="email"
								id="email"
								label="E-Mail"
								layout="6u 12u(mobile)"
							/>
						</div>
						<div className="row 50%">
							<FormElement
								type="text"
								name="subject"
								id="subject"
								label="Subject"
								layout="12u"
							/>
						</div>
						<div className="row 50%">
							<FormElement
								type="textarea"
								name="message"
								id="message"
								label="Message"
								layout="12u"
								rows="7"
							/>
						</div>
						<div className="row">
							<FormElement
								type="submit"
								name="submit"
								id="submit"
								label="Send Message"
							/>
						</div>
					</form>
				</div>

		</section>
	)
}

export default Contact;

							// <div className="6u 12u(mobile)">
							// 	<label forHtml="name">Name</label>
							// 	<input type="text" name="name" placeholder="Name" id="name" />
							// </div>
							// <div className="6u 12u(mobile)">
							// 	<label forHtml="email">E-Mail</label>
							// 	<input type="email" name="email" placeholder="Email" id="email" />
							// </div>
							// <div className="12u">
							// 	<label forHtml="subject">Subject</label>
							// 	<input type="text" name="subject" placeholder="Subject" id="subject" />
							// </div>
							// <div className="12u">
							// 	<label forHtml="message">Message</label>
							// 	<textarea name="message" placeholder="Message" rows="7" id="message"></textarea>
							// </div>

							// <div className="12u">
							// 	<ul className="buttons">
							// 		<li><input type="submit" className="special" value="Send Message" /></li>
							// 	</ul>
							// </div>