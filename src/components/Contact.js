import React from 'react';
import FormElement from './FormElement';
import Messages from './Messages';
import Errors from './Errors';

const Contact = props => {
  return (
    <div className="wrapper contact-wrapper">
      <article id="contact" className="container 75%">
        <header>
          <h3>Interested in having me work for you?</h3>
          <p>
            Please e-mail me and let&rsquo;s start a conversation about what I
            can do for your business.
          </p>
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
                    rows="4"
                    value={props.form.message}
                    updateFormState={props.updateFormState}
                  />
                </div>
                {props.form.errors.length > 0 &&
                  <Errors errors={props.form.errors} />}
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
                {props.form.responses.length > 0 &&
                  <Messages messages={props.form.responses} />}
              </div>
            </form>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Contact;
