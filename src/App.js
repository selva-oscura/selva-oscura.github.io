import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
	constructor(props){
		super(props);
		this.state = {};
		console.log('kilroy here');
	}
	render(){
		return(
			<div>
				<h1>APP IS HERE!</h1>
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('App'));
