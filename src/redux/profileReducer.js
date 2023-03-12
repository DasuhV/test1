import {profileAPI} from "../api/api";

const ADD_POST = 'social network/profile/ADD-POST';
const SET_USER_PROFILE = 'social network/profile/SET_USER_PROFILE';
const SET_PROFILE_STATUS = 'social network/profile/SET_PROFILE_STATUS';
const DELETE_POST = 'social network/profile/DELETE_POST';


let initialState = {

     profile: null,
    postData: [
        {id: 1, message: 'Hi', likesCount: "12"},
        {id: 2, message: 'Hey, this is my first post!', likesCount: "1"},
        {id: 3, message: 'Hey, this is my second post!', likesCount: "0"},
        {id: 4, message: 'Hey, this is my third post!', likesCount: "1000"}
    ],
    postText: "",
    status: "",

}
const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: state.postData.length + 1, message: action.postText, likesCount: "0"
            };
            return {
                ...state,
                postText: '',
                postData: [...state.postData, newPost],
            };
            case DELETE_POST:
            return {
                ...state,
                postData: state.postData.filter(post => post.id !== action.id)
            };

        case SET_USER_PROFILE:
            return {...state, profile: action.profile}

        case SET_PROFILE_STATUS:
            return {...state, status: action.status}

        default:
            return state;
    }
}
export default profileReducer;

export const deletePost = (id) => {
    return {
        type: DELETE_POST,
        id
    }
}
export const addPost = (postText) => {
    return {
        type: ADD_POST,
        postText:postText
    }
}
const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const getUserProfile = (userId) => (dispatch) => {
    profileAPI.getUserProfile(userId)
        .then(data => {
            dispatch(setUserProfile(data));
        });
}
const setProfileStatus = (status) => ({type: SET_PROFILE_STATUS, status})
export const getProfileStatus = (userId) => async (dispatch) => {
   let response = await profileAPI.getProfileStatus(userId)
            dispatch(setProfileStatus(response.data));
}
export const updateProfileStatus = (status) => async (dispatch) => {
   let response = profileAPI.updateProfileStatus(status)
            if (!response.data.resultCode) {
                dispatch(setProfileStatus(status));
            }
}
