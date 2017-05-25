import React from 'react';
import Message from './Message';

const Messages = (props) => {
	return (
		<div>
			<p>
				{props.messages.map((message, i) => (<Message key={i} message={message} />))}
			</p>
		</div>

	);
}

export default Messages;