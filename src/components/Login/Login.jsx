import React from 'react';
import { login, logout } from "../../redux/authReducer";
import { LoginReduxForm } from "./LoginForm";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

const Login = (props) => {
	const onLogin = (dataLogin) => {
		props.login(dataLogin.email, dataLogin.password, dataLogin.rememberMe)
	}

	if (props.isAuth) {
		return <Navigate to={"/profile"} />
	}

	return (
		<div>
			<h1>Login</h1>
			<LoginReduxForm onSubmit={onLogin} />
		</div>
	);
};
const mapStateToProps = (state) => ({ isAuth: state.auth.isAuth })
export default connect(mapStateToProps, { login })(Login);