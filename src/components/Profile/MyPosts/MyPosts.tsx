import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'

type MyPostsPT = {
  posts: Array<PostsPT>
}

type PostsPT = {
  id: number
  message: string
  likesCount: number
}

const MyPosts = ({ posts }: MyPostsPT) => {
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
