import React from 'react'
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from '../../../redux/profile-reducer'
import MyPosts from './MyPosts'
import StoreContext from '../../../StoreContext'

const MyPostsContainer = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        const state = store.getState()

        const addPost = () => {
          if (state.profilePage.postTextareaValue) {
            store.dispatch(addPostActionCreator())
          }
        }

        const onTextareaChangeHandler = (text: string) => {
          store.dispatch(updateNewPostTextActionCreator(text))
        }

        return (
          <MyPosts
            posts={state.profilePage.posts}
            updateNewPostText={onTextareaChangeHandler}
            addPost={addPost}
            postTextareaValue={state.profilePage.postTextareaValue}
          />
        )
      }}
    </StoreContext.Consumer>
  )
}

export default MyPostsContainer
