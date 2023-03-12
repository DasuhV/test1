import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {getUserAuthData} from "./authReducer";
const SET_INITIALIZED_SUCCESS = 'social network/app/SET_INITIALIZED_SUCCESS';


let initialState = {
    initialized: false
}
const appReducer = (state = initialState, action) => {
    switch (action.type) {
       case SET_INITIALIZED_SUCCESS:
           return {
               ...state,
               initialized: true
           }
        default:
            return state;
    }
}

const initializedSuccess = (id,email,login,isAuth) => ({type: SET_INITIALIZED_SUCCESS})
export const initializeApp = () => (dispatch) => {
   let promise =  dispatch(getUserAuthData());
    Promise.all([promise]).then( () => {
        dispatch(initializedSuccess());
    })
}
export default appReducer;