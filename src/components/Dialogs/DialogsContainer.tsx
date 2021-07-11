import React from 'react'
import {
  sendMessageActionCreator,
  updateNewMessageBodyActionCreator,
} from '../../redux/dialogs-reducer'
import { Store } from 'redux'
import Dialogs from './Dialogs'
import StoreContext from '../../StoreContext'

type DialogsPT = {
  store: Store
}

const DialogsContainer = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        const state = store.getState()

        const onSendMessageClick = () => {
          if (state.dialogsPage.newMessageBody) {
            store.dispatch(sendMessageActionCreator())
          }
        }

        const onNewMessageChange = (text: string) => {
          store.dispatch(updateNewMessageBodyActionCreator(text))
        }

        return (
          <Dialogs
            dialogs={state.dialogsPage.dialogs}
            messages={state.dialogsPage.messages}
            updateNewMessageBody={onNewMessageChange}
            newMessageBody={state.dialogsPage.newMessageBody}
            sendMessage={onSendMessageClick}
          />
        )
      }}
    </StoreContext.Consumer>
  )
}

export default DialogsContainer
