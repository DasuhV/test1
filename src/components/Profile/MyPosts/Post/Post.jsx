import React from 'react'
import s from './Post.module.css'

const Post = (props) => {
	return (
		<div className={s.post}>
			<div>
				<div>post: {props.id} MESSAGE: {props.message}</div>
				<div className={s.likes}>Likes: {props.likescount}</div>
			</div>
		</div>

	)
}

export default Post;