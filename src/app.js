var React = require('react');
var ReactDOM = require('react-dom');
// var MyTitle = require('./MyTitle.js');
// import { MyTitle } from './MyTitle.js';
var NavBar = require('./NavBar.js');
var Card = require('./Card.js');
var Section = require('./Section.js');

var section = React.DOM.section;
var nav = React.DOM.nav;
var div = React.DOM.div;
var h1 = React.DOM.h1;
var h2 = React.DOM.h2;
var h3 = React.DOM.h3;
var h4 = React.DOM.h4;
var h6 = React.DOM.h6;
var p = React.DOM.p;
var a = React.DOM.a;
var em = React.DOM.em;
var span = React.DOM.span;
var ul = React.DOM.ul;
var li = React.DOM.li;
var img = React.DOM.img;
var strong = React.DOM.strong;
var form = React.DOM.form;
var label = React.DOM.label;
var input = React.DOM.input;
var textarea = React.DOM.textarea;

// var NavFactory = React.createFactory(Nav);
var SectionFactory = React.createFactory(Section);

var PageComponent = (
	div(null,
		React.createElement(NavBar, null),
		section({className:'home'},
			div({className:'container'},
				div({
					className: 'social',
					style: {paddingTop: '66vh'}
				},
					p(null,
						a({
							href:'https://github.com/selva-oscura',
							target: 'github'
						}, "GitHub"),
						a({
							href:'https://linkedin.com/in/stlouisc',
							target: 'LinkedIn'
						}, "LinkedIn")
					)
				)
			)
		),
		section({className:'about'},
			div({className:'container'},
				p({style: {paddingTop: "2em"}},"Full-stack web development freelancer with 3 years experience with HTML5, CSS3, full-stack JavaScript development (Meteor, MEAN (MongoDB, Express, Angular.js, Node.js), and React), PHP, and MySQL. I have a passion for learning, strong analytical and problem-solving skills, and enjoy writing software with an eye to clean and maintainable code. I\'m looking for new and exciting opportunities to thrive in a dynamic, collaborative environment."
				),
				div({className:'half'},
					h3(null, "Front-end:"),
					ul(null,
						li(null,
							span({className:'onethird'},
								em({className:"icon-html5"})
							),
							span({className:'twothird'},
								"HTML5"
							)
						),
						li(null,
							span({className:'onethird'},
								em({className:"icon-css3"})
							),
							span({className:'twothird'},
								"CSS3"
							)
						),
						li(null,
							span({className:'onethird'},
								em({className:"icon-bootstrap"})
							),
							span({className:'twothird'},
								"Bootstrap"
							)
						),
						li(null,
							span({className:'onethird'},
								em(null, ' ')
							),
							span({className:'twothird'},
								"Materialize"
							)
						),
						li(null,
							span({className:'onethird'},
								em({className:"icon-d3"})
							),
							span({className:'twothird'},
								"D3.js"
							)
						),
						li(null,
							span({className:'onethird'},
								em({className:"icon-jquery"})
							),
							span({className:'twothird'},
								"jQuery"
							)
						)
					),
					h3(null, "Databases:"),
					ul(null,
						li(null,
							span({className:'onethird'},
								em({className:"icon-mongodb"})
							),
							span({className:'twothird'},
								"MongoDB"
							)
						),
						li(null,
							span({className:'onethird'},
								em({className:"icon-mysql"})
							),
							span({className:'twothird'},
								"MySQL"
							)
						)
					),
					h3(null, "PaaS & DBaaS:"),
					ul(null,
						li(null,
							span({className:'onethird'},
								em({className:"icon-heroku"})
							),
							span({className:'twothird'},
								"Heroku"
							)
						),
						li(null,
							span({className:'onethird'},
								em(null, ' ')
							),
							span({className:'twothird'},
								"Galaxy"
							)
						),
						li(null,
							span({className:'onethird'},
								em(null, ' ')
							),
							span({className:'twothird'},
								"mLab"
							)
						)
					),
					h3(null, "Version Control:"),
					ul(null,
						li(null,
							span({className:'onethird'},
								em({className:"icon-github-circle"})
							),
							span({className:'twothird'},
								"GitHub"
							)
						),
						li(null,
							span({className:'onethird'},
								em(null, ' ')
							),
							span({className:'twothird'},
								"BitBucket"
							)
						)
					)
				),
				div({className:'half'},
					h3(null, "Languages"),
					ul(null,
						li(null,
							span({className:'onethird'},
								em({className:"icon-js"})
							),
							span({className:'twothird'},
								"JavaScript / ES6"
							)
						),
						li(null,
							span({className:'onethird'},
								em({className:"icon-php"})
							),
							span({className:'twothird'},
								"PHP"
							)
						),
						li(null,
							span({className:'onethird'},
								em({className:"icon-python"})
							),
							span({className:'twothird'},
								"Python"
							)
						),
						li(null,
							span({className:'onethird'},
								em({className:"icon-ruby"})
							),
							span({className:'twothird'},
								"Ruby"
							)
						)
					),
					h3(null, "JavaScript Frameworks:"),
					ul(null,
						li(null,
							span({className:'onethird'},
								img({
									className:"meteorIcon",
									src: './public/img/meteor.png'
								})
							),
							span({className:'twothird'},
								"Meteor"
							),
							ul(null,
								li(null,
									span({className:'onethird'},
										em({className:"icon-mongodb"})
									),
									span({className:'twothird'},
										"MongoDB"
									)
								),
								li(null,
									span({className:'onethird'},
										em({className:"icon-nodejs"})
									),
									span({className:'twothird'},
										"Node.js"
									)
								),
								li(null,
									span({className:'onethird'},
										em(null, '')
									),
									span({className:'twothird'},
										"Blaze"
									)
								),
								li(null,
									span({className:'onethird'},
										em(null, '')
									),
									span({className:'twothird'},
										"Spacebars"
									)
								)
							)
						),
						li(null,
							span({className:'onethird'},
								em({className:"icon-react"})
							),
							span({className:'twothird'},
								"React.js"
							)
						),
						li(null,
							span({className:'onethird'},
								em(null, '')
							),
							span({className:'twothird'},
								"MEAN"
							),
							ul(null,
								li(null,
									span({className:'onethird'},
										em({className:"icon-mongodb"})
									),
									span({className:'twothird'},
										"MongoDB"
									)
								),
								li(null,
									span({className:'onethird'},
										em({className: "icon-express"})
									),
									span({className:'twothird'},
										"Express.js"
									)
								),
								li(null,
									span({className:'onethird'},
										em({className:"icon-angular"})
									),
									span({className:'twothird'},
										"Angular.js"
									)
								),
								li(null,
									span({className:'onethird'},
										em({className:"icon-nodejs"})
									),
									span({className:'twothird'},
										"Node.js"
									)
								)
							)
						)
					),
					h3(null, "Operating Systems"),
					ul(null,
						li(null,
							span({className:'onethird'},
								em({className:"icon-ubuntu"})
							),
							span({className:'twothird'},
								"Ubuntu"
							)
						),
						li(null,
							span({className:'onethird'},
								em(null)
							),
							span({className:'twothird'},
								"Windows"
							)
						)
					)
				)
			)
		),
		section({className:'portfolio'},
			div({className:'container'},
				React.createElement(Card, {
					src:"public/img/shines.png",
					name:"Door-to-Door Shines",
					href: 'https://doortodoorshines.com',
					target: 'shines',
					text: ["Door-to-Door Shines is an app to help busy people in the San Francisco Area with on-demand shoe shine and repair services.  Select the services you want, schedule pick-up and return times that are convenient for you, pay, and cross one more errand off your list!","As sole developer for Door-to-Door Shines, I built (1) the interfaces the user sees as s/he orders shine & repair services, schedules pick-up & delivery times, pays, leaves comments or asks questions; (2) the admin dashboard, displaying pending & completed orders, user feedback, & customer information, scheduling of delivery times, analytics on orders and revenue; and (3) the internals, including database and cron jobs."],
					technologies: "Meteor.js (Blaze, Spacebars, MongoDB, Node.js), JavaScript, jQuery, HTML5, CSS3, Materialize.css, Stripe API"
				}),
				React.createElement(Card, {
					src:"public/img/zyrl.png",
					name:"Zyrl",
					href: 'https://zyrl.meteorapp.com',
					target: 'zyrl',
					text: ["Zyrl is an app for connecting social media influencers and the merchants whose products and services they love.", "As a freelancer for Zyrl, I converted the site from WordPress to Meteor, rebuilding the app's front-end and back-end (sign-up and communications for influencers, merchants, and potential employees) and arranging site and database hosting. I then managed the Facebook and Instagram permissions process, designed and developed the internal APIs & the management of data from Facebook and Instagram's APIs, and designed the admin dashboard for managing influencers/merchants, admin permissions, and display of analytics of  influencers' Facebook and Instagram profiles and posts data."],
					technologies: "Meteor.js (Blaze, Spacebars, MongoDB, Node.js), JavaScript/ES6, jQuery, HTML5, CSS3, Bootstrap, Facebook Graph API, Instagram API"
				}),
				React.createElement(Card, {
					src:"public/img/portcal.jpg",
					name:"PoRTCal",
					href: 'https://github.com/selva-oscura/poRTCal',
					target: 'portcal',
					text: ["PoRTCal is a WebRTC app inspired by the game Portal. The project was an entry into the October 2015 Meteor hackathon competition. Users could videoconference with each other by logging in to the app."],
					technologies: "Meteor.js (Blaze, Spacebars, MongoDB, Node.js), HTML5, CSS3, Materialize.css, Javascript/ES6, WebRTC using the PeerJS library"
				}),
				React.createElement(Card, {
					src:"public/img/animal_rescue.png",
					name:"Animal Rescue",
					href: 'https://github.com/selva-oscura/meteor_animal_rescue',
					target: 'animal_rescue',
					text: ["Animal Rescue is an app for uploading and finding animals that are available for adoption, make with Meteor, MongoDB, and Bootstrap. This project was developed and won 2nd place at the Women Who Code Silicon Valley hackathon at Paypal in April 2015."],
					technologies: "Meteor.js (Blaze, Spacebars, MongoDB, Node.js), HTML5, CSS3, Bootstrap, MapQuest Geolocation API"
				}),
				React.createElement(Card, {
					src:"public/img/booksmart.png",
					name:"Booksmart",
					href: 'http://booksmartapp.com',
					target: 'booksmart',
					text: ["Sole developer and lead maintainer of the web platform for a web, iOS, and Android project, created in collaboration with a team of mobile app developers to help students (1) contact other students at their university to buy or sell textbooks with one another and (2) buy from or sell to online vendors for students at universities where the app is not yet broadly adopted."],
					technologies: "HTM5, CSS3, Bootstrap, PHP, MySQL, Javascript, AJAX, jQuery, Campusbooks API"
				}),
				React.createElement(Card, {
					src:"public/img/aloha_fun_zone.png",
					name:"Aloha Fun Zone",
					href: 'http://alohafunzone.com',
					target: 'aloha',
					text: ["Sole developer and maintainer of Aloha Fun Zone website, which displays the tours available from the company."],
					technologies: "HTM5, CSS3, PHP, Javascript, AJAX, jQuery"
				})
			)
		),
		section({className:'contact'},
			div({className:'container'},
				div({className:'half'},
					form(null,
						label({
							htmlFor:'Name'
						}, 'Name'),
						input({
							type: 'text',
							name: 'name',
							id: 'name',
							required:'required'
						}),
						label({
							htmlFor:'email'
						}, 'E-mail Address'),
						input({
							type: 'email',
							name: 'email',
							id: 'email',
							required:'required'
						}),
						label({
							htmlFor:'Phone'
						}, 'Telephone Number'),
						input({
							type: 'tel',
							name: 'phone',
							id: 'phone',
							required:'required'
						}),
						label({
							htmlFor:'Message'
						}, 'Message'),
						textarea({
							type: 'text',
							name: 'message',
							id: 'message',
							value: '',
							required:'required'
						}),
						input({
							type: 'submit',
							value: 'SUBMIT',
							id: 'submit'
						})
					)
				),
				div({className:'half'},
					div({className:'onethird'},
						p(null," ")
					),
					div({className:'twothird'},
						p(null,"Want to get in touch with me? Be it to request more info about me and my experience or to ask for my resume, just drop me a line."
						),
						p(null, "I'll reply ASAP")
					)
				)
			)
		),
		section({className: 'tribute'},
			div({className: 'container'},
				h2(null, 'OPEN SOURCE SOFTWARE'),
				h6(null, 'Gratuitously cribbed from ',
					a({
						href: "https://en.wikipedia.org/wiki/Open-source_software", 
						target: '_new'
					}, "Wikipedia")
				),
				p(null, "Open-source software (OSS) is computer software with its source code made available with a license in which the copyright holder provides the rights to study, change, and distribute the software to anyone and for any purpose. Open-source software may be developed in a collaborative public manner. Open-source software is the most prominent example of open-source development."),
				p(null, "The open-source model, or collaborative development from multiple independent sources, generates an increasingly more diverse scope of design perspective than any one company is capable of developing and sustaining long term. A 2008 report by the Standish Group states that adoption of open-source software models has resulted in savings of about $60 billion per year to consumers."),
				h3(null, "HISTORY"),
				p(null, "In the early days of computing, programmers and developers shared software in order to learn from each other and evolve the field of computing. Eventually the open source notion moved to the way side of commercialization of software in the years 1970-1980. In 1997, Eric Raymond published The Cathedral and the Bazaar, a reflective analysis of the hacker community and free software principles. The paper received significant attention in early 1998, and was one factor in motivating Netscape Communications Corporation to release their popular Netscape Communicator Internet suite as free software. This source code subsequently became the basis behind SeaMonkey, Mozilla Firefox, Thunderbird and KompoZer."),
				p(null, "Netscape's act prompted Raymond and others to look into how to bring the Free Software Foundation's free software ideas and perceived benefits to the commercial software industry. They concluded that FSF's social activism was not appealing to companies like Netscape, and looked for a way to rebrand the free software movement to emphasize the business potential of sharing and collaborating on software source code. The new term they chose was \"open source\", which was soon adopted by Bruce Perens, publisher Tim O'Reilly, Linus Torvalds, and others. The Open Source Initiative was founded in February 1998 to encourage use of the new term and evangelize open-source principles."),
				p(null, "While the Open Source Initiative sought to encourage the use of the new term and evangelize the principles it adhered to, commercial software vendors found themselves increasingly threatened by the concept of freely distributed software and universal access to an application's source code. A Microsoft executive publicly stated in 2001 that \"open source is an intellectual property destroyer. I can't imagine something that could be worse than this for the software business and the intellectual-property business.\" However, while FOSS has historically played a role outside of the mainstream of private software development, companies as large as Microsoft have begun to develop official open-source presences on the Internet. IBM, Oracle, Google and State Farm are just a few of the companies with a serious public stake in today's competitive open-source market. There has been a significant shift in the corporate philosophy concerning the development of FOSS."),
				p(null, "The free software movement was launched in 1983. In 1998, a group of individuals advocated that the term free software should be replaced by open-source software (OSS) as an expression which is less ambiguous and more comfortable for the corporate world. Software developers may want to publish their software with an open-source license, so that anybody may also develop the same software or understand its internal functioning. With open-source software, generally anyone is allowed to create modifications of it, port it to new operating systems and processor architectures, share it with others or, in some cases, market it. Scholars Casson and Ryan have pointed out several policy-based reasons for adoption of open source – in particular, the heightened value proposition from open source (when compared to most proprietary formats) in the following categories:"),
				ul(null, 
					li(null, "Security"),
					li(null, "Affordability"),
					li(null, "Transparency"),
					li(null, "Perpetuity"),
					li(null, "Interoperability"),
					li(null, "Flexibility"),
					li(null, "Localization — particularly in the context of local governments (who make software decisions). Casson and Ryan argue that \"governments have an inherent responsibility and fiduciary duty to taxpayers\" which includes the careful analysis of these factors when deciding to purchase proprietary software or implement an open-source option.")
				),
				p(null, "The Open Source Definition, notably, presents an open-source philosophy, and further defines the terms of usage, modification and redistribution of open-source software. Software licenses grant rights to users which would otherwise be reserved by copyright law to the copyright holder. Several open-source software licenses have qualified within the boundaries of the Open Source Definition. The most prominent and popular example is the GNU General Public License (GPL), which \"allows free distribution under the condition that further developments and applications are put under the same licence\", thus also free."),
				p(null, "The open source label came out of a strategy session held on April 7, 1998 in Palo Alto in reaction to Netscape's January 1998 announcement of a source code release for Navigator (as Mozilla). A group of individuals at the session included Tim O'Reilly, Linus Torvalds, Tom Paquin, Jamie Zawinski, Larry Wall, Brian Behlendorf, Sameer Parekh, Eric Allman, Greg Olson, Paul Vixie, John Ousterhout, Guido van Rossum, Philip Zimmermann, John Gilmore and Eric S. Raymond. They used the opportunity before the release of Navigator's source code to clarify a potential confusion caused by the ambiguity of the word \"free\" in English."),
				p(null, "Many people claimed that the birth of the Internet, since 1969, started the open source movement, while others do not distinguish between open-source and free software movements."),
				p(null, "The Free Software Foundation (FSF), started in 1985, intended the word \"free\" to mean freedom to distribute (or \"free as in free speech\") and not freedom from cost (or \"free as in free beer\"). Since a great deal of free software already was (and still is) free of charge, such free software became associated with zero cost, which seemed anti-commercial."),
				p(null, "The Open Source Initiative (OSI) was formed in February 1998 by Eric Raymond and Bruce Perens. With at least 20 years of evidence from case histories of closed software development versus open development already provided by the Internet developer community, the OSI presented the \"open source\" case to commercial businesses, like Netscape. The OSI hoped that the usage of the label \"open source\", a term suggested by Peterson of the Foresight Institute at the strategy session, would eliminate ambiguity, particularly for individuals who perceive \"free software\" as anti-commercial. They sought to bring a higher profile to the practical benefits of freely available source code, and they wanted to bring major software businesses and other high-tech industries into open source. Perens attempted to register \"open source\" as a service mark for the OSI, but that attempt was impractical by trademark standards. Meanwhile, due to the presentation of Raymond's paper to the upper management at Netscape—Raymond only discovered when he read the Press Release, and was called by Netscape CEO Jim Barksdale's PA later in the day—Netscape released its Navigator source code as open source, with favorable results."),
				h3(null, "Open-source software development"),
				h4(null, "Development model"),
				p(null, "In his 1997 essay The Cathedral and the Bazaar, open-source evangelist Eric S. Raymond suggests a model for developing OSS known as the bazaar model. Raymond likens the development of software by traditional methodologies to building a cathedral, \"carefully crafted by individual wizards or small bands of mages working in splendid isolation\". He suggests that all software should be developed using the bazaar style, which he described as \"a great babbling bazaar of differing agendas and approaches.\""),
				p(null, "In the traditional model of development, which he called the cathedral model, development takes place in a centralized way. Roles are clearly defined. Roles include people dedicated to designing (the architects), people responsible for managing the project, and people responsible for implementation. Traditional software engineering follows the cathedral model."),
				p(null, "The bazaar model, however, is different. In this model, roles are not clearly defined. Gregorio Robles suggests that software developed using the bazaar model should exhibit the following patterns:"),
				h4(null, "Users should be treated as co-developers"),
				p(null, "The users are treated like co-developers and so they should have access to the source code of the software. Furthermore, users are encouraged to submit additions to the software, code fixes for the software, bug reports, documentation etc. Having more co-developers increases the rate at which the software evolves. Linus's law states, \"Given enough eyeballs all bugs are shallow.\" This means that if many users view the source code, they will eventually find all bugs and suggest how to fix them. Note that some users have advanced programming skills, and furthermore, each user's machine provides an additional testing environment. This new testing environment offers that ability to find and fix a new bug."),
				h4(null, "Early releases"),
				p(null, "The first version of the software should be released as early as possible so as to increase one's chances of finding co-developers early."),
				h4(null, "Frequent integration"),
				p(null, "Code changes should be integrated (merged into a shared code base) as often as possible so as to avoid the overhead of fixing a large number of bugs at the end of the project life cycle. Some open source projects have nightly builds where integration is done automatically on a daily basis."),
				h4(null, "Several versions"),
				p(null, "There is a need for a decision making structure, whether formal or informal, that makes strategic decisions depending on changing user requirements and other factors."),
				p(null, "Data suggests, however, that OSS is not quite as democratic as the bazaar model suggests. An analysis of five billion bytes of free/open source code by 31,999 developers shows that 74% of the code was written by the most active 10% of authors. The average number of authors involved in a project was 5.1, with the median at 2."),
				h4(null, "Advantages and disadvantages"),
				p(null, "Open source software is usually easier to obtain than proprietary software, often resulting in increased usage. Additionally, the availability of an open source implementation of a standard can increase adoption of that standard. It has also helped to build developer loyalty as developers feel empowered and have a sense of ownership of the end product."),
				p(null, "Moreover, lower costs of marketing and logistical services are needed for OSS. OSS also helps companies keep abreast of technology developments. It is a good tool to promote a company's image, including its commercial products. The OSS development approach has helped produce reliable, high quality software quickly and inexpensively."),
				p(null, "Open source development offers the potential for a more flexible technology and quicker innovation. It is said to be more reliable since it typically has thousands of independent programmers testing and fixing bugs of the software. It is flexible because modular systems allow programmers to build custom interfaces, or add new abilities to it and it is innovative since open source programs are the product of collaboration among a large number of different programmers. The mix of divergent perspectives, corporate objectives, and personal goals speeds up innovation."),
				p(null, "Moreover, free software can be developed in accord with purely technical requirements. It does not require thinking about commercial pressure that often degrades the quality of the software. Commercial pressures make traditional software developers pay more attention to customers' requirements than to security requirements, since such features are somewhat invisible to the customer."),
				p(null, "It is sometimes said that the open source development process may not be well defined and the stages in the development process, such as system testing and documentation may be ignored. However this is only true for small (mostly single programmer) projects. Larger, successful projects do define and enforce at least some rules as they need them to make the teamwork possible. In the most complex projects these rules may be as strict as reviewing even minor change by two independent developers."),
				p(null, "Not all OSS initiatives have been successful, for example SourceXchange and Eazel. Software experts and researchers who are not convinced by open source's ability to produce quality systems identify the unclear process, the late defect discovery and the lack of any empirical evidence as the most important problems (collected data concerning productivity and quality). It is also difficult to design a commercially sound business model around the open source paradigm. Consequently, only technical requirements may be satisfied and not the ones of the market. In terms of security, open source may allow hackers to know about the weaknesses or loopholes of the software more easily than closed-source software.It depends on control mechanisms in order to create effective performance of autonomous agents who participate in virtual organizations."),
				h4(null, "Development tools"),
				p(null, "In OSS development, tools are used to support the development of the product and the development process itself."),
				p(null, "Revision control systems such as Concurrent Versions System (CVS) and later Subversion (SVN) and Git are examples of tools, often themselves open source, help manage the source code files and the changes to those files for a software project. The projects are frequently hosted and published on sites like Launchpad, Bitbucket, and GitHub."),
				p(null, "Open source projects are often loosely organized with \"little formalised process modelling or support\", but utilities such as issue trackers are often used to organize open source software development. Commonly used bugtrackers include Bugzilla and Redmine."),
				p(null, "Tools such as mailing lists and IRC provide means of coordination among developers. Centralized code hosting sites also have social features that allow developers to communicate."),
				h4(null, "Organizations"),
				p(null, "Some of the \"more prominent organizations\" involved in OSS development include the Apache Software Foundation, creators of the Apache web server; the Linux Foundation, a nonprofit which as of 2012 employed Linus Torvalds, the creator of the Linux operating system kernel; the Eclipse Foundation, home of the Eclipse software development platform; the Debian Project, creators of the influential Debian GNU/Linux distribution; the Mozilla Foundation, home of the Firefox web browser; and OW2, European-born community developing open source middleware. New organizations tend to have a more sophisticated governance model and their membership is often formed by legal entity members."),
				p(null, "Open Source Software Institute is a membership-based, non-profit (501 (c)(6)) organization established in 2001 that promotes the development and implementation of open source software solutions within US Federal, state and local government agencies. OSSI's efforts have focused on promoting adoption of open source software programs and policies within Federal Government and Defense and Homeland Security communities."),
				p(null, "Open Source for America is a group created to raise awareness in the United States Federal Government about the benefits of open source software. Their stated goals are to encourage the government's use of open source software, participation in open source software projects, and incorporation of open source community dynamics to increase government transparency."),
				p(null, "Mil-OSS is a group dedicated to the advancement of OSS use and creation in the military."),
				h3(null, "References and resources"),
					ul(null, 
						li(null,
							a({
								href:"https://en.wikipedia.org/wiki/Free_software",
								target:"new"
							}, "Free Software")
						),
						li(null,
							a({
								href:"https://en.wikipedia.org/wiki/Free_software_community",
								target:"new"
							}, "Free Software Community")
						),
						li(null,
							a({
								href:"https://en.wikipedia.org/wiki/Free_software_movement",
								target:"new"
							}, "Free Software Movement")
						),
						li(null,
							a({
								href:"https://en.wikipedia.org/wiki/List_of_open_source_software_packages",
								target:"new"
							}, "List of open source software packages")
						)
					),
				h3(null, "Why I care"),
				p(null, "he open source software as an alternative to the more proprietary software and approaches of Apple and MicroSoft have provided me with options when I decided that I wasn't happy with the software and corporate policies of those companies."),
				p(null, "And so my current computer uses:"),
				ul(null,
					li(null,
						"OS: ",
						a({
							href:"https://www.ubuntu.com/", 
							target:"_new"
						},"Ubuntu")
					),
					li(null,
						"Browsers: ",
						a({
							href:"https://www.mozilla.org/firefox", 
							target:"_new"
						},"Mozilla Firefox"),
						" and ",
						a({
							href:"https://www.chromium.org/getting-involved/download-chromium", 
							target:"_new"							
						},"Chromium")
					),
					li(null,
						"FTP: ",
						a({
							href:"https://filezilla-project.org/", 
							target:"_new"
						},"FileZilla")
					),
					li(null,
						"SSH and telnet client: ",
						a({
							href:"https://www.chiark.greenend.org.uk/~sgtatham/putty", 
							target:"_new"
						},"PuTTY")
					),
					li(null,
						"Version Control: ",
						a({
							href:"https://git-scm.com/downloads", 
							target:"_new"
						},"Git")
					),
					li(null,
						"Office Suite: ",
						a({
							href:"https://www.libreoffice.org/", 
							target:"_new"
						},"LibreOffice")
					),
					li(null,
						"Graphics Editor: ",
						a({
							href:"https://www.gimp.org/", 
							target:"_new"
						},"GIMP")
					),
					li(null,
						"Media Player: ",
						a({
							href:"https://www.videolan.org/vlc/index.html", 
							target:"_new"
						},"VLC Media Player")
					),
					li(null,
						"E-book management and converter: ",
						a({
							href:"https://calibre-ebook.com/", 
							target:"_new"
						},"Calibre")
					)
				)
			)
		)
	)
);

ReactDOM.render(PageComponent, document.getElementById('app'));