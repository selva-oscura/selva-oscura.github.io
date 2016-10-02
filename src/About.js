var React = require('react');
var section = React.DOM.section;
var div = React.DOM.div;
var h3 = React.DOM.h3;
var p = React.DOM.p;
var a = React.DOM.a;
var ul = React.DOM.ul;
var li = React.DOM.li;
var em = React.DOM.em;
var span = React.DOM.span;
var img = React.DOM.img;
var AboutTechnicalSkills = require('./AboutTechnicalSkills.js');
// var TechnicalSkills = require('./TechnicalSkills.js')

var technicalSkills = [
	{
		topic: 'Front-end',
		loc: 'left',
		skills:[
			{
				icon: 'icon-html5',
				color: '#E95528',
				text: 'HTML5'
			},{
				icon: 'icon-css3',
				color: '#2277FF',
				text: 'CSS3'
			},{
				icon: 'icon-bootstrap',
				color: '#563B7E',
				text: 'Bootstrap'
			},{
				img: './public/img/d3.png',
				className: 'imgIcon',
				text: 'D3.js'
			},{
				icon: 'icon-jquery',
				color: '#0868AB',
				text: 'jQuery'
			}
		]
	},{
		topic: 'Databases',
		loc: 'left',
		skills:[
			{
				icon: 'icon-mongodb',
				color: '#419E39',
				text: 'MongoDB'
			},{
				icon: 'icon-mysql',
				color: '#425174',
				text: 'MySQL'
			}
		]
	},{
		topic: 'PaaS & DBaaS',
		loc: 'left',
		skills:[
			{
				icon: 'icon-heroku',
				color: '#6762A6',
				text: 'Heroku'
			},{
				img: './public/img/meteor.png',
				className: 'imgIcon',

				text: 'Galaxy'
			},{
				img: './public/img/mlab.png',
				className: 'imgIcon',
				text: 'mLab'
			}
		]
	},{
		topic: 'Version Control',
		loc: 'left',
		skills:[
			{
				icon: 'icon-github-circle',
				color: '#171515',
				text: 'GitHub'
			},{
				img: './public/img/bitbucket.png',
				className: 'imgIcon',
				text: 'BitBucket'
			}
		]
	},{
		topic: 'Languages',
		loc: 'right',
		skills:[
			{
				icon: 'icon-js',
				color: '#F1BF26',
				text: 'JavaScript / ES6'
			},{
				icon: 'icon-php',
				color: '#5A68A5',
				text: 'PHP'
			},{
				img: './public/img/python.png',
				className: 'imgIcon',
				text: 'Python'
			},{
				icon: 'icon-ruby',
				color: '#BD1E12',
				text: 'Ruby'
			}
		]
	},{
		topic: 'JavaScript Frameworks',
		loc: 'right',
		skills:[
			{
				img: './public/img/meteor.png',
				className: 'imgIcon',
				text: 'Meteor',
				subSkills: [
					{
						icon: 'icon-mongodb',
						color: '#419E39',
						text: 'MongoDB'
					},{
						icon: 'icon-nodejs',
						color: '#539E43',
						text: 'Node.js'
					},{
						img: './public/img/blaze.png',
						className: 'imgIcon',
						text: 'Blaze / Spacebars'
					}
				]
			},{
				icon: 'icon-react',
				text: 'React.js'
			},{
				img:  './public/img/mean.png',
				className: 'imgIcon',
				text: 'MEAN',
				subSkills: [
					{
						icon: 'icon-mongodb',
						color: '#419E39',
						text: 'MongoDB'
					},{
						icon: 'icon-express',
						color: 'black',
						text: 'Express.js'
					},{
						icon: 'icon-angular',
						color: '#DD1B16',
						text: 'Angular.js'
					},{
						icon: 'icon-nodejs',
						color: '#539E43',
						text: 'Node.js'
					}
				]
			}
		]
	},{
		topic: 'Operating Systems',
		loc: 'right',
		skills:[
			{
				icon: 'icon-ubuntu',
				color: '#DD4814',
				text: 'Ubuntu'
			},{
				img: './public/img/windows.png',
				className: 'imgIcon',
				text: 'Windows'
			}
		]
	}
]


var About = React.createClass({
	render(){
		return(
			section({className:'about'},
				div({className:'container'},
					div({className:'half'},
						technicalSkills.map(function(skillsArea, idx){
							if(skillsArea.loc === "left"){ return React.createElement(AboutTechnicalSkills, skillsArea, idx)}
						})
					),
					div({className:'half'},
						technicalSkills.map(function(skillsArea, idx){
							if(skillsArea.loc === "right"){return React.createElement(AboutTechnicalSkills, skillsArea, idx)}
						})
					)
				)
			)
		)
	}
});


module.exports = About;