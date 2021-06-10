import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'

type MyPostsPT = {
  posts: Array<PostsPT>
  addPost: (postMessage: string) => void
}

type PostsPT = {
  id: number | string
  message: string
  likesCount: number
}

const MyPosts = ({ posts, addPost }: MyPostsPT) => {
  const postsElements = posts.map((post) => (
    <Post key={post.id} message={post.message} likesCount={post.likesCount} />
  ))

  const newPostElement: React.RefObject<HTMLTextAreaElement> = React.createRef()

  /*const addPost = () => {
    let text = newPostElement.current?.value
    console.log(text)
  }*/

  return (
    <div>
      <h3>My Posts</h3>
      <div>
        <textarea ref={newPostElement} />
        <div>
          <button
            onClick={() =>
              addPost(
                newPostElement.current ? newPostElement.current?.value : ''
              )
            }
          >
            Add Post
          </button>
        </div>
      </div>
      <div>
        <div>{postsElements}</div>
      </div>
    </div>
  )
}

export default MyPosts
