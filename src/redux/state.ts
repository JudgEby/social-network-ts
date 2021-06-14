let rerenderEntireTree = (state: RootStateType) => {
  console.log('State was changed')
}

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

let state: RootStateType = {
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
}

export const updateNewPostText = (textareaValue: string): void => {
  state.temp.postTextareaValue = textareaValue
  rerenderEntireTree(state)
}

export const addPost = (): void => {
  const newPost: PostType = {
    id: 3,
    message: state.temp.postTextareaValue,
    likesCount: 0,
  }
  state.profilePage.posts.push(newPost)
  state.temp.postTextareaValue = ''
  rerenderEntireTree(state)
}

export const subscribe = (observer: (state: RootStateType) => void) => {
  rerenderEntireTree = observer
}

export default state
