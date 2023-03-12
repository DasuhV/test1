import React from 'react';
import { connect } from 'react-redux';
import {
	addUsers,
	pageChanged,
	follow,
	unfollow
} from '../../redux/usersReducer';
import Users from './Users';
import Preloader from "../common/Preloader/Preloader";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import { compose } from "redux";
import {
	getCurrentPage,
	getFollowingInProgress,
	getIsFetching,
	getPageSize,
	getTotalUsersCount,
	getUsers
} from "../../redux/usersSelectors";

class UsersContainer extends React.Component {

	componentDidMount() {
		this.props.addUsers(this.props.currentPage, this.props.pageSize)
	}
	
	render() {
		return (
			<>
				{this.props.isFetching ? <Preloader /> : null}
				<Users
					followingInProgress={this.props.followingInProgress}
					totalUsersCount={this.props.totalUsersCount}
					pageSize={this.props.pageSize}
					users={this.props.users}
					currentPage={this.props.currentPage}
					onPageChanged={this.onPageChanged}
					unfollow={this.props.unfollow}
					follow={this.props.follow}
					pageChanged={this.props.pageChanged}
					isAuth={this.props.isAuth}
				/>
			</>
		)
	}
}

let mapStateToProps = (state) => {
	return {
		users: getUsers(state),
		pageSize: getPageSize(state),
		totalUsersCount: getTotalUsersCount(state),
		currentPage: getCurrentPage(state),
		isFetching: getIsFetching(state),
		followingInProgress: getFollowingInProgress(state)
	}
}
export default compose(
	connect(mapStateToProps, { addUsers, pageChanged, unfollow, follow }),
	withAuthRedirect
)(UsersContainer)
//
// let AuthRedirectComponent = withAuthRedirect(UsersContainer)
// export default connect(mapStateToProps, {addUsers,pageChanged,unfollow,follow})(AuthRedirectComponent);