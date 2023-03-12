import React from 'react'
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import CreatePost from "./MyPosts/CreatePost/CreatePost";


const Profile = (props) => {
    return (
        <div className={s.profile}>
            <ProfileInfo profile={props.profile} status={props.status} updateStatus = {props.updateStatus}/>
            <CreatePost {...props}/>
        </div>
    )
}

export default Profile;