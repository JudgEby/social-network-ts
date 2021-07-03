import { v1 } from 'uuid'
import profileReducer from './profile-reducer'
import dialogsReducer from './dialogs-reducer'

//types
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

type DialogsTypes = {
  id: number | string
  name: string
}

export type MessagesType = {
  id: number | string
  message: string
}

export type StoreType = {
  _state: RootStateType
  _callSubscriber: (state: RootStateType) => void
  subscribe: (observer: (state: RootStateType) => void) => void
  getState: () => RootStateType
  dispatch: DispatchType
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

export type DispatchType = (action: ActionsType) => void

export type ActionsType =
  | AddPostActionType
  | UpdateNewPostTextActionType
  | UpdateNewMessageBodyActionType
  | SendMessageActionType

//store
let store: StoreType = {
  _state: {
    profilePage: {
      posts: [
        { id: v1(), message: 'Hi! How are you?', likesCount: 15 },
        { id: v1(), message: 'Hello! All is good!', likesCount: 10 },
      ],
      postTextareaValue: '',
    },
    dialogsPage: {
      dialogs: [
        { id: v1(), name: 'Yan' },
        { id: v1(), name: 'Los' },
        { id: v1(), name: 'Nadya' },
        { id: v1(), name: 'Zhenya' },
        { id: v1(), name: 'Mama' },
      ],
      messages: [
        { id: v1(), message: 'Hi' },
        { id: v1(), message: 'London is a capital of Great Britain' },
        { id: v1(), message: 'Hello! Yo!' },
      ],
      newMessageBody: '',
    },
  },

  _callSubscriber(state: RootStateType) {
    console.log('State was changed')
  },

  getState() {
    return this._state
  },
  subscribe(observer: (state: RootStateType) => void) {
    this._callSubscriber = observer
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
    this._callSubscriber(this._state)
  },
}

export default store
