import React from 'react';

const Profile = () => {
	return (
		<div className="wrapper style2">
			<article id="profile">
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

	)
}

export default Profile;