var React = require('react');
var div = React.DOM.div;
var h3 = React.DOM.h3;
var p = React.DOM.p;
var a = React.DOM.a;
var ul = React.DOM.ul;
var li = React.DOM.li;
var em = React.DOM.em;
var span = React.DOM.span;
var img = React.DOM.img;

var AboutTechnicalSkills = React.createClass({
	render(){
		// console.log('this',this,'this.props', this.props, this.props.children)
		var target = "topic"+this.props.children
		return(
			div(null,
				h3({key:target}, this.props.topic),
				ul({key:'ul'+target},
					this.props.skills.map(function(skill, index){
						return li({key: 'skill'+target+index},
							( skill.icon ?
								span({key: 'iconspan'+target+index, className: 'onethird'},
									em({
										className: skill.icon,
										style: {color: skill.color}
									})
								)
							:
								span({key: 'iconspan'+target+index, className: 'onethird'},
									img({
										className: skill.className, 
										src:skill.img, 
										alt: skill.text
									})
								)
							),
							span({key: 'textspan'+target+index, className: 'twothird'},
								skill.text
							),
							(skill.subSkills ? 
								ul({key:'subskillsUl'+target+index},
									skill.subSkills.map(function(subSkill, index){
										return li(null,
											( subSkill.icon ?
												span({className: 'onethird'},
													em({
														className: subSkill.icon,
														style: {color: subSkill.color}
													})
												)
											:
												span({className: 'onethird'},
													img({
														className: subSkill.className, 
														src:subSkill.img, 
														alt: subSkill.text
													})
												)							
											),
											span({className: 'twothird'},
												subSkill.text
											)
										)
									})
								)
							: null
							)
						)
					})
				)
			)
		)
	}
})

module.exports = AboutTechnicalSkills;