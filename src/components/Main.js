import React from 'react';
import Portfolio from './Portfolio';

const Main = () => {
	return (
		<article id="main">

			<header className="special container">
				<Portfolio />
				<span className="icon fa-bar-chart-o"></span>
				<h2>As this is my <strong>twentieth</strong> freebie for HTML5 UP
				<br />
				I decided to give it a really creative name.</h2>
				<p>Turns out <strong>Twenty</strong> was the best I could come up with. Anyway, lame name aside,
				<br />
				it's minimally designed, fully responsive, built on HTML5/CSS3/<strong>skel</strong>,
				and, like all my stuff,
				<br />
				released for free under the <a href="http://html5up.net/license">Creative Commons Attribution 3.0</a> license. Have fun!</p>
			</header>

			<section className="wrapper style2 container special-alt">
				<div className="row 50%">
					<div className="8u 12u(narrower)">

						<header>
							<h2>Behold the <strong>icons</strong> that visualize what you’re all about. or just take up space. your call bro.</h2>
						</header>
						<p>Sed tristique purus vitae volutpat ultrices. Aliquam eu elit eget arcu comteger ut fermentum lorem. Lorem ipsum dolor sit amet. Sed tristique purus vitae volutpat ultrices. eu elit eget commodo. Sed tristique purus vitae volutpat ultrices. Aliquam eu elit eget arcu commodo.</p>
						<footer>
						</footer>

					</div>
					<div className="4u 12u(narrower) important(narrower)">

						<ul className="featured-icons">
							<li><span className="icon fa-clock-o"><span className="label">Feature 1</span></span></li>
							<li><span className="icon fa-volume-up"><span className="label">Feature 2</span></span></li>
							<li><span className="icon fa-laptop"><span className="label">Feature 3</span></span></li>
							<li><span className="icon fa-inbox"><span className="label">Feature 4</span></span></li>
							<li><span className="icon fa-lock"><span className="label">Feature 5</span></span></li>
							<li><span className="icon fa-cog"><span className="label">Feature 6</span></span></li>
						</ul>

					</div>
				</div>
			</section>

			<section className="wrapper style1 container special">
				<div className="row">
					<div className="4u 12u(narrower)">

						<section>
							<span className="icon featured fa-check"></span>
							<header>
								<h3>This is Something</h3>
							</header>
							<p>Sed tristique purus vitae volutpat ultrices. Aliquam eu elit eget arcu commodo suscipit dolor nec nibh. Proin a ullamcorper elit, et sagittis turpis. Integer ut fermentum.</p>
						</section>

					</div>
					<div className="4u 12u(narrower)">

						<section>
							<span className="icon featured fa-check"></span>
							<header>
								<h3>Also Something</h3>
							</header>
							<p>Sed tristique purus vitae volutpat ultrices. Aliquam eu elit eget arcu commodo suscipit dolor nec nibh. Proin a ullamcorper elit, et sagittis turpis. Integer ut fermentum.</p>
						</section>

					</div>
					<div className="4u 12u(narrower)">

						<section>
							<span className="icon featured fa-check"></span>
							<header>
								<h3>Probably Something</h3>
							</header>
							<p>Sed tristique purus vitae volutpat ultrices. Aliquam eu elit eget arcu commodo suscipit dolor nec nibh. Proin a ullamcorper elit, et sagittis turpis. Integer ut fermentum.</p>
						</section>

					</div>
				</div>
			</section>
			<Portfolio />
		</article>
	)
}

export default Main;