import React from 'react'
import styles from './Header.module.css'
import wolPic from '../../assets/images/wolf-logo.png'
import { NavLink } from 'react-router-dom'
import { AuthType } from '../../redux/auth-reducer'

type HeaderType = {
	logout: () => void
}

const Header = (props: AuthType & HeaderType) => {
	const { login, isAuth, logout } = props

	return (
		<header className={styles.header}>
			<img src={wolPic} alt='logo' />
			{isAuth ? (
				<div>
					<span>{login}</span>
					<button onClick={logout}>Logout</button>
				</div>
			) : (
				<NavLink to='/login'>Login</NavLink>
			)}
		</header>
	)
}

export default Header
