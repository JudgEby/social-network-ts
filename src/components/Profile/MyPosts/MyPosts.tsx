import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = () => {
  return (
    <div>
      <div>
        My Posts
        <div className={s.posts}>New Post</div>
        <div>
          <Post message={'Hi! How are you?'} likesCount={15} />
          <Post message={'Hello! All is good!'} likesCount={10} />
        </div>
      </div>
    </div>
  )
}

export default MyPosts
