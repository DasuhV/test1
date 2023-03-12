import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";


const SET_USER_DATA = 'social network/auth/SET_USER_DATA';


let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}
export default authReducer;
const setUserData = (id, email, login, isAuth) => ({type: SET_USER_DATA, payload: {id, email, login, isAuth}})
export const getUserAuthData = () => async (dispatch) => {
    const response = await authAPI.getIsAuth()
    if (response.resultCode === 0) {
        let {id, email, login} = response.data;
        dispatch(setUserData(id, email, login, true));
    }
}
export const login = (email, password, rememberMe) => async (dispatch) => {
    const response = await authAPI.login(email, password, rememberMe);
    if (response.resultCode === 0) {
        dispatch(getUserAuthData());
    } else {
        dispatch(stopSubmit("login", {_error: response.messages ? response.messages[0] : "something wrong"}))
    }
}
export const logout = () => async (dispatch) => {
    const response = await authAPI.logout()
    if (response.resultCode === 0) {
        dispatch(setUserData(null, null, null, false));
    }
}
