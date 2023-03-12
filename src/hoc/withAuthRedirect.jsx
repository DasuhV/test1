import React from 'react';
import {Navigate} from "react-router-dom";
import {connect} from "react-redux";

let mapStateToPropsForRedirect = (state) => ({
    isAuth: state.auth.isAuth,
})
const withAuthRedirect = (Component) => {
    let redirectComponent = (props) => {
        return !props.isAuth
            ? <Navigate to={'/login'}/>
            : <Component {...props}/>
    }
    return connect(mapStateToPropsForRedirect)(redirectComponent);
};
export default withAuthRedirect;
