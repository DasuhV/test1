import React from 'react';
import s from './Messages.module.css'
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import { MessagesReduxForm } from './MessagesReduxForm';

const Messages = (props) => {

	let dialogElements = props.dialogData.map(d => <Dialog key={d.id} name={d.name} id={d.id} />);
	let messageElements = props.messageData.map(m => <Message key={m.id} message={m.message} />);
	let addMessage = (values) => {
		props.addMessage(values.message)
	}

	return (
		<div className={s.messages}>
			<nav className={s.dialogs}>
				{dialogElements}
			</nav>
			<div className={s.messageItem}>
				{messageElements}
			</div>
			<MessagesReduxForm onSubmit={addMessage} />
		</div>
	)
}
export default Messages;