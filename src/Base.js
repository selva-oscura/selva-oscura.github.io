const React = require('react');

const Base = (props) => {
	if(props.format==='p'){
		return <p className={props.className}>{props.text}</p>
	}else if(props.format==='h1'){
		return <h1 className={props.className}>{props.text}</h1>
	}else if(props.format==='h2'){
		return <h2 className={props.className}>{props.text}</h2>
	}else if(props.format==='h3'){
		return <h3 className={props.className}>{props.text}</h3>
	}else if(props.format==='h4'){
		return <h4 className={props.className}>{props.text}</h4>
	}else if(props.format==='h5'){
		return <h5 className={props.className}>{props.text}</h5>
	}else if(props.format==='h6'){
		return <h6 className={props.className}>{props.text}</h6>
	}else if(props.format==='ul'){
		var listItems = [];
		props.items.forEach(function(item, i){
			listItems.push(<li key={i}>{item}</li>)
		});
		return (
			<ul className={props.className}>
				{listItems}
			</ul>
		)
	}else if(props.format==='ullia'){
		var listItems = [];
		props.items.forEach(function(item, i){
			listItems.push(<li key={i}><a href={item.url} target='_new'>{item.text}</a></li>)
		});
		return (
			<ul className={props.className}>
				{listItems}
			</ul>
		)
	}else if(props.format==='ulliaMulti'){
		var listItems = [];
		props.items.forEach(function(item, i){
			var links = [];
			var linkCount = item.links.length;
			item.links.forEach(function(link,i){
				links.push(<a key={i} href={link.url} target='_new'>{link.text}</a>)
				if(linkCount>1 && i<linkCount-1){
					links.push(<span key={'comma'+i}>, </span>);
				}
			});
			listItems.push(<li key={i}>{item.text}: {links}</li>)
		});
		return (
			<ul clasName={props.className}>
				{listItems}
			</ul>
		)
	}
}

module.exports = Base;