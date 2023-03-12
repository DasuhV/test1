import React from 'react'
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    addPost,
    getUserProfile, getProfileStatus, updateProfileStatus,
} from "../../redux/profileReducer";
import {
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.router.params.userId
        if (!userId) {
            userId = this.props.authorizedUserId
            if (!userId){
                this.props.router.navigate("/login")
            }
        }
        this.props.getUserProfile(userId)
        this.props.getProfileStatus(userId)
    }

    render() {
        return <Profile {...this.props} profile={this.props.profile} status = {this.props.status} updateStatus = {this.props.updateProfileStatus}/>
    }
}

let mapStateToProps = (state) => ({
    postData: state.profilePage.postData,
    postText: state.profilePage.postText,

    profile: state.profilePage.profile,
    status: state.profilePage.status,
    isAuth: state.auth.isAuth,
    authorizedUserId: state.auth.id
})
function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{location, navigate, params}}
            />
        );
    }

    return ComponentWithRouterProp;
}

export default compose(
    connect(mapStateToProps, {addPost, getUserProfile,getProfileStatus,updateProfileStatus}),
        withRouter,
        // withAuthRedirect
    )(ProfileContainer)

// let AuthRedirectComponent = withAuthRedirect(ProfileContainer)

//
// let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);
// export default connect(mapStateToProps, {
//     updatePostText,
//     addPost,
//     getUserProfile
// })(WithUrlDataContainerComponent);