const React = require('react');
const BaseP = require('./BaseP.js');
const BaseH2 = require('./BaseH2.js');
const BaseH3 = require('./BaseH3.js');
const BaseH4 = require('./BaseH4.js');
const BaseH6 = require('./BaseH6.js');
const BaseUl = require('./BaseUl.js');

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
				text: 'In the early days of computing, programmers and developers shared software in order to learn from each other and evolve the field of computing. Eventually the open source notion moved to the way side of commercialization of software in the years 1970-1980. In 1997, Eric Raymond published The Cathedral and the Bazaar, a reflective analysis of the hacker community and free software principles. The paper received significant attention in early 1998, and was one factor in motivating Netscape Communications Corporation to release their popular Netscape Communicator Internet suite as free software. This source code subsequently became the basis behind SeaMonkey, Mozilla Firefox, Thunderbird and KompoZer.'
			},{
				format: 'p',
				text: "Netscape's act prompted Raymond and others to look into how to bring the Free Software Foundation's free software ideas and perceived benefits to the commercial software industry. They concluded that FSF's social activism was not appealing to companies like Netscape, and looked for a way to rebrand the free software movement to emphasize the business potential of sharing and collaborating on software source code. The new term they chose was \"open source\", which was soon adopted by Bruce Perens, publisher Tim O'Reilly, Linus Torvalds, and others. The Open Source Initiative was founded in February 1998 to encourage use of the new term and evangelize open-source principles."
			},{
				format: "p",
				text: "While the Open Source Initiative sought to encourage the use of the new term and evangelize the principles it adhered to, commercial software vendors found themselves increasingly threatened by the concept of freely distributed software and universal access to an application's source code. A Microsoft executive publicly stated in 2001 that \"open source is an intellectual property destroyer. I can't imagine something that could be worse than this for the software business and the intellectual-property business.\" However, while FOSS has historically played a role outside of the mainstream of private software development, companies as large as Microsoft have begun to develop official open-source presences on the Internet. IBM, Oracle, Google and State Farm are just a few of the companies with a serious public stake in today's competitive open-source market. There has been a significant shift in the corporate philosophy concerning the development of FOSS."
			},{
				format: 'p',
				text: "The free software movement was launched in 1983. In 1998, a group of individuals advocated that the term free software should be replaced by open-source software (OSS) as an expression which is less ambiguous and more comfortable for the corporate world. Software developers may want to publish their software with an open-source license, so that anybody may also develop the same software or understand its internal functioning. With open-source software, generally anyone is allowed to create modifications of it, port it to new operating systems and processor architectures, share it with others or, in some cases, market it. Scholars Casson and Ryan have pointed out several policy-based reasons for adoption of open source – in particular, the heightened value proposition from open source (when compared to most proprietary formats) in the following categories:"
			},{
				format: 'ul',
				items: ["Security", "Affordability", "Transparency", "Perpetuity","Interoperability","Flexibility","Localization — particularly in the context of local governments (who make software decisions). Casson and Ryan argue that \"governments have an inherent responsibility and fiduciary duty to taxpayers\" which includes the careful analysis of these factors when deciding to purchase proprietary software or implement an open-source option."
				]
			}
		]
		const content = [];
		data.forEach(function(datum, i){
			if(datum.format==='p'){
				content.push(<BaseP key={i} text={datum.text} />)
			}else if(datum.format==='h2'){
				content.push(<BaseH2 key={i} text={datum.text} />)
			}else if(datum.format==='h3'){
				content.push(<BaseH3 key={i} text={datum.text} />)
			}else if(datum.format==='h4'){
				content.push(<BaseH4 key={i} text={datum.text} />)
			}else if(datum.format==='h6'){
				content.push(<BaseH6 key={i} text={datum.text} />)
			}else if(datum.format==='ul'){
				content.push(<BaseUl key={i} items={datum.items} />)
			}
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