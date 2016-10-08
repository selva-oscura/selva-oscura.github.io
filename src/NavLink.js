const React = require('react');
const ReactRouter = require('react-router');
const { Link } = ReactRouter;

const NavLink = props => (
	<li>
		<Link className={props.className} id={props.id} to={props.href} >
			{props.text}
		</Link>
	</li>
)

module.exports = NavLink;