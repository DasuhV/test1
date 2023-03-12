import React from 'react';
import preloader from "../../../assets/images/Spinner-1.3s-200px.svg";
import s from './Preloader.module.css'
const Preloader = () => {
    return (
        <div>
            <img className={s.preloaderImg} src={preloader}/>
        </div>
    );
};

export default Preloader;