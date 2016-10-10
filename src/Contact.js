const React = require('react');
const FormInput = require('./FormInput.js');

const Contact = React.createClass({
	render: function(){
		var formFields = [
			{
				type: 'text',
				text: 'Name',
				name: 'name'
			},{
				type: 'email',
				text: 'E-Mail Address',
				name: 'email'
			}, {
				type: 'tel',
				text: 'Telephone Number',
				name: 'phone'
			},{
				type: 'textarea',
				text: 'Message',
				name: 'message'
			},{
				type: 'submit',
				text: 'SUBMIT',
				name: 'submit'
			}
		]
		const form = [];
		formFields.forEach(function(field, i){
			form.push(<FormInput key={i} type={field.type} name={field.name} text={field.text} />);
		});
		return (
			<section className='contact'>
				<div className='dark-band'></div>
				<div className='container'>
					<div className='half'>
						<form>{form}</form>
					</div>
					<div className='half' style={{paddingLeft:'36px'}}>
						<p>Want to get in touch with me? Be it to request more info about me and my experience or to ask for my resume, just drop me a line.</p>
						<p>I'll reply ASAP</p>
					</div>
				</div>
			</section>
		)		
	}
})

module.exports = Contact;