import { combineReducers, createStore } from 'redux'
import profileReducer from './profile-reducer'
import dialogsReducer from './dialogs-reducer'

export type RootStateType = {
  profilePage: ProfilePageType
  dialogsPage: DialogsPageType
}

export type ProfilePageType = {
  posts: PostType[]
  postTextareaValue: string
}

export type DialogsPageType = {
  dialogs: DialogsTypes[]
  messages: MessagesType[]
  newMessageBody: string
}

export type PostType = {
  id: number | string
  message: string
  likesCount: number
}

export type DialogsTypes = {
  id: number | string
  name: string
}

export type MessagesType = {
  id: number | string
  message: string
}

export type AddPostActionType = {
  type: 'ADD_POST'
}

export type UpdateNewPostTextActionType = {
  type: 'UPDATE_NEW_POST_TEXT'
  payload: string
}

export type SendMessageActionType = {
  type: 'SEND_MESSAGE'
}

export type UpdateNewMessageBodyActionType = {
  type: 'UPDATE_NEW_MESSAGE_BODY'
  payload: string
}

export type ActionsType =
  | AddPostActionType
  | UpdateNewPostTextActionType
  | UpdateNewMessageBodyActionType
  | SendMessageActionType

const rootReducer = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
})

const store = createStore(rootReducer)

export default store
