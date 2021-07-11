import { v1 } from 'uuid'
import {
  ActionsType,
  AddPostActionType,
  PostType,
  ProfilePageType,
  UpdateNewPostTextActionType,
} from './redux-store'

const initialState = {
  posts: [
    { id: v1(), message: 'Hi! How are you?', likesCount: 15 },
    { id: v1(), message: 'Hello! All is good!', likesCount: 10 },
  ],
  postTextareaValue: '',
}

const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'
const ADD_POST = 'ADD_POST'

const profileReducer = (
  state: ProfilePageType = initialState,
  action: ActionsType
) => {
  switch (action.type) {
    case ADD_POST:
      const newPost: PostType = {
        id: v1(),
        message: state.postTextareaValue,
        likesCount: 0,
      }
      state.posts.push(newPost)
      state.postTextareaValue = ''
      return state
    case UPDATE_NEW_POST_TEXT:
      state.postTextareaValue = action.payload
      return state
    default:
      return state
  }
}

//action creators
export const addPostActionCreator = (): AddPostActionType => {
  return { type: ADD_POST }
}

export const updateNewPostTextActionCreator = (
  payload: string
): UpdateNewPostTextActionType => {
  return { type: UPDATE_NEW_POST_TEXT, payload: payload }
}

export default profileReducer
