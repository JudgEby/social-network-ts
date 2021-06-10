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
  id: number | string
  name: string
}

type MessagesPT = {
  id: number | string
  message: string
}

const Dialogs = ({ state: { dialogs, messages } }: DialogsPT) => {
  const dialogsElements = dialogs.map((dialog) => (
    <DialogItem key={dialog.id} name={dialog.name} id={dialog.id} />
  ))

  const messagesElements = messages.map((message) => (
    <Message key={message.id} message={message.message} id={message.id} />
  ))

  const newMessageElement = React.createRef<HTMLTextAreaElement>()

  const addPost = () => {
    let text = newMessageElement.current?.value
    console.log(text)
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div>
        <div className={s.messages}>{messagesElements}</div>
        <textarea ref={newMessageElement} />
        <div>
          <button onClick={addPost}>Add message</button>
        </div>
      </div>
    </div>
  )
}

export default Dialogs
