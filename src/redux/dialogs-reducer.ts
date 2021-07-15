import { v1 } from 'uuid'
import { ActionsType } from './redux-store'

export type DialogsPageType = {
  dialogs: DialogType[]
  messages: MessageType[]
  newMessageBody: string
}

export type DialogType = {
  id: string
  name: string
}

export type MessageType = {
  id: string
  message: string
}

export type SendMessageActionType = {
  type: 'SEND_MESSAGE'
}

export type UpdateNewMessageBodyActionType = {
  type: 'UPDATE_NEW_MESSAGE_BODY'
  payload: string
}

const initialState: DialogsPageType = {
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
}

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'

const dialogsReducer = (
  state: DialogsPageType = initialState,
  action: ActionsType
): DialogsPageType => {
  switch (action.type) {
    case SEND_MESSAGE:
      const newMessage = {
        id: v1(),
        message: state.newMessageBody,
      }
      return {
        ...state,
        messages: [...state.messages, newMessage],
        newMessageBody: '',
      }
    case UPDATE_NEW_MESSAGE_BODY:
      return { ...state, newMessageBody: action.payload }
    default:
      return state
  }
}

//action creators
export const sendMessageActionCreator = (): SendMessageActionType => {
  return { type: SEND_MESSAGE }
}

export const updateNewMessageBodyActionCreator = (
  payload: string
): UpdateNewMessageBodyActionType => {
  return { type: UPDATE_NEW_MESSAGE_BODY, payload: payload }
}

export default dialogsReducer
