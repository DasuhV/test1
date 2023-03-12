import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {logout} from "../../redux/authReducer";

function HeaderContainer(props) {
	return (
		<Header {...props}/>
	)
}
let mapStateToProps = (state) => {
	return {
		isAuth: state.auth.isAuth,
		login: state.auth.login,
		profile: state.profilePage.profile
	}
}
export default connect(mapStateToProps,{logout})(HeaderContainer);