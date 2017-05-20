import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import {Banner, Contact, Footer, Header, Main, ProjectModals} from './components/index';

class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			form: {
				name: "",
				email: "",
				subject: "",
				message: "",
				responses: [],
				errors: [],
			}
		}
		this.updateFormState = this.updateFormState.bind(this);
		this.submitMailForm = this.submitMailForm.bind(this);
	}
	updateFormState(e){
		let form = this.state.form;
		if(e.target.type === "checkbox"){
			form[e.target.id]=!form[e.target.id];
		}else if(e.target.type==="radio"){
			form[e.target.name]=e.target.id;
		}else{
			form[e.target.id]=e.target.value;
		}
		form.responses=[];
		form.errors=[];
		this.setState({form});
	}
	submitMailForm(e){
		e.preventDefault();
		let form = this.state.form;
		let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		if(form.name.length===0){
			form.errors.push("Missing Name");
		}
		if(form.email.length===0){
			form.errors.push("Missing E-Mail Address");
		}else if(!form.email.match(emailRegex)){
			form.errors.push("Improperly-Formatted E-Mail Address");
		}
		if(form.subject.length===0){
			form.errors.push("Missing Subject");
		}
		if(form.message.length===0){
			form.errors.push("Missing Message");
		}
		if(form.errors.length===0){
			form.errors = [];
			form.responses.push("Submitting....");
			form.responses.push(`Name: ${form.name}`);
			form.responses.push(`E-Mail: ${form.email}`);
			form.responses.push(`Message: ${form.message}`);
			form.name = "";
			form.email = "";
			form.message = "";
			form.subject = "";
		}else{
			if(form.errors.length===1){
				form.errors.unshift("Can Not Submit the Form, Due to the Following Problem:");
			}else{
				form.errors.unshift("Can Not Submit the Form, Due to the Following Problems:");
			}
		}
		this.setState({form});
	}
	render(){
		return(
			<div id="page-wrapper">
				<Header />
				<Banner />
				<Main />
				<ProjectModals />

				<section id="cta">

					<header>
						<h2>Ready to do something or other?</h2>
						<p>Proin a ullamcorper elit, et sagittis turpis integer ut fermentum.</p>
					</header>
					<footer>
						<ul className="buttons">
							<li><a href="#" className="button special">Take My Money</a></li>
							<li><a href="#" className="button">LOL Wut</a></li>
						</ul>
					</footer>

				</section>

				<Contact 
					updateFormState={this.updateFormState}
					submitMailForm={this.submitMailForm}
					form={this.state.form}
				/>
				<Footer />

			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('App'));
