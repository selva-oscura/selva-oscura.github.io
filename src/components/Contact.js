import React from 'react';
import FormElement from './FormElement';
import Messages from './Messages';
import Errors from './Errors';
import FindMe from './FindMe';
import Copyright from './Copyright';

const Contact = (props) => {
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
									<FormElement
										layout="6u 12u(mobile)"
										type="text"
										name="name"
										id="name"
										label="Name"
										value={props.form.name}
										updateFormState={props.updateFormState}
									/>
									<FormElement
										layout="6u 12u(mobile)"
										type="email"
										name="email"
										id="email"
										label="E-Mail"
										value={props.form.email}
										updateFormState={props.updateFormState}
									/>
								</div>
								<div className="row">
									<FormElement
										layout="12u"
										type="text"
										name="subject"
										id="subject"
										label="Subject"
										value={props.form.subject}
										updateFormState={props.updateFormState}
									/>
								</div>
								<div className="row">
									<FormElement
										layout="12u"
										type="textarea"
										name="message"
										id="message"
										label="Message"
										value={props.form.message}
										updateFormState={props.updateFormState}
									/>
								</div>
								{props.form.errors.length>0 && <Errors errors={props.form.errors} />}
								{props.form.responses.length>0 && <Messages messages={props.form.responses} />}
								<div className="row 200%">
									<FormElement
										layout="12u"
										type="submit"
										name="submit"
										id="submit"
										label="Send Message"
										disabled={props.form.submitting}
										submitMailForm={props.submitMailForm}
									/>
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
