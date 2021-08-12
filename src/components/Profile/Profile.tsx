import React from 'react'
import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import MyPostsContainer from './MyPosts/MyPostsContainer'
import { UserProfileType } from '../../redux/profile-reducer'

type ProfileType = {
  profile: UserProfileType
}

const Profile = (props: ProfileType) => {
  const { profile } = props

  return (
    <div className={s.content}>
      <ProfileInfo {...profile} />
      <MyPostsContainer />
    </div>
  )
}

export default Profile
