import React from 'react'
import s from './Header.module.css'

const Header = () => {
  return (
    <header className={s.header}>
      <img
        src='https://img1.freepng.ru/20180425/kte/kisspng-gray-wolf-logo-photography-wolf-logo-5ae014b8a3ca90.1625465715246348086709.jpg'
        alt='logo'
      />
    </header>
  )
}

export default Header
