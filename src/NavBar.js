const React = require('react')
const NavLink = require('./NavLink.js');

const NavBar = (props) => {
	var links = [
		{id:'home', href:'/', text:'HOME' },
		{id:'about', href:'/about', text:'ABOUT' },
		{id:'portfolio', href:'/portfolio', text:'PORTFOLIO' },
		{id:'contact', href:'/contact', text:'CONTACT' },
		{id:'tribute', href:'/tribute', text:'TRIBUTE' }
	]
	var linkList = [];
	links.forEach(function(link, i){
		var className;
		console.log('props.active', props.active)
		if (link.id===props.active){ className = "active"; }
		console.log('className',className);
		linkList.push(<NavLink key={i} id={link.id} href={link.href} text={link.text} className={className} />);
	});
	return (
		<nav>
			<div className='container'>
				<ul>
					{linkList}
				</ul>
			</div>
		</nav>
	)
}
module.exports = NavBar;