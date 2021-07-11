import { v1 } from 'uuid'
import {
  ActionsType,
  DialogsPageType,
  MessagesType,
  SendMessageActionType,
  UpdateNewMessageBodyActionType,
} from './redux-store'

const initialState = {
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
) => {
  switch (action.type) {
    case SEND_MESSAGE:
      const newMessage: MessagesType = {
        id: v1(),
        message: state.newMessageBody,
      }
      state.messages.push(newMessage)
      state.newMessageBody = ''
      return state
    case UPDATE_NEW_MESSAGE_BODY:
      state.newMessageBody = action.payload
      return state
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
