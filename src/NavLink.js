const React = require('react');

const NavLink = props => (
	<li>
		<a className={props.className} id={props.id}>
			{props.text}
		</a>
	</li>
)

module.exports = NavLink;