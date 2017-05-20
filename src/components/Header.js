import React from 'react';

const Header = () => {
	return (
		<header id="header" className="alt">
			<h1 id="logo"><a href="index.html">Twenty <span>by HTML5 UP</span></a></h1>
			<nav id="nav">
				<ul>
					<li className="current"><a href="index.html">Welcome</a></li>
					<li className="submenu">
						<a href="">Layouts</a>
						<ul>
							<li><a href="left-sidebar.html">Left Sidebar</a></li>
							<li><a href="right-sidebar.html">Right Sidebar</a></li>
							<li><a href="no-sidebar.html">No Sidebar</a></li>
							<li><a href="contact.html">Contact</a></li>
						</ul>
					</li>
					<li><a href="" className="button special">Sign Up</a></li>
				</ul>
			</nav>
		</header>
	)
}

export default Header;