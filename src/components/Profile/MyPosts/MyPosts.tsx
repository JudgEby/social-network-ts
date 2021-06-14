import React, { ChangeEvent } from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'
import { PostType } from '../../../redux/state'

type MyPostsPT = {
  posts: PostType[]
  addPostCallback: () => void
  updateNewPostTextCallback: (text: string) => void
  postTextareaValue: string
}

const MyPosts = ({
  posts,
  addPostCallback,
  updateNewPostTextCallback,
  postTextareaValue,
}: MyPostsPT) => {
  const postsElements = posts.map((post) => (
    <Post key={post.id} message={post.message} likesCount={post.likesCount} />
  ))

  const newPostElement: React.RefObject<HTMLTextAreaElement> = React.createRef()

  const addPost = () => {
    if (postTextareaValue) {
      addPostCallback()
    }
  }

  const onTextareaChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
    updateNewPostTextCallback(event.currentTarget.value)
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
