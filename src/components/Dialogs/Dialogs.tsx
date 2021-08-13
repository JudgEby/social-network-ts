import React, { ChangeEvent } from 'react'
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'

type DialogsPT = {
  updateNewMessageBody: (text: string) => void
  newMessageBody: string
  sendMessage: () => void
  dialogs: DialogsFromPropsPT[]
  messages: MessagesPT[]
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
  updateNewMessageBody,
  newMessageBody,
  sendMessage,
  dialogs,
  messages,
}: DialogsPT) => {
  const dialogsElements = dialogs.map((dialog) => (
    <DialogItem key={dialog.id} name={dialog.name} id={dialog.id} />
  ))

  const messagesElements = messages.map((message) => (
    <Message key={message.id} message={message.message} id={message.id} />
  ))

  const onAddMessage = () => {
    sendMessage()
  }

  const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    updateNewMessageBody(e.currentTarget.value)
    //dispatch(updateNewMessageBodyActionCreator(e.currentTarget.value))
  }

  const a = 23
  const b = false
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
          <button onClick={onAddMessage}>Send message</button>
        </div>
        <div className={s.test}>{`Lox ${b && a + 3}`}</div>
      </div>
    </div>
  )
}

export default Dialogs
