import React from 'react';

const FormElement = props => {
  switch (props.type) {
    case 'text':
    case 'number':
    case 'password':
    case 'email':
      return (
        <div className={props.layout}>
          <label htmlFor={props.id}>
            {props.label}
          </label>
          <input
            type={props.type}
            name={props.id}
            id={props.id}
            placeholder={props.label}
            onChange={props.updateFormState}
            value={props.value}
          />
        </div>
      );
    case 'textarea':
      let rows = props.rows || 6;
      return (
        <div className={props.layout}>
          <label htmlFor={props.id}>
            {props.label}
          </label>
          <textarea
            name={props.id}
            id={props.id}
            placeholder={props.label}
            rows={rows}
            onChange={props.updateFormState}
            value={props.value}
          />
        </div>
      );
    case 'submit':
      let label;
      props.disabled ? (label = 'Sending....') : (label = props.label);
      return (
        <footer>
          <input
            type={props.type}
            id={props.id}
            className="button big"
            onClick={props.disabled ? null : props.submitMailForm}
            value={label}
          />
        </footer>
      );
    case 'radio':
    case 'checkbox':
    case 'select':
    case 'color':
    case 'date':
    case 'datetime-local':
    case 'month':
    case 'number':
    case 'range':
    case 'search':
    case 'tel':
    case 'time':
    case 'url':
    case 'week':
      return (
        <div className={props.layout}>
          <p>
            time to get around to making the {props.type} element
          </p>
        </div>
      );
    default:
      console.log('ERROR ON FORM ELEMENT', props);
      return null;
  }
};

export default FormElement;
