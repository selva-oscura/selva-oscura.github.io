import React from 'react';

const Profile = () => {
	return (
		<div className="wrapper style2">
			<article id="profile">
				<header>
					<h2>Skills &amp; Experience</h2>
					<p>Most of my work is full-stack, .</p>
				</header>
				<div className="container">
					<div className="row">
						<div className="4u 12u(mobile)">
							<section className="box style1">
								<span className="icon featured fa-comments-o"></span>
								<h3>Front-End</h3>
								<p>HTML5, CSS3, JavaScript / ES6, React</p>
							</section>
						</div>
						<div className="4u 12u(mobile)">
							<section className="box style1">
								<span className="icon featured fa-camera-retro"></span>
								<h3>Back-End</h3>
								<p>Node.js, </p>
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

	)
}

export default Profile;