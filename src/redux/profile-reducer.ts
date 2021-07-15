import { v1 } from 'uuid'
import { ActionsType } from './redux-store'

export type ProfilePageType = {
  posts: PostType[]
  postTextareaValue: string
}

export type PostType = {
  id: string
  message: string
  likesCount: number
}

export type AddPostActionType = {
  type: 'ADD_POST'
}

export type UpdateNewPostTextActionType = {
  type: 'UPDATE_NEW_POST_TEXT'
  payload: string
}

const initialState: ProfilePageType = {
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
): ProfilePageType => {
  switch (action.type) {
    case ADD_POST:
      const newPost = {
        id: v1(),
        message: state.postTextareaValue,
        likesCount: 0,
      }
      return {
        ...state,
        posts: [...state.posts, newPost],
        postTextareaValue: '',
      }
    case UPDATE_NEW_POST_TEXT:
      return { ...state, postTextareaValue: action.payload }
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
