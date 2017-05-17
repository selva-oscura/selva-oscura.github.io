import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Contact, Footer, Header, Main, Portfolio, ProjectModals} from './components/index';

class App extends Component {
	constructor(props){
		super(props);
		this.state = {};
	}
	render(){
		return(
			<div>
				<Header />
				<Main />
				<Portfolio />
				<Contact />
				<Footer />
				<ProjectModals />
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('App'));

