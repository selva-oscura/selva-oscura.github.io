const React = require('react');

const FormInput = function(props){
	if(props.type==='submit'){
		return(
			<input type='submit' value={props.text} id={props.name} />
		)
	}else if(props.type==='textarea'){
		return (
				<label htmlFor={props.name}>{props.text}
				<textarea name={props.name} id={props.name} required>
					{props.value}
				</textarea>
			</label>
		)
	}else{
		return (
			<label htmlFor={props.name}>{props.text}
				<input name={props.name} id={props.name} type={props.type} required />
			</label>
		)
	}
}

module.exports = FormInput;