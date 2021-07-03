import React, { ChangeEvent } from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'
import { DispatchType, PostType } from '../../../redux/state'
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from '../../../redux/profile-reducer'

type MyPostsPT = {
  posts: PostType[]
  dispatch: DispatchType
  postTextareaValue: string
}

const MyPosts = ({ posts, dispatch, postTextareaValue }: MyPostsPT) => {
  const postsElements = posts.map((post) => (
    <Post key={post.id} message={post.message} likesCount={post.likesCount} />
  ))

  const newPostElement: React.RefObject<HTMLTextAreaElement> = React.createRef()

  const addPost = () => {
    if (postTextareaValue) {
      dispatch(addPostActionCreator())
    }
  }

  const onTextareaChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(updateNewPostTextActionCreator(event.currentTarget.value))
    // updateNewPostTextCallback(event.currentTarget.value)
  }

  return (
    <div>
      <h3>My Posts</h3>
      <div>
        <textarea
          ref={newPostElement}
          onChange={onTextareaChangeHandler}
          value={postTextareaValue}
        />
        <div>
          <button onClick={() => addPost()}>Add Post</button>
        </div>
      </div>
      <div>
        <div>{postsElements}</div>
      </div>
    </div>
  )
}

export default MyPosts
