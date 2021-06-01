import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Dialogs.module.css'

const Dialogs = () => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItem}>
        <div className={s.dialog}>
          <NavLink to={'/dialogs/1'} activeClassName={s.active}>
            Yan
          </NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to={'/dialogs/2'} activeClassName={s.active}>
            Los
          </NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to={'/dialogs/3'} activeClassName={s.active}>
            Nadya
          </NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to={'/dialogs/4'} activeClassName={s.active}>
            Zhenya
          </NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to={'/dialogs/5'} activeClassName={s.active}>
            Mama
          </NavLink>
        </div>
      </div>
      <div className={s.messages}>
        <div className={s.message}>Hi</div>
        <div className={s.message}>London is a capital of Great Britain</div>
        <div className={s.message}>Hello! Yo!</div>
      </div>
    </div>
  )
}

export default Dialogs
