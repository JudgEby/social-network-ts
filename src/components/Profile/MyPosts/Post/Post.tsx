import React from 'react'
import s from './Post.module.css'

type PostPT = {
  message: string
  likesCount: number
}

const Post = (props: PostPT) => {
  return (
    <div>
      <div className={s.item}>{props.message}</div>
      <div className={s.like}>{props.likesCount} likes</div>
    </div>
  )
}

export default Post
