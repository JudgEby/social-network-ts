import React from 'react'
import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo'

type ProfilePT = {
  state: StatePT
  addPost: (postMessage: string) => void
}

type StatePT = {
  posts: Array<PostsPT>
}

type PostsPT = {
  id: number | string
  message: string
  likesCount: number
}

const Profile = ({ state: { posts }, addPost }: ProfilePT) => {
  return (
    <div className={s.content}>
      <ProfileInfo />
      <MyPosts posts={posts} addPost={addPost} />
    </div>
  )
}

export default Profile
