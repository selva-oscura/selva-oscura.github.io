import React from 'react';

const Portfolio = () => {
	return (
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
	)
}

export default Portfolio;