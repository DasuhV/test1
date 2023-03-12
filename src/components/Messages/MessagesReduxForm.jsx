import React from 'react';
import s from './Messages.module.css';
import { Field, reduxForm } from "redux-form";
import { FormControlComponent } from "../common/FormControls/FormControls";
import { maxLengthCreator, required } from "../../utils/validators/validator";

const maxLength50 = maxLengthCreator(50);

const MessagesForm = (props) => {
	return <form onSubmit={props.handleSubmit} className={s.addMessage}>
		<div>
			<Field
				typefield={"textarea"}
				placeholder={"ENTER Message"}
				name={"message"}
				component={FormControlComponent}
				validate={[required, maxLength50]} />
		</div>
		<button>add message</button>
	</form>;
};
export const MessagesReduxForm = reduxForm({ form: "messages" })(MessagesForm);
