import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Dialogs.module.css'

type DialogItemProps = {
  name: string
  id: number
}

type MessageProps = {
  message: string
  id: number
}

const DialogItem = ({ name, id }: DialogItemProps) => {
  return (
    <div className={s.dialog}>
      <NavLink to={`/dialogs/${id}`} activeClassName={s.active}>
        {name}
      </NavLink>
    </div>
  )
}

const Message = ({ message }: MessageProps) => {
  return <div className={s.message}>{message}</div>
}

const Dialogs = () => {
  let dialogs = [
    { id: 1, name: 'Yan' },
    { id: 2, name: 'Los' },
    { id: 3, name: 'Nadya' },
    { id: 4, name: 'Zhenya' },
    { id: 5, name: 'Mama' },
  ]

  let messages = [
    { id: 1, message: 'Hi' },
    { id: 2, message: 'London is a capital of Great Britain' },
    { id: 3, message: 'Hello! Yo!' },
  ]

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
