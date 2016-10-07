const React = require('react');
const Base = require('./Base.js');

const Tribute = React.createClass({
	render: function(){
		var data = [
			{
				format: 'h2',
				text: 'OPEN SOURCE SOFTWARE'
			},{
				format: 'h6',
				text: 'Gratuitously cribbed from Wikipedia'
			},{
				format: 'p',
				text: 'Open-source software (OSS) is computer software with its source code made available with a license in which the copyright holder provides the rights to study, change, and distribute the software to anyone and for any purpose. Open-source software may be developed in a collaborative public manner. Open-source software is the most prominent example of open-source development.'
			},{
				format: 'p',
				text: 'The open-source model, or collaborative development from multiple independent sources, generates an increasingly more diverse scope of design perspective than any one company is capable of developing and sustaining long term. A 2008 report by the Standish Group states that adoption of open-source software models has resulted in savings of about $60 billion per year to consumers.'
			},{
				format: 'h3',
				text: 'HISTORY'
			},{
				format: 'p',
				text: 'In the early days of computing, programmers and developers shared software in order to learn from each other and evolve the field of computing. Eventually the open source notion moved to the way side of commercialization of software in the years 1970-1980. In 1997, Eric Raymond published \'The Cathedral and the Bazaar\', a reflective analysis of the hacker community and free software principles. The paper received significant attention in early 1998, and was one factor in motivating Netscape Communications Corporation to release their popular Netscape Communicator Internet suite as free software. This source code subsequently became the basis behind SeaMonkey, Mozilla Firefox, Thunderbird and KompoZer.'
			},{
				format: 'p',
				text: "Netscape\'s act prompted Raymond and others to look into how to bring the Free Software Foundation\'s free software ideas and perceived benefits to the commercial software industry. They concluded that FSF's social activism was not appealing to companies like Netscape, and looked for a way to rebrand the free software movement to emphasize the business potential of sharing and collaborating on software source code. The new term they chose was \"open source\", which was soon adopted by Bruce Perens, publisher Tim O'Reilly, Linus Torvalds, and others. The Open Source Initiative was founded in February 1998 to encourage use of the new term and evangelize open-source principles."
			},{
				format: "p",
				text: "While the Open Source Initiative sought to encourage the use of the new term and evangelize the principles it adhered to, commercial software vendors found themselves increasingly threatened by the concept of freely distributed software and universal access to an application's source code. A Microsoft executive publicly stated in 2001 that \"open source is an intellectual property destroyer. I can't imagine something that could be worse than this for the software business and the intellectual-property business.\" However, while FOSS has historically played a role outside of the mainstream of private software development, companies as large as Microsoft have begun to develop official open-source presences on the Internet. IBM, Oracle, Google and State Farm are just a few of the companies with a serious public stake in today's competitive open-source market. There has been a significant shift in the corporate philosophy concerning the development of FOSS."
			},{
				format: 'p',
				text: "The free software movement was launched in 1983. In 1998, a group of individuals advocated that the term free software should be replaced by open-source software (OSS) as an expression which is less ambiguous and more comfortable for the corporate world. Software developers may want to publish their software with an open-source license, so that anybody may also develop the same software or understand its internal functioning. With open-source software, generally anyone is allowed to create modifications of it, port it to new operating systems and processor architectures, share it with others or, in some cases, market it. Scholars Casson and Ryan have pointed out several policy-based reasons for adoption of open source – in particular, the heightened value proposition from open source (when compared to most proprietary formats) in the following categories:"
			},{
				format: 'ul',
				items: ["Security", "Affordability", "Transparency", "Perpetuity","Interoperability","Flexibility","Localization -- particularly in the context of local governments (who make software decisions). Casson and Ryan argue that \"governments have an inherent responsibility and fiduciary duty to taxpayers\" which includes the careful analysis of these factors when deciding to purchase proprietary software or implement an open-source option."
				]
			},{
				format: "p",
				text: "The Open Source Definition, notably, presents an open-source philosophy, and further defines the terms of usage, modification and redistribution of open-source software. Software licenses grant rights to users which would otherwise be reserved by copyright law to the copyright holder. Several open-source software licenses have qualified within the boundaries of the Open Source Definition. The most prominent and popular example is the GNU General Public License (GPL), which \"allows free distribution under the condition that further developments and applications are put under the same licence\", thus also free.",
			},{
				format: "p",
				text: "The open source label came out of a strategy session held on April 7, 1998 in Palo Alto in reaction to Netscape\'s January 1998 announcement of a source code release for Navigator (as Mozilla). A group of individuals at the session included Tim O\'Reilly, Linus Torvalds, Tom Paquin, Jamie Zawinski, Larry Wall, Brian Behlendorf, Sameer Parekh, Eric Allman, Greg Olson, Paul Vixie, John Ousterhout, Guido van Rossum, Philip Zimmermann, John Gilmore and Eric S. Raymond. They used the opportunity before the release of Navigator\'s source code to clarify a potential confusion caused by the ambiguity of the word \"free\" in English.",
			},{
				format: "p",
				text: "Many people claimed that the birth of the Internet, since 1969, started the open source movement, while others do not distinguish between open-source and free software movements.",
			},{
				format: "p",
				text: "The Free Software Foundation (FSF), started in 1985, intended the word \"free\" to mean freedom to distribute (or \"free as in free speech\") and not freedom from cost (or \"free as in free beer\"). Since a great deal of free software already was (and still is) free of charge, such free software became associated with zero cost, which seemed anti-commercial.",
			},{
				format: "p",
				text: "The Open Source Initiative (OSI) was formed in February 1998 by Eric Raymond and Bruce Perens. With at least 20 years of evidence from case histories of closed software development versus open development already provided by the Internet developer community, the OSI presented the \"open source\" case to commercial businesses, like Netscape. The OSI hoped that the usage of the label \"open source\", a term suggested by Peterson of the Foresight Institute at the strategy session, would eliminate ambiguity, particularly for individuals who perceive \"free software\" as anti-commercial. They sought to bring a higher profile to the practical benefits of freely available source code, and they wanted to bring major software businesses and other high-tech industries into open source. Perens attempted to register \"open source\" as a service mark for the OSI, but that attempt was impractical by trademark standards. Meanwhile, due to the presentation of Raymond\'s paper to the upper management at Netscape — Raymond only discovered when he read the Press Release, and was called by Netscape CEO Jim Barksdale\'s PA later in the day — Netscape released its Navigator source code as open source, with favorable results.",
			},{
				format: "h3",
				text: "Open-source software development",
			},{
				format: "h4",
				text: "Development model",
			},{
				format: "p",
				text: "In his 1997 essay The Cathedral and the Bazaar, open-source evangelist Eric S. Raymond suggests a model for developing OSS known as the bazaar model. Raymond likens the development of software by traditional methodologies to building a cathedral, \"carefully crafted by individual wizards or small bands of mages working in splendid isolation\". He suggests that all software should be developed using the bazaar style, which he described as \"a great babbling bazaar of differing agendas and approaches.\"",
			},{
				format: "p",
				text: "In the traditional model of development, which he called the cathedral model, development takes place in a centralized way. Roles are clearly defined. Roles include people dedicated to designing (the architects), people responsible for managing the project, and people responsible for implementation. Traditional software engineering follows the cathedral model.",
			},{
				format: "p",
				text: "The bazaar model, however, is different. In this model, roles are not clearly defined. Gregorio Robles suggests that software developed using the bazaar model should exhibit the following patterns:",
			},{
				format: "h4",
				text: "Users should be treated as co-developers",
			},{
				format: "p",
				text: "The users are treated like co-developers and so they should have access to the source code of the software. Furthermore, users are encouraged to submit additions to the software, code fixes for the software, bug reports, documentation etc. Having more co-developers increases the rate at which the software evolves. Linus's law states, \"Given enough eyeballs all bugs are shallow.\" This means that if many users view the source code, they will eventually find all bugs and suggest how to fix them. Note that some users have advanced programming skills, and furthermore, each user\'s machine provides an additional testing environment. This new testing environment offers that ability to find and fix a new bug.",
			},{
				format: "h4",
				text: "Early releases",
			},{
				format: "p",
				text: "The first version of the software should be released as early as possible so as to increase one's chances of finding co-developers early.",
			},{
				format: "h4",
				text: "Frequent integration",
			},{
				format: "p",
				text: "Code changes should be integrated (merged into a shared code base) as often as possible so as to avoid the overhead of fixing a large number of bugs at the end of the project life cycle. Some open source projects have nightly builds where integration is done automatically on a daily basis.",
			},{
				format: "h4",
				text: "Several versions",
			},{
				format: "p",
				text: "There should be at least two versions of the software. There should be a buggier version with more features and a more stable version with fewer features. The buggy version (also called the development version) is for users who want the immediate use of the latest features, and are willing to accept the risk of using code that is not yet thoroughly tested. The users can then act as co-developers, reporting bugs and providing bug fixes.",
			},{
				format: "h4",
				text: "High modularization",
			},{
				format: "p",
				text: "The general structure of the software should be modular allowing for parallel development on independent components.",
			},{
				format: "h4",
				text: "Dynamic decision making structure",
			},{
				format: "p",
				text: "There is a need for a decision making structure, whether formal or informal, that makes strategic decisions depending on changing user requirements and other factors.",
			},{
				format: "p",
				text: "Data suggests, however, that OSS is not quite as democratic as the bazaar model suggests. An analysis of five billion bytes of free/open source code by 31,999 developers shows that 74% of the code was written by the most active 10% of authors. The average number of authors involved in a project was 5.1, with the median at 2.",
			},{
				format: "h4",
				text: "Advantages and disadvantages",
			},{
				format: "p",
				text: "Open source software is usually easier to obtain than proprietary software, often resulting in increased usage. Additionally, the availability of an open source implementation of a standard can increase adoption of that standard. It has also helped to build developer loyalty as developers feel empowered and have a sense of ownership of the end product.",
			},{
				format: "p",
				text: "Moreover, lower costs of marketing and logistical services are needed for OSS. OSS also helps companies keep abreast of technology developments. It is a good tool to promote a company's image, including its commercial products. The OSS development approach has helped produce reliable, high quality software quickly and inexpensively.",
			},{
				format: "p",
				text: "Open source development offers the potential for a more flexible technology and quicker innovation. It is said to be more reliable since it typically has thousands of independent programmers testing and fixing bugs of the software. It is flexible because modular systems allow programmers to build custom interfaces, or add new abilities to it and it is innovative since open source programs are the product of collaboration among a large number of different programmers. The mix of divergent perspectives, corporate objectives, and personal goals speeds up innovation.",
			},{
				format: "p",
				text: "Moreover, free software can be developed in accord with purely technical requirements. It does not require thinking about commercial pressure that often degrades the quality of the software. Commercial pressures make traditional software developers pay more attention to customers' requirements than to security requirements, since such features are somewhat invisible to the customer.",
			},{
				format: "p",
				text: "It is sometimes said that the open source development process may not be well defined and the stages in the development process, such as system testing and documentation may be ignored. However this is only true for small (mostly single programmer) projects. Larger, successful projects do define and enforce at least some rules as they need them to make the teamwork possible. In the most complex projects these rules may be as strict as reviewing even minor change by two independent developers.",
			},{
				format: "p",
				text: "Not all OSS initiatives have been successful, for example SourceXchange and Eazel. Software experts and researchers who are not convinced by open source's ability to produce quality systems identify the unclear process, the late defect discovery and the lack of any empirical evidence as the most important problems (collected data concerning productivity and quality). It is also difficult to design a commercially sound business model around the open source paradigm. Consequently, only technical requirements may be satisfied and not the ones of the market. In terms of security, open source may allow hackers to know about the weaknesses or loopholes of the software more easily than closed-source software.It depends on control mechanisms in order to create effective performance of autonomous agents who participate in virtual organizations.",
			},{
				format: "h4",
				text: "Development tools",
			},{
				format: "p",
				text: "In OSS development, tools are used to support the development of the product and the development process itself.",
			},{
				format: "p",
				text: "Revision control systems such as Concurrent Versions System (CVS) and later Subversion (SVN) and Git are examples of tools, often themselves open source, help manage the source code files and the changes to those files for a software project. The projects are frequently hosted and published on sites like Launchpad, Bitbucket, and GitHub.",
			},{
				format: "p",
				text: "Open source projects are often loosely organized with \"little formalised process modelling or support\", but utilities such as issue trackers are often used to organize open source software development. Commonly used bugtrackers include Bugzilla and Redmine.",
			},{
				format: "p",
				text: "Tools such as mailing lists and IRC provide means of coordination among developers. Centralized code hosting sites also have social features that allow developers to communicate.",
			},{
				format: "h3",
				text: "References and Resources",
			},{
				format: "ullia",
				items: [
					{
						url: "https://en.wikipedia.org/wiki/Free_software",
						text: "Free Software"
					},{
						url: "https://en.wikipedia.org/wiki/Free_software_community",
						text: "Free software community"
					},{
						url: "https://en.wikipedia.org/wiki/Free_software_movement",
						text: "Free software movement"
					},{
						url: "https://en.wikipedia.org/wiki/List_of_open_source_software_packages",
						text: "List of open-source software packages"					
					},{
						url: "https://en.wikipedia.org/wiki/Open-content",
						text: "Open content"
					},{
						url: "https://en.wikipedia.org/wiki/Open_source_advocacy",
						text: "Open-source advocacy"
					},{
						url: "https://en.wikipedia.org/wiki/Open_source_hardware",
						text: "Open-source hardware"
					},{
						url: "https://en.wikipedia.org/wiki/Open_Source_Initiative",
						text: "Open Source Initiative"
					},{
						url: "https://en.wikipedia.org/wiki/Open_Source_Software_Institute",
						text: "Open Source Institute"
					},{
						url: "https://en.wikipedia.org/wiki/Open_source_software_security",
						text: "Open-source software security"
					},{
						url: "https://en.wikipedia.org/wiki/Open_source_video_games",
						text: "Open-source video games"
					},{
						url: "https://en.wikipedia.org/wiki/Shared_source",
						text: "Shared source"
					},{
						url: "https://en.wikipedia.org/wiki/Timeline_of_open_source_software",
						text: "Timeline of open-source software"
					},{
						url: "https://en.wikipedia.org/wiki/User-generated_content",
						text: "User-generated content"					
					}
				]
			},{
				format: "h3",
				text: "Why I care:",
			},{
				format: "p",
				text: "Open-source software as an alternative to the more proprietary software and approaches of Apple and MicroSoft meant that I had options when I decided that I wasn\'t happy with the software and corporate policies of those companies. I also liked the idea of a collaborative and cooperative approach to software development, where people interested in software can potentially influence the development of the tools that they use. I also like the idea that people can view the code to learn more about it, to see how it works, to learn from these examples from software, and perhaps be inspired to improve upon it. Without the veil of secrecy imposed by proprietary software manufacturers, there is the chance to test that hypothesis that \'given enough eyeballs, all bugs are shallow\'.",
			},{
				format: "p",
				text: "And so my current computer uses:",
			},{
				format: "ulliaMulti",
				items:[
					{
						text: "OS",
						links:[
							{
								url: "https://www.ubuntu.com/",
								text: "Ubuntu"
							}
						]
					},{
						text: "Browsers",
						links:[
							{
								url: "https://www.chromium.org/getting-involved/download-chromium",
								text: "Chromium"
							},{
								url: "https://www.mozilla.org/firefox",
								text: "Mozilla Firefox"
							}
						]
					},{
						text: "FTP",
						links:[
							{
								url: "https://filezilla-project.org/",
								text: "FileZilla"
							}
						]
					},{
						text: "SSH and telnet client",
						links:[
							{
								url: "https://www.chiark.greenend.org.uk/~sgtatham/putty",
								text: "PuTTY"
							}
						]
					},{
						text: "Version Control",
						links:[
							{
								url: "https://git-scm.com/downloads",
								text: "Git"
							}
						]
					},{
						text: "Office Suite",
						links:[
							{
								url: "https://https://www.libreoffice.org/",
								text: "LibreOffice"
							}
						]
					},{
						text: "Graphics Editor",
						links:[
							{
								url: "https://www/gimp.org",
								text: "GIMP"
							}
						]
					},{
						text: "Media Player",
						links:[
							{
								url: "https://www.videolan.org/vlc/index.html",
								text: "VLC Media Player"
							}
						]
					},{
						text: "E-book management and converter",
						links:[
							{
								url: "https://calibre-ebook.com",
								text: "Calibre"
							}
						]
					}
				]
			},{
				format: "h4",
				text: "Organizations",
			},{
				format: "p",
				text: "Some of the \"more prominent organizations\" involved in OSS development include the Apache Software Foundation, creators of the Apache web server; the Linux Foundation, a nonprofit which as of 2012 employed Linus Torvalds, the creator of the Linux operating system kernel; the Eclipse Foundation, home of the Eclipse software development platform; the Debian Project, creators of the influential Debian GNU/Linux distribution; the Mozilla Foundation, home of the Firefox web browser; and OW2, European-born community developing open source middleware. New organizations tend to have a more sophisticated governance model and their membership is often formed by legal entity members.",
			},{
				format: "p",
				text: "Open Source Software Institute is a membership-based, non-profit (501 (c)(6)) organization established in 2001 that promotes the development and implementation of open source software solutions within US Federal, state and local government agencies. OSSI's efforts have focused on promoting adoption of open source software programs and policies within Federal Government and Defense and Homeland Security communities.",
			},{
				format: "p",
				text: "Open Source for America is a group created to raise awareness in the United States Federal Government about the benefits of open source software. Their stated goals are to encourage the government's use of open source software, participation in open source software projects, and incorporation of open source community dynamics to increase government transparency.",
			},{
				format: "p",
				text: "Mil-OSS is a group dedicated to the advancement of OSS use and creation in the military.",
			}
		]
		const content = [];
		data.forEach(function(datum, i){
			content.push(<Base key={i} text={datum.text} format={datum.format} items={datum.items} />)
		});
		return(
			<section className='tribute'>
				<div className='container'>
					{content} 
				</div>
			</section>
		)
	}
});
module.exports = Tribute;