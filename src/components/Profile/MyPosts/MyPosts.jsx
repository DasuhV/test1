import React from 'react'
import s from './MyPosts.module.css'
import CreatePost from "./CreatePost/CreatePost";

const MyPosts = (props) => {

    return (
        <div className={s.myPosts}>
            <CreatePost {...props}/>
        </div>
    )
}
export default MyPosts;