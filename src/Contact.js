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
		formFields.forEach(function(field){
			form.push(<FormInput type={field.type} name={field.name} text={field.text} />);
		});
		return (
			<section className='contact'>
				<div className='container'>
					<div className='half'>
						<form>{form}</form>
					</div>
				</div>
			</section>
		)		
	}
})

module.exports = Contact;