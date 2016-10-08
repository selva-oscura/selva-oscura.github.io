const React = require('react')
const NavLink = require('./NavLink.js');

const NavBar = () => (
	<nav>
		<div className='container'>
			<ul>
				<NavLink className='navscroll active' id='home' href='/' text='HOME' />
				<NavLink className='navscroll' id='about' href='/' text='ABOUT' />
				<NavLink className='navscroll' id='portfolio' href='/' text='PORTFOLIO' />
				<NavLink className='navscroll' id='contact' href='/' text='CONTACT' />
				<NavLink className='navscroll' id='tribute' href='/tribute' text='TRIBUTE' />
			</ul>
		</div>
	</nav>
)

module.exports = NavBar;