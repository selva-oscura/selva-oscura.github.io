import React from 'react';

const Home = () => {
	return (
		<div className="wrapper style1 first">
			<article className="container" id="home">
				<div className="row">
					<div className="4u 12u(mobile)">
						<span className="image fit"><img src="./public/images/pic00.jpg" alt="" /></span>
					</div>
					<div className="8u 12u(mobile)">
						<header>
							<h1>Hi. I'm <strong>Carol &nbsp;St. Louis</strong>.</h1>
						</header>
						<p>And this is <strong>Miniport</strong>, a free, fully responsive HTML5 site template designed by <a href="http://twitter.com/ajlkn">AJ</a> for <a href="http://html5up.net">HTML5 UP</a> &amp; released under the <a href="http://html5up.net/license">CCA license</a>.</p>
						<a href="#work" className="button big scrolly">Learn about what I do</a>
					</div>
				</div>
			</article>
		</div>
	)
}

export default Home;