import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { Nav, Home, Profile, Portfolio, Contact } from './components/index';

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
				submitting: false,
			},
			projectFilters: [],
			selectedProject: "",
		}
		this.updateFormState = this.updateFormState.bind(this);
		this.submitMailForm = this.submitMailForm.bind(this);
		this.setProjectFilters = this.setProjectFilters.bind(this);
		this.selectProject = this.selectProject.bind(this);
		this.unselectProject = this.unselectProject.bind(this);
	}
	updateFormState(e){
		console.log('change detected')
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
		console.log(this.state.form)
	}
	submitMailForm(e){
		e.preventDefault();
		let form = this.state.form;
		form.errors = [];
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
			form.submitting = true;
		}else{
			if(form.errors.length===1){
				form.errors.unshift("Can Not Submit the Form, Due to the Following Problem:");
			}else{
				form.errors.unshift("Can Not Submit the Form, Due to the Following Problems:");
			}
		}
		this.setState({form});
		console.log(this.state.form)
	}
	setProjectFilters(projectFilter){
		let projectFilters = this.state.projectFilters;
		console.log('projectFilter in setProjectFilters', projectFilter);
		if(projectFilter[0]==="all"){
			projectFilters = [];
		}else{
			if(projectFilters.includes(projectFilter[0])){
				projectFilters = projectFilters.filter((filterInState) => ( filterInState !==projectFilter[0] ));
			}else{
				projectFilters.push(projectFilter[0])
			}
		}
		this.setState({projectFilters});
	}
	selectProject(clickedProject){
		let selectedProject = this.state.selectedProject;
		selectedProject = clickedProject;
		this.setState({selectedProject})
	}
	unselectProject(){
		let selectedProject = this.state.selectedProject;
		selectedProject = "";
		this.setState({selectedProject})
	}
	render(){
		return(
			<div>

				<Nav />

				<Home />

				<Profile />

				<Portfolio
					projectFilters={this.state.projectFilters}
					setProjectFilters={this.setProjectFilters}
					selectedProject={this.state.selectedProject}
					selectProject={this.selectProject}
					unselectProject={this.unselectProject}
				/>

				<Contact
					form={this.state.form}
					updateFormState={this.updateFormState}
					submitMailForm={this.submitMailForm}
				/>

			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('App'));
 