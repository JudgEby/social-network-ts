import { v1 } from 'uuid'
import {
  ActionsType,
  AddPostActionType,
  DialogsPageType,
  MessagesType,
  SendMessageActionType,
  UpdateNewMessageBodyActionType,
  UpdateNewPostTextActionType,
} from './state'

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'

const dialogsReducer = (state: DialogsPageType, action: ActionsType) => {
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
