import React from 'react';
import s from "../../MainMenu.module.css";

const Friend = (props) => {


    return (

        <div className={s.friend}>
            <div className={s.image}>
                <img
                    src={props.img}
                    alt=""/>
            </div>
            <div className={s.name}>{props.name}</div>
        </div>

    );
};

export default Friend;