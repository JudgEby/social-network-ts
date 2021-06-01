import React from 'react'
import s from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div>
        <a href='/profile'>Profile</a>
      </div>
      <div>
        <a href='/dialogs'>Messages</a>
      </div>
      <div>
        <a href='#'>News</a>
      </div>
      <div>
        <a href='#'>Music</a>
      </div>
      <div>
        <a href='#'>Settings</a>
      </div>
    </nav>
  )
}

export default Navbar
