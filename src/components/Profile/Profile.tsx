import React from 'react'
import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import { ProfilePageType } from '../../redux/state'

type ProfilePT = {
  profilePage: ProfilePageType
  addPost: () => void
  updateNewPostText: (text: string) => void
  postTextareaValue: string
}

const Profile = ({
  profilePage: { posts },
  addPost,
  updateNewPostText,
  postTextareaValue,
}: ProfilePT) => {
  return (
    <div className={s.content}>
      <ProfileInfo />
      <MyPosts
        posts={posts}
        addPostCallback={addPost}
        updateNewPostTextCallback={updateNewPostText}
        postTextareaValue={postTextareaValue}
      />
    </div>
  )
}

export default Profile
