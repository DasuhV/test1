import {usersAPI} from "../api/api";

const SET_USERS = 'social network/users/SET_USERS';
const SET_CURRENT_PAGE = 'social network/users/SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'social network/users/SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'social network/users/TOGGLE_IS_FETCHING';
const FOLLOWING_TOGGLE = 'social network/users/FOLLOWING_TOGGLE';
const TOGGLE_FOLLOWING_IN_PROGRESS = 'social network/users/TOGGLE_FOLLOWING_IN_PROGRESS';


let initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}
const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOWING_TOGGLE: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: !u.followed}
                    }
                    return u;
                })
            }
        }
        case SET_USERS:
            return {...state, users: action.users}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.count}
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        case TOGGLE_FOLLOWING_IN_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state;
    }
}
export default usersReducer;

const followingToggle = (userId) => ({type: FOLLOWING_TOGGLE, userId: userId})
const setUsers = (users) => ({type: SET_USERS, users: users})
const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage: currentPage,})
const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount})
const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching: isFetching})
const toggleFollowingProgress = (isFetching, userId) => ({type: TOGGLE_FOLLOWING_IN_PROGRESS, isFetching, userId})

export const addUsers = (currentPage, pageSize) => async (dispatch) => {
    dispatch(toggleIsFetching(true));
    const response = await usersAPI.requestUsers(currentPage, pageSize);
    dispatch(setCurrentPage(currentPage));
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(response.items));
    dispatch(setTotalUsersCount(response.totalCount));
}
export const pageChanged = (pageNumber, currentPage, pageSize) => async (dispatch) => {
    dispatch(setCurrentPage(pageNumber));
    dispatch(toggleIsFetching(true));
    const response = await usersAPI.requestUsers(pageNumber, pageSize);
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(response.items));
}

const followUnfollow = async (dispatch,userId,apiMethod) => {
    dispatch(toggleFollowingProgress(true, userId));
    const response = await apiMethod(userId)

    if (!response.resultCode) {
        dispatch(followingToggle(userId));
    }
    dispatch(toggleFollowingProgress(false, userId));
}
export const unfollow = (userId) => async (dispatch) => {
    followUnfollow(dispatch,userId,usersAPI.unfollowAPI)
}
export const follow = (userId) => (dispatch) => {
    followUnfollow(dispatch,userId,usersAPI.followAPI)
}


