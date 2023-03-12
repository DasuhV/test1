import React from 'react'
import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from './ProfileStatus'
import userPhoto from "../../../assets/images/logoUser.png";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
const ProfileInfo = (props) => {
	if(!props.profile){
		return <Preloader/>
	}
	return <div className={s.profileInfo}>
		<div className={s.mainPicture}>
			<img src='https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg' />
		</div>
		<div className={s.mainInfo}>
			<div className={s.profileImageContainer}>
				<img className={s.profileImage} src={props.profile.photos.large? props.profile.photos.large : userPhoto} />
			</div>
			<div className={s.profileDescription}>
				<div className={s.fullName}>{props.profile.fullName}</div>
				<div className={s.aboutMe}>{props.profile.aboutMe}</div>
				<div className={s.lookingForAJob}>
					<div>{!props.profile.lookingForAJob
						?"Я ищу работу"
						:"Я  не ищу работу"}</div>
				</div>
				<div className={s.lookingForAJobDescription}>{props.profile.lookingForAJobDescription}</div>
			</div>
		</div>
		<ProfileStatusWithHooks status={props.status} updateStatus = {props.updateStatus}/>
	</div>

}

export default ProfileInfo;