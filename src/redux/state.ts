import { v1 } from 'uuid'

//types
export type RootStateType = {
  profilePage: ProfilePageType
  messagesPage: MessagesPageType
  temp: TempType
}

type TempType = {
  postTextareaValue: string
}

export type ProfilePageType = {
  posts: PostType[]
}

type MessagesPageType = {
  dialogs: DialogsTypes[]
  messages: MessagesType[]
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

type MessagesType = {
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

export type DispatchType = (action: ActionsType) => void

export type ActionsType = AddPostActionType | UpdateNewPostTextActionType

//constants
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'
const ADD_POST = 'ADD_POST'

//store
let store: StoreType = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: 'Hi! How are you?', likesCount: 15 },
        { id: 2, message: 'Hello! All is good!', likesCount: 10 },
      ],
    },
    messagesPage: {
      dialogs: [
        { id: 1, name: 'Yan' },
        { id: 2, name: 'Los' },
        { id: 3, name: 'Nadya' },
        { id: 4, name: 'Zhenya' },
        { id: 5, name: 'Mama' },
      ],
      messages: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'London is a capital of Great Britain' },
        { id: 3, message: 'Hello! Yo!' },
      ],
    },
    temp: {
      postTextareaValue: '',
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
    switch (action.type) {
      case 'ADD_POST':
        const newPost: PostType = {
          id: v1(),
          message: this._state.temp.postTextareaValue,
          likesCount: 0,
        }
        this._state.profilePage.posts.push(newPost)
        this._state.temp.postTextareaValue = ''
        this._callSubscriber(this._state)
        break
      case 'UPDATE_NEW_POST_TEXT':
        this._state.temp.postTextareaValue = action.payload
        this._callSubscriber(this._state)
        break
    }
  },
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

export default store
