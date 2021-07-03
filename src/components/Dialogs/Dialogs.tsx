import React, { ChangeEvent } from 'react'
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import { DispatchType } from '../../redux/state'
import {
  sendMessageActionCreator,
  updateNewMessageBodyActionCreator,
} from '../../redux/dialogs-reducer'

type DialogsPT = {
  state: SatePT
  dispatch: DispatchType
}

type SatePT = {
  dialogs: Array<DialogsFromPropsPT>
  messages: Array<MessagesPT>
  newMessageBody: string
}

type DialogsFromPropsPT = {
  id: number | string
  name: string
}

type MessagesPT = {
  id: number | string
  message: string
}

const Dialogs = ({
  state: { dialogs, messages, newMessageBody },
  dispatch,
}: DialogsPT) => {
  const dialogsElements = dialogs.map((dialog) => (
    <DialogItem key={dialog.id} name={dialog.name} id={dialog.id} />
  ))

  const messagesElements = messages.map((message) => (
    <Message key={message.id} message={message.message} id={message.id} />
  ))

  const onSendMessageClick = () => {
    if (newMessageBody) {
      dispatch(sendMessageActionCreator())
    }
  }

  const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(updateNewMessageBodyActionCreator(e.currentTarget.value))
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div>
        <div className={s.messages}>{messagesElements}</div>
        <textarea
          placeholder={'enter your message'}
          value={newMessageBody}
          onChange={onNewMessageChange}
        />
        <div>
          <button onClick={onSendMessageClick}>Send message</button>
        </div>
      </div>
    </div>
  )
}

export default Dialogs
