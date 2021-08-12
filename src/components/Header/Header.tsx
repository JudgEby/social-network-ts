import React from 'react'
import styles from './Header.module.css'
import wolPic from '../../images/wolf-logo.png'
import { NavLink } from 'react-router-dom'
import { AuthType } from '../../redux/auth-reducer'

const Header = (props: AuthType) => {
  const { id, login, email, isAuth } = props
  return (
    <header className={styles.header}>
      <img src={wolPic} alt='logo' />
      {isAuth ? <div>{login}</div> : <NavLink to='/login'>Login</NavLink>}
    </header>
  )
}

export default Header
