import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// import {} from './components/index';

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
		console.log('this.state', this.state);
		// this.updateFormState = this.updateFormState.bind(this);
		// this.submitMailForm = this.submitMailForm.bind(this);
	}
	// updateFormState(e){
	// 	let form = this.state.form;
	// 	if(e.target.type === "checkbox"){
	// 		form[e.target.id]=!form[e.target.id];
	// 	}else if(e.target.type==="radio"){
	// 		form[e.target.name]=e.target.id;
	// 	}else{
	// 		form[e.target.id]=e.target.value;
	// 	}
	// 	form.responses=[];
	// 	form.errors=[];
	// 	this.setState({form});
	// }
	// submitMailForm(e){
	// 	e.preventDefault();
	// 	let form = this.state.form;
	// 	let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	// 	if(form.name.length===0){
	// 		form.errors.push("Missing Name");
	// 	}
	// 	if(form.email.length===0){
	// 		form.errors.push("Missing E-Mail Address");
	// 	}else if(!form.email.match(emailRegex)){
	// 		form.errors.push("Improperly-Formatted E-Mail Address");
	// 	}
	// 	if(form.subject.length===0){
	// 		form.errors.push("Missing Subject");
	// 	}
	// 	if(form.message.length===0){
	// 		form.errors.push("Missing Message");
	// 	}
	// 	if(form.errors.length===0){
	// 		form.errors = [];
	// 		form.responses.push("Submitting....");
	// 		form.responses.push(`Name: ${form.name}`);
	// 		form.responses.push(`E-Mail: ${form.email}`);
	// 		form.responses.push(`Message: ${form.message}`);
	// 		form.name = "";
	// 		form.email = "";
	// 		form.message = "";
	// 		form.subject = "";
	// 	}else{
	// 		if(form.errors.length===1){
	// 			form.errors.unshift("Can Not Submit the Form, Due to the Following Problem:");
	// 		}else{
	// 			form.errors.unshift("Can Not Submit the Form, Due to the Following Problems:");
	// 		}
	// 	}
	// 	this.setState({form});
	// }
	render(){
		return(
			<div>
				<nav id="nav">
					<ul className="container">
						<li><a href="#top">Top</a></li>
						<li><a href="#work">Work</a></li>
						<li><a href="#portfolio">Portfolio</a></li>
						<li><a href="#contact">Contact</a></li>
					</ul>
				</nav>

				<div className="wrapper style1 first">
					<article className="container" id="top">
						<div className="row">
							<div className="4u 12u(mobile)">
								<span className="image fit"><img src="./public/images/pic00.jpg" alt="" /></span>
							</div>
							<div className="8u 12u(mobile)">
								<header>
									<h1>Hi. I'm <strong>Jane Doe</strong>.</h1>
								</header>
								<p>And this is <strong>Miniport</strong>, a free, fully responsive HTML5 site template designed by <a href="http://twitter.com/ajlkn">AJ</a> for <a href="http://html5up.net">HTML5 UP</a> &amp; released under the <a href="http://html5up.net/license">CCA license</a>.</p>
								<a href="#work" className="button big scrolly">Learn about what I do</a>
							</div>
						</div>
					</article>
				</div>


				<div className="wrapper style2">
					<article id="work">
						<header>
							<h2>Here's all the stuff I do.</h2>
							<p>Odio turpis amet sed consequat eget posuere consequat.</p>
						</header>
						<div className="container">
							<div className="row">
								<div className="4u 12u(mobile)">
									<section className="box style1">
										<span className="icon featured fa-comments-o"></span>
										<h3>Consequat lorem</h3>
										<p>Ornare nulla proin odio consequat sapien vestibulum ipsum primis sed amet consequat lorem dolore.</p>
									</section>
								</div>
								<div className="4u 12u(mobile)">
									<section className="box style1">
										<span className="icon featured fa-camera-retro"></span>
										<h3>Lorem dolor tempus</h3>
										<p>Ornare nulla proin odio consequat sapien vestibulum ipsum primis sed amet consequat lorem dolore.</p>
									</section>
								</div>
								<div className="4u 12u(mobile)">
									<section className="box style1">
										<span className="icon featured fa-thumbs-o-up"></span>
										<h3>Feugiat posuere</h3>
										<p>Ornare nulla proin odio consequat sapien vestibulum ipsum primis sed amet consequat lorem dolore.</p>
									</section>
								</div>
							</div>
						</div>
						<footer>
							<p>Lorem ipsum dolor sit sapien vestibulum ipsum primis?</p>
							<a href="#portfolio" className="button big scrolly">See some of my recent work</a>
						</footer>
					</article>
				</div>

				<div className="wrapper style3">
					<article id="portfolio">
						<header>
							<h2>Here’s some stuff I made recently.</h2>
							<p>Proin odio consequat  sapien vestibulum consequat lorem dolore feugiat lorem ipsum dolore.</p>
						</header>
						<div className="container">
							<div className="row">
								<div className="4u 12u(mobile)">
									<article className="box style2">
										<a href="blah" className="image featured"><img src="./public/images/pic01.jpg" alt="" /></a>
										<h3><a href="blah">Magna feugiat</a></h3>
										<p>Ornare nulla proin odio consequat.</p>
									</article>
								</div>
								<div className="4u 12u(mobile)">
									<article className="box style2">
										<a href="blah" className="image featured"><img src="./public/images/pic02.jpg" alt="" /></a>
										<h3><a href="blah">Veroeros primis</a></h3>
										<p>Ornare nulla proin odio consequat.</p>
									</article>
								</div>
								<div className="4u 12u(mobile)">
									<article className="box style2">
										<a href="blah" className="image featured"><img src="./public/images/pic03.jpg" alt="" /></a>
										<h3><a href="blah">Lorem ipsum</a></h3>
										<p>Ornare nulla proin odio consequat.</p>
									</article>
								</div>
							</div>
							<div className="row">
								<div className="4u 12u(mobile)">
									<article className="box style2">
										<a href="blah" className="image featured"><img src="./public/images/pic04.jpg" alt="" /></a>
										<h3><a href="blah">Tempus dolore</a></h3>
										<p>Ornare nulla proin odio consequat.</p>
									</article>
								</div>
								<div className="4u 12u(mobile)">
									<article className="box style2">
										<a href="blah" className="image featured"><img src="./public/images/pic05.jpg" alt="" /></a>
										<h3><a href="blah">Feugiat aliquam</a></h3>
										<p>Ornare nulla proin odio consequat.</p>
									</article>
								</div>
								<div className="4u 12u(mobile)">
									<article className="box style2">
										<a href="blah" className="image featured"><img src="./public/images/pic06.jpg" alt="" /></a>
										<h3><a href="blah">Sed amet ornare</a></h3>
										<p>Ornare nulla proin odio consequat.</p>
									</article>
								</div>
							</div>
						</div>
						<footer>
							<p>Lorem ipsum dolor sit sapien vestibulum ipsum primis?</p>
							<a href="#contact" className="button big scrolly">Get in touch with me</a>
						</footer>
					</article>
				</div>


				<div className="wrapper style4">
					<article id="contact" className="container 75%">
						<header>
							<h2>Have me make stuff for you.</h2>
							<p>Ornare nulla proin odio consequat sapien vestibulum ipsum sed lorem.</p>
						</header>
						<div>
							<div className="row">
								<div className="12u">
									<form method="post" action="#">
										<div>
											<div className="row">
												<div className="6u 12u(mobile)">
													<input type="text" name="name" id="name" placeholder="Name" />
												</div>
												<div className="6u 12u(mobile)">
													<input type="text" name="email" id="email" placeholder="Email" />
												</div>
											</div>
											<div className="row">
												<div className="12u">
													<input type="text" name="subject" id="subject" placeholder="Subject" />
												</div>
											</div>
											<div className="row">
												<div className="12u">
													<textarea name="message" id="message" placeholder="Message"></textarea>
												</div>
											</div>
											<div className="row 200%">
												<div className="12u">
													<ul className="actions">
														<li><input type="submit" value="Send Message" /></li>
														<li><input type="reset" value="Clear Form" className="alt" /></li>
													</ul>
												</div>
											</div>
										</div>
									</form>
								</div>
							</div>
							<div className="row">
								<div className="12u">
									<hr />
									<h3>Find me on ...</h3>
									<ul className="social">
										<li><a href="blah" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
										<li><a href="blah" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
										<li><a href="blah" className="icon fa-dribbble"><span className="label">Dribbble</span></a></li>
										<li><a href="blah" className="icon fa-linkedin"><span className="label">LinkedIn</span></a></li>
										<li><a href="blah" className="icon fa-tumblr"><span className="label">Tumblr</span></a></li>
										<li><a href="blah" className="icon fa-google-plus"><span className="label">Google+</span></a></li>
										<li><a href="blah" className="icon fa-github"><span className="label">Github</span></a></li>
									</ul>
									<hr />
								</div>
							</div>
						</div>
						<footer>
							<ul id="copyright">
								<li>&copy; Untitled. All rights reserved.</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
							</ul>
						</footer>
					</article>
				</div>
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('App'));
