import React, { ChangeEvent } from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'

type MyPostsPT = {
  posts: { id: string; message: string; likesCount: number }[]
  updateNewPostText: (text: string) => void
  addPost: () => void
  postTextareaValue: string
}

const MyPosts = ({
  posts,
  updateNewPostText,
  postTextareaValue,
  addPost,
}: MyPostsPT) => {
  const postsElements = posts.map((post) => (
    <Post key={post.id} message={post.message} likesCount={post.likesCount} />
  ))

  const onAddPost = () => {
    if (postTextareaValue) {
      updateNewPostText(postTextareaValue.trim()) //убираем пробелы в начале и конце
      addPost()
    }
  }

  const onAddPostChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    updateNewPostText(event.currentTarget.value)
  }

  return (
    <div>
      <h3>My Posts</h3>
      <div>
        <textarea onChange={onAddPostChange} value={postTextareaValue} />
        <div>
          <button onClick={() => onAddPost()}>Add Post</button>
        </div>
      </div>
      <div>
        <div>{postsElements}</div>
      </div>
    </div>
  )
}

export default MyPosts
