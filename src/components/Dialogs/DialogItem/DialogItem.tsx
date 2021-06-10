import React from 'react'
import { NavLink } from 'react-router-dom'
import s from '../Dialogs.module.css'

type DialogItemProps = {
  name: string
  id: number | string
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

export default DialogItem
