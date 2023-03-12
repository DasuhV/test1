import React from 'react';
import s from "../MyPosts.module.css";
import Post from "../Post/Post";
import {CreatePostReduxForm} from "./CreatePostForm";

const CreatePost = (props) => {
    let postElements = props.postData.map(p => {
        return <Post key={p.id} id={p.id} message={p.message} likescount={p.likesCount}/>
    }).reverse()
    let addPost = (values) => {
        props.addPost(values.postText)
    }

    return (
        <div className={s.createPost}>
            <h3 className={s.postTitle}>Напиши пост!</h3>
            <CreatePostReduxForm onSubmit={addPost}/>
            {postElements}
        </div>
    );
};

export default CreatePost;