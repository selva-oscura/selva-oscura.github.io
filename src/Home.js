const React = require('react');

const Home = () => (
	<section className='home'>
		<div className='container'>
			<div className='half'>
				<div className='social' style={{paddingTop: '50vh'}}>
					<p>
						<a href='https://github.com/selva-oscura' target='github'>GitHub</a>
					</p>
					<p>
						<a href='https://linkedin.com/in/stlouisc' target='linkedIn'>LinkedIn</a>
					</p>
				</div>
			</div>
		</div>
	</section>
)

module.exports = Home;