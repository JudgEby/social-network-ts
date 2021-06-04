import React from 'react'
import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo'

type ProfilePT = {
  state: StatePT
}

type StatePT = {
  posts: Array<PostsPT>
}

type PostsPT = {
  id: number
  message: string
  likesCount: number
}

const Profile = ({ state: { posts } }: ProfilePT) => {
  return (
    <div className={s.content}>
      <ProfileInfo />
      <MyPosts posts={posts} />
    </div>
  )
}

export default Profile
