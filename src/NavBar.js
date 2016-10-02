const React = require('react')
const NavLink = require('./NavLink.js');

const NavBar = () => (
	<nav>
		<div className='container'>
			<ul>
				<NavLink className='navscroll active' id='home' text='HOME' />
				<NavLink className='navscroll' id='about' text='ABOUT' />
				<NavLink className='navscroll' id='portfolio' text='PORTFOLIO' />
				<NavLink className='navscroll' id='contact' text='CONTACT' />
				<NavLink className='navscroll' id='tribute' text='TRIBUTE' />
			</ul>
		</div>
	</nav>
)

module.exports = NavBar;