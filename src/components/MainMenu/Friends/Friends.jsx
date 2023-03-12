import React from 'react';
import s from "../MainMenu.module.css";
import Friend from "./Friend/Friend";

const Friends = (props) => {

    let friendElement = props.friends.map(f => <Friend id={f.id} name={f.name} img={f.imgsrc}/>)

let onButtonFriend = () => {

}
    return (
        <div>
            <div className={s.title}>Your Friends</div>
            <div className={s.friends}>
                <button onClick={onButtonFriend}></button>
                {friendElement}
            </div>
        </div>
    );
};

export default Friends;