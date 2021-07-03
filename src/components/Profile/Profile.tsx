import React from 'react'
import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import { DispatchType, ProfilePageType } from '../../redux/state'

type ProfilePT = {
  profilePage: ProfilePageType
  dispatch: DispatchType
}

const Profile = ({
  profilePage: { posts, postTextareaValue },
  dispatch,
}: ProfilePT) => {
  return (
    <div className={s.content}>
      <ProfileInfo />
      <MyPosts
        posts={posts}
        dispatch={dispatch}
        postTextareaValue={postTextareaValue}
      />
    </div>
  )
}

export default Profile
