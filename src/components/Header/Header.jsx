import React from 'react';
import s from './Header.module.css'
import { NavLink } from "react-router-dom";
import ptichka from '../../assets/images/ptichka.jpg'
 import legoLogo from '../../assets/images/LEGO_logo.png'

const Header = (props) => {

	return (
		<header className={s.header}>
			<div className={s.headerLogoContainer}>
				<img alt='#' src={legoLogo} />
				{/* <img alt='#' className={s.headerLogo} src={props.profile.photos.small ? props.profile.photos.small : ''} /> */}
			</div>
			{props.isAuth && props.profile
				? <div className={s.loginBlock}>
					<img alt='#' src={props.profile.photos.small ? props.profile.photos.small : ptichka} />
					{props.login}
					<button onClick={props.logout}>logout</button>
				</div>
				: <NavLink className={s.loginLink} to={'/Login'}>login</NavLink>}
		</header>
	)
}
export default Header;