import React from 'react'
import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import MyPostsContainer from './MyPosts/MyPostsContainer'
import { UserProfileType } from '../../redux/profile-reducer'

type ProfileType = {
	profile: UserProfileType
	status: string
	updateUserStatus: (status: string) => void
}

const Profile = (props: ProfileType) => {
	const { profile, status, updateUserStatus } = props

	return (
		<div className={s.content}>
			<ProfileInfo
				profile={profile}
				status={status}
				updateUserStatus={updateUserStatus}
			/>
			<MyPostsContainer />
		</div>
	)
}

export default Profile
