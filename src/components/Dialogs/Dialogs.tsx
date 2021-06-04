import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'

type DialogsPT = {
  state: SatePT
}

type SatePT = {
  dialogs: Array<DialogsFromPropsPT>
  messages: Array<MessagesPT>
}

type DialogsFromPropsPT = {
  id: number
  name: string
}

type MessagesPT = {
  id: number
  message: string
}

const Dialogs = ({ state: { dialogs, messages } }: DialogsPT) => {
  let dialogsElements = dialogs.map((dialog) => (
    <DialogItem key={dialog.id} name={dialog.name} id={dialog.id} />
  ))

  let messagesElements = messages.map((message) => (
    <Message key={message.id} message={message.message} id={message.id} />
  ))

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>{messagesElements}</div>
    </div>
  )
}

export default Dialogs
