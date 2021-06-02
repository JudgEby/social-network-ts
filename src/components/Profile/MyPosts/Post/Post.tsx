import React from 'react'
import s from './Post.module.css'

type PropsType = {
  message: string
  likesCount: number
}

const Post = (props: PropsType) => {
  return (
    <div>
      <div className={s.item}>{props.message}</div>
      <div className={s.like}>{props.likesCount} likes</div>
    </div>
  )
}

export default Post
