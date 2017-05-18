import React from 'react';

const FormElement = (props) => {
	switch(props.type){
		case "text":
		case "number":
		case "password":
		case "email":
			return (
				<div className={props.layout}>
					<label htmlFor={props.id}>{props.label}</label>
					<input
						type={props.type}
						name={props.id}
						id={props.id}
					/>
				</div>
			)
		case "textarea":
			let rows = props.rows || 6;
			return (
				<div className={props.layout}>
					<label htmlFor={props.id}>{props.label}</label>
					<textarea
						name={props.id}
						id={props.id}
						rows={rows}
					>
					</textarea>
				</div>
			)
		case "submit":
			return (
				<footer>
					<ul className="buttons">
						<li><p className="button special">{props.label}</p></li>
					</ul>
				</footer>
			)
		case "radio":
		case "checkbox":
		case "select":
		case "color":
		case "date":
		case "datetime-local":
		case "email":
		case "email":
		case "month":
		case "number":
		case "range":
		case "search":
		case "tel":
		case "time":
		case "url":
		case "week":
			return (
				<div className={layout}>
					<p>time to get around to making the {props.type} element</p>
				</div>
			)
		default: 
			console.log("ERROR ON FORM ELEMENT", props);
			return null;
	}
}

export default FormElement;


				// <ul className="actions">
				// 	<li>
				// 		<div 
				// 			id={props.id}
				// 			className="button big wide"
				// 			onClick={props.submitMailForm}
				// 		>
				// 			{props.text}
				// 		</div>
				// 	</li>
				// </ul>
