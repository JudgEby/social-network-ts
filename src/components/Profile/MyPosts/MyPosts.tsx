import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = () => {
  let posts = [
    { id: 1, message: 'Hi! How are you?', likesCount: 15 },
    { id: 2, message: 'Hello! All is good!', likesCount: 10 },
  ]

  const postsElements = posts.map((post) => (
    <Post key={post.id} message={post.message} likesCount={post.likesCount} />
  ))

  return (
    <div>
      <div>
        My Posts
        <div className={s.posts}>New Post</div>
        <div>{postsElements}</div>
      </div>
    </div>
  )
}

export default MyPosts
