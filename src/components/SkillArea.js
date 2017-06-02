import React from 'react';

const SkillArea = (props) => {
	return (
		<div className="4u 12u(mobile)">
			<section className="box style1">
				<span className={`icon featured ${props.skillArea.icon}`}></span>
				<h3>{props.skillArea.skillArea}</h3>
				<p>
					{props.skillArea.skills.map((skill, i) => (
						<span key={i}>{skill} <br /></span>
						)
					)}
				</p>
			</section>
		</div>
	)
}

export default SkillArea;