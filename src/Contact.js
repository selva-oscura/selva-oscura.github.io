const React = require('react');

const Contact = React.createClass({
	render: function(){
		var formFields = [
			{
				type: 'text',
				text: 'Name',
				name: 'name',
				required: true
			},			{
				type: 'email',
				text: 'E-Mail Address',
				name: 'email',
				required: true
			},			{
				type: 'tel',
				text: 'Telephone Number',
				name: 'phone',
				required: true
			},			{
				type: 'textarea',
				text: 'Message',
				name: 'message',
				required: true
			},			{
				type: 'submit',
				text: 'SUBMIT',
				name: 'submit',
				required: 
			}
		]
		return (
			<section className='contact'>
				<div className='container'>
					<div className='half'>
						<form></form>
					</div>
					<div className='half'>
					</div>
				</div>
			</section>
		)		
	}
})

module.exports = Contact;