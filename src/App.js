import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import { Nav, Home, Profile, Portfolio, Contact, FindMe } from './components/index';

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
			deselectedProject: false,
			selectedProjectScreenshots: "",
			deselectedProjectScreenshots: false,
			screenshotNum: 0,
		}
		this.updateFormState = this.updateFormState.bind(this);
		this.submitMailForm = this.submitMailForm.bind(this);
		this.setProjectFilters = this.setProjectFilters.bind(this);
		this.selectProject = this.selectProject.bind(this);
		this.unselectProject = this.unselectProject.bind(this);
		this.selectedProjectScreenshots = this.selectedProjectScreenshots.bind(this);
		this.unselectProjectScreenshots = this.unselectProjectScreenshots.bind(this);
		this.updateScreenshotNum = this.updateScreenshotNum.bind(this);
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
	validateMail(e){
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
			// no errors
			form.errors = [];
			form.submitting = true;
			this.setState({form});
			return true;
		}else{		
			// errors
			if(form.errors.length===1){
				// singular 
				form.errors.unshift("Can Not Submit the Form, Due to the Following Problem:");
			}else{			
				// plural
				form.errors.unshift("Can Not Submit the Form, Due to the Following Problems:");
			}
			this.setState({form});
			return false
		}
	}
	sendMail(){
		let form = this.state.form;
		axios.post('https://formspree.io/stlouis_c@yahoo.com',{
			from: `${form.name} (${form.email})`,
			subject: form.subject,
			message: form.message
		}).then((res) => {
			console.log('res', res);
			form.name = "";
			form.email = "";
			form.message = "";
			form.subject = "";
			form.submitting = false;
			form.responses = ["Message successfully sent", "I'll contact you soon."];
			this.setState({form});
			setTimeout(()=> {
				let form = this.state.form;
				form.responses = [];
				this.setState({form});
			}, 10000);
		}).catch((err) => {
			console.log('err', err);
			form.submitting = false;
			form.errors = ["I'm sorry.  There was an error sending the message.", "Please feel free to contact me directly at stlouisc@gmail.com"];
			this.setState({form});
		});
	}
	submitMailForm(e){
		e.preventDefault();
		let validated = this.validateMail(e);
		if(validated){
			this.sendMail();
		}
	}
	setProjectFilters(projectFilter){
		let projectFilters = this.state.projectFilters;
		if(projectFilter[0]==="all" || projectFilter[0]==="reset"){
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
		let deselectedProject = this.state.deselectedProject;
		deselectedProject = true;
		this.setState({deselectedProject});
		setTimeout(() => {
			let {selectedProject, deselectedProject} = this.state;
			selectedProject = "";
			deselectedProject = false;
			this.setState({selectedProject, deselectedProject});
		}, 400)
	}
	selectedProjectScreenshots(clickedProject){
		let selectedProjectScreenshots = this.state.selectedProjectScreenshots;
		selectedProjectScreenshots = clickedProject;
		this.setState({selectedProjectScreenshots})
	}
	unselectProjectScreenshots(){
		let deselectedProjectScreenshots = this.state.deselectedProjectScreenshots;
		deselectedProjectScreenshots = true;
		this.setState({deselectedProjectScreenshots});
		setTimeout(() => {
			let {selectedProjectScreenshots, deselectedProjectScreenshots, screenshotNum} = this.state;
			selectedProjectScreenshots = "";
			deselectedProjectScreenshots = false;
			screenshotNum = 0;
			this.setState({selectedProjectScreenshots, deselectedProjectScreenshots});
		}, 400)
	}
	updateScreenshotNum(change){
		let screenshotNum = this.state.screenshotNum;
		if(change === "increment"){
			screenshotNum = screenshotNum+1;
		}else{
			screenshotNum = screenshotNum - 1;
		}
		this.setState({screenshotNum});
	}
	render(){
		return(
			<div>

				<Nav />

				<Home />

				<Profile 
					selectProject={this.selectProject}
				/>

				<Portfolio
					projectFilters={this.state.projectFilters}
					setProjectFilters={this.setProjectFilters}
					selectedProject={this.state.selectedProject}
					selectProject={this.selectProject}
					unselectProject={this.unselectProject}
					deselectedProject={this.state.deselectedProject}
					selectedProjectScreenshots={this.state.selectedProjectScreenshots}
					selectProject={this.selectedProjectScreenshots}
					unselectProjectScreenshots={this.unselectProjectScreenshots}
					deselectedProjectScreenshots={this.state.deselectedProjectScreenshots}
					screenshotNum={this.state.screenshotNum}
					updateScreenshotNum={this.updateScreenshotNum}
				/>

				<Contact
					form={this.state.form}
					updateFormState={this.updateFormState}
					submitMailForm={this.submitMailForm}
				/>

				<FindMe />

			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('App'));
 