import React from 'react';
import s from './Users.module.css'
import Paginator from '../common/Paginator/Paginator';
import User from './User';



let Users = (props) => {
	return (
		<div className={s.usersPage}>
			<h2>
				Users
			</h2>
			{
				props.users.map(user =>
					<User
						key={user.id}
						user={user}
						follow={props.follow}
						unfollow={props.unfollow}
						followingInProgress={props.followingInProgress}
					/>
				)
			}
			<div>
				<Paginator
					totalItemsCount={props.totalUsersCount}
					pageSize={props.pageSize}
					currentPage={props.currentPage}
					pageChanged={props.pageChanged}
				/>
			</div>
		</div>
	)
}


export default Users;