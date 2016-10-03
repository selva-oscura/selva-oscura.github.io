const React = require('react');

const AboutTechnicalSkills = function(props){
	var props = props.props;
	var skills = [];
	props.skills.forEach(function(skill, i){
		var subSkillUl;
		if(skill.subSkills){
			var subSkills = [];
			skill.subSkills.forEach(function(subSkill, i){
				if(subSkill.icon){
					var subSkillItem = (
						<li key={i}>
							<span className='onethird'>
								<em className={subSkill.icon} style={{color: subSkill.color}}></em>
							</span>
							<span className='twothird'>
								{subSkill.text}
							</span>
						</li>
					)
				}else{
					var subSkillItem = (
						<li key={i}>
							<span className='onethird'>
								<img className={subSkill.className} src={subSkill.img} alt={subSkill.text} />
								<em className={subSkill.icon} style={{color: subSkill.color}}></em>
							</span>
							<span className='twothird'>
								{subSkill.text}
							</span>
						</li>
					)
				}
				subSkills.push(subSkillItem);
			});
			subSkillUl = (
				<ul>{subSkills}</ul>
			)
		}
		if(skill.icon){
			var skillItem = (
				<li key={i}>
					<span className='onethird'>
						<em className={skill.icon} style={{color: skill.color}}></em>
					</span>
					<span className='twothird'>
						{skill.text}
					</span>
					{subSkillUl}
				</li>
			)
		}else{
			var skillItem = (
				<li key={i}>
					<span className='onethird'>
						<img className={skill.className} src={skill.img} alt={skill.text} />
						<em className={skill.icon} style={{color: skill.color}}></em>
					</span>
					<span className='twothird'>
						{skill.text}
					</span>
					{subSkillUl}
				</li>
			)
		}
		skills.push(skillItem)
	})
	return (
		<div>
			<h3>{props.topic}</h3>
			<ul>
				{skills}
			</ul>
		</div>
	)
}

module.exports = AboutTechnicalSkills;