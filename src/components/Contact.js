import React, {Component} from 'react';
import FormElement from './FormElement';
import Errors from './Errors';
import Messages from './Messages';

const Contact = (props) => {
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
							value={props.form.name}
							updateFormState={props.updateFormState}
						/>
						<FormElement
							type="email"
							name="email"
							id="email"
							label="E-Mail"
							layout="6u 12u(mobile)"
							value={props.form.email}
							updateFormState={props.updateFormState}
						/>
					</div>
					<div className="row 50%">
						<FormElement
							type="text"
							name="subject"
							id="subject"
							label="Subject"
							layout="12u"
							value={props.form.subject}
							updateFormState={props.updateFormState}
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
							value={props.form.message}
							updateFormState={props.updateFormState}
						/>
					</div>
					<div className="row">
						<FormElement
							type="submit"
							name="submit"
							id="submit"
							label="Send Message"
							submitMailForm={props.submitMailForm}
						/>
					</div>
				</form>
				{props.form.errors.length>0 && <Errors errors={props.form.errors} />}
				{props.form.responses.length>0 && <Messages messages={props.form.responses} />}
			</div>

		</section>
	)
}

export default Contact;
