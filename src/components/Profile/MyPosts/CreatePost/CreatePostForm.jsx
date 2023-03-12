import { maxLengthCreator, required } from "../../../../utils/validators/validator";
import { Field, reduxForm } from "redux-form";
import { FormControlComponent } from "../../../common/FormControls/FormControls";
import s from "../MyPosts.module.css";
import React from "react";

const maxlength20 = maxLengthCreator(20)
const CreatePostForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<div>
				<Field
					typefield={"textarea"}
					placeholder={"Enter post here! plz"}
					name={"postText"}
					component={FormControlComponent}
					validate={[required, maxlength20]}
				/>
			</div>
			<div className={s.postButtonContainer}>
				<button>Add Post</button>
			</div>
		</form>
	)
}
export const CreatePostReduxForm = reduxForm({ form: "addPost" })(CreatePostForm)