import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Banner, Contact, Footer, Header, Main, ProjectModals} from './components/index';

class App extends Component {
	constructor(props){
		super(props);
		this.state = {};
	}
	render(){
		return(
			<body className="index">
				<div id="page-wrapper">
					<Header />
					<Banner />
					<Main />
					<ProjectModals />

					<section id="cta">

						<header>
							<h2>Ready to do <strong>something</strong>?</h2>
							<p>Proin a ullamcorper elit, et sagittis turpis integer ut fermentum.</p>
						</header>
						<footer>
							<ul className="buttons">
								<li><a href="#" className="button special">Take My Money</a></li>
								<li><a href="#" className="button">LOL Wut</a></li>
							</ul>
						</footer>

					</section>

					<Contact />
					<Footer />

				</div>
			</body>

		)
	}
}

ReactDOM.render(<App />, document.getElementById('App'));
