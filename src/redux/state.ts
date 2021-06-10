export type RootStateType = {
  profilePage: ProfilePageType
  messagesPage: MessagesPageType
}

type ProfilePageType = {
  posts: PostType[]
}

type MessagesPageType = {
  dialogs: DialogsTypes[]
  messages: MessagesType[]
}

type PostType = {
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
}

export const addPost = (postMessage: string): void => {
  const newPost: PostType = { id: 3, message: postMessage, likesCount: 0 }
  state.profilePage.posts.push(newPost)
}

export default state
