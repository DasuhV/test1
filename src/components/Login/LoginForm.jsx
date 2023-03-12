import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../utils/validators/validator";
import {FormControlComponent} from "../common/FormControls/FormControls";
import React from "react";
import s from '../common/FormControls/FormControls.module.css'

const maxLength30 = maxLengthCreator(30)
const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={s.loginForm}>
            <div>
                <Field typefield={"input"} placeholder={"Email"} name={"email"} component={FormControlComponent}
                       validate={[required, maxLength30]}/>
            </div>
            <div>
				 <Field typefield={"input"} placeholder={"Password"} name={"password"} type={"password"}
                       component={FormControlComponent} validate={[required, maxLength30]}/>
            </div>
            <div className={s.rememberMe}>
				 <Field typefield={"input"} component={FormControlComponent} name={"rememberMe"}
                       type={"checkbox"}/> remember me
            </div>
            {props.error &&
                <div className={s.formSummaryError}>
                    {props.error}
                </div>
            }
            <div>
                <button>Log in</button>
            </div>
        </form>
    )
}
export const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)