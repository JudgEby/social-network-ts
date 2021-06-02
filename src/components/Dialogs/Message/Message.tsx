import React from 'react'
import s from '../Dialogs.module.css'

type MessageProps = {
  message: string
  id: number
}

const Message = ({ message }: MessageProps) => {
  return <div className={s.message}>{message}</div>
}
export default Message
