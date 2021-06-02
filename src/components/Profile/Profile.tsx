import React from 'react'
import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = () => {
  let posts = [
    { id: 1, message: 'Hi! How are you?', likesCount: 15 },
    { id: 2, message: 'Hello! All is good!', likesCount: 10 },
  ]

  return (
    <div className={s.content}>
      <ProfileInfo />
      <MyPosts posts={posts} />
    </div>
  )
}

export default Profile
