import React from 'react';

const SkillArea = (props) => {
	return (
		<div className="4u 12u(mobile)">
			<section className="box style1">
				<span className={`icon featured ${props.skillArea.icon}`}></span>
				<h3>{props.skillArea.skillArea}</h3>
				<ul>
					{props.skillArea.skills.map((skill, i) => (<li key={i}>{skill}</li>))}
				</ul>
			</section>
		</div>
	)
}

export default SkillArea;